import TeamLayout from "@/components/team-layout"
import PlayerCard from "@/components/player-card"

export default function ChennaiKingsPage() {
    const teamData = {
        name: "Chennai Kings",
        logo: "/placeholder.svg?height=200&width=200",
        established: "2008",
        homeGround: "M.A. Chidambaram Stadium, Chennai",
        championships: 4,
        captain: "MS Dhoni",
        description:
            "Chennai Kings are one of the most consistent teams in the tournament with 4 championship titles. Known for their experienced squad and strategic gameplay, they have qualified for the playoffs in most seasons. The team has a massive fan following and is famous for its 'Whistle Podu' anthem.",
        stats: {
            winPercentage: 64,
            totalMatches: 204,
            championships: 4,
            highestScore: 246,
            bestBowling: "4/22",
            rivalTeam: "Mumbai Strikers",
        },
    }

    const players = [
        {
            name: "MS Dhoni",
            role: "Captain & Wicket-keeper",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 234,
                runs: 5082,
                average: 39.1,
                strikeRate: 135.8,
            },
            isInternational: true,
        },
        {
            name: "Ravindra Jadeja",
            role: "All-rounder",
            battingStyle: "Left-handed",
            bowlingStyle: "Left-arm orthodox",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 210,
                runs: 2502,
                wickets: 132,
                economyRate: 7.6,
            },
            isInternational: true,
        },
        {
            name: "Ruturaj Gaikwad",
            role: "Opening Batsman",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 52,
                runs: 1797,
                average: 37.4,
                strikeRate: 132.5,
            },
            isInternational: true,
        },
        {
            name: "Deepak Chahar",
            role: "Medium Pace Bowler",
            battingStyle: "Right-handed",
            bowlingStyle: "Right-arm medium",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 79,
                wickets: 85,
                economyRate: 7.8,
            },
            isInternational: true,
        },
        {
            name: "Moeen Ali",
            role: "All-rounder",
            battingStyle: "Left-handed",
            bowlingStyle: "Right-arm off-break",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 58,
                runs: 1055,
                wickets: 33,
                strikeRate: 143.7,
                economyRate: 8.1,
            },
            isInternational: true,
        },
        {
            name: "Ambati Rayudu",
            role: "Middle-order Batsman",
            battingStyle: "Right-handed",
            image: "/placeholder.svg?height=300&width=200",
            stats: {
                matches: 188,
                runs: 4187,
                average: 29.3,
                strikeRate: 127.1,
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
