"use client"

import { motion } from "framer-motion";

export default function BorderImage() {
    return (
        <motion.div
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: {},
                hover: {},
            }}
        >
            <img
                src="./hydrangea.jpg"
                alt="border hover"
                className="
                w-full h-full object-cover"
            />

            <motion.div
                className="absolute inset-0 pointer-events-none"
                variants={{
                    rest: {
                        boxShadow:
                            "inset 0 0 #dc5a45, inset 0 0 #dc5a45, inset 0 0 #dc5a45, inset 0 0 #dc5a45", //box-shadow: <offset-x> <offset-y> <blur(ぼかし)> <spread(広がり)> <color>;
                        opacity: 0,
                        transition: { duration: 0.4, ease: "easeInOut" },
                    },
                    hover: {
                        boxShadow:
                            "inset 5px 0 #dc5a45, inset 0 5px #dc5a45, inset -5px 0 #dc5a45, inset 0 -5px #dc5a45", //左、上、右、下の順にそれぞれ5pxの線
                        opacity: 0.8,
                        transition: { duration: 0.4, ease: "easeInOut" },
                    },
                }}
                transition={{
                    duration: 0.3,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
            />
        </motion.div>
    );
}