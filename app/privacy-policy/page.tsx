import Header from "@/components/header"
import Footer from "@/components/footer"
import LeftHero from "@/components/common/left-hero"
import {
    User,
    Shield,
    Lock,
    Eye,
    Share2,
    UserCheck,
    Globe,
    AlertCircle,
    RefreshCw,
    Mail,
    Phone,
    MapPin,
    Database,
    FileText,
    Key
} from 'lucide-react'
import DynamicButton from "@/components/dynamic-button"
import CTA from "@/components/cta"

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex-1">
                {/* Hero Section */}
                <LeftHero
                    title="Privacy Policy"
                    subtitle="How We Protect Your Information"
                    description="Last updated: April 13, 2025"
                    backgroundType="color"
                    backgroundSrc="black" // Replace with appropriate image
                    backgroundOverlay={true}
                    backgroundOverlayOpacity={0.8}
                    height="small"
                    animated={true}
                    parallaxEnabled={true}
                    parallaxSpeed={0.7}
                />

                {/* Quick Navigation */}
                <section className="py-8 bg-white border-b">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-playfair">Quick Navigation</h2>
                            <div className="flex flex-wrap justify-center gap-3">
                                <a href="#collection" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <Database className="h-4 w-4" />
                                    <span>Data Collection</span>
                                </a>
                                <a href="#usage" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    <span>How We Use Data</span>
                                </a>
                                <a href="#sharing" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <Share2 className="h-4 w-4" />
                                    <span>Information Sharing</span>
                                </a>
                                <a href="#rights" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <UserCheck className="h-4 w-4" />
                                    <span>Your Rights</span>
                                </a>
                                <a href="#security" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <Lock className="h-4 w-4" />
                                    <span>Data Security</span>
                                </a>
                                <a href="#contact" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <Mail className="h-4 w-4" />
                                    <span>Contact Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="space-y-4 pb-12">
                    {/* Introduction Card */}
                    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
                        <div className="container px-4 md:px-6 mx-auto">
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md max-w-3xl mx-auto border border-gray-100">
                                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                                    <Shield className="h-8 w-8 text-orange-600" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900 font-playfair">Your Privacy Matters</h2>
                                <p className="text-black text-center mb-6">
                                    This Privacy Policy describes how RunBhumi collects, uses, and discloses your
                                    personal information when you visit our website, use our services, or interact with us.
                                    We are committed to protecting your data and ensuring transparency in our practices.
                                </p>
                                <div className="flex justify-center">
                                    <DynamicButton variant="primary" href="#collection">
                                        Learn More
                                    </DynamicButton>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Privacy Policy Content */}
                    <section className="w-full py-12 md:py-24">
                        <div className="container px-4 md:px-6 mx-auto">
                            <div className="max-w-3xl mx-auto prose prose-blue lg:prose-lg">

                                {/* Information We Collect */}
                                <div id="collection" className="privacy-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <Database className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Information We Collect</h2>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-black">
                                            We collect information that you provide directly to us, information we collect automatically when you
                                            use our services, and information from third-party sources.
                                        </p>

                                        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 my-6">
                                            <div className="bg-orange-50 p-4 border-b border-gray-200">
                                                <div className="flex items-center gap-2">
                                                    <User className="h-5 w-5 text-orange-600" />
                                                    <h3 className="text-lg font-semibold text-gray-900 m-0">Information You Provide to Us</h3>
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 m-0 pl-0">
                                                    <li className="flex items-start gap-2 bg-gray-50 p-3 rounded-md">
                                                        <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                            <span className="text-orange-700 text-xs">✓</span>
                                                        </div>
                                                        <span>Contact information (name, email, phone)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 bg-gray-50 p-3 rounded-md">
                                                        <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                            <span className="text-orange-700 text-xs">✓</span>
                                                        </div>
                                                        <span>Account information (username, password)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 bg-gray-50 p-3 rounded-md">
                                                        <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                            <span className="text-orange-700 text-xs">✓</span>
                                                        </div>
                                                        <span>Profile information (photo, bio)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 bg-gray-50 p-3 rounded-md">
                                                        <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                            <span className="text-orange-700 text-xs">✓</span>
                                                        </div>
                                                        <span>Payment information (card details)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 bg-gray-50 p-3 rounded-md">
                                                        <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                            <span className="text-orange-700 text-xs">✓</span>
                                                        </div>
                                                        <span>Communications (messages, feedback)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 my-6">
                                            <div className="bg-orange-50 p-4 border-b border-gray-200">
                                                <div className="flex items-center gap-2">
                                                    <FileText className="h-5 w-5 text-orange-600" />
                                                    <h3 className="text-lg font-semibold text-gray-900 m-0">Information We Collect Automatically</h3>
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 m-0 pl-0">
                                                    <li className="flex items-start gap-2 bg-gray-50 p-3 rounded-md">
                                                        <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                            <span className="text-orange-700 text-xs">✓</span>
                                                        </div>
                                                        <span>Device information (IP address, browser)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 bg-gray-50 p-3 rounded-md">
                                                        <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                            <span className="text-orange-700 text-xs">✓</span>
                                                        </div>
                                                        <span>Usage information (pages visited, clicks)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 bg-gray-50 p-3 rounded-md">
                                                        <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                            <span className="text-orange-700 text-xs">✓</span>
                                                        </div>
                                                        <span>Location information (general location)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 bg-gray-50 p-3 rounded-md">
                                                        <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                            <span className="text-orange-700 text-xs">✓</span>
                                                        </div>
                                                        <span>Cookies and similar technologies</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* How We Use Your Information */}
                                <div id="usage" className="privacy-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <Eye className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">How We Use Your Information</h2>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-black">
                                            We use the information we collect for various purposes, including:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                                <span>Providing and maintaining our services</span>
                                            </div>
                                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                                <span>Processing transactions and managing accounts</span>
                                            </div>
                                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                                <span>Communicating with you about our services</span>
                                            </div>
                                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                                <span>Personalizing your experience</span>
                                            </div>
                                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                                <span>Improving our services</span>
                                            </div>
                                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                                <span>Marketing and advertising</span>
                                            </div>
                                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 flex items-start gap-3 md:col-span-2">
                                                <div className="mt-1 flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                                <span>Complying with legal obligations and enforcing our terms and policies</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sharing of Information */}
                                <div id="sharing" className="privacy-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <Share2 className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Sharing of Information</h2>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-black">
                                            We may share your information with:
                                        </p>

                                        <div className="space-y-4 my-6">
                                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                            <circle cx="9" cy="7" r="4"></circle>
                                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                        </svg>
                                                    </div>
                                                    <h3 className="font-semibold text-gray-900">Service Providers</h3>
                                                </div>
                                                <p className="text-black text-sm ml-11">
                                                    Third parties who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting, and customer service.
                                                </p>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                                        </svg>
                                                    </div>
                                                    <h3 className="font-semibold text-gray-900">Business Partners</h3>
                                                </div>
                                                <p className="text-black text-sm ml-11">
                                                    Trusted third parties with whom we collaborate for joint marketing efforts, promotions, or services.
                                                </p>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
                                                            <circle cx="12" cy="10" r="3"></circle>
                                                        </svg>
                                                    </div>
                                                    <h3 className="font-semibold text-gray-900">Legal Authorities</h3>
                                                </div>
                                                <p className="text-black text-sm ml-11">
                                                    When required by law, such as to comply with a subpoena, legal proceedings, or similar legal process.
                                                </p>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                                            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                                        </svg>
                                                    </div>
                                                    <h3 className="font-semibold text-gray-900">Business Transfers</h3>
                                                </div>
                                                <p className="text-black text-sm ml-11">
                                                    In connection with a merger, acquisition, or sale of assets, where your information may be transferred as a business asset.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Your Rights and Choices */}
                                <div id="rights" className="privacy-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <UserCheck className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Your Rights and Choices</h2>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-black">
                                            Depending on your location, you may have certain rights regarding your personal information, including:
                                        </p>

                                        <div className="bg-gradient-to-r from-orange-50 to-orange-50 rounded-xl p-6 my-6 border border-orange-100">
                                            <h3 className="text-xl font-semibold mb-4 text-orange-800">Your Data Rights</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="h-7 w-7 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <Key className="h-3 w-3" />
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-orange-900">Access</span>
                                                        <p className="text-sm text-orange-800 mt-1">Request a copy of your personal information</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="h-7 w-7 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <Key className="h-3 w-3" />
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-orange-900">Correction</span>
                                                        <p className="text-sm text-orange-800 mt-1">Update inaccurate or incomplete information</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="h-7 w-7 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <Key className="h-3 w-3" />
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-orange-900">Deletion</span>
                                                        <p className="text-sm text-orange-800 mt-1">Request removal of your information</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="h-7 w-7 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <Key className="h-3 w-3" />
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-orange-900">Objection</span>
                                                        <p className="text-sm text-orange-800 mt-1">Oppose certain processing activities</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="h-7 w-7 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <Key className="h-3 w-3" />
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-orange-900">Data Portability</span>
                                                        <p className="text-sm text-orange-800 mt-1">Receive your data in a usable format</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="h-7 w-7 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <Key className="h-3 w-3" />
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-orange-900">Withdraw Consent</span>
                                                        <p className="text-sm text-orange-800 mt-1">Revoke previously given permissions</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 bg-orange-100 p-4 rounded-lg">
                                                <p className="text-sm text-orange-800">
                                                    To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Data Security */}
                                <div id="security" className="privacy-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <Lock className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Data Security</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 my-6">
                                            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                                                <Shield className="h-8 w-8 text-orange-600" />
                                            </div>
                                            <p className="text-black text-center">
                                                We implement appropriate technical and organizational measures to protect your personal information
                                                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                                                over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                                    <Lock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                                                    <p className="text-sm font-medium text-gray-900">Encryption</p>
                                                    <p className="text-xs text-black mt-1">Data encrypted in transit and at rest</p>
                                                </div>
                                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                                    <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                                                    <p className="text-sm font-medium text-gray-900">Access Controls</p>
                                                    <p className="text-xs text-black mt-1">Strict staff access permissions</p>
                                                </div>
                                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                                    <RefreshCw className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                                                    <p className="text-sm font-medium text-gray-900">Regular Audits</p>
                                                    <p className="text-xs text-black mt-1">Continuous security monitoring</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* International Data Transfers */}
                                <div className="privacy-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <Globe className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">International Data Transfers</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="flex p-4 bg-yellow-50 rounded-lg my-4 border border-yellow-100">
                                            <div className="mr-3 flex-shrink-0">
                                                <AlertCircle className="h-6 w-6 text-yellow-500" />
                                            </div>
                                            <p className="text-yellow-800 text-sm">
                                                Your information may be transferred to and processed in countries other than the country in which you
                                                reside. These countries may have different data protection laws than your country. We ensure appropriate
                                                safeguards are in place to protect your information when transferred internationally.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Children's Privacy */}
                                <div className="privacy-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <User className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Children's Privacy</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-4">
                                            <p className="text-red-800">
                                                <strong>Important:</strong> Our services are not directed to children under the age of 13. We do not knowingly collect personal
                                                information from children under 13. If you are a parent or guardian and believe that your child has provided us with
                                                personal information, please contact us immediately.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Changes to This Privacy Policy */}
                                <div className="privacy-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <RefreshCw className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Changes to This Privacy Policy</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                                            <div className="bg-gray-100 p-3 border-b border-gray-200">
                                                <h3 className="text-lg font-semibold text-gray-900 m-0">Policy Updates</h3>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-black">
                                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                                                    new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                                                </p>
                                                <p className="text-black mt-2">
                                                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
                                                    are effective when they are posted on this page.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Us */}
                                <div id="contact" className="privacy-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <Mail className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Contact Us</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Questions About Privacy?</h3>
                                            <p className="text-black mb-4">If you have any questions about this Privacy Policy, please contact our privacy team at:</p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="bg-orange-100 p-2 rounded-full">
                                                        <Mail className="h-5 w-5 text-orange-600" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 mb-1">Email</p>
                                                        <a href="mailto:hello@therunbhumi.com" className="text-orange-600 hover:underline">hello@therunbhumi.com</a>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3">
                                                    <div className="bg-orange-100 p-2 rounded-full">
                                                        <Phone className="h-5 w-5 text-orange-600" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 mb-1">Phone</p>
                                                        <a href="tel:+912212345678" className="text-orange-600 hover:underline">+91 22 9876 5432</a>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3 md:col-span-2">
                                                    <div className="bg-orange-100 p-2 rounded-full">
                                                        <MapPin className="h-5 w-5 text-orange-600" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 mb-1">Address</p>
                                                        <p className="text-black"> MNT Dreams Pvt. Ltd.
                                                            <br />
                                                            770 , Tower B - 1 <br />
                                                            Spaze IT park ,Sector 49 <br />
                                                            Sohna Road, Gurugram, Haryana-122002</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg mt-6 text-center">
                                                <p className="text-sm text-black">
                                                    For data subject access requests, please use our
                                                    <a href="/data-request" className="text-orange-600 hover:underline mx-1">data request form</a>
                                                    for faster processing.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Call to Action */}
                    <CTA />
                </div>
            </main>
        </div>
    )
}