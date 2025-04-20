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

    return (
        <>
            <header className={`fixed top-0 z-40 w-full transition-all duration-300 ${isScrolled
                ? "bg-white"
                : "bg-transparent"
                }`}>
                <div className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-2 px-4">
                    <div className="container mx-auto flex justify-center items-center space-x-6 text-sm">
                        <div className="flex items-center space-x-1">
                            <Phone size={16} />
                            <span>9964391643</span>

                        </div>
                        <div className="h-4 border-l border-orange-300" />
                        <div className="flex items-center space-x-1">
                            <Mail size={16} />
                            <span>hello@therunbhumi.com</span>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <div className="relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0">
                                <Image
                                    src="/rb_logo.png"
                                    alt="RunBhumi Logo"
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
                                    className={`text-sm font-medium transition-all duration-200 hover:text-orange-400 relative py-2 ${isActive(link.href) ? "text-orange-400" : "text-black"
                                        } ${isScrolled ? "text-black" : "text-white"}`}
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
                        {/* <div className="hidden md:block">
                            <div className="relative">
                                <span className="absolute -top-6 px-2 bg-black rounded-t-4 italic text-white">
                                    season 1
                                </span>
                                <Link
                                    href='/register'
                                >
                                    <Button
                                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300"
                                    >
                                        Register Now
                                    </Button>
                                </Link>
                            </div>
                        </div> */}
                        <div className="hidden md:block">
                            <RegisterButton />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={`md:hidden ${isScrolled
                                ? "text-black"
                                : "text-white"
                                } p-2`}
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
                                alt="RunBhumi Logo"
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
                <Link
                    href='/register'
                    className="relative"
                >
                    <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-orange-600 text-center text-white text-xs font-bold py-1 px-3 rounded-t-xl">
                        SEASON 1
                    </div>
                    <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-none rounded-t-xl font-medium px-6 py-6 shadow-lg transition-colors duration-300"
                    >
                        Register Now
                    </Button>
                </Link>
            </div>
        </>
    );
}