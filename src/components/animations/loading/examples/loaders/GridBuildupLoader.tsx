"use client"

import { motion } from "framer-motion";

export default function GridBuildupLoader() {
    const gridOrder = [...Array(9).keys()];

    return (
        <motion.div
            className="grid grid-cols-3 gap-1 w-12 h-12 text-purple-600"
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.08, // 子を順番に動かす
                        repeat: Infinity,
                        repeatType: "loop",
                    },
                },
            }}
        >
            {gridOrder.map((_, index) => {
                const upIndex = index;

                return (
                    <motion.div
                        key={index}
                        className="w-3 h-3 bg-purple-600"
                        variants={{
                            hidden: {
                                opacity: 0, scale: 0.4
                            },

                            visible: {
                                opacity: [0, 1, 1, 0],
                                scale: [0.4, 1, 1, 0.4],
                                transition: {
                                    times: [0, 0.4, 0.6, 1],
                                    duration: 2.4,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    delay: (upIndex * 0.1),
                                },
                            },
                        }}
                    />
                );
            })}
        </motion.div>
    );
}