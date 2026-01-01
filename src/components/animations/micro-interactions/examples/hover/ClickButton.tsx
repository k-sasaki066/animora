"use client";

import { motion } from "framer-motion";

export default function ClickButton() {

    return (
        <div className="relative px-8 py-4 bg-gray-400 z-5 w-40 h-12 cursor-pointer">
            <motion.div
                className="absolute -top-1 -left-1 px-8 py-4 bg-sky-300 w-full h-full"
                whileHover={{
                    x: 3,
                    y: 3
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
            >
                {/* テキスト */}
                <span className="absolute inset-0 flex justify-center items-center">
                    HOVER
                </span>
            </motion.div>
        </div>
    );
}