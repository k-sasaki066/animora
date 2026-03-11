import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function ArrowExtendButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative rounded-full overflow-hidden w-40 h-12 cursor-pointer flex justify-center items-center"
            initial="initial"
            animate={active ? "hovered" : "initial"}
            {...bind}
        >
            {/* 背景丸 */}
            <motion.div
                className="absolute top-0 w-full h-full bg-yellow-400 z-0 rounded-full"
                variants={{
                    initial: { left: "-72%" },
                    hovered: { left: 0 }
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            />

            {/* 矢印 + テキスト */}
            <div className="relative z-10 flex items-center space-x-8 px-4 py-3 w-full h-full">
                {/* 矢印を左 */}
                <motion.div
                    className="w-2 h-2 border-r-2 border-b-2 border-black -rotate-45"
                />
                <span className="font-semibold">
                    BUTTON
                </span>
            </div>
        </motion.div>
    );
}