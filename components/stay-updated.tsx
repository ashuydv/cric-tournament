// components/stay-updated.jsx
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function StayUpdated() {
    return (
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/30 dark:to-amber-900/20">
            <div className="container px-4 md:px-6  mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Stay Updated</h2>
                        <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-orange-800 dark:text-orange-200">
                            Subscribe to receive the latest news, match updates, and exclusive content
                        </p>
                    </div>
                    <div className="mx-auto w-full max-w-xs sm:max-w-sm space-y-2">
                        <form className="flex flex-col xs:flex-row gap-2">
                            <input
                                className="flex h-9 sm:h-10 w-full rounded-md border border-orange-300 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <Button type="submit" className="h-9 sm:h-10 text-xs sm:text-sm bg-orange-600 hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <Sparkles className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Subscribe
                            </Button>
                        </form>
                        <p className="text-xs text-orange-700/80 dark:text-orange-300/80">
                            By subscribing, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}