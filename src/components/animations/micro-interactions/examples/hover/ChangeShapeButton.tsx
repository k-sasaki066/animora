import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function ChangeShapeButton({
    speed = 0.6,
    color = "#ffc800",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative overflow-hidden w-40 h-12 cursor-pointer"
            initial="initial"
            animate={active ? "hover" : "initial"}
            {...bind}
        >
            {/* 背景 */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                variants={{
                    initial: {
                        backgroundColor: "#FFFF0000",
                        borderRadius: "4px",
                    },
                    hover: {
                        backgroundColor: color,
                        borderRadius: "999px",
                    },
                }}
                transition={{
                    backgroundColor: {
                        duration: speed,
                        ease: "easeInOut",
                    },
                    borderRadius: {
                        duration: speed * 1.5,
                        ease: "easeInOut",
                        delay: 0.3,
                    },
                }}
            />
                {/* テキスト */}
                <span className="absolute inset-0 flex justify-center items-center text-[#30384b]">
                    BUTTON
                </span>
        </motion.div>
    );
}