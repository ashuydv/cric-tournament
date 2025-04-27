'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Calendar, MapPin, Trophy, Star } from 'lucide-react'

export function MatchScheduleHero() {
    const upcomingMatches = [
        { date: "May 15", teams: "Mumbai vs Chennai", venue: "Wankhede Stadium", time: "7:30 PM" },
        { date: "May 18", teams: "Delhi vs Bangalore", venue: "Arun Jaitley Stadium", time: "3:30 PM" },
        { date: "May 20", teams: "Kolkata vs Punjab", venue: "Eden Gardens", time: "7:30 PM" }
    ];

    return (
        <section className="w-full py-44 pb-32 md:py-52 lg:py-64 bg-gray-100">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col space-y-8">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            RunBhumi <span className="text-orange-500">Exhibition Matches</span>
                        </h1>
                        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                            Watch our talent in action with special exhibition matches featuring selected RunBhumi players.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-orange-500 text-white py-3 px-6 font-bold text-lg">
                            Upcoming Matches
                        </div>
                        <div className="divide-y divide-gray-200">
                            {upcomingMatches.map((match, index) => (
                                <div key={index} className="p-4 sm:p-6 hover:bg-orange-50 transition-colors">
                                    <div className="flex flex-wrap justify-between items-center gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-orange-100 text-orange-700 font-medium px-3 py-2 rounded text-center min-w-[80px]">
                                                {match.date}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-lg">{match.teams}</p>
                                                <p className="text-gray-600">{match.venue}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <p className="font-medium text-gray-700">{match.time}</p>
                                            <Link
                                                href={`/matches/${index}`}
                                                className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white text-sm transition-colors"
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-50 py-3 px-6 text-center">
                            <Link
                                href="/matches"
                                className="text-orange-600 font-medium hover:text-orange-700"
                            >
                                View Full Schedule
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="/tickets"
                            className="px-6 py-3 rounded-lg font-medium bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 inline-block"
                        >
                            Get Free Tickets
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}