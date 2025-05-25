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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Career = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: "Event Manager",
      department: "Operations",
      location: "Mumbai",
      type: "Full-time",
      experience: "3-5 years",
      featured: true,
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Delhi",
      type: "Full-time",
      experience: "2-4 years",
      featured: true,
    },
    {
      id: 3,
      title: "Sports Analyst",
      department: "Technical",
      location: "Bangalore",
      type: "Full-time",
      experience: "2-5 years",
      featured: false,
    },
    {
      id: 4,
      title: "Player Scout",
      department: "Technical",
      location: "Pan India",
      type: "Contract",
      experience: "5+ years",
      featured: false,
    },
    {
      id: 5,
      title: "Content Writer",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
      experience: "1-3 years",
      featured: false,
    },
    {
      id: 6,
      title: "Video Editor",
      department: "Media",
      location: "Mumbai",
      type: "Full-time",
      experience: "2-4 years",
      featured: false,
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

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <LeftHero
        title="Careers at RunBhumi"
        description="Join our team and be part of India's most exciting cricket tournament"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At RunBhumi, we're building the future of cricket in India. Join our
            dynamic team of professionals who are passionate about sports and
            creating unforgettable experiences for cricket fans.
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
                <p className="text-gray-600">
                  Be part of a team that's revolutionizing cricket in India and
                  creating opportunities for emerging talent.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-orange-600 mr-3" />
                  <h4 className="font-semibold">Great Culture</h4>
                </div>
                <p className="text-gray-600">
                  Work in a collaborative, inclusive environment with passionate
                  professionals who love what they do.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Layers className="h-6 w-6 text-orange-600 mr-3" />
                  <h4 className="font-semibold">Growth Opportunities</h4>
                </div>
                <p className="text-gray-600">
                  Develop your skills and advance your career in a fast-growing
                  sports entertainment company.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Listings Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
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
                <option value="Technical">Technical</option>
                <option value="Media">Media</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center text-sm text-gray-600">
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
                        <div className="flex items-center mb-2 md:mb-0">
                          <Star className="h-4 w-4 mr-1 text-orange-500" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Link
                        href={`/career/${job.id}`}
                        className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-300"
                      >
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 bg-white rounded-lg shadow">
                <p className="text-gray-600">
                  No job openings match your criteria. Please try another
                  search.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Competitive Salary
              </h3>
              <p className="text-gray-600">
                We offer competitive compensation packages benchmarked against
                industry standards.
              </p>
            </div>

            {/* <div className="bg-white p-6 rounded-lg shadow-md text-center">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Health Insurance
              </h3>
              <p className="text-gray-600">
                Comprehensive medical coverage for you and your dependents.
              </p>
            </div> */}

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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Flexible Hours
              </h3>
              <p className="text-gray-600">
                Work-life balance is important to us, with flexible scheduling
                options available.
              </p>
            </div>

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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Modern Office
              </h3>
              <p className="text-gray-600">
                Work in our state-of-the-art facilities with all the amenities
                you need.
              </p>
            </div>
          </div>
        </div>

        {/* Life at RunBhumi Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
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
                <p className="text-gray-600">
                  We foster a culture of teamwork and collaboration, where every
                  voice is heard and valued.
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
                <p className="text-gray-600">
                  We invest in our employees' growth with training programs and
                  learning opportunities.
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
                <p className="text-gray-600">
                  We work hard and celebrate our successes with team events and
                  activities.
                </p>
              </div>
            </div>
          </div>
        </div>

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
                  <p className="text-gray-600">
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
                  <p className="text-gray-600">
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
                  <p className="text-gray-600">
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
                  <p className="text-gray-600">
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
                  <p className="text-gray-600">
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
              We're always looking for talented individuals to join our team.
              Submit your resume for future opportunities.
            </p>
            <Link
              href="/career/apply"
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Submit Resume
            </Link>
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
                Do you offer remote work options?
              </h4>
              <p className="text-gray-600">
                Yes, we offer remote work options for certain roles. Each job
                posting specifies whether the position is office-based, remote,
                or hybrid.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <h4 className="font-semibold mb-2">
                What is the interview process like?
              </h4>
              <p className="text-gray-600">
                Our interview process typically includes an initial screening,
                skills assessment, and team interviews. The entire process
                usually takes 2-3 weeks from application to offer.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <h4 className="font-semibold mb-2">
                Do I need to have experience in cricket or sports?
              </h4>
              <p className="text-gray-600">
                While a passion for cricket is appreciated, specific experience
                in sports is not required for all roles. We value diverse
                perspectives and skills from various industries.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                What is the company culture like?
              </h4>
              <p className="text-gray-600">
                RunBhumi has a dynamic, collaborative culture that values
                innovation, teamwork, and a passion for cricket. We work hard
                but also celebrate our successes and maintain a good work-life
                balance.
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
