import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function CircleOutButton({
    size = 20,
    speed = 0.3,
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
            animate={active ? "hover" : "initial"}
            {...bind}
        >
            {/* 円エフェクト */}
            <motion.div
                className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: size,
                    height: size,
                    backgroundColor: color,
                }}
                variants={{
                    initial: {
                        scale: 0,
                        opacity: 0
                    },
                    hover: {
                        scale: 10,
                        opacity: 1
                    },
                }}
                transition={{
                    duration: speed,
                    ease: "easeOut",
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
                    duration: speed,
                    ease: "easeInOut"
                }}
            >
                BUTTON
            </motion.span>
        </motion.div>
    );
}