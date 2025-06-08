"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Mail,
  Calendar,
  User,
  Check,
  ArrowRight,
  Search,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import DateOfBirthField from "@/components/date-of-birth";
import { EventHero } from "@/components/hero/event-annoucement";
import Hero from "@/components/common/hero";
import LeftHero from "@/components/common/left-hero";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define state-city mapping
// Define state-city mapping with explicit type
type StateCityMap = {
  [key: string]: string[];
};

const stateCityMap: StateCityMap = {
  maharashtra: [
    "Mumbai",
    "Kalyan",
    "Nashik",
    "Pune",
    "Thane",
    "Vasai",
    "Vashi",
    "Aurangabad",
    "Nagpur",
    "Solapur",
    "Kolhapur",
    "Panvel",
  ],
  delhi: ["Delhi", "Noida"],
  karnataka: ["Bangalore", "Mysore"],
  tamilnadu: ["Chennai"],
  westbengal: ["Kolkata"],
  gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  haryana: ["Gurugram", "Faridabad", "Rohtak", "Hisar"],
  uttarpradesh: ["Lucknow", "Agra", "Varanasi", "Meerut", "Jhansi"],
  kerala: ["Kochi"],
  rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
  madhyapradesh: ["Bhopal", "Indore", "Gwalior"],
  bihar: ["Patna"],
  goa: ["Goa"],
  andhrapradesh: ["Vijayawada"],
  telangana: ["Hyderabad"],
  chattisgarh: ["Raipur"],
  uttarakhand: ["Dehradun"],
  jharkhand: ["Jamshedpur", "Ranchi"],
  assam: ["Guwahati"],
  jammuandkashmir: ["Jammu"],
  chandigarh: ["Chandigarh"],
  odisha: ["Bhubaneshwar"],
  punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Mohali"],
  jammunkashmir: ["Jammu"],
};

