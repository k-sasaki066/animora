import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function DoubleSwipeButton() {
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
            className="relative rounded-sm border border-green-400  overflow-hidden w-40 h-12 cursor-pointer"
            initial="initial"
            animate={active ? "hovered" : "initial"}
            {...bind}
        >
            {/* 斜め背景 */}
            {swipes.map((bg, i) => (
                <motion.div
                    key={i}
                    className={`absolute ${bg.className} h-full bg-green-400`}
                    style={{
                        width: "200%",
                        height: "350%",
                        rotate: bg.rotate,
                        transformOrigin: "left center",
                    }}
                    variants={{
                        initial: { left: bg.initial },
                        hovered: { left: bg.hover },
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* テキスト */}
            <motion.span
                className="absolute inset-0 z-10 flex justify-center items-center"
                variants={{
                    initial: { color: "#22c55e" },
                    hovered: { color: "#fff" },
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                }}
            >
                BUTTON
            </motion.span>
        </motion.div>
    );
}