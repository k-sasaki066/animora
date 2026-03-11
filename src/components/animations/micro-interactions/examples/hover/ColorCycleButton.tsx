import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function ColorCycleButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative rounded-full border-2 border-green-600 overflow-hidden w-40 h-12 cursor-pointer"
            initial="initial"
            animate={active ? "hover" : "initial"}
            {...bind}
        >
            {/* 背景1 */}
            <motion.div
                className="absolute left-0 w-full h-full bg-green-200 z-0"
                variants={{
                    initial: { top: "-100%" },
                    hover: { top: 0 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            />

            {/* 背景2 */}
            <motion.div
                className="absolute left-0 w-full h-full bg-green-600 z-1"
                variants={{
                    initial: { top: "-100%" },
                    hover: { top: 0 },
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.2
                }}
            />

            {/* テキスト */}
            <motion.span
                className="absolute inset-0 z-10 flex justify-center items-center"
                variants={{
                    initial: { color: "#16a34a" },
                    hover: { color: "#fff" },
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            >
                BUTTON
            </motion.span>
        </motion.div>
    );
}