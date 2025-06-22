// lib/zoho-service.ts
import { supabase } from "@/lib/supabase";
import { ZohoRegistrationData } from "@/app/types/zoho";

// Zoho Creator field mapping configuration
// Update these field names to match exactly with your Zoho Creator form field link names
const ZOHO_FIELD_MAPPING = {
  // Basic Information
  firstName: "First_Name",
  surname: "Surname",
  email: "Email",
  mobileNumber: "Mobile_Number",
  receiptId: "Receipt_ID",

  // Optional fields - uncomment and update as needed
  middleName: "Middle_Name",
  dateOfBirth: "Date_of_Birth",
  address: "Address",
  referralCode: "Referral_Code",
  state: "State",
  trialCity: "Trial_City",
  trialZone: "Trial_Zone",
  playingRoles: "Playing_Roles",
  battingHandedness: "Batting_Handedness",
  preferredBowlingStyle: "Preferred_Bowling",
  preferredBattingOrder: "Preferred_Batting_Order",
  tshirtSizes: "T_Shirt_Size",
  disclaimerAccepted: "Disclaimer_Accept",
  paymentStatus: "Payment_Status",
};

interface ZohoTokenData {
  id?: number;
  access_token: string;
  refresh_token: string;
  expires_at: string;
  expires_in: number;
  token_type: string;
  created_at: string;
  is_active?: boolean;
}

interface ZohoRefreshResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope?: string;
}

interface RegistrationData {
  firstName: string;
  middleName?: string;
  surname: string;
  mobileNumber: string;
  dateOfBirth: string;
  email: string;
  address: string;
  referralCode?: string;
  state: string;
  trialCity: string;
  trialZone: string;
  playingRoles: string;
  battingHandedness: string;
  preferredBowlingStyle: string;
  preferredBattingOrder: string;
  tshirtSizes: string;
  disclaimerAccepted: boolean;
}

class ZohoService {
  private clientId: string;
  private clientSecret: string;
  private refreshToken: string;
  private currentAccessToken: string | null = null;
  private refreshPromise: Promise<string> | null = null;
  private baseUrl: string;
  private accountsUrl: string;

  constructor() {
    // Environment variables
    this.clientId = process.env.ZOHO_CLIENT_ID || "";
    this.clientSecret = process.env.ZOHO_CLIENT_SECRET || "";
    this.refreshToken = process.env.ZOHO_REFRESH_TOKEN || "";

    // Determine the correct Zoho domain based on your account
    // Change these URLs based on your Zoho domain:
    // US: .com, EU: .eu, IN: .in, AU: .com.au
    const domain = process.env.ZOHO_DOMAIN || "in"; // Default to India
    this.accountsUrl = `https://accounts.zoho.${domain}`;
    this.baseUrl = `https://creator.zoho.${domain}`;

    // Your URLs show .in domain, but verify this is correct for API calls
    console.log(`🔧 Zoho Service initialized for domain: .${domain}`);

    if (!this.clientId || !this.clientSecret || !this.refreshToken) {
      throw new Error("Missing required Zoho environment variables");
    }
  }

  // Token Management Methods
  async getValidAccessToken(): Promise<string> {
    try {
      // Check if we have a cached token that's still valid
      if (this.currentAccessToken) {
        const tokenData = await this.getLatestTokenFromDB();
        if (tokenData && this.isTokenValid(tokenData)) {
          return this.currentAccessToken;
        }
      }

      // Get token from database
      const tokenData = await this.getLatestTokenFromDB();

      // Check if token is valid (with 5-minute buffer)
      if (tokenData?.access_token && this.isTokenValid(tokenData)) {
        this.currentAccessToken = tokenData.access_token;
        console.log("✅ Using cached database token");
        return tokenData.access_token;
      }

      console.log("⚠️ Token expired or not found, refreshing...");
      return await this.refreshAndStoreToken();
    } catch (error) {
      console.error("❌ Error getting access token:", error);
      throw new Error(`Failed to get valid access token: ${error}`);
    }
  }

