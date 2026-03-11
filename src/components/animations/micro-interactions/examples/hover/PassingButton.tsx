import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function PassingButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative rounded-sm border border-indigo-500 overflow-hidden w-40 h-12 cursor-pointer"
            initial="initial"
            animate={active ? "hover" : "initial"}
            {...bind}
        >
            {/* 背景 */}
            <motion.div
                className="absolute top-0 w-full h-full bg-indigo-400 z-0"
                variants={{
                    initial: { left: "-100%" },
                    hover: { left: "100%" }
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut"
                }}
            />
            {/* テキスト */}
            <span className="absolute inset-0 z-10 flex justify-center items-center text-indigo-600">
                BUTTON
            </span>
        </motion.div>
    );
}