import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function Hover4CornerButton() {
    const { active, bind } = useToggleHover();

    const lines = [
        {
            className: "absolute top-0 left-0 h-0.5 bg-emerald-600 z-20",
            rest: { width: 0 },
            hover: { width: "100%" },
            duration: 0.4,
        },
        {
            className: "absolute top-0 right-0 w-0.5 bg-emerald-600 z-20",
            rest: { height: 0 },
            hover: { height: "100%" },
            duration: 0.5,
        },
        {
            className: "absolute bottom-0 right-0 h-0.5 bg-emerald-600 z-20",
            rest: { width: 0 },
            hover: { width: "100%" },
            duration: 0.4,
        },
        {
            className: "absolute bottom-0 left-0 w-0.5 bg-emerald-600 z-20",
            rest: { height: 0 },
            hover: { height: "100%" },
            duration: 0.5,
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
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            >
                <motion.span
                    className="z-10"
                    variants={{
                        rest: { color: "#99a1af" },
                        hover: { color: "#00c48d" },
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut"
                    }}
                >
                    BUTTON
                </motion.span>
            </motion.div>
        </motion.button>
    );
}