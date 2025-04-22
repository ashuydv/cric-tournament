// components/header.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import RegisterButton from "./register-button";

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Add scroll listener with enhanced smoothness
    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll progress for smoother transitions (0 to 1)
            const progress = Math.min(1, window.scrollY / 100);
            setScrollProgress(progress);

            // Determine if we've crossed the threshold for "scrolled" state
            const isScrolled = progress > 0.2;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            const mobileMenu = document.getElementById("mobile-menu");
            if (mobileMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && !event.target.closest("[data-menu-toggle]")) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileMenuOpen]);

    // Close mobile menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [mobileMenuOpen]);

    // Navigation links with paths for active state detection
    const navLinks = [
        { href: "/", label: "Home" },
        // { href: "/tournaments", label: "Tournaments" },
        // { href: "/teams", label: "Our Team" },
        { href: "/about-us", label: "About Us" },
        { href: "/merchandise", label: "Merchandise" },
    ];

    // Function to check if link is active
    const isActive = (path: any) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname === path || pathname.startsWith(`${path}/`);
    };

    // Dynamic opacity based on scroll progress
    const bgOpacity = Math.min(0.8, 0.2 + (scrollProgress * 0.6));
    const backdropBlur = 4 + (scrollProgress * 8);

    return (
        <>
            {/* Fixed glassmorphism header with reduced height and smoother transitions */}
            <header
                className="fixed top-0 z-40 w-full transition-all duration-700"
            >
                {/* Top contact bar with monochromatic glassmorphism */}
                <div
                    className="w-full p-4 border-b border-white/10 transition-all duration-700"
                    style={{
                        backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
                        backdropFilter: `blur(${backdropBlur}px)`
                    }}
                >
                    <div className="container mx-auto flex justify-end items-center space-x-6 text-sm">
                        <div className="flex items-center space-x-1 hover:text-orange-300 transition-colors duration-500">
                            <Phone size={14} className="text-orange-400" />
                            <a href="tel:+919964391643" className="hover:underline transition-all duration-500"
                                style={{ color: `rgba(255, 255, 255, ${1 - (scrollProgress * 0.3)})` }}>
                                9964391643
                            </a>
                        </div>
                        <div className="h-3 border-l border-gray-600" />
                        <div className="flex items-center space-x-1 hover:text-orange-300 transition-colors duration-500">
                            <Mail size={14} className="text-orange-400" />
                            <a href="mailto:hello@therunbhumi.com" className="hover:underline transition-all duration-500"
                                style={{ color: `rgba(255, 255, 255, ${1 - (scrollProgress * 0.3)})` }}>
                                hello@therunbhumi.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main navigation area with reduced height and gradient background */}
                <div
                    className="max-w-5xl rounded-b-xl mx-auto p-4 border-b border-white/10 transition-all duration-700"
                    style={{
                        backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
                        backdropFilter: `blur(${backdropBlur}px)`,
                    }}
                >
                    <div className="flex items-center justify-between py-2">
                        {/* Logo with reduced dimensions */}
                        <Link href="/" className="flex items-center group">
                            <div className="relative h-20 w-20 md:h-24 md:w-24 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src="/rb_logo.png"
                                    alt="RunBhumi Logo"
                                    fill
                                    className="object-contain drop-shadow-md"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation with adjusted spacing and ONLY bottom border animation */}
                        <nav className="hidden md:flex items-center justify-center mx-auto px-4 transition-all duration-500 space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium text-center transition-all duration-500 relative py-1.5 px-3 rounded-md 
                                        ${isActive(link.href)
                                            ? "text-orange-400 bg-white/10 backdrop-blur-sm"
                                            : "hover:bg-white/5 hover:backdrop-blur-sm hover:text-orange-300"
                                        }
                                        group overflow-hidden`}
                                    style={{
                                        color: isActive(link.href)
                                            ? '#fb923c' // text-orange-400
                                            : `rgba(243, 244, 246, ${1 - (scrollProgress * 0.2)})`
                                    }}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 transform origin-left transition-transform duration-700 ease-out 
                                            ${isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                                    />
                                </Link>
                            ))}
                        </nav>

                        {/* Register Button - Desktop Only */}
                        <div className="hidden md:block">
                            <RegisterButton />
                        </div>

                        {/* Mobile Menu Button with adjusted size */}
                        <button
                            className="md:hidden p-1.5 rounded-full text-white backdrop-blur-sm transition-all duration-500"
                            style={{
                                backgroundColor: `rgba(255, 255, 255, ${0.05 + (scrollProgress * 0.05)})`,
                            }}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                            data-menu-toggle
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu with monochromatic glassmorphism */}
            <div
                id="mobile-menu"
                className={`md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-md shadow-lg transform transition-all duration-700 ease-in-out z-50 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="container mx-auto px-4 py-4">
                    {/* Close button inside mobile menu */}
                    <div className="flex justify-between items-center mb-6 mt-4">
                        <div className="relative h-12 w-12 flex-shrink-0">
                            <Image
                                src="/rb_logo.png"
                                alt="RunBhumi Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <button
                            className="text-white p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/15 transition-colors duration-500"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Navigation links with ONLY bottom border animations */}
                    <nav className="flex flex-col space-y-3 mt-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-base font-medium py-2.5 px-4 rounded-lg transition-all duration-500 relative group overflow-hidden
                                    ${isActive(link.href)
                                        ? "text-orange-400 bg-white/10 backdrop-blur-sm"
                                        : "text-white hover:text-orange-300 hover:bg-white/5 hover:backdrop-blur-sm"
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                                <span
                                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-700 ease-out
                                        ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}`}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile contact info with monochromatic glassmorphism */}
                    <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 transition-all duration-500 hover:border-orange-400/20">
                        <h3 className="text-orange-400 text-sm font-semibold mb-3">Contact Us</h3>
                        <div className="flex flex-col space-y-3">
                            <a href="tel:9964391643" className="flex items-center space-x-2 text-white hover:text-orange-300 transition-colors duration-500">
                                <Phone size={15} className="text-gray-400" />
                                <span>9964391643</span>
                            </a>
                            <a href="mailto:hello@therunbhumi.com" className="flex items-center space-x-2 text-white hover:text-orange-300 transition-colors duration-500">
                                <Mail size={15} className="text-gray-400" />
                                <span>hello@therunbhumi.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed Join Now Button for Mobile with monochromatic glassmorphism */}
            <div className="md:hidden fixed bottom-0 w-full right-0 z-40">
                <Link
                    href='/register'
                    className="relative"
                >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-sm text-center text-white text-xs font-bold py-1.5 px-4 rounded-t-xl border-t border-x border-orange-500/30 hover:border-orange-500/60 transition-all duration-500">
                        <span className="text-orange-400">SEASON 1</span>
                    </div>
                    <Button
                        className="bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-sm hover:from-gray-800/90 hover:to-black/90 hover:shadow-lg text-white w-full rounded-none rounded-t-xl font-medium px-6 py-5 transition-all duration-500 border-t border-orange-500/20 hover:border-orange-500/40 relative overflow-hidden group"
                    >
                        <span className="flex items-center text-orange-400 relative z-10">
                            Register for Trails
                            <svg
                                className="ml-2 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-700 ease-out group-hover:w-full"></span>
                    </Button>
                </Link>
            </div>

            {/* Adjusted spacer for shorter header */}
            <div className="w-full h-[90px] md:hidden"></div>
        </>
    );
}