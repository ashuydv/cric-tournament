"use client"

import { useState, useEffect } from 'react';

export default function DynamicCountdown({ targetDate }: any) {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Function to calculate the time difference
        const calculateTimeRemaining = () => {
            const now = new Date();
            const target = new Date(targetDate);
            const difference = target.getTime() - now.getTime();

            // If the target date has passed, return all zeros
            if (difference <= 0) {
                return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
            }

            // Calculate time units
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        };

        // Update countdown immediately
        setTimeRemaining(calculateTimeRemaining());

        // Set up interval to update countdown every second
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[140px]">
                <div className="text-3xl md:text-4xl font-bold text-orange-600">
                    {String(timeRemaining.days).padStart(2, '0')}
                </div>
                <div className="text-sm text-black">Days</div>
            </div>

            <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[140px]">
                <div className="text-3xl md:text-4xl font-bold text-orange-600">
                    {String(timeRemaining.hours).padStart(2, '0')}
                </div>
                <div className="text-sm text-black">Hours</div>
            </div>

            <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[140px]">
                <div className="text-3xl md:text-4xl font-bold text-orange-600">
                    {String(timeRemaining.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm text-black">Minutes</div>
            </div>

            <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-center min-w-[140px]">
                <div className="text-3xl md:text-4xl font-bold text-orange-600">
                    {String(timeRemaining.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm text-black">Seconds</div>
            </div>
        </div>
    );
}