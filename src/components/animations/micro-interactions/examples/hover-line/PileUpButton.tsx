import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function PileUpButton({
    speed = 0.2,
    color = "#000000",
    xRange = 3,
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    const borders = [
        { top: -xRange, left: -xRange },
        { top: xRange, left: xRange }
    ];

    return (
        <motion.button
            className="relative w-40 h-12 cursor-pointer"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            {/* 枠線 */}
            {borders.map((pos, i) => (
                <motion.div
                    key={i}
                    className="absolute border z-20"
                    style={{
                        borderColor: color,
                    }}
                    variants={{
                        rest: {
                            top: pos.top,
                            left: pos.left,
                            width: "100%",
                            height: "100%"
                        },
                        hover: {
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        },
                    }}
                    transition={{
                        duration: speed,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* テキスト */}
            <div className="relative w-full h-full z-10 flex justify-center items-center">
                BUTTON
            </div>
        </motion.button>
    );
}