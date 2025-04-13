// components/dynamic-hero-section.jsx
import Image from "next/image"
import { ChevronDown, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DynamicHeroSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black/90">
            {/* Background overlay text */}
            <div className="absolute inset-0 text-[40rem] font-black text-white/5 select-none flex items-center justify-center overflow-hidden">
                <Image width={1000} height={720} alt="" src="/hero_bg.jpg" />
            </div>

            {/* Main hero content */}
            <div className="relative z-10 w-full h-full flex flex-col">
                <div className="container mx-auto px-4 md:px-6 flex flex-col justify-center h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Text content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-600/20 text-orange-500 text-sm font-medium">
                                <Flame className="w-4 h-4 mr-2 animate-pulse" />
                                <span>MATCH UPDATES</span>
                            </div>

                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
                                Detailed cricket <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">match news &</span> <br />
                                reviews
                            </h1>

                            <p className="text-lg text-gray-300 max-w-xl">
                                Follow all the action from the Cricket Champions Cup 2025. Get exclusive updates, match highlights, and expert analysis.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 hover:scale-105 text-white font-medium px-8">
                                    READ MORE
                                </Button>
                                <Button variant="outline" size="lg" className="border-orange-600/50 text-orange-500 hover:bg-orange-600/10 transition-all">
                                    MATCH SCHEDULE
                                </Button>
                            </div>
                        </div>

                        {/* Image content */}
                        <div className="hidden lg:block relative h-[500px] ml-auto">
                            <Image
                                src="/hero_bg.jpg"
                                alt="Cricket player hitting a ball"
                                width={800}
                                height={1000}
                                className="object-cover h-full w-full rounded-lg"
                                priority
                            />

                            {/* Highlighted post */}
                            <div className="absolute -bottom-10 -left-10 w-64 bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 shadow-xl">
                                <div className="text-xs font-semibold text-orange-500 mb-1">TRENDING</div>
                                <h3 className="text-white text-sm font-bold mb-2">Goals that make games really memorable</h3>
                                <div className="text-xs text-gray-400">Sep 19, 2023</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll down indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
                    <span className="text-xs mb-1">SCROLL DOWN</span>
                    <ChevronDown className="w-5 h-5" />
                </div>

                {/* Social media links */}
                <div className="absolute bottom-8 right-8 flex flex-col gap-3">
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-white/10 hover:bg-white/20 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-white/10 hover:bg-white/20 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-white/10 hover:bg-white/20 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </Button>
                </div>
            </div>
        </section>
    )
}