import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    console.log("body", body);

    const { ID, Payment_Status } = body;

    if (!ID || !Payment_Status) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: ID and Payment_Status are required.",
        },
        { status: 400 }
      );
    }

    // Zoho Creator API endpoint
    const zohoEndpoint = `https://creator.zoho.in/api/v2/lakshgyapathtradingprivateli/runbhumi-api/report/All_Registrations/${ID}`;

    // Prepare the data payload in Zoho's expected format
    const zohoPayload = {
      data: {
        ID: ID,
        Payment_Status: Payment_Status,
      },
    };

    // Get access token from environment variables
    const accessToken = process.env.ZOHO_ACCESS_TOKEN;

    if (!accessToken) {
      return NextResponse.json(
        { success: false, error: "Zoho access token not configured" },
        { status: 500 }
      );
    }

    // Make PATCH request to Zoho Creator API
    const zohoResponse = await fetch(zohoEndpoint, {
      method: "PATCH",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zohoPayload),
    });

    if (!zohoResponse.ok) {
      const errorData = await zohoResponse.text();
      console.error("Zoho API Error:", errorData);
      return NextResponse.json(
        {
          success: false,
          error: `Zoho API error: ${zohoResponse.status} - ${errorData}`,
        },
        { status: zohoResponse.status }
      );
    }

    const result = await zohoResponse.json();
    console.log("Zoho API Response:", result);

    return NextResponse.json({
      success: true,
      data: result,
      message: `Payment status updated to ${Payment_Status} for record ${ID}`,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
