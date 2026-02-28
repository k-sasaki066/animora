"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PiFlowerFill } from "react-icons/pi";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

export default function EnvelopeCard() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1)
        : 1;
    const [open, setOpen] = useState(false);

    const BODY_WIDTH = 260;
    const HALF = BODY_WIDTH / 2;

    const BODY_HEIGHT = BODY_WIDTH * 0.357;
    const FLAP_HEIGHT = BODY_WIDTH * 0.57;
    const CARD_WIDTH = BODY_WIDTH - 10;
    const CARD_HEIGHT = BODY_WIDTH * 0.57;
    const HOVER_HEIGHT = CARD_HEIGHT * 0.8;

    const flowers = [
        { y: "-top-[0.5em]", x: "-left-[0.5em]" },
        { y: "-bottom-[0.5em]", x: "-right-[0.5em]" },
    ];

    return (
        <div ref={ref} className="relative flex items-center justify-center w-full h-full bg-gray-100 overflow-y-auto no-scrollbar z-0">
            <div
                className="absolute top-[15%] group cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
                style={{scale}}
            >
                {/* click me */}
                <AnimatePresence>
                    {!open && (
                        <motion.div
                            key="bubble"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: 1,
                                y: [0, -4, 0],
                            }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{
                                opacity: { delay:0.5, duration: 0.3 },
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-1"
                        >
                            <div className="relative text-sm font-semibold text-white/75">
                                Click me
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>


                {/* ===== Envelope Base ===== */}
                <div
                    className="relative w-0 h-0 mx-auto"
                    style={{
                        borderLeft: `${HALF}px solid transparent`,
                        borderRight: `${HALF}px solid transparent`,
                        borderBottom: `${BODY_HEIGHT}px solid #256a98`,
                    }}
                >
                    {/* Bottom shadow layer */}
                    <div
                        className="absolute bg-[#256a98]"
                        style={{
                            left: -HALF,
                            top: BODY_HEIGHT,
                            width: BODY_WIDTH,
                            height: BODY_HEIGHT,
                        }}
                    />

                    {/* Right flap */}
                    <div
                        className="absolute w-0 h-0 z-50"
                        style={{
                            top: BODY_HEIGHT,
                            left: -HALF,
                            borderTop: `${FLAP_HEIGHT}px solid transparent`,
                            borderRight: `${BODY_WIDTH}px solid #2a7fb5`,
                        }}
                    />

                    {/* Left flap */}
                    <div
                        className="absolute w-0 h-0 z-50"
                        style={{
                            top: BODY_HEIGHT,
                            left: -HALF,
                            borderTop: `${FLAP_HEIGHT}px solid transparent`,
                            borderLeft: `${BODY_WIDTH}px solid #3596da`,
                        }}
                    />

                    {/* ===== Card ===== */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: open ? -HOVER_HEIGHT : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute -translate-y-1/2 bg-gray-200 shadow-md flex items-center text-center uppercase tracking-widest font-bold z-10"
                        style={{
                            top: BODY_WIDTH * 0.64,
                            left: -CARD_WIDTH / 2,
                            width: CARD_WIDTH,
                            height: CARD_HEIGHT,
                        }}
                    >
                        <AnimatePresence>
                            {open && (
                                <motion.p
                                    key="text"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.5, duration: 0.4 }}
                                    className="relative w-[80%] mx-auto text-gray-500 text-lg border-y border-y-[#838da1] py-2">
                                    thank you always
                                    {flowers.map(({ y, x }, index) => (
                                        <span
                                            key={index}
                                            className={`absolute text-[1.6em] ${y} ${x} text-[#f3a66b] bg-[#e5e7eb]`}
                                        >
                                            <PiFlowerFill />
                                        </span>
                                    ))}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
