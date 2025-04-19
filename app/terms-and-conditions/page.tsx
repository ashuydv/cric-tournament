import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsConditionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Terms & Conditions</h1>
                                <p className="max-w-[700px] text-gray-400 md:text-xl mx-auto">Last updated: April 19, 2025</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Terms & Conditions Content */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="max-w-3xl mx-auto prose prose-orange lg:prose-lg">
                            <p>
                                Please read these Terms and Conditions ("Terms") carefully before using the RunBhumi website or
                                participating in any RunBhumi events.
                            </p>

                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing our website, registering for an account, purchasing tickets, or participating in our
                                events, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our
                                services.
                            </p>

                            <h2>2. Definitions</h2>
                            <p>
                                "RunBhumi" refers to India's first-ever televised individual cricket talent hunt platform, its website, and related services.
                                <br />
                                "User," "you," or "your" refers to the person accessing or using RunBhumi services.
                                <br />
                                "Services" refers to the website, events, tournaments, talent hunt programs, training camps, and other offerings provided by RunBhumi.
                            </p>

                            <h2>3. Our Mission</h2>
                            <p>
                                RunBhumi is a national movement dedicated to scouting, training, and launching extraordinary cricket talent from across India.
                                We aim to discover passionate players from cities to remote villages who lack access, exposure, or opportunity but possess
                                exceptional potential. Through our platform, we provide these talents with training, exposure, and a pathway to professional cricket.
                            </p>
                            <p>
                                By participating in RunBhumi events or programs, you acknowledge that you understand our mission and agree to uphold
                                the values of sportsmanship, dedication, and fair play that RunBhumi stands for.
                            </p>

                            <h2>4. Registration Process</h2>
                            <p>
                                To participate in the RunBhumi Cricket Talent Hunt, you must complete the registration process on our website or through
                                our official registration channels. Registration includes providing accurate personal information including but not limited to:
                            </p>
                            <ul>
                                <li>Full legal name (first, middle, and surname)</li>
                                <li>Valid mobile number and email address</li>
                                <li>Date of birth</li>
                                <li>State of residence</li>
                                <li>Preferred trial city</li>
                                <li>Playing role and cricket-specific information</li>
                                <li>T-shirt size for official RunBhumi merchandise</li>
                            </ul>
                            <p>
                                By submitting your registration, you certify that all provided information is accurate and complete. RunBhumi reserves
                                the right to verify any information provided and to disqualify participants who provide false information.
                            </p>

                            <h2>5. Registration Benefits</h2>
                            <p>
                                Upon successful registration and payment of any applicable fees, participants will receive:
                            </p>
                            <ul>
                                <li>An official RunBhumi Cricket T-shirt</li>
                                <li>Professional performance evaluation</li>
                                <li>Opportunity to be selected for the 45-day Gurukul training program</li>
                                <li>Chance to be mentored by cricket legends</li>
                                <li>Possibility of appearing on national television</li>
                            </ul>
                            <p>
                                RunBhumi does not guarantee selection for advanced stages of the program, as this is based solely on merit and
                                the judgment of our cricket experts and selectors.
                            </p>

                            <h2>6. Trial Participation</h2>
                            <p>
                                Trials will be conducted across 36 cities in India starting Thursday, April 18, 2025. By registering, you agree to:
                            </p>
                            <ul>
                                <li>Appear at your selected trial location on the designated date and time</li>
                                <li>Bring proper cricket equipment and attire</li>
                                <li>Follow all instructions from RunBhumi staff and coaches</li>
                                <li>Comply with the venue's rules and regulations</li>
                                <li>Maintain sportsmanlike conduct throughout the trial process</li>
                            </ul>
                            <p>
                                RunBhumi reserves the right to modify trial locations, dates, or procedures as necessary, with notice provided to registered participants.
                            </p>

                            <h2>7. Account Management</h2>
                            <p>
                                To access certain features of our Services, you may need to register for an account. You agree to
                                provide accurate, current, and complete information during the registration process and to update such
                                information to keep it accurate, current, and complete.
                            </p>
                            <p>
                                You are responsible for safeguarding your account credentials and for all activities that occur under
                                your account. You agree to notify us immediately of any unauthorized use of your account.
                            </p>

                            <h2>8. Ticket Purchases and Refunds</h2>
                            <p>
                                All ticket sales are final and non-refundable unless an event is canceled by RunBhumi. In the event of
                                cancellation, refunds will be processed within 30 days.
                            </p>
                            <p>
                                Tickets may not be resold or transferred without prior written consent from RunBhumi. Any tickets found
                                to be sold or transferred without authorization may be canceled without refund.
                            </p>

                            <h2>9. Event Participation</h2>
                            <p>
                                By participating in RunBhumi events, trials, or the 45-day cricket Gurukul training program, you agree to comply with all venue rules
                                and regulations, as well as any instructions from event staff, coaches, and mentors.
                            </p>
                            <p>
                                RunBhumi reserves the right to refuse entry or remove any person from an event for any reason,
                                including but not limited to disruptive behavior, violation of rules, or safety concerns.
                            </p>

                            <h2>10. Code of Conduct</h2>
                            <p>
                                All participants must adhere to the RunBhumi Code of Conduct, which includes but is not limited to:
                            </p>
                            <ul>
                                <li>Code of Conduct in Team Dugouts</li>
                                <li>Cricket Rulebook guidelines</li>
                                <li>Cricket PMOA (Player and Match Official Area) Guidelines</li>
                                <li>RunBhumi Commercial Guidelines</li>
                            </ul>
                            <p>
                                Complete guidelines are available on our website. Violation of any code of conduct may result in immediate
                                disqualification from the program without refund of registration fees.
                            </p>

                            <h2>11. Talent Hunt Participation</h2>
                            <p>
                                By registering for RunBhumi's talent hunt programs, you acknowledge that:
                            </p>
                            <ul>
                                <li>Selection processes are at the sole discretion of RunBhumi and its appointed experts</li>
                                <li>You may be required to participate in televised events if selected</li>
                                <li>Your performance, likeness, and story may be broadcast nationwide</li>
                                <li>You are physically fit and medically cleared to participate in intensive cricket training</li>
                                <li>You will adhere to the code of conduct established during training programs</li>
                            </ul>

                            <h2>12. Media Rights and Content</h2>
                            <p>
                                By participating in RunBhumi events or programs, you grant RunBhumi the right to film, photograph, and record your
                                participation, and to use such content for promotional, broadcast, and commercial purposes without additional compensation.
                                This includes usage in television broadcasts, social media, and other platforms.
                            </p>
                            <p>
                                You acknowledge that RunBhumi's goal is to transform talented players into national sensations through media exposure,
                                and your participation may include public visibility.
                            </p>

                            <h2>13. Intellectual Property</h2>
                            <p>
                                All content on the RunBhumi website, including text, graphics, logos, images, and software, is the
                                property of RunBhumi or its content suppliers and is protected by copyright and other intellectual
                                property laws.
                            </p>
                            <p>
                                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                                perform, republish, download, store, or transmit any of the material on our website without our prior
                                written consent.
                            </p>

                            <h2>14. Limitation of Liability</h2>
                            <p>
                                RunBhumi shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                                including but not limited to, loss of profits, data, use, goodwill, or other intangible losses,
                                resulting from your access to or use of or inability to access or use the Services.
                            </p>

                            <h2>15. Indemnification</h2>
                            <p>
                                You agree to defend, indemnify, and hold harmless RunBhumi, its affiliates, licensors, and service
                                providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
                                suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
                                losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to
                                your violation of these Terms or your use of the Services.
                            </p>

                            <h2>16. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                                its conflict of law principles.
                            </p>

                            <h2>17. Changes to Terms</h2>
                            <p>
                                RunBhumi reserves the right to modify or replace these Terms at any time. If a revision is material, we
                                will provide at least 30 days' notice prior to any new terms taking effect.
                            </p>

                            <h2>18. Contact Information</h2>
                            <p>If you have any questions about these Terms, please contact us at:</p>
                            <p>
                                Email: hello@therunbhumi.com
                                <br />
                                Main Phone: +91 99643 91643
                                <br />
                                WhatsApp Enquiries: +91 99643 92643
                                <br />
                                IVR: +91 99643 96643
                                <br />
                                Office: MNT Dreams Pvt. Ltd. 770, Tower B - 1 Spaze IT park, Sector 49 Sohna Road, Gurugram, Haryana-122002
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}