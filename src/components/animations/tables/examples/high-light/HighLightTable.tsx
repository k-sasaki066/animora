"use client";

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { headers, rows } from "./data";
import { useHighlightTable } from "./useHighlightTable";

export default function HighLightTable() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const isMobile = width <= 530;

    const {
        tableRef,
        hoverCol,
        activeRow,
        colPos,
        handleHover,
        handleTap,
        setHoverCol,
    } = useHighlightTable();

    return (
        <div ref={ref} className="w-full h-full flex items-start justify-center bg-slate-900 pb-4 z-0 overflow-auto no-scrollbar">
            <div className="w-full relative shadow-[0_0_20px_rgba(0,0,0,0.1)] ">
                {/* column highlight */}
                {hoverCol !== null && (
                    <motion.div
                        className="absolute top-0 bottom-0 bg-white/10 pointer-events-none z-0"
                        animate={{ x: colPos.left, width: colPos.width }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}

                <table
                    ref={tableRef}
                    className={`w-full border-collapse text-white relative ${isMobile ? "text-xs" : "text-sm"}`}
                >
                    <thead className="sticky top-0 z-10">
                        <tr>
                            {headers.map((h, i) => (
                                <th key={i} className={`text-center bg-[#55608f] ${isMobile ? "p-2.5" : "p-3"}`}>
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, rIndex) => (
                            <motion.tr
                                key={rIndex}
                                animate={{
                                    backgroundColor:
                                        activeRow === rIndex
                                            ? "rgba(255,255,255,0.3)"
                                            : "rgba(255,255,255,0)",
                                }}
                                whileHover={
                                    !isMobile
                                        ? { backgroundColor: "rgba(255,255,255,0.3)" }
                                        : "rgba(255,255,255,0)"
                                }
                            >
                                {row.map((cell, cIndex) => (
                                    <td
                                        key={cIndex}
                                        onMouseEnter={() => !isMobile && handleHover(cIndex)}
                                        onMouseLeave={() => !isMobile && setHoverCol(null)}
                                        onPointerDown={(e) => {
                                            if (e.pointerType !== "mouse") {
                                            handleTap(rIndex, cIndex)
                                            }
                                        }}
                                        className={`bg-white/10 ${isMobile ? "p-2.5" : "p-3"}`}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}