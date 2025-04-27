'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Calendar, MapPin, Trophy, Star } from 'lucide-react'

// Testimonial Hero
export function TestimonialHero() {
    const testimonials = [
        {
            quote: "RunBhumi changed my life. Their scouts discovered me in a small town tournament, and now I'm training with a national academy.",
            name: "Aditya Sharma",
            role: "U19 National Player",
            avatar: "/stadium1.webp"
        },
        {
            quote: "The professional coaching and exposure I received through RunBhumi was better than anything I could have accessed in my hometown.",
            name: "Priya Patel",
            role: "State Team Player",
            avatar: "/stadium1.webp"
        }
    ];

    return (
        <section className="w-full py-44 pb-32 md:py-52 lg:py-64 bg-gray-900">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                            Real Stories from <span className="text-orange-500">Real Players</span>
                        </h1>
                        <p className="text-gray-300 text-lg">
                            Hear from the athletes who found their path to professional cricket through RunBhumi's talent hunt programs.
                        </p>

                        <div className="space-y-8 mt-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-xl">
                                    <p className="italic text-gray-300 mb-4">"{testimonial.quote}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">{testimonial.name}</p>
                                            <p className="text-orange-500 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link
                                href="/success-stories"
                                className="px-6 py-3 rounded-lg font-medium bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300"
                            >
                                Read More Success Stories
                            </Link>
                        </div>
                    </div>

                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src="/success-story-hero.jpg"
                            alt="Cricket Success Story"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <p className="text-xl font-semibold">Vikram Singh</p>
                                <p className="text-orange-400">From village grounds to IPL contract</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}