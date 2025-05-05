"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Mail,
  Menu,
  Phone,
  X,
  Shield,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import RegisterButton from "./register-button";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Use IntersectionObserver for more efficient scroll detection
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px 0px 0px",
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
    };

    const handleIntersect = (entries: any) => {
      entries.forEach((entry: any) => {
        // Determine if we've crossed the threshold for "scrolled" state
        const isScrolled = entry.intersectionRatio < 0.8;
        setScrolled(isScrolled);
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe a sentinel element at the top of the page
    const sentinel = document.createElement("div");
    sentinel.style.position = "absolute";
    sentinel.style.top = "0";
    sentinel.style.height = "100px";
    sentinel.style.width = "100%";
    sentinel.style.pointerEvents = "none";
    document.body.prepend(sentinel);

    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
        sentinel.remove();
      }
    };
  }, []);

  // Handle mobile menu efficiently with useCallback
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
    // When opening menu, trap focus inside
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }
  }, [mobileMenuOpen]);

  // Handle swipe to close for mobile menu
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: any) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: any) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    // Swipe left to close
    if (touchStartX.current - touchEndX.current > 75) {
      setMobileMenuOpen(false);
      document.body.style.overflow = "";
    }
  };

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        toggleMobileMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, toggleMobileMenu]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Navigation links with paths for active state detection
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/merchandise", label: "Merchandise" },
    { href: "/trials", label: "Trials" },
    { href: "/partner-with-us", label: "Partner With Us" },
    { href: "/sponsorships", label: "Sponsorships" },
    { href: "/careers", label: "Careers" },
  ];

  // Policy links
  const policyLinks = [
    { href: "/refund-policy", label: "Refund Policy", icon: FileText },
    { href: "/privacy-policy", label: "Privacy Policy", icon: Shield },
    { href: "/disclaimer", label: "Disclaimer", icon: AlertTriangle },
  ];

  // Function to check if link is active - FIXED VERSION
  const isActive = (path: any) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-5 focus:left-1/2 focus:-translate-x-1/2 bg-orange-600 text-white px-4 py-2 z-50 rounded-md focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Header with semantic HTML structure */}
      <header className="fixed top-0 z-40 w-full transition-all duration-300">
        {/* Policy links bar with contact info */}
        <div className="bg-black/90 backdrop-blur-xl text-xs">
          <div className="container mx-auto flex justify-between items-center h-8 px-4">
            {/* Contact info in top bar */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 group">
                <Phone
                  size={14}
                  className="text-orange-400 group-hover:animate-pulse"
                />
                <Link
                  href="tel:+919964391643"
                  className="text-gray-300 transition-all no-underline duration-300 group-hover:text-orange-300 group-hover:underline rounded px-1"
                  aria-label="Call us at 9964391643"
                >
                  9964391643
                </Link>
              </div>
              <div className="flex items-center space-x-1 group">
                <Mail
                  size={14}
                  className="text-orange-400 group-hover:animate-pulse"
                />
                <Link
                  href="mailto:hello@therunbhumi.com"
                  className="text-gray-300 transition-all no-underline duration-300 group-hover:text-orange-300 group-hover:underline rounded px-1"
                  aria-label="Email us at hello@therunbhumi.com"
                >
                  hello@therunbhumi.com
                </Link>
              </div>
            </div>

            {/* Policy links */}
            <div className="hidden md:flex space-x-4">
              {policyLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-300 hover:text-orange-300 transition-colors duration-300 flex items-center space-x-1"
                    aria-label={link.label}
                  >
                    <Icon size={12} className="text-orange-400" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main navigation area with gradient background */}
        <div
          className="container mx-auto rounded-b-xl py-2 px-6 transition-all duration-500"
          style={{
            background: scrolled
              ? `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(51, 28, 0, 0.95), rgba(0, 0, 0, 0.9))`
              : `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(51, 28, 0, 0.75), rgba(0, 0, 0, 0.7))`,
            backdropFilter: `blur(${scrolled ? "10px" : "5px"})`,
            boxShadow: scrolled
              ? "0 4px 15px -3px rgba(249, 115, 22, 0.15)"
              : "none",
          }}
        >
          <div className="mx-auto flex items-center justify-between h-16 md:h-20">
            {/* Logo with subtle hover effects */}
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center group rounded-lg relative"
                aria-label="RunBhumi Home"
              >
                <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                <div className="relative h-14 w-14 md:h-16 md:w-16 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/rb_logo.png"
                    alt="RunBhumi Logo"
                    fill
                    className="object-contain drop-shadow-md"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation with gradient hover effects */}
              <nav
                className="hidden md:flex items-center justify-center px-4 transition-all duration-500 space-x-2 lg:space-x-4"
                role="navigation"
                aria-label="Main Navigation"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm lg:text-base font-medium uppercase text-center transition-all duration-300 relative py-2 px-2 lg:px-3 rounded-md 
                      ${
                        isActive(link.href)
                          ? "text-orange-400 bg-gradient-to-r from-orange-950/30 via-orange-900/20 to-orange-950/30 backdrop-blur-sm"
                          : "text-gray-200 hover:bg-gradient-to-r hover:from-orange-950/10 hover:via-orange-900/5 hover:to-orange-950/10 hover:backdrop-blur-sm hover:text-orange-300"
                      }
                      group overflow-hidden`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-600/80 via-orange-500 to-orange-600/80 transform origin-left transition-transform duration-500 ease-out 
                        ${
                          isActive(link.href)
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Register Button - Desktop Only */}
            <div className="hidden md:block">
              <RegisterButton />
            </div>

            {/* Mobile Menu Button - simplified */}
            <button
              className="md:hidden p-2 rounded-md text-white bg-orange-900/20 hover:bg-orange-800/30 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-orange-300" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 text-orange-300" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/95 via-orange-950/30 to-gray-900/95 backdrop-blur-md shadow-lg transform transition-all duration-500 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="container mx-auto px-4 py-4">
          {/* Close button inside mobile menu */}
          <div className="flex justify-between items-center mb-6 mt-4">
            <div className="relative h-12 w-12 flex-shrink-0">
              <Image
                src="/rb_logo.png"
                alt="RunBhumi Logo"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
            <button
              className="text-white p-2 bg-gradient-to-r from-orange-950/30 to-orange-900/20 backdrop-blur-sm rounded-full hover:from-orange-900/30 hover:to-orange-800/20 transition-colors duration-300"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-orange-300" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation links for mobile */}
          <nav
            className="flex flex-col uppercase space-y-3 mt-6"
            role="navigation"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium py-3 px-4 uppercase rounded-lg transition-all duration-300 relative group overflow-hidden
                  ${
                    isActive(link.href)
                      ? "text-orange-400 bg-gradient-to-r from-orange-950/40 via-orange-900/30 to-orange-950/40 backdrop-blur-sm"
                      : "text-white hover:text-orange-300 hover:bg-gradient-to-r hover:from-orange-950/20 hover:via-orange-900/10 hover:to-orange-950/20 hover:backdrop-blur-sm"
                  }`}
                onClick={toggleMobileMenu}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600/80 via-orange-500 to-orange-600/80 transition-all duration-500 ease-out
                    ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}
          </nav>

          {/* Register button for mobile menu */}
          <div className="mt-6">
            <Link
              href="/register"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 block text-center uppercase"
              onClick={toggleMobileMenu}
            >
              Register for Trials
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden under the header */}
      {/* <div className="h-24 md:h-28" aria-hidden="true"></div> */}
    </>
  );
}
