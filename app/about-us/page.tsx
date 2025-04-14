import Image from "next/image"
import Header from "@/components/header"
import { Trophy, Users, Calendar, MapPin, Award, Star } from "lucide-react"
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
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">About RunBhumi</h2>
                                <p className="max-w-[700px] text-gray-400 md:text-xl mx-auto">
                                    Celebrating the spirit of cricket across India with premier tournaments and community engagement.
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
                                    RunBhumi was founded in 2018 with a vision to revolutionize cricket tournaments across India. What
                                    started as a small community initiative has grown into the country's premier cricket tournament
                                    organization.
                                </p>
                                <p className="text-muted-foreground md:text-lg">
                                    Our mission is to provide a professional platform for cricket enthusiasts, from grassroots to elite
                                    levels, while fostering community spirit and promoting the love of the game throughout India.
                                </p>
                                <p className="text-muted-foreground md:text-lg">
                                    Over the years, we've expanded to 12 cities, built partnerships with major sponsors, and created a
                                    platform where cricket talent can shine on a national stage.
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
                                RunBhumi has grown to become India's most prestigious cricket tournament organization
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <Trophy className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">12</h3>
                                        <p className="text-sm text-muted-foreground">City Teams</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">5000+</h3>
                                        <p className="text-sm text-muted-foreground">Players</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">7</h3>
                                        <p className="text-sm text-muted-foreground">Annual Tournaments</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <MapPin className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">25+</h3>
                                        <p className="text-sm text-muted-foreground">Venues</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <Award className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">₹1.5 Cr</h3>
                                        <p className="text-sm text-muted-foreground">Prize Money</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30">
                                            <Star className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold">15+</h3>
                                        <p className="text-sm text-muted-foreground">Sponsors</p>
                                    </div>
                                </CardContent>
                            </Card>
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

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex flex-col items-center space-y-2">
                                    <div className="h-32 w-32 rounded-full overflow-hidden mb-2">
                                        <Image
                                            src={`/placeholder.svg?height=128&width=128&text=Leader${i}`}
                                            width={128}
                                            height={128}
                                            alt={`Team Leader ${i}`}
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg">Rajesh Kumar</h3>
                                    <p className="text-sm text-orange-600 dark:text-orange-400">CEO & Founder</p>
                                    <p className="text-xs text-muted-foreground text-center">
                                        Former cricket player with 15+ years of sports management experience
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vision & Mission Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-500 text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Vision</h2>
                            <p className="md:text-lg text-white/80">
                                To become the premier cricket tournament organization in India, creating opportunities for players at
                                all levels while fostering community engagement and passion for the sport.
                            </p>
                            <ul className="space-y-2 text-white/80">
                                <li className="flex items-start gap-2">
                                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">✓</div>
                                    <span>Expand to 20 city teams by 2027</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">✓</div>
                                    <span>Launch youth development programs in all participating cities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">✓</div>
                                    <span>Create pathways for players to national recognition</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100 text-black">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission</h2>
                            <p className="md:text-lg text-black">
                                To provide a professional platform that celebrates cricket talent across India while building
                                communities and creating memorable sporting experiences.
                            </p>
                            <ul className="space-y-2 text-black">
                                <li className="flex items-start gap-2">
                                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">✓</div>
                                    <span>Organize high-quality cricket tournaments with professional standards</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">✓</div>
                                    <span>Support grassroots cricket development across India</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">✓</div>
                                    <span>Create engaging fan experiences both in-stadium and digitally</span>
                                </li>
                            </ul>
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
