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
        <div className="relative w-full max-w-4xl h-[550px] overflow-hidden">
            {/* スライド */}
            {heroSlides.map((slide, index) => (
                <HeroSlide
                key={index}
                slide={slide}
                active={index === current}
                />
            ))}

            {/* ナビ */}
            <div className="absolute bottom-0 right-0 flex bg-white z-20">
                <button onClick={prev} className="p-3 border-r">
                    <ChevronLeft size={18} />
                </button>

                <button onClick={next} className="p-3">
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}