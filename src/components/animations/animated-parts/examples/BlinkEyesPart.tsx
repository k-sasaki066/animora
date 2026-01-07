"use client"

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function BlinkEyesPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const controls = useAnimationControls();
    const mounted = useRef(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const BASE_EYE_SIZE = 24; // 白目
    const BASE_PUPIL_SIZE = 10; // 黒目

    const scale = width ? Math.min(width / 228, 1.5) : 1;

    const eyeSize = BASE_EYE_SIZE * scale;
    const pupilSize = BASE_PUPIL_SIZE * scale;

    useEffect(() => {
        mounted.current = true;

        const blinkOnce = async () => {
            if (!mounted.current) return;

            await controls.start({
                y: ["-100%", "0%", "-100%"],
                transition: {
                duration: 0.15,
                times: [0, 0.5, 1],
                ease: "easeInOut",
                },
            });
        };

        const blinkLoop = async () => {
            if (!mounted.current) return;

            const blinkCount = Math.random() < 0.35 ? 2 : 1;

            for (let i = 0; i < blinkCount; i++) {
                await blinkOnce();
                await new Promise((r) => setTimeout(r, 120));
            }

            const nextDelay = 1200 + Math.random() * 2000;

            timeoutRef.current = setTimeout(blinkLoop, nextDelay);
        };

        // マウント後に1フレーム待つ
        requestAnimationFrame(() => {
            if (mounted.current) blinkLoop();
        });

        return () => {
            mounted.current = false;
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [controls]);


    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <div className="flex gap-3">
                {[0, 1].map((i) => (
                    <div
                        key={i}
                        className="relative rounded-full bg-white border border-gray-800 overflow-hidden"
                        style={{
                            width: eyeSize,
                            height: eyeSize,
                        }}
                    >
                        {/* まぶた */}
                        <motion.div
                            className="absolute left-0 w-full h-full bg-black z-10"
                            initial={{ y: "-100%" }}
                            animate={ controls }
                        />

                        {/* 黒目 */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="bg-black rounded-full"
                                style={{
                                    width: pupilSize,
                                    height: pupilSize,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}