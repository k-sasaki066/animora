"use client"

import { motion } from "framer-motion";
import { useRef } from "react";

export default function HoverVideoImage() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    return (
        <motion.div
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            initial="rest"
            animate="rest"
            whileHover="hover"
            onHoverStart={() => videoRef.current?.play()}
            onHoverEnd={() => {
                if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                }
            }}
        >
            {/* 静止画 */}
            <motion.img
                src="/river.jpg"
                className="w-full h-full object-cover"
                variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 0 },
                }}
                transition={{ duration: 0.4 }}
            />

            {/* 動画 */}
            <motion.video
                className="absolute top-0 left-0 w-full h-full object-cover"
                ref={videoRef}
                src="/videos/sun.mp4"
                muted
                loop
                playsInline
                variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
            />
        </motion.div>
    );
}