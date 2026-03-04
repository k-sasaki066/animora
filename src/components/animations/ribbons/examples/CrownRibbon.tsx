"use client";

import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa6";

type Rank = 1 | 2 | 3;

export default function CrownRibbon() {
    const rankStyle: Record<Rank, { color: string; label: string }> = {
        1: { color: "text-[#daa520]", label: "1" },
        2: { color: "text-gray-400", label: "2" },
        3: { color: "text-[#cd7f32]", label: "3" },
    };
    const ranks: Rank[] = [1, 2, 3];

    return (
        <div className="relative w-full h-full flex justify-center items-center gap-4 bg-gray-100 shadow-md box-border z-0">
            {ranks.map((rank) => {
                const style = rankStyle[rank];

                return (
                    <motion.div
                        key={rank}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className={`relative w-12 aspect-square ${style.color}`}
                    >
                        <FaCrown className="w-full h-full text-5xl" />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-xs font-bold">
                            {style.label}位
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}