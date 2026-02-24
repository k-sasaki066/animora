"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["600", "700"],
});

export default function BadgeRibbon() {
    const HEIGHT = 30;
    const WIDTH = 100;
    const TEXT = "NEW!";

    // 折り返し
    const LEFT_BAR_WIDTH = WIDTH * 0.07;
    const LEFT_BAR_HEIGHT = HEIGHT * 1.27;
    const LEFT_BAR_TOP = -HEIGHT * 0.27;
    const LEFT_BAR_BORDER_RADIUS = "5px 0 0 5px";

    // 折り返し影
    const SMALL_BAR_WIDTH = WIDTH * 0.05;
    const SMALL_BAR_HEIGHT = HEIGHT * 0.23;
    const SMALL_BAR_TOP = -HEIGHT * 0.23;

    return (
        <div className="relative w-full h-full flex justify-center items-center bg-[#f1f1f1]">
            <div
                className="absolute top-4 left-0 inline-block"
                style={{ height: HEIGHT, width: WIDTH }}
            >
                {/* リボン本体 */}
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`w-full h-full absolute bg-[#ff7470] text-white text-base tracking-wider flex justify-center items-center shadow-[1px_-1px_1px_rgba(0,0,0,0.1)] ${montserrat.className}`}
                >
                    {TEXT}

                    {/* 折り返し */}
                    <div
                        className="absolute bg-[#ff7470]"
                        style={{
                            top: LEFT_BAR_TOP,
                            left: -LEFT_BAR_WIDTH + 1,
                            width: LEFT_BAR_WIDTH,
                            height: LEFT_BAR_HEIGHT,
                            borderRadius: LEFT_BAR_BORDER_RADIUS,
                        }}
                    />

                    <div
                        className="absolute bg-[#b25552]"
                        style={{
                            top: SMALL_BAR_TOP,
                            left: -SMALL_BAR_WIDTH + 1,
                            width: SMALL_BAR_WIDTH,
                            height: SMALL_BAR_HEIGHT,
                            borderRadius: "5px 0 0 5px",
                        }}
                    />
                </motion.div>
            </div>

            <p className="text-lg">Image</p>
        </div>
    );
}
