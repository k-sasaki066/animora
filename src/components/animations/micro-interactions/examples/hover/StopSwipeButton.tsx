import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function StopSwipeButton({
    speed = 0.5,
    color = "#fb923c",
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
            {/* 斜め背景1 */}
            <motion.div
                className="absolute -top-40 h-full"
                style={{
                    width: "200%",
                    height: "200%",
                    rotate: "45deg",
                    transformOrigin: "left center",
                    backgroundColor: color,
                }}
                variants={{
                    initial: { left: "-150%" },
                    hovered: { left: "-38%" }
                }}
                transition={{
                    duration: speed,
                    ease: "easeInOut"
                }}
            />

            {/* テキスト */}
            <motion.span
                className="absolute inset-0 z-10 flex justify-center items-center"
                variants={{
                    initial: { color: color },
                    hovered: { color: "#fff" },
                }}
                transition={{
                    duration: speed * 1.1,
                    ease: "easeInOut"
                }}
            >
                BUTTON
            </motion.span>
        </motion.div>
    );
}