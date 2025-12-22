"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PopRiseText() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => !prev);
        }, 2800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex items-center justify-center">
            <motion.div
                className="font-mono font-bold uppercase text-[3vw] origin-bottom"
                animate={
                    active
                        ? {
                            opacity: [0, 1, 1],
                            scale: [0.3, 1.2, 1],
                            y: ["140%", "-30%", "0%"],
                        }
                        : {}
                }
                transition={{
                    duration: 0.8,
                    ease: [0.175, 0.885, 0.32, 1.275],
                    times: [0, 0.75, 1],
                }}
            >
                Text Animation
            </motion.div>
        </div>
    );
}