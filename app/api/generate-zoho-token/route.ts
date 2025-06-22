import { NextResponse } from "next/server";

export async function GET() {
  try {
    const clientId = process.env.ZOHO_CLIENT_ID;

    if (!clientId) {
      return NextResponse.json({
        success: false,
        error: "ZOHO_CLIENT_ID environment variable not set",
      });
    }

    // Generate the OAuth authorization URL
    const authUrl = new URL("https://accounts.zoho.in/oauth/v2/auth");
    authUrl.searchParams.set(
      "scope",
      "ZohoCreator.forms.ALL,ZohoCreator.reports.ALL,ZohoCreator.meta.ALL"
    );
    authUrl.searchParams.set("client_id", clientId);
    authUrl.searchParams.set("response_type", "code");
    authUrl.searchParams.set("access_type", "offline");
    authUrl.searchParams.set(
      "redirect_uri",
      "http://localhost:3000/api/zoho-callback"
    );

    return NextResponse.json({
      success: true,
      authUrl: authUrl.toString(),
      instructions: [
        "1. Click the authUrl above or copy it to your browser",
        "2. Authorize the application in Zoho",
        "3. You'll be redirected to /api/zoho-callback",
        "4. Copy the refresh_token from the response",
        "5. Update your ZOHO_REFRESH_TOKEN environment variable",
        "6. Restart your development server",
      ],
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to generate auth URL",
    });
  }
}
