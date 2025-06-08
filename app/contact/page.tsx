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

import { MapPin, Mail, Phone, Send, MessageCircle, User } from "lucide-react";
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

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSuccessMessage(""); // clear success message on change
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
        "We've recieved your response, We'll get back to you soon!"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "",
      });
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
        <section className="w-full py-12 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold md:text-4xl">Get In Touch</h2>
              <p className="max-w-[700px] mx-auto text-black md:text-lg">
                We're here to help you with your cricket journey. Reach out to
                us through any of these channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Phone */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center space-y-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Phone Support</h3>
                    <p className="text-sm text-black space-y-1">
                      <div>WhatsApp: +91 9964391643</div>
                      <div>IVR: +91 9964392643</div>
                      <div>Office: +91 9964396643</div>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center space-y-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email Support</h3>
                    <p className="text-sm text-black">
                      hello@therunbhumi.com
                      <br />
                      <span className="text-xs block mt-1">
                        We reply within 24 hours
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Office */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center space-y-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Office</h3>
                    <p className="text-sm text-black">
                      770, Tower B - 1
                      <br />
                      Spaze IT Park, Sector 49
                      <br />
                      Gurugram, Haryana - 122002
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form & Map */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold md:text-4xl">
                    Send us a Message
                  </h2>
                  <p className="text-black">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder="Your full name"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="your@email.com"
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {/* Phone */}
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+91 XXXXXXXXXX"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        {/* Inquiry Type */}
                        <div>
                          <Label htmlFor="inquiryType">Inquiry Type</Label>
                          <Select
                            onValueChange={handleSelectChange}
                            value={formData.inquiryType}
                          >
                            <SelectTrigger>
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
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Brief subject of your message"
                          required
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <div className="relative">
                          <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us more about your inquiry..."
                            rows={5}
                            required
                            className="pl-10 resize-none"
                          />
                        </div>
                      </div>

                      {/* Success Message */}
                      {successMessage && (
                        <p className="text-green-600 font-semibold mb-2">
                          {successMessage}
                        </p>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
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

              {/* Map */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold md:text-4xl">
                    Our Location
                  </h2>
                  <p className="text-black">
                    Visit our office or connect with us virtually.
                  </p>
                </div>

                <div className="w-full h-[550px] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7017.994741987926!2d77.03521849591594!3d28.419336189033235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23491456411f%3A0xa094d858266d8e27!2sTrue%20Dream%20Reality%20-%20Furnished%20Business%20Office%20Space%20in%20Gurgaon!5e0!3m2!1sen!2sin!4v1745148920064!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RunBhumi Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
