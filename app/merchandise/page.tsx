"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Mail,
  CalendarClock,
  Bell,
  User,
  Phone,
  MapPin,
  ChevronDown,
  Ruler,
} from "lucide-react";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useState,
  useEffect,
} from "react";
import { Input } from "@/components/ui/input";
import LeftHero from "@/components/common/left-hero";
import WhatYouGet from "@/components/common/what-you-get";
import NotificationForm from "@/components/notification-form";

export default function MerchandisePage() {
  // Form state
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [waistSize, setWaistSize] = useState("");
  const [customWaistSize, setCustomWaistSize] = useState("");

  // Countdown state
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Launch date - June 1, 2025
  const launchDate = new Date("2025-06-05T00:00:00");

  // Dynamic countdown effect
  useEffect(() => {
    // Function to calculate the time difference
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      // If the target date has passed, return all zeros
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Update countdown immediately
    setTimeRemaining(calculateTimeRemaining());

    // Set up interval to update countdown every second
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate form
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!phoneNumber.trim()) {
      setError("Please enter your mobile number");
      return;
    }

    // Phone number validation - ensure it's 10 digits
    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!address.trim()) {
      setError("Please enter your address");
      return;
    }

    try {
      setIsLoading(true);

      // Here you would typically send this to your API
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log("Form submitted:", { name, phoneNumber, address });

      // Show success message
      setIsSubmitted(true);
      setIsLoading(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setName("");
        setPhoneNumber("");
        setAddress("");
      }, 3000);
    } catch (err) {
      setIsLoading(false);
      setError("Failed to submit form. Please try again later.");
      console.error("Form submission error:", err);
    }
  };

  // Sample merchandise data (keeping this for future use)
  const merchandise = {
    jerseys: Array.from({ length: 8 }, (_, i) => ({
      id: `jersey-${i + 1}`,
      name: `${
        [
          "Mumbai Strikers",
          "Delhi Dynamos",
          "Bangalore Blasters",
          "Chennai Kings",
        ][i % 4]
      } Official Jersey ${new Date().getFullYear()}`,
      price: 1499 + i * 100,
      image: `/placeholder.svg?height=300&width=300&text=Jersey+${i + 1}`,
      rating: 4.5,
      reviews: 24 + i,
      isNew: i < 2,
      isBestseller: i >= 2 && i < 4,
    })),
    accessories: Array.from({ length: 6 }, (_, i) => ({
      id: `accessory-${i + 1}`,
      name: `RunBhumi ${
        ["Cap", "Wristband", "Backpack", "Water Bottle", "Keychain", "Scarf"][
          i % 6
        ]
      }`,
      price: 499 + i * 50,
      image: `/placeholder.svg?height=300&width=300&text=Accessory+${i + 1}`,
      rating: 4.2,
      reviews: 18 + i,
      isNew: i < 1,
      isBestseller: i >= 1 && i < 3,
    })),
    memorabilia: Array.from({ length: 4 }, (_, i) => ({
      id: `memorabilia-${i + 1}`,
      name: `${
        [
          "Signed Cricket Bat",
          "Team Photo Frame",
          "Championship Trophy Replica",
          "Commemorative Cricket Ball",
        ][i % 4]
      }`,
      price: 2999 + i * 1000,
      image: `/placeholder.svg?height=300&width=300&text=Memorabilia+${i + 1}`,
      rating: 4.8,
      reviews: 12 + i,
      isNew: i < 1,
      isBestseller: i >= 1 && i < 2,
      isLimited: i >= 2,
    })),
  };

  // Function to render star rating (keeping for future use)
  const renderRating = (rating: any) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : i < rating
                ? "text-yellow-400 fill-yellow-400 opacity-50"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-black">{rating}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <LeftHero
          title="Official Merchandise"
          description="Show your support with authentic RunBhumi cricket merchandise"
          backgroundType="image"
          backgroundSrc="https://images.pexels.com/photos/1827130/pexels-photo-1827130.jpeg"
          height="small"
          animated={true}
          parallaxEnabled={true}
          parallaxSpeed={0.7}
        />

        {/* Coming Soon Content */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="relative w-40 h-40 mb-8">
                <Image
                  src="/rb_logo.png"
                  alt="RunBhumi Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Coming Soon!
              </h2>
              <p className="text-xl text-black mb-8">
                We're working hard to bring you the best cricket merchandise.
                Our store will be launching soon!
              </p>

              {/* Dynamic Countdown */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[120px] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-orange-100 transform scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-100"></div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 relative">
                    {String(timeRemaining.days).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-black relative">Days</div>
                </div>

                <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[120px] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-orange-100 transform scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-100"></div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 relative">
                    {String(timeRemaining.hours).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-black relative">Hours</div>
                </div>

                <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[120px] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-orange-100 transform scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-100"></div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 relative">
                    {String(timeRemaining.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-black relative">Minutes</div>
                </div>

                <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[120px] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-orange-100 transform scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-100"></div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 relative animate-pulse">
                    {String(timeRemaining.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-black relative">Seconds</div>
                </div>
              </div>

              {/* Notification Form */}
              <NotificationForm />
            </div>
          </div>
        </section>

        {/* Teaser Section */}
        <WhatYouGet />
        {/* <section className="w-full py-16 bg-orange-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">What to Expect</h2>
              <p className="text-black mt-2">
                Preview of our upcoming merchandise categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Team+Jerseys"
                    fill
                    alt="Team Jerseys"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold mb-2">Team Jerseys</h3>
                  <p className="text-black">
                    Official team jerseys from all RunBhumi franchises. Show
                    your team spirit with authentic player gear.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Fan+Accessories"
                    fill
                    alt="Fan Accessories"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold mb-2">Accessories</h3>
                  <p className="text-black">
                    Complete your fan experience with caps, wristbands,
                    backpacks and other essential match day gear.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Memorabilia"
                    fill
                    alt="Memorabilia"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold mb-2">Memorabilia</h3>
                  <p className="text-black">
                    Limited edition collectibles including signed cricket bats,
                    trophy replicas and team photographs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
