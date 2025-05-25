"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

type LeftHeroButton = {
  text: string;
  href: string;
  variant: "primary" | "secondary" | "outline";
  icon?: React.ReactNode;
};

// Define specific ratio types to use as keys
type SplitRatio = "1/3" | "1/2" | "2/3";

type LeftHeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundType: "color" | "image" | "gradient" | "video";
  backgroundSrc?: string;
  backgroundOverlay?: boolean;
  backgroundOverlayOpacity?: number;
  buttons?: LeftHeroButton[];
  align?: "left" | "center" | "right";
  height?: "small" | "medium" | "large" | "full";
  textColor?: string;
  highlightColor?: string;
  logoVisible?: boolean;
  animated?: boolean;
  // New props for layout functionality
  layout?: "default" | "left-content" | "right-content" | "split";
  secondaryContent?: React.ReactNode;
  secondaryContentType?: "image" | "video" | "component";
  secondaryContentSrc?: string;
  splitRatio?: SplitRatio; // Now using the specific type
  secondaryAnimation?: boolean; // Whether to animate the secondary content
  // Parallax props
  parallaxEnabled?: boolean;
  parallaxSpeed?: number;
};

const LeftHero = ({
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
  // New props with defaults
  layout = "default",
  secondaryContent = null,
  secondaryContentType = "image",
  secondaryContentSrc = "",
  splitRatio = "1/2",
  secondaryAnimation = true,
  // Parallax props
  parallaxEnabled = true,
  parallaxSpeed = 0.5,
}: LeftHeroProps) => {
  // Set height class based on height prop
  const heightClasses: Record<string, string> = {
    small: "py-44 pb-32 md:py-52 lg:py-64",
    medium: "py-44 pb-32 md:py-52 lg:py-64",
    large: "py-44 pb-32 md:py-52 lg:py-64",
    full: "min-h-screen py-44 pb-32 md:py-52 lg:py-64 flex items-center",
  };

  // Set alignment classes
  const alignClasses: Record<string, string> = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  // Set button variant classes
  const buttonVariants: Record<string, string> = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    secondary: "bg-blue-600 hover:bg-blue-700 text-white",
    outline:
      "bg-transparent border-2 border-orange-500 hover:bg-orange-500/10 text-orange-500",
  };

  // Set split ratio classes with proper typing
  const splitRatioClasses: Record<SplitRatio, string> = {
    "1/3": "md:w-1/3",
    "1/2": "md:w-1/2",
    "2/3": "md:w-2/3",
  };

  // Get complementary ratio (for the other side) with proper typing
  const complementaryRatio: Record<SplitRatio, SplitRatio> = {
    "1/3": "2/3",
    "1/2": "1/2",
    "2/3": "1/3",
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

  const secondaryVariants = {
    hidden: { opacity: 0, x: layout === "left-content" ? 20 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.4 },
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

  // Render primary content (text, buttons, etc.)
  const renderPrimaryContent = () => {
    // Safely access the split ratio classes with type checking
    const primaryWidthClass =
      layout !== "default"
        ? layout === "left-content"
          ? splitRatioClasses[splitRatio]
          : splitRatioClasses[complementaryRatio[splitRatio]]
        : "w-full";

    const contentClassName = `${primaryWidthClass} px-6 flex flex-col ${alignClasses[align]} space-y-8`;

    if (animated) {
      return (
        <motion.div
          className={contentClassName}
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
                className={`max-w-[700px] text-gray-100 md:text-lg ${
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
      );
    }

    // Non-animated version
    return (
      <div
        className={contentClassName}
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
              className={`max-w-[700px] text-gray-400 md:text-lg ${
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
    );
  };

  // Render secondary content (image, video, or component)
  const renderSecondaryContent = () => {
    if (!secondaryContentSrc && !secondaryContent) return null;

    const secondaryContentElement =
      secondaryContent ||
      (secondaryContentType === "image" ? (
        <div className="relative w-full h-full min-h-[300px]">
          <Image
            src={secondaryContentSrc}
            alt="Secondary content"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ) : secondaryContentType === "video" ? (
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full h-full min-h-[300px] rounded-lg"
        >
          <source src={secondaryContentSrc} type="video/mp4" />
        </video>
      ) : null);

    // Safely access the split ratio classes with type checking
    const secondaryWidthClass =
      splitRatioClasses[
        layout === "right-content" ? splitRatio : complementaryRatio[splitRatio]
      ];

    const className = `${secondaryWidthClass} p-6 flex items-center justify-center mt-8 md:mt-0`;

    if (secondaryAnimation && animated) {
      return (
        <motion.div
          className={className}
          initial="hidden"
          animate="visible"
          variants={secondaryVariants}
          style={parallaxEnabled ? { y: contentY } : {}}
        >
          {secondaryContentElement}
        </motion.div>
      );
    }

    return (
      <div
        className={className}
        style={
          parallaxEnabled ? { transform: `translateY(${contentY}px)` } : {}
        }
      >
        {secondaryContentElement}
      </div>
    );
  };

  // Render content based on layout
  const renderLayoutContent = () => {
    if (layout === "default") {
      return renderPrimaryContent();
    }

    return (
      <div className="flex flex-col md:flex-row w-full items-center gap-6">
        {layout === "left-content" ? (
          <>
            {renderPrimaryContent()}
            {renderSecondaryContent()}
          </>
        ) : (
          <>
            {renderSecondaryContent()}
            {renderPrimaryContent()}
          </>
        )}
      </div>
    );
  };

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
              alt="LeftHero background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={backgroundSrc}
              alt="LeftHero background"
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
        {renderLayoutContent()}
      </div>
    </section>
  );
};

export default LeftHero;
