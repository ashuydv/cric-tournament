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
      <DialogContent className="max-w-[95%] xs:max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl w-full p-0 overflow-hidden rounded-xl sm:rounded-2xl border-0 shadow-xl max-h-[95vh] sm:max-h-[90vh]">
        <VisuallyHidden>
          <DialogTitle>RunBhumi Season 1 Registration</DialogTitle>
        </VisuallyHidden>

        {/* Close button - Enhanced responsive positioning */}
        <DialogClose
          className="absolute top-2 right-2 xs:top-3 xs:right-3 z-20 rounded-full p-1.5 xs:p-2 bg-orange-900/40 text-white hover:bg-orange-900/60 transition-colors touch-manipulation"
          onClick={handleClose}
        >
          <X className="h-4 w-4 xs:h-5 xs:w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="flex flex-col items-center text-center bg-gradient-to-br from-orange-900 via-orange-800 to-amber-900 text-white relative overflow-hidden">
          {/* Fun background elements - Responsive sizing */}
          <div className="absolute top-0 right-0 w-16 xs:w-20 sm:w-24 md:w-32 h-16 xs:h-20 sm:h-24 md:h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-20 -mr-6 xs:-mr-8 sm:-mr-10 -mt-6 xs:-mt-8 sm:-mt-10"></div>
          <div className="absolute bottom-0 left-0 w-20 xs:w-24 sm:w-32 md:w-40 h-20 xs:h-24 sm:h-32 md:h-40 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-full opacity-20 -ml-8 xs:-ml-10 sm:-ml-12 md:-ml-16 -mb-8 xs:-mb-10 sm:-mb-12 md:-mb-16"></div>

          {/* Zigzag pattern top - Responsive height */}
          <div className="absolute top-0 left-0 w-full h-3 xs:h-4 sm:h-6 overflow-hidden">
            <div
              className="w-full h-6 xs:h-8 sm:h-12 bg-amber-400 opacity-30"
              style={{
                clipPath:
                  "polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)",
              }}
            ></div>
          </div>

          {/* Header with Logo - Enhanced responsive spacing */}
          <div className="w-full pt-6 xs:pt-8 sm:pt-10 md:pt-12 pb-2 px-3 xs:px-4 sm:px-6 relative z-10">
            <div className="flex justify-center mb-1 xs:mb-2 sm:mb-3">
              <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                <Image
                  src="/rb_logo.png"
                  alt="RunBhumi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-400 to-amber-400 text-white text-xs xs:text-sm sm:text-base py-1 xs:py-1.5 px-3 xs:px-4 sm:px-6 rounded-full inline-block font-bold transform shadow-md">
              SEASON - 1
            </div>
          </div>

          {/* Main Content - Enhanced responsive typography and spacing */}
          <div className="w-full px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 relative z-10">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-1 xs:mb-1.5 sm:mb-2 tracking-tight transform leading-tight">
              SEASON - 1
            </h2>
            <div className="bg-gradient-to-r from-orange-500 to-amber-400 py-1.5 xs:py-2 sm:py-3 px-2 xs:px-3 sm:px-4 mb-1.5 xs:mb-2 sm:mb-3 rounded-md transform shadow-lg">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
                REGISTRATIONS
              </h3>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 xs:mb-3 sm:mb-4 tracking-tight transform leading-tight">
              OPENS NOW!
            </h2>
            <div className="relative">
              <p className="text-xs xs:text-sm sm:text-base text-amber-50 mb-3 xs:mb-4 sm:mb-6 px-1 xs:px-2 sm:px-4 relative z-10 leading-relaxed max-w-prose mx-auto">
                Please Note: Players who have their RunBhumi ID need to login
                using their credentials and follow the registration process.
              </p>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-0.5 xs:h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-10"></div>
            </div>
          </div>

          {/* Register Button - Enhanced responsive sizing and spacing */}
          <div className="w-full pb-4 xs:pb-6 sm:pb-8 md:pb-10 px-4 xs:px-6 sm:px-8 md:px-10 relative z-10">
            <Link href="/register" className="block w-full">
              <DynamicButton
                onClick={() => setIsOpen(false)}
                className="w-full text-sm xs:text-base sm:text-lg py-3 xs:py-4 sm:py-5 px-4 xs:px-6 sm:px-8 font-bold rounded-lg xs:rounded-xl sm:rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 touch-manipulation"
              >
                Register for Trials (Ages: 16-30)
              </DynamicButton>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
