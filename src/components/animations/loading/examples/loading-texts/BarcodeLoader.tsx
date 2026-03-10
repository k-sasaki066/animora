import { motion } from "framer-motion";
import { useMemo } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

interface Props {
    paused?: boolean;
}

export default function BarcodeLoader({ paused = false }: Props) {
    const text = "Loading";
    const { ref, width } = useContainerSize<HTMLDivElement>();

    // 1pxごとのランダム移動量を固定生成
    const bars = useMemo(() => {
        if (!width) return [];

        return Array.from({ length: width }, (_, i) => {
            const dir = i % 2 === 0 ? 1 : -1;
            const y1 = rand(20, 70) * dir;
            const y2 = rand(10, 20);
            return {
                x: i,
                y1,
                y2,
                delay: i * 0.01,
            };
        });
    }, [width]);

    const pausedBars = bars.map((bar, i) => bar.y1 / 8);

    return (
        <div
            ref={ref}
            className="relative text-3xl font-medium text-purple-600 select-none whitespace-nowrap"
        >
            {/* 元文字（幅測定用・見えない） */}
            <span className="opacity-0">{text}</span>

            {/* バーコード */}
            <div className="absolute inset-0">
                {bars.map((bar, i) => (
                    <motion.span
                        key={i}
                        className="absolute top-0 overflow-hidden"
                        style={{
                            width: 1,
                            left: bar.x,
                            textIndent: -bar.x,
                        }}
                        animate={
                            paused
                                ? { y: pausedBars[i] }
                                : {
                                    y: [0, bar.y1, bar.y1 + (i % 2 === 0 ? -bar.y2 : bar.y2), 0, 0],
                                }
                        }
                        transition={
                            paused
                                ? { duration: 0 }
                                : {
                                    duration: 2.6,
                                    times: [0, 0.3, 0.6, 0.85, 1],
                                    ease: "easeInOut",
                                    delay: Math.max(0, bar.delay),
                                    repeat: Infinity,
                                    repeatDelay: 1.0,
                                }
                        }
                    >
                        {text}
                    </motion.span>
                ))}
            </div>
        </div>
    );
}

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}