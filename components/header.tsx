// components/header.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Add scroll event listener to create transition effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        { href: "/tournaments", label: "Tournaments" },
        { href: "/teams", label: "Teams" },
        { href: "/about-us", label: "About Us" },
        { href: "/register", label: "Register" },
        { href: "/merchandise", label: "Merchandise" },
    ];

    // Function to check if link is active
    const isActive = (path: any) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname === path || pathname.startsWith(`${path}/`);
    };

    return (
        <>
            <header className={`fixed top-0 z-40 w-full transition-all duration-300 ${isScrolled
                ? "bg-gradient-to-b from-slate-900 to-slate-900 shadow-lg"
                : "bg-gradient-to-b from-slate-900 to-slate-900 shadow-lg"
                }`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <div className="relative h-14 w-14 md:h-16 md:w-16 flex-shrink-0">
                                <Image
                                    src="/rb_logo.png"
                                    alt="Run Bhumi Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-all duration-200 hover:text-orange-400 relative py-2 ${isActive(link.href)
                                        ? "text-orange-400"
                                        : "text-white"
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 transform origin-left transition-transform duration-300 ${isActive(link.href) ? "scale-x-100" : "scale-x-0"
                                            }`}
                                    />
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button - Desktop Only */}
                        <div className="hidden md:block">
                            <Button
                                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300"
                            >
                                Join Now
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                            data-menu-toggle
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu - Positioned at Top with side slide */}
            <div
                id="mobile-menu"
                className={`md:hidden fixed top-0 left-0 w-full h-full bg-slate-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="container mx-auto px-4 py-4">
                    {/* Close button inside mobile menu */}
                    <div className="flex justify-between items-center mb-6 mt-4">
                        <div className="relative h-14 w-14 flex-shrink-0">
                            <Image
                                src="/rb_logo.png"
                                alt="Run Bhumi Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <button
                            className="text-white p-2"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation links */}
                    <nav className="flex flex-col space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-lg font-medium py-2 transition-colors duration-200 ${isActive(link.href)
                                    ? "text-orange-400"
                                    : "text-white hover:text-orange-400"
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Fixed Join Now Button for Mobile - Always Visible */}
            <div className="md:hidden fixed bottom-0 w-full right-0 z-50">
                <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-none rounded-t-xl font-medium px-6 py-6 shadow-lg transition-colors duration-300"
                >
                    Join Now
                </Button>
            </div>
        </>
    );
}