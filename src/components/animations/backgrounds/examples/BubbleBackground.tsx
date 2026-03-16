import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

interface Bubble {
    id: number;
    size: number;
    left: number;
    duration: number;
}

export default function BubbleBackground() {
    const { ref, width, height } = useContainerSize<HTMLDivElement>();
    const [bubbles, setBubbles] = useState<Bubble[]>([]);
    const nextId = useRef(0);

    useEffect(() => {
        if (!width) return;

        const interval = setInterval(() => {
            // 親コンテナ幅に応じたサイズと位置
            const minSize = width * 0.02;
            const maxSize = width * 0.08;
            const size = Math.random() * (maxSize - minSize) + minSize;

            const left = Math.random() * (width - size); // コンテナ幅内に収める

            const duration = Math.random() * (10 - 5) + 5; // 5〜10秒
            const id = nextId.current++;

            setBubbles((prev) => [...prev, { id, size, left, duration }]);

            // 古い泡を削除
            setTimeout(() => {
                setBubbles((prev) => prev.filter((b) => b.id !== id));
            }, duration * 1000);
        }, 300);

        return () => clearInterval(interval);
    }, [width]);

    return (
        <div ref={ref} className="relative w-full aspect-video overflow-hidden bg-linear-to-b from-[#89f7fe] to-[#66a6ff] rounded-lg">
            {bubbles.map((b) => (
                <motion.div
                    key={b.id}
                    className="absolute rounded-full bg-transparent shadow-inner"
                    style={{
                        width: b.size,
                        height: b.size,
                        left: b.left,
                        bottom: -b.size,
                        boxShadow: "inset 0 0 10px rgba(255,255,255,0.2)"
                    }}
                    initial={{
                        y: 0,
                        opacity: 1
                    }}
                    animate={{
                        y: -height,
                        opacity: 0
                    }}
                    transition={{
                        duration: b.duration,
                        ease: "linear"
                    }}
                >
                    {/* 泡のハイライト */}
                    <div
                        className="absolute w-full h-full rounded-full"
                        style={{
                            background: "radial-gradient(rgba(255,255,255,0.5), transparent)",
                            transform: "scale(0.25) translate(-70%, -70%)",
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
}