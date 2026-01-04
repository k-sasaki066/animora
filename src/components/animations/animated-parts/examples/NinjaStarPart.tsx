"use client"

import { motion } from "framer-motion";

export default function NinjaStarPart() {

    return (
        <motion.div
            className="
                w-16 aspect-square
                bg-[#3e445d]
                [clip-path:polygon(100%_50%,64.14%_64.14%,50%_100%,35.86%_64.14%,0%_50%,35.86%_35.86%,50%_0%,64.14%_35.86%)]
                [mask:radial-gradient(circle_5px,transparent_90%,black)]
            "
            animate={{ rotate: 360 }}
            transition={{
                duration: 1.8,
                ease: "linear",
                repeat: Infinity,
            }}
        />
    );
}