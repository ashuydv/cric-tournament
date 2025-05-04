import Link from "next/link";
import { Trophy } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1AEtMsy5yM/?mibextid=wwXIfr",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/runbhumi_t20?igsh=eWhyczFqaWpocDhj",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/torunbhumi?s=21",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M4.25 3h3.477l4.777 6.507L17.776 3H21L14.46 11.7 21.75 21h-3.52l-5.237-7.146L6.062 21H3l7.08-8.8L4.25 3z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/your-whatsapp-number", // Replace with your actual WhatsApp number
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M22 12.21c0 5.64-4.602 10.21-10.274 10.21-1.808 0-3.507-.47-4.973-1.29L2 22l1.338-4.393C2.509 16.077 2 14.19 2 12.21 2 6.57 6.602 2 12.274 2 17.947 2 22 6.57 22 12.21z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@RunBhumi-t20",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/runbhumi", // Replace with actual LinkedIn URL
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-black text-white py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Teams Column */}
          {/* <div className="space-y-4">
                        <h3 className="text-lg font-bold">Teams</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/teams/mumbai-strikers" className="text-gray-400 hover:text-white transition-colors">
                                    Mumbai Strikers
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/delhi-dynamos" className="text-gray-400 hover:text-white transition-colors">
                                    Delhi Dynamos
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/bangalore-blasters" className="text-gray-400 hover:text-white transition-colors">
                                    Bangalore Blasters
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/chennai-kings" className="text-gray-400 hover:text-white transition-colors">
                                    Chennai Kings
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/kolkata-tigers" className="text-gray-400 hover:text-white transition-colors">
                                    Kolkata Tigers
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/hyderabad-eagles" className="text-gray-400 hover:text-white transition-colors">
                                    Hyderabad Eagles
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/rajasthan-royals" className="text-gray-400 hover:text-white transition-colors">
                                    Rajasthan Royals
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/punjab-warriors" className="text-gray-400 hover:text-white transition-colors">
                                    Punjab Warriors
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/ahmedabad-avengers" className="text-gray-400 hover:text-white transition-colors">
                                    Ahmedabad Avengers
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/lucknow-legends" className="text-gray-400 hover:text-white transition-colors">
                                    Lucknow Legends
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/jaipur-jaguars" className="text-gray-400 hover:text-white transition-colors">
                                    Jaipur Jaguars
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams/kochi-tuskers" className="text-gray-400 hover:text-white transition-colors">
                                    Kochi Tuskers
                                </Link>
                            </li>
                        </ul>
                    </div> */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center group rounded-lg relative"
              aria-label="RunBhumi Home"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
              <div className="relative h-16 w-16 md:h-24 md:w-24 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/rb_logo.png"
                  alt="RunBhumi Logo"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* RunBhumi Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">RunBhumi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/merchandise"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Merchandise
                </Link>
              </li>
              <li>
                <Link
                  href="/partner-with-us"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsorships"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sponsorships
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/news-events"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  News & Events
                </Link>
              </li> */}
            </ul>
          </div>

          {/* RunBhumi Guidelines Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">RunBhumi Guidelines</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/code-of-conduct"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Code of Conduct in Team Dugouts
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial-guidelines"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  RunBhumi Commercial Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/rulebook"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cricket Rulebook
                </Link>
              </li>
              <li>
                <Link
                  href="/pmoa"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cricket PMOA Guideline
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} RunBhumi. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
