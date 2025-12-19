"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWindowSize } from "@/lib/responsive/useWindowSize";
import { getCarouselConfig } from "@/lib/responsive/centerCarouselConfig";

const slides = [
    "/lavender.jpg",
    "/flower.jpg",
    "/hydrangea.jpg",
    "/river.jpg",
    "/leading.jpg",
    "/sea.jpg"
];

const getOffset = (index: number, current: number, length: number) => {
    let offset = index - current;

    if (offset > length / 2) offset -= length;
    if (offset < -length / 2) offset += length;

    return offset;
};

export default function CenterCarouselSlider() {
    const [current, setCurrent] = useState(2); // 最初は「3」を中央に

    const width = useWindowSize();
    const { cardWidth, cardHeight, visibleRange, centerScale } =
    getCarouselConfig(width);

    const prev = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const next = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
            {/* 左ボタン */}
            <button onClick={prev} className="p-2 z-20">
              <ChevronLeft />
            </button>

            {/* スライドエリア */}
            <div className="relative flex items-center justify-center w-full h-64 overflow-hidden">
                {slides.map((item, index) => {
                    const offset = getOffset(index, current, slides.length);

                    if (Math.abs(offset) > visibleRange) return null;

                    const scale =
                        offset === 0
                            ? centerScale
                            : Math.abs(offset) === 1
                                ? 1
                                : 0.85;

                    const targetX = offset * cardWidth;

                    const enterX =
                        offset > 0
                            ? (visibleRange + 1) * cardWidth
                              : -(visibleRange + 1) * cardWidth;

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
                                stiffness: 300,
                                damping: 30,
                            }}
                        >
                            <img
                                src={item}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    );
                })}
            </div>

            {/* 右ボタン */}
            <button onClick={next} className="p-2 z-20">
                <ChevronRight />
            </button>
        </div>
    );
}