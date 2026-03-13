import { useState } from "react";
import { FancySlide } from "./FancySlide";
import { slides } from "./sliderData";
import { AnimatePresence } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { getFancyConfig } from "@/lib/responsive/fancyConfig";

export default function FancySlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const config = getFancyConfig(width);

    const next = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div ref={ref} className="relative w-[90%] max-w-100 aspect-square mx-auto overflow-hidden bg-neutral-800">
            <AnimatePresence mode="wait">
                <FancySlide
                    key={slides[index].id}
                    active
                    direction={direction}
                    title={slides[index].title}
                    image={slides[index].image}
                    config={config}
                    index={index}
                />
            </AnimatePresence>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex items-center gap-4 text-white">
                {/* 前へボタン */}
                <button
                    onClick={prev}
                    className={`group flex items-center gap-2 tracking-widest cursor-pointer ${config.buttonTextClass}`}
                >
                    ←
                </button>

                {/* インジケーター */}
                <div className={`flex items-center gap-2 pointer-events-none z-20 ${config.indicatorClass}`} style={{ pointerEvents: "none" }}>
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

                {/* 次へボタン */}
                <button
                    onClick={next}
                    className={`group flex items-center gap-2 tracking-widest cursor-pointer ${config.buttonTextClass}`}
                >
                    →
                </button>
            </div>
        </div>
    );
}