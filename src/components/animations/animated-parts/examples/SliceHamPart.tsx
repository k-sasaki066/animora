"use client"

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function SliceHamPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const steps = (n: number) => (t: number) => {
        return Math.floor(t * n) / n;
    };

    const hamWidth = width ? Math.min(width * 0.4, 180) : 90;
    const hamHeight = hamWidth * 0.4;

    const sliceWidth = hamWidth * 0.31;
    const sliceHeight = hamHeight * 0.9;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <div
                className="relative flex items-center"
                style={{
                    width: hamWidth,
                    height: hamHeight,
                }}
            >
                {/* ハム */}
                <motion.div
                    className="bg-[#bd3342] h-full rounded-full absolute right-0"
                    style={{
                        transformOrigin: "100% 50%"
                    }} // 右端を基準に縮める
                    initial={{ width: "100%" }}
                    animate={{
                        width: ["100%", "85%", "70%", "55%"]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: steps(3),
                    }}
                />

                {/* 結び目 */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 bg-[#bd3342]"
                    style={{
                        width: hamHeight * 0.45,
                        height: hamHeight * 0.45,
                        right: -(hamHeight * 0.3),
                        backgroundColor: "#bd3342",
                        clipPath: "polygon(0 50%, 100% 0, 70% 50%, 100% 100%)",
                    }}
                />

                {/* 断面 */}
                <motion.div
                    className="bg-[#eb8594] absolute rounded-full z-10"
                    style={{
                        width: sliceWidth,
                        height: sliceHeight,
                        left: hamWidth * 0.01,
                        top: hamHeight * 0.05,
                    }}
                    animate={{
                        x: ["0%", "50%", "100%", "150%"]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: steps(3),
                    }}
                >

                    <div
                        className="bg-white/50 absolute rounded-full"
                        style={{
                            width: sliceWidth * 0.2,
                            height: sliceWidth * 0.2,
                            left: sliceWidth * 0.15,
                            top: sliceHeight * 0.3
                        }}
                    />
                    <div
                        className="bg-white/50 absolute rounded-full"
                        style={{
                            width: sliceWidth * 0.3,
                            height: sliceWidth * 0.3,
                            left: sliceWidth * 0.5,
                            top: sliceHeight * 0.16
                        }}
                    />
                    <div
                        className="bg-white/50 absolute rounded-full"
                        style={{
                            width: sliceWidth * 0.15,
                            height: sliceWidth * 0.15,
                            left: sliceWidth * 0.5,
                            top: sliceHeight * 0.65
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}