"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "@/lib/responsive/useWindowSize";
import { getCarouselConfig } from "@/lib/responsive/centerFocusConfig";

const testimonials = [
    {
        name: "1",
        image: "/fruits.jpg",
        text:
        "Sample text1.",
    },
    {
        name: "2",
        image: "/flower.jpg",
        text:
        "Sample text2.",
    },
    {
        name: "3",
        image: "/hydrangea.jpg",
        text:
        "Sample text3.",
    },
    {
        name: "4",
        image: "/lavender.jpg",
        text:
        "Sample text4.",
    },
    {
        name: "5",
        image: "/leading.jpg",
        text:
        "Sample text5.",
    },
];

const getOffset = (index: number, current: number, length: number) => {
    let offset = index - current;

    if (offset > length / 2) offset -= length;
    if (offset < -length / 2) offset += length;

    return offset;
};

export default function TestimonialsCarousel() {
    const [current, setCurrent] = useState(2);
    const width = useWindowSize();
    const config = getCarouselConfig(width);

    return (
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-8">
            <div className="relative flex items-center justify-center h-[300px]">
                {testimonials.map((item, index) => {
                    const offset = getOffset(
                        index,
                        current,
                        testimonials.length
                    );

                    if (Math.abs(offset) > config.visibleRange) return null;
                    const isActive = offset === 0;

                    return (
                        <motion.div
                            key={item.name}
                            className="absolute px-6"
                            animate={{
                                x: offset * config.gap,
                                scale: isActive ? 1 : config.inactiveScale,
                                opacity: isActive ? 1 : config.inactiveOpacity,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}
                        >
                            <div
                                className="bg-white border rounded-md p-6 text-center shadow-lg"
                                style={{ width: config.cardWidth }}
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-[90px] h-[90px] object-cover rounded-full mx-auto mb-4"
                                    style={{
                                        width: config.imageSize,
                                        height: config.imageSize,
                                    }}
                                />
                                <p          className="text-gray-600 text-sm mb-4">{item.text}</p>
                            </div>

                            <div className="-mt-6 mx-auto bg-blue-500 text-white px-6 py-2 rounded-xl w-fit shadow">
                                {item.name}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* dots */}
            <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-4 h-4 rounded-full  transition-transform duration-200
                        hover:scale-125
                        ${
                            index === current
                            ? "bg-blue-500 scale-100"
                            : "bg-blue-300 scale-50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}