import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function TransformShapeButton({
    speed = 0.5,
    color = "#d1d5dc",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative cursor-pointer w-40 h-12 flex justify-center items-center"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
            variants={{
                rest: {
                    borderRadius: "0px",
                    border: "2px solid rgba(0,0,0,0)",
                },
                hover: {
                    borderRadius: "999px",
                    border: `2px solid ${color}`,
                },
            }}
            transition={{
                duration: speed,
                ease: "easeInOut"
            }}
        >
            BUTTON

            {/* 短い下線 */}
            <motion.span
                className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2/3 h-0.5"
                style={{
                    backgroundColor: color,
                }}
                variants={{
                    rest: {
                        width: "40%",
                        opacity: 1,
                    },
                    hover: {
                        width: "100%",
                        opacity: 0,
                    },
                }}
                transition={{
                    duration: speed,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
}