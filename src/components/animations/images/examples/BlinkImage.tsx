"use client"

import { motion } from "framer-motion";

export default function BlinkImage() {
    return (
        <div className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden">
            <img
                src="/fruits.jpg"
                className="w-full h-full object-cover"
            />

            <motion.div
                className="absolute inset-0 bg-gray-200 opacity-0"
                whileHover={{
                    opacity: [0, 0.6, 0],
                    transition: { duration: 1, repeat: Infinity },
                }}
            />
        </div>
    );
}