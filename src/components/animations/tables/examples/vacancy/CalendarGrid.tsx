import { motion } from "framer-motion";
import Holidays from "date-holidays";
import type { Status, Availability } from "./availabilityData";

type Props = {
    calendarDays: {
        day: number;
        currentMonth: boolean;
        date: string;
    }[];
    availabilityMap: Record<string, Availability>;
    todayString: string;
    textSize: string;
};

export default function CalendarGrid({
    calendarDays,
    availabilityMap,
    todayString,
    textSize,
}: Props) {

    const hd = new Holidays("JP");

    const isHoliday = (date: string) => {
        return !!hd.isHoliday(date);
    };

    const statusColor = (status?: Status) => {
        if (status === "available") return "text-green-500";
        if (status === "few") return "text-yellow-500";
        if (status === "full") return "text-red-500";
        return "text-gray-300";
    };

    const statusSymbol = (status?: Status) => {
        if (status === "available") return "○";
        if (status === "few") return "△";
        if (status === "full") return "×";
        return "";
    };

    return (
        <>
            {/* weekday */}
            <div className={`grid grid-cols-7 text-center text-gray-500 ${textSize}`}>
                {["日", "月", "火", "水", "木", "金", "土"].map(d => (
                    <div key={d} className="p-2">
                        {d}
                    </div>
                ))}
            </div>

            {/* calendar */}
            <div className="grid grid-cols-7 border-l border-t border-gray-300">
                {calendarDays.map((item, i) => {

                    const data = availabilityMap[item.date];
                    const weekday = new Date(item.date).getDay();
                    const holiday = isHoliday(item.date);

                    const weekendBg =
                        weekday === 0 || holiday
                            ? "bg-red-50"
                            : weekday === 6
                            ? "bg-blue-50"
                            : "bg-white";

                    const isToday = item.date === todayString;

                    return (
                        <motion.div
                            key={i}
                            whileTap={{ scale: 0.95 }}
                            className={`flex flex-col item justify-between h-14 md:h-16 s cursor-pointer ${weekendBg} ${!item.currentMonth && "text-gray-300 bg-gray-50"} ${isToday ? "border-2 border-blue-400" : "border-b border-r border-gray-300"}`}
                        >
                            <span className={textSize}>
                                {item.day}
                            </span>

                            {item.currentMonth && (
                                <>
                                    <span className={`font-bold ${statusColor(data?.status)}`}>
                                        {statusSymbol(data?.status)}
                                    </span>

                                    <span className="text-[8px] md:text-[10px] text-gray-400 h-3 md:h-3.5">
                                        {data?.status === "full"
                                            ? ""
                                            : data
                                                ? `¥${data.price}`
                                                : ""
                                        }
                                    </span>
                                </>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
}