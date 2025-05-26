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

export default function Home() {
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
            The World's Biggest Individual Cricket Talent Hunt <br />
            RunBhumi isn't just an event. It's a revolution. <br />A global hunt
            to uncover raw, unstoppable cricket talent from streets, small
            towns, and overlooked corners — not just in India, but across the
            world — and bring them into the spotlight on international
            platforms.
          </>
        }
        backgroundSrc="/cric_bg.png"
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
              <p className="max-w-3xl text-muted-foreground text-base md:text-xl mx-auto">
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
              <p className="text-gray-700">
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
                India & renowned International cricket legends
              </h3>
              <p className="text-gray-700">
                Receive direct coaching and guidance from global cricketing
                legends, gaining invaluable insights from those who’ve excelled
                at the highest level of the game.
              </p>
            </Card>

            <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BarChart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Merit-Based Selection</h3>
              <p className="text-gray-700">
                Our patented software enables transparent selection process
                which is purely performance, potential and skill based real time
                evaluation.
              </p>
            </Card>

            <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Franchise Opportunities
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Own your own T20 franchise in a one‑of‑its‑kind league alongside
                cricket’s most esteemed gurus. You’ll start seeing returns from
                day one, and it’s the perfect way to put your brand on the
                map—reaching fans both in India and around the world.
              </p>
            </Card>

            <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Landmark className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gurukul Training</h3>
              <p className="text-gray-700">
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
              <p className="text-gray-700">
                Join a vibrant community of aspiring cricketers from around the
                world. Build lasting connections, share experiences, and grow
                together in your cricket journey.
              </p>
            </Card>

            {/* <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <LineChart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Live Scoring & Analytics
              </h3>
              <p className="text-gray-700">
                Follow matches in real-time with our comprehensive scoring
                system and receive detailed performance analytics to improve
                your game.
              </p>
            </Card> */}
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
              <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
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
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-orange-50 p-4">
                      <CardTitle className="text-xl">Mumbai</CardTitle>
                      <CardDescription>Western Zone Trials</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CalendarIcon className="mr-2 h-4 w-4 text-orange-500" />
                          <span>May 15-18, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="mr-2 h-4 w-4 text-orange-500" />
                          <span>DY Patil Stadium, Navi Mumbai</span>
                        </div>
                        <div className="flex items-center">
                          <UsersIcon className="mr-2 h-4 w-4 text-orange-500" />
                          <span>300 slots available</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 bg-gray-50">
                      <RegisterButton />
                    </CardFooter>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardHeader className="bg-orange-50 p-4">
                      <CardTitle className="text-xl">Delhi</CardTitle>
                      <CardDescription>Northern Zone Trials</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CalendarIcon className="mr-2 h-4 w-4 text-orange-500" />
                          <span>June 5-8, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="mr-2 h-4 w-4 text-orange-500" />
                          <span>Arun Jaitley Stadium, Delhi</span>
                        </div>
                        <div className="flex items-center">
                          <UsersIcon className="mr-2 h-4 w-4 text-orange-500" />
                          <span>250 slots available</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 bg-gray-50">
                      <RegisterButton />
                    </CardFooter>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardHeader className="bg-orange-50 p-4">
                      <CardTitle className="text-xl">Chennai</CardTitle>
                      <CardDescription>Southern Zone Trials</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CalendarIcon className="mr-2 h-4 w-4 text-orange-500" />
                          <span>June 20-23, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="mr-2 h-4 w-4 text-orange-500" />
                          <span>MA Chidambaram Stadium, Chennai</span>
                        </div>
                        <div className="flex items-center">
                          <UsersIcon className="mr-2 h-4 w-4 text-orange-500" />
                          <span>275 slots available</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 bg-gray-50">
                      <RegisterButton />
                    </CardFooter>
                  </Card>
                </div>
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
                            Medical fitness certificate from a registered
                            medical practitioner
                          </li>
                          <li>
                            Previous playing experience documentation (if any)
                          </li>
                          <li>Registration fee of ₹1,500 + GST</li>
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
                            Are currently contracted with any zone, state,
                            national cricket association related to BCCI
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
                              <span>Yo-Yo endurance test</span>
                            </li>
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
                        <p className="mb-6 text-gray-700 text-lg">
                          RunBhumi uses a transparent evaluation process
                          designed to identify complete cricketers with the
                          perfect balance of technical skills, tactical
                          intelligence, physical prowess, and mental strength.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                        <h3 className="text-2xl font-bold mb-6 text-orange-700 flex items-center">
                          <RouteIcon className="mr-3 h-6 w-6 text-orange-600" />
                          Your Path to Selection
                        </h3>

                        <div className="relative">
                          <div className="absolute h-full w-1.5 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-600 left-6 top-0 rounded-full"></div>
                          <ol className="space-y-8 relative">
                            <li className="ml-16 relative group">
                              <div className="absolute -left-16 mt-1 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center border-4 border-white shadow-md transition-all duration-300 group-hover:bg-orange-200">
                                <span className="text-orange-600 font-bold text-xl">
                                  1
                                </span>
                              </div>
                              <div className="p-4 rounded-lg bg-white border border-orange-100 shadow-sm transition-all duration-300 group-hover:shadow-md transform group-hover:-translate-y-1">
                                <div className="flex items-center mb-1">
                                  <FilterIcon className="h-5 w-5 mr-2 text-orange-500" />
                                  <h4 className="text-lg font-semibold">
                                    Initial Screening
                                  </h4>
                                </div>
                                <p className="text-gray-700">
                                  Top 30% of participants from each zone advance
                                  based on their performance in skill
                                  assessments.
                                </p>
                                <div className="mt-2 text-sm bg-orange-50 text-orange-800 inline-block px-2 py-1 rounded">
                                  <UsersIcon className="h-4 w-4 inline mr-1" />{" "}
                                  2,500+ participants → 750 advance
                                </div>
                              </div>
                            </li>

                            <li className="ml-16 relative group">
                              <div className="absolute -left-16 mt-1 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center border-4 border-white shadow-md transition-all duration-300 group-hover:bg-orange-200">
                                <span className="text-orange-600 font-bold text-xl">
                                  2
                                </span>
                              </div>
                              <div className="p-4 rounded-lg bg-white border border-orange-100 shadow-sm transition-all duration-300 group-hover:shadow-md transform group-hover:-translate-y-1">
                                <div className="flex items-center mb-1">
                                  <TrophyIcon className="h-5 w-5 mr-2 text-orange-500" />
                                  <h4 className="text-lg font-semibold">
                                    Zonal Matches
                                  </h4>
                                </div>
                                <p className="text-gray-700">
                                  Selected players compete in zonal matches with
                                  live streaming to evaluate performance under
                                  pressure.
                                </p>
                                <div className="mt-2 text-sm bg-orange-50 text-orange-800 inline-block px-2 py-1 rounded">
                                  <PlayIcon className="h-4 w-4 inline mr-1" /> 3
                                  matches per player • Nationally broadcast
                                </div>
                              </div>
                            </li>

                            <li className="ml-16 relative group">
                              <div className="absolute -left-16 mt-1 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center border-4 border-white shadow-md transition-all duration-300 group-hover:bg-orange-200">
                                <span className="text-orange-600 font-bold text-xl">
                                  3
                                </span>
                              </div>
                              <div className="p-4 rounded-lg bg-white border border-orange-100 shadow-sm transition-all duration-300 group-hover:shadow-md transform group-hover:-translate-y-1">
                                <div className="flex items-center mb-1">
                                  <GraduationCapIcon className="h-5 w-5 mr-2 text-orange-500" />
                                  <h4 className="text-lg font-semibold">
                                    Final Selection Camp
                                  </h4>
                                </div>
                                <p className="text-gray-700">
                                  Top 100 players worldwide join our 7-day
                                  intensive Gurukul-style camp with cricket
                                  legends as mentors.
                                </p>
                                <div className="mt-2 text-sm bg-orange-50 text-orange-800 inline-block px-2 py-1 rounded">
                                  <CalendarIcon className="h-4 w-4 inline mr-1" />{" "}
                                  7-day residential program • All expenses
                                  covered
                                </div>
                              </div>
                            </li>

                            <li className="ml-16 relative group">
                              <div className="absolute -left-16 mt-1 h-12 w-12 rounded-full bg-orange-600 flex items-center justify-center border-4 border-white shadow-md">
                                <span className="text-white font-bold text-xl">
                                  4
                                </span>
                              </div>
                              <div className="p-4 rounded-lg bg-gradient-to-r from-orange-100 to-white border border-orange-200 shadow">
                                <div className="flex items-center mb-1">
                                  <StarIcon className="h-5 w-5 mr-2 text-orange-500" />
                                  <h4 className="text-lg font-semibold">
                                    Team Draft
                                  </h4>
                                </div>
                                <p className="text-gray-700">
                                  Final 60 players enter the nationally
                                  televised draft to form 6 franchise teams of
                                  10 players each.
                                </p>
                                <div className="mt-2 text-sm bg-orange-500 text-white inline-block px-2 py-1 rounded">
                                  <SparklesIcon className="h-4 w-4 inline mr-1" />{" "}
                                  Professional contracts & national recognition
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>

                        <div className="mt-8 text-center">
                          <DynamicButton href="/register" variant="primary">
                            Contact Us
                          </DynamicButton>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Separate Gurukul Experience Section */}
      <section className="w-full py-12 bg-gradient-to-r from-orange-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter text-orange-700">
                The Gurukul Experience
              </h2>
              <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                An immersive 45-day cricket talent hunt, blending legacy wisdom
                with modern techniques
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl overflow-hidden shadow-md">
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
                          <span className="text-gray-600 text-sm">
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
                          <span className="text-gray-600 text-sm">
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
                            Limited to 100 Players
                          </span>
                          <span className="text-gray-600 text-sm">
                            Ensuring personalized attention and guidance
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
                          <span className="text-gray-600 text-sm">
                            Weekly episodes showcasing player journeys
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <h4 className="text-xl font-bold text-orange-700 mt-8 mb-4 flex items-center">
                    <BrainIcon className="mr-2 h-5 w-5 text-orange-600" />
                    Comprehensive Curriculum
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Camera className="h-6 w-6 text-orange-600 mb-2" />
                      <h5 className="font-semibold mb-1">Cricket Skills</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Advanced batting techniques</li>
                        <li>• Professional bowling skills</li>
                        <li>• Strategic fielding positions</li>
                        <li>• Match situation awareness</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <ActivityIcon className="h-6 w-6 text-orange-600 mb-2" />
                      <h5 className="font-semibold mb-1">Physical Fitness</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Sport-specific conditioning</li>
                        <li>• Strength & power training</li>
                        <li>• Speed & agility drills</li>
                        <li>• Injury prevention protocols</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <SwordsIcon className="h-6 w-6 text-orange-600 mb-2" />
                      <h5 className="font-semibold mb-1">Discipline</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Structured daily routines</li>
                        <li>• Team-oriented challenges</li>
                        <li>• Punctuality & dedication</li>
                        <li>• Traditional values & ethics</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <BrainCircuitIcon className="h-6 w-6 text-orange-600 mb-2" />
                      <h5 className="font-semibold mb-1">Mental Strength</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Pressure handling</li>
                        <li>• Visualization techniques</li>
                        <li>• Focus & concentration</li>
                        <li>• Performance psychology</li>
                      </ul>
                    </div>
                  </div>
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
                        <p className="text-gray-600">Middle Order Guide</p>
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
                        <p className="text-gray-600">Batting Maestro</p>
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
                        <p className="text-gray-600">Explosive All-Rounder</p>
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
                        <p className="text-gray-600">Pace Attack Mentor</p>
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
                        <p className="text-gray-600">
                          Women’s Cricket Ambassador
                        </p>
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
                          Sunday 8 PM
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
                            <span className="text-gray-600 text-sm">
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
                            <span className="text-gray-600 text-sm">
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
                            <span className="text-gray-600 text-sm">
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
                            <span className="text-gray-600 text-sm">
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
                <p className="text-gray-600 mb-4">
                  Experience a cricket training program unlike any other in the
                  world
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
