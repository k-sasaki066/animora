import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function PileUpButton() {
    const { active, bind } = useToggleHover();

    const borders = [
        { top: -3, left: -3 },
        { top: 3, left: 3 }
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
                    className="absolute border border-black z-20"
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
                        duration: 0.2,
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