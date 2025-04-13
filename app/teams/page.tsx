import Image from "next/image"
import Link from "next/link"
import { Trophy, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeamsPage() {
  // Sample teams data
  const teams = {
    groupA: [
      {
        id: 1,
        name: "Australia",
        flag: "AUS",
        captain: "Pat Cummins",
        rank: 1,
        titles: 5,
        players: 15,
      },
      {
        id: 2,
        name: "India",
        flag: "IND",
        captain: "Rohit Sharma",
        rank: 2,
        titles: 3,
        players: 15,
      },
      {
        id: 3,
        name: "New Zealand",
        flag: "NZ",
        captain: "Kane Williamson",
        rank: 3,
        titles: 1,
        players: 15,
      },
      {
        id: 4,
        name: "Pakistan",
        flag: "PAK",
        captain: "Babar Azam",
        rank: 4,
        titles: 2,
        players: 15,
      },
      {
        id: 9,
        name: "Bangladesh",
        flag: "BAN",
        captain: "Najmul Hossain Shanto",
        rank: 9,
        titles: 0,
        players: 15,
      },
    ],
    groupB: [
      {
        id: 5,
        name: "England",
        flag: "ENG",
        captain: "Jos Buttler",
        rank: 5,
        titles: 2,
        players: 15,
      },
      {
        id: 6,
        name: "South Africa",
        flag: "SA",
        captain: "Temba Bavuma",
        rank: 6,
        titles: 0,
        players: 15,
      },
      {
        id: 7,
        name: "West Indies",
        flag: "WI",
        captain: "Shai Hope",
        rank: 7,
        titles: 2,
        players: 15,
      },
      {
        id: 8,
        name: "Sri Lanka",
        flag: "SL",
        captain: "Charith Asalanka",
        rank: 8,
        titles: 1,
        players: 15,
      },
      {
        id: 10,
        name: "Afghanistan",
        flag: "AFG",
        captain: "Rashid Khan",
        rank: 10,
        titles: 0,
        players: 15,
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6  mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tournament Teams</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the 10 international teams competing in the Run Bhumi 2025
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
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {teams.groupA.map((team) => (
                  <Link href={`/teams/${team.id}`} key={team.id}>
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="p-4 bg-orange-50 dark:bg-orange-950/20">
                        <CardTitle className="flex items-center gap-2">
                          <div className="h-8 w-8 overflow-hidden rounded-full">
                            <Image
                              src={`/placeholder.svg?height=32&width=32&text=${team.flag}`}
                              width={32}
                              height={32}
                              alt={team.name}
                              className="object-cover"
                            />
                          </div>
                          {team.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="grid gap-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Captain:</span>
                            <span className="font-medium">{team.captain}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">World Rank:</span>
                            <span className="font-medium">#{team.rank}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Trophy className="h-3 w-3" />
                              Titles:
                            </span>
                            <span className="font-medium">{team.titles}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Users className="h-3 w-3" />
                              Squad:
                            </span>
                            <span className="font-medium">{team.players} players</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="groupB" className="pt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {teams.groupB.map((team) => (
                  <Link href={`/teams/${team.id}`} key={team.id}>
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="p-4 bg-orange-50 dark:bg-orange-950/20">
                        <CardTitle className="flex items-center gap-2">
                          <div className="h-8 w-8 overflow-hidden rounded-full">
                            <Image
                              src={`/placeholder.svg?height=32&width=32&text=${team.flag}`}
                              width={32}
                              height={32}
                              alt={team.name}
                              className="object-cover"
                            />
                          </div>
                          {team.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="grid gap-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Captain:</span>
                            <span className="font-medium">{team.captain}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">World Rank:</span>
                            <span className="font-medium">#{team.rank}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Trophy className="h-3 w-3" />
                              Titles:
                            </span>
                            <span className="font-medium">{team.titles}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Users className="h-3 w-3" />
                              Squad:
                            </span>
                            <span className="font-medium">{team.players} players</span>
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
