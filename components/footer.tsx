import Link from "next/link"
import { Trophy } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white py-12">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Teams Column */}
                    {/* <div className="space-y-4">
                        <h3 className="text-lg font-bold">Teams</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/teams/mumbai-strikers" className="text-gray-400 hover:text-white transition-colors">
                                    Mumbai Strikers
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/delhi-dynamos" className="text-gray-400 hover:text-white transition-colors">
                                    Delhi Dynamos
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/bangalore-blasters" className="text-gray-400 hover:text-white transition-colors">
                                    Bangalore Blasters
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/chennai-kings" className="text-gray-400 hover:text-white transition-colors">
                                    Chennai Kings
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/kolkata-tigers" className="text-gray-400 hover:text-white transition-colors">
                                    Kolkata Tigers
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/hyderabad-eagles" className="text-gray-400 hover:text-white transition-colors">
                                    Hyderabad Eagles
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/rajasthan-royals" className="text-gray-400 hover:text-white transition-colors">
                                    Rajasthan Royals
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/punjab-warriors" className="text-gray-400 hover:text-white transition-colors">
                                    Punjab Warriors
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/ahmedabad-avengers" className="text-gray-400 hover:text-white transition-colors">
                                    Ahmedabad Avengers
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/lucknow-legends" className="text-gray-400 hover:text-white transition-colors">
                                    Lucknow Legends
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/jaipur-jaguars" className="text-gray-400 hover:text-white transition-colors">
                                    Jaipur Jaguars
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/kochi-tuskers" className="text-gray-400 hover:text-white transition-colors">
                                    Kochi Tuskers
                                </Link>
                            </li>
                        </ul>
                    </div> */}

                    {/* RunBhumi Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">RunBhumi</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/merchandise" className="text-gray-400 hover:text-white transition-colors">
                                    Merchandise
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/news-events" className="text-gray-400 hover:text-white transition-colors">
                                    News & Events
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* RunBhumi Guidelines Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">RunBhumi Guidelines</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/guidelines/code-of-conduct" className="text-gray-400 hover:text-white transition-colors">
                                    Code of Conduct in Team Dugouts
                                </Link>
                            </li>
                            <li>
                                <Link href="/guidelines/commercial" className="text-gray-400 hover:text-white transition-colors">
                                    RunBhumi Commercial Guidelines
                                </Link>
                            </li>
                            <li>
                                <Link href="/guidelines/rulebook" className="text-gray-400 hover:text-white transition-colors">
                                    Cricket Rulebook
                                </Link>
                            </li>
                            <li>
                                <Link href="/guidelines/pmoa" className="text-gray-400 hover:text-white transition-colors">
                                    Cricket PMOA Guideline
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy & Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                                    Terms & Condition
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} RunBhumi. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
