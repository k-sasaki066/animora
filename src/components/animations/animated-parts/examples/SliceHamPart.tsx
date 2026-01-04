"use client"

import { motion } from "framer-motion";

export default function SliceHamPart() {

    const steps = (n: number) => (t: number) => {
        return Math.floor(t * n) / n;
    };

    return (
        <div className="relative w-25 h-9 flex items-center">
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

            <div
                className="absolute w-4 h-4 top-1/2  -translate-y-1/2 -right-2.5 bg-[#bd3342]"
                style={{
                    clipPath: "polygon(0 50%, 100% 0, 70% 50%, 100% 100%)",
                }}
            />

            {/* 断面 */}
            <motion.div
                className="w-7 h-[90%] bg-[#eb8594] absolute left-0.5 top-0.5 rounded-full z-10"
                animate={{
                    x: ["0%", "52%", "104%", "156%"]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: steps(3),
                }}
            >

                <div className="w-1.5 h-1.5 bg-white/50 absolute left-1 top-4 rounded-full z-10"/>
                <div className="w-2 h-2 bg-white/50 absolute left-3 top-2 rounded-full z-10"/>
                <div className="w-1 h-1 bg-white/50 absolute left-4 top-6 rounded-full z-10"/>
            </motion.div>
        </div>
    );
}