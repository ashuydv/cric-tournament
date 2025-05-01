"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  CalendarIcon,
  MapPinIcon,
  UsersIcon,
  ClockIcon,
  ChevronRightIcon,
  Search,
  Check,
  ArrowRight,
  Mail,
} from "lucide-react";
import Link from "next/link";
import LeftHero from "@/components/common/left-hero";

// Define state-city mapping
type StateCityMap = {
  [key: string]: string[];
};

const stateCityMap: StateCityMap = {
  maharashtra: [
    "Mumbai",
    "Kalyan",
    "Nashik",
    "Pune",
    "Thane",
    "Vasai",
    "Vashi",
    "Aurangabad",
    "Nagpur",
    "Solapur",
    "Kolhapur",
    "Panvel",
  ],
  delhi: ["Delhi", "Noida"],
  karnataka: ["Bangalore", "Mysore"],
  tamilnadu: ["Chennai"],
  westbengal: ["Kolkata"],
  gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  haryana: ["Gurugram", "Faridabad", "Rohtak", "Hisar"],
  uttarpradesh: ["Lucknow", "Agra", "Varanasi", "Meerut", "Jhansi"],
  kerala: ["Kochi"],
  rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
  madhyapradesh: ["Bhopal", "Indore", "Gwalior"],
  bihar: ["Patna"],
  goa: ["Goa"],
  andhrapradesh: ["Vijayawada"],
  telangana: ["Hyderabad"],
  chattisgarh: ["Raipur"],
  uttarakhand: ["Dehradun"],
  jharkhand: ["Jamshedpur", "Ranchi"],
  assam: ["Guwahati"],
  jammuandkashmir: ["Jammu"],
  chandigarh: ["Chandigarh"],
  odisha: ["Bhubaneshwar"],
  punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Mohali"],
};

// Define trial schedule data
const trialSchedule = [
  {
    date: "27-Apr-25",
    locations: ["Chandigarh", "Ludhiana", "Delhi", "Lucknow"],
  },
  { date: "03-May-25", locations: ["Mumbai", "Kalyan", "Kochi", ""] },
  {
    date: "04-May-25",
    locations: ["Mohali", "Noida", "Gurugram", "Faridabad"],
  },
  { date: "10-May-25", locations: ["Chennai", "Jalandhar", "Bangalore", ""] },
  { date: "11-May-25", locations: ["Vashi", "Vasai", "Hyderabad", ""] },
  { date: "17-May-25", locations: ["Indore", "Gwalior", "Vadodara", ""] },
  { date: "18-May-25", locations: ["Surat", "Ahmedabad", "Rajkot", ""] },
  { date: "24-May-25", locations: ["Varanasi", "Delhi", "", "Goa"] },
  { date: "25-May-25", locations: ["Kolkata", "Patna", "Lucknow", ""] },
  { date: "31-May-25", locations: ["Bhopal", "Jabalpur", "Gwalior", ""] },
  { date: "01-Jun-25", locations: ["Thane", "Pune", "Panvel", ""] },
  { date: "07-Jun-25", locations: ["Mumbai", "Nashik", "Bangalore", ""] },
  { date: "08-Jun-25", locations: ["Hyderabad", "Vijayawada", "Mysore", ""] },
  { date: "14-Jun-25", locations: ["Raipur", "Bhubaneshwar", "Dehradun", ""] },
  {
    date: "15-Jun-25",
    locations: ["Aurangabad", "Nagpur", "Solapur", "Kolhapur"],
  },
  { date: "21-Jun-25", locations: ["Noida", "Agra", "Amritsar", ""] },
  { date: "22-Jun-25", locations: ["Rajkot", "Udaipur", "Chennai", ""] },
  { date: "28-Jun-25", locations: ["Jhansi", "Jamshedpur", "", ""] },
  { date: "29-Jun-25", locations: ["Guwahati", "Ranchi", "", ""] },
  { date: "05-Jul-25", locations: ["Jammu", "Chandigarh", "", ""] },
  { date: "06-Jul-25", locations: ["Jaipur", "Jodhpur", "", ""] },
  { date: "12-Jul-25", locations: ["Meerut", "Hisar", "", ""] },
  { date: "13-Jul-25", locations: ["Amritsar", "Rohtak", "", ""] },
];

interface FormData {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  dateOfBirth: string;
  email: string;
  state: string;
  trialCity: string;
  playingPosition: string;
  preferredFoot: string;
  tshirtSize: string;
  agreement: boolean;
}

