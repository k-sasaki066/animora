"use client"

import { motion } from "framer-motion";

export default function Tilt3dImage() {
    return (
        <div
            className="card-box"
            style={{ perspective: 600 }}
        >
            <motion.div
                className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden flex justify-center items-center"
                style={{
                    transformOrigin: "50% 100%", // 下を軸に回転
                }}
                initial={{ rotateX: 45 }}
                whileHover={{ rotateX: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut"
                }}
            >
                <motion.img
                    src="/fruits.jpg"
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </div>
    );
}