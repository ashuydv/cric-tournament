import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, MapPin } from "lucide-react"

export default function NewsEventsPage() {
    // Sample news data
    const newsItems = Array.from({ length: 6 }, (_, i) => ({
        id: `news-${i + 1}`,
        title: `RunBhumi announces expansion to ${i + 1} new cities for next season`,
        excerpt: `In a major development for cricket fans across India, RunBhumi has confirmed plans to expand the tournament to include ${i + 1} new city teams starting next season.`,
        date: `April ${i + 1}, 2025`,
        image: `/placeholder.svg?height=200&width=400&text=News+${i + 1}`,
        category: i % 2 === 0 ? "Tournament News" : "Press Release",
    }))

    // Sample events data
    const events = Array.from({ length: 4 }, (_, i) => ({
        id: `event-${i + 1}`,
        title: `Season ${new Date().getFullYear()} Opening Ceremony`,
        description: `Join us for the grand opening ceremony of RunBhumi Season ${new Date().getFullYear()} featuring performances by top artists and the introduction of all team players.`,
        date: `May ${10 + i}, 2025`,
        time: "6:00 PM IST",
        location: "Mumbai Cricket Stadium",
        image: `/placeholder.svg?height=200&width=400&text=Event+${i + 1}`,
    }))

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">News & Events</h1>
                                <p className="max-w-[700px] text-gray-400 md:text-xl mx-auto">
                                    Stay updated with the latest news and upcoming events from RunBhumi
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* News & Events Tabs */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <Tabs defaultValue="news" className="w-full">
                            <div className="flex justify-center mb-8">
                                <TabsList>
                                    <TabsTrigger value="news">Latest News</TabsTrigger>
                                    <TabsTrigger value="events">Upcoming Events</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="news">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {newsItems.map((item) => (
                                        <Card key={item.id} className="overflow-hidden">
                                            <div className="relative h-48">
                                                <Image src={item.image || "/placeholder.svg"} fill alt={item.title} className="object-cover" />
                                                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                                    {item.category}
                                                </div>
                                            </div>
                                            <CardContent className="p-4">
                                                <div className="flex items-center text-sm text-muted-foreground mb-2">
                                                    <CalendarDays className="h-3 w-3 mr-1" />
                                                    <span>{item.date}</span>
                                                </div>
                                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm">{item.excerpt}</p>
                                            </CardContent>
                                            <CardFooter className="p-4 pt-0">
                                                <Link href={`/news/${item.id}`}>
                                                    <Button variant="link" className="p-0 h-auto text-orange-500">
                                                        Read More
                                                    </Button>
                                                </Link>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                                <div className="flex justify-center mt-8">
                                    <Button variant="outline">Load More News</Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="events">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {events.map((event) => (
                                        <Card key={event.id} className="overflow-hidden">
                                            <div className="grid md:grid-cols-2">
                                                <div className="relative h-full min-h-[200px]">
                                                    <Image
                                                        src={event.image || "/placeholder.svg"}
                                                        fill
                                                        alt={event.title}
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <CardContent className="p-6">
                                                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                                    <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                                                    <div className="space-y-2 text-sm">
                                                        <div className="flex items-center text-muted-foreground">
                                                            <CalendarDays className="h-4 w-4 mr-2" />
                                                            <span>{event.date}</span>
                                                        </div>
                                                        <div className="flex items-center text-muted-foreground">
                                                            <Clock className="h-4 w-4 mr-2" />
                                                            <span>{event.time}</span>
                                                        </div>
                                                        <div className="flex items-center text-muted-foreground">
                                                            <MapPin className="h-4 w-4 mr-2" />
                                                            <span>{event.location}</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <Button className="bg-orange-500 hover:bg-orange-600">Register Now</Button>
                                                    </div>
                                                </CardContent>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                                <div className="flex justify-center mt-8">
                                    <Button variant="outline">View All Events</Button>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-orange-950/20">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Stay Updated</h2>
                                <p className="max-w-[700px] text-muted-foreground md:text-lg mx-auto">
                                    Register with your details to receive the latest news and event updates directly on your phone
                                </p>
                            </div>
                            <div className="w-full max-w-md">
                                <form className="flex flex-col space-y-3">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Enter your full name"
                                        type="text"
                                        name="fullName"
                                        required
                                    />
                                    <div className="flex space-x-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Enter your mobile number"
                                            type="tel"
                                            name="mobileNumber"
                                            pattern="[0-9]{10}"
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="bg-orange-500 w-auto hover:bg-orange-600">
                                        Register
                                    </Button>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        By registering, you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
