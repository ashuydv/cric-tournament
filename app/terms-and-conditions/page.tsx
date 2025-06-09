import LeftHero from "@/components/common/left-hero";
import React from "react";

const TermsAndConditions = () => {
  return (
    <>
      <LeftHero
        title="Terms & Conditions"
        description="Last updated: June 04, 2025"
        backgroundType="color"
        backgroundSrc="black"
        backgroundOverlay={true}
        backgroundOverlayOpacity={0.8}
        height="small"
        animated={true}
        parallaxEnabled={true}
        parallaxSpeed={0.7}
      />
      <main className="container mx-auto py-12">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="p-6">
            <p className="text-black mb-6">
              These Terms and Conditions govern your participation in Run Bhumi
              Cricket Tournament and the use of our services. Please read these
              terms carefully before registering for any tournament.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Agreement to Terms
              </h2>
              <p className="text-black">
                By using our website or participating in the tournament, you
                agree to these Terms and Conditions. If you do not accept them,
                please refrain from participation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Eligibility
              </h2>
              <ul className="list-disc pl-5 text-black space-y-2">
                <li>
                  Must be at least 16 years old at the time of registration.
                </li>
                <li>
                  Must not be registered with or contracted by any State or
                  District Association of the BCCI.
                </li>
                <li>
                  Must not be playing representative cricket under the BCCI.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Registration
              </h2>
              <p className="text-black">
                Participants must provide accurate details during registration
                and are responsible for maintaining their account security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Code of Conduct
              </h2>
              <p className="text-black mb-2">
                Respectful and sportsmanlike behavior is expected at all times.
                Any misconduct may lead to disqualification.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Tournament Compliance
              </h2>
              <p className="text-black">
                All participants must follow the tournament rules provided
                before the event.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Liability
              </h2>
              <p className="text-black">
                Run Bhumi is not responsible for any injuries or damages
                sustained during participation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Privacy Protection
              </h2>
              <p className="text-black">
                Our Privacy Policy outlines how we handle your data. Please
                review it for details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Changes to Terms
              </h2>
              <p className="text-black">
                We may update these terms at any time. Continued participation
                after changes implies acceptance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Legal Jurisdiction
              </h2>
              <p className="text-black">
                These terms are governed by the laws of New Delhi, and disputes
                will be settled in its courts.
              </p>
            </section>

            <section className="pt-4 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Contact Information
              </h2>
              <p className="text-black mb-1">
                If you have any questions or concerns about these Terms and
                Conditions, please contact us at:
              </p>
              <div className="mt-3 text-black">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:support@therunbhumi.com"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    support@therunbhumi.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">Whatsapp Enquiries:</span>{" "}
                  <a href="tel:+919964391643">+91 9964391643</a>
                </p>
                <p>
                  <span className="font-medium">Office:</span>{" "}
                  <a href="tel:+919964392643">+91 9964392643</a>
                </p>
                {/* <address className="not-italic">
                  <span className="font-medium">Address: </span>
                  MNT Dreams Pvt. Ltd. 770, Tower B - 1 Spaze IT Park, Sector
                  49, Sohna Road, Gurugram, Haryana - 122018
                </address> */}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsAndConditions;
