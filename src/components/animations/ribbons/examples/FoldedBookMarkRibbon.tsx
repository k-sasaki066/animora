"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["600", "700"],
});

const WIDTH_PERCENT = 20;
const RIBBON_WIDTH = 52;
const RIBBON_COLOR = "#fa8383";
const FOLD_COLOR = "#d07676";

// 比率設計
const FOLD_HEIGHT = 6;
const PADDING_TOP_RATIO = 0.25;
const PADDING_BOTTOM_RATIO = 0.35;
const FOLD_WIDTH = RIBBON_WIDTH * 0.15;

export default function FoldedBookMarkRibbon() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full h-full bg-[#f1f1f1] flex justify-center items-center"
        >
            <div
                className="absolute right-3 z-10 max-w-18"
                style={{
                    width: `${WIDTH_PERCENT}%`,
                    top: -FOLD_HEIGHT,
                }}
            >
                {/* 背景レイヤー */}
                <div
                    className="absolute inset-0 rounded-tl-xs"
                    style={{
                        backgroundColor: RIBBON_COLOR,
                        clipPath:
                            "polygon(0% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%)",
                    }}
                />

                {/* テキスト */}
                <div
                    className={`relative flex justify-center text-white text-sm ${montserrat.className} font-semibold tracking-wider`}
                    style={{
                        paddingTop: `${PADDING_TOP_RATIO * 100}%`,
                        paddingBottom: `${PADDING_BOTTOM_RATIO * 100}%`,
                    }}
                >
                    NEW
                </div>

                {/* 折り返し */}
                <div
                    className="absolute top-0 left-full"
                    style={{
                        width: 0,
                        height: 0,
                        borderBottom: `${FOLD_HEIGHT}px solid ${FOLD_COLOR}`,
                        borderRight: `${FOLD_WIDTH}px solid transparent`,
                        marginLeft: -0.5,
                    }}
                />
            </div>

            <p className="text-lg">Image</p>
        </motion.div>
    );
}

