"use client"

import { motion } from "framer-motion";

export default function BallsScaleLoader() {

    return (
        <div className="flex justify-center items-center space-x-2 w-12 h-12 text-purple-600">
            {[0, 0.33, 0.66].map((delay, i) => (
                <motion.div
                    key={i}
                    className="w-4 h-4 bg-purple-600 rounded-full"
                    animate={{
                        opacity: [1, 0.25, 0.25, 1]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                        times: [0, 0.33, 0.66, 1],
                        delay,
                    }}
                />
            ))}
        </div>
    );
}