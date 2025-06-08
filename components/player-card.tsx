import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface PlayerCardProps {
    name: string
    role: string
    battingStyle: string
    bowlingStyle?: string
    image: string
    stats: {
        matches: number
        runs?: number
        wickets?: number
        average?: number
        strikeRate?: number
        economyRate?: number
    }
    isInternational: boolean
}

export default function PlayerCard({
    name,
    role,
    battingStyle,
    bowlingStyle,
    image,
    stats,
    isInternational,
}: PlayerCardProps) {
    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-orange-200 dark:border-orange-900/50">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-100 to-amber-50 dark:from-orange-900/20 dark:to-amber-800/20">
                <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover object-top" />
            </div>
            <CardHeader className="p-4 pb-2 flex flex-row justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="text-sm text-black">{role}</p>
                </div>
                {isInternational && <Badge className="bg-orange-600">International</Badge>}
            </CardHeader>
            <CardContent className="p-4 pt-2 space-y-2">
                <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                        <p className="text-black">Batting</p>
                        <p className="font-medium">{battingStyle}</p>
                    </div>
                    {bowlingStyle && (
                        <div>
                            <p className="text-black">Bowling</p>
                            <p className="font-medium">{bowlingStyle}</p>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-3 gap-1 text-xs pt-2">
                    <div>
                        <p className="text-black">Matches</p>
                        <p className="font-medium">{stats.matches}</p>
                    </div>
                    {stats.runs !== undefined && (
                        <div>
                            <p className="text-black">Runs</p>
                            <p className="font-medium">{stats.runs}</p>
                        </div>
                    )}
                    {stats.wickets !== undefined && (
                        <div>
                            <p className="text-black">Wickets</p>
                            <p className="font-medium">{stats.wickets}</p>
                        </div>
                    )}
                    {stats.average !== undefined && (
                        <div>
                            <p className="text-black">Average</p>
                            <p className="font-medium">{stats.average}</p>
                        </div>
                    )}
                    {stats.strikeRate !== undefined && (
                        <div>
                            <p className="text-black">S/R</p>
                            <p className="font-medium">{stats.strikeRate}</p>
                        </div>
                    )}
                    {stats.economyRate !== undefined && (
                        <div>
                            <p className="text-black">Economy</p>
                            <p className="font-medium">{stats.economyRate}</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
