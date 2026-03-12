import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

export default function MorphingToggle() {
    const [selected, setSelected] = useState<"yes" | "no">("yes");

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.button
                type="button"
                role="switch"
                aria-checked={selected === "yes"}
                onClick={() => setSelected(v => (v === "yes" ? "no" : "yes"))}
                whileTap={{ y: 2 }}
                className="relative w-40 h-12.5 rounded-[25px] bg-teal-500"
                animate={{ scale }}
            >
                {/* 背景 */}
                <motion.div
                    className="absolute inset-0 rounded-[25px]"
                    animate={{
                        backgroundColor: selected === "yes" ? "#00bc9c" : "#eb4f37",
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Yes / No ラベル */}
                <div className="absolute inset-0 w-full h-full flex justify-between items-center px-4 font-bold">
                    <motion.span
                        className="cursor-pointer text-black/30"
                        animate={{ color: selected === "yes" ? "#fff" : "rgba(0,0,0,0.2)" }}
                    >
                        Yes
                    </motion.span>
                    <motion.span
                        className="cursor-pointer text-black/30"
                        animate={{ color: selected === "no" ? "#fff" : "rgba(0,0,0,0.2)" }}
                    >
                        No
                    </motion.span>
                </div>

                {/* マーク */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5.5 h-1 bg-white origin-center rotate-45"
                    animate={{
                        x: selected === "yes" ? 0 : 0,
                        y: selected === "yes" ? 5 : 0,
                        width: selected === "yes" ? "12px" : "22px",
                    }}
                    transition={{ duration: 0.2 }}
                />
                <motion.div
                    className="absolute w-1 h-5.5 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"
                    animate={{
                        x: selected === "yes" ? 4 : 0,
                        y: selected === "yes" ? -4 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                />
            </motion.button>
        </div>
    );
}