"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "./heroSlides";
import { HeroSlide } from "./HeroSlide";

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((c) => (c === 0 ? heroSlides.length - 1 : c - 1));
    };

    const next = () => {
        setCurrent((c) => (c === heroSlides.length - 1 ? 0 : c + 1));
    };

    return (
        <div className="relative w-full max-w-3xl">
            {/* スライド */}
            <div className="relative h-80 sm:h-[380px] md:h-[460px] lg:h-[520px] overflow-hidden">
            {heroSlides.map((slide, index) => (
                <HeroSlide
                key={index}
                slide={slide}
                active={index === current}
                />
            ))}
            </div>

            {/* ナビ */}
            <div className="mt-4 sm:mt-6 flex items-center gap-4 sm:gap-6">
                <div className="flex-1 h-1 bg-blue-100 rounded-full overflow-hidden">
                    <div
                    className="h-full bg-blue-500 transition-all duration-500"
                    style={{
                        width: `${((current + 1) / heroSlides.length) * 100}%`,
                    }}
                    />
                </div>

                <button
                    onClick={prev}
                    className="w-10 h-10 **:sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition bg-white"
                >
                    <ChevronLeft size={18} />
                </button>

                <button
                    onClick={next}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition bg-white"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}