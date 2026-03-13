import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function CollapsePart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const progress = useMotionValue(0);

    const BASE_WIDTH = 228;
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1.3)
        : 1;

    const BAR_COUNT = 8;
    const DROP_DISTANCE = 40 * scale; // 落下距離
    const DURATION = 3.2; // caret が一周する時間
    const FALL_RANGE = 0.08; // ← 落下に使う progress幅
    const CARET_DELAY = 0.1;

    const LAST_BAR_END =
        (BAR_COUNT - 1) / BAR_COUNT + CARET_DELAY + FALL_RANGE;
    const TOTAL_PROGRESS = LAST_BAR_END + 0.02;

    useEffect(() => {
        const controls = animate(progress, TOTAL_PROGRESS, {
            duration: DURATION,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0.2,
        });

        return () => controls.stop();
    }, [progress, DURATION]);

    const caretX = useTransform(
        progress,
        (p: number) => `${-10 + p * 110}%`
    );

    /** caret はテキスト上 (progress <= 1) のみ表示 */
    const caretOpacity = useTransform(
        progress,
        [0, 0.001, 1, 1.001],
        [0, 1, 1, 0],
        { clamp: true }
    );

    return (
        <div
            ref={ref}
            className="w-full h-full flex justify-center items-center"
        >
            <div
                className="relative inline-flex items-end font-mono font-bold leading-tight"
                style={{ fontSize: `${16 * scale}px` }}
            >
                {/* Bars */}
                <div className="absolute inset-0 flex">
                    {Array.from({ length: BAR_COUNT }).map((_, i) => {
                        const start = i / BAR_COUNT + CARET_DELAY;
                        const end = start + FALL_RANGE;

                        const y = useTransform(
                            progress,
                            [start, end],
                            [0, DROP_DISTANCE],
                            { clamp: true }
                        );

                        const opacity = useTransform(
                            progress,
                            [end, end + 0.02],
                            [1, 0],
                            { clamp: true }
                        );

                        return (
                            <motion.div
                                key={i}
                                className="w-[1ch] bg-black"
                                style={{ y, opacity }}
                            />
                        );
                    })}
                </div>

                {/* Text */}
                <span className="relative z-10 px-1 select-none">
                    Animation
                </span>

                {/* Caret */}
                <motion.div
                    className="absolute bg-sky-500"
                    style={{
                        left: caretX,
                        opacity: caretOpacity,
                        width: 10 * scale,
                        height: 14 * scale,
                        top: -16 * scale,
                    }}
                />
            </div>
        </div>
    );
}