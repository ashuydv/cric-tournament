import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      return NextResponse.json({
        success: false,
        error: `OAuth error: ${error}`,
      });
    }

    if (!code) {
      return NextResponse.json({
        success: false,
        error: "No authorization code received",
      });
    }

    // Exchange code for tokens
    const tokenResponse = await fetch('https://accounts.zoho.in/oauth/v2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code: code,
        client_id: process.env.ZOHO_CLIENT_ID || '',
        client_secret: process.env.ZOHO_CLIENT_SECRET || '',
        redirect_uri: 'http://localhost:3000/api/zoho-callback',
        grant_type: 'authorization_code',
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      return NextResponse.json({
        success: false,
        error: `Token exchange failed: ${tokenResponse.status} - ${errorText}`,
      });
    }

    const tokenData = await tokenResponse.json();

    return NextResponse.json({
      success: true,
      message: "Token generated successfully!",
      tokens: {
        access_token: tokenData.access_token,
        refresh_token: tokenData.refresh_token,
        expires_in: tokenData.expires_in,
        token_type: tokenData.token_type,
      },
      instructions: [
        "1. Copy the refresh_token value above",
        "2. Update your ZOHO_REFRESH_TOKEN environment variable",
        "3. Restart your development server",
        "4. Test the connection at /api/debug-zoho",
      ],
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Token generation failed",
    });
  }
} 