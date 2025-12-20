"use client";

import { useState } from "react";
import { FancySlide } from "./FancySlide";
import { slides } from "./sliderData";
import { AnimatePresence } from "framer-motion";
import { useWindowSize } from "@/lib/responsive/useWindowSize"
import { getFancyConfig } from "@/lib/responsive/fancyConfig"

export default function FancySlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const width = useWindowSize()
    const config = getFancyConfig(width)

    const next = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="relative max-w-xl aspect-12/10 mx-auto overflow-hidden bg-neutral-800">
            <AnimatePresence mode="wait">
                <FancySlide
                    key={slides[index].id}
                    active
                    direction={direction}
                    title={slides[index].title}
                    image={slides[index].image}
                    onNext={next}
                    config={config}
                />
            </AnimatePresence>

            {/* インジケーター */}
            <div className={`absolute left-1/2 -translate-x-1/2 flex gap-3 z-20 ${config.indicatorClass}`}>
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition ${
                        i === index ? "bg-white" : "bg-white/40"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}