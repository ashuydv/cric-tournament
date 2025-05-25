"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import LeftHero from "@/components/common/left-hero";

const PartnershipTabs = () => {
  const [activeTab, setActiveTab] = useState("zone");

  return (
    <div className="">
      <LeftHero
        title="Partner With Us"
        description="The world's fastest growing cricket talent hunt, from local streets to global stardom, a chance to become an international cricket sensation by competing in this groundbreaking reality show and sharing the dressing room with legendary cricketers from across the cricket-playing nations worldwide"
        backgroundType="color"
        backgroundSrc="#111"
        height="small"
        animated={true}
        parallaxEnabled={true}
        parallaxSpeed={0.7}
      />
      {/* <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Franchise Partnership Opportunities
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Join RunBhumi's cricket revolution with exclusive franchise
          opportunities at state, zone, and city levels. Build your cricket
          business and be part of India's fastest growing cricket talent hunt.
        </p>
      </div> */}

      {/* Partnership Types Tabs */}
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("zone")}
              className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === "zone"
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Zone Franchise
            </button>
            <button
              onClick={() => setActiveTab("state")}
              className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === "state"
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              State Franchise
            </button>

            <button
              onClick={() => setActiveTab("city")}
              className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === "city"
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              City Franchise
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {activeTab === "state" && (
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      State Franchise
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Become a state-level master franchise holder and control
                      the RunBhumi ecosystem across an entire state. This
                      premier opportunity offers maximum territory control and
                      revenue potential.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Control all zone and city franchises within your state
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Investment: INR 2 CRORES + GST (UP, Maharashtra,
                          Delhi)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Investment: INR 1.25 CRORES + GST (Other States)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Same fee for 3 years with 25% increment in Year 4
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Appoint zone and city franchisees and earn revenue
                          share
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Potential to earn approximately 3x your investment in
                          3 years
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 rounded-lg overflow-hidden h-64 md:h-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                    <div className="absolute bottom-4 left-4 z-20 bg-black/70 text-white text-xs py-1 px-2 rounded">
                      State Coverage
                    </div>
                    <div className="h-full w-full bg-orange-500 flex items-center justify-center">
                      <span className="text-white text-5xl font-bold">
                        STATE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "zone" && (
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Zone Franchise
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A zone is group of states divided into north, south,
                      central, east and west zones.
                      {/* Control a specific zone
                      within and build a network of city franchisees.
                      Zone franchisees work directly with the state master
                      franchise and manage multiple cities within their
                      territory. */}
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Remit 25% of gross fee charged to candidates to the
                          state franchise
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Remit 20% of gross fee generated from city franchises
                          to the state franchise
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Remit 10% of sponsor revenue from trials to the state
                          franchise
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Retain majority of revenue generated from your zone
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Appoint city franchisees within your zone
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Unique opportunity to earn approximately 3x investment
                          in 3 years
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 rounded-lg overflow-hidden h-64 md:h-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                    <div className="absolute bottom-4 left-4 z-20 bg-black/70 text-white text-xs py-1 px-2 rounded">
                      Zone Coverage
                    </div>
                    <div className="h-full w-full bg-orange-600 flex items-center justify-center">
                      <span className="text-white text-5xl font-bold">
                        ZONE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "city" && (
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      City Franchise
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Operate the RunBhumi platform at the city level with the
                      lowest entry point. City franchisees conduct trials,
                      manage local teams, and work closely with zone
                      franchisees.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Investment: INR 55 LAKHS + GST
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          FLAT/BASE PREMIUM (PRE-LAUNCH/AUCTION)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Same fee for 3 years with 25% increment in Year 4
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Organize cricket trials and events in your city
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Opportunity to earn approximately 3x revenue in 3
                          years
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Ideal for cricket entrepreneurs and local sports
                          businesses
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 rounded-lg overflow-hidden h-64 md:h-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                    <div className="absolute bottom-4 left-4 z-20 bg-black/70 text-white text-xs py-1 px-2 rounded">
                      City Coverage
                    </div>
                    <div className="h-full w-full bg-orange-700 flex items-center justify-center">
                      <span className="text-white text-5xl font-bold">
                        CITY
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Franchise Benefits Across All Levels
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-orange-600 mb-2">
                Brand Association
              </h4>
              <p className="text-sm text-gray-600">
                Connect with India's fastest growing cricket talent hunt
                platform and share the RunBhumi brand equity
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-orange-600 mb-2">
                Multiple Revenue Streams
              </h4>
              <p className="text-sm text-gray-600">
                Generate income through participant fees, sponsorships,
                merchandise, and sub-franchising opportunities
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-orange-600 mb-2">Media Exposure</h4>
              <p className="text-sm text-gray-600">
                Benefit from national media coverage and exposure through
                RunBhumi's broadcast partnerships
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-orange-600 mb-2">
                Proven Business Model
              </h4>
              <p className="text-sm text-gray-600">
                Join a structured system with established processes for player
                selection, team management, and revenue generation
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-orange-600 mb-2">
                Technical Support
              </h4>
              <p className="text-sm text-gray-600">
                Receive complete operational support, training, and ongoing
                assistance from the RunBhumi team
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-orange-600 mb-2">
                Cricket Development
              </h4>
              <p className="text-sm text-gray-600">
                Contribute to grassroots cricket development and help discover
                the next generation of cricket stars
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipTabs;
