import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWheelNavigation } from "./useWheelNavigation";
import SlideImages from "./SlideImages";
import { useContainerSize } from "@/hooks/useContainerSize";
import { getSplitConfig } from "@/lib/responsive/splitConfig";
import { SwipeHint } from "@/components/ui/SwipeHint";

const images = [
    "/images/samples/sample-02.webp",
    "/images/samples/sample-14.webp",
    "/images/samples/sample-27.webp"
];

const colors = [
    "#fff",
    "#eee",
    "#eee"
];

const texts = ["Desert", "Erosion", "Shape"];
const SWIPE_KEY = "split_slideshow_swiped";

export default function SplitSlideshow() {
    const [index, setIndex] = useState(0);
    const { ref, width: containerWidth } = useContainerSize<HTMLDivElement>();
    const config = getSplitConfig(containerWidth);

    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        // 初回のみ表示
        const hasSwiped = sessionStorage.getItem(SWIPE_KEY);
        if (!hasSwiped) setShowHint(true);
    }, []);

    const touchStartY = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const deltaY = e.changedTouches[0].clientY - touchStartY.current;

        if (Math.abs(deltaY) > 50) {
            if (deltaY > 0) prev();
            else next();
        }
    };

    const handleFirstSwipe = () => {
        if (!showHint) return;

        sessionStorage.setItem(SWIPE_KEY, "true");
        setShowHint(false);
    };

    const next = () =>
        setIndex((prev) => (prev + 1) % images.length);
    const prev = () =>
        setIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
        );

    useWheelNavigation({
        onNext: next,
        onPrev: prev,
        delay: 1100,
    });

    return (
        <div
            ref={ref}
            className="w-full max-w-4xl mx-auto relative"
            onWheel={handleFirstSwipe}
            onTouchStart={(e) => {
                handleFirstSwipe();
                handleTouchStart(e);
            }}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className="relative overflow-hidden mx-auto"
                style={{
                    width: config.width,
                    aspectRatio: "3 / 2",
                }}
            >
                <SlideImages images={images} index={index} />

                {/* テキスト */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            className={`text-white  font-light tracking-[0.3em] flex items-center justify-center h-full`}
                            style={{ fontSize: config.fontSize }}
                            initial={{
                                y: "100%",
                                opacity: 0,
                                color: colors[(index - 1 + colors.length) % colors.length],
                            }}
                            animate={{
                                y: "0%",
                                opacity: 0.9,
                                color: colors[index % colors.length],
                            }}
                            exit={{
                                y: "-100%",
                                opacity: 0
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.7, 0, 0.3, 1]
                            }}
                        >
                            {texts[index]}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="absolute right-4 top-1/2 flex flex-col gap-2 -translate-y-1/2 items-end">
                    {images.map((_, i) => (
                        <motion.div
                            key={i}
                            className="h-0.5 bg-white rounded-full"
                            animate={{
                                width: i === index
                                    ? config.indicatorSize * 1.6
                                    : config.indicatorSize,
                                opacity: i === index ? 1 : 0.6,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    ))}
                </div>
            </div>
            {/* スワイプヒント */}
            <SwipeHint visible={showHint}/>
        </div>
    );
}