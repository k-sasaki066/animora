"use client"

import { motion } from "framer-motion";

export default function WavesLoader() {

    return (
        <div className="relative w-12 h-12 rounded-full text-purple-600 flex items-center justify-center">
            {[0, 0.3].map((delay, i) => (
                <motion.div
                    key={i}
                    className="absolute w-full h-full border-2 border-purple-600 rounded-full"
                    initial={{
                        scale: 0.5,
                        opacity: 0
                    }}
                    animate={{
                        scale: [0.5, 1, 1.5], opacity: [0, 1, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}