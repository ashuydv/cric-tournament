// components/hero-section.jsx
import Image from "next/image"
import { Flame, MapPin, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function HeroSection() {
    return (
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/30 dark:to-amber-900/20">
            <div className="container px-4 md:px-6  mx-auto">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <Badge
                                variant="outline"
                                className="inline-flex items-center border-orange-600/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400 animate-pulse"
                            >
                                <Flame className="mr-1 h-3 w-3" />
                                June 5 - July 15, 2025
                            </Badge>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                Run Bhumi 2025
                            </h1>
                            <p className="max-w-[600px] text-sm sm:text-base md:text-lg lg:text-xl text-orange-800 dark:text-orange-200">
                                Experience the <span className="font-bold text-orange-600">ULTIMATE THRILL</span> of international cricket as 10 teams battle for glory in the prestigious Champions Cup!
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Button size="sm" className="sm:text-sm md:text-base bg-orange-600 hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <Flame className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Buy Tickets
                            </Button>
                            <Button size="sm" className="sm:text-sm md:text-base border-orange-400 text-orange-600 hover:bg-orange-50 hover:text-orange-700 transition-all duration-300" variant="outline">
                                <Flame className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> View Schedule
                            </Button>
                        </div>
                        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 text-xs sm:text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                                <MapPin className="h-3 w-3" />
                                <span>Multiple Venues, Australia</span>
                            </div>
                            <Separator orientation="vertical" className="hidden xs:block h-4" />
                            <div className="flex items-center space-x-1">
                                <Users className="h-3 w-3" />
                                <span>10 Teams</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] overflow-hidden rounded-xl mt-4 lg:mt-0">
                        <Image
                            src="/placeholder.svg?height=500&width=500"
                            width={500}
                            height={500}
                            alt="Cricket stadium with players"
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}