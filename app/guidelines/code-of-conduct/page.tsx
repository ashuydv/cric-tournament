import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CodeOfConductPage() {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Code of Conduct in Team Dugouts
                                </h1>
                                <p className="max-w-[700px] text-gray-400 md:text-xl mx-auto">
                                    Guidelines for players, coaches, and team staff during RunBhumi matches
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="max-w-3xl mx-auto prose prose-orange lg:prose-lg">
                            <h2>Introduction</h2>
                            <p>
                                This Code of Conduct outlines the expected behavior and responsibilities of all individuals present in
                                team dugouts during RunBhumi cricket matches. Adherence to these guidelines ensures a professional
                                environment that upholds the spirit of cricket and promotes fair play.
                            </p>

                            <h2>General Principles</h2>
                            <ol>
                                <li>
                                    <strong>Respect for the Game:</strong> All individuals in the dugout must respect the traditions,
                                    rules, and spirit of cricket at all times.
                                </li>
                                <li>
                                    <strong>Sportsmanship:</strong> Demonstrate good sportsmanship toward opponents, match officials, and
                                    spectators.
                                </li>
                                <li>
                                    <strong>Professionalism:</strong> Maintain a professional demeanor regardless of match situations or
                                    outcomes.
                                </li>
                                <li>
                                    <strong>Integrity:</strong> Uphold the highest standards of integrity and fair play.
                                </li>
                            </ol>

                            <h2>Dugout Access and Occupancy</h2>
                            <ol>
                                <li>Only authorized team personnel are permitted in the dugout during matches.</li>
                                <li>
                                    Each team is allowed a maximum of 15 individuals in the dugout, including:
                                    <ul>
                                        <li>11 playing members</li>
                                        <li>4 substitute players</li>
                                        <li>Head coach</li>
                                        <li>Assistant coaches (maximum 2)</li>
                                        <li>Team physiotherapist</li>
                                        <li>Team manager</li>
                                    </ul>
                                </li>
                                <li>All individuals must wear appropriate team identification at all times.</li>
                                <li>No unauthorized electronic devices are permitted in the dugout.</li>
                            </ol>

                            <h2>Behavior Guidelines</h2>
                            <h3>For Players:</h3>
                            <ol>
                                <li>Remain seated in designated areas when not actively participating in the match.</li>
                                <li>Refrain from excessive celebrations that may be deemed provocative or disrespectful.</li>
                                <li>Do not engage in sledging or any form of verbal abuse toward opponents, umpires, or spectators.</li>
                                <li>Accept umpires' decisions without visible dissent.</li>
                                <li>Maintain appropriate attire as per team uniform guidelines.</li>
                            </ol>

                            <h3>For Coaching Staff:</h3>
                            <ol>
                                <li>Provide instruction and guidance in a professional manner.</li>
                                <li>Refrain from excessive criticism of match officials.</li>
                                <li>Ensure all communication with on-field players complies with match regulations.</li>
                                <li>Model appropriate behavior for players to emulate.</li>
                            </ol>

                            <h3>For Support Staff:</h3>
                            <ol>
                                <li>Enter the field of play only when authorized by match officials.</li>
                                <li>Provide medical or equipment support promptly when needed.</li>
                                <li>Maintain a neutral demeanor when on the field of play.</li>
                            </ol>

                            <h2>Communication</h2>
                            <ol>
                                <li>Communication with on-field players must comply with ICC and RunBhumi regulations.</li>
                                <li>
                                    Use of electronic devices for communication is strictly prohibited unless specifically authorized.
                                </li>
                                <li>
                                    Hand signals and verbal communication must be appropriate and not designed to distract opponents.
                                </li>
                            </ol>

                            <h2>Media Interactions</h2>
                            <ol>
                                <li>No media personnel are permitted in the dugout during matches.</li>
                                <li>
                                    Players and staff should refrain from direct communication with media representatives during play.
                                </li>
                                <li>All media interactions should be coordinated through the team's media manager.</li>
                            </ol>

                            <h2>Violations and Penalties</h2>
                            <p>Violations of this Code of Conduct may result in the following penalties:</p>
                            <ol>
                                <li>Verbal warning</li>
                                <li>Written reprimand</li>
                                <li>Fine (as determined by the RunBhumi Disciplinary Committee)</li>
                                <li>Suspension from one or more matches</li>
                                <li>Removal of dugout privileges</li>
                                <li>Season-long ban in severe cases</li>
                            </ol>

                            <h2>Reporting Violations</h2>
                            <p>
                                Any violations of this Code of Conduct should be reported to the Match Referee or RunBhumi officials.
                                Reports should include:
                            </p>
                            <ol>
                                <li>Date, time, and location of the incident</li>
                                <li>Names of individuals involved</li>
                                <li>Detailed description of the incident</li>
                                <li>Names of any witnesses</li>
                            </ol>

                            <h2>Conclusion</h2>
                            <p>
                                This Code of Conduct is designed to ensure that RunBhumi matches are conducted in a professional,
                                respectful, and sportsmanlike manner. All team personnel are expected to familiarize themselves with
                                these guidelines and adhere to them throughout the tournament.
                            </p>

                            <p>
                                For any clarifications or questions regarding this Code of Conduct, please contact the RunBhumi
                                Tournament Committee.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}
