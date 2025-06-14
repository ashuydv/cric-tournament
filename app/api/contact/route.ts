import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sheets } from "@/lib/google-sheets";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // 1. Save to Supabase
    const { data: supabaseData, error: supabaseError } = await supabase
      .from("contact_messages") // Use a new table for contact messages
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          inquiry_type: formData.inquiryType,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (supabaseError) {
      throw new Error(`Supabase error: ${supabaseError.message}`);
    }

    // 2. Save to Google Sheets
    const spreadsheetId = process.env.GOOGLE_SHEET_ID; // Now uses the same env variable as registrations
    const range = "Contact Messages!A:Z"; // Targets the 'Contact Messages' tab

    // Prepare row data for contact messages
    const rowData = [
      new Date().toISOString(),
      formData.name,
      formData.email,
      formData.phone,
      formData.subject,
      formData.message,
      formData.inquiryType,
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
    console.error("Contact message submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to send message",
      },
      { status: 500 }
    );
  }
}
