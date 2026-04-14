import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function DoubleSwipeButton({
    speed = 0.5,
    color = "#05df72",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    const swipes = [
        {
            className: "-top-40",
            rotate: "45deg",
            initial: "-150%",
            hover: "-10%",
        },
        {
            className: "top-14",
            rotate: "-45deg",
            initial: "116%",
            hover: "-25%",
        },
    ];

    return (
        <motion.div
            className="relative rounded-sm border overflow-hidden w-40 h-12 cursor-pointer"
            style={{
                borderColor: color,
                opacity: 0.8,
            }}
            initial="initial"
            animate={active ? "hovered" : "initial"}
            {...bind}
        >
            {/* 斜め背景 */}
            {swipes.map((bg, i) => (
                <motion.div
                    key={i}
                    className={`absolute ${bg.className} h-full`}
                    style={{
                        width: "200%",
                        height: "350%",
                        rotate: bg.rotate,
                        transformOrigin: "left center",
                        backgroundColor: color,
                    }}
                    variants={{
                        initial: { left: bg.initial },
                        hovered: { left: bg.hover },
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