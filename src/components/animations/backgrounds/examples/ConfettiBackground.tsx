"use client";

import { motion } from "framer-motion";

export default function ConfettiBackground() {
    const confettiItems = Array.from({ length: 25 }).map((_, i) => {
        const colors = ["red-500", "orange-500", "purple-500", "pink-500", "blue-500", "green-500", "yellow-400"];
        const color = colors[i % colors.length];

        const sizes = ["w-3 h-3", "w-2 h-2", "w-1.5 h-1.5"];
        const size = sizes[i % sizes.length];

        const translateX = `${Math.random() * 40 - 20}vw`; // X方向の移動
        const duration = Math.random() * 8 + 2; // アニメーション時間
        const delay = Math.random() * 5; //遅延

        const rotateZ = Math.random() * 360;
        const rotateX = Math.random() * 180;
        const rotateY = Math.random() * 360;
        const leftStart = Math.random() * 100; // 初期位置をランダムに

        return { id: i, color, size, translateX, duration, delay, rotateX, rotateY, rotateZ, leftStart };
    });

    return (
        <div className="relative w-full aspect-video pointer-events-none overflow-hidden">
            {confettiItems.map(item => (
                <motion.div
                    key={item.id}
                    className={`absolute  bg-${item.color} ${item.size}`}
                    style={{
                        left: `${item.id * 10}%`
                    }}
                    initial={{
                        top: "-10%",
                        rotateX: item.rotateX,
                        rotateY: item.rotateY,
                        rotate: item.rotateZ,
                    }}
                    animate={{
                        top: "110%",
                        rotateX: [item.rotateX, item.rotateX + 180],
                        rotateY: [item.rotateY, item.rotateY + 360],
                        rotate: [item.rotateZ, item.rotateZ + 360],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: item.duration,
                        delay: item.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
}