export default function RunBhumiTrialsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    dateOfBirth: "",
    email: "",
    state: "",
    trialCity: "",
    playingPosition: "",
    preferredFoot: "",
    tshirtSize: "",
    agreement: false,
  });

  // Filter trial schedule based on search term
  const filteredSchedule = trialSchedule.filter((schedule) => {
    // If no search term, show all schedules
    if (!searchTerm) return true;

    // Check if date contains search term
    if (schedule.date.toLowerCase().includes(searchTerm.toLowerCase()))
      return true;

    // Check if any location contains search term
    return schedule.locations.some((location) =>
      location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Handle state selection change
  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setFormData((prev) => ({
      ...prev,
      state: state,
    }));

    if (state === "all") {
      setAvailableCities([]);
    } else {
      setAvailableCities(stateCityMap[state] || []);
    }
  };

  // Handle city selection from the trial schedule
  const handleCitySelect = (city: string) => {
    if (!city || city === "") return;

    setSelectedCity(city);

    // Find state for this city
    let stateForCity: string | null = null;
    for (const [state, cities] of Object.entries(stateCityMap)) {
      if (cities.some((c) => c.toLowerCase() === city.toLowerCase())) {
        stateForCity = state;
        break;
      }
    }

    if (stateForCity) {
      setSelectedState(stateForCity);
      setAvailableCities(stateCityMap[stateForCity] || []);

      // Update form data
      setFormData((prev) => ({
        ...prev,
        state: stateForCity || "",
        trialCity: city,
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreement: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Registration data sent:", formData);

      // Set success state
      setSubmissionSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      mobileNumber: "",
      dateOfBirth: "",
      email: "",
      state: "",
      trialCity: "",
      playingPosition: "",
      preferredFoot: "",
      tshirtSize: "",
      agreement: false,
    });
    setAvailableCities([]);
    setSelectedCity(null);
    setSelectedState("");
    setSubmissionSuccess(false);
  };

  return (
    <main className="flex-1">
      <LeftHero
        title="Trials"
        description="Join India's Greatest Cricket Talent Hunt and showcase your skills on the national stage."
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1562077772-3bd90403f7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D"
        height="small"
        animated={true}
        parallaxEnabled={true}
        parallaxSpeed={0.7}
      />

      <section className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Eligibility Criteria
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              To be eligible for participation in the RunBhumi Trials 2025,
              participants must comply with the following conditions:
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mb-10">
            <ul className="space-y-6">
              <li className="flex items-center">
                <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-md mr-3 shrink-0 mt-1">
                  MUST NOT
                </div>
                <p className="text-gray-700">
                  be below the age of 20 years at the time of registrations as
                  per legal identification documents.
                </p>
              </li>
              <li className="flex items-center">
                <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-md mr-3 shrink-0 mt-1">
                  MUST NOT
                </div>
                <p className="text-gray-700">
                  be currently registered with any state or district association
                  of BCCI.
                </p>
              </li>
              <li className="flex items-center">
                <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-md mr-3 shrink-0 mt-1">
                  MUST NOT
                </div>
                <p className="text-gray-700">
                  currently have any existing contract with any state or
                  district association of the BCCI.
                </p>
              </li>
              <li className="flex items-center">
                <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-md mr-3 shrink-0 mt-1">
                  MUST NOT
                </div>
                <p className="text-gray-700">
                  be participating or playing in any representative cricket for
                  any State or District Association of BCCI.
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">
              Important Note
            </h3>
            <p className="text-gray-700">
              All participants will be required to provide documentation
              confirming they meet these eligibility criteria. Any false
              information provided may result in disqualification without refund
              of registration fees. If you're unsure about your eligibility
              status, please contact our support team before registering.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Search Trials</h2>
              <div className="flex items-center gap-4">
                <Button variant="outline">Clear Filters</Button>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Apply Filters
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="state">State/Region</label>
                <Select value={selectedState} onValueChange={handleStateChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All States" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                    <SelectItem value="westbengal">West Bengal</SelectItem>
                    <SelectItem value="gujarat">Gujarat</SelectItem>
                    <SelectItem value="punjab">Punjab</SelectItem>
                    <SelectItem value="haryana">Haryana</SelectItem>
                    <SelectItem value="uttarpradesh">Uttar Pradesh</SelectItem>
                    <SelectItem value="kerala">Kerala</SelectItem>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="madhyapradesh">
                      Madhya Pradesh
                    </SelectItem>
                    <SelectItem value="bihar">Bihar</SelectItem>
                    <SelectItem value="goa">Goa</SelectItem>
                    <SelectItem value="andhrapradesh">
                      Andhra Pradesh
                    </SelectItem>
                    <SelectItem value="telangana">Telangana</SelectItem>
                    <SelectItem value="chattisgarh">Chattisgarh</SelectItem>
                    <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                    <SelectItem value="jharkhand">Jharkhand</SelectItem>
                    <SelectItem value="assam">Assam</SelectItem>
                    <SelectItem value="jammuandkashmir">
                      Jammu & Kashmir
                    </SelectItem>
                    <SelectItem value="chandigarh">Chandigarh</SelectItem>
                    <SelectItem value="odisha">Odisha</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="city">City</label>
                <Select
                  disabled={!selectedState || selectedState === "all"}
                  value={formData.trialCity}
                  onValueChange={(value) =>
                    handleSelectChange("trialCity", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        selectedState && selectedState !== "all"
                          ? "Select a city"
                          : "Please select a state first"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {availableCities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedCity && (
                  <p className="text-xs text-green-600 mt-1">
                    Selected trial city: {selectedCity}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-4"></CardFooter>
        </Card>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Popular Cities</h2>
            <Link
              href="#"
              className="text-orange-600 hover:text-orange-700 flex items-center font-medium"
            >
              View All Cities
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-4">
            {[
              "Mumbai",
              "Delhi",
              "Bangalore",
              "Chennai",
              "Kolkata",
              "Hyderabad",
              "Pune",
              "Ahmedabad",
              "Lucknow",
              "Jaipur",
            ].map((city) => (
              <div
                key={city}
                className="flex flex-col items-center group cursor-pointer"
                onClick={() => handleCitySelect(city)}
              >
                <div className="h-16 w-16 rounded-full bg-white shadow-md flex items-center justify-center mb-2 group-hover:-translate-y-1 transition-transform">
                  <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                </div>
                <span className="text-sm">{city}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trial Schedule Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Trial Schedule</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search city or date..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
          </div>

          <Card className="overflow-hidden border border-gray-200 mb-10">
            <CardHeader className="bg-orange-600 text-white p-4">
              <CardTitle className="text-center">
                RunBhumi Trials 2025 - Dates & Locations
              </CardTitle>
            </CardHeader>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-orange-100">
                  <TableRow>
                    <TableHead className="w-1/5 font-bold">Date</TableHead>
                    <TableHead className="text-center font-bold">
                      Location 1
                    </TableHead>
                    <TableHead className="text-center font-bold">
                      Location 2
                    </TableHead>
                    <TableHead className="text-center font-bold">
                      Location 3
                    </TableHead>
                    <TableHead className="text-center font-bold">
                      Location 4
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSchedule.map((schedule, index) => (
                    <TableRow
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <TableCell className="font-medium">
                        {schedule.date}
                      </TableCell>
                      {schedule.locations.map((location, locIndex) => (
                        <TableCell key={locIndex} className="text-center">
                          {location ? (
                            <Button
                              variant="ghost"
                              className="text-orange-600 hover:text-orange-800 hover:bg-orange-100"
                              onClick={() => handleCitySelect(location)}
                            >
                              {location}
                            </Button>
                          ) : (
                            "—"
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold flex items-center mb-6">
            <span className="text-orange-600 mr-2">●</span>
            Your Path to Selection
          </h2>
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="mb-8 relative">
              <div className="absolute -left-8 top-0 bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold z-10">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Initial Screening</h3>
              <p className="text-gray-600 mb-2">
                The first assessment focuses on basic technical abilities and
                general performance in skill assessments.
              </p>
              <div className="text-sm text-gray-500">
                90 min. session - selection based on your performance in basic
                skill assessments
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="absolute -left-8 top-0 bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold z-10">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Matches</h3>
              <p className="text-gray-600 mb-2">
                Players are evaluated on how they apply their skills in
                small-sided games, focusing on decision-making and teamwork.
              </p>
              <div className="text-sm text-gray-500">
                60 min. session - observed for technical application and
                tactical awareness
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="absolute -left-8 top-0 bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold z-10">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Final Selection Camp
              </h3>
              <p className="text-gray-600 mb-2">
                The final assessment evaluates players in full-sided games with
                official rules.
              </p>
              <div className="text-sm text-gray-500">
                Full 11v11 matches over 2 days - intensive focus on all
                attributes as a complete player
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-0 bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold z-10">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Draft</h3>
              <p className="text-gray-600 mb-2">
                Selected players are invited to join teams based on their
                performance throughout the trial process.
              </p>
              <div className="text-sm bg-orange-100 text-orange-700 px-4 py-2 rounded-md inline-block">
                Top performers receive academy placements and potential contract
                offers
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Evaluation Methodology</h2>
          <p className="mb-6 text-gray-600">
            RunBhumiTrials uses a standardized 100-point grading system designed
            to identify complete prospects compared with the perfect balance of
            technical skills, tactical awareness, physical fitness, and mental
            attributes.
          </p>

          <div className="grid gap-6 md:grid-cols-4 lg:gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-orange-600 h-3 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">40 points</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Tactical Awareness</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-orange-600 h-3 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">30 points</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Physical Fitness</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-orange-600 h-3 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">20 points</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Mental Attributes</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-orange-600 h-3 rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">10 points</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
