"use client"

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Check, Target, Flag } from 'lucide-react';

export const VisionMissionTabs = () => {
    const [activeTab, setActiveTab] = useState("vision");

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-50 to-orange-100">
            <div className="container px-4 md:px-6 mx-auto">
                <Tabs
                    defaultValue="vision"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full max-w-4xl mx-auto"
                >
                    <div className="flex justify-center mb-8">
                        <TabsList className="grid grid-cols-2 w-full max-w-md">
                            <TabsTrigger
                                value="vision"
                                className="flex items-center gap-2 px-8 py-3 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                            >
                                <Target className="h-5 w-5" />
                                <span className="font-semibold">Vision</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="mission"
                                className="flex items-center gap-2 px-8 py-3 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                            >
                                <Flag className="h-5 w-5" />
                                <span className="font-semibold">Mission</span>
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent
                        value="vision"
                        className={`rounded-lg p-8 bg-orange-500 text-white shadow-lg transition-all duration-300 ${activeTab === "vision" ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Vision</h2>
                            <p className="md:text-lg text-white/90 leading-relaxed">
                                To <strong>redefine the future of Indian cricket</strong> by creating a national platform where every deserving
                                player—regardless of their background—gets scouted, trained, and celebrated on national television.
                            </p>
                        </div>
                    </TabsContent>

                    <TabsContent
                        value="mission"
                        className={`rounded-lg p-8 bg-white shadow-lg transition-all duration-300 ${activeTab === "mission" ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-orange-500">Our Mission</h2>
                            <ul className="space-y-4 text-gray-800">
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>To <strong>hunt, nurture, and launch</strong> the best untapped cricket talent from Bharat</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>To eliminate barriers like caste, class, geography, or politics in player selection</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>To offer high-intensity training under <strong>international legends and spiritual mentors</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>To deliver a <strong>national broadcast experience</strong>, taking players' stories to millions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>To create an <strong>annual revolution in Indian cricket</strong>, producing over <strong>500 champions in 10 years</strong></span>
                                </li>
                            </ul>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default VisionMissionTabs;