import Image from "next/image";
import Header from "@/components/header";
import {
  Trophy,
  Users,
  Calendar,
  MapPin,
  Award,
  Star,
  Tv,
  Heart,
  Shield,
  Building,
  ArrowRight,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";
import VisionMissionTabs from "@/components/vision-mission-tabs";
import KeyFactsSection from "@/components/key-facts-section";
import Hero from "@/components/common/hero";
import { EventHero } from "@/components/hero/event-annoucement";
import { MatchScheduleHero } from "@/components/hero/match-schedule";
import { SlideshowHero } from "@/components/hero/slideshow";
import { StandardHero } from "@/components/hero/standard";
import { StatsHero } from "@/components/hero/stats";
import { TestimonialHero } from "@/components/hero/testimonial";
import { VideoHero } from "@/components/hero/with-video";
import ShuffleHero from "@/components/hero/shuffle-hero";
import ShuffleGrid from "@/components/hero/shuffle-grid";
import LeftHero from "@/components/common/left-hero";
import DynamicButton from "@/components/dynamic-button";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <LeftHero
          title="RunBhumi"
          subtitle="India's Greatest Cricket Talent Hunt"
          description="Scouting extraordinary players from every corner of the nation"
          backgroundType="image"
          backgroundSrc="images/3.png"
          height="small"
          animated={true}
          parallaxEnabled={true}
          parallaxSpeed={0.7}
        />

        {/* <EventHero />
                <ShuffleHero /> */}
        {/* <MatchScheduleHero />
                <SlideshowHero />
                <StandardHero />
                <StatsHero />
                <TestimonialHero />
                <VideoHero /> */}

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Story
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  RunBhumi is not just a platform—it's a battlefield where raw
                  cricketing dreams come alive. We are India's
                  <strong>
                    {" "}
                    first-ever televised individual cricket talent hunt
                  </strong>
                  , built to scout, train, and launch extraordinary players from
                  every corner of the nation—from bustling cities to the most
                  remote villages.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  This is a national movement for the youth who never had
                  access, exposure, or opportunity but possess unmatched passion
                  and potential. RunBhumi gives them the stage, the training,
                  the spotlight—and a shot at the big league.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  With trials held across India, a rigorous 45-day cricket
                  Gurukul led by legendary cricketers, and a grand league
                  broadcast nationwide,{" "}
                  <strong>
                    RunBhumi transforms untold stories into national sensations
                  </strong>
                  .
                </p>
              </div>
              {/* <ShuffleGrid /> */}
              <div className="relative w-full h-full border-2 border-orange-900 overflow-hidden rounded-xl">
                <Image
                  src="images/21.png"
                  width={800}
                  height={300}
                  alt="Narendra Khanna"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts Section */}
        <KeyFactsSection />

        {/* Broadcast Section */}
        <section className="w-full py-12 md:py-20 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                Proposed Partners
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="bg-white p-4 rounded-lg border-2 border-black shadow-sm">
                <p className="font-semibold italic uppercase">Sony Ten 3</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-black shadow-sm">
                <p className="font-semibold italic uppercase">SonyLiv</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-black shadow-sm">
                <p className="font-semibold italic uppercase">Sony Pal</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-black shadow-sm">
                <p className="font-semibold italic uppercase">FanCode</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Leadership Team
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Meet the passionate individuals behind RunBhumi's success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center space-y-3">
                <div className="h-40 w-40 rounded-full overflow-hidden mb-3">
                  <Image
                    src="/placeholder.svg?height=160&width=160&text=Narendra"
                    width={160}
                    height={160}
                    alt="Narendra Khanna"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl">Narendra Khanna</h3>
                <p className="text-sm text-orange-600 dark:text-orange-400">
                  Founder & Visionary
                </p>
                <p className="text-sm text-muted-foreground text-center max-w-md">
                  An engineer turned sports entrepreneur, Narendra has spent 25+
                  years working across continents. His own journey of being a
                  passionate cricketer who never got the opportunity fuels
                  RunBhumi's mission—to ensure no talent goes unnoticed again.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <div className="h-40 w-40 rounded-full overflow-hidden mb-3">
                  <Image
                    src="/placeholder.svg?height=160&width=160&text=Tarak"
                    width={160}
                    height={160}
                    alt="Tarak Bajpai"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl">Tarak Bajpai</h3>
                <p className="text-sm text-orange-600 dark:text-orange-400">
                  Co-Founder & Strategist
                </p>
                <p className="text-sm text-muted-foreground text-center max-w-md">
                  A retired Air Force officer and business leader, Tarak blends
                  discipline, structure, and cultural insight into RunBhumi. A
                  lifelong cricket lover, he is the strategic force behind the
                  on-ground execution of India's biggest cricket talent hunt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <VisionMissionTabs />

        {/* Contact CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Get In Touch
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Have questions about RunBhumi? We'd love to hear from you!
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <DynamicButton href="/register" variant="primary">
                  Contact Us
                </DynamicButton>

                <DynamicButton href="/trials" variant="outline">
                  Register for Trials
                </DynamicButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
