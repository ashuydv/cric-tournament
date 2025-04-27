'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button' // Assuming you're using a UI component library

type ParallaxSplitHeroProps = {
    title: React.ReactNode
    description: React.ReactNode
    backgroundSrc: string
    primaryButtonText?: string
    primaryButtonLink?: string
    secondaryButtonText?: string
    secondaryButtonLink?: string
    rightContent?: React.ReactNode
    showRightColumn?: boolean
    overlayOpacity?: number
    parallaxEnabled?: boolean
    parallaxSpeed?: number
}

const ParallaxSplitHero = ({
    title,
    description,
    backgroundSrc,
    primaryButtonText = 'Join Now',
    primaryButtonLink = '/register',
    secondaryButtonText = 'Learn More',
    secondaryButtonLink = '/about',
    rightContent,
    showRightColumn = true,
    overlayOpacity = 0.4,
    parallaxEnabled = true,
    parallaxSpeed = 0.5
}: ParallaxSplitHeroProps) => {
    // Parallax effect setup
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    })

    // Transform values for parallax effect
    const backgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', `${parallaxSpeed * 30}%`]
    )

    const contentY = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', `${parallaxSpeed * -15}%`]
    )

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center"
        >
            {/* Background image with parallax effect */}
            {parallaxEnabled ? (
                <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY, scale: 1.1 }}>
                    <Image
                        src={backgroundSrc}
                        alt="Background image"
                        width={1920}
                        height={1080}
                        className="object-cover object-top bg-no-repeat h-full w-full"
                        style={{ opacity: 1 - overlayOpacity }}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
                </motion.div>
            ) : (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundSrc}
                        alt="Background image"
                        width={1920}
                        height={1080}
                        className="object-cover object-top bg-no-repeat h-full w-full"
                        style={{ opacity: 1 - overlayOpacity }}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
                </div>
            )}

            {/* Main hero content with parallax effect */}
            <motion.div
                className="relative z-10 w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 lg:pt-[10rem]"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={parallaxEnabled ? { y: contentY } : {}}
            >
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Left Content */}
                        <motion.div
                            className="space-y-6 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left"
                            variants={itemVariants}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-playfair">
                                {title}
                            </h1>
                            <motion.p
                                className="max-w-[600px] text-gray-50 text-base sm:text-lg mx-auto lg:mx-0"
                                variants={itemVariants}
                            >
                                {description}
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                variants={itemVariants}
                            >
                                {primaryButtonText && (
                                    <Link href={primaryButtonLink} className="inline-block">
                                        <Button size="lg" className=" bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-6 transition-all duration-300 text-base shadow-lg flex items-center gap-2 rounded-xl italic uppercase">
                                            {primaryButtonText}
                                        </Button>
                                    </Link>
                                )}
                                {secondaryButtonText && (
                                    <Link href={secondaryButtonLink} className="inline-block">
                                        <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 font-medium px-8 py-6 transition-all duration-300 text-base shadow-lg flex items-center gap-2 rounded-xl italic uppercase w-full">
                                            {secondaryButtonText}
                                        </Button>
                                    </Link>
                                )}
                            </motion.div>
                        </motion.div>

                        {/* Right Column */}
                        {showRightColumn && (
                            <motion.div
                                className="hidden lg:block"
                                variants={itemVariants}
                            >
                                {rightContent}
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default ParallaxSplitHero