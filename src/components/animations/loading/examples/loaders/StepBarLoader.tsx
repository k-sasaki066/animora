import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { LoaderProps } from "../../loader";

export default function StepBarLoader({
    paused = false,
    speed = 0.2,
    size = 12,
    color = "#2b9a23",
    boxCount = 5,
}: LoaderProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1 > boxCount ? 0 : prev + 1));
        }, 500);

        return () => clearInterval(interval);
    }, [paused, boxCount]);

    const pausedIndex = Math.floor(boxCount / 2);

    return (
        <div className="flex space-x-2">
            {Array.from({ length: boxCount }).map((_, i) => {
                const isActive = paused
                    ? i < pausedIndex
                    : i < activeIndex;

                return (
                    <motion.div
                        key={i}
                        className="rounded"
                        style={{
                            width: size,
                            height: size * 1.33,
                        }}
                        animate={{ backgroundColor: isActive ? color : "#e5e7eb" }}
                        transition={{
                            duration: paused ? 0 : speed,
                            ease: "easeIn"
                        }}
                    />
                );
            })}
        </div>
    );
}