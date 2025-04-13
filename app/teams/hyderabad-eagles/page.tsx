import TeamLayout from "@/components/team-layout"
import PlayerCard from "@/components/player-card"

export default function HyderabadEaglesPage() {
    const teamData = {
        name: "Hyderabad Eagles",
        logo: "/placeholder.svg?height=200&width=200",
        established: "2013",
        homeGround: "Rajiv Gandhi International Stadium, Hyderabad",
        championships: 1,
        captain: "Kane Williamson",
        description:
            "Hyderabad Eagles are known for their strong bowling attack and disciplined approach to the game. They have won 1 championship and are known for unearthing young Indian talent. The team represents the city of Hyderabad and has a dedicated fan following in the region.",
        stats: {
            winPercentage: 51,
            totalMatches: 156,
            championships: 1,
            highestScore: 231,
            bestBowling: "6/12",
            rivalTeam: "Rajasthan Royals",
        },
    }

    const players = [
        {
            name: "Kane Williamson",
            role: "Captain & Top-order Batsman",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 76,
                runs: 2021,
                average: 36.2,
                strikeRate: 126.3,
            },
            isInternational: true,
        },
        {
            name: "Bhuvneshwar Kumar",
            role: "Fast Bowler",
            battingStyle: "Right-handed",
            bowlingStyle: "Right-arm medium-fast",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 146,
                wickets: 154,
                economyRate: 7.3,
            },
            isInternational: true,
        },
        {
            name: "T Natarajan",
            role: "Fast Bowler",
            battingStyle: "Left-handed",
            bowlingStyle: "Left-arm medium-fast",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 33,
                wickets: 44,
                economyRate: 8.4,
            },
            isInternational: true,
        },
        {
            name: "Abdul Samad",
            role: "Middle-order Batsman",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 29,
                runs: 527,
                average: 20.3,
                strikeRate: 141.8,
            },
            isInternational: false,
        },
        {
            name: "Washington Sundar",
            role: "All-rounder",
            battingStyle: "Left-handed",
            bowlingStyle: "Right-arm off-break",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 51,
                runs: 318,
                wickets: 31,
                economyRate: 7.6,
            },
            isInternational: true,
        },
        {
            name: "Rahul Tripathi",
            role: "Top-order Batsman",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 76,
                runs: 1798,
                average: 27.7,
                strikeRate: 138.9,
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
