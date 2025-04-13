import TeamLayout from "@/components/team-layout"
import PlayerCard from "@/components/player-card"

export default function BangaloreBlastersPage() {
    const teamData = {
        name: "Bangalore Blasters",
        logo: "/placeholder.svg?height=200&width=200",
        established: "2008",
        homeGround: "M. Chinnaswamy Stadium, Bangalore",
        championships: 1,
        captain: "Virat Kohli",
        description:
            "Bangalore Blasters are known for their explosive batting lineup and star-studded roster. Despite having some of the biggest names in cricket, they have only won one championship. The team is famous for their loyal fan base and high-scoring matches at their home ground, which is known for its batting-friendly conditions.",
        stats: {
            winPercentage: 48,
            totalMatches: 205,
            championships: 1,
            highestScore: 263,
            bestBowling: "5/8",
            rivalTeam: "Mumbai Strikers",
        },
    }

    const players = [
        {
            name: "Virat Kohli",
            role: "Captain & Top-order Batsman",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 223,
                runs: 7263,
                average: 37.2,
                strikeRate: 130.1,
            },
            isInternational: true,
        },
        {
            name: "Glenn Maxwell",
            role: "All-rounder",
            battingStyle: "Right-handed",
            bowlingStyle: "Right-arm off-break",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 110,
                runs: 2719,
                wickets: 32,
                strikeRate: 154.8,
                economyRate: 8.3,
            },
            isInternational: true,
        },
        {
            name: "Mohammed Siraj",
            role: "Fast Bowler",
            battingStyle: "Right-handed",
            bowlingStyle: "Right-arm medium-fast",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 68,
                wickets: 78,
                economyRate: 8.6,
            },
            isInternational: true,
        },
        {
            name: "Faf du Plessis",
            role: "Opening Batsman",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 116,
                runs: 3403,
                average: 34.7,
                strikeRate: 132.9,
            },
            isInternational: true,
        },
        {
            name: "Wanindu Hasaranga",
            role: "All-rounder",
            battingStyle: "Right-handed",
            bowlingStyle: "Right-arm leg break",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 39,
                runs: 182,
                wickets: 53,
                economyRate: 7.9,
            },
            isInternational: true,
        },
        {
            name: "Dinesh Karthik",
            role: "Wicket-keeper Batsman",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 182,
                runs: 4376,
                average: 27.9,
                strikeRate: 139.8,
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
