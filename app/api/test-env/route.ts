import { NextResponse } from "next/server";

export async function GET() {
  try {
    const envCheck = {
      // Supabase
      SUPABASE_URL: !!process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: !!process.env.SUPABASE_ANON_KEY,
      
      // Google Sheets
      GOOGLE_SHEET_ID: !!process.env.GOOGLE_SHEET_ID,
      GOOGLE_SERVICE_ACCOUNT_EMAIL: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      GOOGLE_PRIVATE_KEY: !!process.env.GOOGLE_PRIVATE_KEY,
      
      // Zoho
      ZOHO_CLIENT_ID: !!process.env.ZOHO_CLIENT_ID,
      ZOHO_CLIENT_SECRET: !!process.env.ZOHO_CLIENT_SECRET,
      ZOHO_REFRESH_TOKEN: !!process.env.ZOHO_REFRESH_TOKEN,
      ZOHO_DOMAIN: process.env.ZOHO_DOMAIN || "NOT_SET",
      ZOHO_CREATOR_APP_NAME: process.env.ZOHO_CREATOR_APP_NAME || "NOT_SET",
      ZOHO_CREATOR_FORM_NAME: process.env.ZOHO_CREATOR_FORM_NAME || "NOT_SET",
      ZOHO_CREATOR_OWNER: process.env.ZOHO_CREATOR_OWNER || "NOT_SET",
      
      // Razorpay
      RAZORPAY_KEY_ID: !!process.env.RAZORPAY_KEY_ID,
      RAZORPAY_KEY_SECRET: !!process.env.RAZORPAY_KEY_SECRET,
    };

    const missingVars = Object.entries(envCheck)
      .filter(([key, value]) => !value)
      .map(([key]) => key);

    return NextResponse.json({
      success: true,
      environment: envCheck,
      missing: missingVars,
      total: Object.keys(envCheck).length,
      configured: Object.keys(envCheck).length - missingVars.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Environment check failed",
      },
      { status: 500 }
    );
  }
} 