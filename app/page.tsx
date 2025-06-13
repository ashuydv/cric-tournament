"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  ChevronRight,
  MapPin,
  Trophy,
  Users,
  Flame,
  Search,
  ShoppingCart,
  ChevronDown,
  UserPlus2Icon,
  UserCircle,
  LineChart,
  BarChart,
  Landmark,
  Tv,
  CheckCircleIcon,
  ActivityIcon,
  ShieldIcon,
  TrophyIcon,
  BathIcon,
  CheckSquareIcon,
  UserIcon,
  UsersIcon,
  MapPinIcon,
  CalendarIcon,
  BarChart3Icon,
  RouteIcon,
  FilterIcon,
  GraduationCapIcon,
  StarIcon,
  SparklesIcon,
  PlayIcon,
  TvIcon,
  PlayCircleIcon,
  CameraIcon,
  SwordsIcon,
  HeartIcon,
  BrainCircuitIcon,
  BrainIcon,
  MapIcon,
  SunIcon,
  CalendarDaysIcon,
  Camera,
  ClipboardCheckIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ParallaxSplitHero from "@/components/hero/parallax-split-hero";
import RegisterButton from "@/components/register-button";
import DynamicButton from "@/components/dynamic-button";
import SelectionPathRoadmap from "@/components/selection-path-roadmap";
import CricketCurriculum from "@/components/comprehensive-curriculum";
import { Input } from "@/components/ui/input";

