import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function DiagonalSwipeButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative rounded-sm border border-rose-300  overflow-hidden w-40 h-12 cursor-pointer"
            initial="initial"
            animate={active ? "hovered" : "initial"}
            {...bind}
        >
            {/* 斜め背景 */}
            <motion.div
                className="absolute -top-40 h-full bg-rose-400"
                style={{
                    width: "200%",
                    height: "350%",
                    rotate: "45deg",
                    transformOrigin: "left center"
                }}
                variants={{
                    initial: { left: "-150%" },
                    hovered: { left: "-10%" }
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            />
            {/* テキスト */}
            <motion.span
                className="absolute inset-0 z-10 flex justify-center items-center"
                variants={{
                    initial: { color: "#f43f5e" },
                    hovered: { color: "#fff" },
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                }}
            >
                BUTTON
            </motion.span>
        </motion.div>
    );
}