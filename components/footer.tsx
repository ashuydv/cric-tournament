// Footer component for cricket website
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-4 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Teams Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Teams</h3>
                        <ul className="space-y-2">
                            <li><Link href="/teams/mumbai-strikers" className="hover:text-white transition-colors">Mumbai Strikers</Link></li>
                            <li><Link href="/teams/delhi-dynamos" className="hover:text-white transition-colors">Delhi Dynamos</Link></li>
                            <li><Link href="/teams/bangalore-blasters" className="hover:text-white transition-colors">Bangalore Blasters</Link></li>
                            <li><Link href="/teams/chennai-kings" className="hover:text-white transition-colors">Chennai Kings</Link></li>
                            <li><Link href="/teams/kolkata-tigers" className="hover:text-white transition-colors">Kolkata Tigers</Link></li>
                            <li><Link href="/teams/hyderabad-eagles" className="hover:text-white transition-colors">Hyderabad Eagles</Link></li>
                            <li><Link href="/teams/rajasthan-royals" className="hover:text-white transition-colors">Rajasthan Royals</Link></li>
                            <li><Link href="/teams/punjab-warriors" className="hover:text-white transition-colors">Punjab Warriors</Link></li>
                            <li><Link href="/teams/ahmedabad-avengers" className="hover:text-white transition-colors">Ahmedabad Avengers</Link></li>
                            <li><Link href="/teams/lucknow-legends" className="hover:text-white transition-colors">Lucknow Legends</Link></li>
                            <li><Link href="/teams/jaipur-jaguars" className="hover:text-white transition-colors">Jaipur Jaguars</Link></li>
                            <li><Link href="/teams/kochi-tuskers" className="hover:text-white transition-colors">Kochi Tuskers</Link></li>
                        </ul>
                    </div>

                    {/* Run Bhumi Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Run Bhumi</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/merchandise" className="hover:text-white transition-colors">Merchandise</Link></li>
                            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link href="/news" className="hover:text-white transition-colors">News & Events</Link></li>
                        </ul>
                    </div>

                    {/* Guidelines Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Run Bhumi Guidelines</h3>
                        <ul className="space-y-2">
                            <li><Link href="/guidelines/code-of-conduct" className="hover:text-white transition-colors">Code of Conduct in Team Dugouts</Link></li>
                            <li><Link href="/guidelines/commercial" className="hover:text-white transition-colors">Runbhumi Commercial Guidelines</Link></li>
                            <li><Link href="/guidelines/rulebook" className="hover:text-white transition-colors">Cricket Rulebook</Link></li>
                            <li><Link href="/guidelines/pmoa" className="hover:text-white transition-colors">Cricket PMOA Guideline</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy & Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Condition</Link></li>
                        </ul>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-6">
                            <Link href="https://facebook.com" className="text-black hover:text-white transition-colors">
                                <Facebook size={24} />
                            </Link>
                            <Link href="https://instagram.com" className="text-black hover:text-white transition-colors">
                                <Instagram size={24} />
                            </Link>
                            <Link href="https://linkedin.com" className="text-black hover:text-white transition-colors">
                                <Linkedin size={24} />
                            </Link>
                            <Link href="https://youtube.com" className="text-black hover:text-white transition-colors">
                                <Youtube size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cricket player illustrations on left and right */}
            <div className="absolute bottom-0 left-0 opacity-20 w-64 h-auto hidden md:block">
                <svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                    <path d="M80,180 C70,100 30,80 20,150 C10,240 70,280 80,180 Z" />
                    <path d="M50,220 C40,180 20,170 10,190 C0,210 30,240 50,220 Z" />
                    <path d="M70,100 C60,80 40,70 30,90 C20,110 50,120 70,100 Z" />
                    <path d="M90,90 C100,70 110,60 120,80 C130,100 100,110 90,90 Z" />
                    <path d="M60,140 L100,160 L110,150 L70,130 Z" />
                    <path d="M90,170 L130,190 L140,180 L100,160 Z" />
                </svg>
            </div>

            <div className="absolute bottom-0 right-0 opacity-20 w-64 h-auto hidden md:block">
                <svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                    <path d="M120,180 C130,100 170,80 180,150 C190,240 130,280 120,180 Z" />
                    <path d="M150,220 C160,180 180,170 190,190 C200,210 170,240 150,220 Z" />
                    <path d="M130,100 C140,80 160,70 170,90 C180,110 150,120 130,100 Z" />
                    <path d="M110,90 C100,70 90,60 80,80 C70,100 100,110 110,90 Z" />
                    <path d="M140,140 L100,160 L90,150 L130,130 Z" />
                    <path d="M110,170 L70,190 L60,180 L100,160 Z" />
                </svg>
            </div>
        </footer>
    )
}

export default Footer