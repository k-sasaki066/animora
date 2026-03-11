import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function FlipButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative px-8 py-4 rounded-lg w-40 h-12 cursor-pointer"
            animate={{
                rotateX: active ? 180 : 0
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut"
            }}
            style={{
                transformStyle: "preserve-3d",
                perspective: 600
            }}
            {...bind}
        >
            {/* 前面 */}
            <div className="absolute inset-0  bg-purple-600 text-white rounded-lg flex justify-center items-center">
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