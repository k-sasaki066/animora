import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function HiddenTextButton() {
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
                className="absolute left-0 w-full h-full bg-pink-300 flex justify-center items-center"
                variants={{
                    initial: { bottom: "-100%" },
                    hovered: { bottom: 0 }
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            >
                <span className="text-white font-semibold">
                    BUTTON
                </span>
            </motion.div>

            {/* テキスト */}
            <motion.div
                className="absolute w-full h-full left-0 border border-pink-300 flex justify-center items-center"
                variants={{
                    initial: { top: 0 },
                    hovered: { top: "-100%" }
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            >
                <span className="text-center text-pink-500">
                    BUTTON
                </span>
            </motion.div>
        </motion.div>
    );
}