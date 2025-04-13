// components/header.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

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
    const isActive = (path: string) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname === path || pathname.startsWith(`${path}/`);
    };

    return (
        <header className={`fixed top-0 z-40 w-full border-b shadow-sm transition-all duration-300 ${isScrolled ? "bg-white border-gray-200" : "bg-transparent border-transparent"
            }`}>
            <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Link
                        href="/"
                        className={`flex items-center space-x-2 transition-all duration-300 ${isScrolled ? "" : "scale-105"
                            }`}
                    >
                        <Trophy className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? "text-orange-500" : "text-orange-400"
                            }`} />
                        <span className={`inline-block font-bold transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"
                            }`}>Run Bhumi</span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center text-sm font-medium relative transition-all duration-300 ${isActive(link.href)
                                    ? (isScrolled ? "text-orange-500" : "text-orange-300")
                                    : isScrolled
                                        ? "text-gray-600 hover:text-orange-500"
                                        : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-2 left-0 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${isActive(link.href) ? "w-full" : "w-0"
                                        }`}
                                />
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        {/* <Button
                            variant={isScrolled ? "outline" : "ghost"}
                            size="sm"
                            className={`hidden md:flex transition-all duration-300 ${isScrolled
                                ? "border-orange-500 text-orange-500 hover:bg-orange-50"
                                : "border-white/30 text-white hover:bg-white/10"
                                }`}
                        >
                            Join Now
                        </Button> */}
                        <Button
                            size="sm"
                            className={`hidden md:flex transition-all duration-300 ${isScrolled
                                ? "bg-orange-500 hover:bg-orange-600 text-white"
                                : "bg-orange-400 hover:bg-orange-500 text-white"
                                }`}
                        >
                            Join Now
                        </Button>

                        {/* Mobile menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={`md:hidden transition-colors duration-300 ${isScrolled ? "text-orange-500" : "text-white"
                                        }`}
                                    aria-label="Toggle Menu"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-64 sm:w-80">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center space-x-2 py-4">
                                        <Trophy className="h-5 w-5 text-orange-500" />
                                        <span className="font-bold">Run Bhumi</span>
                                    </div>
                                    <Separator />
                                    <nav className="flex flex-col space-y-4 mt-6">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`text-lg font-medium transition-colors ${isActive(link.href)
                                                    ? "text-orange-500"
                                                    : "text-gray-600 hover:text-orange-500"
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </nav>
                                    <div className="mt-auto space-y-4 py-4">
                                        <Button
                                            variant="outline"
                                            className="w-full border-orange-500 text-orange-500 hover:bg-orange-50"
                                        >
                                            Sign In
                                        </Button>
                                        <Button
                                            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                                        >
                                            Buy Tickets
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </nav>
                </div>
            </div>
        </header>
    );
}