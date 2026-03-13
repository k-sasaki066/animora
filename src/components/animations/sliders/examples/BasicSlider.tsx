import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getRandomImages } from "@/lib/randomImages";

const images = getRandomImages(5);

export default function BasicSlider() {
    const [current, setCurrent] = useState(0);
    const directionRef = useRef<1 | -1>(1);

    const slideVariants = {
        enter: (direction: 1 | -1) => ({
            x: direction === 1 ? "100%" : "-100%",
            opacity: 1,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: 1 | -1) => ({
            x: direction === 1 ? "-100%" : "100%",
            opacity: 1,
        }),
    };

    const prev = () => {
        directionRef.current = -1;
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const next = () => {
        directionRef.current = 1;
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-xl mx-auto">
            {/* スライダー枠 */}
            <div className="relative overflow-hidden rounded-xl aspect-video">
                <AnimatePresence initial={false} custom={directionRef.current}>
                    <motion.div
                        key={current}
                        className="absolute inset-0 w-full h-full"
                        custom={directionRef.current}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src={images[current]}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 左右ボタン */}
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
            >
                <ChevronLeft />
            </button>

            <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
            >
                <ChevronRight />
            </button>

            {/* インジケーター */}
            <div className="flex justify-center space-x-2 mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition
                        ${
                            current === index
                            ? "bg-purple-600 scale-125"
                            : "bg-gray-300"
                        }
                        `}
                    />
                ))}
            </div>
        </div>
    );
}