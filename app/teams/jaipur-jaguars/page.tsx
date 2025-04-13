import TeamLayout from "@/components/team-layout"
import PlayerCard from "@/components/player-card"

export default function KolkataTigersPage() {
    const teamData = {
        name: "Kolkata Tigers",
        logo: "/placeholder.svg?height=200&width=200",
        established: "2008",
        homeGround: "Eden Gardens, Kolkata",
        championships: 2,
        captain: "Shreyas Iyer",
        description:
            "Kolkata Tigers have won 2 championships and are known for their aggressive brand of cricket. The team is owned by Bollywood celebrities and has a strong fan base. They play their home matches at the iconic Eden Gardens, one of the largest cricket stadiums in the world.",
        stats: {
            winPercentage: 53,
            totalMatches: 212,
            championships: 2,
            highestScore: 232,
            bestBowling: "5/19",
            rivalTeam: "Delhi Dynamos",
        },
    }

    const players = [
        {
            name: "Shreyas Iyer",
            role: "Captain & Middle-order Batsman",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 101,
                runs: 2776,
                average: 31.5,
                strikeRate: 125.7,
            },
            isInternational: true,
        },
        {
            name: "Andre Russell",
            role: "All-rounder",
            battingStyle: "Right-handed",
            bowlingStyle: "Right-arm fast-medium",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 98,
                runs: 2035,
                wickets: 89,
                strikeRate: 177.9,
                economyRate: 9.1,
            },
            isInternational: true,
        },
        {
            name: "Sunil Narine",
            role: "All-rounder",
            battingStyle: "Left-handed",
            bowlingStyle: "Right-arm off-break",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 148,
                runs: 1025,
                wickets: 152,
                economyRate: 6.7,
            },
            isInternational: true,
        },
        {
            name: "Venkatesh Iyer",
            role: "All-rounder",
            battingStyle: "Left-handed",
            bowlingStyle: "Right-arm medium",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 36,
                runs: 956,
                wickets: 14,
                strikeRate: 136.3,
                economyRate: 8.9,
            },
            isInternational: true,
        },
        {
            name: "Varun Chakravarthy",
            role: "Spin Bowler",
            battingStyle: "Right-handed",
            bowlingStyle: "Right-arm mystery spin",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 42,
                wickets: 51,
                economyRate: 7.3,
            },
            isInternational: true,
        },
        {
            name: "Nitish Rana",
            role: "Middle-order Batsman",
            battingStyle: "Left-handed",
            bowlingStyle: "Right-arm off-break",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 91,
                runs: 2181,
                average: 28.3,
                strikeRate: 134.2,
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
