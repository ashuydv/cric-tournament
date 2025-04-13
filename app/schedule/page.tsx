import { CalendarDays, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SchedulePage() {
  // Sample schedule data
  const schedule = {
    groupStage: [
      {
        id: 1,
        team1: "Australia",
        team2: "Pakistan",
        date: "June 5, 2025",
        time: "14:00",
        venue: "Melbourne Cricket Ground",
        group: "Group A",
      },
      {
        id: 2,
        team1: "England",
        team2: "West Indies",
        date: "June 6, 2025",
        time: "10:30",
        venue: "Edgbaston, Birmingham",
        group: "Group B",
      },
      {
        id: 3,
        team1: "India",
        team2: "New Zealand",
        date: "June 7, 2025",
        time: "15:00",
        venue: "Eden Gardens, Kolkata",
        group: "Group A",
      },
      {
        id: 4,
        team1: "South Africa",
        team2: "Sri Lanka",
        date: "June 7, 2025",
        time: "13:30",
        venue: "Newlands, Cape Town",
        group: "Group B",
      },
      {
        id: 5,
        team1: "Australia",
        team2: "India",
        date: "June 8, 2025",
        time: "14:00",
        venue: "Sydney Cricket Ground",
        group: "Group A",
      },
      {
        id: 6,
        team1: "England",
        team2: "South Africa",
        date: "June 9, 2025",
        time: "10:30",
        venue: "Lord's, London",
        group: "Group B",
      },
      {
        id: 7,
        team1: "New Zealand",
        team2: "Pakistan",
        date: "June 10, 2025",
        time: "15:00",
        venue: "Eden Park, Auckland",
        group: "Group A",
      },
      {
        id: 8,
        team1: "West Indies",
        team2: "Sri Lanka",
        date: "June 11, 2025",
        time: "13:30",
        venue: "Kensington Oval, Barbados",
        group: "Group B",
      },
    ],
    knockoutStage: [
      {
        id: 21,
        team1: "TBD (1st Group A)",
        team2: "TBD (2nd Group B)",
        date: "July 10, 2025",
        time: "14:00",
        venue: "Sydney Cricket Ground",
        stage: "Semi-Final 1",
      },
      {
        id: 22,
        team1: "TBD (1st Group B)",
        team2: "TBD (2nd Group A)",
        date: "July 12, 2025",
        time: "14:00",
        venue: "Lord's, London",
        stage: "Semi-Final 2",
      },
      {
        id: 23,
        team1: "TBD",
        team2: "TBD",
        date: "July 15, 2025",
        time: "14:00",
        venue: "Melbourne Cricket Ground",
        stage: "Final",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6  mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tournament Schedule</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Complete match schedule for the Run Bhumi 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6  mx-auto">
          <Tabs defaultValue="groupStage" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="groupStage">Group Stage</TabsTrigger>
              <TabsTrigger value="knockoutStage">Knockout Stage</TabsTrigger>
            </TabsList>
            <TabsContent value="groupStage" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {schedule.groupStage.map((match) => (
                  <Link href={`/matches/${match.id}`} key={match.id}>
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardContent className="p-0">
                        <div className="p-4">
                          <Badge variant="outline" className="mb-2">
                            {match.group}
                          </Badge>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-10 w-10 overflow-hidden rounded-full">
                                <Image
                                  src={`/placeholder.svg?height=40&width=40&text=${match.team1.charAt(0)}`}
                                  width={40}
                                  height={40}
                                  alt={match.team1}
                                  className="object-cover"
                                />
                              </div>
                              <span className="font-medium">{match.team1}</span>
                            </div>
                            <span className="text-sm font-bold">VS</span>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{match.team2}</span>
                              <div className="h-10 w-10 overflow-hidden rounded-full">
                                <Image
                                  src={`/placeholder.svg?height=40&width=40&text=${match.team2.charAt(0)}`}
                                  width={40}
                                  height={40}
                                  alt={match.team2}
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <CalendarDays className="h-3 w-3" />
                              <span>{match.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{match.time}</span>
                            </div>
                          </div>
                          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{match.venue}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="knockoutStage" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {schedule.knockoutStage.map((match) => (
                  <Link href={`/matches/${match.id}`} key={match.id}>
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardContent className="p-0">
                        <div className="p-4">
                          <Badge
                            variant="outline"
                            className="mb-2 bg-orange-50 text-orange-700 dark:bg-orange-800/30 dark:text-orange-400"
                          >
                            {match.stage}
                          </Badge>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-10 w-10 overflow-hidden rounded-full">
                                <Image
                                  src={`/placeholder.svg?height=40&width=40&text=?`}
                                  width={40}
                                  height={40}
                                  alt={match.team1}
                                  className="object-cover"
                                />
                              </div>
                              <span className="font-medium">{match.team1}</span>
                            </div>
                            <span className="text-sm font-bold">VS</span>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{match.team2}</span>
                              <div className="h-10 w-10 overflow-hidden rounded-full">
                                <Image
                                  src={`/placeholder.svg?height=40&width=40&text=?`}
                                  width={40}
                                  height={40}
                                  alt={match.team2}
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <CalendarDays className="h-3 w-3" />
                              <span>{match.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{match.time}</span>
                            </div>
                          </div>
                          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{match.venue}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
