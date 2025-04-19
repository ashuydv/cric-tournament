import Image from "next/image"
import Header from "@/components/header"
import { Trophy, Users, Calendar, MapPin, Award, Star, Tv, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"

export default function AboutUsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-44 pb-32 md:py-52 lg:py-64 bg-black text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-6 text-center">
                            <div className="space-y-3">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">RunBhumi</h1>
                                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-500">
                                    India's Greatest Cricket Talent Hunt
                                </p>
                                <p className="max-w-[700px] text-gray-400 md:text-lg mx-auto mt-4">
                                    Scouting extraordinary players from every corner of the nation
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Story</h2>
                                <p className="text-muted-foreground md:text-lg">
                                    RunBhumi is not just a platform—it's a battlefield where raw cricketing dreams come alive. We are India's
                                    <strong> first-ever televised individual cricket talent hunt</strong>, built to scout, train, and launch
                                    extraordinary players from every corner of the nation—from bustling cities to the most remote villages.
                                </p>
                                <p className="text-muted-foreground md:text-lg">
                                    This is a national movement for the youth who never had access, exposure, or opportunity but possess unmatched
                                    passion and potential. RunBhumi gives them the stage, the training, the spotlight—and a shot at the big league.
                                </p>
                                <p className="text-muted-foreground md:text-lg">
                                    With trials held across India, a rigorous 45-day cricket Gurukul led by legendary cricketers, and a grand league
                                    broadcast nationwide, <strong>RunBhumi transforms untold stories into national sensations</strong>.
                                </p>
                            </div>
                            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
                                <Image
                                    src="/placeholder.svg?height=500&width=500&text=Run+Bhumi+Story"
                                    width={500}
                                    height={500}
                                    alt="RunBhumi cricket tournament"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Facts Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-orange-950/20">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center mb-10">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Facts</h2>
                            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                                RunBhumi has grown to become India's most prestigious cricket talent hunt
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <MapPin className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">36</h3>
                                        <p className="text-sm text-muted-foreground">Cities for On-ground Trials</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">128</h3>
                                        <p className="text-sm text-muted-foreground">Players Selected (80 M + 48 F)</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">45</h3>
                                        <p className="text-sm text-muted-foreground">Day Residential Camp</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <Tv className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">36</h3>
                                        <p className="text-sm text-muted-foreground">TV Episodes</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <Trophy className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">10</h3>
                                        <p className="text-sm text-muted-foreground">Teams (6 Male + 4 Female)</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <Award className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">32</h3>
                                        <p className="text-sm text-muted-foreground">Matches (22 Men + 10 Women)</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <Star className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">8</h3>
                                        <p className="text-sm text-muted-foreground">Ex-International Players per Team</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <Heart className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">500+</h3>
                                        <p className="text-sm text-muted-foreground">Talents in Next 10 Years</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Broadcast Section */}
                <section className="w-full py-12 md:py-20 bg-gray-100">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center mb-8">
                            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Broadcast Partners</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 items-center">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-medium">Sony Ten 3</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-medium">SonyLiv</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-medium">Sony Pal</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-medium">FanCode</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Leadership Team Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center mb-10">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Leadership Team</h2>
                            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                                Meet the passionate individuals behind RunBhumi's success
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex flex-col items-center space-y-3">
                                <div className="h-40 w-40 rounded-full overflow-hidden mb-3">
                                    <Image
                                        src="/placeholder.svg?height=160&width=160&text=Narendra"
                                        width={160}
                                        height={160}
                                        alt="Narendra Khanna"
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-xl">Narendra Khanna</h3>
                                <p className="text-sm text-orange-600 dark:text-orange-400">Founder & Visionary</p>
                                <p className="text-sm text-muted-foreground text-center max-w-md">
                                    An engineer turned sports entrepreneur, Narendra has spent 25+ years working across continents.
                                    His own journey of being a passionate cricketer who never got the opportunity fuels RunBhumi's
                                    mission—to ensure no talent goes unnoticed again.
                                </p>
                            </div>

                            <div className="flex flex-col items-center space-y-3">
                                <div className="h-40 w-40 rounded-full overflow-hidden mb-3">
                                    <Image
                                        src="/placeholder.svg?height=160&width=160&text=Tarak"
                                        width={160}
                                        height={160}
                                        alt="Tarak Bajpai"
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-xl">Tarak Bajpai</h3>
                                <p className="text-sm text-orange-600 dark:text-orange-400">Co-Founder & Strategist</p>
                                <p className="text-sm text-muted-foreground text-center max-w-md">
                                    A retired Air Force officer and business leader, Tarak blends discipline, structure, and cultural insight
                                    into RunBhumi. A lifelong cricket lover, he is the strategic force behind the on-ground execution of
                                    India's biggest cricket talent hunt.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-500 text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Vision</h2>
                            <p className="md:text-lg text-white/80">
                                To <strong>redefine the future of Indian cricket</strong> by creating a national platform where every deserving
                                player—regardless of their background—gets scouted, trained, and celebrated on national television.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100 text-black">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission</h2>
                            <ul className="space-y-4 text-black">
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white">✓</div>
                                    <span>To <strong>hunt, nurture, and launch</strong> the best untapped cricket talent from Bharat</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white">✓</div>
                                    <span>To eliminate barriers like caste, class, geography, or politics in player selection</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white">✓</div>
                                    <span>To offer high-intensity training under <strong>international legends and spiritual mentors</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white">✓</div>
                                    <span>To deliver a <strong>national broadcast experience</strong>, taking players' stories to millions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white">✓</div>
                                    <span>To create an <strong>annual revolution in Indian cricket</strong>, producing over <strong>500 champions in 10 years</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Broadcast Section */}
                <section className="w-full py-12 md:py-20 bg-gray-100">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center mb-8">
                            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Broadcast Partners</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 items-center">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-medium">Sony Ten 3</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-medium">SonyLiv</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-medium">Sony Pal</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-medium">FanCode</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
                            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                                Have questions about RunBhumi? We'd love to hear from you!
                            </p>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                                    Contact Us
                                </Button>
                                <Button size="lg" variant="outline">
                                    Join Our Team
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}