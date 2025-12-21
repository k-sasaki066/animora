"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TextAnimation07() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full px-4 flex items-center justify-center overflow-hidden">
            <div className="relative overflow-hidden">
                {/* ワイプ背景 */}
                <motion.div
                    className="absolute inset-0 bg-[#bce9ec]"
                    initial={{ x: "-101%" }}
                    animate={{ x: active ? "101%" : "-101%" }}
                    transition={{
                        duration: 1,
                        ease: [0.39, 0.575, 0.565, 1],
                    }}
                />
                {/* テキスト */}
                <motion.div
                    className="relative font-mono font-bold uppercase text-[3vw]"
                    initial={{
                        x: "-110%",
                        skewX: 8,
                    }}
                    animate={{
                        x: active ? "0%" : "-110%",
                        skewX: active ? 0 : 8,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.3,
                    }}
                >
                    Wipe Animation
                </motion.div>
            </div>
        </div>
    );
}