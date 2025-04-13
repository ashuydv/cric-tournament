import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
    // Sample gallery images data
    const galleryImages = {
        matches: Array.from({ length: 12 }, (_, i) => ({
            id: `match-${i + 1}`,
            src: `/placeholder.svg?height=300&width=400&text=Match+${i + 1}`,
            alt: `Cricket match action shot ${i + 1}`,
            caption: `Mumbai Strikers vs Delhi Dynamos - Match Day ${i + 1}`,
        })),
        events: Array.from({ length: 8 }, (_, i) => ({
            id: `event-${i + 1}`,
            src: `/placeholder.svg?height=300&width=400&text=Event+${i + 1}`,
            alt: `Cricket event photo ${i + 1}`,
            caption: `RunBhumi Season Opening Ceremony ${i + 1}`,
        })),
        fans: Array.from({ length: 10 }, (_, i) => ({
            id: `fan-${i + 1}`,
            src: `/placeholder.svg?height=300&width=400&text=Fans+${i + 1}`,
            alt: `Cricket fans photo ${i + 1}`,
            caption: `Fans celebrating at Mumbai Stadium ${i + 1}`,
        })),
    }

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Gallery</h1>
                                <p className="max-w-[700px] text-gray-400 md:text-xl mx-auto">
                                    Explore the best moments from RunBhumi cricket tournaments
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <Tabs defaultValue="matches" className="w-full">
                            <div className="flex justify-center mb-8">
                                <TabsList>
                                    <TabsTrigger value="matches">Match Action</TabsTrigger>
                                    <TabsTrigger value="events">Events</TabsTrigger>
                                    <TabsTrigger value="fans">Fan Zone</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="matches">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {galleryImages.matches.map((image) => (
                                        <div key={image.id} className="group relative overflow-hidden rounded-lg">
                                            <Image
                                                src={image.src || "/placeholder.svg"}
                                                width={400}
                                                height={300}
                                                alt={image.alt}
                                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <p className="text-white text-sm">{image.caption}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="events">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {galleryImages.events.map((image) => (
                                        <div key={image.id} className="group relative overflow-hidden rounded-lg">
                                            <Image
                                                src={image.src || "/placeholder.svg"}
                                                width={400}
                                                height={300}
                                                alt={image.alt}
                                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <p className="text-white text-sm">{image.caption}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="fans">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {galleryImages.fans.map((image) => (
                                        <div key={image.id} className="group relative overflow-hidden rounded-lg">
                                            <Image
                                                src={image.src || "/placeholder.svg"}
                                                width={400}
                                                height={300}
                                                alt={image.alt}
                                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <p className="text-white text-sm">{image.caption}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>
            </main>
        </div>
    )
}
