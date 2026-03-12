import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

export default function SlideToggle() {
    const [checked, setChecked] = useState(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center">
            <motion.button
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={() => setChecked(v => !v)}
                whileTap={{ y: 2 }}
                className="relative w-28 h-12 rounded-lg bg-stone-400/50 p-2 cursor-pointer select-none flex items-center"
                animate={{ scale }}
            >
                {/* knob */}
                <motion.div
                    className="relative z-10 w-10 h-10 rounded-md flex items-center justify-center"
                    animate={{
                        x: checked ? 58 : -2,
                        backgroundColor: checked ? "#77c44c" : "#e5e5e5",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        duration: 0.6,
                    }}
                >
                    {/* checkmark */}
                    <motion.svg
                        viewBox="0 0 100 100"
                        className="w-6 h-6"
                    >
                        <motion.path
                            d="M20,55 L40,75 L77,27"
                            fill="none"
                            stroke="white"
                            strokeWidth="15"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray={90}
                            strokeDashoffset={checked ? 0 : 90}
                            animate={{
                                strokeDashoffset: checked ? 0 : 90,
                            }}
                            transition={{
                                duration: 0.15,
                                delay: checked ? 0.15 : 0,
                            }}
                        />
                    </motion.svg>
                </motion.div>
            </motion.button>
        </div>
    );
}