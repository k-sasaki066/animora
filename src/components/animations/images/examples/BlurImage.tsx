"use client"

import { motion } from "framer-motion";

export default function BlurImage() {
    return (
        <div className="w-full aspect-video max-w-sm mx-auto overflow-hidden">
            <motion.img
                src="/river.jpg"
                className="w-full h-full object-cover"
                initial={{
                    filter: "blur(0px)"
                }}
                whileHover={{
                    filter: ["blur(0px)", "blur(2px)"]
                }}  // ← ぼかしを段階的に
                transition={{
                    duration: 0.25,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}