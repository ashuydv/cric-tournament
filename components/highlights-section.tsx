// components/highlights-section.jsx
import { Sparkles, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HighlightsSection() {
    return (
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24">
            <div className="container px-4 md:px-6  mx-auto">
                <div className="grid gap-8 px-4 sm:px-6 md:px-8 lg:px-10 md:gap-12 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-xs sm:text-sm text-orange-700 dark:bg-orange-800/30 dark:text-orange-400 animate-pulse">
                            <Sparkles className="w-3 h-3 mr-1 inline" /> Tournament Highlights
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                            Key Moments to Look Forward To
                        </h2>
                        <ul className="grid gap-4">
                            <li className="flex items-start gap-3 sm:gap-4 group">
                                <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-orange-100 text-orange-900 dark:bg-orange-800/30 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                    1
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm sm:text-base font-bold text-orange-700 dark:text-orange-400 group-hover:text-orange-600 transition-colors duration-300">Opening Ceremony</h3>
                                    <p className="text-xs sm:text-sm text-orange-700/80 dark:text-orange-300/80">
                                        A <span className="font-bold">SPECTACULAR</span> display featuring cultural performances and cricket legends!
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 sm:gap-4 group">
                                <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-orange-100 text-orange-900 dark:bg-orange-800/30 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                    2
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm sm:text-base font-bold text-orange-700 dark:text-orange-400 group-hover:text-orange-600 transition-colors duration-300">Epic Rivalry Matches</h3>
                                    <p className="text-xs sm:text-sm text-orange-700/80 dark:text-orange-300/80">
                                        <span className="font-bold">INTENSE</span> showdowns between historic cricket rivals that will keep you on the edge of your seat!
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 sm:gap-4 group">
                                <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-orange-100 text-orange-900 dark:bg-orange-800/30 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                    3
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm sm:text-base font-bold text-orange-700 dark:text-orange-400 group-hover:text-orange-600 transition-colors duration-300">Grand Finals Weekend</h3>
                                    <p className="text-xs sm:text-sm text-orange-700/80 dark:text-orange-300/80">
                                        The <span className="font-bold">ULTIMATE SHOWDOWN</span> with semi-finals and the grand finale at the iconic Melbourne Cricket Ground!
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start space-y-4">
                        <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-xs sm:text-sm text-orange-700 dark:bg-orange-800/30 dark:text-orange-400 animate-pulse">
                            <Users className="w-3 h-3 mr-1 inline" /> Fan Experience
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">More Than Just Cricket!</h2>
                        <p className="text-sm sm:text-base md:text-lg text-orange-700 dark:text-orange-300 border-l-4 border-orange-500 pl-4 italic">
                            The RunBhumi offers an <span className="font-bold not-italic">UNFORGETTABLE</span> entertainment experience for fans of all ages! Enjoy interactive fan
                            zones, exclusive meet-and-greets with cricket legends, exciting games, and delicious food from around the
                            world.
                        </p>
                        <div className="grid w-full grid-cols-1 xs:grid-cols-2 gap-4">
                            <Card className="overflow-hidden border-orange-200 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                                <CardContent className="p-0">
                                    <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-yellow-500"></div>
                                    <div className="p-3 sm:p-4 bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/20">
                                        <div className="flex flex-col items-center text-center space-y-2">
                                            <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30 group-hover:bg-orange-500 transition-colors duration-300">
                                                <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-orange-700 dark:text-orange-400 group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <h3 className="text-sm sm:text-base font-bold text-orange-700 dark:text-orange-400">Fan Zones</h3>
                                            <p className="text-xs text-orange-600/80 dark:text-orange-300/80">Interactive areas with exciting games and activities!</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="overflow-hidden border-orange-200 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                                <CardContent className="p-0">
                                    <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-yellow-500"></div>
                                    <div className="p-3 sm:p-4 bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/20">
                                        <div className="flex flex-col items-center text-center space-y-2">
                                            <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30 group-hover:bg-orange-500 transition-colors duration-300">
                                                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-orange-700 dark:text-orange-400 group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <h3 className="text-sm sm:text-base font-bold text-orange-700 dark:text-orange-400">Meet Players</h3>
                                            <p className="text-xs text-orange-600/80 dark:text-orange-300/80">Exclusive opportunities to meet your cricket heroes!</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <Button className="text-xs sm:text-sm bg-orange-600 hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            <Sparkles className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Learn More About Fan Experiences
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}