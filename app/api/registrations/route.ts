// app/api/registrations/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sheets } from "@/lib/google-sheets";
import { zohoService } from "@/lib/zoho-service";
import { ZohoRegistrationData } from "@/app/types/zoho";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { receiptId, ...registrationData } = formData;

    console.log("📝 Processing new registration...");

    // Prepare the base registration record
    const baseRegistrationRecord = {
      first_name: registrationData.firstName,
      middle_name: registrationData.middleName,
      surname: registrationData.surname,
      mobile_number: registrationData.mobileNumber,
      date_of_birth: registrationData.dateOfBirth,
      email: registrationData.email,
      address: registrationData.address,
      referral_code: registrationData.referralCode,
      state: registrationData.state,
      trial_city: registrationData.trialCity,
      trial_zone: registrationData.trialZone,
      playing_roles: registrationData.playingRoles,
      batting_handedness: registrationData.battingHandedness,
      preferred_bowling_style: registrationData.preferredBowlingStyle,
      preferred_batting_order: registrationData.preferredBattingOrder,
      tshirt_size: registrationData.tshirtSizes,
      disclaimer_accepted: registrationData.disclaimerAccepted,
      receipt_id: receiptId,
      payment_status: "pending",
      created_at: new Date().toISOString(),
    };

    // Store results for each service
    const results = {
      supabase: null as any,
      googleSheets: null as any,
      zoho: null as any,
    };

    const errors: string[] = [];

    // 1. Save to Supabase (Primary database)
    try {
      console.log("💾 Saving to Supabase...");
      const { data: supabaseData, error: supabaseError } = await supabase
        .from("registrations")
        .insert([baseRegistrationRecord])
        .select();

      if (supabaseError) {
        throw new Error(`Supabase error: ${supabaseError.message}`);
      }

      results.supabase = supabaseData;
      console.log("✅ Supabase save successful");
    } catch (error) {
      const errorMsg = `Supabase failed: ${error instanceof Error ? error.message : error
        }`;
      console.error("❌", errorMsg);
      errors.push(errorMsg);
    }

    const newRegistrationId = results.supabase?.[0]?.id || "";

    // 2. Save to Google Sheets
    try {
      console.log("📊 Saving to Google Sheets...");
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;
      const range = "Registrations!A:Z";

      const rowData = [
        newRegistrationId,
        registrationData.firstName,
        registrationData.middleName,
        registrationData.surname,
        registrationData.mobileNumber,
        registrationData.dateOfBirth,
        registrationData.email,
        registrationData.address,
        registrationData.referralCode,
        registrationData.state,
        registrationData.trialCity,
        registrationData.trialZone,
        registrationData.playingRoles,
        registrationData.battingHandedness,
        registrationData.preferredBowlingStyle,
        registrationData.preferredBattingOrder,
        registrationData.tshirtSizes,
        registrationData.disclaimerAccepted,
        receiptId,
        new Date().toISOString(),
        "pending",
        "",
        "",
        "",
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "RAW",
        requestBody: {
          values: [rowData],
        },
      });

      results.googleSheets = { success: true };
      console.log("✅ Google Sheets save successful");
    } catch (error) {
      const errorMsg = `Google Sheets failed: ${error instanceof Error ? error.message : error
        }`;
      console.error("❌", errorMsg);
      errors.push(errorMsg);
    }

    // 3. Save to Zoho Creator
    try {
      console.log("🔧 Saving to Zoho Creator...");

      // Format date for Zoho (DD-MMM-YYYY format)
      const formatDateForZoho = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = date.toLocaleDateString("en-US", { month: "short" });
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      };

      // Format datetime for Zoho (DD-MMM-YYYY HH:mm:ss format)
      const formatDateTimeForZoho = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = date.toLocaleDateString("en-US", { month: "short" });
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
      };

      const currentDateTime = new Date().toISOString();

      // Convert registrationData to ZohoRegistrationData type
      const zohoRegistrationData: ZohoRegistrationData = {
        First_Name: registrationData.firstName,
        Middle_Name: registrationData.middleName || "",
        Surname: registrationData.surname,
        Mobile_Number: registrationData.mobileNumber,
        Date_of_Birth: formatDateForZoho(registrationData.dateOfBirth),
        Email: registrationData.email,
        Address: registrationData.address,
        Referral_Code: registrationData.referralCode || "",
        State: registrationData.state,
        Trial_City: registrationData.trialCity,
        Trial_Zone: registrationData.trialZone,
        Playing_Roles: registrationData.playingRoles,
        Batting_Handedness: registrationData.battingHandedness,
        Preferred_Bowling_Style: registrationData.preferredBowlingStyle,
        Preferred_Batting_Order: registrationData.preferredBattingOrder,
        T_Shirt_Size: registrationData.tshirtSizes,
        Disclaimer_Accepted: registrationData.disclaimerAccepted,
        Receipt_ID: receiptId,
        Payment_Status: "Pending",
        Payment_ID: "",
        Error_Code: null,
        Error_Description: null,
        Created_At: formatDateTimeForZoho(currentDateTime),
        Updated_At: formatDateTimeForZoho(currentDateTime),
      };

      console.log("register_json_data", zohoRegistrationData, receiptId);

      const zohoResult = await zohoService.createRegistration(
        zohoRegistrationData,
        receiptId
      );

      if (!zohoResult.success) {
        throw new Error(zohoResult.error || "Unknown Zoho error");
      }

      results.zoho = zohoResult.data;
      console.log("✅ Zoho Creator save successful", results.zoho);
    } catch (error) {
      const errorMsg = `Zoho Creator failed: ${error instanceof Error ? error.message : error
        }`;
      console.error("❌", errorMsg);
      errors.push(errorMsg);
    }

    // Determine response based on results
    const successCount = Object.values(results).filter(
      (r) => r !== null
    ).length;
    const totalServices = 3;

    if (successCount === 0) {
      // All failed - critical error
      return NextResponse.json(
        {
          success: false,
          error: "All services failed",
          details: errors,
        },
        { status: 500 }
      );
    } else if (errors.length > 0) {
      // Partial success - log warnings but return success
      console.warn(
        `⚠️ ${errors.length}/${totalServices} services failed:`,
        errors
      );

      return NextResponse.json({
        success: true,
        data: results.supabase, // Primary data source
        warnings: errors,
        services: {
          supabase: !!results.supabase,
          googleSheets: !!results.googleSheets,
          zoho: !!results.zoho,
        },
      });
    } else {
      // Complete success
      console.log("🎉 All services completed successfully");

      return NextResponse.json({
        success: true,
        data: results,
        services: {
          supabase: true,
          googleSheets: true,
          zoho: true,
        },
      });
    }
  } catch (error) {
    console.error("💥 Critical registration error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Registration failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const {
      receiptId,
      paymentStatus,
      paymentId,
      error_code,
      error_description,
    } = await request.json();

    console.log("🔄 Processing payment status update...");
    console.log("📨 Receipt ID:", receiptId, "Status:", paymentStatus);

    const errors: string[] = [];
    const results = {
      supabase: false,
      googleSheets: false,
      zoho: false,
    };

    // 1. Update Supabase
    try {
      console.log("💾 Updating Supabase...");
      const { error: supabaseError } = await supabase
        .from("registrations")
        .update({
          payment_status: paymentStatus,
          payment_id: paymentId,
          error_code,
          error_description,
          updated_at: new Date().toISOString(),
        })
        .eq("receipt_id", receiptId);

      if (supabaseError) {
        throw new Error(`Supabase error: ${supabaseError.message}`);
      }

      results.supabase = true;
      console.log("✅ Supabase update successful");
    } catch (error) {
      const errorMsg = `Supabase update failed: ${error instanceof Error ? error.message : error
        }`;
      console.error("❌", errorMsg);
      errors.push(errorMsg);
    }

    // 2. Update Google Sheets
    try {
      console.log("📊 Updating Google Sheets...");
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;
      const range = "Registrations!A:Z";

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });

      const rows = response.data.values || [];
      const rowIndex = rows.findIndex((row) => row[18] === receiptId); // receiptId column

      if (rowIndex !== -1) {
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `Registrations!S${rowIndex + 1}`,
          valueInputOption: "RAW",
          requestBody: {
            values: [
              [
                paymentStatus,
                paymentId || "",
                error_code || "",
                error_description || "",
                new Date().toISOString(),
              ],
            ],
          },
        });

        results.googleSheets = true;
        console.log("✅ Google Sheets update successful");
      } else {
        throw new Error(`Receipt ID ${receiptId} not found in Google Sheets`);
      }
    } catch (error) {
      const errorMsg = `Google Sheets update failed: ${error instanceof Error ? error.message : error
        }`;
      console.error("❌", errorMsg);
      errors.push(errorMsg);
    }

    // Determine response
    const successCount = Object.values(results).filter(Boolean).length;
    const totalServices = 3;

    if (successCount === 0) {
      console.error("💥 All update services failed!");
      return NextResponse.json(
        {
          success: false,
          message: "All update services failed",
          errors: errors,
          timestamp: new Date().toISOString(),
        },
        { status: 500 }
      );
    } else if (errors.length > 0) {
      console.warn(
        `⚠️ ${errors.length}/${totalServices} update services failed:`,
        errors
      );
      return NextResponse.json({
        success: true,
        message: `Payment status updated in ${successCount}/${totalServices} services`,
        warnings: errors,
        services: results,
        timestamp: new Date().toISOString(),
      });
    } else {
      console.log("🎉 All update services completed successfully!");
      return NextResponse.json({
        success: true,
        message: "Payment status updated successfully in all services",
        services: results,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.error("💥 Critical update error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Critical error during payment status update",
        error: error instanceof Error ? error.message : "Update failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    console.log("🔄 Processing PATCH request with body:", body);

    const { ID, Payment_Status } = body;

    // Validate required fields
    if (!ID || !Payment_Status) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: ID and Payment_Status are required.",
        },
        { status: 400 }
      );
    }

    console.log(
      `🔧 Updating payment status for Zoho record ID: ${ID} to ${Payment_Status}`
    );

    // Use the zohoService for better abstraction and error handling
    const result = await zohoService.updatePaymentStatusByRecordId(
      ID,
      Payment_Status
    );

    if (!result.success) {
      // Handle different types of errors appropriately
      const statusCode = result.error?.includes("not found")
        ? 404
        : result.error?.includes("unauthorized")
          ? 401
          : result.error?.includes("forbidden")
            ? 403
            : result.error?.includes("INVALID_SCOPE")
              ? 403
              : 500;

      return NextResponse.json(
        {
          success: false,
          error: result.error,
          timestamp: new Date().toISOString(),
        },
        { status: statusCode }
      );
    }

    console.log("✅ Zoho payment status update successful");

    return NextResponse.json({
      success: true,
      data: result.data,
      message: `Payment status successfully updated to ${Payment_Status} for record ${ID}`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("💥 PATCH request error:", error);

    // Don't expose internal error details in production
    const isDevelopment = process.env.NODE_ENV === "development";
    const errorMessage =
      isDevelopment && error instanceof Error
        ? error.message
        : "Internal server error";

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const zohoRecordId = searchParams.get("zohoRecordId");
    if (zohoRecordId) {
      const result = await zohoService.getRecordById(zohoRecordId);
      if (!result.success) {
        return NextResponse.json(
          { success: false, error: result.error },
          { status: 500 }
        );
      }
      return NextResponse.json({ success: true, data: result.data });
    } else {
      // No zohoRecordId, return all records
      const result = await zohoService.getAllRecords();
      if (!result.success) {
        return NextResponse.json(
          { success: false, error: result.error },
          { status: 500 }
        );
      }
      return NextResponse.json({ success: true, data: result.data });
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
