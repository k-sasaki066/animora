"use client"

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function ClockPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const clockWidth = width ? Math.min(width * 0.18, 75) : 40;
    const clockCenter = Math.min(clockWidth * 0.075, 5);
    const pendulumHeight = Math.min(clockWidth, 70);
    const pendulum = Math.min(clockWidth * 0.2, 12);

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <div
                style={{
                    width: clockWidth,
                    height: clockWidth * 2,
                }}
            >
                <div className="relative w-full aspect-square box-border border-2 border-[#43c6ac] flex justify-center items-center">
                    {/* 時計の針 */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `
                                radial-gradient(circle ${clockCenter}px, currentColor 95%, #0000),
                                linear-gradient(currentColor 50%, #0000 0) 50% / 2px 80% no-repeat,
                                linear-gradient(90deg, currentColor 50%, #0000 0) 50% / 60% 2px no-repeat
                            `,
                        }}
                    />

                    {/* 振り子 */}
                    <motion.div
                        className="absolute top-full left-[10%] w-[80%]"
                        style={{
                            height: pendulumHeight,
                            transformOrigin: "top",
                            background: `
                                radial-gradient(circle closest-side at 50% calc(100% - ${pendulum}px), #ff9966 94%, #0000),
                                linear-gradient(currentColor 0 0) top / 3px 80% no-repeat
                            `,
                        }}
                        animate={{ rotate: [0, 0.4] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: [0.5, 200, 0.5, -200],
                        }}
                    />
                </div>
            </div>
        </div>
    );
}