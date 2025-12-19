"use client";

import { useState, useEffect } from "react";
import Carousel3dSlide from "./Carousel3dSlide";
import { slides } from "./data";
import { useWindowSize } from "@/lib/responsive/useWindowSize";
import { getCarousel3dConfig } from "@/lib/responsive/carousel3dConfig";

export default function Carousel3dSlider() {
    const [current, setCurrent] = useState(0);
    const total = slides.length;
    const width = useWindowSize();
    const config = getCarousel3dConfig(width);

    function getCircularOffset(
        index: number,
        current: number,
        total: number
    ) {
        let offset = index - current;
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        return offset;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 5000);
        return () => clearInterval(timer);
    }, [total]);

    return (
        <div className="relative w-full h-80 sm:h-[360px] md:h-[420px] flex items-center justify-center perspective-[1000px] overflow-hidden">
            {slides.map((slide, index) => {
                const offset = getCircularOffset(index, current, total);
                if (Math.abs(offset) > config.maxVisibleOffset) return null;

                return (
                    <Carousel3dSlide
                        key={index}
                        title={slide.title}
                        text={slide.text}
                        offset={offset}
                        config={config}
                    />
                );
            })}

            {/* controls */}
            <button
                onClick={() => setCurrent((current - 1 + total) % total)}
                className="absolute left-4 text-4xl text-gray-600 z-100"
            >
                ❮
            </button>
            <button
                onClick={() => setCurrent((current + 1) % total)}
                className="absolute right-4 text-4xl text-gray-600 z-100"
            >
                ❯
            </button>
        </div>
    );
}