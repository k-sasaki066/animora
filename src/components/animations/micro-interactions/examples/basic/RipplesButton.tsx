"use client";

import { motion } from "framer-motion";

export default function RipplesButton() {

    return (
        <motion.div
            className="relative flex justify-center items-center rounded-full bg-purple-400 w-40 h-12 cursor-pointer px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                className="absolute rounded-full border  bg-purple-300"
                style={{
                    width: "100%",
                    height: "100%",
                }}
                animate={{
                    scale: [1.1, 1.3],
                    opacity: [0.5, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                }}
            />
        </motion.div>
    );
}