// Define trial schedule data
const trialSchedule = [
  {
    date: "17-May-25",
    locations: ["Indore", "Gwalior", "Vadodara", "Coming Soon"],
  },
  {
    date: "18-May-25",
    locations: ["Surat", "Ahmedabad", "Rajkot", "Coming Soon"],
  },
  { date: "24-May-25", locations: ["Varanasi", "Delhi", "Coming Soon", "Goa"] },
  {
    date: "25-May-25",
    locations: ["Kolkata", "Patna", "Lucknow", "Coming Soon"],
  },
  {
    date: "31-May-25",
    locations: ["Bhopal", "Jabalpur", "Gwalior", "Coming Soon"],
  },
  { date: "01-Jun-25", locations: ["Thane", "Pune", "Panvel", "Coming Soon"] },
  {
    date: "07-Jun-25",
    locations: ["Mumbai", "Nashik", "Bangalore", "Coming Soon"],
  },
  {
    date: "08-Jun-25",
    locations: ["Hyderabad", "Vijayawada", "Mysore", "Coming Soon"],
  },
  {
    date: "14-Jun-25",
    locations: ["Raipur", "Bhubaneshwar", "Dehradun", "Coming Soon"],
  },
  {
    date: "15-Jun-25",
    locations: ["Aurangabad", "Nagpur", "Solapur", "Kolhapur"],
  },
  {
    date: "21-Jun-25",
    locations: ["Noida", "Agra", "Amritsar", "Coming Soon"],
  },
  {
    date: "22-Jun-25",
    locations: ["Rajkot", "Udaipur", "Chennai", "Coming Soon"],
  },
  {
    date: "28-Jun-25",
    locations: ["Jhansi", "Jamshedpur", "Coming Soon", "Coming Soon"],
  },
  {
    date: "29-Jun-25",
    locations: ["Guwahati", "Ranchi", "Coming Soon", "Coming Soon"],
  },
  {
    date: "05-Jul-25",
    locations: ["Jammu", "Chandigarh", "Coming Soon", "Coming Soon"],
  },
  {
    date: "06-Jul-25",
    locations: ["Jaipur", "Jodhpur", "Coming Soon", "Coming Soon"],
  },
  {
    date: "12-Jul-25",
    locations: ["Meerut", "Hisar", "Coming Soon", "Coming Soon"],
  },
  {
    date: "13-Jul-25",
    locations: ["Amritsar", "Rohtak", "Coming Soon", "Coming Soon"],
  },
];

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RegistrationPage() {
  interface FormData {
    firstName: string;
    middleName: string;
    surname: string;
    mobileNumber: string;
    dateOfBirth: string;
    email: string;
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

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    surname: "",
    mobileNumber: "",
    dateOfBirth: "",
    email: "",
    state: "",
    trialCity: "",
    trialZone: "",
    playingRoles: "",
    battingHandedness: "",
    preferredBowlingStyle: "",
    preferredBattingOrder: "",
    tshirtSizes: "",
    disclaimerAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  // Filter trial schedule based on search term
  const filteredSchedule = trialSchedule.filter((schedule) => {
    // If no search term, show all schedules
    if (!searchTerm) return true;

    // Check if date contains search term
    if (schedule.date.toLowerCase().includes(searchTerm.toLowerCase()))
      return true;

    // Check if any location contains search term
    return schedule.locations.some((location) =>
      location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Handle when a city is selected from the trial schedule
  const handleCitySelect = (city: string) => {
    if (!city || city === "") return;

    setSelectedCity(city);

    // Find state for this city
    let stateForCity: string | null = null;
    for (const [state, cities] of Object.entries(stateCityMap)) {
      if (cities.some((c) => c.toLowerCase() === city.toLowerCase())) {
        stateForCity = state;
        break;
      }
    }

    if (stateForCity) {
      // Update form data with state and city
      handleSelectChange("state", stateForCity);
      setTimeout(() => {
        handleSelectChange("trialCity", city.toLowerCase());
      }, 100);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    // If changing state, reset trial city and update available cities
    if (id === "state") {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
        trialCity: "", // Reset city when state changes
      }));

      // Update available cities based on selected state
      const cities = stateCityMap[value] || [];
      setAvailableCities(cities);
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log("Razorpay script loaded successfully");
    };
    script.onerror = (error) => {
      console.error("Error loading Razorpay script:", error);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializePayment = async () => {
    try {
      if (!formData.disclaimerAccepted) {
        toast({
          title: "Disclaimer Required",
          description:
            "Please accept the disclaimer before proceeding with payment.",
          variant: "destructive",
        });
        return;
      }

      // Validate date of birth
      if (!formData.dateOfBirth) {
        toast({
          title: "Date of Birth Required",
          description:
            "Please select your date of birth before proceeding with payment.",
          variant: "destructive",
        });
        return;
      }

      setIsPaymentProcessing(true);

      // Generate a unique receipt ID using timestamp and random string
      const receiptId = `receipt_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 8)}`;

      // First, save registration data to Supabase
      const registrationResponse = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          receiptId,
        }),
      });

      if (!registrationResponse.ok) {
        const errorData = await registrationResponse.json();
        throw new Error(errorData.error || "Failed to save registration data");
      }

      // Use the production public key
      // const publicKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      const publicKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      if (!publicKey) {
        throw new Error("Razorpay production public key is not configured.");
      }

      // Create payment order
      const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 1770,
          currency: "INR",
          receipt: receiptId,
          notes: {
            playerName: `${formData.firstName} ${formData.middleName} ${formData.surname}`,
            email: formData.email,
            phone: formData.mobileNumber,
            trialCity: formData.trialCity,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: "Failed to parse error response" }));
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to create payment order");
      }

      // Initialize Razorpay
      const options = {
        key: publicKey,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "RunBhumi",
        description: "Registration Fee",
        order_id: data.order.id,
        handler: async function (response: any) {
          try {
            // Update payment status in Supabase
            const updateResponse = await fetch("/api/register", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                receiptId,
                paymentStatus: "completed",
                paymentId: response.razorpay_payment_id,
              }),
            });

            if (!updateResponse.ok) {
              throw new Error("Failed to update payment status");
            }

            // Handle successful payment
            console.log("Payment successful:", response);
            handleSubmit(new Event("submit") as any);
          } catch (error) {
            console.error("Error updating payment status:", error);
            toast({
              title: "Payment Status Update Failed",
              description:
                "Payment was successful but failed to update status. Please contact support.",
              variant: "destructive",
            });
          }
        },
        modal: {
          ondismiss: async function () {
            try {
              // Update payment status to failed when user dismisses the modal
              const updateResponse = await fetch("/api/register", {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  receiptId,
                  paymentStatus: "failed",
                  paymentId: null,
                }),
              });

              if (!updateResponse.ok) {
                throw new Error("Failed to update payment status");
              }

              toast({
                title: "Payment Cancelled",
                description:
                  "Your payment was cancelled. You can try again later.",
                variant: "destructive",
              });
            } catch (error) {
              console.error("Error updating payment status:", error);
              toast({
                title: "Error",
                description:
                  "Failed to update payment status. Please contact support.",
                variant: "destructive",
              });
            }
          },
        },
        prefill: {
          name: `${formData.firstName} ${formData.middleName} ${formData.surname}`,
          email: formData.email,
          contact: formData.mobileNumber,
        },
        theme: {
          color: "#F97316",
        },
      };

      if (!window.Razorpay) {
        throw new Error("Razorpay script not loaded");
      }

      const razorpay = new window.Razorpay(options);
      razorpay.on("payment.failed", async function (response: any) {
        try {
          // Update payment status to failed
          const updateResponse = await fetch("/api/register", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              receiptId,
              paymentStatus: "failed",
              paymentId: response.error.metadata.payment_id,
              error_code: response.error.code,
              error_description: response.error.description,
            }),
          });

          if (!updateResponse.ok) {
            throw new Error("Failed to update payment status");
          }

          toast({
            title: "Payment Failed",
            description: `Payment failed: ${response.error.description}. Please try again.`,
            variant: "destructive",
          });
        } catch (error) {
          console.error("Error updating failed payment status:", error);
          toast({
            title: "Error",
            description:
              "Failed to update payment status. Please contact support.",
            variant: "destructive",
          });
        }
      });
      razorpay.open();
    } catch (error) {
      console.error("Payment initialization failed:", error);
      toast({
        title: "Payment Failed",
        description:
          error instanceof Error
            ? error.message
            : "Failed to initialize payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsPaymentProcessing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.firstName ||
      !formData.surname ||
      !formData.mobileNumber ||
      !formData.email
    ) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      // Your existing form submission logic here
      // ...

      setSubmissionSuccess(true);
      resetForm();

      toast({
        title: "Registration Successful",
        description: "Thank you for registering with RunBhumi!",
      });
    } catch (error) {
      console.error("Registration failed:", error);
      toast({
        title: "Registration Failed",
        description: "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Format: YYYY-MM-DD

    setFormData({
      firstName: "",
      middleName: "",
      surname: "",
      mobileNumber: "",
      dateOfBirth: formattedDate,
      email: "",
      state: "",
      trialCity: "",
      trialZone: "",
      playingRoles: "",
      battingHandedness: "",
      preferredBowlingStyle: "",
      preferredBattingOrder: "",
      tshirtSizes: "",
      disclaimerAccepted: false,
    });
    setAvailableCities([]);
    setSubmissionSuccess(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <LeftHero
          title="Register for RunBhumi Cricket Talent Hunt"
          description="Join the World's Greatest Cricket Talent Hunt and showcase your skills on an international stage."
          backgroundType="image"
          backgroundSrc="https://images.unsplash.com/photo-1562077772-3bd90403f7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D"
          height="small"
          animated={true}
          parallaxEnabled={true}
          parallaxSpeed={0.7}
        />

        {/* Eligibility Criteria Section - Responsive */}
        <section className="w-full py-8 sm:py-12 bg-gray-50">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter">
                Eligibility Criteria
              </h2>
              <p className="max-w-[700px] text-black text-sm sm:text-base md:text-lg leading-relaxed">
                To be eligible for participation in the RunBhumi Trials 2025,
                participants must strictly comply with the following conditions:
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10">
              <ul className="space-y-4 sm:space-y-6">
                <li>
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    <span className="text-red-700 font-bold">MUST NOT</span> be
                    below the age of 16 years at the time of registrations as
                    per legal identification documents.
                  </p>
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    <span className="text-red-700 font-bold">MUST NOT</span> be
                    currently registered with any state or district association
                    of BCCI.
                  </p>
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    <span className="text-red-700 font-bold">MUST NOT</span>{" "}
                    currently have any existing contract with any state or
                    district association of the BCCI.
                  </p>
                </li>
                <li>
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    <span className="text-red-700 font-bold">MUST NOT</span> be
                    participating or playing in any representative cricket for
                    any State or District Association of BCCI.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-orange-700 mb-3 sm:mb-4">
                Important Note
              </h3>
              <p className="text-black text-sm sm:text-base leading-relaxed">
                All participants will be required to provide documentation
                confirming they meet these eligibility criteria.
                <strong>
                  Both ID cards submitted during registration and at the time of
                  trials must be the same.
                </strong>
                Any false information provided may result in disqualification
                without refund of registration fees. If you're unsure about your
                eligibility status, please contact our support team before
                registering.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Registration Form */}
              <div className="space-y-6">
                {submissionSuccess ? (
                  <Card className="p-6 bg-green-50 border-green-200">
                    <CardContent className="pt-6 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">
                        Registration Complete!
                      </h2>
                      <p className="text-black mb-4">
                        Thank you for registering for RunBhumi Cricket Talent
                        Hunt. A confirmation email has been sent to{" "}
                        {formData.email}.
                      </p>
                      <Button
                        onClick={resetForm}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Register Another Person
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                        Registration Form
                      </h2>
                      <p className="text-black">
                        Complete the form below to secure your spot in the
                        upcoming RunBhumi Cricket Talent Hunt.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium"
                        >
                          First Name <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="bg-white text-black"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="middleName"
                          className="block text-sm font-medium"
                        >
                          Middle Name <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="middleName"
                          placeholder="Middle Name"
                          value={formData.middleName}
                          onChange={handleChange}
                          required
                          className="bg-white text-black"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="surname"
                          className="block text-sm font-medium"
                        >
                          Surname <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="surname"
                          placeholder="Surname"
                          value={formData.surname}
                          onChange={handleChange}
                          required
                          className="bg-white text-black"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="mobileNumber"
                          className="block text-sm font-medium"
                        >
                          Mobile Number <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="mobileNumber"
                          type="tel"
                          placeholder="Mobile Number"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          required
                          className="bg-white text-black"
                        />
                      </div>

                      <DateOfBirthField
                        formData={formData}
                        handleChange={handleChange}
                      />

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium"
                        >
                          Email <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-white text-black"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium"
                        >
                          State <span className="text-red-400">*</span>
                        </label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("state", value)
                          }
                          value={formData.state}
                          required
                        >
                          <SelectTrigger className="bg-white text-black">
                            <SelectValue placeholder="Select a state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maharashtra">
                              Maharashtra
                            </SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="karnataka">Karnataka</SelectItem>
                            <SelectItem value="tamilnadu">
                              Tamil Nadu
                            </SelectItem>
                            <SelectItem value="westbengal">
                              West Bengal
                            </SelectItem>
                            <SelectItem value="gujarat">Gujarat</SelectItem>
                            <SelectItem value="punjab">Punjab</SelectItem>
                            <SelectItem value="haryana">Haryana</SelectItem>
                            <SelectItem value="uttarpradesh">
                              Uttar Pradesh
                            </SelectItem>
                            <SelectItem value="kerala">Kerala</SelectItem>
                            <SelectItem value="rajasthan">Rajasthan</SelectItem>
                            <SelectItem value="madhyapradesh">
                              Madhya Pradesh
                            </SelectItem>
                            <SelectItem value="bihar">Bihar</SelectItem>
                            <SelectItem value="goa">Goa</SelectItem>
                            <SelectItem value="andhrapradesh">
                              Andhra Pradesh
                            </SelectItem>
                            <SelectItem value="telangana">Telangana</SelectItem>
                            <SelectItem value="chattisgarh">
                              Chattisgarh
                            </SelectItem>
                            <SelectItem value="uttarakhand">
                              Uttarakhand
                            </SelectItem>
                            <SelectItem value="jharkhand">Jharkhand</SelectItem>
                            <SelectItem value="assam">Assam</SelectItem>
                            <SelectItem value="jammuandkashmir">
                              Jammu & Kashmir
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="trialCity"
                          className="block text-sm font-medium"
                        >
                          Trial City <span className="text-red-400">*</span>
                        </label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("trialCity", value)
                          }
                          value={formData.trialCity}
                          disabled={!formData.state}
                          required
                        >
                          <SelectTrigger className="bg-white text-black">
                            <SelectValue
                              placeholder={
                                formData.state
                                  ? "Select a city"
                                  : "Please select a state first"
                              }
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {availableCities.map((city) => (
                              <SelectItem key={city} value={city.toLowerCase()}>
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {selectedCity && (
                          <p className="text-xs text-green-600 mt-1">
                            Selected trial city: {selectedCity}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="trialZone"
                          className="block text-sm font-medium"
                        >
                          Trial Zone
                        </label>
                        <Input
                          id="trialZone"
                          placeholder="Trial Zone"
                          value={formData.trialZone}
                          onChange={handleChange}
                          className="bg-white text-black"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="playingRoles"
                          className="block text-sm font-medium"
                        >
                          Playing Roles <span className="text-red-400">*</span>
                        </label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("playingRoles", value)
                          }
                          value={formData.playingRoles}
                          required
                        >
                          <SelectTrigger className="bg-white text-black">
                            <SelectValue placeholder="Select Playing Roles" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="batsman">Batsman</SelectItem>
                            <SelectItem value="bowler">Bowler</SelectItem>
                            <SelectItem value="allrounder">
                              All-Rounder
                            </SelectItem>
                            <SelectItem value="wicketkeeper">
                              Wicket Keeper
                            </SelectItem>
                            <SelectItem value="wicketkeeperBatsman">
                              Wicket Keeper-Batsman
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="battingHandedness"
                          className="block text-sm font-medium"
                        >
                          Batting Handedness{" "}
                          <span className="text-red-400">*</span>
                        </label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("battingHandedness", value)
                          }
                          value={formData.battingHandedness}
                          required
                        >
                          <SelectTrigger className="bg-white text-black">
                            <SelectValue placeholder="Select Batting Handedness" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rightHanded">
                              Right Handed
                            </SelectItem>
                            <SelectItem value="leftHanded">
                              Left Handed
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="preferredBowlingStyle"
                          className="block text-sm font-medium"
                        >
                          Preferred Bowling Style{" "}
                          <span className="text-red-400">*</span>
                        </label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("preferredBowlingStyle", value)
                          }
                          value={formData.preferredBowlingStyle}
                          required
                        >
                          <SelectTrigger className="bg-white text-black">
                            <SelectValue placeholder="Select Preferred Bowling Style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fastBowling">
                              Fast Bowling
                            </SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="spinBowling">
                              Spin Bowling
                            </SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="preferredBattingOrder"
                          className="block text-sm font-medium"
                        >
                          Preferred Batting Order{" "}
                          <span className="text-red-400">*</span>
                        </label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("preferredBattingOrder", value)
                          }
                          value={formData.preferredBattingOrder}
                          required
                        >
                          <SelectTrigger className="bg-white text-black">
                            <SelectValue placeholder="Select Preferred Batting Order" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opener">Opener</SelectItem>
                            <SelectItem value="topOrder">Top Order</SelectItem>
                            <SelectItem value="middleOrder">
                              Middle Order
                            </SelectItem>
                            <SelectItem value="lowerOrder">
                              Lower Order
                            </SelectItem>
                            <SelectItem value="tailEnder">
                              Tail Ender
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="tshirtSizes"
                          className="block text-sm font-medium"
                        >
                          T-shirt Size <span className="text-red-400">*</span>
                        </label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("tshirtSizes", value)
                          }
                          value={formData.tshirtSizes}
                          required
                        >
                          <SelectTrigger className="bg-white text-black">
                            <SelectValue placeholder="Select T-shirt Size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="S">S</SelectItem>
                            <SelectItem value="M">M</SelectItem>
                            <SelectItem value="L">L</SelectItem>
                            <SelectItem value="XL">XL</SelectItem>
                            <SelectItem value="XXL">XXL</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="disclaimer"
                            checked={formData.disclaimerAccepted}
                            onCheckedChange={(checked) => {
                              setFormData((prev) => ({
                                ...prev,
                                disclaimerAccepted: checked as boolean,
                              }));
                            }}
                            required
                          />
                          <div className="flex items-center gap-1.5 leading-none">
                            <label
                              htmlFor="disclaimer"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              By proceeding, I confirm that I have read and
                              agree to all points mentioned in the{" "}
                              <a
                                href="/disclaimer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:text-orange-800 underline mb-0"
                              >
                                Disclaimer
                              </a>
                              .
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-2 flex mt-6">
                        <Button
                          type="button"
                          onClick={initializePayment}
                          disabled={
                            isSubmitting ||
                            isPaymentProcessing ||
                            !formData.disclaimerAccepted
                          }
                          className="bg-orange-600 hover:bg-orange-700"
                        >
                          {isPaymentProcessing
                            ? "Processing..."
                            : "Proceed to Payment"}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>

              {/* Event Information */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Event Information
                  </h2>
                  <p className="text-black">
                    Important details about the RunBhumi Cricket Talent Hunt.
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Calendar className="h-6 w-6 text-orange-500 mt-1" />
                      <div>
                        <h3 className="font-bold">Trials Start</h3>
                        <p className="text-black mt-1">
                          Thursday, July 5, 2025
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                      <div>
                        <h3 className="font-bold">Contact Support</h3>
                        <p className="text-black mt-1">
                          WhatsApp Enquiries: +91 99643 91643
                          <br />
                          Office: +91 99643 92643
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Schedule Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-orange-950/20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Trial Schedule
              </h2>
              <p className="max-w-[700px] text-black md:text-lg">
                Select your preferred trial location from our worldwide schedule
              </p>
            </div>

            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by city or date..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white"
                />
              </div>
            </div>

            <Card className="overflow-hidden border border-gray-200">
              <CardHeader className="bg-orange-500 text-white">
                <CardTitle className="text-center">
                  RunBhumi 2025 Trial Dates & Locations
                </CardTitle>
              </CardHeader>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-orange-100">
                    <TableRow>
                      <TableHead className="w-1/5 font-bold">Date</TableHead>
                      <TableHead className="text-center font-bold">
                        Location 1
                      </TableHead>
                      <TableHead className="text-center font-bold">
                        Location 2
                      </TableHead>
                      <TableHead className="text-center font-bold">
                        Location 3
                      </TableHead>
                      <TableHead className="text-center font-bold">
                        Location 4
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSchedule.map((schedule, index) => (
                      <TableRow
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <TableCell className="font-medium">
                          {schedule.date}
                        </TableCell>
                        {schedule.locations.map((location, locIndex) => (
                          <TableCell key={locIndex} className="text-center">
                            {location ? (
                              <Button
                                variant="ghost"
                                className="text-orange-600 hover:text-orange-800 hover:bg-orange-100"
                                onClick={() => handleCitySelect(location)}
                              >
                                {location}
                              </Button>
                            ) : (
                              "—"
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            <div className="mt-4 text-center text-sm text-black">
              <p>Click on any city to select it for your registration.</p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Trial Location
              </h2>
              <p className="max-w-[700px] text-black md:text-lg">
                Trial sessions will be held at cricket grounds across 36 cities
                in India
              </p>
            </div>

            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7017.994741987926!2d77.03521849591594!3d28.419336189033235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23491456411f%3A0xa094d858266d8e27!2sTrue%20Dream%20Reality%20-%20Furnished%20Business%20Office%20Space%20in%20Gurgaon!5e0!3m2!1sen!2sin!4v1745148920064!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RunBhumi-Headquarters"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-orange-950/20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-black md:text-lg">
                Everything you need to know about the RunBhumi Cricket Talent
                Hunt
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Who can participate in the RunBhumi Cricket Talent Hunt?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The RunBhumi Cricket Talent Hunt is open to all cricket
                    enthusiasts between the ages of 14 and 21. We welcome
                    players of all skill levels who are passionate about cricket
                    and want to showcase their talent on a national platform.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What should I bring to the trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Participants should bring their own cricket kit including
                    bat, pads, gloves, and appropriate footwear. We will provide
                    balls and other necessary equipment. Don't forget to bring a
                    water bottle and wear comfortable sports attire suitable for
                    the weather.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How long will the trial session last?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Each trial session typically lasts approximately 3-4 hours.
                    The exact duration may vary based on the number of
                    participants. You'll be notified of your specific time slot
                    after registration is confirmed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What happens after the trials?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Selected candidates will be invited to the next round of the
                    talent hunt. Successful participants will receive
                    professional coaching, exposure to cricket scouts, and
                    opportunities to showcase their skills in front of talent
                    hunters from professional cricket leagues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
