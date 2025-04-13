import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

export default function MerchandisePage() {
    // Sample merchandise data
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

    // Function to render star rating
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
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Official Merchandise
                                </h1>
                                <p className="max-w-[700px] text-gray-400 md:text-xl mx-auto">
                                    Show your support with authentic RunBhumi cricket merchandise
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Merchandise Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <Tabs defaultValue="jerseys" className="w-full">
                            <div className="flex justify-center mb-8">
                                <TabsList>
                                    <TabsTrigger value="jerseys">Team Jerseys</TabsTrigger>
                                    <TabsTrigger value="accessories">Accessories</TabsTrigger>
                                    <TabsTrigger value="memorabilia">Memorabilia</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="jerseys">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {merchandise.jerseys.map((item) => (
                                        <Card key={item.id} className="overflow-hidden">
                                            <div className="relative">
                                                <div className="relative h-64 w-full">
                                                    <Image src={item.image || "/placeholder.svg"} fill alt={item.name} className="object-cover" />
                                                </div>
                                                {item.isNew && <Badge className="absolute top-2 right-2 bg-blue-500">New</Badge>}
                                                {item.isBestseller && (
                                                    <Badge className="absolute top-2 right-2 bg-orange-500">Bestseller</Badge>
                                                )}
                                            </div>
                                            <CardContent className="p-4">
                                                <h3 className="font-semibold mb-1 line-clamp-2">{item.name}</h3>
                                                <div className="flex items-center justify-between">
                                                    <p className="font-bold">₹{item.price.toLocaleString()}</p>
                                                    {renderRating(item.rating)}
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1">{item.reviews} reviews</p>
                                            </CardContent>
                                            <CardFooter className="p-4 pt-0">
                                                <Button className="w-full bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="accessories">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {merchandise.accessories.map((item) => (
                                        <Card key={item.id} className="overflow-hidden">
                                            <div className="relative">
                                                <div className="relative h-64 w-full">
                                                    <Image src={item.image || "/placeholder.svg"} fill alt={item.name} className="object-cover" />
                                                </div>
                                                {item.isNew && <Badge className="absolute top-2 right-2 bg-blue-500">New</Badge>}
                                                {item.isBestseller && (
                                                    <Badge className="absolute top-2 right-2 bg-orange-500">Bestseller</Badge>
                                                )}
                                            </div>
                                            <CardContent className="p-4">
                                                <h3 className="font-semibold mb-1 line-clamp-2">{item.name}</h3>
                                                <div className="flex items-center justify-between">
                                                    <p className="font-bold">₹{item.price.toLocaleString()}</p>
                                                    {renderRating(item.rating)}
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1">{item.reviews} reviews</p>
                                            </CardContent>
                                            <CardFooter className="p-4 pt-0">
                                                <Button className="w-full bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="memorabilia">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {merchandise.memorabilia.map((item) => (
                                        <Card key={item.id} className="overflow-hidden">
                                            <div className="relative">
                                                <div className="relative h-64 w-full">
                                                    <Image src={item.image || "/placeholder.svg"} fill alt={item.name} className="object-cover" />
                                                </div>
                                                {item.isNew && <Badge className="absolute top-2 right-2 bg-blue-500">New</Badge>}
                                                {item.isBestseller && (
                                                    <Badge className="absolute top-2 right-2 bg-orange-500">Bestseller</Badge>
                                                )}
                                                {item.isLimited && <Badge className="absolute top-2 right-2 bg-red-500">Limited Edition</Badge>}
                                            </div>
                                            <CardContent className="p-4">
                                                <h3 className="font-semibold mb-1 line-clamp-2">{item.name}</h3>
                                                <div className="flex items-center justify-between">
                                                    <p className="font-bold">₹{item.price.toLocaleString()}</p>
                                                    {renderRating(item.rating)}
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1">{item.reviews} reviews</p>
                                            </CardContent>
                                            <CardFooter className="p-4 pt-0">
                                                <Button className="w-full bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* Featured Collection */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-orange-950/20">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center mb-10">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Collection</h2>
                            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                                Limited edition RunBhumi Championship merchandise
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <Card className="col-span-1 lg:col-span-2 overflow-hidden">
                                <div className="grid md:grid-cols-2">
                                    <div className="relative h-full min-h-[300px]">
                                        <Image
                                            src="/placeholder.svg?height=600&width=600&text=Championship+Collection"
                                            fill
                                            alt="Championship Collection"
                                            className="object-cover"
                                        />
                                        <Badge className="absolute top-4 left-4 bg-red-500">Limited Edition</Badge>
                                    </div>
                                    <CardContent className="p-6 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold mb-2">Championship Collection</h3>
                                        <p className="text-muted-foreground mb-4">
                                            Celebrate the champions with our exclusive collection featuring signed memorabilia, limited
                                            edition jerseys, and collector's items.
                                        </p>
                                        <Button className="w-fit bg-orange-500 hover:bg-orange-600">Shop Collection</Button>
                                    </CardContent>
                                </div>
                            </Card>

                            <div className="space-y-6">
                                <Card className="overflow-hidden">
                                    <div className="relative h-40">
                                        <Image
                                            src="/placeholder.svg?height=160&width=400&text=Team+Jerseys"
                                            fill
                                            alt="Team Jerseys"
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold">Team Jerseys</h3>
                                        <p className="text-sm text-muted-foreground">Support your favorite team</p>
                                    </CardContent>
                                    <CardFooter className="p-4 pt-0">
                                        <Button variant="link" className="p-0 h-auto text-orange-500">
                                            Shop Now
                                        </Button>
                                    </CardFooter>
                                </Card>

                                <Card className="overflow-hidden">
                                    <div className="relative h-40">
                                        <Image
                                            src="/placeholder.svg?height=160&width=400&text=Fan+Gear"
                                            fill
                                            alt="Fan Gear"
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold">Fan Gear</h3>
                                        <p className="text-sm text-muted-foreground">Essential accessories for match day</p>
                                    </CardContent>
                                    <CardFooter className="p-4 pt-0">
                                        <Button variant="link" className="p-0 h-auto text-orange-500">
                                            Shop Now
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
