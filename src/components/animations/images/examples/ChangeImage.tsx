"use client"

import { motion } from "framer-motion";

export default function ChangeImage() {
    return (
        <motion.div
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* 通常画像 */}
            <motion.img
                src="/lavender.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 0 },
                }}
                transition={{ duration: 0.4 }}
            />

            {/* ホバー時像 */}
            <motion.img
                src="/leading.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
            />
        </motion.div>
    );
}