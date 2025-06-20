import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sheets } from "@/lib/google-sheets";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { receiptId, ...registrationData } = formData;

    // 1. Save to Supabase
    const { data: supabaseData, error: supabaseError } = await supabase
      .from("registrations")
      .insert([
        {
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
        },
      ])
      .select();

    if (supabaseError) {
      throw new Error(`Supabase error: ${supabaseError.message}`);
    }

    const newRegistrationId = supabaseData?.[0]?.id || "";

    // 2. Save to Google Sheets
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = "Registrations!A:Z";

    // Prepare row data with all fields, including new ones and placeholders for PUT updates
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

    return NextResponse.json({
      success: true,
      data: supabaseData,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Registration failed",
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

    // 1. Update Supabase
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

    // 2. Update Google Sheets
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = "Registrations!A:Z";

    // Find the row with matching receipt ID and update payment status, ID, etc.
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values || [];
    // receiptId is at index 16 (Column Q) in the appended rowData now
    const rowIndex = rows.findIndex((row) => row[16] === receiptId);

    if (rowIndex !== -1) {
      // Update columns starting from Payment Status (index 18, Column S)
      // and include Payment ID, Error Code, Error Description, Updated At
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `Registrations!S${rowIndex + 1}`, // Update starts from Payment Status column (S)
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              paymentStatus,
              paymentId || "", // Use empty string if null
              error_code || "", // Use empty string if null
              error_description || "", // Use empty string if null
              new Date().toISOString(), // Updated At
            ],
          ],
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Update failed",
      },
      { status: 500 }
    );
  }
}
