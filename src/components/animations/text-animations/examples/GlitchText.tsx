import { motion } from "framer-motion";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";
import { useToggleHover } from "@/hooks/useToggleHover";

const text = "HOVER ME!";

export default function GlitchText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            ref={ref}
            className="w-full flex justify-center gap-1 font-bold cursor-pointer"
            style={{ fontSize }}
        >
            {text.split("").map((char, index) => (
                <motion.span
                    {...bind}
                    key={index}
                    className="relative"
                    animate={
                        active
                        ? {
                            x: [0, -1, 1, -1, 1, 0],
                            y: [0, 1, -1, 1, -1, 0],
                            rotate: [0, -1, 1, 0, 1, -0.5],
                            textShadow: [
                                "-1px -1px 0 deeppink, 1px 1px 0 cyan",
                                "1px 2px 0 deeppink, -1px -1px 0 cyan",
                                "-1px -1px 0 deeppink, 1px 1px 0 cyan",
                            ],
                            }
                        : { x: 0, y: 0, rotate: 0, textShadow: "none" }
                    }
                    transition={{
                        duration: 0.8,
                        ease: "linear",
                        repeat: active ? Infinity : 0,
                        delay: index * 0.03,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}