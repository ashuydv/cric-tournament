import Header from "@/components/header"
import Footer from "@/components/footer"
import LeftHero from "@/components/common/left-hero"
import {
    User,
    Users,
    Megaphone,
    ShieldAlert,
    Flag,
    MessageSquare,
    AlertTriangle,
    Award,
    Clipboard,
    BadgeCheck,
    Monitor,
    UserPlus,
    ThumbsUp,
    UserCog,
    MessageCircle,
    PhoneCall,
    Clock,
    BookOpen,
    FileText
} from 'lucide-react'
import DynamicButton from "@/components/dynamic-button"

export default function CodeOfConductPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex-1">
                {/* Hero Section */}
                <LeftHero
                    title="Code of Conduct in Team Dugouts"
                    subtitle="Maintaining Cricket Excellence"
                    description="Guidelines for players, coaches, and team staff during RunBhumi matches"
                    backgroundType="color"
                    backgroundSrc="black" // Replace with appropriate cricket dugout image
                    backgroundOverlay={true}
                    backgroundOverlayOpacity={0.7}
                    height="small"
                    animated={true}
                    parallaxEnabled={true}
                    parallaxSpeed={0.7}
                />

                {/* Quick Navigation */}
                <section className="py-8 bg-white border-b">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-playfair">Quick Links</h2>
                            <div className="flex flex-wrap justify-center gap-3">
                                <a href="#general" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <Award className="h-4 w-4" />
                                    <span>General Principles</span>
                                </a>
                                <a href="#access" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <UserPlus className="h-4 w-4" />
                                    <span>Dugout Access</span>
                                </a>
                                <a href="#behavior" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <ThumbsUp className="h-4 w-4" />
                                    <span>Behavior Guidelines</span>
                                </a>
                                <a href="#communication" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <MessageCircle className="h-4 w-4" />
                                    <span>Communication</span>
                                </a>
                                <a href="#violations" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <AlertTriangle className="h-4 w-4" />
                                    <span>Violations</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Card */}
                <section className="py-12 bg-gradient-to-b from-white to-gray-50">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md max-w-3xl mx-auto border border-gray-100">
                            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                                <BookOpen className="h-8 w-8 text-orange-600" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900 font-playfair">Cricket Excellence Starts Here</h2>
                            <p className="text-gray-700 text-center mb-6">
                                This Code of Conduct outlines the expected behavior and responsibilities of all individuals present in
                                team dugouts during RunBhumi cricket matches. Adherence to these guidelines ensures a professional
                                environment that upholds the spirit of cricket and promotes fair play.
                            </p>
                            <div className="flex justify-center">
                                <DynamicButton variant="primary" href="#general">
                                    Explore Guidelines
                                </DynamicButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="w-full py-12 md:py-24">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="max-w-3xl mx-auto prose prose-green lg:prose-lg">

                            {/* General Principles */}
                            <div id="general" className="conduct-section scroll-mt-24">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <Award className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold mt-0 font-playfair">General Principles</h2>
                                </div>
                                <div className="pl-14">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                        <div className="bg-white p-5 rounded-lg border border-orange-100 shadow-sm flex flex-col">
                                            <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-4">
                                                <Flag className="h-6 w-6 text-orange-600" />
                                            </div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">Respect for the Game</h3>
                                            <p className="text-gray-700 text-sm">
                                                All individuals in the dugout must respect the traditions, rules, and spirit of cricket at all times.
                                            </p>
                                        </div>

                                        <div className="bg-white p-5 rounded-lg border border-orange-100 shadow-sm flex flex-col">
                                            <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-4">
                                                <ThumbsUp className="h-6 w-6 text-orange-600" />
                                            </div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">Sportsmanship</h3>
                                            <p className="text-gray-700 text-sm">
                                                Demonstrate good sportsmanship toward opponents, match officials, and spectators.
                                            </p>
                                        </div>

                                        <div className="bg-white p-5 rounded-lg border border-orange-100 shadow-sm flex flex-col">
                                            <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-4">
                                                <BadgeCheck className="h-6 w-6 text-orange-600" />
                                            </div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">Professionalism</h3>
                                            <p className="text-gray-700 text-sm">
                                                Maintain a professional demeanor regardless of match situations or outcomes.
                                            </p>
                                        </div>

                                        <div className="bg-white p-5 rounded-lg border border-orange-100 shadow-sm flex flex-col">
                                            <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-4">
                                                <ShieldAlert className="h-6 w-6 text-orange-600" />
                                            </div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">Integrity</h3>
                                            <p className="text-gray-700 text-sm">
                                                Uphold the highest standards of integrity and fair play.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dugout Access and Occupancy */}
                            <div id="access" className="conduct-section scroll-mt-24">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <UserPlus className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold mt-0 font-playfair">Dugout Access and Occupancy</h2>
                                </div>
                                <div className="pl-14">
                                    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 my-6">
                                        <div className="bg-orange-50 p-4 border-b border-gray-200">
                                            <div className="flex items-center gap-2">
                                                <Users className="h-5 w-5 text-orange-600" />
                                                <h3 className="font-semibold text-gray-900 m-0">Authorized Personnel</h3>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3">
                                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <span className="text-xs">1</span>
                                                    </div>
                                                    <span>Only authorized team personnel are permitted in the dugout during matches.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <span className="text-xs">2</span>
                                                    </div>
                                                    <div>
                                                        <span>Each team is allowed a maximum of 15 individuals in the dugout, including:</span>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 ml-2">
                                                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                                                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                                <span className="text-sm">11 playing members</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                                                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                                <span className="text-sm">4 substitute players</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                                                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                                <span className="text-sm">Head coach</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                                                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                                <span className="text-sm">Assistant coaches (max 2)</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                                                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                                <span className="text-sm">Team physiotherapist</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                                                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                                <span className="text-sm">Team manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <span className="text-xs">3</span>
                                                    </div>
                                                    <span>All individuals must wear appropriate team identification at all times.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <span className="text-xs">4</span>
                                                    </div>
                                                    <span>No unauthorized electronic devices are permitted in the dugout.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Behavior Guidelines */}
                            <div id="behavior" className="conduct-section scroll-mt-24">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <ThumbsUp className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold mt-0 font-playfair">Behavior Guidelines</h2>
                                </div>
                                <div className="pl-14">
                                    <div className="bg-gradient-to-r from-orange-50 to-emerald-50 rounded-xl p-6 my-6 border border-orange-100">
                                        <div className="mb-4 border-b border-orange-100 pb-4">
                                            <div className="flex items-center gap-3 mb-3">
                                                <User className="h-6 w-6 text-orange-600" />
                                                <h3 className="text-xl font-semibold text-orange-800 m-0">For Players</h3>
                                            </div>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>Remain seated in designated areas when not actively participating in the match.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>Refrain from excessive celebrations that may be deemed provocative or disrespectful.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>Do not engage in sledging or any form of verbal abuse toward opponents, umpires, or spectators.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>Accept umpires' decisions without visible dissent.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>Maintain appropriate attire as per team uniform guidelines.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="mb-4 border-b border-orange-100 pb-4">
                                            <div className="flex items-center gap-3 mb-3">
                                                <UserCog className="h-6 w-6 text-orange-600" />
                                                <h3 className="text-xl font-semibold text-orange-800 m-0">For Coaching Staff</h3>
                                            </div>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>Provide instruction and guidance in a professional manner.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>Refrain from excessive criticism of match officials.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>Ensure all communication with on-field players complies with match regulations.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>Model appropriate behavior for players to emulate.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <Users className="h-6 w-6 text-orange-600" />
                                                <h3 className="text-xl font-semibold text-orange-800 m-0">For Support Staff</h3>
                                            </div>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>Enter the field of play only when authorized by match officials.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>Provide medical or equipment support promptly when needed.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>Maintain a neutral demeanor when on the field of play.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Communication */}
                            <div id="communication" className="conduct-section scroll-mt-24">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <MessageCircle className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold mt-0 font-playfair">Communication</h2>
                                </div>
                                <div className="pl-14">
                                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
                                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                                            <Megaphone className="h-8 w-8 text-orange-600" />
                                            <h3 className="text-xl font-semibold text-gray-900 m-0">Communication Guidelines</h3>
                                        </div>

                                        <ol className="space-y-4 mt-4">
                                            <li className="grid grid-cols-[auto,1fr] gap-4 items-start">
                                                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-bold">1</div>
                                                <div>
                                                    <p className="text-gray-800 font-medium">ICC & RunBhumi Compliance</p>
                                                    <p className="text-gray-600 text-sm mt-1">
                                                        Communication with on-field players must comply with ICC and RunBhumi regulations.
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="grid grid-cols-[auto,1fr] gap-4 items-start">
                                                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-bold">2</div>
                                                <div>
                                                    <p className="text-gray-800 font-medium">Electronic Devices</p>
                                                    <p className="text-gray-600 text-sm mt-1">
                                                        Use of electronic devices for communication is strictly prohibited unless specifically authorized.
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="grid grid-cols-[auto,1fr] gap-4 items-start">
                                                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-bold">3</div>
                                                <div>
                                                    <p className="text-gray-800 font-medium">Appropriate Signaling</p>
                                                    <p className="text-gray-600 text-sm mt-1">
                                                        Hand signals and verbal communication must be appropriate and not designed to distract opponents.
                                                    </p>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
                                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                                            <Monitor className="h-8 w-8 text-orange-600" />
                                            <h3 className="text-xl font-semibold text-gray-900 m-0">Media Interactions</h3>
                                        </div>

                                        <ol className="space-y-4 mt-4">
                                            <li className="grid grid-cols-[auto,1fr] gap-4 items-start">
                                                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-bold">1</div>
                                                <div>
                                                    <p className="text-gray-800 font-medium">No Media in Dugout</p>
                                                    <p className="text-gray-600 text-sm mt-1">
                                                        No media personnel are permitted in the dugout during matches.
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="grid grid-cols-[auto,1fr] gap-4 items-start">
                                                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-bold">2</div>
                                                <div>
                                                    <p className="text-gray-800 font-medium">During Play</p>
                                                    <p className="text-gray-600 text-sm mt-1">
                                                        Players and staff should refrain from direct communication with media representatives during play.
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="grid grid-cols-[auto,1fr] gap-4 items-start">
                                                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-bold">3</div>
                                                <div>
                                                    <p className="text-gray-800 font-medium">Media Coordination</p>
                                                    <p className="text-gray-600 text-sm mt-1">
                                                        All media interactions should be coordinated through the team's media manager.
                                                    </p>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            {/* Violations and Penalties */}
                            <div id="violations" className="conduct-section scroll-mt-24">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <AlertTriangle className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold mt-0 font-playfair">Violations and Penalties</h2>
                                </div>
                                <div className="pl-14">
                                    <p className="text-gray-700">
                                        Violations of this Code of Conduct may result in the following penalties:
                                    </p>

                                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 my-6 border border-yellow-100">
                                        <div className="flex items-center mb-5">
                                            <h3 className="text-xl font-semibold text-amber-800 m-0">Penalty Scale</h3>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm">
                                                <div className="flex items-center">
                                                    <div className="bg-yellow-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                                                        <span className="text-amber-800 font-bold">1</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-gray-900">Verbal Warning</span>
                                                        <p className="text-sm text-gray-600 mt-1">Initial notification of inappropriate behavior</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm">
                                                <div className="flex items-center">
                                                    <div className="bg-yellow-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                                                        <span className="text-amber-800 font-bold">2</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-gray-900">Written Reprimand</span>
                                                        <p className="text-sm text-gray-600 mt-1">Formal documentation of the violation</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm">
                                                <div className="flex items-center">
                                                    <div className="bg-yellow-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                                                        <span className="text-amber-800 font-bold">3</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-gray-900">Fine</span>
                                                        <p className="text-sm text-gray-600 mt-1">Financial penalty as determined by the RunBhumi Disciplinary Committee</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm">
                                                <div className="flex items-center">
                                                    <div className="bg-yellow-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                                                        <span className="text-amber-800 font-bold">4</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-gray-900">Match Suspension</span>
                                                        <p className="text-sm text-gray-600 mt-1">Suspension from one or more matches</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm">
                                                <div className="flex items-center">
                                                    <div className="bg-yellow-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                                                        <span className="text-amber-800 font-bold">5</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-gray-900">Dugout Privilege Removal</span>
                                                        <p className="text-sm text-gray-600 mt-1">Loss of access to team dugout</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm">
                                                <div className="flex items-center">
                                                    <div className="bg-yellow-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                                                        <span className="text-amber-800 font-bold">6</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-gray-900">Season-long Ban</span>
                                                        <p className="text-sm text-gray-600 mt-1">Complete exclusion from tournament in severe cases</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <Clipboard className="h-5 w-5 text-orange-600" />
                                            Reporting Violations
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            Any violations of this Code of Conduct should be reported to the Match Referee or RunBhumi officials.
                                            Reports should include:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm">
                                                <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                                                    <Clock className="h-4 w-4 text-orange-600" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">Date, Time & Location</p>
                                                    <p className="text-sm text-gray-600 mt-1">When and where the incident occurred</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm">
                                                <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                                                    <User className="h-4 w-4 text-orange-600" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">Names of Individuals</p>
                                                    <p className="text-sm text-gray-600 mt-1">Who was involved in the incident</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm">
                                                <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                                                    <FileText className="h-4 w-4 text-orange-600" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">Detailed Description</p>
                                                    <p className="text-sm text-gray-600 mt-1">What happened during the incident</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm">
                                                <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                                                    <Users className="h-4 w-4 text-orange-600" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">Witness Information</p>
                                                    <p className="text-sm text-gray-600 mt-1">Names of any witnesses present</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Conclusion */}
                            <div className="conduct-section">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <BadgeCheck className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold mt-0 font-playfair">Conclusion</h2>
                                </div>
                                <div className="pl-14">
                                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 my-6">
                                        <p className="text-gray-700 mb-4">
                                            This Code of Conduct is designed to ensure that RunBhumi matches are conducted in a professional,
                                            respectful, and sportsmanlike manner. All team personnel are expected to familiarize themselves with
                                            these guidelines and adhere to them throughout the tournament.
                                        </p>
                                        <p className="text-gray-700">
                                            For any clarifications or questions regarding this Code of Conduct, please contact the RunBhumi
                                            Tournament Committee.
                                        </p>

                                        <div className="mt-6 bg-orange-50 p-4 rounded-lg border border-orange-100 flex items-start gap-3">
                                            <div className="mt-1">
                                                <PhoneCall className="h-5 w-5 text-orange-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-orange-800">Need assistance?</p>
                                                <p className="text-sm text-orange-700 mt-1">
                                                    Contact the RunBhumi Committee at <a href="tel:+919964391643" className="text-orange-600 font-medium hover:underline">+91 99643 91643</a> or email
                                                    <a href="mailto:conduct@runbhumi.com" className="text-orange-600 font-medium hover:underline"> conduct@runbhumi.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}