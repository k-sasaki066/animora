"use client";

import { motion } from "framer-motion";

export default function GradientSlideButton() {

    return (
        <motion.div
            className="w-40 h-12 cursor-pointer flex justify-center items-center px-8 py-4 rounded-lg text-white font-semibold bg-size-[200%_auto] bg-linear-to-r from-[#fbc2eb] via-[#a6c1ee] to-[#fbc2eb]"
            initial={{
                backgroundPosition: "0% center"
            }}
            whileHover={{
                backgroundPosition: "100% center"
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut"
            }}
        >
            Button
        </motion.div>
    );
}