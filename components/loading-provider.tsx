'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import RegistrationModal from './registration-modal' // Adjust the import path as needed
import { usePathname } from 'next/navigation'

export default function LoadingProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + Math.random() * 15;
                return newProgress >= 100 ? 100 : newProgress;
            });
        }, 200);

        // Set total loading time
        const timer = setTimeout(() => {
            clearInterval(progressInterval);
            setProgress(100);

            // Add a small delay after reaching 100% before removing loader
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, []);

    return (
        <>
            {loading ? (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-orange-100 z-50">
                    <div className="flex flex-col items-center max-w-md px-6 text-center">
                        {/* Logo */}
                        <div className="mb-8 relative w-40 h-40">
                            <Image
                                src="/rb_logo.png"
                                alt="RunBhumi Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Progress bar */}
                        <div className="w-full bg-orange-50 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                            <div
                                className="bg-orange-600 h-2.5 rounded-full transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {/* Loading text with cricket theme */}
                        <div className="text-gray-800 font-medium">
                            {progress < 30 && "Setting up the pitch..."}
                            {progress >= 30 && progress < 60 && "Getting the players ready..."}
                            {progress >= 60 && progress < 90 && "Warming up..."}
                            {progress >= 90 && "Almost there!"}
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {children}
                    {isHomePage && <RegistrationModal />}
                </>
            )}
        </>
    );
}