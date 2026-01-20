"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

const options = [0, 1, 2, 3, 4];

export default function RadioSlideButton() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();

    const [active, setActive] = useState(0);

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center bg-amber-500">
            <div className="w-1/2">
                <h1 className="mb-4 font-bold" style={{ fontSize }}>
                    Select one:
                </h1>

                <div
                    className="relative flex justify-between"
                    role="radiogroup"
                    aria-label="Select one"
                >
                    {options.map((i) => (
                        <button
                            key={i}
                            type="button"
                            role="radio"
                            aria-checked={active === i}
                            onClick={() => setActive(i)}
                            className="relative w-[15%] aspect-square rounded-full bg-white/20 flex items-center justify-center"
                        >
                            {active === i && (
                                <motion.span
                                    layoutId="slider"
                                    className="absolute w-[70%] aspect-square rounded-full bg-white"
                                    animate={{ scale: [1, 0.5, 1] }}
                                    transition={{
                                        scale: {
                                        duration: 0.3,
                                        ease: "easeInOut",
                                        },
                                    }}
                                />
                                //layoutId→前回のBounding Boxと次回のBounding Boxを framer-motion が比較し差分をtransformで補間,常に 1個だけ描画
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}