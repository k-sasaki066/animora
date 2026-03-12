import { motion } from "framer-motion";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

export default function ReductionText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                className="font-bold uppercase origin-left"
                style={{ fontSize }}
                initial={{
                    opacity: 0,
                    x: "20vw",
                    scaleX: 1,
                    scaleY: 1,
                    skewX: -60,
                }}
                animate={{
                    opacity: [0, 1, 1],
                    x: ["20vw", "0vw", "0vw"],
                    scaleX: [1, 0.45, 1],
                    scaleY: [1, 1.15, 1],
                    skewX: [-60, 0, 0],
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.165, 0.84, 0.44, 1],
                    times: [0, 0.6, 1],
                    repeat: Infinity,
                    repeatDelay: 3,
                }}
            >
                Reduction Text
            </motion.div>
        </div>
    );
}