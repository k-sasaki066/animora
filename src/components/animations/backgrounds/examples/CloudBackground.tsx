"use client";

import { motion } from "framer-motion";

export default function CloudBackground() {
    return (
        <motion.div
            className="
            w-full aspect-video bg-[#C0DEED] bg-repeat-x
            bg-top rounded-lg"
            style={{
                backgroundImage:
                "url(https://abs.twimg.com/images/themes/theme1/bg.png)",
            }}
            animate={{
                backgroundPositionX: ["0%", "100%"],
            }}
            transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
            }}
        />
    );
}