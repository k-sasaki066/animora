"use client";

import { motion } from "framer-motion";
import GooeyFilter from "@/components/ui/GooeyFilter";

export default function MochiButton() {

    return (
        <>
            <GooeyFilter id="goo" />

            <div
                className="relative w-40 h-12 cursor-pointer"
                style={{ filter: "url(#goo)" }}
            >
                <motion.div
                    className="relative w-full h-full inline-block rounded-xl" initial="rest"
                    whileHover="hover"
                    animate="rest"
                >
                    {/* 上の丸 */}
                    <motion.div
                        className="absolute bg-gray-400 rounded-full z-0"
                        style={{
                            width: "36%",   // 親幅の36%
                            height: "85%",  // 親高さの85%
                            top: "-20%",    // 親上端より少し上
                            left: "22%",    // 親幅の22%左から
                        }}
                        variants={{
                            rest: { scale: 0 },
                            hover: { scale: 1.15 }
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                    />

                    {/* 下の丸 */}
                    <motion.div
                        className="absolute bg-gray-400 rounded-full z-0"
                        style={{
                            width: "36%",
                            height: "85%",
                            bottom: "-20%",
                            right: "20%",
                        }}
                        variants={{
                            rest: { scale: 0 },
                            hover: { scale: 1.15 }
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                    />

                    {/* ボタン本体 */}
                    <button className="relative w-full h-full rounded-xl font-bold text-white bg-gray-400">
                        Button
                    </button>
                </motion.div>
            </div>
        </>
    );
}