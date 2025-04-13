import TeamLayout from "@/components/team-layout"
import PlayerCard from "@/components/player-card"

export default function AhmedabadPage() {
  const teamData = {
    name: "Rajasthan Royals",
    logo: "/placeholder.svg?height=200&width=200",
    established: "2008",
    homeGround: "Sawai Mansingh Stadium, Jaipur",
    championships: 1,
    captain: "Sanju Samson",
    description:
      "Rajasthan Royals won the inaugural championship in 2008 and are known for their ability to identify and nurture young talent. The team is based in Jaipur, Rajasthan and has a reputation for being one of the most economically run franchises in the tournament.",
    stats: {
      winPercentage: 49,
      totalMatches: 195,
      championships: 1,
      highestScore: 226,
      bestBowling: "5/5",
      rivalTeam: "Hyderabad Eagles",
    },
  }

  const players = [
    {
      name: "Sanju Samson",
      role: "Captain & Wicket-keeper",
      battingStyle: "Right-handed",
      image: "/placeholder.svg?height=300&width=200",
      stats: {
        matches: 138,
        runs: 3526,
        average: 29.4,
        strikeRate: 135.7,
      },
      isInternational: true,
    },
    {
      name: "Jos Buttler",
      role: "Opening Batsman",
      battingStyle: "Right-handed",
      image: "/placeholder.svg?height=300&width=200",
      stats: {
        matches: 82,
        runs: 2831,
        average: 38.8,
        strikeRate: 149.7,
      },
      isInternational: true,
    },
    {
      name: "Yuzvendra Chahal",
      role: "Spin Bowler",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm leg break",
      image: "/placeholder.svg?height=300&width=200",
      stats: {
        matches: 131,
        wickets: 166,
        economyRate: 7.7,
      },
      isInternational: true,
    },
    {
      name: "Shimron Hetmyer",
      role: "Middle-order Batsman",
      battingStyle: "Left-handed",
      image: "/placeholder.svg?height=300&width=200",
      stats: {
        matches: 51,
        runs: 1083,
        average: 30.9,
        strikeRate: 153.9,
      },
      isInternational: true,
    },
    {
      name: "Trent Boult",
      role: "Fast Bowler",
      battingStyle: "Right-handed",
      bowlingStyle: "Left-arm fast",
      image: "/placeholder.svg?height=300&width=200",
      stats: {
        matches: 78,
        wickets: 92,
        economyRate: 8.2,
      },
      isInternational: true,
    },
    {
      name: "Riyan Parag",
      role: "All-rounder",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm leg break",
      image: "/placeholder.svg?height=300&width=200",
      stats: {
        matches: 47,
        runs: 600,
        wickets: 4,
        strikeRate: 126.3,
      },
      isInternational: false,
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
