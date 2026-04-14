import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function HoverLineButton({
    speed = 0.8,
    color = "#059669",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.button
            className="relative overflow-hidden border-none text-white font-semibold w-40 h-12 cursor-pointer"
            style={{
                backgroundColor: color,
            }}
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            {/* 上線：右→左 に伸びる */}
            <motion.span
                className="absolute top-0 right-0 h-0.5 z-20"
                style={{
                    backgroundColor: color,
                }}
                variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" },
                }}
                transition={{
                    duration: speed,
                    ease: "easeInOut"
                }}
            />

            {/* 下線：左→右 に伸びる */}
            <motion.span
                className="absolute bottom-0 left-0 h-0.5 z-20"
                style={{
                    backgroundColor: color,
                }}
                variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" },
                }}
                transition={{
                    duration: speed,
                    ease: "easeInOut"
                }}
            />

            {/* 背景 & テキスト変化 */}
            <motion.div
                className="absolute inset-0 z-0 flex justify-center items-center"
                variants={{
                    rest: { backgroundColor: color },
                    hover: { backgroundColor: "#ffffff" },
                    }}
                transition={{
                    duration: speed * 0.5,
                    ease: "easeInOut"
                }}
            >
                <motion.span
                    className="relative z-10"
                    variants={{
                        rest: { color: "#ffffff" },
                        hover: { color: color },
                    }}
                    transition={{
                        duration: speed * 0.5,
                        ease: "easeInOut"
                    }}
                >
                    BUTTON
                </motion.span>
            </motion.div>
        </motion.button>
    );
}