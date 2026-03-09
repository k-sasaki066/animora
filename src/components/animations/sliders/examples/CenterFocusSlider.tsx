"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { getCarouselConfig } from "@/lib/responsive/centerFocusConfig";
import { getRandomImages } from "@/lib/randomImages";
import { BREAKPOINTS } from "@/lib/responsive/breakpoints";

const images = getRandomImages(5);

const testimonials = images.map((img, index) => ({
    name: String(index + 1),
    image: img,
    text: `Sample text${index + 1}.`,
}));

const getOffset = (index: number, current: number, length: number) => {
    let offset = index - current;

    if (offset > length / 2) offset -= length;
    if (offset < -length / 2) offset += length;

    return offset;
};

export default function CenterFocusSlider() {
    const [current, setCurrent] = useState(0);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const config = getCarouselConfig(width);

    const swipeThreshold = 80;

    const next = () => {
        setCurrent((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prev = () => {
        setCurrent((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleDragEnd = (_: any, info: any) => {
        if (info.offset.x < -swipeThreshold) {
            next();
        } else if (info.offset.x > swipeThreshold) {
            prev();
        }
    };

    return (
        <div ref={ref} className="relative w-full max-w-xl mx-auto overflow-hidden">
            <motion.div
                className="relative flex items-center justify-center w-full aspect-video"
                drag={width < BREAKPOINTS.tablet ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
            >
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
                            key={index}
                            className="absolute"
                            animate={{
                                x: offset * config.gap,
                                scale: isActive ? 1 : config.inactiveScale,
                                opacity: isActive ? 1 : config.inactiveOpacity,
                                padding: `0px ${config.padding}px`,
                                zIndex: 100 - Math.abs(offset)
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}
                        >
                            <div
                                className="bg-white border rounded-md text-center shadow-lg"
                                style={{
                                    width: config.cardWidth,
                                    padding: config.padding,
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="object-cover rounded-full mx-auto mb-3"
                                    style={{
                                        width: config.imageSize,
                                        height: config.imageSize,
                                    }}
                                />
                                <p className="text-gray-600 text-sm mb-3">
                                    {item.text}
                                </p>
                            </div>

                            <div
                                className="absolute left-1/2 -translate-x-1/2 -bottom-3 mx-auto bg-blue-500 text-white rounded-xl w-fit shadow"
                                style={{
                                    padding: `${config.namePaddingY}px ${config.namePaddingX}px`,
                                }}
                            >
                                {item.name}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* dots */}
            <div className="flex justify-center gap-3 mt-3">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3.5 h-3.5 rounded-full  transition-transform duration-200
                        hover:scale-105
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