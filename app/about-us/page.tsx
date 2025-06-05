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
          description="Scouting extraordinary players from every corner of the globe"
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
                  About RunBhumi
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  RunBhumi is not just a platform — it is a revolution in motion. Born from a bold vision to break the boundaries of access, geography, and privilege, RunBhumi is India's largest and most ambitious cricket talent discovery initiative. We are proud to be the world's first-ever televised individual cricket talent hunt, offering a rare blend of grassroots outreach, professional training, and global media exposure.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  At its core, RunBhumi is a mission-driven ecosystem that scouts, nurtures, and launches young cricketing talent from every walk of life — from metro cities to the remotest villages, and from the heart of Bharat to Indian-origin communities overseas. We exist for the dreamers who've never had a fair shot — and we exist to turn those dreams into careers.
                </p>
                <h3 className="text-2xl font-bold tracking-tighter md:text-3xl mt-8">
                  🏏 What We Do
                </h3>
                <p className="text-muted-foreground md:text-lg">
                  Through a nationwide network of on-ground trials in 36+ cities, we identify passionate, high-potential players who may never have had the platform to be seen. Shortlisted candidates then undergo an intensive 45-day Gurukul-style training camp, rooted in Indian traditions and guided by international legends and spiritual mentors. From there, they progress to our grand finale — a televised league featuring 12 teams, 150+ players, and ex-international cricketers as mentors and co-players.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  RunBhumi doesn't just stop at selection — we focus on holistic transformation. Each player experiences professional coaching, character-building mentorship, wellness and yoga practices, and real-time game exposure on national television. This multi-dimensional journey ensures that our players are not only great cricketers — but strong, grounded individuals prepared for the pressures of the professional sports world.
                </p>
                <h3 className="text-2xl font-bold tracking-tighter md:text-3xl mt-8">
                  🌍 A Global Stage for Local Talent
                </h3>
                <p className="text-muted-foreground md:text-lg">
                  RunBhumi is building bridges between dreams and opportunities. With 36 episodes of televised reality content, 32 league matches, and partnerships with media networks, digital platforms, and sports institutions, we've created a dynamic new pathway for cricket aspirants to be discovered, celebrated, and launched globally.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  We are on track to showcase 5,000+ players over the next 10 years, transforming unknown names into future stars and giving every talented player — no matter their background — the right to dream big and be seen.
                </p>
                <h3 className="text-2xl font-bold tracking-tighter md:text-3xl mt-8">
                  💡 Our Ethos
                </h3>
                <p className="text-muted-foreground md:text-lg">
                  RunBhumi is built on three timeless principles: Fairness. Discipline. Opportunity.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  We believe in a level playing field — no selections based on politics, influence, or legacy. Only performance, perseverance, and purpose matter. Our systems are automated, transparent, and monitored — ensuring merit-based growth at every level.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Our team works with unshakable integrity, blending operational expertise with a deep emotional commitment to the mission. We know the stakes for our players — and we treat every registration, every kit dispatch, every match, and every selection with that seriousness.
                </p>
                <h3 className="text-2xl font-bold tracking-tighter md:text-3xl mt-8">
                  🧭 Our Vision
                </h3>
                <p className="text-muted-foreground md:text-lg">
                  To redefine the future of global cricket by creating an international platform where every deserving player — regardless of background or nationality — gets scouted, trained by world-class coaches, and celebrated on global television, connecting cricket talent across continents and cultures.
                </p>
                <h3 className="text-2xl font-bold tracking-tighter md:text-3xl mt-8">
                  🚀 Looking Ahead
                </h3>
                <p className="text-muted-foreground md:text-lg">
                  RunBhumi is just getting started. With over 150+ players already selected, 8 ex-international players per team, and a growing media footprint, we are poised to become the IPL of cricket development — a global movement that transforms how talent is found, built, and broadcast.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Whether you're a young player, a passionate coach, a brand partner, or a cricket fan — RunBhumi welcomes you to be part of this journey. Because the future of cricket isn't just born in stadiums. It's born in streets, in dreams, and in RunBhumi.
                </p>
              </div>
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src="images/about-runbhumi.jpg"
                  width={800}
                  height={300}
                  alt="About Us"
                  className="object-cover rounded-xl"
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
              <Image
                src="/images/partners/1.png"
                alt="Sony Ten3"
                width={150}
                height={150}
                className="rounded-lg overflow-hidden shadow-md"
              />
              <Image
                src="/images/partners/2.png"
                alt="Sony Liv"
                width={150}
                height={150}
                className="rounded-lg overflow-hidden shadow-md"
              />
              <Image
                src="/images/partners/3.png"
                alt="Sony Pal"
                width={150}
                height={150}
                className="rounded-lg overflow-hidden shadow-md"
              />
              <Image
                src="/images/partners/4.png"
                alt="Fancode"
                width={150}
                height={150}
                className="rounded-lg overflow-hidden shadow-md"
              />
              <Image
                src="/images/partners/tv9.jpg"
                alt="Fancode"
                width={150}
                height={150}
                className="rounded-lg overflow-hidden shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Our Leadership Team
              </h2>
              <p className="max-w-[600px] lg:max-w-[700px] text-sm sm:text-base md:text-lg text-muted-foreground px-4">
                Meet the passionate individuals behind RunBhumi's success
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
              {/* Narendra Khanna */}
              <div className="flex flex-col items-center space-y-3 sm:space-y-4 max-w-lg mx-auto lg:max-w-none">
                <div className="rounded-xl overflow-hidden mb-2 sm:mb-3 shadow-lg">
                  <Image
                    src="/images/narendra-khanna.jpg"
                    width={160}
                    height={160}
                    alt="Narendra Khanna"
                    className="object-cover object-top w-60 h-60 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-60 lg:h-60"
                  />
                </div>
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-center">
                  Narendra Khanna
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-orange-600 dark:text-orange-400 font-medium">
                  Co-Founder & Visionary
                </p>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg leading-relaxed px-2">
                  An engineer turned sports entrepreneur, Narendra has spent 25+
                  years working across continents. His own journey of being a
                  passionate cricketer who never got the opportunity fuels
                  RunBhumi's mission—to ensure no talent goes unnoticed again.
                </p>
              </div>

              {/* Tarak Bajpai */}
              <div className="flex flex-col items-center space-y-3 sm:space-y-4 max-w-lg mx-auto lg:max-w-none">
                <div className="rounded-xl overflow-hidden mb-2 sm:mb-3 shadow-lg">
                  <Image
                    src="/images/taarak-bajpai.jpg"
                    width={160}
                    height={160}
                    alt="Tarak Bajpai"
                    className="object-cover w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-60 lg:h-60"
                  />
                </div>
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-center">
                  Tarak Bajpai
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-orange-600 dark:text-orange-400 font-medium">
                  Co-Founder & Strategist
                </p>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg leading-relaxed px-2">
                  A retired Air Force officer and business leader with over two
                  decades of experience, Tarak blends discipline, structure, and
                  cultural insight into RunBhumi. A lifelong cricket lover, he
                  is the strategic force behind the on-ground execution of
                  India's biggest cricket talent hunt.
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
                Have questions about RunBhumi ? We'd love to hear from you !
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
