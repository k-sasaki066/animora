import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    s /= 100;
    l /= 100;

    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    return [
        Math.round(255 * f(0)),
        Math.round(255 * f(8)),
        Math.round(255 * f(4)),
    ];
}

export default function LetterFillButton({
    speed = 0.2,
    color = "#1e3a8a",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="flex items-center justify-center w-40 h-12 cursor-pointer"
            initial="initial"
            animate={active ? "hovered" : "initial"}
            {...bind}
            variants={{
                hovered: {
                    transition: {
                    staggerChildren: 0.04,
                    },
                },
            }}
        >
            {"BUTTON".split("").map((char, i) => {
                const hue = ((i + 200) * 10) % 360;
                const rgb = hslToRgb(hue, 80, 70);

                return (
                    <motion.span
                        key={i}
                        className="w-[2em] h-[2em] grid place-content-center text-sm font-bold"
                        variants={{
                            initial: {
                                backgroundColor: color,
                                color: "#ffffff",
                            },
                            hovered: {
                                backgroundColor: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`,
                                color: "#ffffff",
                            },
                        }}
                        transition={{ duration: speed }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </motion.div>
    );
}