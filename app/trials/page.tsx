"use client";

import { useState, useEffect } from "react";
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
  FilterIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import LeftHero from "@/components/common/left-hero";
import SelectionPathRoadmap from "@/components/selection-path-roadmap";
import Image from "next/image";

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

// City images mapping
const cityImages: { [key: string]: string } = {
  Mumbai: "/images/cities/mumbai.png",
  Delhi: "/images/cities/ncr.png",
  Bangalore: "/images/cities/bang.png",
  Hyderabad: "/images/cities/hyd.png",
  Ahmedabad: "/images/cities/ahd.png",
  Chandigarh: "/images/cities/chd.png",
  Chennai: "/images/cities/chen.png",
  Kolkata: "/images/cities/kolk.png",
  Pune: "/images/cities/pune.png",
  Kochi: "/images/cities/koch.png",
};

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
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [showAllCities, setShowAllCities] = useState<boolean>(false);

  // New states for filtering
  const [appliedState, setAppliedState] = useState<string>("");
  const [appliedCity, setAppliedCity] = useState<string | null>(null);
  const [filteredSchedule, setFilteredSchedule] = useState(trialSchedule);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

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

  // Get city image or use default
  const getCityImage = (city: string) => {
    return (
      cityImages[city] || cityImages.default || "/images/cities/default.png"
    );
  };

  // List of popular cities
  const popularCities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
  ];

  // Filter trial schedule based on search term and applied filters
  useEffect(() => {
    let filtered = trialSchedule;
    let filters: string[] = [];

    // Apply search term filter
    if (searchTerm) {
      filtered = filtered.filter((schedule) => {
        // Check if date contains search term
        if (schedule.date.toLowerCase().includes(searchTerm.toLowerCase()))
          return true;

        // Check if any location contains search term
        return schedule.locations.some((location) =>
          location.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      filters.push(`Search: "${searchTerm}"`);
    }

    // Apply state/city filters
    if (appliedCity) {
      filtered = filtered.filter((schedule) =>
        schedule.locations.some(
          (location) => location.toLowerCase() === appliedCity.toLowerCase()
        )
      );
      filters.push(`City: ${appliedCity}`);
    } else if (appliedState && appliedState !== "all") {
      // Get all cities in the selected state
      const stateCities = stateCityMap[appliedState] || [];
      filtered = filtered.filter((schedule) =>
        schedule.locations.some((location) =>
          stateCities.some(
            (city) => city.toLowerCase() === location.toLowerCase()
          )
        )
      );

      // Get state display name (capitalize first letter)
      const stateDisplayName =
        appliedState.charAt(0).toUpperCase() + appliedState.slice(1);
      filters.push(`State: ${stateDisplayName}`);
    }

    setFilteredSchedule(filtered);
    setActiveFilters(filters);
  }, [searchTerm, appliedState, appliedCity]);

  // Get city state map for reverse lookup
  const getCityState = (cityName: string): string | null => {
    for (const [state, cities] of Object.entries(stateCityMap)) {
      if (
        cities.some((city) => city.toLowerCase() === cityName.toLowerCase())
      ) {
        return state;
      }
    }
    return null;
  };

  // Handle state selection change
  const handleStateChange = (state: string) => {
    setSelectedState(state);

    if (state === "all" || state === "") {
      setAvailableCities([]);
      setSelectedCity(null);
    } else {
      setAvailableCities(stateCityMap[state] || []);

      // Update form data state
      setFormData((prev) => ({
        ...prev,
        state: state,
      }));
    }
  };

  // Handle city selection change
  const handleCityChange = (city: string) => {
    setSelectedCity(city);

    // Update form data
    setFormData((prev) => ({
      ...prev,
      trialCity: city,
    }));
  };

  // Handle city selection from the trial schedule
  const handleCitySelect = (city: string) => {
    if (!city || city === "") return;

    // Find state for this city
    const stateForCity = getCityState(city);

    if (stateForCity) {
      setSelectedState(stateForCity);
      setAvailableCities(stateCityMap[stateForCity] || []);
      setSelectedCity(city);

      // Auto-apply the filter when selecting a city from the schedule
      setAppliedState(stateForCity);
      setAppliedCity(city);

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

    // Additional handling for state/city selection in the form
    if (id === "state") {
      handleStateChange(value);
    } else if (id === "trialCity") {
      setSelectedCity(value);
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreement: checked,
    }));
  };

  // Apply filters function
  const applyFilters = () => {
    setAppliedState(selectedState);
    setAppliedCity(selectedCity);
    setShowFilters(false);
  };

  // Clear filters function
  const clearFilters = () => {
    setSelectedState("");
    setSelectedCity(null);
    setAppliedState("");
    setAppliedCity(null);
    setAvailableCities([]);
    setSearchTerm("");
    setFormData((prev) => ({
      ...prev,
      state: "",
      trialCity: "",
    }));
  };

  // Remove single filter
  const removeFilter = (filter: string) => {
    if (filter.startsWith("Search:")) {
      setSearchTerm("");
    } else if (filter.startsWith("City:")) {
      setAppliedCity(null);
      setSelectedCity(null);
    } else if (filter.startsWith("State:")) {
      setAppliedState("");
      setSelectedState("");
      setAppliedCity(null);
      setSelectedCity(null);
    }
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
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {showAllCities ? "All Cities" : "Popular Cities"}
            </h2>
            <Button
              variant="ghost"
              className="text-orange-600 hover:text-orange-700 flex items-center font-medium"
              onClick={() => setShowAllCities(!showAllCities)}
            >
              {showAllCities ? "Show Popular Cities" : "View All Cities"}
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {!showAllCities ? (
            <div className="flex gap-20 items-center justify-center">
              {popularCities.map((city) => (
                <div
                  key={city}
                  className={`flex flex-col items-center group cursor-pointer text-center`}
                  onClick={() => handleCitySelect(city)}
                >
                  <div
                    className={`h-20 w-20 rounded-xl p-4 overflow-hidden 
                        bg-white shadow-md hover:shadow-lg flex items-center justify-center mb-2 group-hover:-translate-y-1 transition-transform mx-auto`}
                  >
                    <Image
                      src={getCityImage(city)}
                      alt={city}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      selectedCity === city
                        ? "text-orange-600"
                        : "text-gray-700"
                    }`}
                  >
                    {city}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(stateCityMap).map(([state, cities]) => (
                  <div key={state} className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 text-orange-600 capitalize">
                      {state.charAt(0).toUpperCase() + state.slice(1)}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {cities.map((city) => (
                        <Button
                          key={city}
                          variant="ghost"
                          size="sm"
                          className={`justify-start ${
                            selectedCity === city
                              ? "bg-orange-100 text-orange-700 font-medium"
                              : "hover:bg-orange-50"
                          }`}
                          onClick={() => handleCitySelect(city)}
                        >
                          <div className="w-6 h-6 rounded-full overflow-hidden mr-2 flex-shrink-0">
                            <Image
                              src={getCityImage(city)}
                              alt={city}
                              width={24}
                              height={24}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          {city}
                          {selectedCity === city && (
                            <Check className="ml-1 h-3 w-3" />
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Trial Schedule Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Trial Schedule</h2>
            <div className="flex items-center space-x-2">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search city or date..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FilterIcon className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {showFilters && (
            <Card className="mb-4 p-4 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="state-filter">State</Label>
                  <Select
                    value={selectedState}
                    onValueChange={(value) => handleStateChange(value)}
                  >
                    <SelectTrigger id="state-filter" className="bg-white">
                      <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All States</SelectItem>
                      {Object.keys(stateCityMap).map((state) => (
                        <SelectItem key={state} value={state}>
                          {state.charAt(0).toUpperCase() + state.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="city-filter">City</Label>
                  <Select
                    value={selectedCity || ""}
                    onValueChange={(value) => handleCityChange(value)}
                    disabled={!selectedState || availableCities.length === 0}
                  >
                    <SelectTrigger id="city-filter" className="bg-white">
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Cities</SelectItem>
                      {availableCities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end space-x-2">
                  <Button
                    onClick={applyFilters}
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Apply Filters
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Active filters display */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {activeFilters.map((filter, index) => (
                <div
                  key={index}
                  className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                >
                  {filter}
                  <button
                    onClick={() => removeFilter(filter)}
                    className="ml-2 text-orange-800 hover:text-orange-900"
                  >
                    <XIcon className="h-3 w-3" />
                  </button>
                </div>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Clear All
              </Button>
            </div>
          )}

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
                  {filteredSchedule.length > 0 ? (
                    filteredSchedule.map((schedule, index) => (
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
                                className={`${
                                  selectedCity === location
                                    ? "bg-orange-100 text-orange-800"
                                    : "text-orange-600 hover:text-orange-800 hover:bg-orange-100"
                                }`}
                                onClick={() => handleCitySelect(location)}
                              >
                                {location}
                                {selectedCity === location && (
                                  <Check className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            ) : (
                              "—"
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center py-8 text-gray-500"
                      >
                        No trial dates match your current filters. Please try
                        different search criteria.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            {filteredSchedule.length > 0 && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {filteredSchedule.length === trialSchedule.length
                      ? `Showing all ${trialSchedule.length} trial dates`
                      : `Showing ${filteredSchedule.length} of ${trialSchedule.length} trial dates`}
                  </div>
                  {(appliedState || appliedCity || searchTerm) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearFilters}
                      className="text-sm"
                    >
                      Reset Filters
                    </Button>
                  )}
                </div>
              </div>
            )}
          </Card>
        </div>

        <SelectionPathRoadmap />

        <div className="bg-gray-100 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Evaluation Methodology</h2>
          <p className="mb-6 text-gray-600">
            RunBhumi Trials uses a standardized 100-point grading system
            designed to identify complete prospects compared with the perfect
            balance of technical skills, tactical awareness, physical fitness,
            and mental attributes.
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

        {/* Registration Form */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Register for Trials</h2>

          {submissionSuccess ? (
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">
                  Registration Complete!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Thank you for registering for the RunBhumi Trials 2025. We
                  have received your application for the trials in{" "}
                  {formData.trialCity}.
                </p>
                <p className="mb-4">
                  You will receive a confirmation email at {formData.email} with
                  further details about your trial date and location.
                </p>
                <p className="text-sm text-gray-600">
                  Please make sure to bring your ID proof and any relevant
                  documentation on the trial day.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={resetForm}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Register Another Player
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader className="bg-orange-50">
                <CardTitle>Player Registration Form</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber">Mobile Number</Label>
                      <Input
                        id="mobileNumber"
                        type="tel"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        placeholder="Enter your mobile number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select
                        value={formData.state}
                        onValueChange={(value) =>
                          handleSelectChange("state", value)
                        }
                      >
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(stateCityMap).map((state) => (
                            <SelectItem key={state} value={state}>
                              {state.charAt(0).toUpperCase() + state.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="trialCity">Trial City</Label>
                      <Select
                        value={formData.trialCity}
                        onValueChange={(value) =>
                          handleSelectChange("trialCity", value)
                        }
                        disabled={
                          !formData.state || availableCities.length === 0
                        }
                      >
                        <SelectTrigger id="trialCity">
                          <SelectValue placeholder="Select trial city" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableCities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="playingPosition">Playing Position</Label>
                      <Select
                        value={formData.playingPosition}
                        onValueChange={(value) =>
                          handleSelectChange("playingPosition", value)
                        }
                      >
                        <SelectTrigger id="playingPosition">
                          <SelectValue placeholder="Select your position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="batsman">Batsman</SelectItem>
                          <SelectItem value="bowler">Bowler</SelectItem>
                          <SelectItem value="all-rounder">
                            All-Rounder
                          </SelectItem>
                          <SelectItem value="wicket-keeper">
                            Wicket-Keeper
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredFoot">Dominant Hand</Label>
                      <Select
                        value={formData.preferredFoot}
                        onValueChange={(value) =>
                          handleSelectChange("preferredFoot", value)
                        }
                      >
                        <SelectTrigger id="preferredFoot">
                          <SelectValue placeholder="Select your dominant hand" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="right">Right Hand</SelectItem>
                          <SelectItem value="left">Left Hand</SelectItem>
                          <SelectItem value="ambidextrous">
                            Ambidextrous
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tshirtSize">T-Shirt Size</Label>
                      <Select
                        value={formData.tshirtSize}
                        onValueChange={(value) =>
                          handleSelectChange("tshirtSize", value)
                        }
                      >
                        <SelectTrigger id="tshirtSize">
                          <SelectValue placeholder="Select t-shirt size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="xs">XS</SelectItem>
                          <SelectItem value="s">S</SelectItem>
                          <SelectItem value="m">M</SelectItem>
                          <SelectItem value="l">L</SelectItem>
                          <SelectItem value="xl">XL</SelectItem>
                          <SelectItem value="xxl">XXL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-4">
                    <Checkbox
                      id="agreement"
                      checked={formData.agreement}
                      onCheckedChange={handleCheckboxChange}
                      required
                    />
                    <Label htmlFor="agreement" className="text-sm">
                      I confirm that I meet all eligibility criteria and the
                      information provided is accurate.
                    </Label>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Register for Trial
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </main>
  );
}
