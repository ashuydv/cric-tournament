"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, User, Phone, MapPin, ChevronDown, Ruler } from "lucide-react";

interface FormData {
  name: string;
  phoneNumber: string;
  address: string;
  waistSize: string;
  customWaistSize: string;
}

interface NotificationFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
  className?: string;
}

export default function NotificationForm({
  onSubmit,
  className = "",
}: NotificationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    address: "",
    waistSize: "",
    customWaistSize: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      let value = e.target.value;

      // Special handling for phone number
      if (field === "phoneNumber") {
        value = value.replace(/\D/g, "").slice(0, 10);
      }

      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return "Please enter your name";
    if (!formData.phoneNumber.trim()) return "Please enter your mobile number";
    if (!/^\d{10}$/.test(formData.phoneNumber))
      return "Please enter a valid 10-digit mobile number";
    if (!formData.address.trim()) return "Please enter your address";
    if (!formData.waistSize) return "Please select your waist size";
    if (formData.waistSize === "other" && !formData.customWaistSize.trim()) {
      return "Please specify your waist size";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setIsLoading(true);

      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior - simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log("Form submitted:", formData);
      }

      setIsSubmitted(true);
      setIsLoading(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phoneNumber: "",
          address: "",
          waistSize: "",
          customWaistSize: "",
        });
      }, 3000);
    } catch (err) {
      setIsLoading(false);
      setError("Failed to submit form. Please try again later.");
      console.error("Form submission error:", err);
    }
  };

  const waistSizes = Array.from({ length: 13 }, (_, i) => 28 + i);

  // Common input style classes
  const inputBaseStyle =
    "w-full h-14 pl-10 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-base appearance-none bg-white transition-all duration-200 hover:border-orange-300";

  return (
    <Card className={`w-full max-w-md ${className}`}>
      <CardContent className="pt-6">
        <div className="flex items-center justify-center mb-4">
          <Bell className="h-5 w-5 text-orange-500 mr-2" />
          <h3 className="text-lg font-semibold">Get Notified When We Launch</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
            <input
              type="text"
              value={formData.name}
              onChange={handleInputChange("name")}
              placeholder="Your full name"
              className={inputBaseStyle}
              required
              disabled={isLoading}
            />
          </div>

          {/* Phone Number Input */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange("phoneNumber")}
              placeholder="Your mobile number"
              className={inputBaseStyle}
              pattern="[0-9]{10}"
              required
              disabled={isLoading}
            />
          </div>

          {/* Address Input */}
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
            <input
              type="text"
              value={formData.address}
              onChange={handleInputChange("address")}
              placeholder="Your address"
              className={inputBaseStyle}
              required
              disabled={isLoading}
            />
          </div>

          {/* Waist Size Selection */}
          <div className="relative">
            <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
            <select
              value={formData.waistSize}
              onChange={handleInputChange("waistSize")}
              className={inputBaseStyle}
              required
              disabled={isLoading}
            >
              <option value="">Select waist size</option>
              {waistSizes.map((size) => (
                <option key={size} value={size}>
                  {size} inches
                </option>
              ))}
              <option value="other">Other (specify below)</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none z-10" />
          </div>

          {/* Custom Size Input */}
          {formData.waistSize === "other" && (
            <div className="relative">
              <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <input
                type="text"
                value={formData.customWaistSize}
                onChange={handleInputChange("customWaistSize")}
                placeholder="Enter your waist size"
                className={inputBaseStyle}
                required
                disabled={isLoading}
              />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm text-center">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-6 transition-all duration-300 text-base shadow-lg flex items-center justify-center gap-2 rounded-xl italic uppercase h-14 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Submitting...
              </>
            ) : (
              "Notify Me"
            )}
          </Button>

          {/* Success Message */}
          {isSubmitted && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm text-center">
              Thank you, {formData.name}! We'll notify you when we launch.
            </div>
          )}

          {/* Disclaimer */}
          <p className="text-xs text-black text-center mt-2">
            By submitting, you agree to receive notifications about our
            merchandise launch.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
