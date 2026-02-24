"use client";

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 420;

export default function NumberedTimelineList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1)
        : 1;
    const items = [
        "Check in at the hotel",
        "Walk around the town",
        "Take photos at sunset",
        "Relax at a local café",
    ];

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.ol
                className="relative ml-0 list-none"
                animate={{ scale }}
            >
                {/* 縦ライン */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-500" />

                {items.map((item, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="group relative flex items-start mb-6 last:mb-0"
                    >
                        {/* 丸番号 */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
                            className="relative z-10 flex items-center justify-center w-8 h-8 mr-4 text-[#b84ad1] border-2 border-[#b84ad1] bg-white rounded-full transition-colors group-hover:bg-[#b84ad1] group-hover:text-white duration-400"
                        >
                            {index + 1}
                        </motion.div>

                        {/* テキスト */}
                        <div
                            className="pt-1 text-left text-[#1e2939] transition-all duration-400 group-hover:-translate-y-1"
                        >
                            {item}
                        </div>
                    </motion.li>
                ))}
            </motion.ol>
        </div>
    );
}