  private async getLatestTokenFromDB(): Promise<ZohoTokenData | null> {
    try {
      const { data: tokenData, error } = await supabase
        .from("zoho_tokens")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error && error.code !== "PGRST116") {
        console.error("Database error:", error);
        return null;
      }

      return tokenData;
    } catch (error) {
      console.error("Error fetching token from database:", error);
      return null;
    }
  }

  private isTokenValid(tokenData: ZohoTokenData): boolean {
    const expiryTime = new Date(tokenData.expires_at);
    const now = new Date();
    const bufferTime = 5 * 60 * 1000; // 5 minutes buffer

    return expiryTime.getTime() - now.getTime() > bufferTime;
  }

  async refreshAndStoreToken(): Promise<string> {
    // Prevent multiple simultaneous refresh requests
    if (this.refreshPromise) {
      console.log("🔄 Token refresh already in progress, waiting...");
      return await this.refreshPromise;
    }

    this.refreshPromise = this._performTokenRefresh();

    try {
      const result = await this.refreshPromise;
      return result;
    } finally {
      this.refreshPromise = null;
    }
  }

  private async _performTokenRefresh(): Promise<string> {
    try {
      console.log("🔄 Refreshing Zoho token...");

      // Deactivate old tokens first
      await supabase
        .from("zoho_tokens")
        .update({ is_active: false })
        .eq("is_active", true);

      const response = await fetch(`${this.accountsUrl}/oauth/v2/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          refresh_token: this.refreshToken,
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: "refresh_token",
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Token refresh failed:", response.status, errorText);
        throw new Error(
          `Token refresh failed: ${response.status} - ${errorText}`
        );
      }

      const data: ZohoRefreshResponse = await response.json();

      if (!data.access_token) {
        throw new Error("No access token received in refresh response");
      }

      // Calculate expiry
      const expiresIn = data.expires_in || 3600;
      const expiryTime = new Date(Date.now() + expiresIn * 1000);

      // Store in database
      const tokenRecord: Omit<ZohoTokenData, "id"> = {
        access_token: data.access_token,
        refresh_token: this.refreshToken,
        expires_at: expiryTime.toISOString(),
        expires_in: expiresIn,
        token_type: data.token_type || "Bearer",
        created_at: new Date().toISOString(),
        is_active: true,
      };

      const { error: insertError } = await supabase
        .from("zoho_tokens")
        .insert(tokenRecord);

      if (insertError) {
        console.error("Failed to store token in database:", insertError);
        // Continue anyway, token can still be used
      }

      this.currentAccessToken = data.access_token;
      console.log("✅ Token refreshed successfully, expires at:", expiryTime);

      return data.access_token;
    } catch (error) {
      console.error("❌ Token refresh failed:", error);
      throw error;
    }
  }

  // API Request Method with Auto-Retry and Dynamic Token Management
  private async makeAuthenticatedRequest(
    url: string,
    options: RequestInit = {},
    retryCount = 0
  ): Promise<Response> {
    const maxRetries = 1;

    try {
      // Get a valid access token (will refresh if needed)
      const authToken = await this.getValidAccessToken();

      console.log(
        "🔐 Using access token (first 10 chars):",
        authToken.substring(0, 10) + "..."
      );

      const defaultHeaders = {
        Authorization: `Zoho-oauthtoken ${authToken}`,
        "Content-Type": "application/json",
      };

      const requestOptions: RequestInit = {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options.headers,
        },
      };

      console.log("🚀 Making request to:", url);

      const response = await fetch(url, requestOptions);

      // If we get a 401 (unauthorized) and haven't retried yet, refresh token and retry
      if (response.status === 401 && retryCount < maxRetries) {
        console.log("🔄 Access token expired, refreshing and retrying...");

        // Force refresh the token
        this.currentAccessToken = null;
        await this.refreshAndStoreToken();

        // Retry the request
        return this.makeAuthenticatedRequest(url, options, retryCount + 1);
      }

      return response;
    } catch (error) {
      if (retryCount < maxRetries) {
        console.log("🔄 Request failed, refreshing token and retrying...");

        // Force refresh the token
        this.currentAccessToken = null;
        try {
          await this.refreshAndStoreToken();
          return this.makeAuthenticatedRequest(url, options, retryCount + 1);
        } catch (refreshError) {
          console.error("❌ Token refresh failed during retry:", refreshError);
          throw error;
        }
      }

      throw error;
    }
  }

  // Registration Methods
  async createRegistration(
    registrationData: ZohoRegistrationData,
    receiptId: string
  ): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      console.log("📝 Creating registration in Zoho Creator...");

      // Use the exact endpoint provided by the user
      const url =
        "https://creator.zoho.in/api/v2.1/lakshgyapathtradingprivateli/runbhumi-api/form/registrations";

      console.log("🔗 Creating registration at URL:", url);
      console.log("🎯 Receipt ID:", receiptId);

      // Log the exact data being sent
      const payload = { data: registrationData };
      console.log("📋 Full Request payload:", JSON.stringify(payload, null, 2));

      // Log individual fields to check for any issues
      console.log("🔍 Field validation:");
      console.log("- First_Name:", registrationData.First_Name);
      console.log("- Date_of_Birth:", registrationData.Date_of_Birth);
      console.log("- Email:", registrationData.Email);
      console.log("- Mobile_Number:", registrationData.Mobile_Number);
      console.log("- Created_At:", registrationData.Created_At);
      console.log("- Updated_At:", registrationData.Updated_At);

      // Check for any undefined/null values
      const undefinedFields = Object.entries(registrationData)
        .filter(([key, value]) => value === undefined || value === null)
        .map(([key]) => key);

      if (undefinedFields.length > 0) {
        console.warn("⚠️ Fields with undefined/null values:", undefinedFields);
      }

      const response = await this.makeAuthenticatedRequest(url, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      console.log("📡 Response status:", response.status);
      console.log(
        "📡 Response headers:",
        Object.fromEntries(response.headers.entries())
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Zoho Creator API error:", response.status, errorText);

        // Try to parse the error response for more details
        try {
          const errorData = JSON.parse(errorText);
          console.error(
            "❌ Parsed error data:",
            JSON.stringify(errorData, null, 2)
          );

          if (errorData.code === 2945) {
            // Extract field names from error if available
            const invalidFields =
              errorData.description?.match(/field names?: (.+)/i)?.[1] ||
              "unknown fields";
            throw new Error(
              `EXTRA_KEY_FOUND_IN_JSON: These field names don't exist in the Zoho Creator form: ${invalidFields}. Error: ${errorData.description}`
            );
          } else if (errorData.code === 2890) {
            throw new Error(
              `MANDATORY_FIELD_MISSING: ${errorData.description}`
            );
          } else if (errorData.code === 2600) {
            throw new Error(`INVALID_DATA: ${errorData.description}`);
          } else {
            throw new Error(
              `Zoho Error ${errorData.code}: ${
                errorData.description || errorData.message
              }`
            );
          }
        } catch (parseError) {
          // If we can't parse the error, use the raw text
          console.error("❌ Could not parse error response:", parseError);
        }

        throw new Error(
          `Zoho Creator API error: ${response.status} - ${errorText}`
        );
      }

      const result = await response.json();
      console.log("✅ Registration created successfully in Zoho Creator");
      console.log("📄 Zoho response:", JSON.stringify(result, null, 2));

      return {
        success: true,
        data: result,
      };
    } catch (error) {
      console.error("❌ Failed to create registration in Zoho Creator:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  private formatRegistrationForZoho(
    registrationData: RegistrationData,
    receiptId: string
  ): Record<string, any> {
    // Zoho Creator field mapping.
    // IMPORTANT: Update these values to match the exact "Field Link Name" from your Zoho Creator form settings.
    const fieldMapping: { [key: string]: string } = {
      // User-submitted data from the form
      firstName: "First_Name",
      middleName: "Middle_Name",
      surname: "Surname",
      mobileNumber: "Mobile_Number",
      dateOfBirth: "Date_of_Birth",
      email: "Email",
      address: "Address",
      referralCode: "Referral_Code",
      state: "State",
      trialCity: "Trial_City",
      trialZone: "Trial_Zone",
      playingRoles: "Playing_Roles",
      battingHandedness: "Batting_Handedness",
      preferredBowlingStyle: "Preferred_Bowling_Style",
      preferredBattingOrder: "Preferred_Batting_Order",
      tshirtSizes: "T_Shirt_Size",
      disclaimerAccepted: "Disclaimer_Accepted",

      // System-generated data (from your screenshot)
      receiptId: "Receipt_ID",
      paymentStatus: "Payment_Status",
      paymentId: "Payment_ID",
      errorCode: "Error_Code",
      errorDescription: "Error_Description",
      createdAt: "Created_At",
      updatedAt: "Updated_At",
    };

    const zohoData: Record<string, any> = {};
    const now = new Date().toISOString();

    // Dynamically map data from the registration form based on the mapping
    for (const key in registrationData) {
      if (
        Object.prototype.hasOwnProperty.call(registrationData, key) &&
        fieldMapping[key]
      ) {
        const registrationKey = key as keyof RegistrationData;
        const value = registrationData[registrationKey];
        // Ensure we don't send null/undefined, default to empty string
        zohoData[fieldMapping[key]] =
          value === null || value === undefined ? "" : value;
      }
    }

    // Add and overwrite system fields with initial values
    zohoData[fieldMapping.receiptId] = receiptId;
    zohoData[fieldMapping.paymentStatus] = "pending";
    zohoData[fieldMapping.paymentId] = "";
    zohoData[fieldMapping.errorCode] = "";
    zohoData[fieldMapping.errorDescription] = "";
    zohoData[fieldMapping.createdAt] = now;
    zohoData[fieldMapping.updatedAt] = now;

    console.log(
      "📋 Formatted data for Zoho Creator:",
      JSON.stringify(zohoData, null, 2)
    );
    return zohoData;
  }

  // Update payment status in Zoho Creator
  async updatePaymentStatus(
    receiptId: string,
    paymentStatus: string,
    paymentId?: string,
    errorCode?: string,
    errorDescription?: string
  ): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      console.log("🔄 Updating payment status in Zoho Creator...");
      console.log("📨 Receipt ID:", receiptId, "Status:", paymentStatus);

      const owner = process.env.ZOHO_CREATOR_OWNER;
      const appName = process.env.ZOHO_CREATOR_APP_NAME || "your-app-name";
      const reportName =
        process.env.ZOHO_CREATOR_REPORT_NAME || "All_Registrations";

      // First, find the record by receipt ID using the correct API format
      const searchUrl = `${this.baseUrl}/api/v2.1/${owner}/${appName}/report/${reportName}?criteria=(Receipt_ID=="${receiptId}")`;

      console.log("🔍 Searching for record at URL:", searchUrl);

      const searchResponse = await this.makeAuthenticatedRequest(searchUrl);

      if (!searchResponse.ok) {
        const errorText = await searchResponse.text();
        console.error("❌ Search failed:", searchResponse.status, errorText);

        // If it's a 400 error with "No records found", this is expected for new registrations
        if (searchResponse.status === 400) {
          try {
            const errorData = JSON.parse(errorText);
            if (errorData.code === 9280) {
              console.log(
                "ℹ️ Record not found in Zoho yet - this is normal for new registrations"
              );
              return {
                success: true,
                data: {
                  message:
                    "Record not found yet - will be created on next registration",
                },
              };
            }
          } catch (parseError) {
            // Continue with normal error handling
          }
        }

        throw new Error(
          `Failed to find record: ${searchResponse.status} - ${errorText}`
        );
      }

      const searchResult = await searchResponse.json();

      if (!searchResult.data || searchResult.data.length === 0) {
        console.log("ℹ️ No record found with receipt ID:", receiptId);
        console.log(
          "ℹ️ This is normal for new registrations that haven't been synced to Zoho yet"
        );
        return {
          success: true,
          data: {
            message:
              "Record not found yet - will be created on next registration",
          },
        };
      }

      const recordId = searchResult.data[0].ID;
      console.log("📋 Found record ID:", recordId);

      // Update the record using the correct API format
      const updateData = {
        Payment_Status: paymentStatus,
        Payment_ID: paymentId || "",
        Error_Code: errorCode || "",
        Error_Description: errorDescription || "",
        Updated_At: new Date().toISOString(),
      };

      const updateUrl = `${this.baseUrl}/api/v2.1/${owner}/${appName}/report/${reportName}/${recordId}`;

      console.log("🔄 Updating record at URL:", updateUrl);

      const updateResponse = await this.makeAuthenticatedRequest(updateUrl, {
        method: "PATCH",
        body: JSON.stringify(updateData),
      });

      if (!updateResponse.ok) {
        const errorText = await updateResponse.text();
        throw new Error(
          `Update failed: ${updateResponse.status} - ${errorText}`
        );
      }

      const result = await updateResponse.json();
      console.log("✅ Payment status updated successfully in Zoho Creator");

      return {
        success: true,
        data: result,
      };
    } catch (error) {
      console.error(
        "❌ Failed to update payment status in Zoho Creator:",
        error
      );
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  // Health check method
  async validateConnection(): Promise<boolean> {
    try {
      console.log("🔍 Validating Zoho connection...");

      // Test with a simple API call to check if authentication works
      const appName = process.env.ZOHO_CREATOR_APP_NAME || "your-app-name";
      const owner = process.env.ZOHO_CREATOR_OWNER || "your-owner-name";

      // Use the correct API endpoint format for Zoho Creator - test with forms endpoint
      const testUrl = `${this.baseUrl}/api/v2.1/${owner}/${appName}/forms`;

      console.log("🔗 Testing URL:", testUrl);

      const response = await this.makeAuthenticatedRequest(testUrl);

      console.log("📊 Response status:", response.status);
      console.log(
        "📊 Response headers:",
        Object.fromEntries(response.headers.entries())
      );

      if (response.ok) {
        const responseText = await response.text();
        console.log("✅ Zoho connection validated successfully");
        console.log(
          "📋 Response body:",
          responseText.substring(0, 200) + "..."
        );
        return true;
      } else {
        const errorText = await response.text();
        console.error("❌ Zoho connection test failed:", response.status);
        console.error("❌ Error response:", errorText);
        return false;
      }
    } catch (error) {
      console.error("❌ Zoho connection validation failed:", error);
      return false;
    }
  }

  // Debug method
  async debugTokenStatus(): Promise<void> {
    console.log("🔍 Debug: Checking Zoho token status...");

    try {
      const tokenData = await this.getLatestTokenFromDB();

      if (tokenData) {
        const expiryTime = new Date(tokenData.expires_at);
        const now = new Date();
        const minutesUntilExpiry = Math.floor(
          (expiryTime.getTime() - now.getTime()) / (1000 * 60)
        );

        console.log("📊 Token Status:");
        console.log("  🕐 Expires in:", minutesUntilExpiry, "minutes");
        console.log("  📅 Created at:", tokenData.created_at);
        console.log("  🔑 Token type:", tokenData.token_type);
        console.log("  ✅ Is valid:", this.isTokenValid(tokenData));
      } else {
        console.log("❌ No active token found in database");
      }
    } catch (error) {
      console.error("❌ Debug failed:", error);
    }
  }
}

export const zohoService = new ZohoService();
