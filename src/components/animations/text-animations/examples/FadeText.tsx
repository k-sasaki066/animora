import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

const text = "Fade Text";

const containerVariants = {
    hidden: {},
    visible: {},
};

const charVariants = {
    hidden: {
        opacity: 0,
    },
    visible: (i: number) => ({
        opacity: 1,
        transition: {
        delay: i * 0.05,
        duration: 0.2,
        },
    }),
};

export default function TypingText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();

    const [active, setActive] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
        setActive((prev) => !prev);
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={ref} className="w-full">
            <motion.div
                className="font-bold"
                style={{ fontSize }}
                variants={containerVariants}
                initial="hidden"
                animate={active ? "visible" : "hidden"}
            >
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        className="inline-block"
                        style={{ fontSize }}
                        variants={charVariants}
                        custom={i}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
}