// src/pages/pmoa-standards.js
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
import {
  ChevronRight,
  Shield,
  ShieldAlert,
  User,
  Users,
  Smartphone,
  ArrowRight,
  X,
  Check,
  HelpCircle,
  Download,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PmoaStandardsPage() {
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
            <BreadcrumbPage>PMOA Standards</BreadcrumbPage>
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
                    <span className="flex items-center">
                      <ShieldAlert className="h-6 w-6 mr-2 text-orange-700" />
                      RunBhumi PMOA Standards
                    </span>
                  </CardTitle>
                  <CardDescription className="mt-2 text-slate-600">
                    Minimum Standards for Players' and Match Officials' Areas
                    During Matches
                  </CardDescription>
                </div>
                <div>
                  {/* <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button> */}
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              <div className="prose max-w-none mb-6">
                <p className="text-slate-600">
                  These Minimum Standards seek to combat advancing mobile
                  communication technology and increasing sophistication in the
                  methods by which betting takes place on cricket matches, by
                  restricting to the greatest extent possible all methods of
                  communication between Players, Player Support Personnel and
                  Match Officials with all third parties.
                </p>
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="areas">PMOA Areas</TabsTrigger>
                  <TabsTrigger value="devices">Device Restrictions</TabsTrigger>
                  <TabsTrigger value="breaches">Breaches</TabsTrigger>
                </TabsList>

                <ScrollArea className="h-[60vh] mt-4">
                  <TabsContent value="overview" className="space-y-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">
                        Introduction, Scope and Application
                      </h3>
                      <div className="space-y-2 text-slate-600">
                        <p>
                          RunBhumi has adopted these Minimum Standards in
                          support of the RunBhumi Anti-Corruption Code and the
                          fundamental sporting imperatives which that Code is
                          designed to address.
                        </p>
                        <p>
                          All Players, Player Support Personnel and Match
                          Officials:
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-4">
                          <li>
                            are automatically bound by and required to comply
                            with all of the provisions of these Minimum
                            Standards
                          </li>
                          <li>
                            agree to submit to the authority of the ACU General
                            Manager to adopt, apply, monitor and enforce these
                            Minimum Standards
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">
                        Key Definitions
                      </h3>
                      <div className="space-y-4">
                        <div className="flex">
                          <div className="font-medium text-orange-700 w-36 flex-shrink-0">
                            RunBhumi Anti-Corruption Manager:
                          </div>
                          <div className="text-slate-600">
                            The individual(s) appointed by the RunBhumi ACU to
                            provide anti-corruption and security support
                            services
                          </div>
                        </div>

                        <div className="flex">
                          <div className="font-medium text-orange-700 w-36 flex-shrink-0">
                            Mobile Device:
                          </div>
                          <div className="text-slate-600">
                            Any portable device (including, without limitation,
                            a personal digital assistant (PDA), blackberry,
                            mobile phone, smartwatch, tablet computer) which is
                            capable of connecting to or using any mobile
                            telecommunications or WiFI technology
                          </div>
                        </div>

                        <div className="flex">
                          <div className="font-medium text-orange-700 w-36 flex-shrink-0">
                            PMOA:
                          </div>
                          <div className="text-slate-600">
                            Players' and Match Officials' Area as defined in
                            Article 2.1
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">
                        Effective Date
                      </h3>
                      <p className="text-slate-600">
                        The Minimum Standards shall come into full force and
                        effect on 27th February 2024 and shall replace all
                        previous versions of the Minimum Standards.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="areas" className="space-y-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">
                        Access to the Players' and Match Officials' Area
                        ("PMOA")
                      </h3>
                      <p className="text-slate-600">
                        At each relevant Match, the PMOA shall comprise of the
                        following areas:
                      </p>
                    </div>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Area</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            Dressing Rooms
                          </TableCell>
                          <TableCell>
                            Each of the dressing rooms (including any medical or
                            other similar rooms that may be accessed from within
                            the dressing room) that are used by the teams
                            participating in the relevant Match
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Match Officials' Rooms
                          </TableCell>
                          <TableCell>
                            Each of the dressing rooms (including any medical or
                            other similar rooms that may be accessed from within
                            the dressing room) that are used by the Match
                            Officials in the relevant Match
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Viewing Areas
                          </TableCell>
                          <TableCell>
                            Each of the match viewing areas (whether internal or
                            external, including any 'dug-out' area) used by the
                            teams participating in the relevant Match
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Operational Rooms
                          </TableCell>
                          <TableCell>
                            The operational room(s) used by any Umpire
                            (including third or other Umpires) during the course
                            of the relevant Match
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Match Referee Room
                          </TableCell>
                          <TableCell>
                            The operational room(s) used by the Match Referee
                            during the course of the relevant Match
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Dining Areas
                          </TableCell>
                          <TableCell>
                            The dining area(s) used by the Players, Player
                            Support Personnel and Match Officials during and
                            after the relevant Match
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Other Areas
                          </TableCell>
                          <TableCell>
                            All other areas that the RunBhumi Anti-Corruption
                            Manager determines should be included
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <div className="bg-white border rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">
                        Accreditation Requirements
                      </h3>
                      <div className="space-y-4 text-slate-600">
                        <p>
                          Access to the PMOA will be restricted only to those
                          individuals whose presence in that area is absolutely
                          essential for operational purposes.
                        </p>
                        <div className="flex space-x-2 items-start">
                          <Check className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <p>
                            Players and Match Officials must display their PMOA
                            accreditation passes prior to their first entry into
                            the PMOA on the day of a Match.
                          </p>
                        </div>
                        <div className="flex space-x-2 items-start">
                          <Check className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <p>
                            All temporary visitors must display their PMOA
                            temporary 'visitor' accreditation passes whenever
                            they enter or leave the PMOA.
                          </p>
                        </div>
                        <div className="flex space-x-2 items-start">
                          <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <p>
                            No individual, irrespective of their identity, job,
                            role or responsibility, will be allowed to enter, or
                            remain within, the PMOA without displaying an
                            official accreditation pass.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="devices" className="space-y-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">
                        Use of Communication Devices in the PMOA
                      </h3>
                      <p className="text-slate-600">
                        The following prohibitions shall apply from the moment
                        that the first Player of any participating team enters
                        the PMOA for a Match right through until the formal
                        conclusion of the day's play:
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex space-x-3 items-start p-4 bg-white border rounded-lg">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Smartphone className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">
                            Mobile Device Restrictions
                          </p>
                          <p className="text-slate-600 mt-1">
                            No person shall be allowed to use and/or carry any
                            Mobile Device for any reason whatsoever, whether to
                            access the Internet or otherwise, in the PMOA.
                          </p>
                        </div>
                      </div>

                      <div className="flex space-x-3 items-start p-4 bg-white border rounded-lg">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <X className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">
                            Laptop/Computer Restrictions
                          </p>
                          <p className="text-slate-600 mt-1">
                            No person shall be allowed to use and/or or carry,
                            any laptop computer (or any other similar
                            communication device) for any reason whatsoever,
                            whether to access the Internet or otherwise, in the
                            PMOA.
                          </p>
                        </div>
                      </div>

                      <div className="flex space-x-3 items-start p-4 bg-white border rounded-lg">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <X className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">
                            Telephone Restrictions
                          </p>
                          <p className="text-slate-600 mt-1">
                            No person shall be allowed to use any static /
                            landline (or similar) telephone capable of making
                            calls from inside or receiving calls from outside
                            the PMOA.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">
                        Limited Exceptions
                      </h3>
                      <div className="space-y-3 text-slate-600">
                        <p>
                          Unless otherwise agreed by the RunBhumi
                          Anti-Corruption Manager in advance, there are limited
                          exceptions to the above prohibitions:
                        </p>

                        <TooltipProvider>
                          <div className="flex space-x-2 items-start">
                            <Check className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="flex items-center">
                                <span className="font-medium">
                                  Team Manager
                                </span>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <HelpCircle className="h-4 w-4 ml-1 text-slate-400" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="max-w-xs">
                                      May carry a Mobile Device for cricket
                                      operations purposes and personal matters
                                      with express permission
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                              <p className="mt-1">
                                Permitted to carry one Mobile Device within the
                                PMOA
                              </p>
                            </div>
                          </div>

                          <div className="flex space-x-2 items-start">
                            <Check className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="flex items-center">
                                <span className="font-medium">
                                  Team Media Manager
                                </span>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <HelpCircle className="h-4 w-4 ml-1 text-slate-400" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="max-w-xs">
                                      Device must be turned to silent mode and
                                      not used within the PMOA
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                              <p className="mt-1">
                                Permitted to carry one Mobile Device within the
                                PMOA
                              </p>
                            </div>
                          </div>

                          <div className="flex space-x-2 items-start">
                            <Check className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="flex items-center">
                                <span className="font-medium">Team Doctor</span>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <HelpCircle className="h-4 w-4 ml-1 text-slate-400" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="max-w-xs">
                                      May only use for genuine medical
                                      emergencies, must be password protected
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                              <p className="mt-1">
                                Permitted to carry one Mobile Device and one
                                laptop
                              </p>
                            </div>
                          </div>
                        </TooltipProvider>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="breaches" className="space-y-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">
                        Breaches of the Minimum Standards
                      </h3>
                      <p className="text-slate-600">
                        Where any breach of these standards is alleged, it will
                        be reported to the RunBhumi Anti-Corruption Manager.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <h4 className="font-medium text-orange-700">
                          First Breach
                        </h4>
                        <p className="text-slate-600 mt-1">
                          In the case of a first breach within a rolling period
                          of twenty-four (24) months, the Player, Player Support
                          Personnel or Match Official will receive a written
                          warning from the ACU General Manager.
                        </p>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <h4 className="font-medium text-orange-700">
                          First Breach (Player with Training)
                        </h4>
                        <p className="text-slate-600 mt-1">
                          In the case of a first breach by a Player who has
                          attended and received education and training, he will
                          receive a fine of INR 50,000 imposed by the ACU
                          General Manager.
                        </p>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <h4 className="font-medium text-orange-700">
                          Second Breach
                        </h4>
                        <p className="text-slate-600 mt-1">
                          In the case of a second breach within a rolling period
                          of twenty-four (24) months, the Player, Player Support
                          Personnel or Match Official will have a fine of INR
                          1,50,000 imposed by the ACU General Manager.
                        </p>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <h4 className="font-medium text-orange-700">
                          Third or Subsequent Breach
                        </h4>
                        <p className="text-slate-600 mt-1">
                          In the case of a third, or any subsequent, breach
                          within a rolling period of twenty-four (24) months,
                          the Player, Player Support Personnel or Match Official
                          will have a fine of INR 2,50,000 imposed by the ACU
                          General Manager.
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex">
                      <ShieldAlert className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div className="text-red-700">
                        <p className="font-medium">Non-Appealable Decision</p>
                        <p className="mt-1">
                          Any decision made by the ACU General Manager in
                          relation to any breach shall be the full, final and
                          complete disposition of the matter, immediately
                          binding and non-appealable.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </ScrollArea>
              </Tabs>
            </CardContent>

            <CardFooter className="bg-slate-50 border-t border-slate-200 flex justify-between py-2">
              <div className="text-sm text-slate-500">
                Approved: 30 April, 2025
              </div>
              <Badge className="bg-orange-600">VERSION 2025.1</Badge>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-lg font-semibold text-orange-800">
                Related Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="pt-4 space-y-4">
                <a
                  href="/code-of-conduct"
                  className="flex items-center p-3 border rounded-md hover:bg-slate-50 transition-colors"
                >
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">Code of Conduct</p>
                    <p className="text-sm text-slate-500">
                      Team dugout guidelines
                    </p>
                  </div>
                </a>
                <a
                  href="/commercial-guidelines"
                  className="flex items-center p-3 border rounded-md hover:bg-slate-50 transition-colors"
                >
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <User className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">Commercial Guidelines</p>
                    <p className="text-sm text-slate-500">
                      Sponsorship and advertising
                    </p>
                  </div>
                </a>
                <a
                  href="/rulebook"
                  className="flex items-center p-3 border rounded-md hover:bg-slate-50 transition-colors"
                >
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <BookOpen className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">Rule Book</p>
                    <p className="text-sm text-slate-500">
                      Rules and regulations
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
