"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { columns, data } from "./data";
import { useTableSort } from "./useTableSort";
import ScrollHint from "../ScrollHint";

export default function SortableTable() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const isTablet = width <= 530;
    const isMobile = width <= 464;
    const widthClass =
        isMobile ? "w-[220px]" :
        isTablet ? "w-[460px]" :
                "w-full";

    const { sorted, sortKey, direction, handleSort } =
    useTableSort(data, "keyword");

    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={ref} className="w-full h-full">
            <div ref={scrollRef} className={`relative h-full shadow-md mx-auto overflow-auto no-scrollbar ${widthClass}`}>
                {/* scroll hint */}
                <ScrollHint
                    scrollRef={scrollRef}
                    showOn={isTablet}
                />

                <table className="text-sm">
                    <thead className="bg-blue-200 cursor-pointer sticky top-0 z-10">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className="px-4 py-2"
                                    onClick={() => handleSort(col.key)}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{col.label}</span>
                                        <span className="ml-2 text-xs h-3 w-3 flex items-center justify-center">
                                            {col.key === sortKey && (
                                                <motion.span
                                                    key={direction}
                                                    initial={{ rotate: direction === "asc" ? -180 : 180 }}
                                                    animate={{ rotate: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                >
                                                    {direction === "asc" ? "▲" : "▼"}
                                                </motion.span>
                                            )}
                                        </span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        <AnimatePresence>
                            {sorted.map((row) => (
                                <motion.tr
                                    key={row.keyword}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="border-b text-gray-600"
                                >
                                    {columns.map((col) => (
                                        <td key={col.key} className="px-6 py-4">
                                            {col.key === "impressions"
                                                ? row[col.key].toLocaleString()
                                                : col.key === "ctr"
                                                    ? `${row[col.key]}%`
                                                    : row[col.key]
                                            }
                                        </td>
                                    ))}
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>
        </div>
    );
}