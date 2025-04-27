'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Calendar, MapPin, Trophy, Star } from 'lucide-react'

// Hero with Slideshow
export function SlideshowHero() {
    const slides = [
        {
            image: "/stadium1.webp",
            title: "Discover Your Potential",
            subtitle: "Join RunBhumi Trials"
        },
        {
            image: "/stadium1.webp",
            title: "Learn from the Best",
            subtitle: "Expert Coaching Sessions"
        },
        {
            image: "/stadium1.webp",
            title: "Showcase Your Talent",
            subtitle: "National Selection Events"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="w-full py-44 pb-32 md:py-52 lg:py-64 relative overflow-hidden">
            {/* Slideshow Background */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            ))}

            {/* Content */}
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">
                    <div className="space-y-4 mb-12">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-1000 transform ${currentSlide === index
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8 absolute'
                                    }`}
                            >
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-xl md:text-2xl text-orange-500 font-semibold mt-2">
                                    {slide.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/register"
                            className="px-8 py-4 rounded-lg font-medium bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 text-lg"
                        >
                            Join RunBhumi Today
                        </Link>
                    </div>

                    {/* Slideshow Indicators */}
                    <div className="flex gap-2 mt-12">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index
                                    ? 'bg-orange-500 w-8'
                                    : 'bg-white/50 hover:bg-white/80'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}