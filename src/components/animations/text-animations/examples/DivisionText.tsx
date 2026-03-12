import { motion } from "framer-motion";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";
import { useToggleHover } from "@/hooks/useToggleHover";

const text = "HOME";

export default function DivisionText() {
    const { active, bind } = useToggleHover();
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>({
        ratio: 0.06,
        min: 32,
        max: 72,
    });

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center p-4 bg-[#1c1848]">
            <motion.div
                className="relative inline-block cursor-pointer select-none leading-none"
                style={{ fontSize }}
                initial="rest"
                animate={active ? "hover" : "rest"}
                {...bind}
            >
                {/* 上半分 */}
                <motion.span
                    className="absolute left-0 top-0 w-full overflow-hidden font-bold"
                    style={{ height: "50%" }}
                    variants={{
                        rest: {
                            x: 0,
                            skewX: 0,
                            color: "#f23764"
                        },
                        hover: {
                            x: 4, skewX: 12,
                            color: "#ffffff"
                        },
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1.08, 0.38, 0.98],
                    }}
                >
                    <span className="block leading-none">
                        {text}
                    </span>
                </motion.span>

                {/* 下半分 */}
                <motion.span
                    className="absolute left-0 bottom-0 w-full overflow-hidden font-bold"
                    style={{ height: "50%" }}
                    variants={{
                        rest: {
                            x: 0,
                            skewX: 0,
                            color: "#f23764"
                        },
                        hover: {
                            x: -4,
                            skewX: 12,
                            color: "#ffffff"
                        },
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1.08, 0.38, 0.98],
                    }}
                >
                    <span className="block leading-none -translate-y-1/2">
                        {text}
                    </span>
                </motion.span>

                {/* 中央ライン */}
                <motion.div
                    className="absolute left-[-15%] right-[-15%] top-1/2 -translate-y-1/2 h-1 bg-[#f23764] rounded"
                    variants={{
                        rest: { scaleX: 0 },
                        hover: { scaleX: 1 },
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1.08, 0.38, 0.98],
                    }}
                    style={{ transformOrigin: "center" }}
                />

                {/* ベース文字（透明） */}
                <span className="invisible leading-none">
                    {text}
                </span>
            </motion.div>
        </div>
    );
}