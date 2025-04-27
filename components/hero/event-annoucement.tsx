'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Calendar, MapPin, Trophy, Star } from 'lucide-react'
import ShuffleGrid from './shuffle-grid'

// Event Announcement Hero
export function EventHero() {
    return (
        <section className="w-full py-44 pb-32 md:py-52 lg:py-64 bg-gradient-to-r from-orange-600 to-orange-800">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1.5 bg-white text-orange-600 rounded-full text-sm font-bold mb-2">
                            Upcoming Event
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                            National Cricket Trials 2025
                        </h1>
                        <p className="text-orange-100 text-lg">
                            Don't miss your chance to showcase your talent in front of national selectors and professional coaches.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div className="flex items-center gap-3 text-white">
                                <Calendar className="h-6 w-6 text-orange-200" />
                                <div>
                                    <p className="font-semibold">June 12-15, 2025</p>
                                    <p className="text-orange-200 text-sm">9:00 AM onwards</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <MapPin className="h-6 w-6 text-orange-200" />
                                <div>
                                    <p className="font-semibold">Wankhede Stadium</p>
                                    <p className="text-orange-200 text-sm">Mumbai, Maharashtra</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-6">
                            <Link
                                href="/events/register"
                                className="px-6 py-3 rounded-lg font-medium bg-white hover:bg-gray-100 text-orange-600 transition-all duration-300"
                            >
                                Register for Trials
                            </Link>
                            <Link
                                href="/events/details"
                                className="px-6 py-3 rounded-lg font-medium bg-transparent border-2 border-white hover:bg-white/10 text-white transition-all duration-300"
                            >
                                Event Details
                            </Link>
                        </div>
                    </div>

                    <ShuffleGrid />
                </div>
            </div>
        </section>
    )
}