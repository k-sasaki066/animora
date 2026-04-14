import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function Parallelogram2Button({
    size = 30,
    color = "#3B82F6",
    rotate = -40,
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.button
            className="relative font-semibold overflow-hidden w-40 h-12 cursor-pointer"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            {/* --- 枠線コンテナ --- */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                variants={{
                    rest: { skewX: rotate },
                    hover: { skewX: 0 },
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                }}
            >
                {/* bottom-right horizontal */}
                <motion.span
                    className="absolute bottom-0 right-0 h-0.5"
                    style={{
                        backgroundColor: color,
                    }}
                    variants={{
                        rest: {
                            width: size,
                            x: 0,
                        },
                        hover: {
                            width: "50%",
                            x: -38,
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.35, // ← skew が戻った後に伸び始める
                    }}
                />

                {/* bottom-right vertical */}
                <motion.span
                    className="absolute bottom-0 right-0 w-0.5"
                    style={{
                        backgroundColor: color,
                    }}
                    variants={{
                        rest: { height: size },
                        hover: { height: "0%" },
                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.45, // ← 横より少し遅れて伸びる
                    }}
                />

                {/* top-left horizontal */}
                <motion.span
                    className="absolute top-0 left-0 h-0.5"
                    style={{
                        backgroundColor: color,
                    }}
                    variants={{
                        rest: { width: size },
                        hover: { width: "0%" },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.35,
                    }}
                />

                {/* top-left vertical */}
                <motion.span
                    className="absolute top-0 left-0 w-0.5"
                    style={{
                        backgroundColor: color,
                    }}
                    variants={{
                        rest: { height: size },
                        hover: { height: "0%" },
                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.45,
                    }}
                />
            </motion.div>

            {/* --- 背景・文字 --- */}
            <div className="absolute inset-1 z-0 flex justify-center items-center">
                <span className="z-10" style={{color: color}}>
                    BUTTON
                </span>
            </div>
        </motion.button>
    );
}