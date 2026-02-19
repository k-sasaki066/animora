"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function StripeLine() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            backgroundPositionX: ["0px", "12px"],
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                ease: "linear",
            },
        });
    }, [controls]);

    return (
        <motion.div
            className="h-0.75 w-[60%] bg-[#ffccbc]"
            style={{
                backgroundImage:
                `linear-gradient(
                    -45deg,
                    #ff5722 0px,
                    #ff5722 2px,
                    transparent 2px,
                    transparent 4px,
                    #ff5722 4px,
                    #ff5722 6px,
                    transparent 6px,
                    transparent
                )`,
                backgroundSize: "6px 6px",
            }}
            animate={controls}
        />
    );
}