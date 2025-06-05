import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    // Check if environment variables exist
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      throw new Error("Razorpay credentials not configured");
    }

    // Initialize Razorpay inside the function (runtime, not build time)
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Parse request body
    const body = await req.json();
    const { amount, currency = "INR", receipt, notes } = body;

    // Validate required fields
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    if (!receipt) {
      return NextResponse.json(
        { error: "Receipt ID is required" },
        { status: 400 }
      );
    }

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
      return NextResponse.json(
        { success: false, error: "Payment service not configured" },
        { status: 500 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}