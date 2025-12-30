"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

const text = "Scale Stagger";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.02,
        },
    },
};

const charVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
        duration: 0.4,
        ease: [0.39, 0.575, 0.565, 1],
        },
    },
};

export default function ScaleStaggerText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();

    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true);
        const interval = setInterval(() => {
            setActive((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={ref} className="w-full overflow-hidden">
            <motion.div
                className="font-bold"
                style={{ fontSize }}
                variants={containerVariants}
                initial="hidden"
                animate={active ? "visible" : "hidden"}
            >
                {text.split("").map((char, index) =>
                    char === " " ? (
                        <motion.span
                            key={index}
                            className="inline-block whitespace-pre"
                        >
                            {"\u00A0"}
                        </motion.span>
                    ) : (
                        <motion.span
                            key={index}
                            className="inline-block"
                            variants={charVariants}
                        >
                        {char}
                        </motion.span>
                    )
                )}
            </motion.div>
        </div>
    );
}