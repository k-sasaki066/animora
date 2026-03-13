import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getRandomImages } from "@/lib/randomImages";

const images = getRandomImages(5);

const slides = images.map((src, i) => ({
    src,
    title: `sample${i + 1}`,
}));

export default function VerticalSlider() {
    const [hovered, setHovered] = useState(false);
    const [current, setCurrent] = useState(0);
    const duration = 5000; // 1スライド5秒
    const total = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, duration);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative w-full max-w-xl aspect-video mx-auto border-7 md:border-10 border-[#dad9d9] shadow-lg overflow-visible bg-gray-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setHovered((prev) => !prev)}
        >
            <div className="overflow-hidden relative w-full h-full">
                <AnimatePresence>
                    {slides.map((slide, index) =>
                        index === current ? (
                            <motion.div
                                key={index}
                                initial={{ y: "-100%", opacity: 1 }}
                                animate={{ y: "0%", opacity: 1 }}
                                exit={{ y: "100%", opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 top-0 left-0"
                            >
                                <a className="cursor-pointer" href="#">
                                    <img
                                        src={slide.src}
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: hovered ? 0 : "-100%" }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute bottom-[8%] left-0 w-[50%] max-w-60 bg-black/70 text-white text-xs md:text-sm p-2 z-10"
                                >
                                    <h1 className="text-center font-semibold uppercase">
                                        {slide.title}
                                    </h1>
                                </motion.div>
                            </motion.div>
                        ) : null
                    )}
                </AnimatePresence>
            </div>

            {/* プログレスバー */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                        duration: duration / 1000 - 1,
                        ease: [0.3, 0, 0.2, 1],
                        delay: 1,
                    }}
                    className="absolute bottom-0 left-0 h-1.5 bg-gray-400/75"
                />
            </AnimatePresence>
        </div>
    );
}