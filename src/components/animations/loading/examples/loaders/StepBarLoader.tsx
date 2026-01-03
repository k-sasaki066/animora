"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StepBarLoader() {

    const boxCount = 5;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1 > boxCount ? 0 : prev + 1));
        }, 350);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex space-x-2">
            {Array.from({ length: boxCount }).map((_, i) => (
                <motion.div
                    key={i}
                    className="w-3 h-4 rounded bg-gray-300"
                    animate={{
                        backgroundColor: i < activeIndex ? "#2b9a23" : "#e5e7eb",
                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeIn"
                    }}
                />
            ))}
        </div>
    );
}