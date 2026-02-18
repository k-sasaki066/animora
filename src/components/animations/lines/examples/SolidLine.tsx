"use client";

import { motion } from "framer-motion";

export default function SolidLine() {
    return (
        <div className="w-[60%] h-full flex items-center justify-center overflow-hidden">
            <motion.hr
                className="w-full h-px bg-gray-400 border-0 origin-center"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                    duration: 1.2,
                    ease: [0.4, 0, 0.2, 1],
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 0.5,
                }}
            />
        </div>
    );
}