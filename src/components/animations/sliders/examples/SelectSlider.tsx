"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/lavender.jpg",
    "/flower.jpg",
    "/hydrangea.jpg",
    "/river.jpg",
    "/leading.jpg",
];

export default function SelectSlider() {
    const [selected, setSelected] = useState(0);

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full max-w-xl aspect-video text-center relative">
                {/* メイン画像 */}
                <AnimatePresence mode="wait">
                    <div className="w-full h-full">
                        <motion.img
                            key={images[selected]}
                            src={images[selected]}
                            className="w-full h-full object-cover rounded shadow-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </AnimatePresence>

                {/* サムネイル */}
                <div className="flex justify-center mt-4 gap-2">
                    {images.map((img, idx) => (
                        <motion.button
                            key={idx}
                            onClick={() => setSelected(idx)}
                            className={`border-2 rounded p-0 transition-opacity duration-500 ${
                            selected === idx
                                ? "border-orange-400 opacity-100"
                                : "border-white opacity-60 hover:opacity-90"
                            }`}
                            animate={{
                                scale: selected === idx ? 1.1 : 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={img}
                                className="w-12 aspect-video rounded-xs object-cover"
                            />
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
}