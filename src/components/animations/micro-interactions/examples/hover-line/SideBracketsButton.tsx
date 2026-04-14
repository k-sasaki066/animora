import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function SideBracketsButton({
    speed = 0.25,
    size = 24,
    color = "#FACC15",
    xRange = 10,
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.button
            className="relative w-40 h-12 cursor-pointer"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >

            {/* 左 bracket */}
            <motion.span
                className="absolute left-6 top-1/2 -translate-y-1/2 pb-1"
                style={{
                    color: color,
                    fontSize: size,
                }}
                variants={{
                    rest: { opacity: 0, x: -xRange },
                    hover: { opacity: 1, x: -2 }
                }}
                transition={{ duration: speed }}
            >
                [
            </motion.span>

            {/* ボタンのテキスト */}
            <span className="relative z-10">
                BUTTON
            </span>

            {/* 右 bracket */}
            <motion.span
                className="absolute right-6 top-1/2 -translate-y-1/2 pb-1"
                style={{
                    color: color,
                    fontSize: size,
                }}
                variants={{
                    rest: { opacity: 0, x: xRange },
                    hover: { opacity: 1, x: 2 }
                }}
                transition={{ duration: speed }}
            >
                ]
            </motion.span>
        </motion.button>
    );
}