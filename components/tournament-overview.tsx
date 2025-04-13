// components/tournament-overview.jsx
import { Star, Trophy, Zap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UpcomingMatches from "@/components/upcoming-matches"
import TeamStandings from "@/components/team-standings"
import RecentResults from "@/components/recent-results"

export default function TournamentOverview() {
    return (
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-orange-50/50 dark:bg-orange-950/10"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600"></div>
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Tournament Overview</h2>
                        <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-orange-800 dark:text-orange-200">
                            Follow all the <span className="font-bold">LIVE ACTION</span> from the RunBhumi 2025
                        </p>
                    </div>
                </div>
                <div className="mx-auto mt-6 md:mt-10 lg:mt-16">
                    <Tabs defaultValue="upcoming" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-orange-100 dark:bg-orange-900/30">
                            <TabsTrigger value="upcoming" className="text-xs sm:text-sm data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                                <Zap className="w-3 h-3 mr-1 inline" /> Upcoming Matches
                            </TabsTrigger>
                            <TabsTrigger value="standings" className="text-xs sm:text-sm data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                                <Trophy className="w-3 h-3 mr-1 inline" /> Standings
                            </TabsTrigger>
                            <TabsTrigger value="results" className="text-xs sm:text-sm data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                                <Star className="w-3 h-3 mr-1 inline" /> Recent Results
                            </TabsTrigger>
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
    )
}