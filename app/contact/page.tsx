"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import LeftHero from "@/components/common/left-hero";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MapPin, Mail, Phone, Send, MessageCircle, User, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
    }

    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSuccessMessage(""); // clear success message on change

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSelectChange = (value: any) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value,
    }));
    setSuccessMessage(""); // clear success message on change
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.from("contact_messages").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          inquiry_type: formData.inquiryType,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setSuccessMessage(
        "We've received your message! We'll get back to you soon."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "",
      });
      setErrors({});
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <LeftHero
          title="Contact Us"
          description="Get in touch with our team for any inquiries about RunBhumi Cricket Talent Hunt"
          backgroundType="color"
          height="small"
          animated={true}
          parallaxEnabled={true}
          parallaxSpeed={0.7}
        />

        {/* Contact Cards */}
        <section className="w-full py-8 md:py-12 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Get In Touch</h2>
              <p className="max-w-[700px] mx-auto text-gray-600 text-sm md:text-base lg:text-lg px-4">
                We're here to help you with your cricket journey. Reach out to
                us through any of these channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto">
              {/* Phone */}
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardContent className="p-4 md:p-6 flex flex-col items-center space-y-3 md:space-y-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-sm md:text-base">Phone Support</h3>
                    <div className="text-xs md:text-sm text-gray-600 space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-medium">WhatsApp:</span>
                        <a href="tel:+919964391643" className="text-orange-600 hover:text-orange-700 transition-colors">
                          +91 9964391643
                        </a>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-medium">Office:</span>
                        <a href="tel:+919964392643" className="text-orange-600 hover:text-orange-700 transition-colors">
                          +91 9964392643
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardContent className="p-4 md:p-6 flex flex-col items-center space-y-3 md:space-y-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-sm md:text-base">Email Support</h3>
                    <a
                      href="mailto:support@therunbhumi.com"
                      className="text-xs md:text-sm text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      support@therunbhumi.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <div className="space-y-6 md:space-y-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
                  Send us a Message
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className={`pl-10 h-11 md:h-12 transition-colors ${errors.name ? 'border-red-500 focus:border-red-500' : 'focus:border-orange-500'
                              }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-500 text-xs flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className={`pl-10 h-11 md:h-12 transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'focus:border-orange-500'
                              }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-xs flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 XXXXXXXXXX"
                            className={`pl-10 h-11 md:h-12 transition-colors ${errors.phone ? 'border-red-500 focus:border-red-500' : 'focus:border-orange-500'
                              }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Inquiry Type */}
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType" className="text-sm font-medium">Inquiry Type</Label>
                        <Select
                          onValueChange={handleSelectChange}
                          value={formData.inquiryType}
                        >
                          <SelectTrigger className="h-11 md:h-12 focus:border-orange-500">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="registration">
                              Tournament Registration
                            </SelectItem>
                            <SelectItem value="trials">
                              Trial Information
                            </SelectItem>
                            <SelectItem value="sponsorship">
                              Sponsorship
                            </SelectItem>
                            <SelectItem value="media">
                              Media Partnership
                            </SelectItem>
                            <SelectItem value="technical">
                              Technical Support
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief subject of your message"
                        className={`h-11 md:h-12 transition-colors ${errors.subject ? 'border-red-500 focus:border-red-500' : 'focus:border-orange-500'
                          }`}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                          className={`pl-10 resize-none min-h-[120px] transition-colors ${errors.message ? 'border-red-500 focus:border-red-500' : 'focus:border-orange-500'
                            }`}
                        />
                      </div>
                      {errors.message && (
                        <p className="text-red-500 text-xs flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Success Message */}
                    {successMessage && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-700 font-medium text-sm flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          {successMessage}
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium h-11 md:h-12 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}