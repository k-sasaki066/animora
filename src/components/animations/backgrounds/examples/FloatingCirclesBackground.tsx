"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

type Circle = {
    id: number;
    top: number;
    left: number;
    size: number;
};

export default function FloatingCirclesBackground() {
    const [circles, setCircles] = useState<Circle[]>([]);
    const { ref, width, height } = useContainerSize<HTMLDivElement>();

    useEffect(() => {
        if (!width || !height) return;

        const interval = setInterval(() => {
            const base = Math.min(width, height);
            const minSize = base * 0.03;
            const maxSize = base * 0.08;

            const size =
                Math.random() * (maxSize - minSize) + minSize;

            setCircles((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    size,
                    top: Math.random() * (height - size),
                    left: Math.random() * (width - size),
                },
            ]);
        }, 800);

        return () => clearInterval(interval);
    }, [width, height]);

    return (
        <div ref={ref} className="relative w-full aspect-video overflow-hidden bg-[#e0ddac]">
            {circles.map((circle) => (
                <motion.div
                    key={circle.id}
                    className="absolute rounded-full border border-white"
                    style={{
                        top: circle.top,
                        left: circle.left,
                        width: circle.size,
                        height: circle.size,
                        borderWidth: circle.size * 0.05
                    }}
                    initial={{
                        scale: 1,
                        opacity: 1
                    }}
                    animate={{
                        scale: 5,
                        opacity: 0
                    }}
                    transition={{
                        duration: 2 + circle.size / 50,
                        ease: "linear"
                    }}
                    onAnimationComplete={() =>
                        setCircles((prev) => prev.filter((c) => c.id !== circle.id))
                    }
                />
            ))}
        </div>
    );
}