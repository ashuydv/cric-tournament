import { Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function StatsPage() {
  // Sample stats data
  const stats = {
    batting: [
      {
        rank: 1,
        player: "Joe Root",
        team: "England",
        matches: 3,
        runs: 245,
        average: 81.67,
        strikeRate: 92.45,
        fifties: 2,
        hundreds: 1,
      },
      {
        rank: 2,
        player: "Virat Kohli",
        team: "India",
        matches: 3,
        runs: 210,
        average: 70.0,
        strikeRate: 95.89,
        fifties: 1,
        hundreds: 1,
      },
      {
        rank: 3,
        player: "Steve Smith",
        team: "Australia",
        matches: 3,
        runs: 198,
        average: 66.0,
        strikeRate: 87.61,
        fifties: 2,
        hundreds: 0,
      },
      {
        rank: 4,
        player: "Kane Williamson",
        team: "New Zealand",
        matches: 3,
        runs: 185,
        average: 61.67,
        strikeRate: 82.22,
        fifties: 1,
        hundreds: 1,
      },
      {
        rank: 5,
        player: "Babar Azam",
        team: "Pakistan",
        matches: 3,
        runs: 175,
        average: 58.33,
        strikeRate: 90.21,
        fifties: 2,
        hundreds: 0,
      },
    ],
    bowling: [
      {
        rank: 1,
        player: "Jasprit Bumrah",
        team: "India",
        matches: 3,
        wickets: 10,
        economy: 4.25,
        average: 15.2,
        bestFigures: "5/28",
      },
      {
        rank: 2,
        player: "Pat Cummins",
        team: "Australia",
        matches: 3,
        wickets: 9,
        economy: 4.75,
        average: 16.33,
        bestFigures: "4/35",
      },
      {
        rank: 3,
        player: "Kagiso Rabada",
        team: "South Africa",
        matches: 3,
        wickets: 8,
        economy: 5.1,
        average: 18.5,
        bestFigures: "4/42",
      },
      {
        rank: 4,
        player: "Trent Boult",
        team: "New Zealand",
        matches: 3,
        wickets: 7,
        economy: 4.95,
        average: 20.14,
        bestFigures: "3/29",
      },
      {
        rank: 5,
        player: "Jofra Archer",
        team: "England",
        matches: 3,
        wickets: 7,
        economy: 5.25,
        average: 21.57,
        bestFigures: "3/45",
      },
    ],
    allRounders: [
      {
        rank: 1,
        player: "Ben Stokes",
        team: "England",
        matches: 3,
        runs: 145,
        wickets: 6,
        battingAvg: 48.33,
        bowlingAvg: 25.5,
      },
      {
        rank: 2,
        player: "Hardik Pandya",
        team: "India",
        matches: 3,
        runs: 125,
        wickets: 5,
        battingAvg: 41.67,
        bowlingAvg: 28.2,
      },
      {
        rank: 3,
        player: "Mitchell Marsh",
        team: "Australia",
        matches: 3,
        runs: 135,
        wickets: 4,
        battingAvg: 45.0,
        bowlingAvg: 32.5,
      },
      {
        rank: 4,
        player: "Jason Holder",
        team: "West Indies",
        matches: 3,
        runs: 95,
        wickets: 6,
        battingAvg: 31.67,
        bowlingAvg: 24.33,
      },
      {
        rank: 5,
        player: "Shakib Al Hasan",
        team: "Bangladesh",
        matches: 3,
        runs: 110,
        wickets: 5,
        battingAvg: 36.67,
        bowlingAvg: 29.4,
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6  mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tournament Statistics</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Player performance statistics for the RunBhumi 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6  mx-auto">
          <Tabs defaultValue="batting" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="batting">Batting</TabsTrigger>
              <TabsTrigger value="bowling">Bowling</TabsTrigger>
              <TabsTrigger value="allRounders">All-Rounders</TabsTrigger>
            </TabsList>
            <TabsContent value="batting" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Batsmen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">Rank</TableHead>
                          <TableHead>Player</TableHead>
                          <TableHead>Team</TableHead>
                          <TableHead className="text-right">M</TableHead>
                          <TableHead className="text-right">Runs</TableHead>
                          <TableHead className="text-right">Avg</TableHead>
                          <TableHead className="text-right">SR</TableHead>
                          <TableHead className="text-right">50s</TableHead>
                          <TableHead className="text-right">100s</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {stats.batting.map((player) => (
                          <TableRow key={player.rank}>
                            <TableCell className="font-medium">{player.rank}</TableCell>
                            <TableCell>{player.player}</TableCell>
                            <TableCell>{player.team}</TableCell>
                            <TableCell className="text-right">{player.matches}</TableCell>
                            <TableCell className="text-right font-semibold">{player.runs}</TableCell>
                            <TableCell className="text-right">{player.average.toFixed(2)}</TableCell>
                            <TableCell className="text-right">{player.strikeRate.toFixed(2)}</TableCell>
                            <TableCell className="text-right">{player.fifties}</TableCell>
                            <TableCell className="text-right">{player.hundreds}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="bowling" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Bowlers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">Rank</TableHead>
                          <TableHead>Player</TableHead>
                          <TableHead>Team</TableHead>
                          <TableHead className="text-right">M</TableHead>
                          <TableHead className="text-right">Wkts</TableHead>
                          <TableHead className="text-right">Econ</TableHead>
                          <TableHead className="text-right">Avg</TableHead>
                          <TableHead className="text-right">Best</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {stats.bowling.map((player) => (
                          <TableRow key={player.rank}>
                            <TableCell className="font-medium">{player.rank}</TableCell>
                            <TableCell>{player.player}</TableCell>
                            <TableCell>{player.team}</TableCell>
                            <TableCell className="text-right">{player.matches}</TableCell>
                            <TableCell className="text-right font-semibold">{player.wickets}</TableCell>
                            <TableCell className="text-right">{player.economy.toFixed(2)}</TableCell>
                            <TableCell className="text-right">{player.average.toFixed(2)}</TableCell>
                            <TableCell className="text-right">{player.bestFigures}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="allRounders" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top All-Rounders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">Rank</TableHead>
                          <TableHead>Player</TableHead>
                          <TableHead>Team</TableHead>
                          <TableHead className="text-right">M</TableHead>
                          <TableHead className="text-right">Runs</TableHead>
                          <TableHead className="text-right">Wkts</TableHead>
                          <TableHead className="text-right">Bat Avg</TableHead>
                          <TableHead className="text-right">Bowl Avg</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {stats.allRounders.map((player) => (
                          <TableRow key={player.rank}>
                            <TableCell className="font-medium">{player.rank}</TableCell>
                            <TableCell>{player.player}</TableCell>
                            <TableCell>{player.team}</TableCell>
                            <TableCell className="text-right">{player.matches}</TableCell>
                            <TableCell className="text-right">{player.runs}</TableCell>
                            <TableCell className="text-right">{player.wickets}</TableCell>
                            <TableCell className="text-right">{player.battingAvg.toFixed(2)}</TableCell>
                            <TableCell className="text-right">{player.bowlingAvg.toFixed(2)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6  mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tournament Records</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Notable achievements and records from the RunBhumi 2025
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Highest Individual Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=JR"
                      width={48}
                      height={48}
                      alt="Joe Root"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Joe Root (England)</div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">145</div>
                    <div className="text-xs text-muted-foreground">vs Pakistan, June 5, 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Best Bowling Figures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=JB"
                      width={48}
                      height={48}
                      alt="Jasprit Bumrah"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Jasprit Bumrah (India)</div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">5/28</div>
                    <div className="text-xs text-muted-foreground">vs New Zealand, June 7, 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Highest Team Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=ENG"
                      width={48}
                      height={48}
                      alt="England"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">England</div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">315/8</div>
                    <div className="text-xs text-muted-foreground">vs West Indies, June 6, 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Most Sixes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=JB"
                      width={48}
                      height={48}
                      alt="Jos Buttler"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Jos Buttler (England)</div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">12</div>
                    <div className="text-xs text-muted-foreground">3 matches</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Fastest Century</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=VK"
                      width={48}
                      height={48}
                      alt="Virat Kohli"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Virat Kohli (India)</div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">67 balls</div>
                    <div className="text-xs text-muted-foreground">vs New Zealand, June 7, 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Highest Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=AUS"
                      width={48}
                      height={48}
                      alt="Australia"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Smith & Marsh (Australia)</div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">175 runs</div>
                    <div className="text-xs text-muted-foreground">vs Pakistan, June 5, 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