// Define trial schedule data
const trialSchedule = [
  {
    date: "28-Jun-25",
    locations: ["Indore", "Gwalior", "Vadodara", "Coming Soon"],
  },
  {
    date: "29-Jun-25",
    locations: ["Surat", "Ahmedabad", "Rajkot", "Coming Soon"],
  },
  {
    date: "05-Jul-25",
    locations: ["Varanasi", "Delhi", "Coming Soon", "Goa"],
  },
  {
    date: "06-Jul-25",
    locations: ["Kolkata", "Patna", "Lucknow", "Coming Soon"],
  },
  {
    date: "12-Jul-25",
    locations: ["Bhopal", "Jabalpur", "Gwalior", "Coming Soon"],
  },
  {
    date: "13-Jul-25",
    locations: ["Thane", "Pune", "Panvel", "Coming Soon"],
  },
  {
    date: "19-Jul-25",
    locations: ["Mumbai", "Nashik", "Bangalore", "Coming Soon"],
  },
  {
    date: "20-Jul-25",
    locations: ["Hyderabad", "Vijayawada", "Mysore", "Coming Soon"],
  },
  {
    date: "26-Jul-25",
    locations: ["Raipur", "Bhubaneshwar", "Dehradun", "Coming Soon"],
  },
  {
    date: "27-Jul-25",
    locations: ["Aurangabad", "Nagpur", "Solapur", "Kolhapur"],
  },
  {
    date: "02-Aug-25",
    locations: ["Noida", "Agra", "Amritsar", "Coming Soon"],
  },
  {
    date: "03-Aug-25",
    locations: ["Rajkot", "Udaipur", "Chennai", "Coming Soon"],
  },
  {
    date: "09-Aug-25",
    locations: ["Jhansi", "Jamshedpur", "Coming Soon", "Coming Soon"],
  },
  {
    date: "10-Aug-25",
    locations: ["Guwahati", "Ranchi", "Coming Soon", "Coming Soon"],
  },
  {
    date: "16-Aug-25",
    locations: ["Jammu", "Chandigarh", "Coming Soon", "Coming Soon"],
  },
  {
    date: "17-Aug-25",
    locations: ["Jaipur", "Jodhpur", "Coming Soon", "Coming Soon"],
  },
  {
    date: "23-Aug-25",
    locations: ["Meerut", "Hisar", "Coming Soon", "Coming Soon"],
  },
  {
    date: "24-Aug-25",
    locations: ["Amritsar", "Rohtak", "Coming Soon", "Coming Soon"],
  },
];

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [filteredSchedule, setFilteredSchedule] = useState(trialSchedule);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [appliedState, setAppliedState] = useState<string>("");
  const [appliedCity, setAppliedCity] = useState<string | null>(null);

  // Handle city selection from the trial schedule
  const handleCitySelect = (city: string) => {
    if (!city || city === "") return;
    setSelectedCity(city);
    setAppliedCity(city);
  };

  // Clear filters function
  const clearFilters = () => {
    setSelectedCity(null);
    setAppliedState("");
    setAppliedCity(null);
    setSearchTerm("");
    setFilteredSchedule(trialSchedule);
  };

  // Filter trial schedule based on search term and applied filters
  useEffect(() => {
    let filtered = trialSchedule;

    // Apply search term filter
    if (searchTerm) {
      filtered = filtered.filter((schedule) => {
        // Check if date contains search term
        if (schedule.date.toLowerCase().includes(searchTerm.toLowerCase()))
          return true;

        // Check if any location contains search term
        return schedule.locations.some((location) =>
          location.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }

    // Apply city filter
    if (appliedCity) {
      filtered = filtered.filter((schedule) =>
        schedule.locations.some(
          (location) => location.toLowerCase() === appliedCity.toLowerCase()
        )
      );
    }

    setFilteredSchedule(filtered);
  }, [searchTerm, appliedState, appliedCity]);

  return (
    <div className="flex flex-col bg-white">
      <ParallaxSplitHero
        title={
          <>
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
              RunBhumi
            </span>
          </>
        }
        description={
          // <>
          //   India's Biggest Individual Cricket Talent Hunt <br />
          //   RunBhumi isn't just an event. It's a movement. <br />A worldwide
          //   hunt to discover raw, unstoppable cricket talent from the streets,
          //   small towns, and forgotten corners of India — and bring them into
          //   the limelight of national television.
          // </>
          <>
            RunBhumi is India's first televised cricket-based reality show,
            followed by an international league, that discovers raw talent from
            India's heartlands, offering equal opportunities to all, regardless
            of caste, class, or background. <br /> More than a game, RunBhumi
            blends cricket with culture, nurturing talent through yoga,
            meditation, and Indian values — uniting Bharat through its roots and
            proving that we are our own destiny-makers!
          </>
        }
        backgroundSrc="/cric_bg.jpg"
        primaryButtonText="Join Now (Ages: 16-30)"
        primaryButtonLink="/register"
        secondaryButtonText="Explore Trials"
        secondaryButtonLink="/trials"
        showRightColumn={true}
        parallaxEnabled={true}
        parallaxSpeed={0.7}
      />

      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-orange-600">
                Why Choose RunBhumi?
              </h2>
              <p className="max-w-3xl text-black text-base md:text-xl mx-auto">
                RunBhumi offers a revolutionary cricket platform where talent
                meets opportunity, tradition meets innovation, and every player
                gets a fair chance to shine.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 relative z-10">
            <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Tv className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                International Exposure
              </h3>
              <p className="text-black">
                Our worldwide trials and training sessions ensure every
                participant—regardless of background—gains visibility on the
                international stage.
              </p>
            </Card>

            <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <UserCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                India & renowned International cricket legends
              </h3>
              <p className="text-black">
                Receive direct coaching and guidance from global cricketing
                legends, gaining invaluable insights from those who've excelled
                at the highest level of the game.
              </p>
            </Card>

            <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BarChart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Merit-Based Selection</h3>
              <p className="text-black">
                Our patented software enables transparent selection process
                which is purely performance, potential and skill based real time
                evaluation.
              </p>
            </Card>

            <Card className="md:col-span-2 lg:col-span-3 p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Franchise Opportunities
              </h3>
              <div className="text-black leading-relaxed space-y-4">
                <p className="font-medium text-gray-800">
                  India's first cultural cricket talent hunt, reality televised
                  show and international cricket league invites visionary
                  partners to join our mission.
                </p>

                <div className="space-y-3">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-700 mb-1">
                      Phase 1: Regional Expansion
                    </h4>
                    <p className="text-sm">
                      Zonal, state and city franchise trials in 60+ cities
                      across 5 zones and 20+ states throughout India.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-700 mb-1">
                      Phase 2: Reality Show
                    </h4>
                    <p className="text-sm">
                      India's first televised cricket reality show featuring
                      selected talent.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-700 mb-1">
                      Phase 3: Professional League
                    </h4>
                    <p className="text-sm">
                      Co-ownership opportunities for 8 teams featuring
                      international legends and RunBhumi players.
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">
                    📅 Phase 1 Franchise Registration: June 10 - July 15, 2025
                  </p>
                </div>
              </div>
            </Card>

            <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Landmark className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Gurukul Training (Televised Reality Show)
                </h3>
                <p className="text-black">
                  Experience a holistic development approach that nurtures not
                  only cricketing skills but also character, discipline, and
                  mental strength.
                </p>
              </Card>

              <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Global Network & Community
                </h3>
                <p className="text-black">
                  Join a vibrant community of aspiring cricketers from around
                  the world. Build lasting connections, share experiences, and
                  grow together in your cricket journey.
                </p>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <RegisterButton />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter">
                Trials Overview
              </h2>
              <p className="max-w-[900px] text-black text-base md:text-lg">
                Follow all the action from the RunBhumi 2025
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 md:mt-12">
            <Tabs defaultValue="eligibility" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-1 bg-orange-50/50 p-1">
                <TabsTrigger
                  value="eligibility"
                  className="text-xs sm:text-sm md:text-base py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  <div className="flex flex-col items-center gap-1">
                    <UserIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-center leading-tight">
                      <span className="block sm:hidden">Age & Eligibility</span>
                      <span className="hidden sm:block">Age & Eligibility</span>
                    </span>
                  </div>
                </TabsTrigger>

                <TabsTrigger
                  value="city-wise"
                  className="text-xs sm:text-sm md:text-base py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  <div className="flex flex-col items-center gap-1">
                    <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-center leading-tight">
                      <span className="block sm:hidden">Trial Locations</span>
                      <span className="hidden sm:block">
                        City-wise Trial Info
                      </span>
                    </span>
                  </div>
                </TabsTrigger>

                <TabsTrigger
                  value="assessment"
                  className="text-xs sm:text-sm md:text-base py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  <div className="flex flex-col items-center gap-1">
                    <ClipboardCheckIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-center leading-tight">
                      <span className="block sm:hidden">What to Expect</span>
                      <span className="hidden sm:block">Skill Assessments</span>
                    </span>
                  </div>
                </TabsTrigger>

                <TabsTrigger
                  value="criteria"
                  className="text-xs sm:text-sm md:text-base py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  <div className="flex flex-col items-center gap-1">
                    <TrophyIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-center leading-tight">
                      <span className="block sm:hidden">Selection Process</span>
                      <span className="hidden sm:block">
                        Shortlisting Criteria
                      </span>
                    </span>
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="city-wise" className="pt-6">
                <Card className="overflow-hidden border border-gray-200 mb-8 sm:mb-10">
                  {/* Search and Filter Section */}
                  <div className="p-4 bg-gray-50 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search city or date..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 bg-white text-sm"
                        />
                      </div>
                      {(appliedState || appliedCity || searchTerm) && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={clearFilters}
                          className="text-xs sm:text-sm w-full sm:w-auto"
                        >
                          Reset Filters
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Mobile Card View */}
                  <div className="block sm:hidden">
                    {filteredSchedule.length > 0 ? (
                      <div className="divide-y divide-gray-200">
                        {filteredSchedule.map((schedule, index) => (
                          <div key={index} className="p-4 bg-white">
                            <div className="font-semibold text-orange-600 mb-3 text-sm">
                              {schedule.date}
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {schedule.locations.map((location, locIndex) => (
                                <div key={locIndex} className="text-center">
                                  {location && location !== "Coming Soon" ? (
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className={`w-full text-xs ${
                                        selectedCity === location
                                          ? "bg-orange-100 text-orange-800"
                                          : "text-orange-600 hover:text-orange-800 hover:bg-orange-100"
                                      }`}
                                      onClick={() => handleCitySelect(location)}
                                    >
                                      {location}
                                      {selectedCity === location && (
                                        <Check className="ml-1 h-3 w-3" />
                                      )}
                                    </Button>
                                  ) : (
                                    <div className="text-gray-400 text-xs py-2">
                                      {location || "—"}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 text-center text-black text-sm">
                        No trial dates match your current filters. Please try
                        different search criteria.
                      </div>
                    )}
                  </div>

                  {/* Tablet and Desktop Table View */}
                  <div className="hidden sm:block overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-orange-100">
                        <TableRow>
                          <TableHead className="w-1/5 font-bold text-xs sm:text-sm">
                            Date
                          </TableHead>
                          <TableHead className="text-center font-bold text-xs sm:text-sm">
                            Location 1
                          </TableHead>
                          <TableHead className="text-center font-bold text-xs sm:text-sm">
                            Location 2
                          </TableHead>
                          <TableHead className="text-center font-bold text-xs sm:text-sm">
                            Location 3
                          </TableHead>
                          <TableHead className="text-center font-bold text-xs sm:text-sm">
                            Location 4
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredSchedule.length > 0 ? (
                          filteredSchedule.map((schedule, index) => (
                            <TableRow
                              key={index}
                              className={
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }
                            >
                              <TableCell className="font-medium text-xs sm:text-sm">
                                {schedule.date}
                              </TableCell>
                              {schedule.locations.map((location, locIndex) => (
                                <TableCell
                                  key={locIndex}
                                  className="text-center"
                                >
                                  {location && location !== "Coming Soon" ? (
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className={`text-xs sm:text-sm ${
                                        selectedCity === location
                                          ? "bg-orange-100 text-orange-800"
                                          : "text-orange-600 hover:text-orange-800 hover:bg-orange-100"
                                      }`}
                                    >
                                      {location}
                                      {selectedCity === location && (
                                        <Check className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                                      )}
                                    </Button>
                                  ) : (
                                    <span className="text-gray-400 text-xs sm:text-sm">
                                      {location || "—"}
                                    </span>
                                  )}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={5}
                              className="text-center py-8 text-black text-sm"
                            >
                              No trial dates match your current filters. Please
                              try different search criteria.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Table Footer - Responsive */}
                  {filteredSchedule.length > 0 && (
                    <div className="p-3 sm:p-4 bg-gray-50 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="text-xs sm:text-sm text-black">
                          {filteredSchedule.length === trialSchedule.length
                            ? `Showing all ${trialSchedule.length} trial dates`
                            : `Showing ${filteredSchedule.length} of ${trialSchedule.length} trial dates`}
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </TabsContent>

              <TabsContent value="eligibility" className="pt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          <UserIcon className="mr-2 h-5 w-5 text-orange-500" />
                          Age Categories
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <p>Ages 16-30 years</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          <CheckSquareIcon className="mr-2 h-5 w-5 text-orange-500" />
                          Basic Requirements
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Valid government-issued Photo ID proof (Aadhar
                            Card/Passport/Driving License)
                          </li>
                          <li>
                            Medical certificate, to be produced as required on
                            requirement basis
                          </li>
                          <li>
                            Previous playing experience documentation (if any)
                          </li>
                          <li>
                            Registration fee of <strong>₹1,500 + GST</strong>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          <ShieldIcon className="mr-2 h-5 w-5 text-orange-500" />
                          Eligibility Restrictions
                        </h3>
                        <p className="mb-2">
                          Participants are NOT eligible if they:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <b>
                              Are currently contracted with any zone, state,
                              national cricket association related to BCCI
                            </b>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="assessment" className="pt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-orange-50 to-white p-5 rounded-xl">
                          <h3 className="text-xl font-bold mb-3 flex items-center">
                            <BathIcon className="mr-2 h-5 w-5 text-orange-600" />
                            Batting Assessment
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>
                                Technical skill evaluation in nets (5-10
                                minutes)
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>
                                Match simulation scenarios against quality
                                bowling
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>
                                Power-hitting assessment with specialized drills
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>
                                Shot selection and decision-making tests
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-white p-5 rounded-xl">
                          <h3 className="text-xl font-bold mb-3 flex items-center">
                            <TrophyIcon className="mr-2 h-5 w-5 text-orange-600" />
                            Bowling Assessment
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>
                                Accuracy tests with proper bowling actions
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Pace measurement for fast bowlers</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>
                                Bowling variation execution assessment
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>
                                Death bowling under pressure scenarios
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-orange-50 to-white p-5 rounded-xl">
                          <h3 className="text-xl font-bold mb-3 flex items-center">
                            <ShieldIcon className="mr-2 h-5 w-5 text-orange-600" />
                            Fielding Assessment
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Ground fielding and catching drills</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Throwing accuracy and distance tests</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Boundary line fielding techniques</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Reaction time and agility evaluation</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-white p-5 rounded-xl">
                          <h3 className="text-xl font-bold mb-3 flex items-center">
                            <ActivityIcon className="mr-2 h-5 w-5 text-orange-600" />
                            Physical Fitness
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Sprint tests</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Agility drills and measurements</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Strength and power assessments</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="criteria" className="pt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      {/* Evaluation Methodology Section */}
                      <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                        <h3 className="text-2xl font-bold mb-4 text-orange-700 flex items-center">
                          <BarChart3Icon className="mr-3 h-6 w-6 text-orange-600" />
                          Evaluation Methodology
                        </h3>
                        <p className="mb-6 text-black text-lg">
                          RunBhumi uses a transparent evaluation process
                          designed to identify complete cricketers with the
                          perfect balance of technical skills, tactical
                          intelligence, physical prowess, and mental strength.
                        </p>
                      </div>

                      <SelectionPathRoadmap />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Separate Gurukul Experience Section */}
      <section className="w-full py-12 bg-orange-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter text-orange-700">
                The Gurukul Experience
              </h2>
              <p className="max-w-[900px] text-black text-base md:text-lg">
                An immersive 45-day cricket talent hunt, blending cricket legacy
                wisdom with modern techniques
              </p>
            </div>
          </div>

          <div className="bg-orange-100 rounded-xl overflow-hidden shadow-md">
            <div className="relative h-64 bg-orange-100">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-orange-800/80 flex items-center justify-center">
                <div className="text-center px-4">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Transform Your Cricket Journey
                  </h3>
                  <p className="text-white text-lg max-w-2xl mx-auto">
                    Join our elite residential program with legendary cricket
                    mentors
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                    <CalendarDaysIcon className="mr-2 h-5 w-5 text-orange-600" />
                    Bootcamp Overview
                  </h4>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-orange-100">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                          <SunIcon className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <span className="font-medium block">
                            45-Day Residential Program
                          </span>
                          <span className="text-black text-sm">
                            Full immersion in a cricket-focused environment
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                          <MapIcon className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <span className="font-medium block">
                            State-of-the-Art Facility
                          </span>
                          <span className="text-black text-sm">
                            Located in a serene setting with amazing facilities
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                          <UsersIcon className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <span className="font-medium block">
                            ₹1 Lakh Reward for Selected Players
                          </span>
                          <span className="text-black text-sm">
                            Recognizing top talent with exciting rewards
                          </span>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                          <TvIcon className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <span className="font-medium block">
                            Nationally Televised
                          </span>
                          <span className="text-black text-sm">
                            Weekly episodes showcasing player journeys
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <CricketCurriculum />
                  {/* <h4 className="text-xl font-bold text-orange-700 mt-8 mb-4 flex items-center">
                    <BrainIcon className="mr-2 h-5 w-5 text-orange-600" />
                    Comprehensive Curriculum
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Camera className="h-6 w-6 text-orange-600 mb-2" />
                      <h5 className="font-semibold mb-1">Cricket Skills</h5>
                      <ul className="text-sm text-black space-y-1">
                        <li>• Advanced batting techniques</li>
                        <li>• Professional bowling skills</li>
                        <li>• Strategic fielding positions</li>
                        <li>• Match situation awareness</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <ActivityIcon className="h-6 w-6 text-orange-600 mb-2" />
                      <h5 className="font-semibold mb-1">Physical Fitness</h5>
                      <ul className="text-sm text-black space-y-1">
                        <li>• Sport-specific conditioning</li>
                        <li>• Strength & power training</li>
                        <li>• Speed & agility drills</li>
                        <li>• Injury prevention protocols</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <SwordsIcon className="h-6 w-6 text-orange-600 mb-2" />
                      <h5 className="font-semibold mb-1">Discipline</h5>
                      <ul className="text-sm text-black space-y-1">
                        <li>• Structured daily routines</li>
                        <li>• Team-oriented challenges</li>
                        <li>• Punctuality & dedication</li>
                        <li>• Traditional values & ethics</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <BrainCircuitIcon className="h-6 w-6 text-orange-600 mb-2" />
                      <h5 className="font-semibold mb-1">Mental Strength</h5>
                      <ul className="text-sm text-black space-y-1">
                        <li>• Pressure handling</li>
                        <li>• Visualization techniques</li>
                        <li>• Focus & concentration</li>
                        <li>• Performance psychology</li>
                      </ul>
                    </div>
                  </div> */}
                </div>

                <div>
                  <h4 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                    <UsersIcon className="mr-2 h-5 w-5 text-orange-600" />
                    Proposed Legendary Mentors
                  </h4>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 flex items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="h-20 w-20 bg-orange-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                        <Image
                          width={200}
                          height={200}
                          alt=""
                          src="/suresh-raina.webp"
                          className=" object-cover object-top"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Suresh Raina</h5>
                        <p className="text-black">Middle Order Guide</p>
                        <div className="mt-1 flex">
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                            Mr. IPL
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 flex items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="h-20 w-20 bg-orange-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                        <Image
                          width={200}
                          height={200}
                          alt=""
                          src="/hershell-gibbs.jpg"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Herschelle Gibbs</h5>
                        <p className="text-black">Batting Maestro</p>
                        <div className="mt-1 flex">
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                            South African Legend
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 flex items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="h-20 w-20 bg-orange-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                        <Image
                          width={200}
                          height={200}
                          alt=""
                          src="/jayasurya.jpg"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Sanath Jayasuriya</h5>
                        <p className="text-black">Explosive All-Rounder</p>
                        <div className="mt-1 flex">
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                            Sri Lankan Icon
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 flex items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="h-20 w-20 bg-orange-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                        <Image
                          width={200}
                          height={200}
                          alt=""
                          src="/gony.png"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">
                          Manpreet Singh Gony
                        </h5>
                        <p className="text-black">Pace Attack Mentor</p>
                        <div className="mt-1 flex">
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                            IPL & India Fast Bowler
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 flex items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="h-20 w-20 bg-orange-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                        <Image
                          width={200}
                          height={200}
                          alt=""
                          src="/anjum-chopra.webp"
                          className=" object-contain object-top"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Anjum Chopra</h5>
                        <p className="text-black">Women's Cricket Ambassador</p>
                        <div className="mt-1 flex">
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                            Former India Captain
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-orange-700 mt-8 mb-4 flex items-center">
                    <TvIcon className="mr-2 h-5 w-5 text-orange-600" />
                    Televised Journey
                  </h4>

                  <div className="bg-white p-5 rounded-lg shadow-sm border border-orange-100">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-orange-100 pb-3">
                        <div className="flex items-center">
                          <PlayCircleIcon className="h-6 w-6 text-orange-600 mr-2" />
                          <span className="font-medium">
                            Weekly Mega Episodes
                          </span>
                        </div>
                        <span className="text-sm text-orange-600">
                          Saturday, Sunday
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                            <CameraIcon className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <span className="font-medium block">
                              Training Highlights
                            </span>
                            <span className="text-black text-sm">
                              Behind-the-scenes look at daily practice sessions
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                            <SwordsIcon className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <span className="font-medium block">
                              Weekly Challenges
                            </span>
                            <span className="text-black text-sm">
                              Competitive tasks testing various cricketing
                              skills
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                            <HeartIcon className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <span className="font-medium block">
                              Player Journeys
                            </span>
                            <span className="text-black text-sm">
                              Personal stories and transformation of
                              participants
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                            <StarIcon className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <span className="font-medium block">
                              Mentor Insights
                            </span>
                            <span className="text-black text-sm">
                              Expert commentary and guidance from cricket
                              legends
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="text-black text-2xl font-medium mb-4">
                  Experience a cricket training program unlike any other in the
                  world
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
