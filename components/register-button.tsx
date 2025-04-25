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
            <div className="absolute -top-6 left-6 bg-orange-600 text-white text-xs font-bold py-1 px-3 rounded-t-md">
                SEASON 1
            </div>

            <Link href="/register">
                <Button
                    className={`
                    bg-orange-500 hover:bg-orange-600 
                    text-white font-medium px-8 py-6 
                    transition-all duration-300
                    shadow-lg hover:shadow-xl
                    flex items-center gap-2 rounded-t-xl rounded-b-none
                    `}
                >
                    <span className="font-semibold">Register for Trials</span>
                    <ChevronRight size={18} />

                    {/* Limited spots indicator */}
                    <span className="absolute -bottom-6 left-0 right-0 text-xs font-medium text-red-600 bg-white w-full px-5 py-1 rounded-b-xl shadow-sm">
                        Limited Spots Available!
                    </span>
                </Button>
            </Link>
        </div>
    );
};

export default RegisterButton;