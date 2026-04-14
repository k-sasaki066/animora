import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function HoverSurroundButton({
    speed = 0.6,
    size = 24,
    color = "#FB923C",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    const lines = [
        {
            className: "absolute bottom-0 right-0 h-0.5 z-20",
            rest: { width: size },
            hover: { width: "100%" },
            duration: speed * 0.85,
        },
        {
            className: "absolute bottom-0 right-0 w-0.5 z-20",
            rest: { height: size },
            hover: { height: "100%" },
            duration: speed,
        },
        {
            className: "absolute top-0 left-0 h-0.5 z-20",
            rest: { width: size },
            hover: { width: "100%" },
            duration: speed * 0.85,
        },
        {
            className: "absolute top-0 left-0 w-0.5 z-20",
            rest: { height: size },
            hover: { height: "100%" },
            duration: speed,
        },
    ];

    return (
        <motion.button
            className="relative font-semibold w-40 h-12 cursor-pointer"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            {lines.map((line, i) => (
                <motion.span
                    key={i}
                    className={line.className}
                    style={{
                        backgroundColor: color,
                    }}
                    variants={{
                        rest: line.rest,
                        hover: line.hover,
                    }}
                    transition={{
                        duration: line.duration,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* 背景 & テキスト変化 */}
            <motion.div
                className="absolute w-38 h-10 top-1 left-1 z-0 flex justify-center items-center"
                variants={{
                    rest: { backgroundColor: "#e5e7eb" },
                    hover: { backgroundColor: color },
                }}
                transition={{
                    duration: speed * 0.7,
                    ease: "easeInOut"
                }}
            >
                <motion.span
                    className="z-10"
                    variants={{
                        rest: { color: "#99a1af" },
                        hover: { color: "#fff" },
                    }}
                    transition={{
                        duration: speed * 0.7,
                        ease: "easeInOut"
                    }}
                >
                    BUTTON
                </motion.span>
            </motion.div>
        </motion.button>
    );
}