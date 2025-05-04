"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@/components/visually-hidden";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DynamicButton from "./dynamic-button";

export default function RegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    // Only initialize once to prevent multiple opens
    if (!hasInitialized) {
      // Wait a moment to ensure we don't show it while the loader is still active
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasInitialized(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [hasInitialized]);

  // Handle manual close
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[90%] sm:max-w-md md:max-w-lg w-full p-0 overflow-hidden rounded-2xl border-0 shadow-xl">
        <VisuallyHidden>
          <DialogTitle>RunBhumi Season 1 Registration</DialogTitle>
        </VisuallyHidden>

        {/* Close button */}
        <DialogClose
          className="absolute top-3 right-3 z-20 rounded-full p-1 bg-orange-900/40 text-white hover:bg-orange-900/60 transition-colors"
          onClick={handleClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="flex flex-col items-center text-center bg-gradient-to-br from-orange-900 via-orange-800 to-amber-900 text-white relative">
          {/* Fun background elements */}
          <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-20 -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-full opacity-20 -ml-16 -mb-16"></div>

          {/* Zigzag pattern top */}
          <div className="absolute top-0 left-0 w-full h-4 sm:h-6 overflow-hidden">
            <div
              className="w-full h-8 sm:h-12 bg-amber-400 opacity-30"
              style={{
                clipPath:
                  "polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)",
              }}
            ></div>
          </div>

          {/* Header with Logo */}
          <div className="w-full pt-8 sm:pt-12 pb-2 px-4 relative z-10">
            <div className="flex justify-center mb-2 sm:mb-3">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <Image
                  src="/rb_logo.png"
                  alt="RunBhumi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-400 to-amber-400 text-white text-xs sm:text-sm py-1 px-4 sm:px-6 rounded-full inline-block font-bold transform -rotate-2 shadow-md">
              SEASON - 1
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full px-4 sm:px-6 py-3 sm:py-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1 sm:mb-2 tracking-tight transform -rotate-1">
              SEASON - 1
            </h2>
            <div className="bg-gradient-to-r from-orange-500 to-amber-400 py-2 sm:py-3 px-3 sm:px-4 mb-2 sm:mb-3 rounded-md transform rotate-1 shadow-lg">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
                REGISTRATIONS
              </h3>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 tracking-tight transform -rotate-1">
              OPENS NOW!
            </h2>
            <div className="relative">
              <p className="text-xs sm:text-sm text-amber-100 mb-4 sm:mb-6 px-2 sm:px-4 relative z-10">
                Please Note: Players who have their RunBhumi ID need to login
                using their credentials and follow the registration process.
              </p>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-30"></div>
            </div>
          </div>

          {/* Register Button */}
          <div className="w-full pb-6 sm:pb-10 px-6 sm:px-8 relative z-10">
            <Link href="/register">
              <DynamicButton onClick={() => setIsOpen(false)}>
                Register for Trials
              </DynamicButton>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
