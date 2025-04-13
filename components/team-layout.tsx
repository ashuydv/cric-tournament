import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TeamHeader from "@/components/team-header"
import TeamStats from "@/components/team-stats"
import { Separator } from "@/components/ui/separator"
import type { ReactNode } from "react"

interface TeamLayoutProps {
    teamData: {
        name: string
        logo: string
        established: string
        homeGround: string
        championships: number
        captain: string
        description: string
        stats: {
            winPercentage: number
            totalMatches: number
            championships: number
            highestScore: number
            bestBowling: string
            rivalTeam: string
        }
    }
    children: ReactNode
}

export default function TeamLayout({ teamData, children }: TeamLayoutProps) {
    return (
        <div className="">
            <TeamHeader
                name={teamData.name}
                logo={teamData.logo}
                established={teamData.established}
                homeGround={teamData.homeGround}
                championships={teamData.championships}
                captain={teamData.captain}
            />
            <div className="container mx-auto space-y-6 py-6 px-4 md:px-6 lg:px-8">
                <div className="text-sm md:text-base lg:text-lg">
                    <p className="max-w-3xl">{teamData.description}</p>
                </div>

                <Separator className="my-4" />

                <Tabs defaultValue="players" className="w-full">
                    <div className="flex justify-center sm:justify-start mb-4">
                        <TabsList className="grid w-full max-w-md grid-cols-2">
                            <TabsTrigger value="players">Players</TabsTrigger>
                            <TabsTrigger value="stats">Team Stats</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="players" className="mt-2 space-y-4">
                        {children}
                    </TabsContent>

                    <TabsContent value="stats" className="mt-2">
                        <div className="rounded-lg border p-4">
                            <TeamStats
                                winPercentage={teamData.stats.winPercentage}
                                totalMatches={teamData.stats.totalMatches}
                                championships={teamData.stats.championships}
                                highestScore={teamData.stats.highestScore}
                                bestBowling={teamData.stats.bestBowling}
                                rivalTeam={teamData.stats.rivalTeam}
                            />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}