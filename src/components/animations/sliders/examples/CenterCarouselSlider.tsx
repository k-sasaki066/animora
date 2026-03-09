"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { getCarouselConfig } from "@/lib/responsive/centerCarouselConfig";
import { getRandomImages } from "@/lib/randomImages";

const slides = getRandomImages(6);

const getOffset = (index: number, current: number, length: number) => {
    let offset = index - current;

    if (offset > length / 2) offset -= length;
    if (offset < -length / 2) offset += length;

    return offset;
};

export default function CenterCarouselSlider() {
    const [current, setCurrent] = useState(2); // 最初は「3」を中央に

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const { cardWidth, cardHeight, visibleRange, centerScale } =
    getCarouselConfig(width);

    const prev = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const next = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const swipeThreshold = 80;

    const handleDragEnd = (_: any, info: any) => {
        if (info.offset.x < -swipeThreshold) {
            next();
        } else if (info.offset.x > swipeThreshold) {
            prev();
        }
    };

    return (
        <div ref={ref} className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
            {/* 左ボタン */}
            <button onClick={prev} className="p-2 z-20">
                <ChevronLeft />
            </button>

            {/* スライドエリア */}
            <motion.div
                className="relative flex items-center justify-center w-full aspect-3/2 overflow-hidden"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
            >
                {slides.map((item, index) => {
                    const offset = getOffset(index, current, slides.length);

                    if (Math.abs(offset) > visibleRange) return null;

                    const scale =
                        offset === 0
                            ? centerScale
                            : Math.abs(offset) === 1
                                ? 1
                                : 0.85;

                    const gap = cardWidth * 1.05;
                    const targetX = offset * gap;

                    const enterX =
                    offset > 0
                        ? (visibleRange + 1) * gap
                        : -(visibleRange + 1) * gap;

                    const zIndex = 10 - Math.abs(offset);

                    return (
                        <motion.div
                            key={item}
                            className="absolute  overflow-hidden"
                            style={{
                                width: cardWidth,
                                height: cardHeight,
                                zIndex,
                            }}
                            initial={{ x: enterX, scale }}
                            animate={{ x: targetX, scale }}
                            transition={{
                                type: "spring",
                                stiffness: 180,
                                damping: 28,
                            }}
                        >
                            <motion.img
                                src={item}
                                alt=""
                                className="w-full h-full object-cover"
                                animate={{
                                    filter: offset === 0 ? "grayscale(0%)" : "grayscale(100%)",
                                    opacity: offset === 0 ? 1 : 0.8
                                }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* 右ボタン */}
            <button onClick={next} className="p-2 z-20">
                <ChevronRight />
            </button>
        </div>
    );
}