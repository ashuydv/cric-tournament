import React from "react";
import LeftHero from "@/components/common/left-hero";
import {
  Layers,
  Award,
  Users,
  TrendingUp,
  Star,
  Gift,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Sponsorships = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <LeftHero
        title="Sponsorships"
        description="Connect your brand with RunBhumi - India's premier televised cricket reality show"
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop"
        height="small"
        animated={true}
        parallaxEnabled={true}
        parallaxSpeed={0.7}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Sponsorship Opportunities
          </h2>
          <p className="text-black max-w-3xl mx-auto">
            Join RunBhumi as a sponsor and connect your brand with millions of
            passionate cricket fans across India. We offer a range of
            sponsorship packages designed to meet your marketing objectives.
          </p>
        </div>

        {/* Sponsorship Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Title Sponsor */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300">
            <div className="bg-orange-600 p-4 text-white text-center">
              <h3 className="text-xl font-bold">Title Sponsor</h3>
              <p className="text-sm mt-1 opacity-90">Premier Partnership</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="h-20 w-20 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="h-10 w-10 text-orange-600" />
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Exclusive naming rights</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    Logo on all team sleeves/back
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    Premium branding at all venues
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    Integrated digital marketing campaigns
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    Exclusive opportunities for content with players
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <Link
                  href="/contact?package=title"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>

          {/* Associate Sponsor */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300">
            <div className="bg-orange-600 p-4 text-white text-center">
              <h3 className="text-xl font-bold">Associate Sponsor</h3>
              <p className="text-sm mt-1 opacity-90">Featured Partnership</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="h-20 w-20 bg-orange-100 rounded-full flex items-center justify-center">
                  <Star className="h-10 w-10 text-orange-500" />
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Co-branded presence</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Logo on team sleeves/back</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    Branding at all match venues
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    Social media campaign integration
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    Player appearances for brand events
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <Link
                  href="/contact?package=associate"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>

          {/* Official Partner */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300">
            <div className="bg-orange-600 p-4 text-white text-center">
              <h3 className="text-xl font-bold">Official Partner</h3>
              <p className="text-sm mt-1 opacity-90">Category Exclusive</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="h-20 w-20 bg-orange-100 rounded-full flex items-center justify-center">
                  <Gift className="h-10 w-10 text-orange-400" />
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    Category exclusivity (e.g., Official Beverage)
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    In-venue branding opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    Digital & social media integration
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    Branded content opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    Hospitality packages for key matches
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <Link
                  href="/contact?package=partner"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="p-4 bg-orange-600 text-white">
            <h3 className="text-xl font-bold">Why Sponsor RunBhumi?</h3>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-orange-600 mr-2" />
                  <h4 className="font-semibold">Massive Audience</h4>
                </div>
                <p className="text-black">
                  Connect with over 10 million cricket fans across India through
                  stadium attendance, broadcast viewers, and digital platforms.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-6 w-6 text-orange-600 mr-2" />
                  <h4 className="font-semibold">Brand Growth</h4>
                </div>
                <p className="text-black">
                  Associate with India's first televised cricket reality show
                  and league, and elevate your brand perception among passionate
                  cricket fans.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Layers className="h-6 w-6 text-orange-600 mr-2" />
                  <h4 className="font-semibold">Multi-Platform Exposure</h4>
                </div>
                <p className="text-black">
                  Gain exposure across television broadcasts, digital streaming,
                  and social media advertising throughout all phases.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Become a Sponsor?
            </h2>
            <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Contact our sponsorship team today to discuss how we can create a
              customized package that aligns with your brand objectives and
              budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="p-4 bg-orange-600 text-white">
            <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
          </div>

          <div className="p-6 space-y-4">
            <div className="border-b border-gray-200 pb-3">
              <h4 className="font-semibold mb-2">
                When does the current RunBhumi season take place?
              </h4>
              <p className="text-black">
                The current RunBhumi season has already started and runs from 01
                June 2025 to 15 March 2026. Sponsorship opportunities are still
                available for the remaining phases.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <h4 className="font-semibold mb-2">
                Who all can sponsor RunBhumi?
              </h4>
              <p className="text-black">
                We are inviting national, state, and city-level businesses and
                organizations to partner with RunBhumi as sponsors, offering
                tailored packages for different scales of involvement.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <h4 className="font-semibold mb-2">
                Can sponsorship packages be customized?
              </h4>
              <p className="text-black">
                Yes, we offer flexible sponsorship options that can be tailored
                to meet your specific marketing objectives, target audience, and
                budget requirements.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <h4 className="font-semibold mb-2">
                What is the viewership of RunBhumi?
              </h4>
              <p className="text-black">
                RunBhumi reaches over 10 million viewers through television
                broadcasts and digital streaming platforms across all phases.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <h4 className="font-semibold mb-2">
                What are the phases of RunBhumi sponsorship?
              </h4>
              <p className="text-black">
                RunBhumi sponsorship encompasses three distinct phases: Trials
                (talent discovery phase), Reality Show (televised competition),
                and Leagues (final matches), each offering unique brand exposure
                opportunities.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                How can we measure ROI on our sponsorship?
              </h4>
              <p className="text-black">
                We provide customized ROI measurement models and comprehensive
                post-event reports tailored to your specific objectives, with
                detailed proposals available upon enquiry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom CTA Button - Sticky */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
        <div className="relative">
          {/* Season tag above button */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-black/90 to-black/90 backdrop-blur-sm text-center text-white text-xs font-bold py-1.5 px-4 rounded-t-xl border-t border-x border-orange-500/40 transition-all duration-300">
            <span className="text-orange-400">SPONSORSHIP INQUIRY</span>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 text-center rounded-lg transition-colors duration-300 uppercase relative overflow-hidden group"
          >
            <span className="flex items-center justify-center">
              Become a Sponsor
              <svg
                className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            {/* Animated underline effect */}
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600/80 via-orange-500 to-orange-600/80 transition-all duration-500 ease-out group-hover:w-full"
              aria-hidden="true"
            ></span>

            {/* Subtle pulsing effect to draw attention */}
            <span
              className="absolute inset-0 bg-orange-500/10 animate-pulse rounded-lg"
              aria-hidden="true"
            ></span>
          </Link>
        </div>
      </div>

      {/* Add padding at the bottom to prevent content from being hidden behind the sticky CTA on mobile */}
      <div className="h-16 md:h-0 mb-4" aria-hidden="true"></div>
    </div>
  );
};

export default Sponsorships;
