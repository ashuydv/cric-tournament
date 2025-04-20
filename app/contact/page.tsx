import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Calendar, User } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-44 pb-32 md:py-52 lg:py-64 bg-black text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Contact Us</h1>
                                <p className="max-w-[700px] text-gray-400 md:text-xl mx-auto">
                                    Get in touch with the RunBhumi team for inquiries, partnerships, or support.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form & Info Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                            {/* Contact Form */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Send Us a Message</h2>
                                    <p className="text-muted-foreground">
                                        Fill out the form below and we'll get back to you as soon as possible.
                                    </p>
                                </div>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="first-name" className="text-sm font-medium">
                                                First name
                                            </label>
                                            <Input id="first-name" placeholder="Enter your first name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="last-name" className="text-sm font-medium">
                                                Last name
                                            </label>
                                            <Input id="last-name" placeholder="Enter your last name" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <Input id="email" type="email" placeholder="Enter your email" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">
                                            Phone
                                        </label>
                                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">
                                            Subject
                                        </label>
                                        <Input id="subject" placeholder="Enter the subject" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Message
                                        </label>
                                        <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
                                    </div>

                                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                                        Send Message
                                    </Button>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Event Information</h2>
                                    <p className="text-muted-foreground">Important details about the RunBhumi Cricket Talent Hunt.</p>
                                </div>

                                <div className="grid gap-6">
                                    <Card>
                                        <CardContent className="p-6 flex items-start space-x-4">
                                            <Calendar className="h-6 w-6 text-orange-500 mt-1" />
                                            <div>
                                                <h3 className="font-bold">Trials Start</h3>
                                                <p className="text-muted-foreground mt-1">
                                                    Thursday, April 18, 2025
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6 flex items-start space-x-4">
                                            <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                                            <div>
                                                <h3 className="font-bold">Office Address</h3>
                                                <p className="text-muted-foreground mt-1">
                                                    MNT Dreams Pvt. Ltd.
                                                    <br />
                                                    770 , Tower B - 1 <br />
                                                    Spaze IT park ,Sector 49 <br />
                                                    Sohna Road, Gurugram, Haryana-122002
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6 flex items-start space-x-4">
                                            <User className="h-6 w-6 text-orange-500 mt-1" />
                                            <div>
                                                <h3 className="font-bold">Registration Includes</h3>
                                                <ul className="text-muted-foreground mt-1 space-y-1">
                                                    <li>• Official RunBhumi Cricket T-shirt</li>
                                                    <li>• Performance evaluation</li>
                                                    <li>• Chance to be selected for 45-day Gurukul</li>
                                                    <li>• Opportunity to be mentored by cricket legends</li>
                                                    <li>• Possibility of appearing on national television</li>
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6 flex items-start space-x-4">
                                            <Mail className="h-6 w-6 text-orange-500 mt-1" />
                                            <div>
                                                <h3 className="font-bold">Contact</h3>
                                                <p className="text-muted-foreground mt-1">
                                                    Email: hello@therunbhumi.com
                                                    <br />
                                                    Phone: +91 22 9876 5432
                                                    <br />
                                                    Office: +91 99643 91643
                                                    <br />
                                                    WhatsApp Enquiries: +91 99643 92643
                                                    <br />
                                                    IVR: +91 99643 96643
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-orange-950/20">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center mb-10">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Find Us</h2>
                            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                                Visit our headquarters in Mumbai or find a RunBhumi event near you
                            </p>
                        </div>

                        <div className="w-full h-[400px] rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650450351910!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="RunBhumi Headquarters Location"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
