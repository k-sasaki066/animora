"use client";

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { BUBBLES } from "./bubble";

const BASE_WIDTH = 400;
const CARD_WIDTH = 200;
const CARD_HEIGHT = 255;

export default function PastelBubbleCard() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.8), 1)
        : 1;

    return (
        <div ref={ref} className="w-full h-full bg-linear-to-br to-[#a7e0e5] from-[#ffe0e3] overflow-hidden">
            <div className="relative w-full h-full flex justify-center items-start py-[10%] overflow-y-auto no-scrollbar">

                {/* Background Circles */}
                {BUBBLES.map((circle, i) => (
                    <motion.div
                        key={i}
                        {...circle.float}
                        className={`absolute aspect-square rounded-full ${circle.className}`}
                    />
                ))}

                {/* Card Stack */}
                <div className="relative" style={{scale}}>

                    {/* Back Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -60, y: -60 }}
                        animate={{ opacity: 0.5, x: 0, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute bg-white rounded-lg -right-4 top-4"
                        style={{
                            width: CARD_WIDTH,
                            height: CARD_HEIGHT
                        }}
                    />

                    {/* Front Border */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 50 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute border-2 border-white rounded-lg -left-4 -top-4"
                        style={{
                            width: CARD_WIDTH,
                            height: CARD_HEIGHT
                        }}
                    />

                    {/* Pink Border Layer */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 50 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute rounded-lg overflow-hidden right-0 top-0 z-50"
                        style={{
                            width: CARD_WIDTH,
                            height: CARD_HEIGHT
                        }}
                    >
                        <div className="absolute w-full h-full border-2 border-[#FFE0E3] rounded-xl -left-4 -top-4" />
                    </motion.div>

                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, y: 30 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative bg-white rounded-lg p-6 shadow-md"
                        style={{
                            width: CARD_WIDTH,
                            height: CARD_HEIGHT
                        }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className="text-gray-500/75 text-2xl font-semibold uppercase"
                        >
                            sample
                        </motion.h2>

                        <motion.hr
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="my-2 border-gray-300"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-sm text-gray-500"
                        >
                            Sample Text
                        </motion.p>

                        <div className="absolute bottom-5">
                            <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-sm text-gray-500"
                            >
                                sample@company.com
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="text-sm text-gray-500"
                            >
                                0123-456-789
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
