import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function ColorIntoCenterButton({
    speed = 0.2,
    color = "#52525c",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    const directions = [
        { pos: "top", initial: "-100%" },
        { pos: "right", initial: "-100%" },
        { pos: "bottom", initial: "-100%" },
        { pos: "left", initial: "-100%" },
    ];

    return (
        <motion.div
            className="relative rounded-sm border-2 overflow-hidden w-40 h-12 cursor-pointer"
            whileHover="hovered"
            initial="initial"
            animate={active ? "hovered" : "initial"}
            {...bind}
            variants={{
                initial: {
                    borderColor: "#9f9fa9"
                },
                hovered: {
                    borderColor: color
                },
            }}
            transition={{
                duration: speed,
                ease: "easeInOut"
            }}
        >
            {/* 背景 */}
            {directions.map(({ pos, initial }) => (
                <motion.div
                    key={pos}
                    className="absolute w-full h-full"
                    style={{
                        ...(pos === "top" || pos === "bottom"
                            ? { left: 0 }
                            : { top: 0 }),
                        backgroundColor: color,
                    }}
                    variants={{
                        initial: { [pos]: initial },
                        hovered: { [pos]: 0 },
                    }}
                    transition={{
                        duration: speed,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* テキスト */}
            <motion.span
                className="absolute inset-0 z-10 flex justify-center items-center"
                variants={{
                    initial: { color: color },
                    hovered: { color: "#fff" },
                }}
                transition={{
                    duration: speed * 1.1,
                    ease: "easeInOut"
                }}
            >
                BUTTON
            </motion.span>
        </motion.div>
    );
}