'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Calendar, MapPin, Trophy, Star } from 'lucide-react'

// Statistics Hero
export function StatsHero() {
    const stats = [
        { icon: <Trophy className="h-8 w-8 mb-4 text-orange-500" />, value: "10,000+", label: "Players Scouted" },
        { icon: <MapPin className="h-8 w-8 mb-4 text-orange-500" />, value: "120+", label: "Cities Covered" },
        { icon: <Star className="h-8 w-8 mb-4 text-orange-500" />, value: "50+", label: "Pro Placements" }
    ];

    return (
        <section className="w-full py-44 pb-32 md:py-52 lg:py-64 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center space-y-12 text-center">
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            India's Most Successful<br /><span className="text-orange-500">Cricket Talent Program</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Since 2020, RunBhumi has been discovering and nurturing cricket talent from across India.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all">
                                {stat.icon}
                                <h3 className="text-4xl font-bold text-gray-900">{stat.value}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/impact"
                            className="px-6 py-3 rounded-lg font-medium bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300"
                        >
                            Our Impact Story
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}