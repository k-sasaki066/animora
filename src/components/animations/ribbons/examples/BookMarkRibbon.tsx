"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const RIBBON_WIDTH = 48;
const RIBBON_HEIGHT = RIBBON_WIDTH * 1.2;
const TRIANGLE_RATIO = 0.2;
const TRIANGLE_HEIGHT = RIBBON_HEIGHT * TRIANGLE_RATIO;
const RIBBON_COLOR = "#ff785b";

export default function BookMarkRibbon() {
    const RECT_HEIGHT = RIBBON_HEIGHT - TRIANGLE_HEIGHT;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full h-full bg-[#f1f1f1] flex justify-center items-center"
        >
            {/* リボン本体 */}
            <div
                className="absolute top-0 right-2.5 flex flex-col items-center text-white text-center z-10"
                style={{
                    width: RIBBON_WIDTH,
                    height: RIBBON_HEIGHT,
                    backgroundColor: RIBBON_COLOR,
                    clipPath: `polygon(
                        0% 0%,
                        100% 0%,
                        100% 100%,
                        50% ${100 - TRIANGLE_RATIO * 100}%,
                        0% 100%
                    )`,
                }}
            >
                <div
                    className="flex items-center justify-center w-full"
                    style={{ height: RECT_HEIGHT }}
                >
                    <FaStar size={18} />
                </div>
            </div>

            {/* コンテンツ */}
            <p className="text-lg">Image</p>
        </motion.div>
    );
}
