import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function HiddenTextButton({
    speed = 0.4,
    color = "#fda5d5",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative overflow-hidden w-40 h-12 cursor-pointer"
            initial="initial"
            animate={active ? "hovered" : "initial"}
            {...bind}
        >
            {/* 背景 */}
            <motion.div
                className="absolute left-0 w-full h-full flex justify-center items-center"
                style={{
                    backgroundColor: color,
                }}
                variants={{
                    initial: { bottom: "-100%" },
                    hovered: { bottom: 0 }
                }}
                transition={{
                    duration: speed,
                    ease: "easeInOut"
                }}
            >
                <span className="text-white font-semibold">
                    BUTTON
                </span>
            </motion.div>

            {/* テキスト */}
            <motion.div
                className="absolute w-full h-full left-0 border flex justify-center items-center"
                style={{
                    borderColor: color,
                }}
                variants={{
                    initial: { top: 0 },
                    hovered: { top: "-100%" }
                }}
                transition={{
                    duration: speed,
                    ease: "easeInOut"
                }}
            >
                <span
                    className="text-center"
                    style={{
                        color: color,
                    }}
                >
                    BUTTON
                </span>
            </motion.div>
        </motion.div>
    );
}