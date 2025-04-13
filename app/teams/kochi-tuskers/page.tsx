import TeamLayout from "@/components/team-layout"
import PlayerCard from "@/components/player-card"

export default function MumbaiStrikersPage() {
    const teamData = {
        name: "Mumbai Strikers",
        logo: "/placeholder.svg?height=200&width=200",
        established: "2008",
        homeGround: "Wankhede Stadium, Mumbai",
        championships: 5,
        captain: "Rohit Sharma",
        description:
            "Mumbai Strikers are known for their aggressive batting lineup and consistent performances. With 5 championship titles, they are the most successful team in the tournament's history. The team is based in Mumbai, Maharashtra and plays its home matches at the iconic Wankhede Stadium.",
        stats: {
            winPercentage: 68,
            totalMatches: 210,
            championships: 5,
            highestScore: 235,
            bestBowling: "5/15",
            rivalTeam: "Chennai Kings",
        },
    }

    const players = [
        {
            name: "Rohit Sharma",
            role: "Captain & Opening Batsman",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 185,
                runs: 5879,
                average: 31.8,
                strikeRate: 138.5,
            },
            isInternational: true,
        },
        {
            name: "Jasprit Bumrah",
            role: "Fast Bowler",
            battingStyle: "Right-handed",
            bowlingStyle: "Right-arm fast",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 120,
                wickets: 157,
                economyRate: 7.2,
            },
            isInternational: true,
        },
        {
            name: "Suryakumar Yadav",
            role: "Middle-order Batsman",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 123,
                runs: 3589,
                average: 33.5,
                strikeRate: 145.8,
            },
            isInternational: true,
        },
        {
            name: "Hardik Pandya",
            role: "All-rounder",
            battingStyle: "Right-handed",
            bowlingStyle: "Right-arm medium-fast",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 115,
                runs: 2189,
                wickets: 78,
                strikeRate: 153.2,
                economyRate: 8.4,
            },
            isInternational: true,
        },
        {
            name: "Ishan Kishan",
            role: "Wicket-keeper Batsman",
            battingStyle: "Left-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 89,
                runs: 2354,
                average: 28.7,
                strikeRate: 136.9,
            },
            isInternational: true,
        },
        {
            name: "Rahul Chahar",
            role: "Spin Bowler",
            battingStyle: "Right-handed",
            bowlingStyle: "Right-arm leg break",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 63,
                wickets: 74,
                economyRate: 7.8,
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
