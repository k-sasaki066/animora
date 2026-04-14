import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function ClickButton({
    color = "#7DD3FC",
    xRange = 3,
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <div className="relative bg-gray-400 z-5 w-40 h-12 cursor-pointer">
            <motion.div
                className="absolute w-full h-full"
                style={{
                    backgroundColor: color,
                    top: -xRange,
                    left: -xRange,
                }}
                animate={{
                    x: active ? xRange : 0,
                    y: active ? xRange : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
                {...bind}
            >
                {/* テキスト */}
                <span className="absolute inset-0 flex justify-center items-center">
                    BUTTON
                </span>
            </motion.div>
        </div>
    );
}