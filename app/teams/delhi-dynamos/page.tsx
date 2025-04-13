import TeamLayout from "@/components/team-layout"
import PlayerCard from "@/components/player-card"

export default function DelhiDynamosPage() {
    const teamData = {
        name: "Delhi Dynamos",
        logo: "/placeholder.svg?height=200&width=200",
        established: "2008",
        homeGround: "Arun Jaitley Stadium, Delhi",
        championships: 0,
        captain: "Rishabh Pant",
        description:
            "Delhi Dynamos are known for their young talent and dynamic playing style. Though they haven't won a championship yet, they have been finalists twice and are considered one of the most exciting teams to watch. The team represents the capital city of India and has a passionate fan base.",
        stats: {
            winPercentage: 52,
            totalMatches: 198,
            championships: 0,
            highestScore: 228,
            bestBowling: "4/11",
            rivalTeam: "Kolkata Tigers",
        },
    }

    const players = [
        {
            name: "Rishabh Pant",
            role: "Captain & Wicket-keeper",
            battingStyle: "Left-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 98,
                runs: 2838,
                average: 34.6,
                strikeRate: 147.3,
            },
            isInternational: true,
        },
        {
            name: "Axar Patel",
            role: "All-rounder",
            battingStyle: "Left-handed",
            bowlingStyle: "Left-arm orthodox",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 117,
                runs: 1219,
                wickets: 101,
                economyRate: 7.4,
            },
            isInternational: true,
        },
        {
            name: "Prithvi Shaw",
            role: "Opening Batsman",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 63,
                runs: 1588,
                average: 25.2,
                strikeRate: 146.3,
            },
            isInternational: true,
        },
        {
            name: "Anrich Nortje",
            role: "Fast Bowler",
            battingStyle: "Right-handed",
            bowlingStyle: "Right-arm fast",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 42,
                wickets: 56,
                economyRate: 7.8,
            },
            isInternational: true,
        },
        {
            name: "Kuldeep Yadav",
            role: "Spin Bowler",
            battingStyle: "Left-handed",
            bowlingStyle: "Left-arm chinaman",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 82,
                wickets: 97,
                economyRate: 8.2,
            },
            isInternational: true,
        },
        {
            name: "David Warner",
            role: "Opening Batsman",
            battingStyle: "Left-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 162,
                runs: 5881,
                average: 42.0,
                strikeRate: 140.7,
            },
            isInternational: true,
        },
    ]

    return (
        <TeamLayout teamData={teamData}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.map((player) => (
                    <PlayerCard
                        key={player.name}
                        name={player.name}
                        role={player.role}
                        battingStyle={player.battingStyle}
                        bowlingStyle={player.bowlingStyle}
                        image={player.image}
                        stats={player.stats}
                        isInternational={player.isInternational}
                    />
                ))}
            </div>
        </TeamLayout>
    )
}
