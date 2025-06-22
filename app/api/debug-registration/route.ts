import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sheets } from "@/lib/google-sheets";
import { zohoService } from "@/lib/zoho-service";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { receiptId, ...registrationData } = formData;

    console.log("🔍 DEBUG: Starting registration inspection...");
    console.log("📨 Receipt ID:", receiptId);
    console.log("📋 Registration Data:", JSON.stringify(registrationData, null, 2));

    // Check environment variables
    const envCheck = {
      GOOGLE_SHEET_ID: !!process.env.GOOGLE_SHEET_ID,
      ZOHO_CLIENT_ID: !!process.env.ZOHO_CLIENT_ID,
      ZOHO_CLIENT_SECRET: !!process.env.ZOHO_CLIENT_SECRET,
      ZOHO_REFRESH_TOKEN: !!process.env.ZOHO_REFRESH_TOKEN,
      ZOHO_CREATOR_APP_NAME: process.env.ZOHO_CREATOR_APP_NAME || "NOT_SET",
      ZOHO_CREATOR_FORM_NAME: process.env.ZOHO_CREATOR_FORM_NAME || "NOT_SET",
      ZOHO_CREATOR_OWNER: process.env.ZOHO_CREATOR_OWNER || "NOT_SET",
      ZOHO_DOMAIN: process.env.ZOHO_DOMAIN || "NOT_SET",
    };

    console.log("🔧 Environment Variables Check:", envCheck);

    const results = {
      supabase: null as any,
      googleSheets: null as any,
      zoho: null as any,
      envCheck,
    };

    const errors: string[] = [];

    // 1. Test Supabase
    try {
      console.log("💾 Testing Supabase...");
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

      const { data: supabaseData, error: supabaseError } = await supabase
        .from("registrations")
        .insert([baseRegistrationRecord])
        .select();

      if (supabaseError) {
        throw new Error(`Supabase error: ${supabaseError.message}`);
      }

      results.supabase = supabaseData;
      console.log("✅ Supabase test successful:", supabaseData);
    } catch (error) {
      const errorMsg = `Supabase failed: ${error instanceof Error ? error.message : error}`;
      console.error("❌", errorMsg);
      errors.push(errorMsg);
    }

    // 2. Test Google Sheets
    try {
      console.log("📊 Testing Google Sheets...");
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;
      
      if (!spreadsheetId) {
        throw new Error("GOOGLE_SHEET_ID environment variable not set");
      }

      const range = "Registrations!A:Z";
      const rowData = [
        results.supabase?.[0]?.id || "NO_ID",
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

      console.log("📋 Google Sheets row data:", rowData);

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "RAW",
        requestBody: {
          values: [rowData],
        },
      });

      results.googleSheets = { success: true };
      console.log("✅ Google Sheets test successful");
    } catch (error) {
      const errorMsg = `Google Sheets failed: ${error instanceof Error ? error.message : error}`;
      console.error("❌", errorMsg);
      errors.push(errorMsg);
    }

    // 3. Test Zoho Creator
    try {
      console.log("🔧 Testing Zoho Creator...");
      
      // Test connection first
      const connectionValid = await zohoService.validateConnection();
      console.log("🔗 Zoho connection valid:", connectionValid);

      if (!connectionValid) {
        throw new Error("Zoho connection validation failed");
      }

      const zohoResult = await zohoService.createRegistration(
        registrationData,
        receiptId
      );

      if (!zohoResult.success) {
        throw new Error(zohoResult.error || "Unknown Zoho error");
      }

      results.zoho = zohoResult.data;
      console.log("✅ Zoho Creator test successful:", zohoResult.data);
    } catch (error) {
      const errorMsg = `Zoho Creator failed: ${error instanceof Error ? error.message : error}`;
      console.error("❌", errorMsg);
      errors.push(errorMsg);
    }

    // Summary
    const successCount = Object.values(results).filter(r => r !== null && r !== envCheck).length;
    const totalServices = 3;

    console.log("📊 DEBUG SUMMARY:");
    console.log(`- Supabase: ${results.supabase ? '✅' : '❌'}`);
    console.log(`- Google Sheets: ${results.googleSheets ? '✅' : '❌'}`);
    console.log(`- Zoho Creator: ${results.zoho ? '✅' : '❌'}`);
    console.log(`- Success Rate: ${successCount}/${totalServices}`);

    return NextResponse.json({
      success: successCount > 0,
      debug: {
        environment: envCheck,
        results: {
          supabase: !!results.supabase,
          googleSheets: !!results.googleSheets,
          zoho: !!results.zoho,
        },
        errors,
        successCount,
        totalServices,
        receiptId,
        registrationData: {
          firstName: registrationData.firstName,
          email: registrationData.email,
          mobileNumber: registrationData.mobileNumber,
        },
      },
    });

  } catch (error) {
    console.error("💥 DEBUG: Critical error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Debug failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
} 