import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

const text = "Slide Up";

const containerVariants = {
    hidden: {},
    visible: {},
};

const charVariants: Variants = {
    hidden: {
        y: "100%",
        opacity: 0,
    },
    visible: (i: number) => ({
        y: "0%",
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.77, 0, 0.175, 1],
            delay: i * 0.04,
        },
    }),
};

export default function TextSlideUp() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();

    const [active, setActive] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => !prev);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={ref} className="w-full h-full overflow-hidden p-2">
            <motion.div
                className="text-black font-bold uppercase"
                style={{ fontSize }}
                variants={containerVariants}
                initial="hidden"
                animate={active ? "visible" : "hidden"}
                aria-hidden="true"
            >
                {text.split("").map((char, i) =>
                    char === " " ? (
                        <motion.span
                            key={i}
                            className="inline-block whitespace-pre"
                        >
                            {"\u00A0"}
                        </motion.span>
                    ) : (
                        <motion.span
                            key={i}
                            className="inline-block whitespace-pre"
                            variants={charVariants}
                            custom={i}
                        >
                            {char}
                        </motion.span>
                    )
                )}
            </motion.div>
        </div>
    );
}