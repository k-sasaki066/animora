"use client";

import { useState, useEffect } from "react";
import Carousel3dSlide from "./Carousel3dSlide";
import { slides } from "./data";

export default function Carousel3dSlider() {
    const [current, setCurrent] = useState(0);
    const total = slides.length;

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
      <div className="relative w-full h-[300px] flex items-center justify-center perspective-[1000px] overflow-hidden">
          {slides.map((slide, index) => {
              const offset = getCircularOffset(index, current, total);
              const isActive = offset === 0;

                return (
                    <Carousel3dSlide
                        key={index}
                        title={slide.title}
                        text={slide.text}
                        offset={offset}
                        isActive={isActive}
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