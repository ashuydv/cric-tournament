// src/pages/commercial-guidelines.js
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, FileText, AlertCircle, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function CommercialGuidelinesPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Commercial Guidelines</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-3">
          <Card className="border-l-4 border-l-orange-600">
            <CardHeader className="bg-slate-50">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-orange-800">
                    RunBhumi – Commercial Guidelines
                  </CardTitle>
                  <CardDescription className="mt-2 text-slate-600">
                    Guidelines for commercial activities within the RunBhumi
                    ecosystem
                  </CardDescription>
                </div>
                {/* <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button> */}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="prose max-w-none mb-6">
                <p className="text-slate-600">
                  Welcome to the RunBhumi Commercial Guidelines. These
                  directives have been designed to offer clarity and consistency
                  across all commercial activities within the RunBhumi
                  ecosystem. Adhering to these standards ensures a framework of
                  fairness, transparency, and alignment with the values and
                  cultural spirit of RunBhumi.
                </p>
              </div>

              <Tabs defaultValue="sponsorship" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="sponsorship">Sponsorship</TabsTrigger>
                  <TabsTrigger value="advertising">Advertising</TabsTrigger>
                  <TabsTrigger value="merchandising">Merchandising</TabsTrigger>
                  <TabsTrigger value="other">Other Rights</TabsTrigger>
                </TabsList>

                <ScrollArea className="h-[60vh] mt-4">
                  <TabsContent value="sponsorship" className="space-y-4">
                    <h3 className="text-xl font-semibold text-orange-800">
                      1. Sponsorship
                    </h3>

                    <div className="space-y-4">
                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <p className="font-medium">
                          1.1. Approved Sponsors Only
                        </p>
                        <p className="text-slate-600 mt-1">
                          Only league-approved sponsors are permitted to engage
                          in sponsorship activities within RunBhumi.
                        </p>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <p className="font-medium">
                          1.2. Prohibited Sponsorship Categories
                        </p>
                        <p className="text-slate-600 mt-1">
                          The following categories are strictly prohibited from
                          participating as sponsors:
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 text-slate-600">
                          <li>Alcohol Brands</li>
                          <li>Smoking Brands</li>
                          <li>Betting/Gambling Brands</li>
                          <li>Gutka/Pan Masala Brands</li>
                          <li>Any Surrogate Branding linked to the above</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <p className="font-medium">1.3. Approval Process</p>
                        <p className="text-slate-600 mt-1">
                          All sponsorship proposals must be submitted to
                          RunBhumi League Management for review and approval.
                        </p>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <p className="font-medium">1.4. Management Rights</p>
                        <p className="text-slate-600 mt-1">
                          The management reserves the right to reject any
                          sponsor that conflicts with RunBhumi's ethos, values,
                          or commercial interests.
                        </p>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <p className="font-medium">
                          1.5. Title Sponsor Protection
                        </p>
                        <p className="text-slate-600 mt-1">
                          No competing brand to the league's title sponsor
                          category may be onboarded by franchises—except for the
                          officially designated "Principal Sponsor" of that
                          franchise.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="advertising" className="space-y-4">
                    <h3 className="text-xl font-semibold text-orange-800">
                      2. Advertising
                    </h3>

                    <div className="space-y-4">
                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <p className="font-medium">
                          2.1. Approved Advertisers Only
                        </p>
                        <p className="text-slate-600 mt-1">
                          Only approved advertisers may advertise within
                          RunBhumi properties (events, media, venues, or
                          digital).
                        </p>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <p className="font-medium">2.2. Content Standards</p>
                        <p className="text-slate-600 mt-1">
                          All advertisements must conform to RunBhumi's creative
                          and ethical standards and must not contain content
                          deemed offensive, vulgar, or culturally insensitive.
                        </p>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <p className="font-medium">
                          2.3. Prohibited Advertising Categories
                        </p>
                        <p className="text-slate-600 mt-1">
                          The following categories are not permitted for
                          advertising:
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 text-slate-600">
                          <li>Alcohol Brands</li>
                          <li>Smoking Brands</li>
                          <li>Betting/Gambling Brands</li>
                          <li>Gutka/Pan Masala Brands</li>
                          <li>
                            Any form of surrogate advertising of the above
                            categories
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <p className="font-medium">2.4. Approval Requirement</p>
                        <p className="text-slate-600 mt-1">
                          All ad placements are subject to prior approval by
                          league management.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="merchandising" className="space-y-4">
                    <h3 className="text-xl font-semibold text-orange-800">
                      3. Merchandising
                    </h3>

                    <div className="space-y-4">
                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <p className="font-medium">
                          3.1. Exclusive Vendor Rights
                        </p>
                        <p className="text-slate-600 mt-1">
                          Merchandising rights are exclusive to approved
                          vendors, selected by both franchises and the league.
                        </p>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <p className="font-medium">
                          3.2. Licensing Requirement
                        </p>
                        <p className="text-slate-600 mt-1">
                          All merchandise vendors must secure licensing from
                          RunBhumi League Management, coordinated through their
                          respective franchise.
                        </p>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <p className="font-medium">
                          3.3. Counterfeit Prohibition
                        </p>
                        <p className="text-slate-600 mt-1">
                          Counterfeit, unlicensed, or unauthorized merchandise
                          is strictly prohibited and will attract legal action
                          and operational bans.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="other" className="space-y-4">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-orange-800">
                          4. Broadcast Rights
                        </h3>
                        <div className="space-y-4 mt-2">
                          <div className="p-4 bg-white border rounded-lg shadow-sm">
                            <p className="font-medium">4.1. Reserved Rights</p>
                            <p className="text-slate-600 mt-1">
                              All broadcast and streaming rights for RunBhumi
                              matches, trials, and shows are reserved for
                              officially authorized broadcasters.
                            </p>
                          </div>

                          <div className="p-4 bg-white border rounded-lg shadow-sm">
                            <p className="font-medium">
                              4.2. Unauthorized Recording Prohibition
                            </p>
                            <p className="text-slate-600 mt-1">
                              Any form of unauthorized recording, distribution,
                              or streaming of RunBhumi content is strictly
                              prohibited.
                            </p>
                          </div>

                          <div className="p-4 bg-white border rounded-lg shadow-sm">
                            <p className="font-medium">
                              4.3. Rights Management
                            </p>
                            <p className="text-slate-600 mt-1">
                              RunBhumi Management retains sole rights to
                              negotiate, grant, and revoke broadcast rights.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-orange-800">
                          5. Ticketing
                        </h3>
                        <div className="space-y-4 mt-2">
                          <div className="p-4 bg-white border rounded-lg shadow-sm">
                            <p className="font-medium">
                              5.1. Authorized Sales Channels
                            </p>
                            <p className="text-slate-600 mt-1">
                              Tickets for RunBhumi events are to be distributed
                              and sold through authorized ticketing partners
                              only.
                            </p>
                          </div>

                          <div className="p-4 bg-white border rounded-lg shadow-sm">
                            <p className="font-medium">
                              5.2. Scalping Prohibition
                            </p>
                            <p className="text-slate-600 mt-1">
                              Scalping or unauthorized resale of tickets at
                              premium prices is prohibited.
                            </p>
                          </div>

                          <div className="p-4 bg-white border rounded-lg shadow-sm">
                            <p className="font-medium">5.3. Invalid Tickets</p>
                            <p className="text-slate-600 mt-1">
                              Tickets purchased through illegitimate channels
                              are subject to cancellation without refund.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-orange-800">
                          6. Intellectual Property
                        </h3>
                        <div className="space-y-4 mt-2">
                          <div className="p-4 bg-white border rounded-lg shadow-sm">
                            <p className="font-medium">6.1. Legal Protection</p>
                            <p className="text-slate-600 mt-1">
                              All trademarks, logos, names, and creative content
                              associated with RunBhumi are protected by
                              applicable intellectual property laws.
                            </p>
                          </div>

                          <div className="p-4 bg-white border rounded-lg shadow-sm">
                            <p className="font-medium">
                              6.2. Unauthorized Usage
                            </p>
                            <p className="text-slate-600 mt-1">
                              Unauthorized usage of RunBhumi's IP in any
                              form—commercial or non-commercial—will attract
                              legal action.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </ScrollArea>
              </Tabs>
            </CardContent>
            <CardFooter className="bg-slate-50 border-t border-slate-200 flex justify-between py-2">
              <div className="flex items-center text-amber-600">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span className="text-sm">
                  These guidelines are subject to periodic review and updates
                </span>
              </div>
              <Badge className="bg-orange-600">VERSION 2025.1</Badge>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Related Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <a
                  href="/code-of-conduct"
                  className="flex items-center p-3 border rounded-md hover:bg-slate-50 transition-colors"
                >
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <FileText className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">Code of Conduct</p>
                    <p className="text-sm text-slate-500">
                      Team dugout guidelines
                    </p>
                  </div>
                </a>
                <a
                  href="/rulebook"
                  className="flex items-center p-3 border rounded-md hover:bg-slate-50 transition-colors"
                >
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <FileText className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">Rule Book</p>
                    <p className="text-sm text-slate-500">
                      Rules and regulations
                    </p>
                  </div>
                </a>
                <a
                  href="/pmoa"
                  className="flex items-center p-3 border rounded-md hover:bg-slate-50 transition-colors"
                >
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <FileText className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">PMOA Standards</p>
                    <p className="text-sm text-slate-500">
                      Player and Match Official Areas
                    </p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-lg font-semibold text-orange-800">
                Need Assistance?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-slate-600">
                <p>
                  For clarification on any commercial guidelines, please
                  contact:
                </p>
                <p className="mt-2 font-medium">RunBhumi Commercial Team</p>
                <a href="mailto:hello@therunbhumi.com" className="text-sm">
                  hello@therunbhumi.com
                </a> <br />
                <a href="tel:+919964391643" className="text-sm">
                  +919964391643
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
