"use client";

import { motion } from "framer-motion";

export default function ClickMoveButton() {

    return (
        <motion.div
            className="
                bg-teal-400 text-white
                w-40 h-12
                cursor-pointer
                flex items-center justify-center
                font-semibold
                select-none
                rounded-lg
            "
            animate={{
                y: [0, 0, 6, 6, 0, 0],
                boxShadow: [
                    "0 6px 0 rgba(0,0,0,0.35)",
                    "0 6px 0 rgba(0,0,0,0.35)",
                    "0 0 0 rgba(0,0,0,0)",
                    "0 0 0 rgba(0,0,0,0)",
                    "0 6px 0 rgba(0,0,0,0.35)",
                    "0 6px 0 rgba(0,0,0,0.35)",
                ],
            }}
            transition={{
                duration: 1.4,
                times: [0, 0.45, 0.5, 0.6, 0.75, 1],
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
        </motion.div>
    );
}