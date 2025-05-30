import Link from "next/link"
import Image from "next/image"
import { CalendarDays, ChevronRight, MapPin, Trophy, Users, Flame, Search, ShoppingCart, ChevronDown, UserPlus2Icon, UserCircle, LineChart, BarChart, Landmark, Tv, CheckCircleIcon, ActivityIcon, ShieldIcon, TrophyIcon, BathIcon, CheckSquareIcon, UserIcon, UsersIcon, MapPinIcon, CalendarIcon, BarChart3Icon, RouteIcon, FilterIcon, GraduationCapIcon, StarIcon, SparklesIcon, PlayIcon, TvIcon, PlayCircleIcon, CameraIcon, SwordsIcon, HeartIcon, BrainCircuitIcon, BrainIcon, MapIcon, SunIcon, CalendarDaysIcon, Camera } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import UpcomingMatches from "@/components/upcoming-matches"
import TeamStandings from "@/components/team-standings"
import RecentResults from "@/components/recent-results"
import Footer from "@/components/footer"
import RegistrationModal from "@/components/registration-modal"

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <RegistrationModal />
      {/* Hero Section with Navbar */}
      <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cric_bg.png"
            alt="Cricket background"
            width={1920}
            height={1080}
            className="object-cover object-top bg-no-repeat h-full w-full opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
        </div>

        {/* Main hero content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 lg:pt-[10rem]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div className="space-y-6 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Welcome to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">RunBhumi</span>
                </h1>

                <p className="max-w-[600px] text-gray-50 text-base sm:text-lg mx-auto lg:mx-0">
                  India’s Biggest Individual Cricket Talent Hunt <br />
                  RunBhumi isn’t just an event. It’s a movement. <br />
                  A nationwide hunt to discover raw, unstoppable cricket talent from the streets, small towns, and forgotten corners of India — and bring them into the limelight of national television.
                </p>

                <div className="flex gap-4">
                  <Link href="/register" className="inline-block">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                      Join Now
                    </Button>
                  </Link>
                  <Link href="/trials" className="inline-block">
                    <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full">
                      Explore Trials
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right side empty (hidden on all screen sizes for now) */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-orange-600">Why Choose RunBhumi?</h2>
              <p className="max-w-3xl text-muted-foreground text-base md:text-xl mx-auto">
                RunBhumi offers a revolutionary cricket platform where talent meets opportunity, tradition meets innovation, and every player gets a fair chance to shine.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 relative z-10">
            <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Tv className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">National Exposure</h3>
              <p className="text-gray-700">All trials and training sessions are across India, giving every player visibility on a national stage regardless of their background.</p>
            </Card>

            <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <UserCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">India & renowned International cricket legends</h3>
              <p className="text-gray-700">Receive direct coaching and guidance from India's cricketing legends, gaining invaluable insights from those who've excelled at the highest level.</p>
            </Card>

            <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BarChart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Merit-Based Selection</h3>
              <p className="text-gray-700">Our patented software enables transparent selection process which is purely performance, potential and skill based real time evaluation.So there’s no place for politics or favoritism in the RunBhumi System</p>
            </Card>

            <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Franchise Opportunities</h3>
              <p className="text-gray-700">Top shortlisted players get a chance to get auctioned by franchise, and later get recognition and opportunities similar to global premier league.</p>
            </Card>

            <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Landmark className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gurukul Training</h3>
              <p className="text-gray-700">Experience a holistic development approach that nurtures not only cricketing skills but also character, discipline, and mental strength.</p>
            </Card>

            <Card className="p-6 bg-white border-none hover:shadow-xl transition-all rounded-3xl hover:translate-y-[-5px]">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <LineChart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Live Scoring & Analytics</h3>
              <p className="text-gray-700">Follow matches in real-time with our comprehensive scoring system and receive detailed performance analytics to improve your game.</p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href='/register'>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-medium">
                Register for Trials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter">Trials Overview</h2>
              <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                Follow all the action from the RunBhumi 2025
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 md:mt-12">
            <Tabs defaultValue="city-wise" className="w-full">
              <TabsList className="grid w-full grid-cols-4">

                <TabsTrigger value="city-wise" className="text-sm md:text-base">City-wise Trial Info</TabsTrigger>
                <TabsTrigger value="eligibility" className="text-sm md:text-base">Age & Eligibility</TabsTrigger>
                <TabsTrigger value="assessment" className="text-sm md:text-base">Skill Assessments</TabsTrigger>
                <TabsTrigger value="criteria" className="text-sm md:text-base">Shortlisting Criteria</TabsTrigger>
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
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">Register for Trials</Button>
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
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">Register for Trials</Button>
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
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">Register for Trials</Button>
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
                            <h4 className="font-semibold text-lg mb-1">Junior Division</h4>
                            <p>Ages 16-19 years (as of December 31, 2025)</p>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-lg mb-1">Senior Division</h4>
                            <p>Ages 20-30 years (as of December 31, 2025)</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          <CheckSquareIcon className="mr-2 h-5 w-5 text-orange-500" />
                          Basic Requirements
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Valid government-issued photo ID proof (Aadhar Card/Passport/Driving License)</li>
                          <li>Medical fitness certificate from a registered medical practitioner</li>
                          <li>Previous playing experience documentation (if any)</li>
                          <li>Parental consent form for participants under 18 years</li>
                          <li>Registration fee of ₹1,500 (non-refundable)</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          <ShieldIcon className="mr-2 h-5 w-5 text-orange-500" />
                          Eligibility Restrictions
                        </h3>
                        <p className="mb-2">Participants are NOT eligible if they:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Are currently contracted with any state cricket association</li>
                          <li>Have represented India in any ICC tournament in the past 2 years</li>
                          <li>Have any pending disciplinary action against them</li>
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
                              <span>Technical skill evaluation in nets (20 minutes)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Match simulation scenarios against quality bowling</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Power-hitting assessment with specialized drills</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Shot selection and decision-making tests</span>
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
                              <span>Accuracy tests with target areas (10 overs)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Pace measurement for fast bowlers</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Variation execution assessment</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                              <span>Death bowling pressure scenarios</span>
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
                              <span>Sprint tests (20m, 40m)</span>
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
                          RunBhumi uses a transparent 100-point scoring system designed to identify complete cricketers with the perfect balance of technical skills, tactical intelligence, physical prowess, and mental strength.
                        </p>

                        <div className="bg-white rounded-lg p-6 shadow-inner border border-orange-100">
                          <h4 className="font-semibold text-xl mb-4 text-center">Point Distribution</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="transform transition-all duration-300 hover:scale-105">
                              <div className="flex justify-between items-center mb-2">
                                <p className="font-medium text-lg">Technical Skills</p>
                                <span className="font-bold text-orange-600">40 points</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-3">
                                <div className="bg-orange-600 h-3 rounded-full animate-pulse" style={{ width: '40%' }}></div>
                              </div>
                              <p className="text-gray-600 text-sm mt-2">Batting, bowling & fielding technique</p>
                            </div>

                            <div className="transform transition-all duration-300 hover:scale-105">
                              <div className="flex justify-between items-center mb-2">
                                <p className="font-medium text-lg">Tactical Awareness</p>
                                <span className="font-bold text-orange-600">20 points</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-3">
                                <div className="bg-orange-600 h-3 rounded-full animate-pulse" style={{ width: '20%' }}></div>
                              </div>
                              <p className="text-gray-600 text-sm mt-2">Game sense & decision-making</p>
                            </div>

                            <div className="transform transition-all duration-300 hover:scale-105">
                              <div className="flex justify-between items-center mb-2">
                                <p className="font-medium text-lg">Physical Fitness</p>
                                <span className="font-bold text-orange-600">25 points</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-3">
                                <div className="bg-orange-600 h-3 rounded-full animate-pulse" style={{ width: '25%' }}></div>
                              </div>
                              <p className="text-gray-600 text-sm mt-2">Strength, speed & endurance</p>
                            </div>

                            <div className="transform transition-all duration-300 hover:scale-105">
                              <div className="flex justify-between items-center mb-2">
                                <p className="font-medium text-lg">Mental Attributes</p>
                                <span className="font-bold text-orange-600">15 points</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-3">
                                <div className="bg-orange-600 h-3 rounded-full animate-pulse" style={{ width: '15%' }}></div>
                              </div>
                              <p className="text-gray-600 text-sm mt-2">Temperament & resilience</p>
                            </div>
                          </div>

                          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                            <span className="bg-orange-50 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                              All evaluations conducted by professional coaches & former international players
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Shortlisting Process Section */}
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
                                <span className="text-orange-600 font-bold text-xl">1</span>
                              </div>
                              <div className="p-4 rounded-lg bg-white border border-orange-100 shadow-sm transition-all duration-300 group-hover:shadow-md transform group-hover:-translate-y-1">
                                <div className="flex items-center mb-1">
                                  <FilterIcon className="h-5 w-5 mr-2 text-orange-500" />
                                  <h4 className="text-lg font-semibold">Initial Screening</h4>
                                </div>
                                <p className="text-gray-700">Top 30% of participants from each zone advance based on their performance in skill assessments.</p>
                                <div className="mt-2 text-sm bg-orange-50 text-orange-800 inline-block px-2 py-1 rounded">
                                  <UsersIcon className="h-4 w-4 inline mr-1" /> 2,500+ participants → 750 advance
                                </div>
                              </div>
                            </li>

                            <li className="ml-16 relative group">
                              <div className="absolute -left-16 mt-1 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center border-4 border-white shadow-md transition-all duration-300 group-hover:bg-orange-200">
                                <span className="text-orange-600 font-bold text-xl">2</span>
                              </div>
                              <div className="p-4 rounded-lg bg-white border border-orange-100 shadow-sm transition-all duration-300 group-hover:shadow-md transform group-hover:-translate-y-1">
                                <div className="flex items-center mb-1">
                                  <TrophyIcon className="h-5 w-5 mr-2 text-orange-500" />
                                  <h4 className="text-lg font-semibold">Zonal Matches</h4>
                                </div>
                                <p className="text-gray-700">Selected players compete in zonal matches with live streaming to evaluate performance under pressure.</p>
                                <div className="mt-2 text-sm bg-orange-50 text-orange-800 inline-block px-2 py-1 rounded">
                                  <PlayIcon className="h-4 w-4 inline mr-1" /> 3 matches per player • Nationally broadcast
                                </div>
                              </div>
                            </li>

                            <li className="ml-16 relative group">
                              <div className="absolute -left-16 mt-1 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center border-4 border-white shadow-md transition-all duration-300 group-hover:bg-orange-200">
                                <span className="text-orange-600 font-bold text-xl">3</span>
                              </div>
                              <div className="p-4 rounded-lg bg-white border border-orange-100 shadow-sm transition-all duration-300 group-hover:shadow-md transform group-hover:-translate-y-1">
                                <div className="flex items-center mb-1">
                                  <GraduationCapIcon className="h-5 w-5 mr-2 text-orange-500" />
                                  <h4 className="text-lg font-semibold">Final Selection Camp</h4>
                                </div>
                                <p className="text-gray-700">Top 100 players nationwide join our 7-day intensive Gurukul-style camp with cricket legends as mentors.</p>
                                <div className="mt-2 text-sm bg-orange-50 text-orange-800 inline-block px-2 py-1 rounded">
                                  <CalendarIcon className="h-4 w-4 inline mr-1" /> 7-day residential program • All expenses covered
                                </div>
                              </div>
                            </li>

                            <li className="ml-16 relative group">
                              <div className="absolute -left-16 mt-1 h-12 w-12 rounded-full bg-orange-600 flex items-center justify-center border-4 border-white shadow-md">
                                <span className="text-white font-bold text-xl">4</span>
                              </div>
                              <div className="p-4 rounded-lg bg-gradient-to-r from-orange-100 to-white border border-orange-200 shadow">
                                <div className="flex items-center mb-1">
                                  <StarIcon className="h-5 w-5 mr-2 text-orange-500" />
                                  <h4 className="text-lg font-semibold">Team Draft</h4>
                                </div>
                                <p className="text-gray-700">Final 60 players enter the nationally televised draft to form 6 franchise teams of 10 players each.</p>
                                <div className="mt-2 text-sm bg-orange-500 text-white inline-block px-2 py-1 rounded">
                                  <SparklesIcon className="h-4 w-4 inline mr-1" /> Professional contracts & national recognition
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>

                        <div className="mt-8 text-center">
                          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            Start Your Cricket Journey Today
                          </Button>
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
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter text-orange-700">The Gurukul Experience</h2>
              <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                An immersive 45-day cricket bootcamp blending ancient wisdom with modern techniques
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl overflow-hidden shadow-md">
            <div className="relative h-64 bg-orange-100">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-orange-800/80 flex items-center justify-center">
                <div className="text-center px-4">
                  <h3 className="text-3xl font-bold text-white mb-2">Transform Your Cricket Journey</h3>
                  <p className="text-white text-lg max-w-2xl mx-auto">
                    Join our elite residential program with legendary cricket mentors
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
                          <span className="font-medium block">45-Day Residential Program</span>
                          <span className="text-gray-600 text-sm">Full immersion in a cricket-focused environment</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                          <MapIcon className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <span className="font-medium block">State-of-the-Art Facility</span>
                          <span className="text-gray-600 text-sm">Located in a serene setting in Dehradun</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                          <UsersIcon className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <span className="font-medium block">Limited to 100 Players</span>
                          <span className="text-gray-600 text-sm">Ensuring personalized attention and guidance</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                          <TvIcon className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <span className="font-medium block">Nationally Televised</span>
                          <span className="text-gray-600 text-sm">Weekly episodes showcasing player journeys</span>
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
                    Legendary Mentors
                  </h4>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 flex items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <UserIcon className="h-8 w-8 text-orange-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Suresh Raina</h5>
                        <p className="text-gray-600">Middle Order Guide</p>
                        <div className="mt-1 flex">
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">Mr. IPL</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 flex items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <UserIcon className="h-8 w-8 text-orange-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Herschelle Gibbs</h5>
                        <p className="text-gray-600">Batting Maestro</p>
                        <div className="mt-1 flex">
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">South African Legend</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 flex items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <UserIcon className="h-8 w-8 text-orange-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Sanath Jayasuriya</h5>
                        <p className="text-gray-600">Explosive All-Rounder</p>
                        <div className="mt-1 flex">
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">Sri Lankan Icon</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 flex items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <UserIcon className="h-8 w-8 text-orange-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Manpreet Singh Gony</h5>
                        <p className="text-gray-600">Pace Attack Mentor</p>
                        <div className="mt-1 flex">
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">IPL & India Fast Bowler</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 flex items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <UserIcon className="h-8 w-8 text-orange-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Anjum Chopra</h5>
                        <p className="text-gray-600">Women’s Cricket Ambassador</p>
                        <div className="mt-1 flex">
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">Former India Captain</span>
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
                          <span className="font-medium">Weekly Episodes</span>
                        </div>
                        <span className="text-sm text-orange-600">Sunday 8 PM</span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                            <CameraIcon className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <span className="font-medium block">Training Highlights</span>
                            <span className="text-gray-600 text-sm">Behind-the-scenes look at daily practice sessions</span>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                            <SwordsIcon className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <span className="font-medium block">Weekly Challenges</span>
                            <span className="text-gray-600 text-sm">Competitive tasks testing various cricketing skills</span>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                            <HeartIcon className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <span className="font-medium block">Player Journeys</span>
                            <span className="text-gray-600 text-sm">Personal stories and transformation of participants</span>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                            <StarIcon className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <span className="font-medium block">Mentor Insights</span>
                            <span className="text-gray-600 text-sm">Expert commentary and guidance from cricket legends</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Experience a cricket training program unlike any other in the world</p>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <section className="w-full py-12 md:py-24 bg-orange-50 dark:bg-orange-950/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter">Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                10 international teams competing for cricket glory
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 md:py-12 lg:grid-cols-2 lg:gap-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:order-last">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center p-3 md:p-4">
                      <div className="h-12 w-12 md:h-16 md:w-16 rounded-full overflow-hidden mb-2">
                        <Image
                          src={`/placeholder.svg?height=64&width=64&text=Team${i}`}
                          width={64}
                          height={64}
                          alt={`Team ${i}`}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-sm md:text-base font-medium">Team {i}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter">World-Class Cricket Nations</h3>
                <p className="text-muted-foreground text-sm md:text-lg">
                  The tournament features the top cricket nations from around the world, including defending champions
                  Australia, cricket powerhouses India and England, and rising stars like Afghanistan.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="outline" className="inline-flex items-center text-sm md:text-base">
                  View All Teams
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 px-4 md:px-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700 dark:bg-orange-800/30 dark:text-orange-400">
                Highlights
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
                Key Moments to Look Forward To
              </h2>
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-900 dark:bg-orange-800/30 dark:text-orange-400">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base md:text-lg font-medium">Opening Ceremony</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      A spectacular display featuring cultural performances and cricket legends.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-900 dark:bg-orange-800/30 dark:text-orange-400">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base md:text-lg font-medium">Rivalry Matches</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Intense showdowns between historic cricket rivals that will keep you on the edge of your seat.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700 dark:bg-orange-800/30 dark:text-orange-400">
                Fan Experience
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">More Than Just Cricket</h2>
              <p className="text-muted-foreground text-sm md:text-lg">
                The RunBhumi offers a complete entertainment package for fans of all ages. Enjoy fan
                zones, meet-and-greets with cricket legends, interactive games, and delicious food from around the
                world.
              </p>
              <div className="grid w-full grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-3 md:p-4">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                        <Trophy className="h-5 w-5 md:h-6 md:w-6 text-orange-700 dark:text-orange-400" />
                      </div>
                      <h3 className="text-sm md:text-base font-medium">Fan Zones</h3>
                      <p className="text-xs text-muted-foreground">Interactive areas with games and activities</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-3 md:p-4">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                        <Users className="h-5 w-5 md:h-6 md:w-6 text-orange-700 dark:text-orange-400" />
                      </div>
                      <h3 className="text-sm md:text-base font-medium">Meet Players</h3>
                      <p className="text-xs text-muted-foreground">Opportunities to meet cricket stars</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base">Learn More About Fan Experiences</Button>
            </div>
          </div>
        </div>
      </section> */}

    </div >
  )
}