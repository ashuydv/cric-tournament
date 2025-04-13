import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Privacy Policy</h1>
                                <p className="max-w-[700px] text-gray-400 md:text-xl mx-auto">Last updated: April 13, 2025</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy Content */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="max-w-3xl mx-auto prose prose-orange lg:prose-lg">
                            <p>
                                This Privacy Policy describes how Run Bhumi ("we," "us," or "our") collects, uses, and discloses your
                                personal information when you visit our website, use our services, or interact with us.
                            </p>

                            <h2>Information We Collect</h2>
                            <p>
                                We collect information that you provide directly to us, information we collect automatically when you
                                use our services, and information from third-party sources.
                            </p>

                            <h3>Information You Provide to Us</h3>
                            <ul>
                                <li>Contact information (name, email address, phone number, postal address)</li>
                                <li>Account information (username, password)</li>
                                <li>Profile information (profile picture, biographical information)</li>
                                <li>Payment information (credit card details, billing address)</li>
                                <li>Communications (messages, feedback, survey responses)</li>
                            </ul>

                            <h3>Information We Collect Automatically</h3>
                            <ul>
                                <li>Device information (IP address, browser type, operating system)</li>
                                <li>Usage information (pages visited, time spent on site, clicks)</li>
                                <li>Location information (general location based on IP address)</li>
                                <li>Cookies and similar technologies</li>
                            </ul>

                            <h2>How We Use Your Information</h2>
                            <p>We use the information we collect for various purposes, including:</p>
                            <ul>
                                <li>Providing and maintaining our services</li>
                                <li>Processing transactions and managing accounts</li>
                                <li>Communicating with you about our services</li>
                                <li>Personalizing your experience</li>
                                <li>Improving our services</li>
                                <li>Marketing and advertising</li>
                                <li>Complying with legal obligations</li>
                            </ul>

                            <h2>Sharing of Information</h2>
                            <p>We may share your information with:</p>
                            <ul>
                                <li>Service providers who perform services on our behalf</li>
                                <li>Business partners for joint marketing efforts</li>
                                <li>Legal authorities when required by law</li>
                                <li>Other parties in connection with a merger, acquisition, or sale of assets</li>
                            </ul>

                            <h2>Your Rights and Choices</h2>
                            <p>
                                Depending on your location, you may have certain rights regarding your personal information, including:
                            </p>
                            <ul>
                                <li>Access to your personal information</li>
                                <li>Correction of inaccurate information</li>
                                <li>Deletion of your information</li>
                                <li>Objection to certain processing activities</li>
                                <li>Data portability</li>
                                <li>Withdrawal of consent</li>
                            </ul>

                            <h2>Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal information
                                against unauthorized access, alteration, disclosure, or destruction.
                            </p>

                            <h2>International Data Transfers</h2>
                            <p>
                                Your information may be transferred to and processed in countries other than the country in which you
                                reside. These countries may have different data protection laws than your country.
                            </p>

                            <h2>Children's Privacy</h2>
                            <p>
                                Our services are not directed to children under the age of 13. We do not knowingly collect personal
                                information from children under 13.
                            </p>

                            <h2>Changes to This Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                                new Privacy Policy on this page and updating the "Last updated" date.
                            </p>

                            <h2>Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                            <p>
                                Email: privacy@runbhumi.com
                                <br />
                                Phone: +91 22 1234 5678
                                <br />
                                Address: 123 Cricket Avenue, Bandra West, Mumbai, Maharashtra 400050, India
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
