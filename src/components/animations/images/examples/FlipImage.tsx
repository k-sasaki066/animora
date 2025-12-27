"use client"

import { motion } from "framer-motion";

export default function FlipImage() {
    return (
        <div className="w-full aspect-video max-w-sm mx-auto overflow-hidden">
            <motion.img
                src="/sea.jpg"
                className="w-full h-full object-cover"
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: -180 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}