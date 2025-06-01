"use client";

import React from "react";
import {
  ArrowRight,
  Calendar,
  Trophy,
  Play,
  ChevronRight,
  Info,
  Smartphone,
  Star,
  MapPin,
  Check,
  Clock,
} from "lucide-react";
import LeftHero from "@/components/common/left-hero";

// Example custom components
const StatsCounter = () => (
  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
    <h3 className="text-xl font-bold text-white mb-4">Tournament Impact</h3>
    <div className="grid grid-cols-3 gap-4">
      {[
        { value: "50K+", label: "Participants" },
        { value: "120+", label: "Cities" },
        { value: "15+", label: "Champions" },
      ].map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
          <p className="text-sm text-gray-300">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
);

const RegistrationForm = () => (
  <div className="w-full max-w-md">
    <h3 className="text-xl font-bold text-white mb-4">Register Now</h3>
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/70"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/70"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/70"
      />
      <button className="w-full p-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-medium transition-all">
        Submit Application
      </button>
    </div>
  </div>
);

const NewsletterSignup = () => (
  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg w-full max-w-md">
    <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
    <p className="text-gray-300 mb-4">
      Get the latest news and tournament updates
    </p>
    <div className="flex gap-2">
      <input
        type="email"
        placeholder="Your Email"
        className="flex-1 p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/70"
      />
      <button className="px-4 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-medium transition-all">
        Subscribe
      </button>
    </div>
  </div>
);

// New custom components for additional examples
const FeaturedPlayers = () => (
  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg w-full max-w-md">
    <h3 className="text-xl font-bold text-white mb-4">Featured Players</h3>
    <div className="space-y-4">
      {[
        {
          name: "Rajiv Sharma",
          position: "Fast Bowler",
          rating: 4.9,
          location: "Mumbai",
        },
        {
          name: "Ananya Patel",
          position: "All-Rounder",
          rating: 4.8,
          location: "Bangalore",
        },
        {
          name: "Vikram Singh",
          position: "Batsman",
          rating: 4.7,
          location: "Delhi",
        },
      ].map((player, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
        >
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-orange-500 font-bold">
            {player.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="flex-1">
            <h4 className="text-white font-medium">{player.name}</h4>
            <p className="text-gray-400 text-sm">{player.position}</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center text-yellow-400">
              <Star size={16} className="fill-yellow-400" />
              <span className="text-white ml-1">{player.rating}</span>
            </div>
            <div className="flex items-center text-gray-400 text-xs">
              <MapPin size={12} className="mr-1" />
              {player.location}
            </div>
          </div>
        </div>
      ))}
      <button className="w-full p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-all">
        View All Players
      </button>
    </div>
  </div>
);

const UpcomingEvents = () => (
  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg w-full">
    <h3 className="text-xl font-bold text-white mb-4">Upcoming Events</h3>
    <div className="space-y-4">
      {[
        {
          name: "Regional Qualifier - North",
          date: "July 5, 2025",
          location: "Delhi Stadium",
          spots: "32 spots remaining",
        },
        {
          name: "Youth Cricket Camp",
          date: "July 2-8, 2025",
          location: "Mumbai Cricket Academy",
          spots: "18 spots remaining",
        },
        {
          name: "National Finals",
          date: "August 30, 2025",
          location: "Bangalore International Stadium",
          spots: "Qualification required",
        },
      ].map((event, index) => (
        <div key={index} className="flex flex-col p-4 bg-white/5 rounded-lg">
          <div className="flex justify-between mb-2">
            <h4 className="text-white font-medium">{event.name}</h4>
            <div className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs font-medium">
              {event.spots}
            </div>
          </div>
          <div className="flex items-center text-gray-400 text-sm mb-1">
            <Clock size={14} className="mr-2" />
            {event.date}
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <MapPin size={14} className="mr-2" />
            {event.location}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TestimonialCard = () => (
  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
    <div className="flex items-center mb-4">
      <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
        AK
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-bold text-white">Ajay Kumar</h3>
        <p className="text-gray-400">Selected in Under-19 National Team</p>
      </div>
    </div>
    <div className="mb-4">
      <div className="flex mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={18}
            className="text-yellow-400 fill-yellow-400 mr-1"
          />
        ))}
      </div>
      <p className="text-gray-300 italic">
        "RunBhumi changed my life completely. Coming from a small village in
        Rajasthan, I never thought I would get an opportunity to showcase my
        talent at the national level. The coaches and mentors at RunBhumi not
        only improved my cricket skills but also prepared me mentally for
        professional cricket."
      </p>
    </div>
    <div className="flex items-center text-sm text-gray-400">
      <Check size={16} className="text-green-500 mr-1" />
      Verified Participant
    </div>
  </div>
);

const VideoFeature = () => (
  <div className="w-full h-full min-h-[350px] rounded-xl overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end p-6">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">
          Training Highlights
        </h3>
        <p className="text-gray-300 mb-4">
          Watch our expert coaches train future cricket stars with world-class
          techniques
        </p>
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all">
          <Play size={16} />
          Watch Full Video
        </button>
      </div>
    </div>
    <video
      autoPlay
      muted
      loop
      className="object-cover w-full h-full absolute inset-0"
    >
      <source src="/cricket-training.mp4" type="video/mp4" />
    </video>
  </div>
);

export default function LeftHeroShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Page Header */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Hero Component Showcase
          </h1>
          <p className="text-gray-400">
            Demonstrating different layout options and configurations
          </p>
        </div>
      </div>

      {/* Standard Hero - Centered */}
      <LeftHero
        title="RunBhumi"
        subtitle="India's Greatest Cricket Talent Hunt"
        description="Scouting extraordinary players from every corner of the nation. Our mission is to discover hidden cricket talent and provide them with the platform they need to succeed at the highest level."
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D"
        backgroundOverlay={true}
        backgroundOverlayOpacity={0.7}
        buttons={[
          {
            text: "Register Now",
            href: "/register",
            variant: "primary",
            icon: <ArrowRight size={16} />,
          },
          {
            text: "Learn More",
            href: "/about",
            variant: "outline",
          },
        ]}
        logoVisible={true}
        animated={true}
      />

      {/* Section Divider */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Left Content with Right Image
        </h2>
        <p className="text-gray-400 mb-8">
          Content on the left side, image on the right
        </p>
      </div>

      {/* Left Content with Right Image */}
      <LeftHero
        title="Upcoming Tournaments"
        subtitle="Join the action"
        description="Experience the thrill of cricket competitions across India. Our tournaments are designed to showcase talent while providing a competitive environment that prepares players for professional cricket."
        backgroundType="color"
        backgroundSrc="#0f172a"
        layout="left-content"
        splitRatio="1/2"
        align="left"
        secondaryContentType="image"
        secondaryContentSrc="https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D"
        buttons={[
          {
            text: "View Schedule",
            href: "/schedule",
            variant: "primary",
            icon: <Calendar size={16} />,
          },
        ]}
        height="medium"
      />

      {/* Section Divider */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Right Content with Left Image
        </h2>
        <p className="text-gray-400 mb-8">
          Content on the right side, image on the left
        </p>
      </div>

      {/* Right Content with Left Image */}
      <LeftHero
        title="Training Programs"
        subtitle="Expert coaching"
        description="Learn from India's cricket legends and international coaches. Our comprehensive training programs cover all aspects of cricket - from technical skills to mental strength and tactical awareness."
        backgroundType="gradient"
        backgroundSrc="linear-gradient(135deg, #1e293b, #0f172a)"
        layout="right-content"
        splitRatio="2/3" // Content takes 2/3 of the width
        align="left"
        secondaryContentType="image"
        secondaryContentSrc="https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D"
        buttons={[
          {
            text: "Join Training",
            href: "/training",
            variant: "primary",
            icon: <Play size={16} />,
          },
          {
            text: "Learn More",
            href: "/training/details",
            variant: "outline",
            icon: <Info size={16} />,
          },
        ]}
        height="medium"
      />

      {/* Section Divider */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Left Content with Stats Component
        </h2>
        <p className="text-gray-400 mb-8">
          Content on the left side, custom stats component on the right
        </p>
      </div>

      {/* Left Content with Stats Component */}
      <LeftHero
        title="Our Impact"
        subtitle="Changing lives through cricket"
        description="RunBhumi has discovered talent from remote villages to bustling cities. We believe cricket can transform lives, build character, and create opportunities for young athletes across India."
        backgroundType="color"
        backgroundSrc="#1a202c"
        layout="left-content"
        secondaryContent={<StatsCounter />}
        secondaryContentType="component"
        align="left"
        buttons={[
          {
            text: "Success Stories",
            href: "/stories",
            variant: "primary",
            icon: <Trophy size={16} />,
          },
        ]}
        height="medium"
      />

      {/* Section Divider */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Right Content with Form Component
        </h2>
        <p className="text-gray-400 mb-8">
          Content on the right side, registration form on the left
        </p>
      </div>

      {/* Right Content with Registration Form */}
      <LeftHero
        title="Join Our Community"
        subtitle="Get started today"
        description="Become part of India's largest cricket community. By joining RunBhumi, you'll gain access to exclusive training resources, event invitations, and connect with like-minded cricket enthusiasts across the country."
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D"
        backgroundOverlay={true}
        backgroundOverlayOpacity={0.7}
        layout="right-content"
        splitRatio="1/2"
        secondaryContent={<RegistrationForm />}
        secondaryContentType="component"
        align="left"
        buttons={[
          {
            text: "Learn More",
            href: "/community",
            variant: "outline",
            icon: <ChevronRight size={16} />,
          },
        ]}
        height="full"
      />

      {/* Section Divider */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Left Content with Newsletter Signup
        </h2>
        <p className="text-gray-400 mb-8">
          Content on the left side, newsletter signup on the right
        </p>
      </div>

      {/* Left Content with Newsletter Signup */}
      <LeftHero
        title="Stay Connected"
        subtitle="Never miss an update"
        description="Get the latest news, tournament schedules, and exclusive content directly to your inbox. Our newsletter keeps you informed about upcoming events, success stories, and cricket tips from experts."
        backgroundType="gradient"
        backgroundSrc="linear-gradient(135deg, #4338ca, #6366f1)"
        layout="left-content"
        splitRatio="2/3"
        secondaryContent={<NewsletterSignup />}
        secondaryContentType="component"
        align="left"
        buttons={[
          {
            text: "Follow Us",
            href: "/social",
            variant: "primary",
            icon: <Smartphone size={16} />,
          },
        ]}
        height="medium"
      />

      {/* Section Divider */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Right Content with Video
        </h2>
        <p className="text-gray-400 mb-8">
          Content on the right side, video on the left
        </p>
      </div>

      {/* Right Content with Video */}
      <LeftHero
        title="Elite Training"
        subtitle="Learn from the best"
        description="Our elite training program offers specialized coaching from former international cricketers and certified professionals. The curriculum is designed to help players develop technical skills, tactical awareness, and mental strength."
        backgroundType="color"
        backgroundSrc="#0f172a"
        layout="right-content"
        splitRatio="1/2"
        secondaryContent={<VideoFeature />}
        secondaryContentType="component"
        align="left"
        buttons={[
          {
            text: "Apply Now",
            href: "/elite-training",
            variant: "primary",
            icon: <ArrowRight size={16} />,
          },
        ]}
        height="medium"
      />

      {/* Section Divider */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Left Content with Featured Players
        </h2>
        <p className="text-gray-400 mb-8">
          Content on the left side, featured players on the right
        </p>
      </div>

      {/* Left Content with Featured Players */}
      <LeftHero
        title="Success Stories"
        subtitle="From RunBhumi to the world stage"
        description="Meet the players who have gone through RunBhumi's programs and are now making their mark in domestic and international cricket. Our talent identification process has helped discover some of the most promising cricket talents in India."
        backgroundType="gradient"
        backgroundSrc="linear-gradient(135deg, #1e3a8a, #3b82f6)"
        layout="left-content"
        splitRatio="1/2"
        secondaryContent={<FeaturedPlayers />}
        secondaryContentType="component"
        align="left"
        buttons={[
          {
            text: "View All Success Stories",
            href: "/success-stories",
            variant: "primary",
            icon: <Trophy size={16} />,
          },
        ]}
        height="medium"
      />

      {/* Section Divider */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Right Content with Upcoming Events
        </h2>
        <p className="text-gray-400 mb-8">
          Content on the right side, upcoming events on the left
        </p>
      </div>

      {/* Right Content with Upcoming Events */}
      <LeftHero
        title="Cricket Calendar"
        subtitle="Plan your cricket journey"
        description="Stay updated with all the tournaments, trials, and training camps organized by RunBhumi across India. Our carefully planned calendar ensures opportunities for players of all age groups and skill levels throughout the year."
        backgroundType="color"
        backgroundSrc="#1e293b"
        layout="right-content"
        splitRatio="1/2"
        secondaryContent={<UpcomingEvents />}
        secondaryContentType="component"
        align="left"
        buttons={[
          {
            text: "Full Calendar",
            href: "/calendar",
            variant: "primary",
            icon: <Calendar size={16} />,
          },
        ]}
        height="medium"
      />

      {/* Section Divider */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Left Content with Testimonial
        </h2>
        <p className="text-gray-400 mb-8">
          Content on the left side, testimonial on the right
        </p>
      </div>

      {/* Left Content with Testimonial */}
      <LeftHero
        title="Player Testimonials"
        subtitle="Hear from our athletes"
        description="Our players' success is our greatest achievement. Hear directly from those who have been part of RunBhumi programs and how it has impacted their cricket careers and personal development."
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D"
        backgroundOverlay={true}
        backgroundOverlayOpacity={0.8}
        layout="left-content"
        splitRatio="1/2"
        secondaryContent={<TestimonialCard />}
        secondaryContentType="component"
        align="left"
        buttons={[
          {
            text: "More Testimonials",
            href: "/testimonials",
            variant: "outline",
            icon: <ArrowRight size={16} />,
          },
        ]}
        height="medium"
      />

      {/* Footer */}
      <div className="bg-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>RunBhumi Hero Component Showcase</p>
          <p className="text-sm mt-2">
            All designs and components for demonstration purposes
          </p>
        </div>
      </div>
    </div>
  );
}
