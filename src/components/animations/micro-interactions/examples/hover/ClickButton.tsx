import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function ClickButton() {
    const { active, bind } = useToggleHover();

    return (
        <div className="relative bg-gray-400 z-5 w-40 h-12 cursor-pointer">
            <motion.div
                className="absolute -top-1 -left-1 bg-sky-300 w-full h-full"
                animate={{
                    x: active ? 3 : 0,
                    y: active ? 3 : 0
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