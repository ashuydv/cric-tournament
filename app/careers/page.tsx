"use client";

import React, { useState } from "react";
import LeftHero from "@/components/common/left-hero";
import {
  Briefcase,
  Layers,
  Users,
  Award,
  Clock,
  MapPin,
  ChevronRight,
  Search,
  Filter,
  Star,
  X,
  DollarSign,
  CheckCircle,
  Trophy,
  Target,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Define the Job type interface
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  featured: boolean;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const Career = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Enhanced job listings with detailed information
  const jobs = [
    // Featured positions
    {
      id: 7,
      title: "Sales Manager",
      department: "Sales",
      location: "Mumbai",
      type: "Full-time",
      experience: "4-6 years",
      featured: true,
      salary: "₹8-12 LPA",
      description:
        "Lead our sales team to drive revenue growth and expand our market presence in the cricket talent hunt programs.",
      responsibilities: [
        "Develop and implement strategic sales plans to achieve revenue targets",
        "Manage and mentor a team of sales representatives",
        "Build and maintain relationships with key clients and stakeholders",
        "Identify new business opportunities in cricket talent development",
        "Collaborate with marketing team on promotional campaigns",
        "Prepare sales reports and forecasts for senior management",
      ],
      requirements: [
        "Bachelor's degree in Business, Marketing, or related field",
        "4-6 years of sales management experience, preferably in sports/entertainment",
        "Proven track record of achieving sales targets",
        "Strong leadership and team management skills",
        "Excellent communication and negotiation abilities",
        "Knowledge of cricket industry is a plus",
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Health insurance for you and family",
        "Flexible working hours",
        "Professional development opportunities",
        "Access to cricket matches and events",
      ],
    },
    {
      id: 8,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Delhi",
      type: "Full-time",
      experience: "5-7 years",
      featured: true,
      salary: "₹10-15 LPA",
      description:
        "Drive brand awareness and marketing strategies for RunBhumi across India.",
      responsibilities: [
        "Develop comprehensive marketing strategies",
        "Manage digital marketing campaigns across multiple platforms",
        "Oversee brand partnerships and sponsorship opportunities",
        "Lead creative campaigns for talent hunt program promotion",
        "Analyze market trends and competitor activities",
        "Coordinate with PR agencies and media partners",
        "Manage marketing budget and ROI optimization",
      ],
      requirements: [
        "Master's degree in Marketing, Communications, or related field",
        "5-7 years of marketing experience in sports or entertainment industry",
        "Strong digital marketing expertise (SEO, SEM, Social Media)",
        "Experience with brand management and campaign development",
        "Data-driven approach with analytics skills",
        "Creative thinking and strategic planning abilities",
        "Passion for cricket and sports marketing",
      ],
      benefits: [
        "Competitive compensation package",
        "Performance-based incentives",
        "Health and wellness benefits",
        "Creative freedom and autonomy",
        "Networking opportunities in sports industry",
      ],
    },
    {
      id: 9,
      title: "Territory Marketing Manager",
      department: "Marketing",
      location: "Pan India",
      type: "Full-time",
      experience: "3-5 years",
      featured: true,
      salary: "₹6-10 LPA",
      description:
        "Manage regional marketing initiatives and build local partnerships to expand RunBhumi's presence across different territories in India.",
      responsibilities: [
        "Execute regional marketing strategies across assigned territories",
        "Build relationships with local cricket clubs and academies",
        "Organize regional talent hunt events and promotions",
        "Coordinate with local media and influencers",
        "Monitor regional market performance and trends",
        "Adapt national campaigns for local markets",
        "Travel extensively to manage territory operations",
      ],
      requirements: [
        "Bachelor's degree in Marketing, Business, or related field",
        "3-5 years of territory/regional marketing experience",
        "Strong regional market knowledge",
        "Excellent communication skills in local languages",
        "Willingness to travel extensively (70-80%)",
        "Event management and coordination skills",
        "Understanding of local cricket ecosystems",
      ],
      benefits: [
        "Travel allowances and accommodation",
        "Regional performance bonuses",
        "Health insurance coverage",
        "Flexible work arrangements",
        "Career growth opportunities",
      ],
    },
    // Regular positions
    {
      id: 1,
      title: "Event Manager",
      department: "Operations",
      location: "Mumbai",
      type: "Full-time",
      experience: "3-5 years",
      featured: false,
      salary: "₹5-8 LPA",
      description:
        "Plan and execute talent hunt events ensuring seamless operations and exceptional participant experience.",
      responsibilities: [
        "Plan and coordinate proagrams from conception to completion",
        "Manage venue selection, logistics, and vendor relationships",
        "Oversee talent hunt event organization across regions",
        "Coordinate with teams, officials, and broadcast partners",
        "Ensure compliance with cricket board regulations",
        "Manage event budgets and timelines",
      ],
      requirements: [
        "Bachelor's degree in Event Management, Sports Management, or related field",
        "3-5 years of event management experience",
        "Knowledge of event operations",
        "Strong project management and organizational skills",
        "Ability to work under pressure and tight deadlines",
        "Excellent vendor and stakeholder management",
      ],
      benefits: [
        "Competitive salary package",
        "Health insurance",
        "Professional development",
        "Event industry networking",
        "Performance bonuses",
      ],
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Delhi",
      type: "Full-time",
      experience: "2-4 years",
      featured: false,
      salary: "₹4-7 LPA",
      description:
        "Drive digital engagement and online presence for RunBhumi programs.",
      responsibilities: [
        "Manage social media channels and content strategy",
        "Execute digital advertising campaigns",
        "Optimize website for search engines (SEO)",
        "Create engaging content for digital platforms",
        "Analyze digital marketing metrics and performance",
        "Collaborate with creative team on digital assets",
      ],
      requirements: [
        "Bachelor's degree in Digital Marketing, Communications, or related field",
        "2-4 years of digital marketing experience",
        "Proficiency in Google Ads, Facebook Ads, and analytics tools",
        "Strong content creation and copywriting skills",
        "Knowledge of SEO/SEM best practices",
        "Creative mindset with analytical thinking",
      ],
      benefits: [
        "Competitive salary",
        "Skill development opportunities",
        "Flexible working hours",
        "Health insurance",
        "Performance incentives",
      ],
    },
    {
      id: 3,
      title: "Sports Analyst",
      department: "Technical",
      location: "Bangalore",
      type: "Full-time",
      experience: "2-5 years",
      featured: false,
      salary: "₹6-10 LPA",
      description:
        "Analyze player performance data and provide insights for talent identification and development programs.",
      responsibilities: [
        "Analyze player statistics and performance metrics",
        "Create detailed player assessment reports",
        "Develop performance tracking systems",
        "Support talent scout decisions with data insights",
        "Maintain player databases and analytics tools",
        "Present findings to coaching and management teams",
      ],
      requirements: [
        "Bachelor's degree in Sports Science, Statistics, or Data Analytics",
        "2-5 years of sports analytics experience",
        "Proficiency in data analysis tools (Excel, R, Python)",
        "Strong understanding of cricket statistics",
        "Excellent analytical and presentation skills",
        "Knowledge of performance tracking technologies",
      ],
      benefits: [
        "Competitive compensation",
        "Technology training programs",
        "Health insurance",
        "Flexible work environment",
        "Sports industry exposure",
      ],
    },
    {
      id: 4,
      title: "Player Scout",
      department: "Technical",
      location: "Pan India",
      type: "Contract",
      experience: "5+ years",
      featured: false,
      salary: "₹4-6 LPA",
      description:
        "Identify and evaluate cricket talent across India for our talent hunt program and league participation.",
      responsibilities: [
        "Scout cricket talent at grassroots and academy levels",
        "Evaluate player skills and potential",
        "Maintain detailed scouting reports",
        "Build relationships with local cricket communities",
        "Attend matches and talent hunt events",
        "Recommend players for development programs",
      ],
      requirements: [
        "Extensive cricket playing or coaching experience (5+ years)",
        "Deep understanding of cricket techniques and tactics",
        "Strong observation and evaluation skills",
        "Willingness to travel extensively",
        "Good communication and networking abilities",
        "Certification in cricket coaching preferred",
      ],
      benefits: [
        "Contract-based compensation",
        "Travel and accommodation expenses",
        "Cricket industry networking",
        "Flexible schedule",
        "Performance-based bonuses",
      ],
    },
    {
      id: 5,
      title: "Content Writer",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
      experience: "1-3 years",
      featured: false,
      salary: "₹2-4 LPA",
      description:
        "Create engaging content for RunBhumi's digital platforms, focusing on cricket stories and talent development narratives.",
      responsibilities: [
        "Write compelling content for website and social media",
        "Create player profiles and success stories",
        "Develop match reports and analyses",
        "Craft email newsletters and marketing copy",
        "Collaborate with marketing team on content strategy",
        "Maintain brand voice and content guidelines",
      ],
      requirements: [
        "Bachelor's degree in Journalism, English, or Communications",
        "1-3 years of content writing experience",
        "Strong writing and editing skills",
        "Knowledge of cricket and sports terminology",
        "SEO content writing experience",
        "Ability to work independently in remote setting",
      ],
      benefits: [
        "Flexible part-time schedule",
        "Remote work opportunity",
        "Competitive hourly rates",
        "Portfolio building opportunities",
        "Sports industry exposure",
      ],
    },
    {
      id: 6,
      title: "Video Editor",
      department: "Media",
      location: "Mumbai",
      type: "Full-time",
      experience: "2-4 years",
      featured: false,
      salary: "₹4-7 LPA",
      description:
        "Create compelling video content for reality show, and digital marketing campaigns.",
      responsibilities: [
        "Edit highlights and match footage",
        "Create promotional videos for talent hunt events",
        "Develop social media video content",
        "Collaborate with marketing team on video campaigns",
        "Manage video archives and asset libraries",
        "Ensure brand consistency across video content",
      ],
      requirements: [
        "Bachelor's degree in Film, Media Production, or related field",
        "2-4 years of video editing experience",
        "Proficiency in Adobe Premiere Pro, After Effects, and Final Cut Pro",
        "Strong storytelling and creative skills",
        "Knowledge of sports video production",
        "Ability to work under tight deadlines",
      ],
      benefits: [
        "Competitive salary",
        "Creative freedom",
        "Health insurance",
        "Equipment and software access",
        "Entertainment industry networking",
      ],
    },
    // Cricket talent hunt specific positions
    {
      id: 10,
      title: "Talent Scout Coordinator",
      department: "Talent Hunt",
      location: "Pan India",
      type: "Full-time",
      experience: "3-5 years",
      featured: false,
      salary: "₹6-9 LPA",
      description:
        "Lead regional talent identification programs and coordinate with local cricket academies to discover emerging cricket stars.",
      responsibilities: [
        "Coordinate regional talent hunt programs",
        "Manage relationships with cricket academies and clubs",
        "Oversee scouting network operations",
        "Organize talent identification events",
        "Maintain player databases and tracking systems",
        "Collaborate with coaches and development staff",
      ],
      requirements: [
        "Bachelor's degree in Sports Management or related field",
        "3-5 years of sports administration experience",
        "Strong cricket knowledge and network",
        "Excellent organizational and coordination skills",
        "Willingness to travel extensively",
        "Leadership and team management abilities",
      ],
      benefits: [
        "Competitive salary package",
        "Travel allowances",
        "Health insurance",
        "Professional development",
        "Cricket industry networking",
      ],
    },
    {
      id: 11,
      title: "Cricket Talent Analyst",
      department: "Talent Hunt",
      location: "Bangalore",
      type: "Full-time",
      experience: "2-4 years",
      featured: false,
      salary: "₹5-8 LPA",
      description:
        "Analyze player performance data and provide insights for talent development and selection processes.",
      responsibilities: [
        "Analyze player performance metrics and statistics",
        "Create comprehensive talent assessment reports",
        "Develop predictive models for player potential",
        "Support selection committees with data insights",
        "Track player development progress",
        "Maintain analytics databases and tools",
      ],
      requirements: [
        "Bachelor's degree in Statistics, Data Science, or Sports Analytics",
        "2-4 years of data analysis experience",
        "Proficiency in statistical software and programming",
        "Strong cricket knowledge and understanding",
        "Excellent analytical and presentation skills",
        "Experience with sports performance metrics",
      ],
      benefits: [
        "Competitive compensation",
        "Technology training",
        "Health insurance",
        "Research opportunities",
        "Sports analytics exposure",
      ],
    },
    {
      id: 12,
      title: "Regional Talent Development Manager",
      department: "Talent Hunt",
      location: "Multiple Cities",
      type: "Full-time",
      experience: "4-7 years",
      featured: false,
      salary: "₹8-12 LPA",
      description:
        "Oversee talent development programs in assigned regions and manage training facilities and coaching staff.",
      responsibilities: [
        "Manage regional talent development centers",
        "Oversee coaching staff and training programs",
        "Coordinate with local cricket boards and associations",
        "Monitor player development progress",
        "Organize regional leagues and showcases",
        "Maintain facility operations and standards",
      ],
      requirements: [
        "Master's degree in Sports Management or related field",
        "4-7 years of sports program management experience",
        "Strong cricket coaching or administration background",
        "Excellent leadership and management skills",
        "Regional sports network knowledge",
        "Program development and implementation expertise",
      ],
      benefits: [
        "Attractive salary package",
        "Regional autonomy",
        "Health and wellness benefits",
        "Professional development",
        "Leadership opportunities",
      ],
    },
  ];

  // Filter jobs based on department and search term
  const filteredJobs = jobs.filter((job) => {
    const matchesFilter =
      filter === "all" || job.department.toLowerCase() === filter.toLowerCase();
    const matchesSearch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openJobModal = (job: any) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeJobModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <LeftHero
        title="Careers at RunBhumi"
        description="Join our team and be part of India's most exciting cricket talent hunt program"
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop"
        height="small"
        animated={true}
        parallaxEnabled={true}
        parallaxSpeed={0.7}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Join Our Team
          </h2>
          <p className="text-black max-w-3xl mx-auto">
            At <b>RunBhumi</b>, we welcome professionals from diverse
            backgrounds who are passionate about building meaningful experiences
            and contributing to something larger than themselves.
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="p-4 bg-orange-600 text-white">
            <h3 className="text-xl font-bold">Why Join RunBhumi?</h3>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-orange-600 mr-3" />
                  <h4 className="font-semibold">Impactful Work</h4>
                </div>
                <p className="text-black">
                  Be part of a team that's revolutionizing cricket in India,
                  discovering new talent, and creating opportunities for
                  emerging players to shine on national and international
                  stages.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-orange-600 mr-3" />
                  <h4 className="font-semibold">Great Culture</h4>
                </div>
                <p className="text-black">
                  Work in a collaborative, inclusive environment with passionate
                  professionals who love cricket and are committed to nurturing
                  the next generation of cricket stars.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Layers className="h-6 w-6 text-orange-600 mr-3" />
                  <h4 className="font-semibold">Growth Opportunities</h4>
                </div>
                <p className="text-black">
                  Develop your skills and advance your career in a fast-growing
                  sports entertainment company with expanding talent development
                  programs across India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Listings Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">
            Current Openings
          </h2>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="relative md:w-1/4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out appearance-none"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Departments</option>
                <option value="Operations">Operations</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Technical">Technical</option>
                <option value="Media">Media</option>
                <option value="Talent Hunt">Talent Hunt</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <ChevronRight className="h-4 w-4 transform rotate-90" />
              </div>
            </div>
          </div>

          {/* Jobs List */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className={`bg-white p-6 rounded-lg shadow-md relative overflow-hidden border-l-4 ${
                    job.featured ? "border-orange-500" : "border-gray-200"
                  } hover:shadow-lg transition duration-300`}
                >
                  {job.featured && (
                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold py-1 px-3 transform translate-x-5 -translate-y-1 rotate-45">
                      Featured
                    </div>
                  )}
                  <div className="md:flex md:justify-between md:items-center">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-black mb-1">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center text-sm text-black mb-2">
                        <div className="flex items-center mr-4 mb-2 md:mb-0">
                          <Briefcase className="h-4 w-4 mr-1 text-orange-500" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center mr-4 mb-2 md:mb-0">
                          <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center mr-4 mb-2 md:mb-0">
                          <Clock className="h-4 w-4 mr-1 text-orange-500" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center mr-4 mb-2 md:mb-0">
                          <Star className="h-4 w-4 mr-1 text-orange-500" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center mb-2 md:mb-0">
                          <DollarSign className="h-4 w-4 mr-1 text-orange-500" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                      <p className="text-black text-sm">{job.description}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => openJobModal(job)}
                        className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-300"
                      >
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 bg-white rounded-lg shadow">
                <p className="text-black">
                  No job openings match your criteria. Please try another
                  search.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        {/* <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">
            Employee Benefits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Modern Office
              </h3>
              <p className="text-black">
                Work in our state-of-the-art facilities with all the amenities
                you need, including cricket viewing areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Learning & Development
              </h3>
              <p className="text-black">
                Access to online courses, workshops, and professional
                certifications to advance your career and skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Health & Wellness
              </h3>
              <p className="text-black">
                Comprehensive health insurance, mental health support, and
                on-site fitness facilities to keep you at your best.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Flexible Hours
              </h3>
              <p className="text-black">
                Work-life balance with flexible scheduling, remote work options,
                and unlimited PTO policy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Competitive Salary
              </h3>
              <p className="text-black">
                Market-leading compensation packages with performance bonuses,
                stock options, and annual salary reviews.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Team Events
              </h3>
              <p className="text-black">
                Regular team building activities, company retreats, celebration
                parties, and networking events with colleagues.
              </p>
            </div>
          </div>
        </div> */}

        {/* Life at RunBhumi Section */}
        {/* <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">
            Life at RunBhumi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Team collaboration"
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  Collaborative Environment
                </h3>
                <p className="text-black">
                  We foster a culture of teamwork and collaboration, where every
                  voice is heard and valued in our mission to develop cricket
                  talent.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
                  alt="Team planning session"
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  Continuous Learning
                </h3>
                <p className="text-black">
                  We invest in our employees' growth with training programs,
                  cricket coaching certifications, and learning opportunities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/party.jpg"
                  alt="Office celebration"
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  Fun & Celebrations
                </h3>
                <p className="text-black">
                  We work hard and celebrate our successes with team events,
                  cricket matches, and tournament celebrations.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Application Process */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="p-4 bg-orange-600 text-white">
            <h3 className="text-xl font-bold">Our Hiring Process</h3>
          </div>

          <div className="p-6">
            <div className="relative">
              {/* Process Timeline */}
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-orange-200"></div>

              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-orange-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Application Review
                  </h4>
                  <p className="text-black">
                    Our recruitment team reviews all applications and shortlists
                    candidates based on qualifications and experience.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-orange-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Initial Interview
                  </h4>
                  <p className="text-black">
                    Shortlisted candidates are invited for a phone or video
                    interview to discuss their experience and fit for the role.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-orange-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Technical Assessment
                  </h4>
                  <p className="text-black">
                    Depending on the role, candidates may be asked to complete a
                    skills assessment or case study.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-orange-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Final Interview
                  </h4>
                  <p className="text-black">
                    Meet with the team and department head to discuss the role
                    in detail and learn more about RunBhumi.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-orange-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Offer & Onboarding
                  </h4>
                  <p className="text-black">
                    Successful candidates receive an offer letter and begin our
                    comprehensive onboarding program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team and
              contribute to India's cricket talent development ecosystem.
            </p>
            <Link
              href="/careers/apply"
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Submit Resume
            </Link>
          </div>
        </div>
      </div>

      {/* Job Details Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h2 className="text-2xl font-bold text-black mr-3">
                    {selectedJob.title}
                  </h2>
                  {selectedJob.featured && (
                    <span className="bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center text-sm text-black gap-4">
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1 text-orange-500" />
                    <span>{selectedJob.department}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-orange-500" />
                    <span>{selectedJob.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-orange-500" />
                    <span>{selectedJob.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-orange-500" />
                    <span>{selectedJob.salary}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeJobModal}
                className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-black" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Job Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Job Description
                </h3>
                <p className="text-black leading-relaxed">
                  {selectedJob.description}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Key Responsibilities
                </h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-black">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-black">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Benefits & Perks
                </h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-black">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Ready to Join Our Team?
                  </h3>
                  <p className="text-black mb-4">
                    Take the next step in your career and become part of India's
                    most exciting cricket organization.
                  </p>
                  <Link
                    href={`/career/apply?job=${selectedJob.id}`}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center"
                  >
                    Apply Now
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Fixed Bottom CTA Button - Sticky */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
        <div className="relative">
          {/* Season tag above button */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-black/90 to-black/90 backdrop-blur-sm text-center text-white text-xs font-bold py-1.5 px-4 rounded-t-xl border-t border-x border-orange-500/40 transition-all duration-300">
            <span className="text-orange-400">JOIN OUR TEAM</span>
          </div>

          {/* CTA Button */}
          <Link
            href="/career/apply"
            className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 text-center rounded-lg transition-colors duration-300 uppercase relative overflow-hidden group"
          >
            <span className="flex items-center justify-center">
              View All Openings
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

export default Career;
