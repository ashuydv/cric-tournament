"use client"

// import Image from "next/image"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { Star } from "lucide-react"
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

// export default function MerchandisePage() {
//     // Sample merchandise data
//     const merchandise = {
//         jerseys: Array.from({ length: 8 }, (_, i) => ({
//             id: `jersey-${i + 1}`,
//             name: `${["Mumbai Strikers", "Delhi Dynamos", "Bangalore Blasters", "Chennai Kings"][i % 4]} Official Jersey ${new Date().getFullYear()}`,
//             price: 1499 + i * 100,
//             image: `/placeholder.svg?height=300&width=300&text=Jersey+${i + 1}`,
//             rating: 4.5,
//             reviews: 24 + i,
//             isNew: i < 2,
//             isBestseller: i >= 2 && i < 4,
//         })),
//         accessories: Array.from({ length: 6 }, (_, i) => ({
//             id: `accessory-${i + 1}`,
//             name: `RunBhumi ${["Cap", "Wristband", "Backpack", "Water Bottle", "Keychain", "Scarf"][i % 6]}`,
//             price: 499 + i * 50,
//             image: `/placeholder.svg?height=300&width=300&text=Accessory+${i + 1}`,
//             rating: 4.2,
//             reviews: 18 + i,
//             isNew: i < 1,
//             isBestseller: i >= 1 && i < 3,
//         })),
//         memorabilia: Array.from({ length: 4 }, (_, i) => ({
//             id: `memorabilia-${i + 1}`,
//             name: `${["Signed Cricket Bat", "Team Photo Frame", "Championship Trophy Replica", "Commemorative Cricket Ball"][i % 4]}`,
//             price: 2999 + i * 1000,
//             image: `/placeholder.svg?height=300&width=300&text=Memorabilia+${i + 1}`,
//             rating: 4.8,
//             reviews: 12 + i,
//             isNew: i < 1,
//             isBestseller: i >= 1 && i < 2,
//             isLimited: i >= 2,
//         })),
//     }

//     // Function to render star rating
//     const renderRating = (rating: any) => {
//         return (
//             <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                     <Star
//                         key={i}
//                         className={`h-4 w-4 ${i < Math.floor(rating)
//                             ? "text-yellow-400 fill-yellow-400"
//                             : i < rating
//                                 ? "text-yellow-400 fill-yellow-400 opacity-50"
//                                 : "text-gray-300"
//                             }`}
//                     />
//                 ))}
//                 <span className="ml-1 text-sm text-muted-foreground">{rating}</span>
//             </div>
//         )
//     }

//     return (
//         <div className="flex flex-col min-h-screen">
//             <main className="flex-1">
//                 {/* Hero Section */}
//                 {/* <section className="w-full py-44 pb-32 md:py-52 lg:py-64 bg-black text-white">
//                     <div className="container px-4 md:px-6 mx-auto">
//                         <div className="flex flex-col items-center space-y-4 text-center">
//                             <div className="space-y-2">
//                                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
//                                     Official Merchandise
//                                 </h2>
//                                 <p className="max-w-[700px] text-gray-200 md:text-xl mx-auto">
//                                     Show your support with authentic RunBhumi cricket merchandise
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </section> */}

//                 {/* Merchandise Section */}
//                 {/* <section className="w-full py-12 md:py-24 lg:py-32">
//                     <div className="container px-4 md:px-6 mx-auto">
//                         <Tabs defaultValue="jerseys" className="w-full">
//                             <div className="flex justify-center mb-8">
//                                 <TabsList>
//                                     <TabsTrigger value="jerseys">Team Jerseys</TabsTrigger>
//                                     <TabsTrigger value="accessories">Accessories</TabsTrigger>
//                                     <TabsTrigger value="memorabilia">Memorabilia</TabsTrigger>
//                                 </TabsList>
//                             </div>

