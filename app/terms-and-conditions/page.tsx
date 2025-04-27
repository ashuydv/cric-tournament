import Header from "@/components/header"
import Footer from "@/components/footer"
import LeftHero from "@/components/common/left-hero"
import { ArrowRight, FileText, UserCheck, CalendarDays, BookOpen, Award, ShieldAlert, Camera, Scale, Mail } from 'lucide-react'
import DynamicButton from "@/components/dynamic-button"
import CTA from "@/components/cta"

export default function TermsConditionsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex-1">
                <LeftHero
                    title="Terms & Conditions"
                    subtitle="The Legal Framework for RunBhumi Participants"
                    description="Last updated: April 19, 2025"
                    backgroundType="color"
                    backgroundSrc="black" // Replace with an appropriate image
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
                                <a href="#registration" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <UserCheck className="h-4 w-4" />
                                    <span>Registration</span>
                                </a>
                                <a href="#trials" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <CalendarDays className="h-4 w-4" />
                                    <span>Trials</span>
                                </a>
                                <a href="#conduct" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <BookOpen className="h-4 w-4" />
                                    <span>Code of Conduct</span>
                                </a>
                                <a href="#media" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <Camera className="h-4 w-4" />
                                    <span>Media Rights</span>
                                </a>
                                <a href="#liability" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <ShieldAlert className="h-4 w-4" />
                                    <span>Liability</span>
                                </a>
                                <a href="#contact" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <Mail className="h-4 w-4" />
                                    <span>Contact</span>
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
                                    <FileText className="h-8 w-8 text-orange-600" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900 font-playfair">Important Information</h2>
                                <p className="text-gray-700 text-center mb-6">
                                    Please read these Terms and Conditions carefully before using the RunBhumi website or
                                    participating in any RunBhumi events. By accessing our services, you agree to be bound by these terms.
                                </p>
                                <div className="flex justify-center">
                                    <DynamicButton variant="outline" href="#acceptance">
                                        Start Reading
                                    </DynamicButton>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Terms & Conditions Content */}
                    <section className="w-full py-12 md:py-24">
                        <div className="container px-4 md:px-6 mx-auto">
                            <div className="max-w-3xl mx-auto prose space-y-4 prose-orange lg:prose-lg">
                                <div id="acceptance" className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">1</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Acceptance of Terms</h2>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-gray-700">
                                            By accessing our website, registering for an account, purchasing tickets, or participating in our
                                            events, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our
                                            services.
                                        </p>
                                    </div>
                                </div>

                                <div className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">2</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Definitions</h2>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-gray-700">
                                            "RunBhumi" refers to India's first-ever televised individual cricket talent hunt platform, its website, and related services.
                                            <br />
                                            "User," "you," or "your" refers to the person accessing or using RunBhumi services.
                                            <br />
                                            "Services" refers to the website, events, tournaments, talent hunt programs, training camps, and other offerings provided by RunBhumi.
                                        </p>
                                    </div>
                                </div>

                                <div className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">3</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Our Mission</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-4">
                                            <p className="text-gray-800 italic">
                                                "RunBhumi is a national movement dedicated to scouting, training, and launching extraordinary cricket talent from across India."
                                            </p>
                                        </div>
                                        <p className="text-gray-700">
                                            We aim to discover passionate players from cities to remote villages who lack access, exposure, or opportunity but possess
                                            exceptional potential. Through our platform, we provide these talents with training, exposure, and a pathway to professional cricket.
                                        </p>
                                        <p className="text-gray-700">
                                            By participating in RunBhumi events or programs, you acknowledge that you understand our mission and agree to uphold
                                            the values of sportsmanship, dedication, and fair play that RunBhumi stands for.
                                        </p>
                                    </div>
                                </div>

                                <div id="registration" className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">4</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Registration Process</h2>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-gray-700">
                                            To participate in the RunBhumi Cricket Talent Hunt, you must complete the registration process on our website or through
                                            our official registration channels. Registration includes providing accurate personal information including but not limited to:
                                        </p>
                                        <ul className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <li className="flex items-start gap-2 mb-2">
                                                <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                    <span className="text-orange-700 text-xs">✓</span>
                                                </div>
                                                <span>Full legal name (first, middle, and surname)</span>
                                            </li>
                                            <li className="flex items-start gap-2 mb-2">
                                                <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                    <span className="text-orange-700 text-xs">✓</span>
                                                </div>
                                                <span>Valid mobile number and email address</span>
                                            </li>
                                            <li className="flex items-start gap-2 mb-2">
                                                <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                    <span className="text-orange-700 text-xs">✓</span>
                                                </div>
                                                <span>Date of birth</span>
                                            </li>
                                            <li className="flex items-start gap-2 mb-2">
                                                <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                    <span className="text-orange-700 text-xs">✓</span>
                                                </div>
                                                <span>State of residence</span>
                                            </li>
                                            <li className="flex items-start gap-2 mb-2">
                                                <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                    <span className="text-orange-700 text-xs">✓</span>
                                                </div>
                                                <span>Preferred trial city</span>
                                            </li>
                                            <li className="flex items-start gap-2 mb-2">
                                                <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                    <span className="text-orange-700 text-xs">✓</span>
                                                </div>
                                                <span>Playing role and cricket-specific information</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="h-5 w-5 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                    <span className="text-orange-700 text-xs">✓</span>
                                                </div>
                                                <span>T-shirt size for official RunBhumi merchandise</span>
                                            </li>
                                        </ul>
                                        <p className="text-gray-700 mt-4">
                                            By submitting your registration, you certify that all provided information is accurate and complete. RunBhumi reserves
                                            the right to verify any information provided and to disqualify participants who provide false information.
                                        </p>
                                    </div>
                                </div>

                                <div className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">5</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Registration Benefits</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-100 mb-4">
                                            <h3 className="text-xl font-semibold mb-4 text-orange-700">What You'll Receive</h3>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3">
                                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <Award className="h-3 w-3" />
                                                    </div>
                                                    <span>An official RunBhumi Cricket T-shirt</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <Award className="h-3 w-3" />
                                                    </div>
                                                    <span>Professional performance evaluation</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <Award className="h-3 w-3" />
                                                    </div>
                                                    <span>Opportunity to be selected for the 45-day Gurukul training program</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <Award className="h-3 w-3" />
                                                    </div>
                                                    <span>Chance to be mentored by cricket legends</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 text-white flex-shrink-0">
                                                        <Award className="h-3 w-3" />
                                                    </div>
                                                    <span>Possibility of appearing on national television</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-gray-700">
                                            RunBhumi does not guarantee selection for advanced stages of the program, as this is based solely on merit and
                                            the judgment of our cricket experts and selectors.
                                        </p>
                                    </div>
                                </div>

                                <div id="trials" className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">6</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Trial Participation</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg mb-4 border border-blue-100">
                                            <div className="flex items-center gap-3">
                                                <CalendarDays className="h-6 w-6 text-blue-500" />
                                                <span className="font-medium text-blue-800">Trials start: Thursday, April 18, 2025</span>
                                            </div>
                                            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">36 Cities</span>
                                        </div>
                                        <p className="text-gray-700">
                                            By registering, you agree to:
                                        </p>
                                        <ul className="space-y-2 my-4">
                                            <li className="flex items-start gap-3 bg-gray-50 p-3 rounded-md">
                                                <ArrowRight className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Appear at your selected trial location on the designated date and time</span>
                                            </li>
                                            <li className="flex items-start gap-3 bg-gray-50 p-3 rounded-md">
                                                <ArrowRight className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Bring proper cricket equipment and attire</span>
                                            </li>
                                            <li className="flex items-start gap-3 bg-gray-50 p-3 rounded-md">
                                                <ArrowRight className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Follow all instructions from RunBhumi staff and coaches</span>
                                            </li>
                                            <li className="flex items-start gap-3 bg-gray-50 p-3 rounded-md">
                                                <ArrowRight className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Comply with the venue's rules and regulations</span>
                                            </li>
                                            <li className="flex items-start gap-3 bg-gray-50 p-3 rounded-md">
                                                <ArrowRight className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>Maintain sportsmanlike conduct throughout the trial process</span>
                                            </li>
                                        </ul>
                                        <p className="text-gray-700">
                                            RunBhumi reserves the right to modify trial locations, dates, or procedures as necessary, with notice provided to registered participants.
                                        </p>
                                    </div>
                                </div>

                                {/* Continue with the remaining sections following the same enhanced pattern */}
                                <div className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">7</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Account Management</h2>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-gray-700">
                                            To access certain features of our Services, you may need to register for an account. You agree to
                                            provide accurate, current, and complete information during the registration process and to update such
                                            information to keep it accurate, current, and complete.
                                        </p>
                                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4">
                                            <p className="text-yellow-800">
                                                <strong>Important:</strong> You are responsible for safeguarding your account credentials and for all activities that occur under
                                                your account. You agree to notify us immediately of any unauthorized use of your account.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">8</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Ticket Purchases and Refunds</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="bg-gray-100 p-4 rounded-lg mb-4 border border-gray-200">
                                            <p className="font-medium text-gray-900 mb-2">Refund Policy Overview:</p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold">•</span>
                                                    <span>All ticket sales are final and non-refundable unless an event is canceled by RunBhumi</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold">•</span>
                                                    <span>If canceled, refunds will be processed within 30 days</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold">•</span>
                                                    <span>Tickets may not be resold or transferred without prior written consent</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-gray-700">
                                            Tickets may not be resold or transferred without prior written consent from RunBhumi. Any tickets found
                                            to be sold or transferred without authorization may be canceled without refund.
                                        </p>
                                    </div>
                                </div>

                                <div className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">9</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Event Participation</h2>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-gray-700">
                                            By participating in RunBhumi events, trials, or the 45-day cricket Gurukul training program, you agree to comply with all venue rules
                                            and regulations, as well as any instructions from event staff, coaches, and mentors.
                                        </p>
                                        <div className="flex p-4 bg-red-50 rounded-lg my-4 border border-red-100">
                                            <div className="mr-3 flex-shrink-0">
                                                <ShieldAlert className="h-6 w-6 text-red-500" />
                                            </div>
                                            <p className="text-red-800 text-sm">
                                                RunBhumi reserves the right to refuse entry or remove any person from an event for any reason,
                                                including but not limited to disruptive behavior, violation of rules, or safety concerns.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div id="conduct" className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">10</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Code of Conduct</h2>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-gray-700">
                                            All participants must adhere to the RunBhumi Code of Conduct, which includes but is not limited to:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <div className="font-medium text-gray-900 mb-2">Team Dugouts</div>
                                                <p className="text-sm text-gray-700">Guidelines for behavior and conduct in team areas</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <div className="font-medium text-gray-900 mb-2">Cricket Rulebook</div>
                                                <p className="text-sm text-gray-700">Standard cricket regulations and play guidelines</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <div className="font-medium text-gray-900 mb-2">PMOA Guidelines</div>
                                                <p className="text-sm text-gray-700">Player and Match Official Area protocols</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <div className="font-medium text-gray-900 mb-2">Commercial Guidelines</div>
                                                <p className="text-sm text-gray-700">Rules regarding sponsors and commercial activities</p>
                                            </div>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                            <p className="text-orange-800 text-sm">
                                                Complete guidelines are available on our website. Violation of any code of conduct may result in immediate
                                                disqualification from the program without refund of registration fees.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div id="media" className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">12</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Media Rights and Content</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="bg-gray-100 p-5 rounded-lg my-4 border border-gray-200">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Camera className="h-6 w-6 text-gray-700" />
                                                <h3 className="text-lg font-semibold text-gray-900 m-0">Media Rights Summary</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                By participating in RunBhumi events or programs, you grant RunBhumi the right to:
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-orange-500 font-bold">•</span>
                                                    <span>Film, photograph, and record your participation</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-orange-500 font-bold">•</span>
                                                    <span>Use such content for promotional, broadcast, and commercial purposes</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-orange-500 font-bold">•</span>
                                                    <span>Share your cricket journey on television, social media, and other platforms</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-orange-500 font-bold">•</span>
                                                    <span>No additional compensation will be provided for such usage</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-gray-700">
                                            You acknowledge that RunBhumi's goal is to transform talented players into national sensations through media exposure,
                                            and your participation may include public visibility.
                                        </p>
                                    </div>
                                </div>

                                <div className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">13</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Intellectual Property</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                                            <div className="bg-gray-100 p-3 border-b border-gray-200">
                                                <h3 className="text-lg font-semibold text-gray-900 m-0">Ownership of Content</h3>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-gray-700 mb-2">
                                                    All content on the RunBhumi website, including text, graphics, logos, images, and software, is the
                                                    property of RunBhumi or its content suppliers and is protected by copyright and other intellectual
                                                    property laws.
                                                </p>
                                                <p className="text-gray-700">
                                                    You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                                                    perform, republish, download, store, or transmit any of the material on our website without our prior
                                                    written consent.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="liability" className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">14</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Limitation of Liability</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
                                            <p className="text-red-800">
                                                <strong>Important:</strong> RunBhumi shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                                                including but not limited to, loss of profits, data, use, goodwill, or other intangible losses,
                                                resulting from your access to or use of or inability to access or use the Services.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">15</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Indemnification</h2>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-gray-700">
                                            You agree to defend, indemnify, and hold harmless RunBhumi, its affiliates, licensors, and service
                                            providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
                                            suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
                                            losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to
                                            your violation of these Terms or your use of the Services.
                                        </p>
                                    </div>
                                </div>

                                <div className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">16</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Governing Law</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <Scale className="h-8 w-8 text-blue-600" />
                                            </div>
                                            <p className="text-blue-900 m-0">
                                                These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                                                its conflict of law principles.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">17</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Changes to Terms</h2>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-gray-700">
                                            RunBhumi reserves the right to modify or replace these Terms at any time. If a revision is material, we
                                            will provide at least 30 days' notice prior to any new terms taking effect.
                                        </p>
                                    </div>
                                </div>

                                <div id="contact" className="terms-section scroll-mt-24">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="font-bold text-orange-600">18</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mt-0 font-playfair">Contact Information</h2>
                                    </div>
                                    <div className="pl-14">
                                        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
                                            <p className="text-gray-700 mb-4">If you have any questions about these Terms, please contact us at:</p>

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
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 mb-1">Main Phone</p>
                                                        <a href="tel:+919964391643" className="text-orange-600 hover:underline">+91 99643 91643</a>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3">
                                                    <div className="bg-orange-100 p-2 rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 mb-1">WhatsApp Enquiries</p>
                                                        <a href="https://wa.me/919964392643" className="text-orange-600 hover:underline">+91 99643 92643</a>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3">
                                                    <div className="bg-orange-100 p-2 rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 mb-1">IVR</p>
                                                        <a href="tel:+919964396643" className="text-orange-600 hover:underline">+91 99643 96643</a>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3 md:col-span-2">
                                                    <div className="bg-orange-100 p-2 rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                            <circle cx="12" cy="10" r="3"></circle>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 mb-1">Office Address</p>
                                                        <p className="text-gray-700">MNT Dreams Pvt. Ltd. 770, Tower B - 1 Spaze IT park, Sector 49 Sohna Road, Gurugram, Haryana-122002</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <CTA />
                </div>
            </main>
        </div>
    )
}