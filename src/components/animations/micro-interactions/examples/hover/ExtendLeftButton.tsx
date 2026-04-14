import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function ExtendLeftButton({
    speed = 0.4,
    color = "#99a1af",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative rounded-sm border overflow-hidden w-40 h-12 cursor-pointer"
            style={{
                borderColor: color,
                opacity: 0.8,
            }}
            initial="initial"
            animate={active ? "hovered" : "initial"}
            {...bind}
        >
            {/* 背景 */}
            <motion.div
                className="absolute top-0 w-full h-full"
                style={{
                    backgroundColor: color,
                }}
                variants={{
                    initial: { left: "-100%" },
                    hovered: { left: 0 }
                }}
                transition={{
                    duration: speed,
                    ease: "easeInOut"
                }}
            />
            {/* テキスト */}
            <motion.span
                className="absolute z-10 inset-0 flex justify-center items-center"
                variants={{
                    initial: { color: color },
                    hovered: { color: "#fff" },
                }}
                transition={{
                    duration: speed * 0.9,
                    ease: "easeInOut"
                }}
            >
                BUTTON
            </motion.span>
        </motion.div>
    );
}