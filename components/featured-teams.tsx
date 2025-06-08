// components/featured-teams.jsx
import Image from "next/image"
import { ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturedTeams() {
    return (
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/30 dark:to-amber-900/20">
            <div className="container px-4 md:px-6  mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-flex items-center justify-center">
                            <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 mr-2 animate-pulse" />
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Featured Teams</h2>
                            <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 ml-2 animate-pulse" />
                        </div>
                        <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-orange-800 dark:text-orange-200">
                            10 elite international teams competing for cricket's ultimate glory
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 sm:py-12">
                    <div className="grid grid-cols-2 gap-3 xs:gap-4 md:grid-cols-3 lg:order-last">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Card key={i} className="overflow-hidden border-orange-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-orange-400">
                                <CardContent className="p-2 sm:p-4 bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/20">
                                    <div className="flex flex-col items-center">
                                        <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full overflow-hidden mb-2 ring-2 ring-orange-400 ring-offset-2">
                                            <Image
                                                src={`/placeholder.svg?height=64&width=64&text=Team${i}`}
                                                width={64}
                                                height={64}
                                                alt={`Team ${i}`}
                                                className="object-cover"
                                            />
                                        </div>
                                        <h3 className="text-sm sm:text-base font-bold text-orange-700 dark:text-orange-400">Team {i}</h3>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center space-y-4 mt-6 lg:mt-0">
                        <div className="space-y-2">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter">World-Class Cricket Nations</h3>
                            <p className="text-sm sm:text-base md:text-lg text-black">
                                The tournament features the top cricket nations from around the world, including defending champions
                                Australia, cricket powerhouses India and England, and rising stars like Afghanistan.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 sm:flex-row">
                            <Button variant="outline" className="inline-flex items-center text-sm sm:text-base border-orange-400 text-orange-600 hover:bg-orange-50 hover:text-orange-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                                View All Teams
                                <ChevronRight className="ml-1 h-4 w-4 animate-bounce" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}