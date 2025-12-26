"use client";

import { motion } from "framer-motion";

const BG_URL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC";

export default function InfinityScrollBackground() {
    return (
        <motion.div
            className="relative w-full aspect-video rounded-lg overflow-hidden"
            style={{
                backgroundImage: `url(${BG_URL})`,
                backgroundRepeat: "repeat",
                backgroundSize: "50px 50px",
            }}
            animate={{
                backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
                duration: 1,
                ease: "linear",
                repeat: Infinity,
            }}
        >
            {/* タイトル */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[4vw] text-gray-300">
                    Grid
                </span>
            </div>
        </motion.div>
    );
}