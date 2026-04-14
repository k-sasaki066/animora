import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function FlipButton({
    speed = 0.5,
    color = "#9810fa",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative px-8 py-4 rounded-lg w-40 h-12 cursor-pointer"
            animate={{
                rotateX: active ? 180 : 0
            }}
            transition={{
                duration: speed,
                ease: "easeInOut"
            }}
            style={{
                transformStyle: "preserve-3d",
                perspective: 600
            }}
            {...bind}
        >
            {/* 前面 */}
            <div
                className="absolute inset-0 text-white rounded-lg flex justify-center items-center"
                style={{
                    backgroundColor: color,
                }}
            >
                BUTTON
            </div>

            {/* 背面 */}
            <div
                className="absolute inset-0 bg-indigo-500 text-white rounded-lg flex justify-center items-center"
                style={{
                    backfaceVisibility: "hidden", transform: "rotateX(180deg)"
                }}
            >
                FLIP
            </div>
        </motion.div>
    );
}