import Link from "next/link"
import Image from "next/image"
import { CalendarDays, ChevronRight, MapPin, Trophy, Users, Flame, Search, ShoppingCart, ChevronDown, UserPlus2Icon, UserCircle, LineChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import UpcomingMatches from "@/components/upcoming-matches"
import TeamStandings from "@/components/team-standings"
import RecentResults from "@/components/recent-results"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section with Navbar */}
      <section className="relative w-full min-h-screen overflow-hidden bg-black">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10"></div>
        </div>

        {/* Main hero content */}
        <div className="relative z-10 w-full h-[calc(100vh-80px)] flex flex-col">
          <div className="container mx-auto px-4 md:px-6 flex flex-col justify-center h-full pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side content */}
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="inline-flex items-center border-orange-500/20 bg-orange-50 text-orange-500"
                >
                  <CalendarDays className="mr-1 h-3 w-3" />
                  June 5 - July 15, 2025
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
                  Elevate Your Cricket Experience
                  with {" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">Run Bhumi</span>
                </h1>

                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Join the premier cricket community in India. <br />
                  Register yourself, participate in trails and be a
                  part of the cricket revolution
                </p>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Join Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    Explore Trials
                  </Button>
                </div>
              </div>

              {/* Right side content - Recent posts */}
              <div className="hidden lg:block relative">
                <div className="absolute -right-4 top-0">
                  <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 w-80">
                    <h3 className="text-2xl font-bold text-white mb-4">Recent Post</h3>

                    <div className="bg-white/5 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400&text=Recent+Post"
                        alt="Recent post thumbnail"
                        width={400}
                        height={200}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-orange-500">TRENDING</span>
                          <span className="text-xs text-gray-400">• Sep 19, 2023</span>
                        </div>
                        <h4 className="text-white text-lg font-bold mb-1">Goals that make games really memorable</h4>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          The most impressive goals that changed the course of cricket history and created lasting memories.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll down indicator */}
          <div className="absolute -bottom-8 left-8 flex items-center text-white/50 text-sm">
            <ChevronDown className="w-5 h-5 mr-2 animate-bounce" />
            <span>SCROLL DOWN</span>
          </div>

          {/* Social media links */}
          <div className="absolute -bottom-8 right-8 flex gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Run Bhumi</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide a comprehensive cricket trails experience with features designed to enhance your participation
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 py-12 relative z-10">
            {[
              {
                icon: <UserPlus2Icon className="w-8 h-8 text-orange-600" />,
                title: "Team Registration",
                description:
                  "Register your cricket team to participate in our upcoming trails and showcase your talent.",
              },
              {
                icon: <UserCircle className="w-8 h-8 text-orange-600" />,
                title: "Player Profiles",
                description:
                  "Create and manage your player profile to track your statistics and achievements.",
              },
              {
                icon: <LineChart className="w-8 h-8 text-orange-600" />,
                title: "Live Scoring",
                description:
                  "Follow matches in real-time with our live scoring system and stay updated on all the action.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-orange-50 border-none hover:shadow-lg transition-all rounded-3xl"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6  mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tournament Overview</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow all the action from the Run Bhumi 2025
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 md:mt-16">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upcoming">Upcoming Matches</TabsTrigger>
                <TabsTrigger value="standings">Standings</TabsTrigger>
                <TabsTrigger value="results">Recent Results</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="pt-4">
                <UpcomingMatches />
              </TabsContent>
              <TabsContent value="standings" className="pt-4">
                <TeamStandings />
              </TabsContent>
              <TabsContent value="results" className="pt-4">
                <RecentResults />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-orange-950/20">
        <div className="container px-4 md:px-6  mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Teams</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                10 international teams competing for cricket glory
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:order-last">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center p-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden mb-2">
                        <Image
                          src={`/placeholder.svg?height=64&width=64&text=Team${i}`}
                          width={64}
                          height={64}
                          alt={`Team ${i}`}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-medium">Team {i}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter md:text-3xl">World-Class Cricket Nations</h3>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  The tournament features the top cricket nations from around the world, including defending champions
                  Australia, cricket powerhouses India and England, and rising stars like Afghanistan.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="outline" className="inline-flex items-center">
                  View All Teams
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6  mx-auto">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700 dark:bg-orange-800/30 dark:text-orange-400">
                Tournament Highlights
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Key Moments to Look Forward To
              </h2>
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-900 dark:bg-orange-800/30 dark:text-orange-400">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Opening Ceremony</h3>
                    <p className="text-sm text-muted-foreground">
                      A spectacular display featuring cultural performances and cricket legends.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-900 dark:bg-orange-800/30 dark:text-orange-400">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Rivalry Matches</h3>
                    <p className="text-sm text-muted-foreground">
                      Intense showdowns between historic cricket rivals that will keep you on the edge of your seat.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-900 dark:bg-orange-800/30 dark:text-orange-400">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Finals Weekend</h3>
                    <p className="text-sm text-muted-foreground">
                      The culmination of the tournament with semi-finals and the grand finale at the iconic Melbourne
                      Cricket Ground.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700 dark:bg-orange-800/30 dark:text-orange-400">
                Fan Experience
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">More Than Just Cricket</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                The Run Bhumi offers a complete entertainment package for fans of all ages. Enjoy fan
                zones, meet-and-greets with cricket legends, interactive games, and delicious food from around the
                world.
              </p>
              <div className="grid w-full grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                        <Trophy className="h-6 w-6 text-orange-700 dark:text-orange-400" />
                      </div>
                      <h3 className="font-medium">Fan Zones</h3>
                      <p className="text-xs text-muted-foreground">Interactive areas with games and activities</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                        <Users className="h-6 w-6 text-orange-700 dark:text-orange-400" />
                      </div>
                      <h3 className="font-medium">Meet Players</h3>
                      <p className="text-xs text-muted-foreground">Opportunities to meet cricket stars</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Learn More About Fan Experiences</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-orange-950/20">
        <div className="container px-4 md:px-6  mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Subscribe to receive the latest news, match updates, and exclusive content
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div >
  )
}