import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    // Check if environment variables exist
    if (
      !process.env.RAZORPAY_KEY_ID ||
      !process.env.RAZORPAY_KEY_SECRET
    ) {
      console.error("Razorpay credentials missing");
      return NextResponse.json(
        { success: false, error: "Payment service not configured" },
        { status: 500 }
      );
    }

    // Initialize Razorpay with proper error handling
    let razorpay: Razorpay;
    try {
      razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });
    } catch (initError) {
      console.error("Failed to initialize Razorpay:", initError);
      return NextResponse.json(
        { success: false, error: "Payment service initialization failed" },
        { status: 500 }
      );
    }

    // Parse request body with better error handling
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      console.error("Failed to parse request body:", parseError);
      return NextResponse.json(
        { success: false, error: "Invalid request body format" },
        { status: 400 }
      );
    }

    const { amount, currency = "INR", receipt, notes } = body;

    // Enhanced validation
    if (!amount || typeof amount !== "number" || amount <= 0) {
      console.error("Invalid amount:", amount);
      return NextResponse.json(
        { success: false, error: "Amount must be a positive number" },
        { status: 400 }
      );
    }

    if (!receipt || typeof receipt !== "string" || receipt.trim() === "") {
      console.error("Invalid receipt ID:", receipt);
      return NextResponse.json(
        { success: false, error: "Valid receipt ID is required" },
        { status: 400 }
      );
    }

    // Validate currency
    if (currency !== "INR") {
      console.error("Invalid currency:", currency);
      return NextResponse.json(
        { success: false, error: "Only INR currency is supported" },
        { status: 400 }
      );
    }

    // Ensure amount is in paise and is an integer
    const amountInPaise = Math.round(Number(amount));

    // Minimum amount validation (Razorpay minimum is 100 paise = 1 INR)
    if (amountInPaise < 100) {
      console.error("Amount too small:", amountInPaise);
      return NextResponse.json(
        { success: false, error: "Minimum amount is ₹1" },
        { status: 400 }
      );
    }

    const orderParams = {
      amount: amountInPaise,
      currency,
      receipt: receipt.trim(),
      notes: {
        ...notes,
        source: "cricket-tournament-registration",
        timestamp: new Date().toISOString(),
      },
    };

    console.log("Creating Razorpay order with params:", {
      ...orderParams,
      notes: { ...orderParams.notes, playerName: notes?.playerName || "N/A" },
    });

    // Create payment order with timeout handling
    let order;
    try {
      // Add timeout wrapper for Razorpay API call
      const createOrderPromise = razorpay.orders.create(orderParams);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout")), 10000)
      );

      order = await Promise.race([createOrderPromise, timeoutPromise]);
    } catch (razorpayError: any) {
      console.error("Razorpay order creation failed:", razorpayError);

      // Handle specific Razorpay errors
      if (razorpayError.error) {
        const errorCode = razorpayError.error.code;
        const errorDescription = razorpayError.error.description;

        console.error("Razorpay API error:", {
          code: errorCode,
          description: errorDescription,
        });

        // Map common error codes to user-friendly messages
        let userMessage = "Payment order creation failed";
        switch (errorCode) {
          case "BAD_REQUEST_ERROR":
            userMessage = "Invalid payment details provided";
            break;
          case "UNAUTHORIZED":
            userMessage = "Payment service authentication failed";
            break;
          case "RATE_LIMIT_ERROR":
            userMessage = "Too many requests. Please try again later";
            break;
          default:
            userMessage = errorDescription || "Payment order creation failed";
        }

        return NextResponse.json(
          {
            success: false,
            error: userMessage,
            code: errorCode,
          },
          { status: 400 }
        );
      }

      // Handle timeout
      if (razorpayError.message === "Request timeout") {
        return NextResponse.json(
          {
            success: false,
            error: "Payment service timeout. Please try again.",
          },
          { status: 408 }
        );
      }

      // Handle other errors
      return NextResponse.json(
        { success: false, error: "Failed to create payment order" },
        { status: 500 }
      );
    }

    // Validate order response
    if (
      !order ||
      typeof order !== "object" ||
      !("id" in order) ||
      typeof (order as { id?: unknown }).id !== "string"
    ) {
      console.error("Invalid order response:", order);
      return NextResponse.json(
        { success: false, error: "Invalid payment order response" },
        { status: 500 }
      );
    }

    // Destructure order properties with unique variable names to avoid redeclaration
    const {
      id: orderId,
      amount: orderAmount,
      currency: orderCurrency,
      receipt: orderReceipt,
      status: orderStatus,
      created_at: orderCreatedAt,
    } = order as {
      id: string;
      amount: number;
      currency: string;
      receipt: string;
      status?: string;
      created_at?: number;
    };

    console.log("Razorpay order created successfully:", {
      id: orderId,
      amount: orderAmount,
      receipt: orderReceipt,
    });

    // Return success response with all necessary data
    return NextResponse.json({
      success: true,
      order: {
        id: orderId,
        amount: orderAmount,
        currency: orderCurrency,
        receipt: orderReceipt,
        status: orderStatus || "created",
        created_at: orderCreatedAt || Date.now(),
      },
      // Include key for frontend (optional, since it's also in env)
      razorpayKey: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error: any) {
    console.error("Unexpected payment creation error:", error);

    // Log stack trace for debugging
    if (error.stack) {
      console.error("Error stack:", error.stack);
    }

    // Return generic error for unexpected cases
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
        // Include error ID for support tracking
        errorId: `err_${Date.now()}_${Math.random()
          .toString(36)
          .substring(2, 8)}`,
      },
      { status: 500 }
    );
  }
}
