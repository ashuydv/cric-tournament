import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    // Check if environment variables exist
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("Razorpay credentials missing");
      throw new Error("Razorpay credentials not configured");
    }

    // Initialize Razorpay inside the function (runtime, not build time)
    // const razorpay = new Razorpay({
    //   key_id: process.env.RAZORPAY_KEY_ID,
    //   key_secret: process.env.RAZORPAY_KEY_SECRET,
    // });

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Parse request body
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      console.error("Failed to parse request body:", parseError);
      return NextResponse.json(
        { success: false, error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { amount, currency = "INR", receipt, notes } = body;

    // Validate required fields
    if (!amount || amount <= 0) {
      console.error("Invalid amount:", amount);
      return NextResponse.json(
        { success: false, error: "Invalid amount" },
        { status: 400 }
      );
    }

    if (!receipt) {
      console.error("Missing receipt ID");
      return NextResponse.json(
        { success: false, error: "Receipt ID is required" },
        { status: 400 }
      );
    }

    console.log("Creating Razorpay order with params:", {
      amount: Math.round(amount * 100),
      currency,
      receipt,
      notes: { ...notes, source: "cricket-tournament-registration" }
    });

    // Create payment order
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // Convert to paise
      currency,
      receipt,
      notes: {
        ...notes,
        source: "cricket-tournament-registration",
      },
    });

    console.log("Razorpay order created successfully:", order.id);

    // Return success response
    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
        status: order.status,
        key: process.env.RAZORPAY_KEY_ID,
      },
    });

  } catch (error: any) {
    console.error("Payment creation error:", error);

    // Handle specific error cases
    if (error.error) {
      // Razorpay specific errors
      const razorpayError = error.error;
      console.error("Razorpay API error:", razorpayError);
      return NextResponse.json(
        {
          success: false,
          error: razorpayError.description || "Payment creation failed",
          code: razorpayError.code,
        },
        { status: 400 }
      );
    }

    // Handle validation errors
    if (error.message === "Razorpay credentials not configured") {
      console.error("Razorpay credentials not configured");
      return NextResponse.json(
        { success: false, error: "Payment service not configured" },
        { status: 500 }
      );
    }

    // Handle other errors
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}