import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const phases = [
    // 0–25%
    [
        { x: "17%", y: "0%", w: "66%", h: "100%", color: "bg-red-600" },
    ],
    // 25–50%
    [
        { x: "0%", y: "0%", w: "100%", h: "50%", color: "bg-blue-600" },
        { x: "0%", y: "0%", w: "33%", h: "100%", color: "bg-blue-600" },
    ],
    // 50–75%
    [
        { x: "34%", y: "0%", w: "66%", h: "50%", color: "bg-green-500" },
        { x: "0%", y: "50%", w: "66%", h: "50%", color: "bg-green-500" },
    ],
    // 75–100%
    [
        { x: "0%", y: "50%", w: "100%", h: "50%", color: "bg-purple-600" },
        { x: "34%", y: "0%", w: "33%", h: "50%", color: "bg-purple-600" },
    ],
];

export default function TetrisBlockPart() {
    const [phase, setPhase] = useState(0);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const containerWidth = width ? Math.min(width * 0.2, 90) : 45;
    const containerHeight = Math.min(containerWidth * 0.66, 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setPhase((prev) => (prev + 1) % phases.length);
        }, 500); // 2秒 ÷ 4フェーズ = 0.5s

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={ref}
            className="w-full h-full flex justify-center items-center"
        >
            <div
                className="relative"
                style={{
                    width: containerWidth,
                    height: containerHeight,

                }}
            >
                {phases[phase].map((b, i) => (
                    <motion.div
                        key={i}
                        className={`absolute ${b.color}`}
                        style={{
                            left: b.x,
                            top: b.y,
                            width: b.w,
                            height: b.h,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}