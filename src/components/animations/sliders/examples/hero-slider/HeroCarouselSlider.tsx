"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "./heroSlides";
import { HeroSlide } from "./HeroSlide";
import { useWindowSize } from "@/lib/responsive/useWindowSize";
import { getHeroConfig } from "@/lib/responsive/heroConfig";

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const width = useWindowSize();
    const heroConfig = getHeroConfig(width);

    const prev = () => {
        setCurrent((c) => (c === 0 ? heroSlides.length - 1 : c - 1));
    };

    const next = () => {
        setCurrent((c) => (c === heroSlides.length - 1 ? 0 : c + 1));
    };

    return (
        <div className="relative w-full max-w-3xl">
            {/* スライド */}
            <div className={`relative ${heroConfig.containerHeight} overflow-hidden`}>
            {heroSlides.map((slide, index) => (
                <HeroSlide
                key={index}
                slide={slide}
                active={index === current}
                config={heroConfig}
                />
            ))}
            </div>

            {/* ナビ */}
            <div className={`flex items-center ${heroConfig.navClass}`}>
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
                    className={`rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition bg-white ${heroConfig.buttonSize}`}
                >
                    <ChevronLeft size={18} />
                </button>

                <button
                    onClick={next}
                    className={`rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition bg-white ${heroConfig.buttonSize}`}
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}