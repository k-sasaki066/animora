"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 420;

export default function FloatingTiltCard() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1)
        : 1;

    const cardRef = useRef<HTMLDivElement>(null);

    // マウス位置を元に回転値を管理
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    // 少しバネを効かせる
    const springConfig = { stiffness: 180, damping: 20 };
    const springX = useSpring(rotateX, springConfig);
    const springY = useSpring(rotateY, springConfig);

    // ライト用グラデーション
    const lightAngle = useTransform(springY, [-6, 6], [25, 65]);
    const lightWidth = useTransform(springX, [-6, 6], [55, 25]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const percentX = (mouseX / width - 0.5) * 2;
        const percentY = (mouseY / height - 0.5) * 2;

        const maxRotate = 6;

        rotateY.set(percentX * maxRotate);
        rotateX.set(-percentY * maxRotate);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    const borderVariants = {
        rest: { pathLength: 0 },
        hover: { pathLength: 1 }
    };

    return (
        <div ref={ref} className="w-full h-full bg-[#b0976d] flex items-start justify-center overflow-y-auto no-scrollbar py-4">
            <div className="perspective-[1000px] flex justify-center">
                <motion.div
                    ref={cardRef}
                    onPointerMove={handleMouseMove}
                    onPointerLeave={handleMouseLeave}
                    initial="rest"
                    whileHover="hover"
                    whileTap="hover"
                    animate="rest"
                    style={{
                        rotateX: springX,
                        rotateY: springY,
                        transformStyle: "preserve-3d",
                    }}
                    className="relative w-[40%] min-w-45 aspect-6/7 overflow-hidden shadow-2xl"
                >
                    {/* サムネイル */}
                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                        className="w-full h-full object-cover"
                        alt=""
                    />

                    {/* コンテンツ */}
                    <div
                        className="absolute bottom-[8%] left-10 right-10 text-white"
                        style={{ transform: "translateZ(80px)" }}
                    >
                        <h1 className="text-xl font-bold uppercase tracking-wide">
                            Floating Card
                        </h1>
                        <span className="text-xs tracking-[0.2em] text-[#b0976d] font-bold uppercase">
                            sample
                        </span>
                    </div>

                    {/* ボーダー */}
                    <motion.svg
                        className="absolute inset-4 pointer-events-none"
                        style={{ transform: "translateZ(80px) rotate(180deg)" }}
                        viewBox="0 0 100 120"
                        preserveAspectRatio="none"
                        >
                        <motion.rect
                            x="0"
                            y="0"
                            width="100"
                            height="120"
                            fill="transparent"
                            stroke="#9ca3af"
                            strokeWidth="1"
                            pathLength="1"
                            variants={borderVariants}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            style={{
                                originX: 1,
                                originY: 1,
                            }}
                        />
                    </motion.svg>

                    {/* ライト */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: useTransform(
                                [lightAngle, lightWidth],
                                ([angle, width]) =>
                                    `linear-gradient(${angle}deg, rgba(0,0,0,0.6), transparent ${width}%)`
                            ),
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
