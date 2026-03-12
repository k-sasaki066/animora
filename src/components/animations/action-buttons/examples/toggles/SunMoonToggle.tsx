import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 450;

export default function SunMoonToggle() {
    const [on, setOn] = useState(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 0.8)
        : 1;

    const progress = useMotionValue(0);
    const knobX = useTransform(
        progress,
        [0, 0.55, 1],
        [0, 45, 98]
    );

    const knobScale = useTransform(
        progress,
        [0, 0.65, 1],
        [1, 0.65, 1]
    );

    const knobColor = useTransform(
        progress,
        [0, 0.55, 1],
        ["#d9d726", "#d9d726", "#ffffff"],
    );

    const bgColor = useTransform(
        progress,
        [0, 1],
        ["#f0f3e5", "#0b1821"],
    );

    const sunX = useTransform(
        progress,
        [0, 1],
        [-58, 90],
    );

    const toggle = () => {
        setOn(prev => {
            const next = !prev;
            animate(progress, next ? 1 : 0, {
                duration: 0.8,
                ease: "easeInOut",
            });
            return next;
        });
    };

    return (
        <motion.div
            ref={ref}
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: bgColor }}
            animate={{}}
        >
            <motion.button
                type="button"
                role="switch"
                aria-checked={on}
                onClick={toggle}
                whileTap={{ y: 1 }}
                className={` relative w-45 h-20 rounded-[45px] border-[7px] cursor-pointer overflow-hidden z-10 transition-colors duration-500 ${on ? "border-[#0a2c42]" : "border-[#c3b912]"} `}
                animate={{ scale }}
            >
                {/* sub */}
                <motion.div
                    className="absolute top-2.25 left-0 w-12 h-12 rounded-full z-1"
                    style={{
                        x: sunX,
                        backgroundColor: bgColor,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "linear",
                    }}
                />

                {/* main */}
                <motion.div
                    className="absolute top-2.25 left-2.5 w-12 h-12 rounded-full"
                    style={{
                        x: knobX,
                        scale: knobScale,
                        backgroundColor: knobColor,
                    }}
                    transition={{
                        duration: 0.6
                    }}
                />
            </motion.button>
        </motion.div>
    );
}