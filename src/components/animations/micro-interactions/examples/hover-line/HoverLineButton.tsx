import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function HoverLineButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.button
            className="relative overflow-hidden border-none bg-emerald-600 text-white font-semibold w-40 h-12 cursor-pointer"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            {/* 上線：右→左 に伸びる */}
            <motion.span
                className="absolute top-0 right-0 h-0.5 bg-emerald-600 z-20"
                variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" },
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                }}
            />

            {/* 下線：左→右 に伸びる */}
            <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-emerald-600 z-20"
                variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" },
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                }}
            />

            {/* 背景 & テキスト変化 */}
            <motion.div
                className="absolute inset-0 z-0 flex justify-center items-center"
                variants={{
                    rest: { backgroundColor: "#00c48d" },
                    hover: { backgroundColor: "#ffffff" },
                    }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            >
                <motion.span
                    className="relative z-10"
                    variants={{
                        rest: { color: "#ffffff" },
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