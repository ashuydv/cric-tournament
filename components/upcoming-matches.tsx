import { CalendarDays, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UpcomingMatches() {
  // Sample upcoming matches data
  const upcomingMatches = [
    {
      id: 1,
      team1: "Australia",
      team2: "India",
      date: "June 8, 2025",
      time: "14:00",
      venue: "Sydney Cricket Ground",
      group: "Group A",
    },
    {
      id: 2,
      team1: "England",
      team2: "South Africa",
      date: "June 9, 2025",
      time: "10:30",
      venue: "Lord's, London",
      group: "Group B",
    },
    {
      id: 3,
      team1: "New Zealand",
      team2: "Pakistan",
      date: "June 10, 2025",
      time: "15:00",
      venue: "Eden Park, Auckland",
      group: "Group A",
    },
    {
      id: 4,
      team1: "West Indies",
      team2: "Sri Lanka",
      date: "June 11, 2025",
      time: "13:30",
      venue: "Kensington Oval, Barbados",
      group: "Group B",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {upcomingMatches.map((match) => (
        <Link href={`/matches/${match.id}`} key={match.id}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-0">
              <div className="p-4">
                <Badge variant="outline" className="mb-2">
                  {match.group}
                </Badge>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${match.team1.charAt(0)}`}
                        width={40}
                        height={40}
                        alt={match.team1}
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium">{match.team1}</span>
                  </div>
                  <span className="text-sm font-bold">VS</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{match.team2}</span>
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${match.team2.charAt(0)}`}
                        width={40}
                        height={40}
                        alt={match.team2}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-black">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    <span>{match.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{match.time}</span>
                  </div>
                </div>
                <div className="mt-1 text-xs text-black">{match.venue}</div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
