"use client"

import { motion } from "framer-motion";

export default function TextLoader() {
    const text = ["L", "o", "a", "d", "i", "n", "g"];

    return (
        <div className="flex justify-center items-center space-x-1 text-3xl font-bold w-12 h-12 text-purple-600">
            {text.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ y: 0 }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: index * 0.1,
                        ease: "easeInOut",
                    }}
                    className={
                        index === 2 ? "text-purple-500" : "text-black"
                    }
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
}