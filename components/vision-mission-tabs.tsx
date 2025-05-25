"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, Target, Flag, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const VisionMissionTabs = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-start gap-4 mb-8">
          <button
            onClick={() => setActiveTab("vision")}
            className={`
            ${
              activeTab === "vision"
                ? "bg-orange-500 text-white shadow-xl"
                : "bg-white text-gray-800 shadow-md hover:bg-orange-50"
            } 
            font-medium px-8 py-6 
            transition-all duration-300 text-base
            flex items-center gap-2 rounded-xl
            italic uppercase w-full sm:w-auto
          `}
          >
            <Target className="h-5 w-5" />
            <span className="font-semibold">Our Vision</span>
            {activeTab === "vision" && <ChevronRight size={18} />}
          </button>

          <button
            onClick={() => setActiveTab("mission")}
            className={`
            ${
              activeTab === "mission"
                ? "bg-orange-500 text-white shadow-xl"
                : "bg-white text-gray-800 shadow-md hover:bg-orange-50"
            } 
            font-medium px-8 py-6 
            transition-all duration-300 text-base
            flex items-center gap-2 rounded-xl
            italic uppercase w-full sm:w-auto
          `}
          >
            <Flag className="h-5 w-5" />
            <span className="font-semibold">Our Mission</span>
            {activeTab === "mission" && <ChevronRight size={18} />}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "vision" ? (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl p-8 bg-orange-500 text-white shadow-lg"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-playfair">
                  Our Vision
                </h2>
                <p className="md:text-lg text-white/90 leading-relaxed">
                  To <strong>redefine the future of global cricket</strong> by
                  creating an international platform where every deserving
                  player, regardless of their background or nationality, gets
                  scouted, trained by world-class coaches, and celebrated on
                  television networks worldwide, connecting cricket talent
                  across continents and cultures.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="mission"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl p-8 bg-white shadow-lg"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-orange-500 font-playfair">
                  Our Mission
                </h2>
                <ul className="space-y-4 text-gray-800">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>
                      To <strong>hunt, nurture, and launch</strong> the best
                      untapped cricket talent from Bharat and overseas
                      Bharatiyas
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>
                      To eliminate barriers like caste, class, geography, or
                      politics in player selection
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>
                      To offer high-intensity training under{" "}
                      <strong>
                        international legends and spiritual mentors
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>
                      To deliver a <strong>global broadcast experience</strong>,
                      taking players' stories to millions worldwide
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>
                      To create an{" "}
                      <strong>annual revolution in global cricket</strong>,
                      producing over{" "}
                      <strong>5000+ champions in 10 years</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VisionMissionTabs;
