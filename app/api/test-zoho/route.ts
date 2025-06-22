// app/api/test-zoho/route.ts - FULL VERSION
import { NextResponse } from "next/server";
import { zohoService } from "@/lib/zoho-service";

export async function GET() {
  const testResults = {
    timestamp: new Date().toISOString(),
    environment: {
      clientId: !!process.env.ZOHO_CLIENT_ID,
      clientSecret: !!process.env.ZOHO_CLIENT_SECRET,
      refreshToken: !!process.env.ZOHO_REFRESH_TOKEN,
      domain: process.env.ZOHO_DOMAIN || "in",
      appName: process.env.ZOHO_CREATOR_APP_NAME || "NOT_SET",
      formName: process.env.ZOHO_CREATOR_FORM_NAME || "NOT_SET",
      reportName: process.env.ZOHO_CREATOR_REPORT_NAME || "NOT_SET",
    },
    tests: {} as any,
  };

  console.log("🧪 Starting Zoho integration tests...");

  try {
    // Test 1: Environment Variables
    console.log("📋 Test 1: Checking environment variables...");
    const envTest = {
      passed:
        testResults.environment.clientId &&
        testResults.environment.clientSecret &&
        testResults.environment.refreshToken,
      message:
        testResults.environment.clientId &&
        testResults.environment.clientSecret &&
        testResults.environment.refreshToken
          ? "All required environment variables are set"
          : "Missing required environment variables",
      details: testResults.environment,
    };
    testResults.tests.environment = envTest;

    if (!envTest.passed) {
      return NextResponse.json(
        {
          success: false,
          message: "Environment variables test failed",
          results: testResults,
        },
        { status: 500 }
      );
    }

    // Test 2: Token Status
    console.log("🔑 Test 2: Checking token status...");
    let tokenTest = { passed: false, message: "", details: {} };

    try {
      await zohoService.debugTokenStatus();
      tokenTest = {
        passed: true,
        message: "Token status check completed",
        details: { note: "Check console logs for detailed token information" },
      };
    } catch (error) {
      tokenTest = {
        passed: false,
        message: `Token status check failed: ${
          error instanceof Error ? error.message : error
        }`,
        details: { error: String(error) },
      };
    }
    testResults.tests.tokenStatus = tokenTest;

    // Test 3: Get Valid Access Token
    console.log("🎟️ Test 3: Getting valid access token...");
    let accessTokenTest = { passed: false, message: "", details: {} };

    try {
      const token = await zohoService.getValidAccessToken();
      accessTokenTest = {
        passed: true,
        message: "Successfully obtained access token",
        details: {
          tokenLength: token.length,
          tokenPrefix: token.substring(0, 10) + "...",
        },
      };
    } catch (error) {
      accessTokenTest = {
        passed: false,
        message: `Failed to get access token: ${
          error instanceof Error ? error.message : error
        }`,
        details: { error: String(error) },
      };
    }
    testResults.tests.accessToken = accessTokenTest;

    if (!accessTokenTest.passed) {
      return NextResponse.json(
        {
          success: false,
          message: "Access token test failed",
          results: testResults,
        },
        { status: 500 }
      );
    }

    // Test 4: Zoho API Connection
    console.log("🌐 Test 4: Testing Zoho API connection...");
    let connectionTest = { passed: false, message: "", details: {} };

    try {
      const isConnected = await zohoService.validateConnection();
      connectionTest = {
        passed: isConnected,
        message: isConnected
          ? "Successfully connected to Zoho API"
          : "Failed to connect to Zoho API",
        details: { connected: isConnected },
      };
    } catch (error) {
      connectionTest = {
        passed: false,
        message: `Connection test failed: ${
          error instanceof Error ? error.message : error
        }`,
        details: { error: String(error) },
      };
    }
    testResults.tests.connection = connectionTest;

    // Test 5: Test Registration Creation (Mock Data)
    console.log("📝 Test 5: Testing registration creation with mock data...");
    let registrationTest = { passed: false, message: "", details: {} };

    try {
      const mockRegistrationData = {
        firstName: "Test",
        middleName: "Mock",
        surname: "User",
        mobileNumber: "+91-9999999999",
        dateOfBirth: "1990-01-01",
        email: "test@example.com",
        address: "123 Test Street, Test City",
        referralCode: "TEST123",
        state: "Test State",
        trialCity: "Test City",
        trialZone: "Zone A",
        playingRoles: "Batsman",
        battingHandedness: "Right",
        preferredBowlingStyle: "Fast",
        preferredBattingOrder: "Top Order",
        tshirtSizes: "L",
        disclaimerAccepted: true,
      };

      const mockReceiptId = `TEST_${Date.now()}`;

      const result = await zohoService.createRegistration(
        mockRegistrationData,
        mockReceiptId
      );

      registrationTest = {
        passed: result.success,
        message: result.success
          ? "Successfully created test registration in Zoho Creator"
          : `Failed to create test registration: ${result.error}`,
        details: {
          receiptId: mockReceiptId,
          zohoResponse: result.data || result.error,
        },
      };
    } catch (error) {
      registrationTest = {
        passed: false,
        message: `Registration test failed: ${
          error instanceof Error ? error.message : error
        }`,
        details: { error: String(error) },
      };
    }
    testResults.tests.registration = registrationTest;

    // Calculate overall success
    const allTests = Object.values(testResults.tests);
    const passedTests = allTests.filter((test: any) => test.passed).length;
    const totalTests = allTests.length;
    const overallSuccess = passedTests === totalTests;

    console.log(`🏁 Tests completed: ${passedTests}/${totalTests} passed`);

    return NextResponse.json(
      {
        success: overallSuccess,
        message: overallSuccess
          ? `All ${totalTests} tests passed! Zoho integration is working correctly.`
          : `${passedTests}/${totalTests} tests passed. Check failed tests for issues.`,
        summary: {
          total: totalTests,
          passed: passedTests,
          failed: totalTests - passedTests,
        },
        results: testResults,
      },
      { status: overallSuccess ? 200 : 500 }
    );
  } catch (error) {
    console.error("💥 Critical test error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Critical error during testing",
        error: error instanceof Error ? error.message : String(error),
        results: testResults,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const testData = {
      firstName: "Test",
      surname: "User",
      email: "test@example.com",
      mobileNumber: "1234567890",
      dateOfBirth: "1990-01-01",
      address: "Test Address",
      referralCode: "",
      state: "Test State",
      trialCity: "Test City",
      trialZone: "Test Zone",
      playingRoles: "Batsman",
      battingHandedness: "Right",
      preferredBowlingStyle: "Fast",
      preferredBattingOrder: "Top",
      tshirtSizes: "M",
      disclaimerAccepted: true,
    };

    const receiptId = `TEST_${Date.now()}`;

    console.log("🧪 Testing Zoho registration with minimal data...");
    console.log("📋 Test data:", JSON.stringify(testData, null, 2));
    console.log("🆔 Receipt ID:", receiptId);

    const result = await zohoService.createRegistration(testData, receiptId);

    return NextResponse.json({
      success: result.success,
      data: result.data,
      error: result.error,
      testInfo: {
        receiptId,
        dataSent: testData,
      },
    });
  } catch (error) {
    console.error("💥 Test failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Test failed",
      },
      { status: 500 }
    );
  }
}
