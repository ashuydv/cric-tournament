import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Trophy } from 'lucide-react';

// This component will handle the scroll behavior
const TransparentHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change to white after scrolling 100px
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled
                ? 'bg-white border-b shadow-sm'
                : 'bg-transparent border-transparent'
                }`}
        >
            <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <Trophy className={`h-6 w-6 ${isScrolled ? 'text-orange-500' : 'text-white'}`} />
                        <span className={`inline-block font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
                            RunBhumi
                        </span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        <Link
                            href="/"
                            className={`flex items-center text-sm font-medium ${isScrolled
                                ? 'text-orange-500'
                                : 'text-white hover:text-orange-300'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/teams"
                            className={`flex items-center text-sm font-medium ${isScrolled
                                ? 'text-black hover:text-orange-500'
                                : 'text-white/80 hover:text-white'
                                } transition-colors`}
                        >
                            Teams
                        </Link>
                        <Link
                            href="/schedule"
                            className={`flex items-center text-sm font-medium ${isScrolled
                                ? 'text-black hover:text-orange-500'
                                : 'text-white/80 hover:text-white'
                                } transition-colors`}
                        >
                            Schedule
                        </Link>
                        <Link
                            href="/results"
                            className={`flex items-center text-sm font-medium ${isScrolled
                                ? 'text-black hover:text-orange-500'
                                : 'text-white/80 hover:text-white'
                                } transition-colors`}
                        >
                            Results
                        </Link>
                        <Link
                            href="/stats"
                            className={`flex items-center text-sm font-medium ${isScrolled
                                ? 'text-black hover:text-orange-500'
                                : 'text-white/80 hover:text-white'
                                } transition-colors`}
                        >
                            Statistics
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <Button
                            variant={isScrolled ? "outline" : "ghost"}
                            size="sm"
                            className={`hidden md:flex ${isScrolled
                                ? 'border-orange-500 text-orange-500 hover:bg-orange-50'
                                : 'border-white text-white hover:bg-white/10'
                                }`}
                        >
                            Sign In
                        </Button>
                        <Button
                            size="sm"
                            className={`hidden md:flex ${isScrolled
                                ? 'bg-orange-500 hover:bg-orange-600 text-white'
                                : 'bg-white hover:bg-white/90 text-orange-500'
                                }`}
                        >
                            Buy Tickets
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className={`md:hidden ${isScrolled ? 'text-orange-500' : 'text-white'}`}
                            aria-label="Toggle Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default TransparentHeader;