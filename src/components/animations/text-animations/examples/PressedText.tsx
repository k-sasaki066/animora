import { motion } from "framer-motion";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";
import { useContainerSize } from "@/hooks/useContainerSize";

const ease = [0.15, -0.01, 0.58, 1] as const; const duration = 5;

const letterAnim = (x: number, direction: 1 | -1) => ({
    animate: {
        x: [
            direction * x,  // 右に圧縮
            direction * x,  // 右で待機
            -direction * x, // 左に圧縮
            -direction * x, // 左で待機
            direction * x,
        ],
    },
    transition: {
        duration,
        ease,
        repeat: Infinity,
        times: [0, 0.25, 0.5, 0.75, 1],
    },
});

const markerAnim = (travelX: number) =>({
    animate: {
        x: [travelX, travelX, -travelX, -travelX, travelX],
    },
    transition: {
        duration,
        ease,
        repeat: Infinity,
        times: [0, 0.25, 0.5, 0.75, 1],
    },
});

export default function PressedText() {
    const { ref: containerRef, fontSize } = useResponsiveFontSize<HTMLDivElement>();
    const { ref: textRef, width: textW } = useContainerSize<HTMLDivElement>();

    const markerWidth = 32;
    const travelX = textW
        ? (textW - markerWidth) / 2
        : 0;

    return (
        <div ref={containerRef} className="relative w-full flex justify-center items-center">
            {/* Marker */}
            <motion.div
                className="absolute -top-1 left-1/2 -translate-x-1/2 h-1 w-8 bg-black"
                {...markerAnim(travelX)}
            />

            {/* Letters */}
            <div ref={textRef} className="flex font-bold relative z-10" style={{ fontSize }}>
                <h1>P</h1>
                <motion.h1 className="ml-2" {...letterAnim(8,1)}> R </motion.h1>

                <motion.h1 className="ml-2" {...letterAnim(12,1)}> E </motion.h1>

                <motion.h1 className="ml-2" {...letterAnim(14,1)}> S </motion.h1>

                <motion.h1 className="ml-2" {...letterAnim(12,1)}> S </motion.h1>

                <motion.h1 className="ml-2" {...letterAnim(8,1)}> E </motion.h1>

                <h1 className="ml-2">D</h1>
            </div>
        </div>
    );
}