import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function SmokeTextButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.button
            className="rounded-full bg-black text-white font-semibold relative overflow-hidden w-40 h-12 cursor-pointer flex justify-center items-center"
            variants={{
                rest: {},
                hover: {}
            }}
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            {"SMOKE".split("").map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                        rest: {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: { duration: 0.4 },
                        },
                        hover: {
                            x: [0, 8, -12, 0], // 左右に揺れて飛ぶ
                            y: [0, -6, -12, 0], // 少し浮く
                            opacity: [1, 1, 0, 0, 1],      // 一瞬消える
                            filter: ["blur(0px)", "blur(2px)", "blur(6px)", "blur(10px)", "blur(0px)"],
                            transition: {
                                duration: 1,
                                delay: i * 0.05, // ← 文字ごとにズラす
                                ease: "easeOut",
                            },
                        },
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.button>
    );
}