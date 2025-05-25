'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Calendar, MapPin, Trophy, Star } from 'lucide-react'

// Hero with Video Background
export function VideoHero() {
    return (
        <section className="w-full py-44 pb-32 md:py-52 lg:py-64 relative overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    className="object-cover w-full h-full"
                >
                    <source src="/cricket-highlights.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
            </div>

            {/* Content */}
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-start max-w-2xl text-left">
                    <div className="space-y-3">
                        <div className="inline-block px-4 py-1.5 bg-orange-500 text-white rounded-full text-sm font-medium mb-2">
                            Applications Open Now
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Your Cricket Journey <br />Starts Here
                        </h1>
                        <p className="text-gray-300 md:text-lg mt-4">
                            Join India's most comprehensive cricket talent hunt program and showcase your skills to top selectors and cricket academies worldwide.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link
                            href="/register"
                            className="px-6 py-3 rounded-full font-medium bg-white hover:bg-gray-100 text-orange-600 transition-all duration-300"
                        >
                            Apply for Trials
                        </Link>
                        <Link
                            href="/testimonials"
                            className="px-6 py-3 rounded-full font-medium bg-transparent border-2 border-white hover:bg-white/10 text-white transition-all duration-300"
                        >
                            Success Stories
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}