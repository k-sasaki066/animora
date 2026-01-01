"use client";

import { motion } from "framer-motion";

export default function ChangeShapeButton() {

    return (
        <motion.div
            className="relative px-8 py-4  overflow-hidden w-40 h-12 cursor-pointer"
            whileHover="hover"
            initial="initial"
        >
            {/* 背景 */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                variants={{
                    initial: {
                        backgroundColor: "#FFFF0000",
                        borderRadius: "4px",
                    },
                    hover: {
                        backgroundColor: "rgba(255, 200, 0, 1)",
                        borderRadius: "999px",
                    },
                }}
                transition={{
                    backgroundColor: {
                        duration: 0.6,
                        ease: "easeInOut",
                    },
                    borderRadius: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.3,
                    },
                }}
            />
            {/* テキスト */}
            <span className="absolute inset-0 flex justify-center items-center">
                HOVER
            </span>
        </motion.div>
    );
}