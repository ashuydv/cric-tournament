import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const data = await request.json();

    console.log("Received registration data:", data);

    // Insert registration data into the registrations tables
    const { data: registration, error } = await supabase
      .from("registrations")
      .insert([
        {
          first_name: data.firstName,
          middle_name: data.middleName,
          surname: data.surname,
          mobile_number: data.mobileNumber,
          date_of_birth: data.dateOfBirth,
          email: data.email,
          state: data.state,
          trial_city: data.trialCity,
          trial_zone: data.trialZone,
          playing_roles: data.playingRoles,
          batting_handedness: data.battingHandedness,
          preferred_bowling_style: data.preferredBowlingStyle,
          preferred_batting_order: data.preferredBattingOrder,
          tshirt_size: data.tshirtSizes,
          payment_status: "pending",
          payment_id: data.paymentId,
          receipt_id: data.receiptId,
          disclaimer_accepted: data.disclaimerAccepted,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error inserting registration:", error);
      return NextResponse.json(
        { error: `Failed to save registration data: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, registration });
  } catch (error) {
    console.error("Error in registration:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const data = await request.json();

    // Update payment status
    const { error } = await supabase
      .from("registrations")
      .update({
        payment_status: data.paymentStatus,
        payment_id: data.paymentId,
        error_code: data.error_code,
        error_description: data.error_description,
        updated_at: new Date().toISOString(),
      })
      .eq("receipt_id", data.receiptId);

    if (error) {
      console.error("Error updating payment status:", error);
      return NextResponse.json(
        { error: `Failed to update payment status: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating payment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
