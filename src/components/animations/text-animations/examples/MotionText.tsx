import { motion } from "framer-motion";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";
import { useToggleHover } from "@/hooks/useToggleHover";

const text = "ANIMATION";

const getCharWidth = (char: string) => {
    if (char === "I") return "w-[0.4em]";
    if (char === "W" || char === "M") return "w-[1.2em]";
    return "w-[0.85em]";
};

export default function VerticalRotationText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();
    const { active, bind } = useToggleHover();

    return (
        <div ref={ref} className="w-full">
            <motion.div
                className="justify-center items-center inline-flex cursor-pointer overflow-hidden"
                style={{ fontSize }}
                initial="rest"
                animate={active ? "hover" : "rest"}
                variants={{
                    hover: {
                        transition: {
                            staggerChildren: 0.03,
                        },
                    },
                    rest: {
                        transition: {
                            staggerChildren: 0.03,
                            staggerDirection: 1,
                        },
                    },
                }}
                {...bind}
            >
                {text.split("").map((char, i) => {
                    const isEven = i % 2 === 0;

                    return (
                        <div
                            key={i}
                            className={`relative overflow-hidden h-[1em] ${getCharWidth(char)}`}
                        >
                            {/* 上の文字 */}
                            <motion.span
                                className="absolute inset-0 flex items-center justify-center font-bold"
                                style={{ color: "#111827" }}
                                variants={{
                                    rest: {
                                        y: "-1em",
                                        opacity: 0,
                                        color: "#111827"
                                    },
                                    hover: {
                                        y: "0em",
                                        opacity: 1,
                                        color: isEven ? "#dc2626" : "#2563eb",
                                    },
                                }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                                {char}
                            </motion.span>

                            {/* 中央の文字 */}
                            <motion.span
                                className="absolute inset-0 flex items-center justify-center font-bold"
                                variants={{
                                    rest: {
                                        x: 0,
                                        y: 0,
                                        opacity: 1,
                                    },
                                    hover: {
                                        x: isEven ? "-1em" : 0,
                                        y: isEven ? 0 : "1em",
                                        opacity: 1,
                                    },
                                }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                                {char}
                            </motion.span>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}