"use client"

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function LookAroundPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const BASE_EYE_SIZE = 24; // 白目
    const BASE_PUPIL_SIZE = 6; // 黒目
    const BASE_MOVE = 4; // 黒目の移動距離

    const scale = width ? Math.min(width / 228, 1.5) : 1;

    const eyeSize = BASE_EYE_SIZE * scale;
    const pupilSize = BASE_PUPIL_SIZE * scale;
    const move = BASE_MOVE * scale;

    const positions = [
        { x: -move, y: -move },
        { x:  move, y: -move },
        { x:  move, y:  move },
        { x: -move, y:  move },
        { x: -move, y: -move },
    ];

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center bg-black">
            <div className="inline-flex gap-3 rounded-r-full rounded-l-full">
                {[0, 1].map((i) => (
                    <div
                        key={i}
                        className="relative rounded-full bg-white"
                        style={{
                            width: eyeSize,
                            height: eyeSize,
                        }}
                    >
                        <motion.span
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
                            style={{
                                width: pupilSize,
                                height: pupilSize,
                            }}
                            animate={{
                                x: positions.map((p) => p.x),
                                y: positions.map((p) => p.y),
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                times: [0, 0.15, 0.35, 0.55, 0.75, 1],
                                ease: "easeOut",
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}