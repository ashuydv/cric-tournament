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
                                <p className="max-w-[700px] text-gray-400 md:text-xl mx-auto">Last updated: April 13, 2025</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Terms & Conditions Content */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="max-w-3xl mx-auto prose prose-orange lg:prose-lg">
                            <p>
                                Please read these Terms and Conditions ("Terms") carefully before using the Run Bhumi website or
                                participating in any Run Bhumi events.
                            </p>

                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing our website, registering for an account, purchasing tickets, or participating in our
                                events, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our
                                services.
                            </p>

                            <h2>2. Definitions</h2>
                            <p>
                                "Run Bhumi" refers to the cricket tournament organization and its website.
                                <br />
                                "User," "you," or "your" refers to the person accessing or using Run Bhumi services.
                                <br />
                                "Services" refers to the website, events, tournaments, and other offerings provided by Run Bhumi.
                            </p>

                            <h2>3. Account Registration</h2>
                            <p>
                                To access certain features of our Services, you may need to register for an account. You agree to
                                provide accurate, current, and complete information during the registration process and to update such
                                information to keep it accurate, current, and complete.
                            </p>
                            <p>
                                You are responsible for safeguarding your account credentials and for all activities that occur under
                                your account. You agree to notify us immediately of any unauthorized use of your account.
                            </p>

                            <h2>4. Ticket Purchases and Refunds</h2>
                            <p>
                                All ticket sales are final and non-refundable unless an event is canceled by Run Bhumi. In the event of
                                cancellation, refunds will be processed within 30 days.
                            </p>
                            <p>
                                Tickets may not be resold or transferred without prior written consent from Run Bhumi. Any tickets found
                                to be sold or transferred without authorization may be canceled without refund.
                            </p>

                            <h2>5. Event Participation</h2>
                            <p>
                                By participating in Run Bhumi events, you agree to comply with all venue rules and regulations, as well
                                as any instructions from event staff.
                            </p>
                            <p>
                                Run Bhumi reserves the right to refuse entry or remove any person from an event for any reason,
                                including but not limited to disruptive behavior, violation of rules, or safety concerns.
                            </p>

                            <h2>6. Intellectual Property</h2>
                            <p>
                                All content on the Run Bhumi website, including text, graphics, logos, images, and software, is the
                                property of Run Bhumi or its content suppliers and is protected by copyright and other intellectual
                                property laws.
                            </p>
                            <p>
                                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                                perform, republish, download, store, or transmit any of the material on our website without our prior
                                written consent.
                            </p>

                            <h2>7. Limitation of Liability</h2>
                            <p>
                                Run Bhumi shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                                including but not limited to, loss of profits, data, use, goodwill, or other intangible losses,
                                resulting from your access to or use of or inability to access or use the Services.
                            </p>

                            <h2>8. Indemnification</h2>
                            <p>
                                You agree to defend, indemnify, and hold harmless Run Bhumi, its affiliates, licensors, and service
                                providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
                                suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
                                losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to
                                your violation of these Terms or your use of the Services.
                            </p>

                            <h2>9. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                                its conflict of law principles.
                            </p>

                            <h2>10. Changes to Terms</h2>
                            <p>
                                Run Bhumi reserves the right to modify or replace these Terms at any time. If a revision is material, we
                                will provide at least 30 days' notice prior to any new terms taking effect.
                            </p>

                            <h2>11. Contact Information</h2>
                            <p>If you have any questions about these Terms, please contact us at:</p>
                            <p>
                                Email: legal@runbhumi.com
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