"use client";

import { useState } from "react";
import { generateAvailability } from "./availabilityData";
import { ArrowButton } from "./ArrowButton";
import CalendarGrid from "./CalendarGrid";
import { generateCalendarDays } from "./generateCalendarDays";

export default function VacancyCalendar() {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth() + 1);

    const availability = generateAvailability(year, month);
    const availabilityMap = Object.fromEntries(
        availability.map((a) => [a.date, a])
    );

    const calendarDays = generateCalendarDays(year, month);

    const formatDate = (y: number, m: number, d: number) =>
        `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

    /* 月移動 */
    const prevMonth = () => {
        if (month === 1) {
            setYear((y) => y - 1);
            setMonth(12);
        } else {
            setMonth((m) => m - 1);
        }
    };

    const nextMonth = () => {
        if (month === 12) {
            setYear((y) => y + 1);
            setMonth(1);
        } else {
            setMonth((m) => m + 1);
        }
    };

    const todayString = formatDate(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate()
    );

    const headerSize = "text-sm md:text-lg";
    const textSize = "text-xs md:text-sm";

    return (
        <div className="w-full h-full mx-auto overflow-y-auto no-scrollbar">
            {/* header */}
            <div className={`flex items-center justify-center gap-6 mb-2 pb-2 mx-auto bg-white sticky top-0 z-10 ${headerSize}`}>
                <ArrowButton onClick={prevMonth}>
                    ←
                </ArrowButton>

                <h2 className="font-bold">
                    {year} / {month}
                </h2>

                <ArrowButton onClick={nextMonth}>
                    →
                </ArrowButton>
            </div>

            <CalendarGrid
                calendarDays={calendarDays}
                availabilityMap={availabilityMap}
                todayString={todayString}
                textSize={textSize}
            />

            {/* legend */}
            <div className={`flex gap-4 mt-4 justify-center ${textSize}`}>
                <span className="text-green-500">○ 空きあり</span>
                <span className="text-yellow-500">△ 残りわずか</span>
                <span className="text-red-500">× 満室</span>
            </div>
        </div>
    );
}