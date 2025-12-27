"use client"

import { motion } from "framer-motion";

export default function HoverTextImage() {
    return (
        <motion.div
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            initial="initial"
            whileHover="hover"
            animate="initial"
            variants={{
                initial: {},
                hover: {},
            }}
        >
            <img
                src="/hydrangea.jpg"
                className="w-full h-full object-cover"
            />

            <motion.div
                className="
                absolute w-20 h-20 left-1/2 top-1/2
                bg-black/60 text-white text-sm rounded-full flex justify-center items-center"
                variants={{
                    initial: {
                        opacity: 0,
                        scale: 0.5,
                        x: "-50%",
                        y: "-50%"
                    },
                    hover: {
                        opacity: 1,
                        scale: 1,
                        x: "-50%",
                        y: "-50%"
                    },
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            >
                VIEW →
            </motion.div>
        </motion.div>
    );
}