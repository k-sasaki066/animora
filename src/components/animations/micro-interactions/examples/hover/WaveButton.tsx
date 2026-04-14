import { motion } from "framer-motion";
import GooeyFilter from "@/components/ui/GooeyFilter";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function WaneButton({
    speed = 0.8,
    color = "#3B82F6",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <>
            <GooeyFilter id="goo" />
            <motion.button
                className="relative font-bold uppercase text-indigo-400 border-2 border-blue-500 w-40 h-12 cursor-pointer flex justify-center items-center"
                style={{ filter: "url(#goo)" }}
                initial="rest"
                animate={active ? "hover" : "rest"}
                {...bind}
            >

                {/* Blob container */}
                <span className="absolute inset-0 -z-10 flex overflow-hidden">
                {[0, 1, 2, 3].map((i) => (
                    <motion.span
                        key={i}
                        className="flex-1 rounded-full"
                        style={{
                            height: "180%",
                            backgroundColor: color,
                        }}
                        variants={{
                            rest: {
                                y: "100%",
                                scale: 1.3,
                                transition: {
                                    duration: speed,
                                    delay: i * 0.1,
                                    ease: "easeOut",
                                },
                            },
                            hover: {
                                y: -8,
                                scale: 1.3,
                                transition: {
                                    duration: speed,
                                    delay: i * 0.08,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    />
                ))}
                </span>

                {/* ボタンテキスト */}
                <motion.span
                    className="z-2 flex justify-center items-center"
                    variants={{
                        rest: { color: color },
                        hover: { color: "#fff" },
                    }}
                >
                    BUTTON
                </motion.span>

                {/* 外側の枠 */}
                <motion.span
                    className="absolute inset-0 border-2 border-gray-300"
                    variants={{
                        rest: {
                            scale: 1,
                            transition: {
                                duration: speed * 0.8,
                                ease: "easeInOut"
                            }
                        },
                        hover: {
                            scale: 0.9,
                            transition: {
                                duration: speed * 0.8,
                                ease: "easeInOut"
                            }
                        },
                    }}
                />
            </motion.button>
        </>
    );
}