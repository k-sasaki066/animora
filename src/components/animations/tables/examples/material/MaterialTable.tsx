"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { DATA } from "./data";
import StatusBadge from "./StatusBadge";
import MobileRow from "./MobileRow";

export default function MaterialTable() {
    const [isDark, setIsDark] = useState(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const isMobile = width <= 530;

    const COLUMNS = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "link", label: "Link" },
        { key: "status", label: "Status" },
    ];

    const TH_CLASS = "px-6 py-4 font-medium";
    const TD_CLASS = "px-6 py-4";

    return (
        <div ref={ref} className={`w-full h-full mx-auto overflow-y-auto no-scrollbar ${isDark ? "dark" : ""}`}>
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setIsDark(!isDark)}
                    className="px-4 py-2 text-sm rounded-md bg-gray-200 text-gray-700 dark:bg-[#2a2c33] dark:text-gray-200 hover:opacity-80 transition-all duration-300"
                >
                    {isDark ? "Light Mode" : "Dark Mode"}
                </button>
            </div>

            {/* Desktop Table */}
            <div className={`bg-[#f7f8fa] rounded-sm shadow-md overflow-hidden dark:bg-[#1e1f24] ${isMobile ? "hidden" : "block"}`}>
                <div className="max-h-80 overflow-y-auto no-scrollbar">
                    <table className="w-full text-left">
                        <thead className="bg-gray-200 text-gray-500 text-sm sticky top-0 z-10 dark:bg-[#2a2c33] dark:text-gray-300">
                            <tr>
                                {COLUMNS.map(col => (
                                    <th key={col.key} className={TH_CLASS}>
                                        {col.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {DATA.map((item) => (
                                <motion.tr
                                    key={item.id}
                                    whileHover={{
                                        backgroundColor: isDark ? "#2f3138" : "#bdeef1"
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="border-t"
                                >
                                    <td className={`${TD_CLASS} dark:text-gray-500`}>
                                        {item.id}
                                    </td>
                                    <td className={`${TD_CLASS} dark:text-gray-500`}>
                                        {item.name}
                                    </td>
                                    <td className={TD_CLASS}>
                                        <a href="#" className="text-[#108dc7] bg-linear-to-r from-current to-current bg-size-[0%_1px] bg-bottom-left bg-no-repeat transition-all duration-300 hover:bg-size-[100%_1px]">
                                            GitHub
                                        </a>
                                    </td>
                                    <td className={TD_CLASS}>
                                        <StatusBadge status={item.status} />
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Card Version */}
            <div className="w-full h-full flex justify-center items-start overflow-y-auto no-scrollbar">
                <div className={`w-full space-y-4 overflow-x-auto ${isMobile ? "" : "hidden"}`}>
                    {DATA.map((item) => (
                        <motion.div
                            key={item.id}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-[#f7f8fa] dark:bg-[#1e1f24] rounded-lg shadow-md p-4 space-y-3"
                        >
                            <MobileRow label="ID" value={item.id}/>
                            <MobileRow label="Name" value={item.name} />
                            <MobileRow
                                label="Link"
                                value={
                                    <a href="#" className="text-sky-600 hover:underline">
                                        GitHub
                                    </a>
                                }
                            />
                            <MobileRow
                                label="Status"
                                value={<StatusBadge status={item.status} />}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}