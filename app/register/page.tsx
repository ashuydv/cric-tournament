"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Calendar, User, Check, ArrowRight } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"

export default function RegistrationPage() {
    const [formData, setFormData] = useState({
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
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: { target: { id: any; value: any } }) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSelectChange = (id: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Here you would typically send data to your backend
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log("Registration data:", formData);

            toast({
                title: "Registration successful!",
                description: "Your cricket trial registration has been submitted.",
                variant: "default",
            });

        } catch (error) {
            toast({
                title: "Registration failed",
                description: "There was an error processing your registration. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-44 pb-32 md:py-52 lg:py-64 bg-black text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Register for RunBhumi</h2>
                                <p className="max-w-[700px] text-gray-400 md:text-xl mx-auto">
                                    Join us for an incredible running experience across India's most beautiful landscapes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Registration Form Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                            {/* Registration Form */}
                            <div className="space-y-6">
                                {isSubmitting ? (
                                    <Card className="p-6 bg-green-50 border-green-200">
                                        <CardContent className="pt-6 flex flex-col items-center text-center">
                                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                                <Check className="h-6 w-6 text-green-600" />
                                            </div>
                                            <h2 className="text-2xl font-bold mb-2">Registration Complete!</h2>
                                            <p className="text-gray-600 mb-4">
                                                Thank you for registering for RunBhumi. A confirmation email has been sent to {formData.email}.
                                            </p>
                                            <Button
                                                onClick={() => setIsSubmitting(false)}
                                                className="bg-green-600 hover:bg-green-700"
                                            >
                                                Register Another Person
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    <>
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Registration Form</h2>
                                            <p className="text-muted-foreground">
                                                Complete the form below to secure your spot in the upcoming RunBhumi event.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="firstName" className="block text-sm font-medium">
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
                                                <label htmlFor="middleName" className="block text-sm font-medium">
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
                                                <label htmlFor="surname" className="block text-sm font-medium">
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
                                                <label htmlFor="mobileNumber" className="block text-sm font-medium">
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

                                            <div className="space-y-2">
                                                <label htmlFor="dateOfBirth" className="block text-sm font-medium">
                                                    Date of Birth <span className="text-red-400">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Input
                                                        id="dateOfBirth"
                                                        type="date"
                                                        placeholder="dd-mm-yyyy"
                                                        value={formData.dateOfBirth}
                                                        onChange={handleChange}
                                                        required
                                                        className="bg-white text-black"
                                                    />
                                                    <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="email" className="block text-sm font-medium">
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
                                                <label htmlFor="state" className="block text-sm font-medium">
                                                    State <span className="text-red-400">*</span>
                                                </label>
                                                <Select
                                                    onValueChange={(value) => handleSelectChange("state", value)}
                                                    required
                                                >
                                                    <SelectTrigger className="bg-white text-black">
                                                        <SelectValue placeholder="Select a state" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                                        <SelectItem value="delhi">Delhi</SelectItem>
                                                        <SelectItem value="karnataka">Karnataka</SelectItem>
                                                        <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                                                        <SelectItem value="westbengal">West Bengal</SelectItem>
                                                        <SelectItem value="gujarat">Gujarat</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="trialCity" className="block text-sm font-medium">
                                                    Trial City <span className="text-red-400">*</span>
                                                </label>
                                                <Select
                                                    onValueChange={(value) => handleSelectChange("trialCity", value)}
                                                    required
                                                >
                                                    <SelectTrigger className="bg-white text-black">
                                                        <SelectValue placeholder="Select a city" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="mumbai">Mumbai</SelectItem>
                                                        <SelectItem value="delhi">Delhi</SelectItem>
                                                        <SelectItem value="bangalore">Bangalore</SelectItem>
                                                        <SelectItem value="chennai">Chennai</SelectItem>
                                                        <SelectItem value="kolkata">Kolkata</SelectItem>
                                                        <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="trialZone" className="block text-sm font-medium">
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
                                                <label htmlFor="playingRoles" className="block text-sm font-medium">
                                                    Playing Roles <span className="text-red-400">*</span>
                                                </label>
                                                <Select
                                                    onValueChange={(value) => handleSelectChange("playingRoles", value)}
                                                    required
                                                >
                                                    <SelectTrigger className="bg-white text-black">
                                                        <SelectValue placeholder="Select Playing Roles" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="batsman">Batsman</SelectItem>
                                                        <SelectItem value="bowler">Bowler</SelectItem>
                                                        <SelectItem value="allrounder">All-Rounder</SelectItem>
                                                        <SelectItem value="wicketkeeper">Wicket Keeper</SelectItem>
                                                        <SelectItem value="wicketkeeperBatsman">Wicket Keeper-Batsman</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="battingHandedness" className="block text-sm font-medium">
                                                    Batting Handedness <span className="text-red-400">*</span>
                                                </label>
                                                <Select
                                                    onValueChange={(value) => handleSelectChange("battingHandedness", value)}
                                                    required
                                                >
                                                    <SelectTrigger className="bg-white text-black">
                                                        <SelectValue placeholder="Select Batting Handedness" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="rightHanded">Right Handed</SelectItem>
                                                        <SelectItem value="leftHanded">Left Handed</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="preferredBowlingStyle" className="block text-sm font-medium">
                                                    Preferred Bowling Style <span className="text-red-400">*</span>
                                                </label>
                                                <Select
                                                    onValueChange={(value) => handleSelectChange("preferredBowlingStyle", value)}
                                                    required
                                                >
                                                    <SelectTrigger className="bg-white text-black">
                                                        <SelectValue placeholder="Select Preferred Bowling Style" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="fastBowling">Fast Bowling</SelectItem>
                                                        <SelectItem value="medium">Medium</SelectItem>
                                                        <SelectItem value="spinBowling">Spin Bowling</SelectItem>
                                                        <SelectItem value="none">None</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="preferredBattingOrder" className="block text-sm font-medium">
                                                    Preferred Batting Order <span className="text-red-400">*</span>
                                                </label>
                                                <Select
                                                    onValueChange={(value) => handleSelectChange("preferredBattingOrder", value)}
                                                    required
                                                >
                                                    <SelectTrigger className="bg-white text-black">
                                                        <SelectValue placeholder="Select Preferred Batting Order" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="opener">Opener</SelectItem>
                                                        <SelectItem value="topOrder">Top Order</SelectItem>
                                                        <SelectItem value="middleOrder">Middle Order</SelectItem>
                                                        <SelectItem value="lowerOrder">Lower Order</SelectItem>
                                                        <SelectItem value="tailEnder">Tail Ender</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="tshirtSizes" className="block text-sm font-medium">
                                                    Tshirt Sizes <span className="text-red-400">*</span>
                                                </label>
                                                <Select
                                                    onValueChange={(value) => handleSelectChange("tshirtSizes", value)}
                                                    required
                                                >
                                                    <SelectTrigger className="bg-white text-black">
                                                        <SelectValue placeholder="Select Tshirt Size" />
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

                                            <div className="md:col-span-2 flex justify-center mt-6">
                                                <Button
                                                    type="submit"
                                                    className="bg-amber-500 hover:bg-amber-600 text-black px-10 py-2.5 font-medium text-md"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? "Processing..." : "Register"}
                                                    <ArrowRight className="ml-2 h-5 w-5" />
                                                </Button>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </div>

                            {/* Event Information */}
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Event Information</h2>
                                    <p className="text-muted-foreground">Important details about the upcoming RunBhumi event.</p>
                                </div>

                                <div className="grid gap-6">
                                    <Card>
                                        <CardContent className="p-6 flex items-start space-x-4">
                                            <Calendar className="h-6 w-6 text-orange-500 mt-1" />
                                            <div>
                                                <h3 className="font-bold">Event Starts</h3>
                                                <p className="text-muted-foreground mt-1">
                                                    Thursday, April 18, 2025
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6 flex items-start space-x-4">
                                            <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                                            <div>
                                                <h3 className="font-bold">Office Address</h3>
                                                <p className="text-muted-foreground mt-1">
                                                    MNT Dreams Pvt. Ltd.
                                                    <br />
                                                    770 , Tower B - 1 <br />
                                                    Spaze IT park ,Sector 49 <br />
                                                    Sohna Road, Gurugram, Haryana-122002
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6 flex items-start space-x-4">
                                            <User className="h-6 w-6 text-orange-500 mt-1" />
                                            <div>
                                                <h3 className="font-bold">Registration Includes</h3>
                                                <ul className="text-muted-foreground mt-1 space-y-1">
                                                    <li>• Official RunBhumi T-shirt</li>
                                                    <li>• Race bib with timing chip</li>
                                                    <li>• Finisher's medal</li>
                                                    <li>• Refreshments during and after the race</li>
                                                    <li>• Access to post-race celebration</li>
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6 flex items-start space-x-4">
                                            <Mail className="h-6 w-6 text-orange-500 mt-1" />
                                            <div>
                                                <h3 className="font-bold">Contact</h3>
                                                <p className="text-muted-foreground mt-1">
                                                    Email: hello@therunbhumi.com
                                                    <br />
                                                    Phone: +91 22 9876 5432
                                                    <br />
                                                    Office: +91 99643 91643
                                                    <br />
                                                    WhatsApp Enquiries: +91 99643 92643
                                                    <br />
                                                    IVR: +91 99643 96643
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-orange-950/20">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center mb-10">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Event Location</h2>
                            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                                The starting point and finish line will be at Marine Drive, Mumbai
                            </p>
                        </div>

                        <div className="w-full h-[400px] rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.6809425325084!2d72.82073157501771!3d18.944450955540732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1de2e3b5f37%3A0x15a97afa2bd5362b!2sMarine%20Drive%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1681472521999!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="RunBhumi Event Location"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}