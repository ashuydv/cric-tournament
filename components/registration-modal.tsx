"use client"

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from '@/components/visually-hidden';
import Link from 'next/link';
import Image from 'next/image';

export default function RegistrationModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Open the modal when the component mounts (page loads)
        setIsOpen(true);
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-md md:max-w-lg w-full p-0 overflow-hidden rounded-2xl border-0 shadow-xl">
                <VisuallyHidden>
                    <DialogTitle>RunBhumi Season 1 Registration</DialogTitle>
                </VisuallyHidden>

                <div className="flex flex-col items-center text-center bg-gradient-to-br from-orange-900 via-orange-800 to-amber-900 text-white relative">
                    {/* Fun background elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-20 -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-full opacity-20 -ml-20 -mb-20"></div>

                    {/* Zigzag pattern top */}
                    <div className="absolute top-0 left-0 w-full h-6 overflow-hidden">
                        <div className="w-full h-12 bg-amber-400 opacity-30"
                            style={{ clipPath: "polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)" }}>
                        </div>
                    </div>

                    {/* Header with Logo */}
                    <div className="w-full pt-12 pb-2 px-4 relative z-10">
                        <div className="flex justify-center mb-3">
                            <div className="relative w-32 h-32">
                                <Image
                                    src="/rb_logo.png"
                                    alt="RunBhumi Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-orange-400 to-amber-400 text-white text-sm py-1 px-6 rounded-full inline-block font-bold transform -rotate-2 shadow-md">
                            SEASON - 1
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full px-6 py-4 relative z-10">
                        <h2 className="text-5xl font-extrabold mb-2 tracking-tight transform -rotate-1">SEASON - 1</h2>
                        <div className="bg-gradient-to-r from-orange-500 to-amber-400 py-3 px-4 mb-3 rounded-md transform rotate-1 shadow-lg">
                            <h3 className="text-3xl font-bold tracking-wide">REGISTRATIONS</h3>
                        </div>
                        <h2 className="text-5xl font-extrabold mb-4 tracking-tight transform -rotate-1">OPENS NOW!</h2>
                        <div className="relative">
                            <p className="text-sm text-amber-100 mb-6 px-4 relative z-10">
                                Please Note: Players who have their RunBhumi ID need to login using their
                                credentials and follow the registration process.
                            </p>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-30"></div>
                        </div>
                    </div>

                    {/* Register Button */}
                    <div className="w-full pb-10 px-8 relative z-10">
                        <Link
                            href="/register"
                        >
                            <Button
                                className="w-full py-6 text-lg font-bold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0 rounded-full transform hover:-rotate-1 hover:scale-105 transition-all shadow-lg"
                            >
                                REGISTER NOW!
                            </Button>
                        </Link>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}