"use client"

import { motion } from "framer-motion";

export default function FloatImage() {
    return (
        <motion.div
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            initial={{
                y: 0,
                boxShadow: "0 5px 5px rgba(0,0,0,0.1)"
            }}
            whileHover={{
                y: -8,
                boxShadow: "0 10px 10px rgba(0,0,0,0.2)",
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
        >
            <img
                src="./lavender.jpg"
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
}