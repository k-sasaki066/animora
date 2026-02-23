"use client";

import { motion } from "framer-motion";

const WIDTH = 40;

export default function VerticalRibbon() {
    const fold = WIDTH * 0.15;
    const paddingTop = WIDTH * 0.25;
    const paddingBottom = WIDTH * 0.5;
    const radius = WIDTH * 0.075;

    return (
        <div className="relative w-full h-full flex justify-center items-center bg-[#f1f1f1] shadow-md">
            <p className="text-lg">Image</p>

            {/* リボン位置 */}
            <motion.div
                className="absolute"
                style={{
                    top: -fold,
                    left: WIDTH * 0.375,
                }}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                {/* 折り返し */}
                <div
                    className="absolute top-0 bg-[#FF8F00]"
                    style={{
                        right: -fold,
                        width: fold,
                        height: fold,
                        clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
                    }}
                />

                {/* リボン本体 */}
                <div
                    className="relative flex items-center px-0 text-white font-semibold tracking-widest bg-[#FFC107]"
                    style={{
                        width: WIDTH,
                        paddingTop: paddingTop,
                        paddingBottom: paddingBottom,
                        borderTopLeftRadius: radius,
                        writingMode: "vertical-rl",
                        textOrientation: "upright",
                        clipPath:
                            "polygon(0% 0%, 100% 0, 100% 100%, 50% 90%, 0% 100%)",
                    }}
                >
                    優秀賞
                </div>
            </motion.div>
        </div>
    );
}