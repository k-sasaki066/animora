"use client";

import { useState } from "react";
import { FancySlide } from "./FancySlide";
import { slides } from "./sliderData";
import { AnimatePresence } from "framer-motion";

export default function FancySlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const next = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % slides.length);
    };

  return (
    <div className="relative w-120 h-100 mx-auto overflow-hidden bg-neutral-800">
        <AnimatePresence mode="wait">
            <FancySlide
                key={slides[index].id}
                active
                direction={direction}
                title={slides[index].title}
                image={slides[index].image}
                onNext={next}
            />
        </AnimatePresence>

            {/* インジケーター */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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