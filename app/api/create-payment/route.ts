import { NextResponse } from "next/server";
import Razorpay from "razorpay";

// Initialize Razorpay with environment-specific keys
const razorpay = new Razorpay({
  key_id: process.env.NODE_ENV === 'production' 
    ? process.env.RAZORPAY_KEY_ID! 
    : process.env.RAZORPAY_TEST_KEY_ID!,
  key_secret: process.env.NODE_ENV === 'production'
    ? process.env.RAZORPAY_KEY_SECRET!
    : process.env.RAZORPAY_TEST_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
    console.log("Creating payment order...");
    console.log("Environment:", process.env.NODE_ENV);
    console.log("Using key_id:", process.env.NODE_ENV === 'production' 
      ? process.env.RAZORPAY_KEY_ID 
      : process.env.RAZORPAY_TEST_KEY_ID);

    const body = await req.json();
    const { amount, currency = "INR" } = body;

    if (!amount) {
      throw new Error("Amount is required");
    }

    // Create a Razorpay order
    const order = await razorpay.orders.create({
      amount: amount * 100, // amount in smallest currency unit (paise for INR)
      currency,
      receipt: `receipt_${Date.now()}`,
    });

    console.log("Order created successfully:", order);

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error creating payment:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to create payment",
        details: error
      },
      { status: 500 }
    );
  }
} 