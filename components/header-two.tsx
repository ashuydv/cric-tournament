// components/header.tsx
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
  RotateCcw,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback, useRef } from "react";
import RegisterButton from "./register-button";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Use IntersectionObserver for more efficient scroll detection
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px 0px 0px",
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Calculate scroll progress for smoother transitions (0 to 1)
        const progress = 1 - Math.min(1, Math.max(0, entry.intersectionRatio));
        setScrollProgress(progress);

        // Determine if we've crossed the threshold for "scrolled" state
        const isScrolled = progress > 0.2;
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest("[data-menu-toggle]")
      ) {
        toggleMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen, toggleMobileMenu]);

  // Handle swipe to close for mobile menu
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    // Swipe left to close
    if (touchStartX.current - touchEndX.current > 75) {
      setMobileMenuOpen(false);
      document.body.style.overflow = "";
    }
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        toggleMobileMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen, toggleMobileMenu]);

  // Navigation links with paths for active state detection
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/merchandise", label: "Merchandise" },
    { href: "/trials", label: "Trials" },
    // Additional links can be uncommented when needed
    // { href: "/tournaments", label: "Tournaments" },
    // { href: "/teams", label: "Our Team" },
  ];

  // Policy links
  const policyLinks = [
    { href: "/refund-policy", label: "Refund Policy", icon: FileText },
    { href: "/privacy-policy", label: "Privacy Policy", icon: Shield },
    { href: "/disclaimer", label: "Disclaimer", icon: Shield },
  ];

  // Function to check if link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  // Dynamic opacity based on scroll progress
  const bgOpacity = Math.min(0.9, 0.2 + scrollProgress * 0.7);
  const backdropBlur = 4 + scrollProgress * 8;

  return (
    <>
      {/* Fixed glassmorphism header with reduced height and smoother transitions */}
      <header
        ref={headerRef}
        className="fixed top-0 z-40 w-full transition-all duration-700"
      >
        {/* Policy links bar */}
        <div className="bg-black/90 backdrop-blur-xl text-xs">
          <div className="container mx-auto flex justify-end items-center h-8 px-6">
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
          className="container mx-auto rounded-b-xl py-2 px-6 transition-all duration-700"
          style={{
            background: `linear-gradient(to right, rgba(0, 0, 0, ${bgOpacity}), rgba(51, 28, 0, ${
              bgOpacity + 0.05
            }), rgba(0, 0, 0, ${bgOpacity}))`,
            backdropFilter: `blur(${backdropBlur}px)`,
            // boxShadow: scrolled ? '0 4px 15px -3px rgba(249, 115, 22, 0.15)' : 'none'
          }}
        >
          <div className=" mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Logo with reduced dimensions and subtle gradient glow */}
              <Link
                href="/"
                className="flex items-center group rounded-lg relative"
                aria-label="RunBhumi Home"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                <div className="relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
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
                className="hidden md:flex items-center justify-center px-4 transition-all duration-500 space-x-4"
                role="navigation"
                aria-label="Main Navigation"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-medium uppercase text-center transition-all duration-300 relative py-2 px-3 rounded-md
                                        ${
                                          isActive(link.href)
                                            ? "text-orange-400 bg-gradient-to-r from-orange-950/30 via-orange-900/20 to-orange-950/30 backdrop-blur-sm"
                                            : "hover:bg-gradient-to-r hover:from-orange-950/10 hover:via-orange-900/5 hover:to-orange-950/10 hover:backdrop-blur-sm hover:text-orange-300"
                                        }
                                        group overflow-hidden`}
                    style={{
                      color: isActive(link.href)
                        ? "#fb923c" // text-orange-400
                        : `rgba(243, 244, 246, ${1 - scrollProgress * 0.2})`,
                    }}
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
            <div className="hidden md:flex md:items-center gap-4">
              <div className="flex items-center space-x-1 group">
                <Phone
                  size={14}
                  className="text-orange-400 group-hover:animate-pulse"
                />
                <Link
                  href="tel:+919964391643"
                  className="transition-all no-underline duration-300 group-hover:text-orange-300 group-hover:underline rounded px-1"
                  aria-label="Call us at 9964391643"
                  style={{
                    color: `rgba(255, 255, 255, ${1 - scrollProgress * 0.3})`,
                  }}
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
                  className="transition-all no-underline duration-300 group-hover:text-orange-300 group-hover:underline rounded px-1"
                  aria-label="Email us at hello@therunbhumi.com"
                  style={{
                    color: `rgba(255, 255, 255, ${1 - scrollProgress * 0.3})`,
                  }}
                >
                  hello@therunbhumi.com
                </Link>
              </div>
              <RegisterButton />
            </div>

            {/* Mobile Menu Button with gradient hover effect */}
            <button
              className="md:hidden p-2 rounded-full text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-950/20 hover:to-orange-900/30"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${
                  0.05 + scrollProgress * 0.05
                })`,
              }}
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              data-menu-toggle
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

      {/* Mobile Menu with gradient background and swipe to close */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/95 via-orange-950/30 to-gray-900/95 backdrop-blur-md shadow-lg transform transition-all duration-500 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileMenuOpen}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="container mx-auto px-4 py-4">
          {/* Close button inside mobile menu with improved accessibility */}
          <div className="flex justify-between items-center mb-6 mt-4">
            <div className="relative h-12 w-12 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-full blur-xl opacity-50"></div>
              <Image
                src="/rb_logo.png"
                alt="RunBhumi Logo"
                fill
                className="object-contain"
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

          {/* Swipe instruction for mobile users */}
          <div
            className="text-center text-sm text-orange-300/70 mb-4"
            aria-hidden="true"
          >
            <span>← Swipe left to close</span>
          </div>

          {/* Navigation links with gradient hover effects */}
          <nav
            className="flex flex-col uppercase space-y-3 mt-6"
            role="navigation"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link, index) => (
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
                aria-current={isActive(link.href) ? "page" : undefined}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600/80 via-orange-500 to-orange-600/80 transition-all duration-500 ease-out
                                        ${
                                          isActive(link.href)
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                        }`}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          {/* Policy links for mobile */}
          <div className="mt-6 pt-4 border-t border-orange-500/20">
            <h3 className="text-orange-400 text-sm font-semibold mb-3">
              Policies
            </h3>
            <div className="flex flex-col space-y-2">
              {policyLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center space-x-2 text-white hover:text-orange-300 transition-colors duration-300 py-2 px-1 rounded group"
                    onClick={toggleMobileMenu}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    <Icon
                      size={15}
                      className="text-orange-400"
                      aria-hidden="true"
                    />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile contact info with gradient glassmorphism */}
          <div className="mt-8 bg-gradient-to-r from-orange-950/20 via-orange-900/10 to-orange-950/20 backdrop-blur-sm rounded-lg p-4 border border-orange-500/10 transition-all duration-300 hover:border-orange-400/30">
            <h3 className="text-orange-400 text-sm font-semibold mb-3">
              Contact Us
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="tel:9964391643"
                className="flex items-center space-x-2 text-white hover:text-orange-300 transition-colors duration-300 py-2 px-1 rounded group"
                aria-label="Call us at 9964391643"
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/20 rounded-full blur-md transition-colors duration-500"></div>
                  <Phone
                    size={15}
                    className="text-orange-400 relative z-10"
                    aria-hidden="true"
                  />
                </div>
                <span>9964391643</span>
              </a>
              <a
                href="mailto:hello@therunbhumi.com"
                className="flex items-center space-x-2 text-white hover:text-orange-300 transition-colors duration-300 py-2 px-1 rounded group"
                aria-label="Email us at hello@therunbhumi.com"
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/20 rounded-full blur-md transition-colors duration-500"></div>
                  <Mail
                    size={15}
                    className="text-orange-400 relative z-10"
                    aria-hidden="true"
                  />
                </div>
                <span>hello@therunbhumi.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Join Now Button for Mobile with orange gradient */}
      <div className="md:hidden fixed w-full px-5 bottom-0 left-1/2 -translate-x-1/2 z-40">
        <Link
          href="/register"
          className="relative focus:outline-none group w-full"
          aria-label="Register for Trials"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-black/90 to-black/90 backdrop-blur-sm text-center text-white text-xs font-bold py-1.5 px-4 rounded-t-xl border-t border-x border-orange-500/40 group-hover:border-orange-500/60 transition-all duration-300">
            <span className="text-orange-400">SEASON 1</span>
          </div>
          <Button
            className="bg-orange-500 hover:bg-orange-600
                    text-white font-medium px-8 py-6
                    transition-all duration-300 text-base
                    shadow-lg
                    flex items-center gap-2 rounded-none rounded-t-xl w-full
                     uppercase"
          >
            <span className="flex items-center relative z-10">
              Register for Trials
              <svg
                className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600/80 via-orange-500 to-orange-600/80 transition-all duration-500 ease-out group-hover:w-full"
              aria-hidden="true"
            ></span>
          </Button>
        </Link>
      </div>

      {/* Skip to main content link for accessibility with orange styling */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-1/2 focus:-translate-x-1/2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-2 z-50 rounded-md focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Adjusted spacer for shorter header */}
      {/* <div className="w-full h-[82px] md:h-[100px]" aria-hidden="true"></div> */}
    </>
  );
}
