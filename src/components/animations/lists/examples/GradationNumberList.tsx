"use client";

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 420;

type ListItem = string;

const ITEMS: ListItem[][] = Array.from({ length: 15 }, (_, i) => [
    "The quick brown fox jumps high",
    "She sells seashells by the seashore"
]);

function lerpColor(a: string, b: string, t: number) {
    const ah = parseInt(a.replace("#", ""), 16);
    const ar = (ah >> 16) & 0xff;
    const ag = (ah >> 8) & 0xff;
    const ab = ah & 0xff;

    const bh = parseInt(b.replace("#", ""), 16);
    const br = (bh >> 16) & 0xff;
    const bg = (bh >> 8) & 0xff;
    const bb = bh & 0xff;

    const rr = Math.round(ar + (br - ar) * t);
    const rg = Math.round(ag + (bg - ag) * t);
    const rb = Math.round(ab + (bb - ab) * t);

    return `rgb(${rr},${rg},${rb})`;
}

function lerpThreeColors(a: string, b: string, c: string, t: number) {
    if (t <= 0.5) {
        return lerpColor(a, b, t / 0.5);
    } else {
        return lerpColor(b, c, (t - 0.5) / 0.5);
    }
}

export default function GradationNumberList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1)
        : 1;
    const totalCount = ITEMS.reduce((acc, texts) => acc + texts.length, 0);

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center bg-[#232746] overflow-y-auto no-scrollbar">
            <motion.ul
                className="w-[70%] min-w-57.5 h-full py-3 list-none origin-top"
                animate={{ scale }}
            >
                {ITEMS.map((texts, i) =>
                    texts.map((text, j) => {
                        const index = i * 2 + j + 1;
                        const t = (index - 1) / (totalCount - 1);
                        const color = lerpThreeColors("#84e184", "#FFA500", "#1E90FF", t);

                        return (
                            <motion.li
                                key={`${i}-${j}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="flex items-start py-4 border-t border-white/20 box-border"
                            >
                                {/* カウンター */}
                                <span
                                    className="min-w-12.5 pr-3 font-bold text-[1.5rem] leading-none"
                                    style={{ color }}
                                >
                                    {index.toString().padStart(2, "0")}
                                </span>

                                {/* テキスト */}
                                <span className="text-left text-white/75">
                                    {text}
                                </span>
                            </motion.li>
                        );
                    })
                )}
            </motion.ul>
        </div>
    );
}
