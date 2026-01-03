"use client"

import { motion } from "framer-motion";

export default function StripeSlideLoader() {

    return (
        <motion.div
            className="w-[calc(80px/cos(45deg))] h-3 rounded"
            style={{
                background: `repeating-linear-gradient(-45deg, #6f86d6 0 15px, transparent 0 20px)`,
                backgroundSize: "200% 100%",
            }}
            animate={{
                backgroundPosition: ["0% 0%", "100% 0%"],
            }}
            transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
            }}
        />
    );
}