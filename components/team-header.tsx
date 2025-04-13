import Image from "next/image"
import { Trophy, MapPin, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface TeamHeaderProps {
    name: string
    logo: string
    established: string
    homeGround: string
    championships: number
    captain: string
}

export default function TeamHeader({ name, logo, established, homeGround, championships, captain }: TeamHeaderProps) {
    return (
        <section className="w-full py-10 sm:py-12 bg-black">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <Badge
                                variant="outline"
                                className="inline-flex items-center border-orange-600/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400"
                            >
                                <Trophy className="mr-1 h-3 w-3" />
                                {championships > 0 ? `${championships} Championships` : "Rising Contender"}
                            </Badge>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                {name}
                            </h1>
                            <p className="max-w-[600px] text-sm sm:text-base md:text-lg text-orange-800 dark:text-orange-200">
                                Captain: <span className="font-bold text-orange-600">{captain}</span>
                            </p>
                        </div>
                        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 text-xs sm:text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                                <MapPin className="h-3 w-3" />
                                <span>{homeGround}</span>
                            </div>
                            <Separator orientation="vertical" className="hidden xs:block h-4" />
                            <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>Est. {established}</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[200px] sm:h-[250px] overflow-hidden rounded-xl mt-4 lg:mt-0 bg-white/50 dark:bg-white/10 flex items-center justify-center p-4">
                        <Image
                            src={logo || "/placeholder.svg"}
                            width={200}
                            height={200}
                            alt={`${name} logo`}
                            className="object-contain max-h-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
