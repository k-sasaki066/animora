"use client";

import { motion, Transition } from "framer-motion";
import { useEffect, useState } from "react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

export default function SliceText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();

    const [active, setActive] = useState(false);
    const text = "SLICE ANIMATION";

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => !prev);
        }, 3200);

        return () => clearInterval(timer);
    }, []);

    const transition: Transition = {
        duration: 0.4,
        ease: [0.165, 0.84, 0.44, 1],
    };

    return (
        <div ref={ref} className="w-full">
            <div
                className="relative font-bold leading-none overflow-hidden"
                style={{ fontSize }}
            >

                {/* ベース文字 */}
                <div className="opacity-0 select-none">
                    {text}
                </div>

                {/* slice 1 */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        WebkitMaskImage:
                        "linear-gradient(to bottom, black 33.3%, transparent 33.3%)",
                    }}
                    animate={{
                        x: active ? 0 : "-110%",
                        skewX: active ? 0 : 40,
                    }}
                    transition={transition}
                >
                    {text}
                </motion.div>

                {/* slice 2 */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        WebkitMaskImage:
                        "linear-gradient(to bottom, transparent 33.3%, black 33.3%, black 66.6%, transparent 66.6%)",
                    }}
                    animate={{
                        x: active ? 0 : "110%",
                        skewX: active ? 0 : -40,
                    }}
                    transition={transition}
                >
                    {text}
                </motion.div>

                {/* slice 3 */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        WebkitMaskImage:
                        "linear-gradient(to bottom, transparent 66.6%, black 66.6%)",
                    }}
                    animate={{
                        x: active ? 0 : "-110%",
                        skewX: active ? 0 : 40,
                    }}
                    transition={transition}
                >
                    {text}
                </motion.div>
            </div>
        </div>
    );
}







