import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function ChangeTextButton({
    speed = 0.3,
    color = "#f59e0b",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.button
            className="relative rounded-sm overflow-hidden w-40 h-12 cursor-pointer flex justify-center items-center"
            style={{
                backgroundColor: color,
            }}
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
            variants={{
                rest: {},
                hover: {},
            }}
        >

            {/* ボタンのテキスト */}
            <motion.span
                className="absolute text-white font-semibold tracking-wider"
                variants={{
                    rest: {
                        y: 0,
                        opacity: 1
                    },
                    hover: {
                        y: 20,
                        opacity: 0,
                        transition: {
                            duration: speed
                        }
                    },
                }}
            >
                CHANGE
            </motion.span>

            {/* 新テキスト */}
            <motion.div
                className="flex text-white font-semibold tracking-wider absolute"
                variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                }}
            >
                {"Thanks".split("").map((char, i) => (
                    <motion.span
                        key={i}
                        className="inline-block uppercase"
                        custom={i}
                        variants={{
                            rest: { opacity: 0, y: -20 },
                            hover: (i: number) => ({
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: speed * 0.9,
                                    delay: i * 0.025,
                                    ease: [0.5, -1, 0.5, 2],
                                },
                            }),
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.div>
        </motion.button>
    );
}