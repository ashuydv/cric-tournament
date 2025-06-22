export interface ZohoRegistrationData {
  First_Name: string;
  Middle_Name: string;
  Surname: string;
  Mobile_Number: string;
  Date_of_Birth: string;
  Email: string;
  Address: string;
  Referral_Code: string;
  State: string;
  Trial_City: string;
  Trial_Zone: string;
  Playing_Roles: string;
  Batting_Handedness: string;
  Preferred_Bowling_Style: string;
  Preferred_Batting_Order: string;
  T_Shirt_Size: string;
  Disclaimer_Accepted: boolean;
  Receipt_ID: string;
  Payment_Status: string;
  Payment_ID: string;
  Error_Code: string | null;
  Error_Description: string | null;
  Created_At: string;
  Updated_At: string;
}

export interface ZohoRegistrationRequest {
  data: ZohoRegistrationData;
} 