"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["600", "700"],
});

const SIZE = 100;

export default function CornerRibbon() {
    const containerW = SIZE;
    const containerH = SIZE * 1.02;

    const ribbonWidth = SIZE * 1.8;
    const ribbonLeft = SIZE * -0.22;
    const ribbonTop = SIZE * 0.22;

    const foldOffsetY = SIZE * 0.045;
    const foldLeft = SIZE * 0.18;
    const foldRight = SIZE * 0.28;
    const foldSize = SIZE * 0.04;

    return (
        <div className="relative w-full h-full bg-gray-100 shadow-md box-border">

            {/* マスクエリア */}
            <div
                className="absolute overflow-hidden pointer-events-none"
                style={{
                    top: -SIZE * 0.07,
                    right: -SIZE * 0.07,
                    width: containerW,
                    height: containerH,
                }}
            >
                <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className={`absolute text-center tracking-widest text-white bg-linear-to-r from-[#4298fa] to-[#8fcdff] rotate-45 shadow-md ${montserrat.className} font-semibold`}
                    style={{
                        width: ribbonWidth,
                        left: ribbonLeft,
                        top: ribbonTop,
                        padding: `${SIZE * 0.08}px 0`,
                        fontSize: SIZE * 0.14,
                        lineHeight: `${SIZE * 0.18}px`,
                        textShadow: "0 2px 2px #56a1f3",
                    }}
                >
                    NEW

                    {/* 左の折り返し三角 */}
                    <span
                        className="absolute w-0 h-0"
                        style={{
                            bottom: -foldOffsetY,
                            left: foldLeft,
                            borderTop: `${foldSize}px solid #3672b6`,
                            borderLeft: `${foldSize}px solid transparent`,
                            borderRight: `${foldSize}px solid transparent`,
                        }}
                    />

                    {/* 右の折り返し三角 */}
                    <span
                        className="absolute w-0 h-0"
                        style={{
                            bottom: -foldOffsetY,
                            right: foldRight,
                            borderTop: `${foldSize}px solid #3672b6`,
                            borderLeft: `${foldSize}px solid transparent`,
                            borderRight: `${foldSize}px solid transparent`,
                        }}
                    />
                </motion.span>
            </div>

            <div className="flex items-center justify-center h-full">
                Image
            </div>
        </div>
    );
}