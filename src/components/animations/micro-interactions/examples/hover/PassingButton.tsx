import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function PassingButton({
    speed = 1,
    color = "#818CF8",
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
            {/* 背景 */}
            <motion.div
                className="absolute top-0 w-full h-full z-0"
                style={{
                    backgroundColor: color,
                }}
                variants={{
                    initial: { left: "-100%" },
                    hover: { left: "100%" }
                }}
                transition={{
                    duration: speed,
                    ease: "easeInOut"
                }}
            />
            {/* テキスト */}
            <span className="absolute inset-0 z-10 flex justify-center items-center text-indigo-800">
                BUTTON
            </span>
        </motion.div>
    );
}