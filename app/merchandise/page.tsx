"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Mail, CalendarClock, Bell, User, Phone } from "lucide-react"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

export default function MerchandisePage() {
    // Form state
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // Countdown state
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Launch date - June 1, 2025
    const launchDate = new Date("2025-05-31T00:00:00");

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
                    seconds: 0
                };
            }

            // Calculate time units
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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

        try {
            setIsLoading(true);

            // Here you would typically send this to your API
            // Simulate API call with timeout
            await new Promise(resolve => setTimeout(resolve, 800));

            console.log("Form submitted:", { name, phoneNumber });

            // Show success message
            setIsSubmitted(true);
            setIsLoading(false);

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setName("");
                setPhoneNumber("");
            }, 3000);
        } catch (err) {
            setIsLoading(false);
            setError("Failed to submit form. Please try again later.");
            console.error("Form submission error:", err);
        }
    }

    // Sample merchandise data (keeping this for future use)
    const merchandise = {
        jerseys: Array.from({ length: 8 }, (_, i) => ({
            id: `jersey-${i + 1}`,
            name: `${["Mumbai Strikers", "Delhi Dynamos", "Bangalore Blasters", "Chennai Kings"][i % 4]} Official Jersey ${new Date().getFullYear()}`,
            price: 1499 + i * 100,
            image: `/placeholder.svg?height=300&width=300&text=Jersey+${i + 1}`,
            rating: 4.5,
            reviews: 24 + i,
            isNew: i < 2,
            isBestseller: i >= 2 && i < 4,
        })),
        accessories: Array.from({ length: 6 }, (_, i) => ({
            id: `accessory-${i + 1}`,
            name: `RunBhumi ${["Cap", "Wristband", "Backpack", "Water Bottle", "Keychain", "Scarf"][i % 6]}`,
            price: 499 + i * 50,
            image: `/placeholder.svg?height=300&width=300&text=Accessory+${i + 1}`,
            rating: 4.2,
            reviews: 18 + i,
            isNew: i < 1,
            isBestseller: i >= 1 && i < 3,
        })),
        memorabilia: Array.from({ length: 4 }, (_, i) => ({
            id: `memorabilia-${i + 1}`,
            name: `${["Signed Cricket Bat", "Team Photo Frame", "Championship Trophy Replica", "Commemorative Cricket Ball"][i % 4]}`,
            price: 2999 + i * 1000,
            image: `/placeholder.svg?height=300&width=300&text=Memorabilia+${i + 1}`,
            rating: 4.8,
            reviews: 12 + i,
            isNew: i < 1,
            isBestseller: i >= 1 && i < 2,
            isLimited: i >= 2,
        })),
    }

    // Function to render star rating (keeping for future use)
    const renderRating = (rating: any) => {
        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : i < rating
                                ? "text-yellow-400 fill-yellow-400 opacity-50"
                                : "text-gray-300"
                            }`}
                    />
                ))}
                <span className="ml-1 text-sm text-muted-foreground">{rating}</span>
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Coming Soon Hero Section */}
                <section className="w-full py-44 pb-32 md:py-52 lg:py-64 bg-black text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    Official Merchandise
                                </h1>
                                <p className="max-w-[700px] text-gray-100 md:text-xl mx-auto">
                                    Show your support with authentic RunBhumi cricket merchandise
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

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

                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Coming Soon!</h2>
                            <p className="text-xl text-gray-600 mb-8">
                                We're working hard to bring you the best cricket merchandise. Our store will be launching soon!
                            </p>

                            {/* Dynamic Countdown */}
                            <div className="flex flex-wrap justify-center gap-4 mb-12">
                                <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[120px] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-orange-100 transform scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-100"></div>
                                    <div className="text-3xl md:text-4xl font-bold text-orange-600 relative">
                                        {String(timeRemaining.days).padStart(2, '0')}
                                    </div>
                                    <div className="text-sm text-gray-500 relative">Days</div>
                                </div>

                                <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[120px] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-orange-100 transform scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-100"></div>
                                    <div className="text-3xl md:text-4xl font-bold text-orange-600 relative">
                                        {String(timeRemaining.hours).padStart(2, '0')}
                                    </div>
                                    <div className="text-sm text-gray-500 relative">Hours</div>
                                </div>

                                <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[120px] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-orange-100 transform scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-100"></div>
                                    <div className="text-3xl md:text-4xl font-bold text-orange-600 relative">
                                        {String(timeRemaining.minutes).padStart(2, '0')}
                                    </div>
                                    <div className="text-sm text-gray-500 relative">Minutes</div>
                                </div>

                                <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[120px] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-orange-100 transform scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-100"></div>
                                    <div className="text-3xl md:text-4xl font-bold text-orange-600 relative animate-pulse">
                                        {String(timeRemaining.seconds).padStart(2, '0')}
                                    </div>
                                    <div className="text-sm text-gray-500 relative">Seconds</div>
                                </div>
                            </div>

                            {/* Notification Form */}
                            <Card className="w-full max-w-md">
                                <CardContent className="pt-6">
                                    <div className="flex items-center justify-center mb-4">
                                        <Bell className="h-5 w-5 text-orange-500 mr-2" />
                                        <h3 className="text-lg font-semibold">Get Notified When We Launch</h3>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                            <Input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Your full name"
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                required
                                                disabled={isLoading}
                                            />
                                        </div>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                            <Input
                                                type="tel"
                                                value={phoneNumber}
                                                onChange={(e) => {
                                                    // Only allow digits
                                                    const value = e.target.value.replace(/\D/g, '');
                                                    // Limit to 10 digits
                                                    setPhoneNumber(value.slice(0, 10));
                                                }}
                                                placeholder="Your mobile number"
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                pattern="[0-9]{10}"
                                                required
                                                disabled={isLoading}
                                            />
                                        </div>

                                        {error && (
                                            <p className="text-red-600 text-sm text-center">
                                                {error}
                                            </p>
                                        )}

                                        <Button
                                            type="submit"
                                            className="w-full bg-orange-500 hover:bg-orange-600"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? "Submitting..." : "Notify Me"}
                                        </Button>

                                        {isSubmitted && (
                                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm text-center">
                                                Thank you, {name}! We'll notify you when we launch.
                                            </div>
                                        )}

                                        <p className="text-xs text-gray-500 text-center mt-2">
                                            By submitting, you agree to receive notifications about our merchandise launch.
                                        </p>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Teaser Section */}
                <section className="w-full py-16 bg-orange-50">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold">What to Expect</h2>
                            <p className="text-gray-600 mt-2">Preview of our upcoming merchandise categories</p>
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
                                    <p className="text-gray-600">
                                        Official team jerseys from all RunBhumi franchises. Show your team spirit with authentic player gear.
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
                                    <p className="text-gray-600">
                                        Complete your fan experience with caps, wristbands, backpacks and other essential match day gear.
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
                                    <p className="text-gray-600">
                                        Limited edition collectibles including signed cricket bats, trophy replicas and team photographs.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}