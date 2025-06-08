"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const DateOfBirthField = ({ formData, handleChange }: any) => {
    const [date, setDate] = useState<Date | undefined>(formData.dateOfBirth ? new Date(formData.dateOfBirth) : undefined);
    const [open, setOpen] = useState(false);
    const [month, setMonth] = useState<number>(date ? date.getMonth() : new Date().getMonth());
    const [year, setYear] = useState<number>(date ? date.getFullYear() : new Date().getFullYear() - 20);

    // Calculate minimum and maximum dates (for example, 10-60 years old)
    const today = new Date();
    const minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 60); // 60 years ago

    const maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() - 10); // 10 years ago

    const handleDateSelect = (selectedDate: Date | undefined) => {
        if (!selectedDate) return;

        setDate(selectedDate);

        // Update month and year state
        setMonth(selectedDate.getMonth());
        setYear(selectedDate.getFullYear());

        // Format the date for the form data and trigger the original change handler
        const formattedDate = format(selectedDate, "yyyy-MM-dd");
        const syntheticEvent = {
            target: {
                id: "dateOfBirth",
                value: formattedDate
            }
        };

        handleChange(syntheticEvent);
        setOpen(false);
    };

    // Generate years list (from min to max)
    const years = Array.from(
        { length: maxDate.getFullYear() - minDate.getFullYear() + 1 },
        (_, i) => minDate.getFullYear() + i
    ).reverse(); // Reverse to show newest years first

    // Month names
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Handle month change
    const handleMonthChange = (value: string) => {
        const newMonth = parseInt(value);
        setMonth(newMonth);

        // If we have a date, update it to the new month
        if (date) {
            const newDate = new Date(date);
            newDate.setMonth(newMonth);
            setDate(newDate);
        }
    };

    // Handle year change
    const handleYearChange = (value: string) => {
        const newYear = parseInt(value);
        setYear(newYear);

        // If we have a date, update it to the new year
        if (date) {
            const newDate = new Date(date);
            newDate.setFullYear(newYear);
            setDate(newDate);
        }
    };

    return (
        <div className="space-y-2">
            <Label htmlFor="dateOfBirth" className="text-sm font-medium flex items-center">
                Date of Birth <span className="text-red-500 ml-1">*</span>
                <span className="ml-2 text-xs text-black">(Age: 10-60 years)</span>
            </Label>

            <div className="relative">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                "w-full justify-start text-left font-normal bg-white text-black border-gray-300 hover:bg-gray-50 hover:text-black",
                                !date && "text-black"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "dd MMMM yyyy") : "Select your date of birth"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-4" align="start">
                        <div className="flex gap-2 mb-2">
                            <div className="grid gap-1">
                                <p className="text-sm font-medium">Month</p>
                                <Select
                                    value={month.toString()}
                                    onValueChange={handleMonthChange}
                                >
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue placeholder="Month" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {months.map((monthName, index) => (
                                            <SelectItem key={monthName} value={index.toString()}>
                                                {monthName}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium">Year</p>
                                <Select
                                    value={year.toString()}
                                    onValueChange={handleYearChange}
                                >
                                    <SelectTrigger className="w-[100px]">
                                        <SelectValue placeholder="Year" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {years.map((year) => (
                                            <SelectItem key={year} value={year.toString()}>
                                                {year}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={handleDateSelect}
                            month={new Date(year, month)}
                            onMonthChange={(newMonth) => {
                                setMonth(newMonth.getMonth());
                                setYear(newMonth.getFullYear());
                            }}
                            disabled={(date) => date > maxDate || date < minDate}
                            className="rounded-md border"
                        />
                    </PopoverContent>
                </Popover>

                {/* Hidden input for form submission */}
                <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="hidden"
                />
            </div>

            {/* Optional helper text */}
            <p className="text-xs text-black mt-1">
                This helps us determine your eligibility for age-specific categories.
            </p>
        </div>
    );
};

export default DateOfBirthField;