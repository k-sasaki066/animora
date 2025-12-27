"use client"

import { motion } from "framer-motion";

export default function OverlayImage() {
    return (
        <div className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden">
            <img
                src="/flower.jpg"
                className="w-full h-full object-cover"
            />

            <motion.div
                className="absolute inset-0 bg-gray-600"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.6 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}