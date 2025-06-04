import LeftHero from "@/components/common/left-hero";
import React from "react";

const RefundPolicy = () => {
  return (
    <>
      <LeftHero
        title="Refund Policy"
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
          <div className="p-6 text-gray-700">
            <p className="mb-6">
              This Refund Policy outlines the terms and conditions regarding
              refunds for registrations and services provided by{" "}
              <strong>RunBhumi</strong>.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Registration & Processing Fee
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  A non-refundable processing fee of{" "}
                  <strong>₹1500 + GST</strong> is mandatory for all
                  registrations.
                </li>
                <li>
                  Exceptions apply only if explicitly approved in writing by
                  RunBhumi authorities.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Cancellation by Participant
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Registrations canceled by participants are not eligible for
                  refunds under normal circumstances.
                </li>
                <li>
                  Refunds may be considered only in case of serious medical
                  emergencies (e.g., hospitalization, severe injury). A formal
                  request must be submitted with supporting documents (like a
                  medical certificate) within 7 days of cancellation.
                </li>
                <li>
                  Approval is at the sole discretion of RunBhumi authorities.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Cancellation or Rescheduling by Organizers
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  If an event or trial is canceled or postponed due to
                  unforeseen circumstances (e.g., extreme weather, legal
                  issues),
                </li>
                <li>
                  Participants may receive a pro-rata refund, credit for future
                  participation, or alternative arrangements.
                </li>
                <li>
                  Updates will be shared via email, SMS, and the official
                  website within 48 hours.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Trial Transfers
              </h2>
              <p>
                Participants unable to attend their originally selected trial
                zone or schedule may request a transfer to an alternative date
                or location at no additional cost, subject to availability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Force Majeure
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  RunBhumi is not liable for refunds or compensation due to
                  delays or cancellations caused by events beyond our control.
                </li>
                <li>
                  This includes natural disasters, pandemics, government
                  restrictions, or civil unrest.
                </li>
                <li>
                  Partial refunds or credits may be offered on a case-by-case
                  basis.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Refund Processing
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Approved refunds will be processed within 10–15 business days.
                </li>
                <li>
                  Refunds will be credited to the original payment method used.
                </li>
                <li>
                  Transaction or payment gateway charges may be deducted from
                  the refund amount.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Non-Refundable Items
              </h2>
              <p>The following items are strictly non-refundable:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Transaction fees charged by payment processors</li>
                <li>Late registration penalties</li>
                <li>Add-on services already utilized</li>
                <li>Registrations using promotional discounts or coupons</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Requesting a Refund
              </h2>
              <p>To request a refund, participants must:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>
                  Email us at{" "}
                  <a
                    href="mailto:hello@therunbhumi.com"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    hello@therunbhumi.com
                  </a>
                </li>
                <li>
                  Include registration confirmation, participant details, and
                  reason for refund
                </li>
                <li>Submit the request within the specified policy timeline</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Disputes
              </h2>
              <p>
                Disputes will be resolved under the Terms of Service and
                applicable Indian laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Policy Modifications
              </h2>
              <p>
                This Refund Policy may be updated periodically. Changes will be
                posted on this page. Continued participation implies acceptance
                of the revised terms.
              </p>
            </section>

            <section className="pt-4 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Contact Information
              </h2>
              <p className="mb-2">
                For any questions or concerns, please contact us:
              </p>
              <div className="space-y-1">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:hello@therunbhumi.com"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    hello@therunbhumi.com
                  </a>
                </p>
                <p>
                  <strong>Whatsapp Enquiries:</strong>{" "}
                  <a href="tel:+919964391643">+91 9964391643</a>
                </p>
                <p>
                  <strong>IVR:</strong>{" "}
                  <a href="tel:+919964392643">+91 9964392643</a>
                </p>
                <p>
                  <strong>Office/Admin:</strong>{" "}
                  <a href="tel:+919964396643">+91 9964396643</a>
                </p>
                <p>
                  <strong>Address:</strong>
                  <br />
                  MNT Dreams Pvt. Ltd.
                  <br />
                  770, Tower B - 1, Spaze IT Park,
                  <br />
                  Sector 49, Sohna Road, Gurugram, Haryana - 122002
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default RefundPolicy;
