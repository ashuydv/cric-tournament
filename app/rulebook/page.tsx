"use client";
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
  BookOpen,
  Users,
  Award,
  Clock,
  ArrowDownCircle,
  AlertTriangle,
  Info,
  Star,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RuleBookPage() {
  const [searchTerm, setSearchTerm] = useState("");

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
            <BreadcrumbPage>Rule Book</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <Card className="sticky top-24">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-lg font-semibold text-orange-800 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Rule Book Sections
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <nav className="space-y-1">
                <a
                  href="#players"
                  className="flex items-center px-4 py-3 text-sm hover:bg-slate-50 border-l-2 border-transparent hover:border-orange-500 transition-colors"
                >
                  <Users className="h-4 w-4 mr-3 text-orange-600" />
                  <span>Players</span>
                </a>
                <a
                  href="#umpires"
                  className="flex items-center px-4 py-3 text-sm hover:bg-slate-50 border-l-2 border-transparent hover:border-orange-500 transition-colors"
                >
                  <Award className="h-4 w-4 mr-3 text-orange-600" />
                  <span>Umpires</span>
                </a>
                <a
                  href="#intervals"
                  className="flex items-center px-4 py-3 text-sm hover:bg-slate-50 border-l-2 border-transparent hover:border-orange-500 transition-colors"
                >
                  <Clock className="h-4 w-4 mr-3 text-orange-600" />
                  <span>Intervals</span>
                </a>
                <a
                  href="#innings"
                  className="flex items-center px-4 py-3 text-sm hover:bg-slate-50 border-l-2 border-transparent hover:border-orange-500 transition-colors"
                >
                  <ArrowDownCircle className="h-4 w-4 mr-3 text-orange-600" />
                  <span>Innings</span>
                </a>
                <a
                  href="#special-rules"
                  className="flex items-center px-4 py-3 text-sm hover:bg-slate-50 border-l-2 border-transparent hover:border-orange-500 transition-colors"
                >
                  <Star className="h-4 w-4 mr-3 text-orange-600" />
                  <span>Special Rules</span>
                </a>
              </nav>
            </CardContent>

            <div className="p-4 border-t">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search rules..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card className="border-l-4 border-l-orange-600">
            <CardHeader className="bg-slate-50">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-orange-800">
                    RunBhumi – Rule Book
                  </CardTitle>
                  <CardDescription className="mt-2 text-slate-600">
                    Rules and Regulations for RunBhumi League Matches
                  </CardDescription>
                </div>
                <Badge className="bg-orange-600">VERSION 2025.1</Badge>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              <ScrollArea className="h-[70vh]">
                <div className="space-y-8">
                  {/* Players Section */}
                  <section id="players" className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <Users className="h-4 w-4" />
                      </div>
                      <h2 className="text-xl font-bold text-orange-800">
                        1. THE PLAYERS
                      </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value="item-1"
                        className="border rounded-lg mb-2 border-slate-200"
                      >
                        <AccordionTrigger className="px-4 py-2 hover:bg-slate-50 font-medium">
                          Number of players
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-0 text-slate-600">
                          A match is played between two sides, each of eleven
                          players, one of whom shall be captain.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-2"
                        className="border rounded-lg mb-2 border-slate-200"
                      >
                        <AccordionTrigger className="px-4 py-2 hover:bg-slate-50 font-medium">
                          Nomination and replacement of players
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-0 text-slate-600">
                          <div className="space-y-2">
                            <p>
                              Each captain shall nominate 11 players plus a
                              maximum of 4 substitute fielders in writing to the
                              RunBhumi Match Referee before the toss.
                            </p>
                            <p>
                              No player (member of the playing eleven) may be
                              changed after the nomination and prior to the
                              start of play without the consent of the opposing
                              captain. (Except in case of injury and the same
                              shall be immediately reported to RunBhumi Match
                              Referee)
                            </p>
                            <p>
                              Only those nominated as substitute fielders shall
                              be entitled to act as substitute fielders during
                              the match, unless the RunBhumi Match Referee, in
                              exceptional circumstances, allows subsequent
                              additions.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-3"
                        className="border rounded-lg mb-2 border-slate-200"
                      >
                        <AccordionTrigger className="px-4 py-2 hover:bg-slate-50 font-medium">
                          Squad
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-0 text-slate-600">
                          <div className="space-y-2">
                            <p>
                              The squad of each team would be of 16 players
                              each.
                            </p>
                            <p>
                              The playing 11 of the squad needs to have a
                              mandatory:
                            </p>
                            <ul className="list-disc list-inside space-y-1 pl-4">
                              <li>
                                One player from each RunBhumi Zone (East, West,
                                North, South and Central)
                              </li>
                              <li>One U/19 Player</li>
                            </ul>
                            <p>
                              The captain needs to mark their list of bowlers
                              from the playing 11 during their lineup who can be
                              challenged during the 50-50 over. (minimum 5
                              Bowlers Compulsory except U/19)
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-4"
                        className="border rounded-lg mb-2 border-slate-200"
                      >
                        <AccordionTrigger className="px-4 py-2 hover:bg-slate-50 font-medium">
                          Playing Gear
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-0 text-slate-600">
                          <ul className="list-disc list-inside space-y-1 pl-4">
                            <li>
                              Batsman needs to wear guard compulsory during
                              their batting.
                            </li>
                            <li>
                              Batsman are permitted to use security equipment's
                              for their safety.
                            </li>
                            <li>Wicket keeper is allowed to wear gloves.</li>
                            <li>
                              Fibre and Plastic bats would strictly not be
                              allowed, only wooden bats would be permitted for
                              use during the matches of RunBhumi T10.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-5"
                        className="border rounded-lg mb-2 border-slate-200"
                      >
                        <AccordionTrigger className="px-4 py-2 hover:bg-slate-50 font-medium">
                          Captain
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-0 text-slate-600">
                          <div className="space-y-2">
                            <p>
                              If at any time the captain is not available, a
                              deputy shall act for him.
                            </p>
                            <p>
                              If a captain is not available to nominate the
                              players, then any person associated with that team
                              may act as his deputy to do so.
                            </p>
                            <p>
                              At any time after the nomination of the players,
                              only a nominated player can act as deputy in
                              discharging the duties and responsibilities of the
                              captain as stated in these Playing Conditions,
                              including at the toss.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </section>

                  {/* Umpires Section */}
                  <section id="umpires" className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <Award className="h-4 w-4" />
                      </div>
                      <h2 className="text-xl font-bold text-orange-800">
                        2. THE UMPIRES
                      </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value="item-1"
                        className="border rounded-lg mb-2 border-slate-200"
                      >
                        <AccordionTrigger className="px-4 py-2 hover:bg-slate-50 font-medium">
                          Appointment and attendance
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-0 text-slate-600">
                          <div className="space-y-2">
                            <p>
                              The following rules for the selection and
                              appointment of T10 umpires shall be followed as
                              far as it is practicable to do so:
                            </p>
                            <p>
                              The umpires shall control the game as requiorange
                              by these Playing Conditions, with absolute
                              impartiality and shall be present at the ground at
                              least two hours before the scheduled start of
                              play.
                            </p>
                            <p>
                              The following Match Officials are to be appointed
                              for each T10 match:
                            </p>
                            <ul className="list-disc list-inside space-y-1 pl-4">
                              <li>
                                One (1) Match Referee, appointed by the
                                RunBhumi.
                              </li>
                              <li>
                                Two (2) on-field umpires appointed by the
                                RunBhumi from their representatives on a Panel
                                of Umpires.
                              </li>
                              <li>
                                One (1) third umpire appointed by RunBhumi from
                                their representatives, who shall act as the
                                emergency on-field umpire.
                              </li>
                            </ul>
                            <p>
                              Neither team shall have a right of objection to
                              the appointment of any umpire or match referee.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-2"
                        className="border rounded-lg mb-2 border-slate-200"
                      >
                        <AccordionTrigger className="px-4 py-2 hover:bg-slate-50 font-medium">
                          Fair and unfair play
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-0 text-slate-600">
                          <p>
                            The umpires shall be the sole judges of fair and
                            unfair play.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </section>

                  {/* Special Rules Section */}
                  <section id="special-rules" className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <Star className="h-4 w-4" />
                      </div>
                      <h2 className="text-xl font-bold text-orange-800">
                        RUNBHUMI SPECIAL RULES
                      </h2>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <p className="text-orange-700 font-medium">
                        RunBhumi features special rules that make the format
                        unique and exciting. These include:
                      </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value="item-1"
                        className="border rounded-lg mb-2 border-slate-200"
                      >
                        <AccordionTrigger className="px-4 py-2 hover:bg-slate-50 font-medium">
                          Tape Ball Over
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-0 text-slate-600">
                          <ul className="list-disc list-inside space-y-1 pl-4">
                            <li>
                              The Bowling team needs to compulsory bowl minimum
                              1 over and is allowed select to maximum 2 overs to
                              be bowled with Tape Ball of RunBhumi (From 1st to
                              10th Over).
                            </li>
                            <li>
                              The tape ball acts as an improvised cricket ball
                              with the tape stretched tightly over the fuzzy
                              felt-like covering of a tennis ball to ensure a
                              smooth surface that produces greater pace after
                              bouncing.
                            </li>
                            <li>
                              The Tape Ball over cannot be bowled in 50-50 Over.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-2"
                        className="border rounded-lg mb-2 border-slate-200"
                      >
                        <AccordionTrigger className="px-4 py-2 hover:bg-slate-50 font-medium">
                          50-50 Over
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-0 text-slate-600">
                          <div className="space-y-2">
                            <p>
                              50-50 over needs to be called out by the batsman
                              at the Strategic Time out i.e after the last ball
                              of the 5th Over. Batsman needs to inform the
                              umpire regarding the over in which their team
                              would take the 50-50 over (only 6th, 7th or 8th )
                              along with the name of the bowler that needs to
                              bowl that over.
                            </p>
                            <p>
                              An U/19 Player (Bowler) cannot be challenged for
                              the 50-50 Over.
                            </p>
                            <p>
                              In case if the batsman has not called out for
                              50-50 over in the Strategic Timeout in that case
                              8th Over would compulsory be a 50-50 over. The
                              Batsman in this case would not get an option to
                              select the bowler of his choice.
                            </p>
                            <p>
                              A batsman can challenge a specific bowler in
                              Strategic Timeout for minimum 16 runs or more that
                              he would score in 50-50 over.
                            </p>
                            <p>
                              In case if the batsman achieves the targeted runs
                              in that over, the batting team would receive an
                              additional 50% of the total runs scoorange in that
                              over to their total score after the over is
                              completed.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-3"
                        className="border rounded-lg mb-2 border-slate-200"
                      >
                        <AccordionTrigger className="px-4 py-2 hover:bg-slate-50 font-medium">
                          9-Street Runs
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-0 text-slate-600">
                          <ul className="list-disc list-inside space-y-1 pl-4">
                            <li>
                              If the ball hit by the batsman crosses over fence
                              and goes in the audience directly it would be
                              counted as 9 runs.
                            </li>
                            <li>
                              A total of 9 runs shall also be added to personal
                              score of the batsman.
                            </li>
                            <li>
                              If the catch is taken by any fan from the
                              audience, then that fan shall receive Rs.3,000
                              from RunBhumi.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div className="text-amber-700">
                        <p className="font-medium">
                          Amended Rules: 30th April 2025
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                          <li>
                            Every team needs to carry Bibs along with them.
                            These needs to be worn compulsory by the substitute
                            players thought the match. (while on field, Dugout)
                          </li>
                          <li>
                            The team list should be marked and submitted
                            according to the tournament rules and handed over to
                            the official before the toss.
                          </li>
                          <li>
                            Penalties shall apply on the captain of the team for
                            slow over rates.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </ScrollArea>
            </CardContent>

            <CardFooter className="bg-slate-50 border-t border-slate-200 flex justify-between">
              <div className="flex items-center text-slate-600">
                <Info className="h-4 w-4 mr-2" />
                <span className="text-sm">
                  For complete rules, download the full PDF version
                </span>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700">
                Download Full Rule Book
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
