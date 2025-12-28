"use client"

import { motion } from "framer-motion";

export default function SpinImage() {
    return (
        <motion.div
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden bg-black text-white"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{ rest: {}, hover: {} }}
        >
            <motion.img
                src="/sea.jpg"
                className="w-full h-full object-cover"
                variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 0.25, transition: { duration: 0.4 } }
                }} />

            <motion.div
                className="absolute w-8 h-8 bottom-4 right-4 flex justify-center items-center"
                variants={{
                    rest: {},
                    hover: {},
                }}
                >
                {/* 縦線 */}
                <motion.div
                    className="absolute bg-white w-0.5 h-full"
                    variants={{
                        rest: {
                            opacity: 0,
                            rotate: -45,
                            originX: "50%",
                            originY: "50%"
                        },
                        hover: {
                            opacity: 1,
                            rotate: 0,
                            transition:
                                { duration: 0.3 }
                        },
                    }}
                />

                {/* 横線 */}
                <motion.div
                    className="absolute bg-white h-0.5 w-full"
                    variants={{
                        rest: {
                            opacity: 0,
                            rotate: -45,
                            originX: "50%",
                            originY: "50%"
                        },
                        hover: {
                            opacity: 1,
                            rotate: 0,
                            transition:
                                { duration: 0.3 }
                        },
                    }}
                />
            </motion.div>
        </motion.div>
    );
}