import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function HeartDashedPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const size = width ? Math.min(width * 0.26, 100) : 60;
    const heartSize = size * 0.5;
    const { active, bind } = useToggleHover();

    return (
        <div ref={ref} className="flex items-center justify-center w-full h-full bg-linear-to-br from-[#ffc46e] to-[#f043bf]">
            <motion.button
                aria-label="いいね"
                className="relative grid place-items-center select-none"
                style={{
                    width: size,
                    height: size,
                }}
                initial="rest"
                animate={active ? "hover" : "rest"}
                {...bind}
            >
                {/* 回転する背景 */}
                <motion.span
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear",
                    }}
                >
                    <motion.span
                        className="absolute inset-0 rounded-full border border-white bg-white box-border"
                        variants={{
                            rest: {
                                scale: 1,
                                borderStyle: "solid",
                                backgroundColor: "rgba(255,255,255,1)",
                            },
                            hover: {
                                scale: 1.2,
                                borderStyle: "dashed",
                                backgroundColor: "rgba(255,255,255,0)",
                            },
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut"
                        }}
                    />
                </motion.span>

                {/* ハート */}
                <motion.span
                    className="relative leading-none text-[#f78198]"
                    style={{
                        fontSize: heartSize,
                    }}
                    variants={{
                        rest: {
                            scaleX: 1,
                            scaleY: 0.8,
                            color: "#f78198",
                        },
                        hover: {
                            scaleX: 1.1,
                            scaleY: 0.9,
                            color: "#ffffff",
                        },
                    }}
                    transition={{
                        duration: 0.35,
                        ease: "easeInOut"
                    }}
                >
                    &hearts;
                </motion.span>
            </motion.button>
        </div>
    );
}