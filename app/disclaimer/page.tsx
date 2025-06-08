import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

type Props = {};

const Disclaimer = (props: Props) => {
  return (
    <div className="container mx-auto px-4 py-40">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Disclaimer</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
        <Separator className="mb-6" />

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Last Updated: May 3, 2025
          </h2>
          <p className="text-black">
            Please read this disclaimer carefully before using the Runbhumi
            platform and services.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">General Information</h2>
          <p className="text-black">
            The information provided on Runbhumi is for general informational
            purposes only. All information on this platform is provided in good
            faith, however, we make no representation or warranty of any kind,
            express or implied, regarding the accuracy, adequacy, validity,
            reliability, availability, or completeness of any information on the
            platform.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">No Liability</h2>
          <p className="text-black">
            Under no circumstance shall we have any liability to you for any
            loss or damage of any kind incurred as a result of the use of the
            platform or reliance on any information provided on the platform.
            Your use of the platform and your reliance on any information on the
            platform is solely at your own risk.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">External Links</h2>
          <p className="text-black">
            The platform may contain links to external websites that are not
            provided or maintained by or in any way affiliated with Runbhumi.
            Please note that we do not guarantee the accuracy, relevance,
            timeliness, or completeness of any information on these external
            websites.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">User-Generated Content</h2>
          <p className="text-black">
            The platform may include content provided by users. This content
            does not necessarily reflect the opinions or policies of Runbhumi.
            We are not responsible for any user-generated content and will not
            be liable for any loss or damage caused by reliance on such
            information.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Fitness Activities</h2>
          <p className="text-black">
            Runbhumi provides a platform for organizing and participating in
            sports and fitness activities. Participation in any physical
            activity carries inherent risks. Users participate at their own risk
            and should consult with a physician before engaging in any fitness
            program. Runbhumi is not responsible for any injuries or accidents
            that may occur during activities organized through our platform.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Modification of Disclaimer
          </h2>
          <p className="text-black">
            We reserve the right to make changes to this disclaimer at any time
            and for any reason. We will alert users to any changes by updating
            the "Last Updated" date of this disclaimer. You are encouraged to
            periodically review this disclaimer to stay informed of updates.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-black">
            If you have any questions about this disclaimer, please contact us
            at legal@runbhumi.com.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Disclaimer;
