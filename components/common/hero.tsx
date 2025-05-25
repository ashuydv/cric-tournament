"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

type HeroButton = {
  text: string;
  href: string;
  variant: "primary" | "secondary" | "outline";
  icon?: React.ReactNode;
};

type HeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundType: "color" | "image" | "gradient" | "video";
  backgroundSrc?: string;
  backgroundOverlay?: boolean;
  backgroundOverlayOpacity?: number;
  buttons?: HeroButton[];
  align?: "left" | "center" | "right";
  height?: "small" | "medium" | "large" | "full";
  textColor?: string;
  highlightColor?: string;
  logoVisible?: boolean;
  animated?: boolean;
  // Parallax props
  parallaxEnabled?: boolean;
  parallaxSpeed?: number;
};

const Hero = ({
  title,
  subtitle,
  description,
  backgroundType = "color",
  backgroundSrc = "#000000",
  backgroundOverlay = true,
  backgroundOverlayOpacity = 0.5,
  buttons = [],
  align = "center",
  height = "large",
  textColor = "text-white",
  highlightColor = "text-orange-500",
  logoVisible = false,
  animated = true,
  // Parallax props
  parallaxEnabled = true,
  parallaxSpeed = 0.5,
}: HeroProps) => {
  // Set height class based on height prop
  const heightClasses = {
    small: "py-44 pb-32 md:py-52 lg:py-64",
    medium: "py-44 pb-32 md:py-52 lg:py-64",
    large: "py-44 pb-32 md:py-52 lg:py-64",
    full: "min-h-screen py-44 pb-32 md:py-52 lg:py-64 flex items-center",
  };

  // Set alignment classes
  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  // Set button variant classes
  const buttonVariants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    secondary: "bg-blue-600 hover:bg-blue-700 text-white",
    outline:
      "bg-transparent border-2 border-orange-500 hover:bg-orange-500/10 text-orange-500",
  };

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

  // Animation variants for motion components
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

  // Background style based on type
  const getBackgroundStyle = () => {
    if (backgroundType === "image") {
      return {
        position: "relative",
        overflow: "hidden",
      } as React.CSSProperties;
    }

    if (backgroundType === "gradient") {
      return {
        background:
          backgroundSrc || "linear-gradient(to right, #ff4e00, #ec9f05)",
      } as React.CSSProperties;
    }

    if (backgroundType === "color") {
      return {
        backgroundColor: backgroundSrc,
      } as React.CSSProperties;
    }

    return {};
  };

  // Determine what component to use based on animation setting
  const ContentWrapper = animated ? motion.div : "div";

  return (
    <section
      ref={sectionRef}
      className={`w-full relative ${heightClasses[height]} overflow-hidden`}
      style={getBackgroundStyle()}
    >
      {/* Background Image/Video Layer */}
      {backgroundType === "image" &&
        backgroundSrc &&
        (parallaxEnabled ? (
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{ y: backgroundY, scale: 1.1 }}
          >
            <Image
              src={backgroundSrc}
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={backgroundSrc}
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}

      {backgroundType === "video" &&
        backgroundSrc &&
        (parallaxEnabled ? (
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{ y: backgroundY, scale: 1.1 }}
          >
            <video autoPlay muted loop className="object-cover w-full h-full">
              <source src={backgroundSrc} type="video/mp4" />
            </video>
          </motion.div>
        ) : (
          <div className="absolute inset-0 w-full h-full">
            <video autoPlay muted loop className="object-cover w-full h-full">
              <source src={backgroundSrc} type="video/mp4" />
            </video>
          </div>
        ))}

      {/* Overlay Layer */}
      {backgroundOverlay &&
        (backgroundType === "image" || backgroundType === "video") && (
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: backgroundOverlayOpacity }}
          />
        )}

      {/* Content Layer */}
      <div className="container px-4 md:px-6 mx-auto relative z-10 h-full flex items-center">
        {animated ? (
          <motion.div
            className={`w-full flex flex-col ${alignClasses[align]} space-y-8`}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={parallaxEnabled ? { y: contentY } : {}}
          >
            {/* Logo */}
            {logoVisible && (
              <motion.div className="mb-4" variants={itemVariants}>
                <div className="w-20 h-20 md:w-24 md:h-24 relative mx-auto">
                  <Image
                    src="/rb_logo.png"
                    alt="RunBhumi Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            )}

            {/* Title */}
            <motion.div className="space-y-3" variants={itemVariants}>
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} leading-tight font-playfair`}
              >
                {title}
              </h1>

              {/* Subtitle */}
              {subtitle && (
                <p
                  className={`text-xl sm:text-2xl md:text-3xl font-semibold ${highlightColor}`}
                >
                  {subtitle}
                </p>
              )}

              {/* Description */}
              {description && (
                <p
                  className={`max-w-[700px] text-gray-400 md:text-lg ${
                    align === "center" ? "mx-auto" : ""
                  } mt-4`}
                >
                  {description}
                </p>
              )}
            </motion.div>

            {/* Buttons */}
            {buttons && buttons.length > 0 && (
              <motion.div
                className={`flex flex-wrap gap-4 mt-8 ${
                  align === "center"
                    ? "justify-center"
                    : align === "right"
                    ? "justify-end"
                    : "justify-start"
                }`}
                variants={itemVariants}
              >
                {buttons.map((button, index) => (
                  <Link
                    href={button.href}
                    key={index}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      buttonVariants[button.variant]
                    }`}
                  >
                    {button.text}
                    {button.icon && button.icon}
                  </Link>
                ))}
              </motion.div>
            )}
          </motion.div>
        ) : (
          <div
            className={`w-full flex flex-col ${alignClasses[align]} space-y-8`}
            style={
              parallaxEnabled ? { transform: `translateY(${contentY}px)` } : {}
            }
          >
            {/* Logo */}
            {logoVisible && (
              <div className="mb-4">
                <div className="w-20 h-20 md:w-24 md:h-24 relative mx-auto">
                  <Image
                    src="/rb_logo.png"
                    alt="RunBhumi Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            {/* Title */}
            <div className="space-y-3">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} leading-tight font-playfair`}
              >
                {title}
              </h1>

              {/* Subtitle */}
              {subtitle && (
                <p
                  className={`text-xl sm:text-2xl md:text-3xl font-semibold ${highlightColor}`}
                >
                  {subtitle}
                </p>
              )}

              {/* Description */}
              {description && (
                <p
                  className={`max-w-[700px] text-gray-100 md:text-lg ${
                    align === "center" ? "mx-auto" : ""
                  } mt-4`}
                >
                  {description}
                </p>
              )}
            </div>

            {/* Buttons */}
            {buttons && buttons.length > 0 && (
              <div
                className={`flex flex-wrap gap-4 mt-8 ${
                  align === "center"
                    ? "justify-center"
                    : align === "right"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {buttons.map((button, index) => (
                  <Link
                    href={button.href}
                    key={index}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      buttonVariants[button.variant]
                    }`}
                  >
                    {button.text}
                    {button.icon && button.icon}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
