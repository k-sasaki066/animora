"use client"

import { motion } from "framer-motion";

export default function SlideImage() {
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
            <motion.img
                src="/flower.jpg"
                className="absolute top-0 left-0 min-w-[120%] h-full object-cover"
                variants={{
                    rest: {
                        x: 0,
                        transition: {
                            duration: 2,
                            ease: "easeOut"
                        }
                    },
                    hover: {
                        x: "-15%",
                        transition: {
                            duration: 2,
                            ease: "easeOut"
                        }
                    },
                }}
            />
        </motion.div>
    );
}