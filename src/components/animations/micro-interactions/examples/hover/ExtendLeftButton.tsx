import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function ExtendLeftButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative rounded-sm border border-gray-300 overflow-hidden w-40 h-12 cursor-pointer"
            initial="initial"
            animate={active ? "hovered" : "initial"}
            {...bind}
        >
            {/* 背景 */}
            <motion.div
                className="absolute top-0 w-full h-full bg-gray-400"
                variants={{
                    initial: { left: "-100%" },
                    hovered: { left: 0 }
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            />
            {/* テキスト */}
            <motion.span
                className="absolute z-10 inset-0 flex justify-center items-center"
                variants={{
                    initial: { color: "#6a7282" },
                    hovered: { color: "#fff" },
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            >
                BUTTON
            </motion.span>
        </motion.div>
    );
}