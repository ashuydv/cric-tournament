import { CalendarDays } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResultsPage() {
  // Sample results data
  const results = {
    groupA: [
      {
        id: 1,
        team1: "Australia",
        team2: "Pakistan",
        team1Score: "287/6",
        team2Score: "230/10",
        result: "Australia won by 57 runs",
        date: "June 5, 2025",
        venue: "Melbourne Cricket Ground",
        group: "Group A",
      },
      {
        id: 3,
        team1: "India",
        team2: "New Zealand",
        team1Score: "265/7",
        team2Score: "240/8",
        result: "India won by 25 runs",
        date: "June 7, 2025",
        venue: "Eden Gardens, Kolkata",
        group: "Group A",
      },
    ],
    groupB: [
      {
        id: 2,
        team1: "England",
        team2: "West Indies",
        team1Score: "315/8",
        team2Score: "285/9",
        result: "England won by 30 runs",
        date: "June 6, 2025",
        venue: "Edgbaston, Birmingham",
        group: "Group B",
      },
      {
        id: 4,
        team1: "South Africa",
        team2: "Sri Lanka",
        team1Score: "295/5",
        team2Score: "220/10",
        result: "South Africa won by 75 runs",
        date: "June 7, 2025",
        venue: "Newlands, Cape Town",
        group: "Group B",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6  mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Match Results</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Latest results from the Run Bhumi 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6  mx-auto">
          <Tabs defaultValue="groupA" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="groupA">Group A</TabsTrigger>
              <TabsTrigger value="groupB">Group B</TabsTrigger>
            </TabsList>
            <TabsContent value="groupA" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {results.groupA.map((match) => (
                  <Link href={`/matches/${match.id}`} key={match.id}>
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardContent className="p-0">
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="mb-2">
                              {match.group}
                            </Badge>
                          </div>
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
                              <div className="flex flex-col">
                                <span className="font-medium">{match.team1}</span>
                                <span className="text-sm text-muted-foreground">{match.team1Score}</span>
                              </div>
                            </div>
                            <span className="text-sm font-bold">VS</span>
                            <div className="flex items-center gap-2">
                              <div className="flex flex-col items-end">
                                <span className="font-medium">{match.team2}</span>
                                <span className="text-sm text-muted-foreground">{match.team2Score}</span>
                              </div>
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
                          <div className="mt-3 text-sm font-medium text-orange-600 dark:text-orange-500">
                            {match.result}
                          </div>
                          <div className="mt-2 flex items-center text-sm text-muted-foreground">
                            <CalendarDays className="mr-1 h-3 w-3" />
                            <span>{match.date}</span>
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">{match.venue}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="groupB" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {results.groupB.map((match) => (
                  <Link href={`/matches/${match.id}`} key={match.id}>
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardContent className="p-0">
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="mb-2">
                              {match.group}
                            </Badge>
                          </div>
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
                              <div className="flex flex-col">
                                <span className="font-medium">{match.team1}</span>
                                <span className="text-sm text-muted-foreground">{match.team1Score}</span>
                              </div>
                            </div>
                            <span className="text-sm font-bold">VS</span>
                            <div className="flex items-center gap-2">
                              <div className="flex flex-col items-end">
                                <span className="font-medium">{match.team2}</span>
                                <span className="text-sm text-muted-foreground">{match.team2Score}</span>
                              </div>
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
                          <div className="mt-3 text-sm font-medium text-orange-600 dark:text-orange-500">
                            {match.result}
                          </div>
                          <div className="mt-2 flex items-center text-sm text-muted-foreground">
                            <CalendarDays className="mr-1 h-3 w-3" />
                            <span>{match.date}</span>
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">{match.venue}</div>
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
