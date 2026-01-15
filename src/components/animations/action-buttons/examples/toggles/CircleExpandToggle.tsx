"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 360;

export default function CircleExpandToggle() {
    const [isOn, setIsOn] = useState(true);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.2), 1.3)
        : 1;

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center">
            <div className="flex aspect-video w-55 max-w-md flex-col items-center justify-center bg-white text-center overflow-hidden border border-emerald-500" style={{scale}}>
                <h3 className="mb-6 text-black z-10">Toggle Me!</h3>

                <motion.button
                    type="button"
                    role="switch"
                    aria-checked={isOn}
                    onClick={() => setIsOn(v => !v)}
                    whileTap={{ scale: 1 }}
                    className="relative inline-block cursor-pointer"
                >
                    {/* expanding background circle */}
                    <motion.div
                        className="absolute left-1/2 top-1/2 h-7.5 w-7.5 rounded-full bg-emerald-500"
                        style={{ zIndex: 1 }}
                        initial={false}
                        animate={{
                            scale: isOn ? 15 : 0,
                            x: "-50%",
                            y: "-50%",
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                    />

                    {/* toggle track */}
                    <div
                        className="relative z-10 h-6.25 w-11.25 rounded-full border border-white"
                        style={{ background: isOn ? "#34D399" : "#99a1af" }}
                    >
                        {/* knob */}
                        <motion.div
                            className="absolute top-[1.5px] left-px h-5 w-5 rounded-full bg-white"
                            initial={false}
                            animate={{
                                x: isOn ? 20 : 1,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "linear",
                            }}
                        />
                    </div>
                </motion.button>
            </div>
        </div>
    )
}
