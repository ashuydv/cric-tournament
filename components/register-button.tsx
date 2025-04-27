"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export const RegisterButton = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    // Create pulse animation effect every few seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 700);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative inline-block group">
            {/* Season tag */}
            {/* <div className="absolute -top-6 left-6 bg-orange-600 text-white text-xs font-bold py-1 px-3 rounded-t-md">
                SEASON 1
            </div> */}

            <Link href="/register">
                <Button
                    className={`
                    bg-orange-500 hover:bg-orange-600 
                    text-white font-medium px-8 py-6 
                    transition-all duration-300 text-base
                    shadow-lg
                    flex items-center gap-2 rounded-xl
                    italic uppercase
                    `}
                >
                    <span className="font-semibold">Register for Trials</span>
                    <ChevronRight size={18} />
                </Button>
            </Link>
        </div>
    );
};

export default RegisterButton;