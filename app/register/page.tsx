"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

export default function RegistrationPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");

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
    // You can add logic here if needed for city selection
    console.log("Selected city:", city);
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

        <section className="w-full py-12 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Eligibility Criteria
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                To be eligible for participation in the RunBhumi Trials 2025,
                participants must comply with the following conditions:
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-10">
              <ul className="space-y-6">
                <li className="flex items-center">
                  <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-md mr-3 shrink-0 mt-1">
                    MUST NOT
                  </div>
                  <p className="text-gray-700">
                    be below the age of 16 years at the time of registrations as
                    per legal identification documents.
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-md mr-3 shrink-0 mt-1">
                    MUST NOT
                  </div>
                  <p className="text-gray-700">
                    be currently registered with any state or district
                    association of BCCI.
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-md mr-3 shrink-0 mt-1">
                    MUST NOT
                  </div>
                  <p className="text-gray-700">
                    currently have any existing contract with any state or
                    district association of the BCCI.
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-md mr-3 shrink-0 mt-1">
                    MUST NOT
                  </div>
                  <p className="text-gray-700">
                    be participating or playing in any representative cricket
                    for any State or District Association of BCCI.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-700 mb-4">
                Important Note
              </h3>
              <p className="text-gray-700">
                All participants will be required to provide documentation
                confirming they meet these eligibility criteria. Any false
                information provided may result in disqualification without
                refund of registration fees. If you're unsure about your
                eligibility status, please contact our support team before
                registering.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            {/* Event Information */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Event Information
                </h2>
                <p className="text-muted-foreground">
                  Important details about the RunBhumi Cricket Talent Hunt.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Calendar className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-bold">Trials Start</h3>
                      <p className="text-muted-foreground mt-1">
                        Saturday, July 5, 2025
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
                        WhatsApp Enquiries: +91 9964391643
                        <br />
                        IVR: +91 9964392643
                        <br />
                        Office/Admin: +91 9964396643
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Registration Form
                </h2>
                <p className="text-muted-foreground">
                  Complete the form below to secure your spot in the upcoming
                  RunBhumi Cricket Talent Hunt.
                </p>
              </div>

              <div className="mb-6">
                <iframe
                  src="https://rzp.io/rzp/runbhumi-trails"
                  width="100%"
                  height="1500px"
                  frameBorder="0"
                  style={{ border: "none", overflow: "hidden" }}
                ></iframe>
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
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
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

            <div className="mt-4 text-center text-sm text-gray-500">
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
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
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
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
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
