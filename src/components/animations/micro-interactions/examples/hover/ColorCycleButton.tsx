import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";
import { adjustColor } from "@/utils/color";

export default function ColorCycleButton({
    speed = 0.3,
    color = "#16A34A",
}: ButtonParams) {
    const { active, bind } = useToggleHover();
    const lightColor = adjustColor(color, 0.35);

    return (
        <motion.div
            className="relative rounded-full border-2 overflow-hidden w-40 h-12 cursor-pointer"
            style={{
                borderColor: color,
            }}
            initial="initial"
            animate={active ? "hover" : "initial"}
            {...bind}
        >
            {/* 背景1 */}
            <motion.div
                className="absolute left-0 w-full h-full z-0"
                style={{
                    backgroundColor: lightColor,
                }}
                variants={{
                    initial: { top: "-100%" },
                    hover: { top: 0 }
                }}
                transition={{
                    duration: speed,
                    ease: "easeInOut",
                }}
            />

            {/* 背景2 */}
            <motion.div
                className="absolute left-0 w-full h-full z-1"
                style={{
                    backgroundColor: color,
                }}
                variants={{
                    initial: { top: "-100%" },
                    hover: { top: 0 },
                }}
                transition={{
                    duration: speed,
                    ease: "easeInOut",
                    delay: 0.2
                }}
            />

            {/* テキスト */}
            <motion.span
                className="absolute inset-0 z-10 flex justify-center items-center"
                variants={{
                    initial: { color: color },
                    hover: { color: "#fff" },
                }}
                transition={{
                    duration: speed * 1.2,
                    ease: "easeInOut"
                }}
            >
                BUTTON
            </motion.span>
        </motion.div>
    );
}