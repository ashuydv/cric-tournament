// src/pages/dugout-code.js
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
import { ChevronRight, AlertTriangle, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DugoutCodePage() {
  return (
    <div className="container mx-auto py-40 px-4">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Code of Conduct in Team Dugouts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="border-l-4 border-l-orange-600">
            <CardHeader className="bg-slate-50">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-orange-800">
                    Code of Conduct in Team Dugouts
                  </CardTitle>
                  <CardDescription className="mt-2 text-slate-600">
                    Official Guidelines for RunBhumi Season 1
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="outline"
                    className="bg-orange-50 text-orange-700 border-orange-200 flex items-center gap-1"
                  >
                    <Calendar className="h-3 w-3" /> 30 April, 2025
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-orange-50 text-orange-700 border-orange-200 flex items-center gap-1"
                  >
                    <MapPin className="h-3 w-3" /> Delhi
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ScrollArea className="h-[60vh]">
                <div className="space-y-8">
                  <div className="prose max-w-none">
                    <p className="text-slate-600">Dear Team Operators,</p>
                    <p className="text-slate-600">
                      We extend our warmest regards and appreciation for your
                      participation in RunBhumi, India's premier grassroots and
                      cultural cricket talent league.
                    </p>
                    <p className="text-slate-600">
                      In the interest of maintaining operational discipline and
                      ensuring fair play throughout the tournament, we request
                      your strict adherence to the following{" "}
                      <b>Dugout Protocols</b>, which form part of the official
                      Players and Match Officials Area and are subject to
                      regulated access controls:
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-4 items-start bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        1
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">
                          Pre-Approved Personnel List
                        </p>
                        <p className="text-slate-600">
                          A pre-approved list of personnel authorized to be
                          present in the team dugout will be shared before each
                          match. This list will be prominently displayed near
                          the dugout.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        2
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Restricted Access</p>
                        <p className="text-slate-600">
                          Only individuals listed may access the dugout during
                          match hours. No substitutions or additional entries
                          will be permitted under any circumstances.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        3
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Maximum Officials</p>
                        <p className="text-slate-600">
                          A maximum of six (6) team officials are allowed per
                          dugout. The approved designations are:
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-4 text-slate-600">
                          <li>Head Coach</li>
                          <li>Assistant Coach</li>
                          <li>Team Manager</li>
                          <li>Physical Trainer</li>
                          <li>Physiotherapist</li>
                          <li>Performance Analyst</li>
                        </ul>
                        <p className="text-slate-600 mt-2">
                          Individuals performing roles outside of these
                          specified categories are not permitted in the dugout
                          at any time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                    <p className="text-slate-700">
                      Your cooperation in following these guidelines is critical
                      to upholding the integrity, professionalism, and smooth
                      conduct of RunBhumi matches.
                    </p>
                    <p className="text-slate-700 mt-2">
                      We appreciate your continued support and commitment to the
                      values and spirit of RunBhumi.
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="font-medium text-slate-800">Warm regards,</p>
                    <p className="mt-1 text-slate-600">
                      RunBhumi Team Management
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="bg-slate-50 border-t border-slate-200 flex justify-between py-2">
              <div className="flex items-center text-amber-600">
                <AlertTriangle className="h-4 w-4 mr-2" />
                <span className="text-sm">
                  Compliance with these guidelines is mandatory for all teams
                </span>
              </div>
              <Badge className="bg-orange-600">OFFICIAL DOCUMENT</Badge>
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
                  href="/commercial-guidelines"
                  className="flex items-center p-3 border rounded-md hover:bg-slate-50 transition-colors"
                >
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <ChevronRight className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">Commercial Guidelines</p>
                    <p className="text-sm text-slate-500">
                      Sponsorship, advertising, and IP
                    </p>
                  </div>
                </a>
                <a
                  href="/rulebook"
                  className="flex items-center p-3 border rounded-md hover:bg-slate-50 transition-colors"
                >
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <ChevronRight className="h-5 w-5 text-orange-600" />
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
                    <ChevronRight className="h-5 w-5 text-orange-600" />
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
        </div>
      </div>
    </div>
  );
}
