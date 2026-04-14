import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function BouncyTextButton({
    speed = 0.7,
    color = "#155dfc",
    yRange = 3,
}: ButtonParams) {
    const { active, bind } = useToggleHover();
    const label = "bouncy";
    const letters = label.split('');

    return (
        <motion.button
            initial="rest"
            animate={active ? "hover" : "leave"}
            {...bind}
            className="relative overflow-hidden flex justify-center items-center rounded-full cursor-pointer w-40 h-12 font-semi tracking-wide text-white transition-colors"
            style={{
                backgroundColor: color,
            }}
        >
            <span className="relative z-10 flex">
                {letters.map((char, i) => {
                    const center = (letters.length - 1) / 2;
                    const distance = Math.abs(i - center);
                    const curve = center === 0 ? 1 : 1 - distance / center; // 中央が1、端が0

                    return (
                        <motion.span
                            key={i}
                            className="inline-block"
                            variants={{
                                rest: { y: 0 },
                                hover: {
                                    y: [
                                        0,
                                        -yRange * 2 * curve,
                                        yRange * curve,
                                        -yRange * curve,
                                        0,
                                    ],
                                },
                                leave: {
                                    y: [
                                        0,
                                        yRange * 2 * curve,
                                        -yRange * curve,
                                        yRange * curve,
                                        0,
                                    ],
                                },
                            }}
                            transition={{
                                duration: speed,
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