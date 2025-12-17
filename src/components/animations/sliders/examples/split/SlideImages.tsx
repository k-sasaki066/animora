"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SlideImagesProps {
    images: string[];
    index: number;
}

export default function SlideImages({
    images,
    index,
}: SlideImagesProps) {
    return (
        <div className="absolute inset-0 flex">
            {/* 左側スライド */}
            <div className="relative w-1/2 h-full overflow-hidden">
                <AnimatePresence>
                    <motion.img
                        key={`left-${index}`}
                        src={images[index]}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover object-left"
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{
                        duration: 0.8,
                        ease: [0.7, 0, 0.3, 1],
                        }}
                    />
                </AnimatePresence>
            </div>

            {/* 右側スライド（逆方向） */}
            <div className="relative w-1/2 h-full overflow-hidden">
                <AnimatePresence>
                    <motion.img
                        key={`right-${index}`}
                        src={images[index]}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover object-right"
                        initial={{ y: "-100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "100%" }}
                        transition={{
                        duration: 0.8,
                        ease: [0.7, 0, 0.3, 1],
                        }}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}