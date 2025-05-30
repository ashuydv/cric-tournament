"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming you're using a UI component library

type ParallaxSplitHeroProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  backgroundSrc: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  rightContent?: React.ReactNode;
  showRightColumn?: boolean;
  overlayOpacity?: number;
  parallaxEnabled?: boolean;
  parallaxSpeed?: number;
};

const ParallaxSplitHero = ({
  title,
  description,
  backgroundSrc,
  primaryButtonText = "Join Now",
  primaryButtonLink = "/register",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/about",
  rightContent,
  showRightColumn = true,
  overlayOpacity = 0.4,
  parallaxEnabled = true,
  parallaxSpeed = 0.5,
}: ParallaxSplitHeroProps) => {
  // Parallax effect setup
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transform values for parallax effect
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${parallaxSpeed * 30}%`]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${parallaxSpeed * -15}%`]
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background image with parallax effect */}
      {parallaxEnabled ? (
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: backgroundY, scale: 1.1 }}
        >
          <Image
            src={backgroundSrc}
            alt="Background image"
            width={1920}
            height={1080}
            className="object-cover object-center sm:object-top bg-no-repeat h-full w-full"
            style={{ opacity: 1 - overlayOpacity }}
            priority
          />
          {/* Responsive gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 sm:bg-gradient-to-t sm:from-black/80 sm:via-black/30 sm:to-black/10 lg:bg-gradient-to-t lg:from-black via-black/20 lg:to-black/10" />
        </motion.div>
      ) : (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundSrc}
            alt="Background image"
            width={1920}
            height={1080}
            className="object-cover object-center sm:object-top bg-no-repeat h-full w-full"
            style={{ opacity: 1 - overlayOpacity }}
            priority
          />
          {/* Responsive gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 sm:bg-gradient-to-t sm:from-black/80 sm:via-black/30 sm:to-black/10 lg:bg-gradient-to-t lg:from-black via-black/20 lg:to-black/10" />
        </div>
      )}

      {/* Main hero content with parallax effect */}
      <motion.div
        className="relative z-10 w-full flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-[10rem]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={parallaxEnabled ? { y: contentY } : {}}
      >
        <div className="container mx-auto max-w-7xl">
          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content - Responsive column spans */}
            <motion.div
              className={`space-y-4 sm:space-y-6 md:space-y-8 max-w-4xl mx-auto lg:mx-0 text-center lg:text-left ${
                showRightColumn ? "xl:col-span-3" : "xl:col-span-5"
              }`}
              variants={itemVariants}
            >
              {/* Responsive title with better scaling */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight font-playfair">
                {title}
              </h1>

              {/* Responsive description with better readability */}
              <motion.div
                className="max-w-none sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] text-gray-50 text-sm xs:text-base sm:text-lg md:text-xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                {description}
              </motion.div>

              {/* Responsive button layout */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                {primaryButtonText && (
                  <Link href={primaryButtonLink} className="inline-block">
                    <Button
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 transition-all duration-300 text-sm sm:text-base shadow-lg flex items-center justify-center gap-2 rounded-xl italic uppercase w-full sm:w-auto min-w-[140px] md:min-w-[160px]"
                    >
                      {primaryButtonText}
                    </Button>
                  </Link>
                )}
                {secondaryButtonText && (
                  <Link href={secondaryButtonLink} className="inline-block">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 transition-all duration-300 text-sm sm:text-base shadow-lg flex items-center justify-center gap-2 rounded-xl italic uppercase w-full sm:w-auto min-w-[140px] md:min-w-[160px]"
                    >
                      {secondaryButtonText}
                    </Button>
                  </Link>
                )}
              </motion.div>
            </motion.div>

            {/* Right Column - Responsive visibility and sizing */}
            {showRightColumn && (
              <motion.div
                className="hidden md:block lg:block xl:col-span-2 w-full"
                variants={itemVariants}
              >
                <div className="w-full max-w-lg mx-auto lg:max-w-none">
                  {rightContent}
                </div>
              </motion.div>
            )}
          </div>

          {/* Mobile/Tablet Right Content - Shows below main content on smaller screens */}
          {showRightColumn && rightContent && (
            <motion.div
              className="block md:hidden mt-8 sm:mt-12 w-full max-w-md mx-auto"
              variants={itemVariants}
            >
              {rightContent}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Responsive scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-orange-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 sm:h-4 bg-orange-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSplitHero;
