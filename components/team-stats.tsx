import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, TrendingUp, Users, Percent, Award, Target } from "lucide-react"

interface TeamStatsProps {
  winPercentage: number
  totalMatches: number
  championships: number
  highestScore: number
  bestBowling: string
  rivalTeam: string
}

export default function TeamStats({
  winPercentage,
  totalMatches,
  championships,
  highestScore,
  bestBowling,
  rivalTeam,
}: TeamStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="border-orange-200 dark:border-orange-900/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Percent className="h-4 w-4 mr-2 text-orange-600" />
            Win Percentage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{winPercentage}%</p>
          <p className="text-xs text-black">From {totalMatches} matches</p>
        </CardContent>
      </Card>

      <Card className="border-orange-200 dark:border-orange-900/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Trophy className="h-4 w-4 mr-2 text-orange-600" />
            Championships
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{championships}</p>
          <p className="text-xs text-black">Tournament titles</p>
        </CardContent>
      </Card>

      <Card className="border-orange-200 dark:border-orange-900/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <TrendingUp className="h-4 w-4 mr-2 text-orange-600" />
            Highest Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{highestScore}</p>
          <p className="text-xs text-black">Team total</p>
        </CardContent>
      </Card>

      <Card className="border-orange-200 dark:border-orange-900/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Award className="h-4 w-4 mr-2 text-orange-600" />
            Best Bowling
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{bestBowling}</p>
          <p className="text-xs text-black">Best bowling figures</p>
        </CardContent>
      </Card>

      <Card className="border-orange-200 dark:border-orange-900/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Target className="h-4 w-4 mr-2 text-orange-600" />
            Main Rival
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{rivalTeam}</p>
          <p className="text-xs text-black">Biggest competitor</p>
        </CardContent>
      </Card>

      <Card className="border-orange-200 dark:border-orange-900/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Users className="h-4 w-4 mr-2 text-orange-600" />
            Squad Size
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">18</p>
          <p className="text-xs text-black">Active players</p>
        </CardContent>
      </Card>
    </div>
  )
}
 