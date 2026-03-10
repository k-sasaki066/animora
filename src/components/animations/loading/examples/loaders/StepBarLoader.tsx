import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
    paused?: boolean;
}

export default function StepBarLoader({ paused = false }: Props) {
    const boxCount = 5;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1 > boxCount ? 0 : prev + 1));
        }, 350);

        return () => clearInterval(interval);
    }, [paused]);

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
                        className="w-3 h-4 rounded bg-gray-300"
                        animate={{ backgroundColor: isActive ? "#2b9a23" : "#e5e7eb" }}
                        transition={{
                            duration: paused ? 0 : 0.2,
                            ease: "easeIn"
                        }}
                    />
                );
            })}
        </div>
    );
}