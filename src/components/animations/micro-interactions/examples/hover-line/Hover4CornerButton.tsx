import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function Hover4CornerButton({
    speed = 0.4,
    color = "#059669",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    const lines = [
        {
            className: "absolute top-0 left-0 h-0.5 z-20",
            rest: { width: 0 },
            hover: { width: "100%" },
            duration: speed,
        },
        {
            className: "absolute top-0 right-0 w-0.5 z-20",
            rest: { height: 0 },
            hover: { height: "100%" },
            duration: speed * 1.2,
        },
        {
            className: "absolute bottom-0 right-0 h-0.5 z-20",
            rest: { width: 0 },
            hover: { width: "100%" },
            duration: speed,
        },
        {
            className: "absolute bottom-0 left-0 w-0.5 z-20",
            rest: { height: 0 },
            hover: { height: "100%" },
            duration: speed * 1.2,
        },
    ];

    return (
        <motion.button
            className="relative overflow-hidden bg-gray-200 text-white font-semibold w-40 h-12 cursor-pointer"
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
                className="absolute inset-0 z-0 flex justify-center items-center"
                variants={{
                    rest: { backgroundColor: "#e5e7eb" },
                    hover: { backgroundColor: "#ffffff" },
                    }}
                transition={{
                    duration: speed,
                    ease: "easeInOut"
                }}
            >
                <motion.span
                    className="z-10"
                    variants={{
                        rest: { color: "#99a1af" },
                        hover: { color: color },
                    }}
                    transition={{
                        duration: speed,
                        ease: "easeInOut"
                    }}
                >
                    BUTTON
                </motion.span>
            </motion.div>
        </motion.button>
    );
}