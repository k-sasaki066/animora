"use client"

import { motion } from "framer-motion";

export default function GrowBarsLoader() {

    return (
        <div
            className="flex items-center justify-between"
            style={{
                width: "35px",
                height: "31.5px",
            }}
        >
            {[ -0.45, -0.3, -0.15, 0 ].map((delay, i) => (
                <motion.div
                    key={i}
                    className="bg-purple-600"
                    style={{
                        width: "3.5px",
                        height: "100%",
                        borderRadius: "2px",
                    }}
                    animate={{
                        scaleY: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: delay,
                    }}
                />
            ))}
        </div>
    );
}