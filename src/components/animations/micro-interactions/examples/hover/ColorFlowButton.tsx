"use client";

import { motion } from "framer-motion";

export default function ColorFlowButton() {

    return (
        <motion.div
            className="relative group px-8 py-4 rounded-md overflow-hidden w-40 h-12 cursor-pointer flex justify-center items-center"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: { boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
                hover: { boxShadow: "0px 8px 20px rgba(0,0,0,0.25)" },
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative w-full flex justify-center items-center">
                <motion.span
                    className="relative"
                    variants={{
                        rest: { x: 0 },
                        hover: { x: -10 },
                    }}
                    transition={{
                        type: "tween",
                        duration: 0.3
                    }}
                >
                    Button
                </motion.span>

                {/* Hover Arrow */}
                <motion.span
                    className="absolute right-0 text-xl text-red-500"
                    initial={{ opacity: 0 }}
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                >
                    &raquo;
                </motion.span>
            </div>
        </motion.div>
    );
}