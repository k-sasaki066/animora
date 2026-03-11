import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function SideBracketsButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.button
            className="relative w-40 h-12 cursor-pointer"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >

            {/* 左 bracket */}
            <motion.span
                className="absolute left-6 top-1/2 -translate-y-1/2 text-yellow-400 text-2xl pb-1"
                variants={{
                    rest: { opacity: 0, x: -10 },
                    hover: { opacity: 1, x: -2 }
                }}
                transition={{ duration: 0.25 }}
            >
                [
            </motion.span>

            {/* ボタンのテキスト */}
            <span className="relative z-10">
                BUTTON
            </span>

            {/* 右 bracket */}
            <motion.span
                className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-400 text-2xl pb-1"
                variants={{
                    rest: { opacity: 0, x: 10 },
                    hover: { opacity: 1, x: 2 }
                }}
                transition={{ duration: 0.25 }}
            >
                ]
            </motion.span>
        </motion.button>
    );
}