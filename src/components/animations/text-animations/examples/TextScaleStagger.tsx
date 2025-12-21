"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const text = "Text Animation";

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

export default function TextScaleStagger() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true);
        const interval = setInterval(() => {
            setActive((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex items-center justify-center px-4 overflow-hidden">
            <motion.div
                className="flex font-mono font-bold text-[3vw]"
                variants={containerVariants}
                initial="hidden"
                animate={active ? "visible" : "hidden"}
            >
                {text.split("").map((char, index) =>
                    char === " " ? (
                        <span key={index} className="w-4" />
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