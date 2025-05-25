"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, MapPin, Trophy, Star } from "lucide-react";

// Standard Hero with Background Image
export function StandardHero() {
  return (
    <section className="w-full py-44 pb-32 md:py-52 lg:py-64 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/stadium1.webp"
          alt="Cricket Stadium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              RunBhumi
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-500">
              India's Greatest Cricket Talent Hunt
            </p>
            <p className="max-w-[700px] text-gray-100 md:text-lg mx-auto mt-4">
              Scouting extraordinary players from every corner of the nation
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6 justify-center">
            <Link
              href="/register"
              className="px-6 py-3 rounded-lg font-medium bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 flex items-center gap-2"
            >
              Register Now
              <ChevronRight size={16} />
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg font-medium bg-transparent border-2 border-white hover:bg-white/10 text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
