import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

export default function PopRiseText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>({
        ratio: 0.07,
        min: 24,
        max: 64,
    });

    const [active, setActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => !prev);
        }, 2800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={ref} className="w-full">
            <motion.div
                className="font-bold uppercase origin-bottom"
                style={{ fontSize }}
                animate={
                    active
                        ? {
                            opacity: [0, 1, 1],
                            scale: [0.3, 1.1, 1],
                            y: ["120%", "-30%", "0%"],
                        }
                        : {}
                }
                transition={{
                    duration: 0.8,
                    ease: [0.175, 0.885, 0.32, 1.275],
                    times: [0, 0.75, 1],
                }}
            >
                Pop Rise Text
            </motion.div>
        </div>
    );
}