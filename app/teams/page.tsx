import Image from "next/image"
import Link from "next/link"
import { Trophy, Users, Mail, Linkedin, Github } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeamPage() {
  // Team members data
  const teamMembers = {
    leadership: [
      {
        id: 1,
        name: "Sarah Johnson",
        photo: "SJ",
        role: "Founder & CEO",
        experience: "15+ years",
        expertise: "Product Strategy",
        email: "sarah@company.com",
        linkedin: "sarahjohnson",
      },
      {
        id: 2,
        name: "David Chen",
        photo: "DC",
        role: "Co-Founder & CTO",
        experience: "12+ years",
        expertise: "AI & Machine Learning",
        email: "david@company.com",
        linkedin: "davidchen",
      },
      {
        id: 3,
        name: "Michael Rodriguez",
        photo: "MR",
        role: "Co-Founder & COO",
        experience: "10+ years",
        expertise: "Operations & Finance",
        email: "michael@company.com",
        linkedin: "michaelrodriguez",
      },
    ],
    technology: [
      {
        id: 4,
        name: "Priya Patel",
        photo: "PP",
        role: "Lead Engineer",
        experience: "8+ years",
        expertise: "Full-Stack Development",
        email: "priya@company.com",
        github: "priyacode",
      },
      {
        id: 5,
        name: "James Wilson",
        photo: "JW",
        role: "Senior ML Engineer",
        experience: "6+ years",
        expertise: "Natural Language Processing",
        email: "james@company.com",
        github: "jameswilson",
      },
      {
        id: 6,
        name: "Aisha Khan",
        photo: "AK",
        role: "UI/UX Designer",
        experience: "7+ years",
        expertise: "User Interface Design",
        email: "aisha@company.com",
        github: "aishakhan",
      },
      {
        id: 7,
        name: "Carlos Mendoza",
        photo: "CM",
        role: "DevOps Engineer",
        experience: "5+ years",
        expertise: "Cloud Infrastructure",
        email: "carlos@company.com",
        github: "carlosdev",
      },
    ],
    business: [
      {
        id: 8,
        name: "Olivia Taylor",
        photo: "OT",
        role: "Marketing Director",
        experience: "9+ years",
        expertise: "Digital Marketing",
        email: "olivia@company.com",
        linkedin: "oliviataylor",
      },
      {
        id: 9,
        name: "Alex Nguyen",
        photo: "AN",
        role: "Business Development",
        experience: "7+ years",
        expertise: "Strategic Partnerships",
        email: "alex@company.com",
        linkedin: "alexnguyen",
      },
      {
        id: 10,
        name: "Emma Clark",
        photo: "EC",
        role: "Customer Success",
        experience: "6+ years",
        expertise: "Client Relations",
        email: "emma@company.com",
        linkedin: "emmaclark",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Team</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the talented individuals who are driving innovation and excellence at our company
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs defaultValue="leadership" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>
            <TabsContent value="leadership" className="pt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.leadership.map((member) => (
                  <Link href={`/team/${member.id}`} key={member.id}>
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="p-4 bg-blue-50 dark:bg-blue-950/20">
                        <CardTitle className="flex items-center gap-2">
                          <div className="h-8 w-8 overflow-hidden rounded-full bg-blue-200 flex items-center justify-center">
                            <Image
                              src={`/placeholder.svg?height=32&width=32&text=${member.photo}`}
                              width={32}
                              height={32}
                              alt={member.name}
                              className="object-cover"
                            />
                          </div>
                          {member.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="grid gap-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Role:</span>
                            <span className="font-medium">{member.role}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Experience:</span>
                            <span className="font-medium">{member.experience}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Trophy className="h-3 w-3" />
                              Expertise:
                            </span>
                            <span className="font-medium">{member.expertise}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm mt-2">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Mail className="h-3 w-3" />
                            </span>
                            <span className="font-medium text-blue-600">{member.email}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Linkedin className="h-3 w-3" />
                            </span>
                            <span className="font-medium text-blue-600">linkedin.com/in/{member.linkedin}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="technology" className="pt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.technology.map((member) => (
                  <Link href={`/team/${member.id}`} key={member.id}>
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="p-4 bg-green-50 dark:bg-green-950/20">
                        <CardTitle className="flex items-center gap-2">
                          <div className="h-8 w-8 overflow-hidden rounded-full bg-green-200 flex items-center justify-center">
                            <Image
                              src={`/placeholder.svg?height=32&width=32&text=${member.photo}`}
                              width={32}
                              height={32}
                              alt={member.name}
                              className="object-cover"
                            />
                          </div>
                          {member.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="grid gap-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Role:</span>
                            <span className="font-medium">{member.role}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Experience:</span>
                            <span className="font-medium">{member.experience}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Trophy className="h-3 w-3" />
                              Expertise:
                            </span>
                            <span className="font-medium">{member.expertise}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm mt-2">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Mail className="h-3 w-3" />
                            </span>
                            <span className="font-medium text-blue-600">{member.email}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Github className="h-3 w-3" />
                            </span>
                            <span className="font-medium text-blue-600">github.com/{member.github}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="business" className="pt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.business.map((member) => (
                  <Link href={`/team/${member.id}`} key={member.id}>
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="p-4 bg-purple-50 dark:bg-purple-950/20">
                        <CardTitle className="flex items-center gap-2">
                          <div className="h-8 w-8 overflow-hidden rounded-full bg-purple-200 flex items-center justify-center">
                            <Image
                              src={`/placeholder.svg?height=32&width=32&text=${member.photo}`}
                              width={32}
                              height={32}
                              alt={member.name}
                              className="object-cover"
                            />
                          </div>
                          {member.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="grid gap-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Role:</span>
                            <span className="font-medium">{member.role}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Experience:</span>
                            <span className="font-medium">{member.experience}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Trophy className="h-3 w-3" />
                              Expertise:
                            </span>
                            <span className="font-medium">{member.expertise}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm mt-2">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Mail className="h-3 w-3" />
                            </span>
                            <span className="font-medium text-blue-600">{member.email}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Linkedin className="h-3 w-3" />
                            </span>
                            <span className="font-medium text-blue-600">linkedin.com/in/{member.linkedin}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}