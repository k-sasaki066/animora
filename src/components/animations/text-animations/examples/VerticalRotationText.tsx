import { motion } from "framer-motion";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";
import { useToggleHover } from "@/hooks/useToggleHover";

const text = "ANIMATION";

const getCharWidth = (char: string) => {
    if (char === "I") return "w-[0.4em]";
    if (char === "W" || char === "M") return "w-[1.2em]";
    if (char === " ") return "w-[0.5em]";
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
                            staggerChildren: 0.05,
                        },
                    },
                    rest: {
                        transition: {
                            staggerChildren: 0.05,
                            staggerDirection: -1,
                        },
                    },
                }}
                {...bind}
            >
                {text.split("").map((char, i) => (
                    <div
                        key={i}
                        className={`relative overflow-hidden h-[1em] ${getCharWidth(char)}`}
                    >
                        <motion.div
                            className="flex flex-col font-bold leading-none text-black"
                            variants={{
                                rest: { y: "-1em" },
                                hover: { y: "0em" },
                            }}
                            transition={{
                                duration: 0.1,
                                ease: "easeOut",
                            }}
                        >
                            {/* 上の文字 */}
                            <span className="h-[1em] flex items-center justify-center">
                                {char}
                            </span>

                            {/* 下の文字 */}
                            <span className="h-[1em] flex items-center justify-center">
                                {char}
                            </span>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}