"use client";

import { motion } from "framer-motion";

const sides = ["left", "right"] as const;

const HEIGHT = 52;
const TRIANGLE_HALF = HEIGHT / 2;
const TRIANGLE_WIDTH = HEIGHT / 4;
const INNER_LINE_HEIGHT = HEIGHT * 0.7;

export default function SimpleRibbon() {

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full h-full flex justify-center items-center"
        >
            {/* 本体 */}
            <div className="relative w-[85%] max-w-65 flex justify-center items-center bg-[#acd879] text-white leading-none text-lg box-border" style={{ height: HEIGHT }}>
                {sides.map((side) => (
                    <div
                        key={side}
                        className={`absolute top-0 ${side}-0 w-0 h-0`}
                        style={{
                            borderTop: `${TRIANGLE_HALF}px solid transparent`,
                            borderBottom: `${TRIANGLE_HALF}px solid transparent`,
                            ...(side === "left"
                                ? { borderLeft: `${TRIANGLE_WIDTH}px solid white` }
                                : { borderRight: `${TRIANGLE_WIDTH}px solid white` }),
                        }}
                    />
                ))}

                {/* 中のテキスト */}
                <h3
                    className="w-full flex items-center justify-center m-0 px-10 border-y-2 border-dashed border-white/50"
                    style={{ height: INNER_LINE_HEIGHT }}
                >
                    Welcome!
                </h3>
            </div>
        </motion.div>
    );
}
