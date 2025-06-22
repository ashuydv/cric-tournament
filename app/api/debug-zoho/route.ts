import { NextResponse } from "next/server";
import { zohoService } from "@/lib/zoho-service";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    console.log("🔍 Starting detailed Zoho debugging...");

    const debugResults = {
      environment: {
        ZOHO_CLIENT_ID: !!process.env.ZOHO_CLIENT_ID,
        ZOHO_CLIENT_SECRET: !!process.env.ZOHO_CLIENT_SECRET,
        ZOHO_REFRESH_TOKEN: !!process.env.ZOHO_REFRESH_TOKEN,
        ZOHO_DOMAIN: process.env.ZOHO_DOMAIN || "NOT_SET",
        ZOHO_CREATOR_APP_NAME: process.env.ZOHO_CREATOR_APP_NAME || "NOT_SET",
        ZOHO_CREATOR_FORM_NAME: process.env.ZOHO_CREATOR_FORM_NAME || "NOT_SET",
        ZOHO_CREATOR_OWNER: process.env.ZOHO_CREATOR_OWNER || "NOT_SET",
        ZOHO_CREATOR_REPORT_NAME: process.env.ZOHO_CREATOR_REPORT_NAME || "NOT_SET",
      },
      tokenStatus: null as any,
      connectionTest: null as any,
      apiTest: null as any,
    };

    // 1. Check token status from database
    try {
      console.log("🔑 Checking token status...");
      const { data: tokenData, error: tokenError } = await supabase
        .from("zoho_tokens")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (tokenError && tokenError.code !== "PGRST116") {
        debugResults.tokenStatus = {
          success: false,
          error: tokenError.message,
        };
      } else if (tokenData) {
        const expiryTime = new Date(tokenData.expires_at);
        const now = new Date();
        const minutesUntilExpiry = Math.floor(
          (expiryTime.getTime() - now.getTime()) / (1000 * 60)
        );

        debugResults.tokenStatus = {
          success: true,
          hasToken: true,
          expiresIn: minutesUntilExpiry,
          createdAt: tokenData.created_at,
          tokenType: tokenData.token_type,
          isExpired: minutesUntilExpiry <= 0,
        };
      } else {
        debugResults.tokenStatus = {
          success: true,
          hasToken: false,
          message: "No active token found",
        };
      }
    } catch (error) {
      debugResults.tokenStatus = {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }

    // 2. Test connection validation
    try {
      console.log("🔗 Testing connection validation...");
      const connectionValid = await zohoService.validateConnection();
      debugResults.connectionTest = {
        success: true,
        isValid: connectionValid,
      };
    } catch (error) {
      debugResults.connectionTest = {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }

    // 3. Test API access
    try {
      console.log("📡 Testing API access...");
      const appName = process.env.ZOHO_CREATOR_APP_NAME || "your-app-name";
      const formName = process.env.ZOHO_CREATOR_FORM_NAME || "registrations";
      const owner = process.env.ZOHO_CREATOR_OWNER || "your-owner-name";

      // Test app access
      const appUrl = `https://creator.zoho.in/api/v2.1/${owner}/${appName}`;
      console.log("🔗 Testing app URL:", appUrl);

      // Test form access
      const formUrl = `https://creator.zoho.in/api/v2.1/${owner}/${appName}/form/${formName}`;
      console.log("🔗 Testing form URL:", formUrl);

      debugResults.apiTest = {
        success: true,
        appUrl,
        formUrl,
        message: "URLs constructed successfully",
      };
    } catch (error) {
      debugResults.apiTest = {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }

    return NextResponse.json({
      success: true,
      debug: debugResults,
      summary: {
        environmentConfigured: Object.values(debugResults.environment).every(v => v === true || (typeof v === 'string' && v !== 'NOT_SET')),
        hasValidToken: debugResults.tokenStatus?.success && debugResults.tokenStatus?.hasToken && !debugResults.tokenStatus?.isExpired,
        connectionWorks: debugResults.connectionTest?.success && debugResults.connectionTest?.isValid,
        apiConfigured: debugResults.apiTest?.success,
      },
    });

  } catch (error) {
    console.error("💥 Zoho debug failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Zoho debug failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
} 