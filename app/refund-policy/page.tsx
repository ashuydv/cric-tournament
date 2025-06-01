import LeftHero from "@/components/common/left-hero";
import React from "react";

const RefundPolicy = () => {
  return (
    <>
      <LeftHero
        title="Refund Policy"
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
      <main className="container mx-auto py-12">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="p-6">
            <p className="text-gray-700 mb-6">
              This Refund Policy outlines the terms and conditions regarding
              refunds for tournament registrations and other services provided
              by RunBhumi.
            </p>

            {/* <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Registration Cancellations
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Player/Team Cancellations
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    Full refunds (100%) are provided if cancellation is made at
                    least 14 days prior to the tournament date
                  </li>
                  <li>
                    50% refund if cancellation is made 7-13 days before the
                    tournament date
                  </li>
                  <li>
                    25% refund if cancellation is made 3-6 days before the
                    tournament date
                  </li>
                  <li>
                    No refunds for cancellations made less than 72 hours before
                    the tournament date
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Tournament Cancellations
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    If RunBhumi cancels a tournament, participants will receive
                    a full refund of their registration fees
                  </li>
                  <li>
                    In case of postponement, participants may choose between
                    participating in the rescheduled event or receiving a full
                    refund
                  </li>
                </ul>
              </div>
            </section> */}

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Processing Timeline
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>
                  Approved refunds will be processed within 10-15 business days
                </li>
                <li>
                  Refunds will be issued using the original payment method used
                  for registration
                </li>
                <li>
                  Processing fees or payment gateway charges may be deducted
                  from the refund amount as applicable
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Non-Refundable Items
              </h2>
              <p className="text-gray-700 mb-2">
                The following are non-refundable under any circumstances:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Transaction fees charged by payment processors</li>
                <li>Late registration fees or penalty charges</li>
                <li>Add-on services that have already been utilized</li>
                <li>
                  Special promotional discounts or coupon codes applied to
                  registrations
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Force Majeure
              </h2>
              <p className="text-gray-700 mb-2">
                In cases of force majeure (including but not limited to natural
                disasters, government actions, pandemics, or civil unrest):
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>
                  RunBhumi may offer partial refunds, credit for future
                  tournaments, or alternative arrangements
                </li>
                <li>
                  The specific resolution will be determined based on the nature
                  and timing of the event
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Requesting a Refund
              </h2>
              <p className="text-gray-700 mb-2">
                To request a refund, participants must:
              </p>
              <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                <li>
                  Submit a formal request through email at{" "}
                  <a
                    href="mailto:hello@therunbhumi.com"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    hello@therunbhumi.com
                  </a>
                </li>
                <li>
                  Include registration confirmation details, participant
                  information, and reason for cancellation
                </li>
                <li>Adhere to the timelines specified in this policy</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Disputes
              </h2>
              <p className="text-gray-700">
                Any disputes regarding refunds will be resolved according to our
                Terms of Service and applicable laws of India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Policy Modifications
              </h2>
              <p className="text-gray-700">
                This Refund Policy may be updated periodically. Any revisions
                will be reflected on this page, and continued registration for
                our tournaments indicates acceptance of the updated terms.
              </p>
            </section>

            <section className="pt-4 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-1">
                If you have any questions or concerns about this Refund Policy,
                please contact us at:
              </p>
              <div className="mt-3 text-gray-700">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:hello@therunbhumi.com"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    hello@therunbhumi.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+919964392643">+91 9964392643</a>
                </p>
                <address className="not-italic">
                  <span className="font-medium">Address: </span>
                  MNT Dreams Pvt. Ltd. 770, Tower B - 1 Spaze IT park, Sector 49
                  Sohna Road, Gurugram, Haryana-122002
                </address>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default RefundPolicy;
