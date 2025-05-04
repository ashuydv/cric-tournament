"use client";

import React, { useState } from "react";
import LeftHero from "@/components/common/left-hero";
import {
  Users,
  Trophy,
  TrendingUp,
  Mic,
  Camera,
  ShoppingBag,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PartnerWithUs = () => {
  const [activeTab, setActiveTab] = useState("sponsor");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <LeftHero
        title="Partner With Us"
        description="Join forces with RunBhumi and be part of India's fastest growing cricket tournament"
        backgroundType="color"
        backgroundSrc="#111"
        height="small"
        animated={true}
        parallaxEnabled={true}
        parallaxSpeed={0.7}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Grow Your Brand with RunBhumi
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Partner with RunBhumi to connect with millions of cricket fans
            across India. We offer various partnership opportunities tailored to
            meet your brand objectives.
          </p>
        </div>

        {/* Partnership Types Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("sponsor")}
              className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === "sponsor"
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Title Sponsorship
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === "team"
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Team Ownership
            </button>
            <button
              onClick={() => setActiveTab("media")}
              className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === "media"
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Media Partnership
            </button>
            <button
              onClick={() => setActiveTab("venue")}
              className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === "venue"
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Venue Partnership
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {activeTab === "sponsor" && (
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Title Sponsorship
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Become the title sponsor of RunBhumi and get maximum brand
                      visibility throughout the tournament. Your brand will be
                      prominently featured in all tournament communications,
                      match venues, and broadcast.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Tournament naming rights (Brand Name)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Brand logo on all team jerseys and at center pitch
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Exclusive branding on tournament trophy and all
                          promotional materials
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Prime-time TV commercial slots during broadcasts
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          VIP hospitality area for your guests at all matches
                        </p>
                      </div>
                    </div>
                    <Link
                      href="#contact-form"
                      className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Become Title Sponsor
                    </Link>
                  </div>
                  <div className="md:w-1/3 rounded-lg overflow-hidden h-64 md:h-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                    <div className="absolute bottom-4 left-4 z-20 bg-black/70 text-white text-xs py-1 px-2 rounded">
                      Trophy & Branding
                    </div>
                    <Image
                      src="https://images.unsplash.com/photo-1624193757636-b829dfa06a1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNyaWNrZXR8ZW58MHx8MHx8fDI%3D"
                      alt="Trophy with sponsor branding"
                      layout="fill"
                      objectFit="cover"
                      className="object-center"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "team" && (
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Team Ownership
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Own a team in the RunBhumi and create a lasting legacy in
                      cricket. Team ownership offers the most comprehensive
                      branding and engagement opportunities.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Full team naming rights with your brand
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Complete control over team jersey design and branding
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Player selection involvement in draft/auction
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Brand exposure during all team matches and tournaments
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Revenue sharing from tournament prize money and
                          merchandise
                        </p>
                      </div>
                    </div>
                    <Link
                      href="#contact-form"
                      className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Become Team Owner
                    </Link>
                  </div>
                  <div className="md:w-1/3 rounded-lg overflow-hidden h-64 md:h-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                    <div className="absolute bottom-4 left-4 z-20 bg-black/70 text-white text-xs py-1 px-2 rounded">
                      Team Players
                    </div>
                    <Image
                      src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
                      alt="Cricket team players"
                      layout="fill"
                      objectFit="cover"
                      className="object-center"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "media" && (
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Media Partnership
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Partner with us as a media broadcaster or digital platform
                      to bring RunBhumi to millions of viewers. Exclusive
                      content rights and co-branding opportunities available.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Exclusive broadcasting rights for all tournament
                          matches
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Behind-the-scenes access to teams and players
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Co-branded promotional campaigns across all platforms
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Custom content creation opportunities with players
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Digital advertising inventory across tournament
                          platforms
                        </p>
                      </div>
                    </div>
                    <Link
                      href="#contact-form"
                      className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Become Media Partner
                    </Link>
                  </div>
                  <div className="md:w-1/3 rounded-lg overflow-hidden h-64 md:h-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                    <div className="absolute bottom-4 left-4 z-20 bg-black/70 text-white text-xs py-1 px-2 rounded">
                      Media Coverage
                    </div>
                    <Image
                      src="https://images.unsplash.com/photo-1637094408647-0d81d08f81b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFydG5lcnNoaXB8ZW58MHx8MHx8fDI%3D"
                      alt="Sports broadcasting"
                      layout="fill"
                      objectFit="cover"
                      className="object-center"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "venue" && (
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Venue Partnership
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Showcase your venue by hosting RunBhumi matches. Ideal for
                      cricket grounds, stadiums, and sports facilities looking
                      to gain national visibility.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Host multiple tournament matches at your venue
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Venue branding and naming opportunities during
                          broadcasts
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Increased footfall and food & beverage revenue
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Access to premium advertisers and sponsors
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Long-term partnership opportunities across seasons
                        </p>
                      </div>
                    </div>
                    <Link
                      href="#contact-form"
                      className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Become Venue Partner
                    </Link>
                  </div>
                  <div className="md:w-1/3 rounded-lg overflow-hidden h-64 md:h-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                    <div className="absolute bottom-4 left-4 z-20 bg-black/70 text-white text-xs py-1 px-2 rounded">
                      Stadium View
                    </div>
                    <Image
                      src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop"
                      alt="Cricket stadium"
                      layout="fill"
                      objectFit="cover"
                      className="object-center"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Partner Benefits & FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Partnership Benefits */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-orange-600 text-white">
              <h3 className="text-xl font-bold">Why Partner With RunBhumi?</h3>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="h-6 w-6 text-orange-600 mr-2" />
                    <h4 className="font-semibold">Mass Audience Reach</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Access to millions of cricket fans across India through
                    matches, digital platforms, and broadcasts.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-6 w-6 text-orange-600 mr-2" />
                    <h4 className="font-semibold">Brand Growth</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Associate with the excitement of cricket to elevate your
                    brand perception and awareness.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Trophy className="h-6 w-6 text-orange-600 mr-2" />
                    <h4 className="font-semibold">Premium Association</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Align with a premium cricket property that attracts
                    high-value audience segments.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Mic className="h-6 w-6 text-orange-600 mr-2" />
                    <h4 className="font-semibold">Media Exposure</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Gain extensive coverage across television, digital, print,
                    and social media platforms.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Camera className="h-6 w-6 text-orange-600 mr-2" />
                    <h4 className="font-semibold">Content Creation</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Opportunities for branded content with teams and players for
                    your marketing campaigns.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <ShoppingBag className="h-6 w-6 text-orange-600 mr-2" />
                    <h4 className="font-semibold">Merchandising</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Co-branded merchandise opportunities and retail presence
                    throughout the tournament.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-orange-600 text-white">
              <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
            </div>

            <div className="p-4 space-y-4">
              <div className="border-b border-gray-200 pb-2">
                <h4 className="font-semibold mb-1">
                  What is the minimum duration for a partnership?
                </h4>
                <p className="text-sm text-gray-600">
                  Most partnerships are structured around a full tournament
                  season, though multi-year deals are available and preferred.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <h4 className="font-semibold mb-1">
                  Can we customize our partnership package?
                </h4>
                <p className="text-sm text-gray-600">
                  Yes, we offer flexible partnership options that can be
                  tailored to meet your specific marketing objectives and
                  budget.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <h4 className="font-semibold mb-1">
                  What kind of audience reach can we expect?
                </h4>
                <p className="text-sm text-gray-600">
                  RunBhumi reaches over 10 million cricket fans across India
                  through stadium attendance, broadcast viewers, and digital
                  platforms.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <h4 className="font-semibold mb-1">
                  What is the investment range for partnerships?
                </h4>
                <p className="text-sm text-gray-600">
                  Partnership investments vary based on type and scale, ranging
                  from ₹10 lakhs for basic packages to ₹5 crores for title
                  sponsorships.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">
                  How soon should we begin partnership discussions?
                </h4>
                <p className="text-sm text-gray-600">
                  We recommend starting conversations at least 3-6 months before
                  the tournament to ensure optimal integration and activation
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Partners Showcase */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Our Valued Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center border-2 border-orange-100 h-24">
              <div className="p-2 uppercase flex items-center justify-center text-black italic font-semibold">
                Sony Ten 3
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center border-2 border-orange-100 h-24">
              <div className="p-2 uppercase flex items-center justify-center text-black italic font-semibold">
                Sony LIV
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center border-2 border-orange-100 h-24">
              <div className="p-2 uppercase flex items-center justify-center text-black italic font-semibold">
                Sony Pal
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center border-2 border-orange-100 h-24">
              <div className="p-2 uppercase flex items-center justify-center text-black italic font-semibold">
                Fancode
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        {/* <div
          id="contact-form"
          className="bg-white rounded-lg shadow-md overflow-hidden mb-12"
        >
          <div className="p-6 bg-orange-600 text-white">
            <h2 className="text-2xl font-bold">Become a Partner</h2>
            <p className="mt-2">
              Fill out the form below and our partnership team will get in touch
              with you.
            </p>
          </div>

          <div className="p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-person"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contact-person"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Partnership Interest *
                </label>
                <select
                  id="interest"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Partnership Type</option>
                  <option value="title">Title Sponsorship</option>
                  <option value="team">Team Ownership</option>
                  <option value="media">Media Partnership</option>
                  <option value="venue">Venue Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us about your partnership goals and objectives..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <span>Submit Partnership Inquiry</span>
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div> */}

        {/* Direct Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">
              Reach out to our partnerships team directly via email
            </p>
            <a
              href="mailto:hello@therunbhumi.com"
              className="text-orange-600 hover:text-orange-800 font-medium"
            >
              hello@therunbhumi.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">
              Speak with a partnership executive directly
            </p>
            <a
              href="tel:+919964391643"
              className="text-orange-600 hover:text-orange-800 font-medium"
            >
              +91 9964 391 643
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Schedule a Meeting</h3>
            <p className="text-gray-600 mb-4">
              Book a virtual meeting with our partnership team
            </p>
            <Link
              href="/schedule-meeting"
              className="text-orange-600 hover:text-orange-800 font-medium"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-orange-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Partnership Timeline
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-300"
              aria-hidden="true"
            ></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                    1
                  </div>
                </div>
                <div className="flex justify-end md:w-1/2 pr-10">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold mb-1 text-orange-700">
                      Initial Contact
                    </h3>
                    <p className="text-sm text-gray-600">
                      Submit your partnership inquiry through our form or
                      contact us directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                    2
                  </div>
                </div>
                <div className="flex justify-start md:ml-auto md:w-1/2 pl-10">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold mb-1 text-orange-700">
                      Discovery Meeting
                    </h3>
                    <p className="text-sm text-gray-600">
                      We'll schedule a call to understand your goals and discuss
                      partnership options.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                    3
                  </div>
                </div>
                <div className="flex justify-end md:w-1/2 pr-10">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold mb-1 text-orange-700">
                      Proposal Development
                    </h3>
                    <p className="text-sm text-gray-600">
                      Our team will create a customized partnership proposal
                      based on your requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                    4
                  </div>
                </div>
                <div className="flex justify-start md:ml-auto md:w-1/2 pl-10">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold mb-1 text-orange-700">
                      Agreement Finalization
                    </h3>
                    <p className="text-sm text-gray-600">
                      We'll finalize terms, sign partnership agreements, and
                      begin onboarding.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                    5
                  </div>
                </div>
                <div className="flex justify-end md:w-1/2 pr-10">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold mb-1 text-orange-700">
                      Partnership Activation
                    </h3>
                    <p className="text-sm text-gray-600">
                      Launch your partnership with integrated marketing
                      campaigns and activations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom CTA Button - Sticky */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
        <div className="relative">
          {/* Season tag above button */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-black/90 to-black/90 backdrop-blur-sm text-center text-white text-xs font-bold py-1.5 px-4 rounded-t-xl border-t border-x border-orange-500/40 transition-all duration-300">
            <span className="text-orange-400">BECOME A PARTNER</span>
          </div>

          {/* CTA Button */}
          <a
            href="#contact-form"
            className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 text-center rounded-lg transition-colors duration-300 uppercase relative overflow-hidden group"
          >
            <span className="flex items-center justify-center">
              Contact Our Team
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
          </a>
        </div>
      </div>

      {/* Add padding at the bottom to prevent content from being hidden behind the sticky CTA on mobile */}
      <div className="h-16 md:h-0 mb-4" aria-hidden="true"></div>
    </div>
  );
};

export default PartnerWithUs;
