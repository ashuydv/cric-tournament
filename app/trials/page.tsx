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
    date: "17-May-25",
    locations: ["Indore", "Gwalior", "Vadodara", "Coming Soon"],
  },
  {
    date: "18-May-25",
    locations: ["Surat", "Ahmedabad", "Rajkot", "Coming Soon"],
  },
  { date: "24-May-25", locations: ["Varanasi", "Delhi", "Coming Soon", "Goa"] },
  {
    date: "25-May-25",
    locations: ["Kolkata", "Patna", "Lucknow", "Coming Soon"],
  },
  {
    date: "31-May-25",
    locations: ["Bhopal", "Jabalpur", "Gwalior", "Coming Soon"],
  },
  { date: "01-Jun-25", locations: ["Thane", "Pune", "Panvel", "Coming Soon"] },
  {
    date: "07-Jun-25",
    locations: ["Mumbai", "Nashik", "Bangalore", "Coming Soon"],
  },
  {
    date: "08-Jun-25",
    locations: ["Hyderabad", "Vijayawada", "Mysore", "Coming Soon"],
  },
  {
    date: "14-Jun-25",
    locations: ["Raipur", "Bhubaneshwar", "Dehradun", "Coming Soon"],
  },
  {
    date: "15-Jun-25",
    locations: ["Aurangabad", "Nagpur", "Solapur", "Kolhapur"],
  },
  {
    date: "21-Jun-25",
    locations: ["Noida", "Agra", "Amritsar", "Coming Soon"],
  },
  {
    date: "22-Jun-25",
    locations: ["Rajkot", "Udaipur", "Chennai", "Coming Soon"],
  },
  {
    date: "28-Jun-25",
    locations: ["Jhansi", "Jamshedpur", "Coming Soon", "Coming Soon"],
  },
  {
    date: "29-Jun-25",
    locations: ["Guwahati", "Ranchi", "Coming Soon", "Coming Soon"],
  },
  {
    date: "05-Jul-25",
    locations: ["Jammu", "Chandigarh", "Coming Soon", "Coming Soon"],
  },
  {
    date: "06-Jul-25",
    locations: ["Jaipur", "Jodhpur", "Coming Soon", "Coming Soon"],
  },
  {
    date: "12-Jul-25",
    locations: ["Meerut", "Hisar", "Coming Soon", "Coming Soon"],
  },
  {
    date: "13-Jul-25",
    locations: ["Amritsar", "Rohtak", "Coming Soon", "Coming Soon"],
  },
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

      {/* Eligibility Criteria Section - Responsive */}
      <section className="w-full py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter">
              Eligibility Criteria
            </h2>
            <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-muted-foreground px-2">
              To be eligible for participation in the RunBhumi Trials 2025,
              participants must comply with the following conditions:
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10">
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-md shrink-0 text-center sm:text-left text-sm sm:text-base">
                  MUST NOT
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  be below the age of 16 years at the time of registrations as
                  per legal identification documents.
                </p>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-md shrink-0 text-center sm:text-left text-sm sm:text-base">
                  MUST NOT
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  be currently registered with any state or district association
                  of BCCI.
                </p>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-md shrink-0 text-center sm:text-left text-sm sm:text-base">
                  MUST NOT
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  currently have any existing contract with any state or
                  district association of the BCCI.
                </p>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-md shrink-0 text-center sm:text-left text-sm sm:text-base">
                  MUST NOT
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  be participating or playing in any representative cricket for
                  any State or District Association of BCCI.
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-orange-700 mb-3 sm:mb-4">
              Important Note
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              All participants will be required to provide documentation
              confirming they meet these eligibility criteria. Any false
              information provided may result in disqualification without refund
              of registration fees. If you're unsure about your eligibility
              status, please contact our support team before registering.
            </p>
          </div>
        </div>
      </section>

      {/* Cities and Schedule Section - Responsive */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        {/* Cities Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">
              {showAllCities ? "All Cities" : "Popular Cities"}
            </h2>
            <Button
              variant="ghost"
              className="text-orange-600 hover:text-orange-700 flex items-center font-medium text-sm sm:text-base self-start sm:self-auto"
              onClick={() => setShowAllCities(!showAllCities)}
            >
              {showAllCities ? "Show Popular Cities" : "View All Cities"}
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {!showAllCities ? (
            /* Popular Cities Grid - Responsive */
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8">
              {popularCities.map((city) => (
                <div
                  key={city}
                  className={`flex flex-col items-center group cursor-pointer text-center`}
                  onClick={() => handleCitySelect(city)}
                >
                  <div
                    className={`h-16 w-16 sm:h-20 sm:w-20 rounded-xl p-3 sm:p-4 overflow-hidden 
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
                    className={`text-xs sm:text-sm font-medium ${
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
            /* All Cities View - Responsive */
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {Object.entries(stateCityMap).map(([state, cities]) => (
                  <div key={state} className="mb-4">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-orange-600 capitalize">
                      {state.charAt(0).toUpperCase() + state.slice(1)}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {cities.map((city) => (
                        <Button
                          key={city}
                          variant="ghost"
                          size="sm"
                          className={`justify-start text-xs sm:text-sm ${
                            selectedCity === city
                              ? "bg-orange-100 text-orange-700 font-medium"
                              : "hover:bg-orange-50"
                          }`}
                          onClick={() => handleCitySelect(city)}
                        >
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

        {/* Trial Schedule Section - Responsive */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">Trial Schedule</h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full lg:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search city or date..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white text-sm"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FilterIcon className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Filter Panel - Responsive */}
          {showFilters && (
            <Card className="mb-4 p-4 bg-gray-50">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="state-filter" className="text-sm">
                    State
                  </Label>
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
                  <Label htmlFor="city-filter" className="text-sm">
                    City
                  </Label>
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
                <div className="sm:col-span-2 lg:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-end space-y-2 sm:space-y-0 sm:space-x-2">
                  <Button
                    onClick={applyFilters}
                    className="bg-orange-500 hover:bg-orange-600 text-white flex-1 sm:flex-initial"
                  >
                    Apply Filters
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(false)}
                    className="flex-1 sm:flex-initial"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Active Filters - Responsive */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {activeFilters.map((filter, index) => (
                <div
                  key={index}
                  className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs sm:text-sm"
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
                className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm"
              >
                Clear All
              </Button>
            </div>
          )}

          {/* Schedule Table - Responsive */}
          <Card className="overflow-hidden border border-gray-200 mb-8 sm:mb-10">
            <CardHeader className="bg-orange-600 text-white p-3 sm:p-4">
              <CardTitle className="text-center text-sm sm:text-base lg:text-lg">
                RunBhumi Trials 2025 - Dates & Locations
              </CardTitle>
            </CardHeader>

            {/* Mobile Card View */}
            <div className="block sm:hidden">
              {filteredSchedule.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {filteredSchedule.map((schedule, index) => (
                    <div key={index} className="p-4 bg-white">
                      <div className="font-semibold text-orange-600 mb-3 text-sm">
                        {schedule.date}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {schedule.locations.map((location, locIndex) => (
                          <div key={locIndex} className="text-center">
                            {location && location !== "Coming Soon" ? (
                              <Button
                                variant="ghost"
                                size="sm"
                                className={`w-full text-xs ${
                                  selectedCity === location
                                    ? "bg-orange-100 text-orange-800"
                                    : "text-orange-600 hover:text-orange-800 hover:bg-orange-100"
                                }`}
                                onClick={() => handleCitySelect(location)}
                              >
                                {location}
                                {selectedCity === location && (
                                  <Check className="ml-1 h-3 w-3" />
                                )}
                              </Button>
                            ) : (
                              <div className="text-gray-400 text-xs py-2">
                                {location || "—"}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-gray-500 text-sm">
                  No trial dates match your current filters. Please try
                  different search criteria.
                </div>
              )}
            </div>

            {/* Tablet and Desktop Table View */}
            <div className="hidden sm:block overflow-x-auto">
              <Table>
                <TableHeader className="bg-orange-100">
                  <TableRow>
                    <TableHead className="w-1/5 font-bold text-xs sm:text-sm">
                      Date
                    </TableHead>
                    <TableHead className="text-center font-bold text-xs sm:text-sm">
                      Location 1
                    </TableHead>
                    <TableHead className="text-center font-bold text-xs sm:text-sm">
                      Location 2
                    </TableHead>
                    <TableHead className="text-center font-bold text-xs sm:text-sm">
                      Location 3
                    </TableHead>
                    <TableHead className="text-center font-bold text-xs sm:text-sm">
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
                        <TableCell className="font-medium text-xs sm:text-sm">
                          {schedule.date}
                        </TableCell>
                        {schedule.locations.map((location, locIndex) => (
                          <TableCell key={locIndex} className="text-center">
                            {location && location !== "Coming Soon" ? (
                              <Button
                                variant="ghost"
                                size="sm"
                                className={`text-xs sm:text-sm ${
                                  selectedCity === location
                                    ? "bg-orange-100 text-orange-800"
                                    : "text-orange-600 hover:text-orange-800 hover:bg-orange-100"
                                }`}
                                onClick={() => handleCitySelect(location)}
                              >
                                {location}
                                {selectedCity === location && (
                                  <Check className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                                )}
                              </Button>
                            ) : (
                              <span className="text-gray-400 text-xs sm:text-sm">
                                {location || "—"}
                              </span>
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center py-8 text-gray-500 text-sm"
                      >
                        No trial dates match your current filters. Please try
                        different search criteria.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Table Footer - Responsive */}
            {filteredSchedule.length > 0 && (
              <div className="p-3 sm:p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm text-gray-500">
                    {filteredSchedule.length === trialSchedule.length
                      ? `Showing all ${trialSchedule.length} trial dates`
                      : `Showing ${filteredSchedule.length} of ${trialSchedule.length} trial dates`}
                  </div>
                  {(appliedState || appliedCity || searchTerm) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearFilters}
                      className="text-xs sm:text-sm w-full sm:w-auto"
                    >
                      Reset Filters
                    </Button>
                  )}
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Selection Path Roadmap - Responsive wrapper */}
        <div className="w-full">
          <SelectionPathRoadmap />
        </div>
      </section>
    </main>
  );
}