//                             <TabsContent value="jerseys">
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                                     {merchandise.jerseys.map((item) => (
//                                         <Card key={item.id} className="overflow-hidden">
//                                             <div className="relative">
//                                                 <div className="relative h-64 w-full">
//                                                     <Image src={item.image || "/placeholder.svg"} fill alt={item.name} className="object-cover" />
//                                                 </div>
//                                                 {item.isNew && <Badge className="absolute top-2 right-2 bg-blue-500">New</Badge>}
//                                                 {item.isBestseller && (
//                                                     <Badge className="absolute top-2 right-2 bg-orange-500">Bestseller</Badge>
//                                                 )}
//                                             </div>
//                                             <CardContent className="p-4">
//                                                 <h3 className="font-semibold mb-1 line-clamp-2">{item.name}</h3>
//                                                 <div className="flex items-center justify-between">
//                                                     <p className="font-bold">₹{item.price.toLocaleString()}</p>
//                                                     {renderRating(item.rating)}
//                                                 </div>
//                                                 <p className="text-xs text-muted-foreground mt-1">{item.reviews} reviews</p>
//                                             </CardContent>
//                                             <CardFooter className="p-4 pt-0">
//                                                 <Button className="w-full bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
//                                             </CardFooter>
//                                         </Card>
//                                     ))}
//                                 </div>
//                             </TabsContent>

//                             <TabsContent value="accessories">
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                                     {merchandise.accessories.map((item) => (
//                                         <Card key={item.id} className="overflow-hidden">
//                                             <div className="relative">
//                                                 <div className="relative h-64 w-full">
//                                                     <Image src={item.image || "/placeholder.svg"} fill alt={item.name} className="object-cover" />
//                                                 </div>
//                                                 {item.isNew && <Badge className="absolute top-2 right-2 bg-blue-500">New</Badge>}
//                                                 {item.isBestseller && (
//                                                     <Badge className="absolute top-2 right-2 bg-orange-500">Bestseller</Badge>
//                                                 )}
//                                             </div>
//                                             <CardContent className="p-4">
//                                                 <h3 className="font-semibold mb-1 line-clamp-2">{item.name}</h3>
//                                                 <div className="flex items-center justify-between">
//                                                     <p className="font-bold">₹{item.price.toLocaleString()}</p>
//                                                     {renderRating(item.rating)}
//                                                 </div>
//                                                 <p className="text-xs text-muted-foreground mt-1">{item.reviews} reviews</p>
//                                             </CardContent>
//                                             <CardFooter className="p-4 pt-0">
//                                                 <Button className="w-full bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
//                                             </CardFooter>
//                                         </Card>
//                                     ))}
//                                 </div>
//                             </TabsContent>

//                             <TabsContent value="memorabilia">
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                                     {merchandise.memorabilia.map((item) => (
//                                         <Card key={item.id} className="overflow-hidden">
//                                             <div className="relative">
//                                                 <div className="relative h-64 w-full">
//                                                     <Image src={item.image || "/placeholder.svg"} fill alt={item.name} className="object-cover" />
//                                                 </div>
//                                                 {item.isNew && <Badge className="absolute top-2 right-2 bg-blue-500">New</Badge>}
//                                                 {item.isBestseller && (
//                                                     <Badge className="absolute top-2 right-2 bg-orange-500">Bestseller</Badge>
//                                                 )}
//                                                 {item.isLimited && <Badge className="absolute top-2 right-2 bg-red-500">Limited Edition</Badge>}
//                                             </div>
//                                             <CardContent className="p-4">
//                                                 <h3 className="font-semibold mb-1 line-clamp-2">{item.name}</h3>
//                                                 <div className="flex items-center justify-between">
//                                                     <p className="font-bold">₹{item.price.toLocaleString()}</p>
//                                                     {renderRating(item.rating)}
//                                                 </div>
//                                                 <p className="text-xs text-muted-foreground mt-1">{item.reviews} reviews</p>
//                                             </CardContent>
//                                             <CardFooter className="p-4 pt-0">
//                                                 <Button className="w-full bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
//                                             </CardFooter>
//                                         </Card>
//                                     ))}
//                                 </div>
//                             </TabsContent>
//                         </Tabs>
//                     </div>
//                 </section> */}

//                 {/* Featured Collection */}
//                 {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-orange-950/20">
//                     <div className="container px-4 md:px-6 mx-auto">
//                         <div className="flex flex-col items-center space-y-4 text-center mb-10">
//                             <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Collection</h2>
//                             <p className="max-w-[700px] text-muted-foreground md:text-lg">
//                                 Limited edition RunBhumi Championship merchandise
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                             <Card className="col-span-1 lg:col-span-2 overflow-hidden">
//                                 <div className="grid md:grid-cols-2">
//                                     <div className="relative h-full min-h-[300px]">
//                                         <Image
//                                             src="/placeholder.svg?height=600&width=600&text=Championship+Collection"
//                                             fill
//                                             alt="Championship Collection"
//                                             className="object-cover"
//                                         />
//                                         <Badge className="absolute top-4 left-4 bg-red-500">Limited Edition</Badge>
//                                     </div>
//                                     <CardContent className="p-6 flex flex-col justify-center">
//                                         <h3 className="text-2xl font-bold mb-2">Championship Collection</h3>
//                                         <p className="text-muted-foreground mb-4">
//                                             Celebrate the champions with our exclusive collection featuring signed memorabilia, limited
//                                             edition jerseys, and collector's items.
//                                         </p>
//                                         <Button className="w-fit bg-orange-500 hover:bg-orange-600">Shop Collection</Button>
//                                     </CardContent>
//                                 </div>
//                             </Card>

//                             <div className="space-y-6">
//                                 <Card className="overflow-hidden">
//                                     <div className="relative h-40">
//                                         <Image
//                                             src="/placeholder.svg?height=160&width=400&text=Team+Jerseys"
//                                             fill
//                                             alt="Team Jerseys"
//                                             className="object-cover"
//                                         />
//                                     </div>
//                                     <CardContent className="p-4">
//                                         <h3 className="font-semibold">Team Jerseys</h3>
//                                         <p className="text-sm text-muted-foreground">Support your favorite team</p>
//                                     </CardContent>
//                                     <CardFooter className="p-4 pt-0">
//                                         <Button variant="link" className="p-0 h-auto text-orange-500">
//                                             Shop Now
//                                         </Button>
//                                     </CardFooter>
//                                 </Card>

//                                 <Card className="overflow-hidden">
//                                     <div className="relative h-40">
//                                         <Image
//                                             src="/placeholder.svg?height=160&width=400&text=Fan+Gear"
//                                             fill
//                                             alt="Fan Gear"
//                                             className="object-cover"
//                                         />
//                                     </div>
//                                     <CardContent className="p-4">
//                                         <h3 className="font-semibold">Fan Gear</h3>
//                                         <p className="text-sm text-muted-foreground">Essential accessories for match day</p>
//                                     </CardContent>
//                                     <CardFooter className="p-4 pt-0">
//                                         <Button variant="link" className="p-0 h-auto text-orange-500">
//                                             Shop Now
//                                         </Button>
//                                     </CardFooter>
//                                 </Card>
//                             </div>
//                         </div>
//                     </div>
//                 </section> */}
//             </main>
//         </div>
//     )
// }


import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Mail, CalendarClock, Bell } from "lucide-react"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState } from "react"

export default function MerchandisePage() {
    // Email notification state
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    // Coming soon launch date
    const launchDate = new Date("2025-06-01")

    // Calculate time remaining
    const calculateTimeRemaining = () => {
        const now = new Date()
        const difference = launchDate.getTime() - now.getTime()

        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

        return { days, hours }
    }

    const { days, hours } = calculateTimeRemaining()

    // Handle email submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            // Here you would typically send this to your API
            console.log("Email submitted:", email)
            setIsSubmitted(true)
            setTimeout(() => setIsSubmitted(false), 3000)
            setEmail("")
        }
    }

    // Sample merchandise data (keeping this for future use)
    const merchandise = {
        jerseys: Array.from({ length: 8 }, (_, i) => ({
            id: `jersey-${i + 1}`,
            name: `${["Mumbai Strikers", "Delhi Dynamos", "Bangalore Blasters", "Chennai Kings"][i % 4]} Official Jersey ${new Date().getFullYear()}`,
            price: 1499 + i * 100,
            image: `/placeholder.svg?height=300&width=300&text=Jersey+${i + 1}`,
            rating: 4.5,
            reviews: 24 + i,
            isNew: i < 2,
            isBestseller: i >= 2 && i < 4,
        })),
        accessories: Array.from({ length: 6 }, (_, i) => ({
            id: `accessory-${i + 1}`,
            name: `RunBhumi ${["Cap", "Wristband", "Backpack", "Water Bottle", "Keychain", "Scarf"][i % 6]}`,
            price: 499 + i * 50,
            image: `/placeholder.svg?height=300&width=300&text=Accessory+${i + 1}`,
            rating: 4.2,
            reviews: 18 + i,
            isNew: i < 1,
            isBestseller: i >= 1 && i < 3,
        })),
        memorabilia: Array.from({ length: 4 }, (_, i) => ({
            id: `memorabilia-${i + 1}`,
            name: `${["Signed Cricket Bat", "Team Photo Frame", "Championship Trophy Replica", "Commemorative Cricket Ball"][i % 4]}`,
            price: 2999 + i * 1000,
            image: `/placeholder.svg?height=300&width=300&text=Memorabilia+${i + 1}`,
            rating: 4.8,
            reviews: 12 + i,
            isNew: i < 1,
            isBestseller: i >= 1 && i < 2,
            isLimited: i >= 2,
        })),
    }

    // Function to render star rating (keeping for future use)
    const renderRating = (rating: any) => {
        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : i < rating
                                ? "text-yellow-400 fill-yellow-400 opacity-50"
                                : "text-gray-300"
                            }`}
                    />
                ))}
                <span className="ml-1 text-sm text-muted-foreground">{rating}</span>
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Coming Soon Hero Section */}
                <section className="w-full py-44 pb-32 md:py-52 lg:py-64 bg-black text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    Official Merchandise
                                </h1>
                                <p className="max-w-[700px] text-gray-100 md:text-xl mx-auto">
                                    Show your support with authentic RunBhumi cricket merchandise
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Coming Soon Content */}
                <section className="w-full py-16 md:py-24 bg-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <div className="relative w-40 h-40 mb-8">
                                <Image
                                    src="/rb_logo.png"
                                    alt="RunBhumi Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Coming Soon!</h2>
                            <p className="text-xl text-gray-600 mb-8">
                                We're working hard to bring you the best cricket merchandise. Our store will be launching soon!
                            </p>

                            {/* Countdown */}
                            <div className="flex flex-wrap justify-center gap-4 mb-12">
                                <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[140px]">
                                    <div className="text-3xl md:text-4xl font-bold text-orange-600">{days}</div>
                                    <div className="text-sm text-gray-500">Days</div>
                                </div>
                                <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[140px]">
                                    <div className="text-3xl md:text-4xl font-bold text-orange-600">{hours}</div>
                                    <div className="text-sm text-gray-500">Hours</div>
                                </div>
                            </div>

                            {/* Notification Form */}
                            <Card className="w-full max-w-md">
                                <CardContent className="pt-6">
                                    <div className="flex items-center justify-center mb-4">
                                        <Bell className="h-5 w-5 text-orange-500 mr-2" />
                                        <h3 className="text-lg font-semibold">Get Notified When We Launch</h3>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Your email address"
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-orange-500 hover:bg-orange-600"
                                        >
                                            Notify Me
                                        </Button>

                                        {isSubmitted && (
                                            <p className="text-green-600 text-sm text-center">
                                                Thank you! We'll notify you when we launch.
                                            </p>
                                        )}
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Teaser Section */}
                <section className="w-full py-16 bg-orange-50">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold">What to Expect</h2>
                            <p className="text-gray-600 mt-2">Preview of our upcoming merchandise categories</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src="/placeholder.svg?height=200&width=400&text=Team+Jerseys"
                                        fill
                                        alt="Team Jerseys"
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="p-5">
                                    <h3 className="text-xl font-semibold mb-2">Team Jerseys</h3>
                                    <p className="text-gray-600">
                                        Official team jerseys from all RunBhumi franchises. Show your team spirit with authentic player gear.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src="/placeholder.svg?height=200&width=400&text=Fan+Accessories"
                                        fill
                                        alt="Fan Accessories"
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="p-5">
                                    <h3 className="text-xl font-semibold mb-2">Accessories</h3>
                                    <p className="text-gray-600">
                                        Complete your fan experience with caps, wristbands, backpacks and other essential match day gear.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src="/placeholder.svg?height=200&width=400&text=Memorabilia"
                                        fill
                                        alt="Memorabilia"
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="p-5">
                                    <h3 className="text-xl font-semibold mb-2">Memorabilia</h3>
                                    <p className="text-gray-600">
                                        Limited edition collectibles including signed cricket bats, trophy replicas and team photographs.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}