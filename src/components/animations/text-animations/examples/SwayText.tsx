import { motion, Variants } from "framer-motion";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";
import { useToggleHover } from "@/hooks/useToggleHover";

const text = "HOVER ME!";

const letterVariants: Variants = {
    initial: {
        y: 0,
        x: 0,
        opacity: 1,
    },
    hover: (i: number) => ({
        y: [0, -4, 0],
        x: [0, 8, 0],
        opacity: [1, 0, 1],
        transition: {
        delay: i * 0.04,
        duration: 0.4,
        ease: "easeInOut",
        },
    }),
};

export default function SwayText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();
    const { active, bind } = useToggleHover();

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                className="flex gap-1 justify-center font-bold cursor-pointer"
                style={{ fontSize }}
                initial="initial"
                animate={active ? "hover" : "initial"}
                {...bind}
            >
                {text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        className={`inline-block`}
                        variants={letterVariants}
                        custom={index}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
}