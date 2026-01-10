"use client";

import { motion, useAnimationControls } from "framer-motion";

export default function BouncyTextButton() {
    const label = "bouncy";
    const letters = label.split('');
    const controls = useAnimationControls();

    return (
        <motion.button
            onHoverStart={() => controls.start('hover')}
            onHoverEnd={() => controls.start('leave')}
            initial="rest"
            animate={controls}
            className="
                relative overflow-hidden flex justify-center items-center rounded-full cursor-pointer px-8 py-4 w-40 h-12 font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-700 transition-colors
            "
        >
            <span className="relative z-10 flex">
                {letters.map((char, i) => {
                    const center = (letters.length - 1) / 2;
                    const distance = Math.abs(i - center);
                    const curve = 1 - distance / center; // 中央が1、端が0

                    return (
                        <motion.span
                        key={i}
                        className="inline-block"
                        variants={{
                            rest: {
                                y: 0,
                            },
                            hover: {
                                y: [
                                    0,
                                    -6 * curve,
                                    3 * curve,
                                    -3 * curve,
                                    0,
                                ],
                            },
                            leave: {
                                y: [
                                    0,
                                    6 * curve,
                                    -3 * curve,
                                    3 * curve,
                                    0,
                                ],
                            },
                        }}
                        transition={{
                            duration: 0.7,
                            times: [0, 0.35, 0.5, 0.75, 1],
                            ease: "linear",
                            delay: 0.18,
                        }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    )
                })}
            </span>
        </motion.button>
    );
}