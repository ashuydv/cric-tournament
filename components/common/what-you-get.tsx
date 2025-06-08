import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  BookOpenIcon,
  GiftIcon,
  ShirtIcon,
  CheckCircleIcon,
  StarIcon,
} from "lucide-react";

type Props = {};

const WhatYouGet = (props: Props) => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter">
            What You Get
          </h2>
          <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-black px-2">
            Every participant in RunBhumi Trials 2025 receives an exclusive
            package designed to enhance your cricket journey
          </p>
        </div>

        {/* Single Comprehensive Card */}
        <Card className="border-2 border-gray-200 hover:border-orange-200 transition-colors duration-300 mx-auto">
          <CardHeader className="text-center py-12 bg-gradient-to-r from-orange-50 to-orange-100">
            <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-gray-900">
              Complete Cricket Experience Package
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 sm:p-8 lg:p-10">
            {/* Main Benefits Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
              {/* Education & Training */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-3">
                  <BookOpenIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mr-2" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    Education & Training
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center lg:justify-start text-xs sm:text-sm text-black">
                    <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Free Yearly Runbhumi Education App Subscription</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-xs sm:text-sm text-black">
                    <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Premium Training Modules</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-xs sm:text-sm text-black">
                    <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Expert Guidance Access</span>
                  </div>
                </div>
              </div>

              {/* Gear & Equipment */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-3">
                  <GiftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mr-2" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    Gear & Equipment
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center lg:justify-start text-xs sm:text-sm text-black">
                    <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Waterproof Kit Bag</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-xs sm:text-sm text-black">
                    <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Exclusive T-shirt</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-xs sm:text-sm text-black">
                    <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>RunBhumi Cap</span>
                  </div>
                </div>
              </div>

              {/* Premium Accessories */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-3">
                  <ShirtIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mr-2" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    Premium Accessories
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center lg:justify-start text-xs sm:text-sm text-black">
                    <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>RunBhumi Keychain</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-xs sm:text-sm text-black">
                    <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Sports Wristband</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-xs sm:text-sm text-black">
                    <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Sports Towel & Napkin</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Highlight Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 sm:p-6 text-white text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Complete Cricket Starter Experience
              </h3>
              <p className="text-sm sm:text-base opacity-90">
                Everything you need to begin your professional cricket journey
                with RunBhumi
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhatYouGet;
