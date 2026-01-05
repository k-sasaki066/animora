"use client"

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function QuadSwapPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const size = width ? Math.min(width * 0.07, 30): 16;
    const gap = width ? Math.min(width * 0.05, 20): 10;

    const createPositions = (g: number) => {
        const d = size + g;
        return [
            { x: -d / 2, y: -d / 2 },
            { x:  d / 2, y: -d / 2 },
            { x:  d / 2, y:  d / 2 },
            { x: -d / 2, y:  d / 2 },
        ];
    };

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                className="relative flex items-center justify-center"
                style={{
                    width: size * 2 + 16,
                    height: size * 2 + 16
                }}
                animate={{
                    gap: [0, 8, 8, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: [0.3, 1, 0, 1],
                }}
            >
                {[0, 1, 2, 3].map((pos, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-orange-400"
                        style={{
                            width: size,
                            height: size,
                        }}
                        animate={{
                            x: [
                                createPositions(0)[i].x,
                                createPositions(gap)[i].x,
                                createPositions(gap)[(i + 1) % 4].x,
                                createPositions(0)[(i + 1) % 4].x,
                            ],
                            y: [
                                createPositions(0)[i].y,
                                createPositions(gap)[i].y,
                                createPositions(gap)[(i + 1) % 4].y,
                                createPositions(0)[(i + 1) % 4].y,
                            ],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: [0.3, 1, 0, 1],
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}