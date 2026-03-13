import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

const rays = [
    { rotate: 0, size: "100%_5px" },     // 横
    { rotate: 90, size: "100%_5px" },    // 縦（90度回転）
    { rotate: 45, size: "100%_5px" },    // 45度
    { rotate: -45, size: "100%_5px" },   // -45度
];

export default function SunPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const sunSize = width ? Math.min(width * 0.21, 90) : 48;
    const coreRadius = sunSize * 0.3;
    const rayThickness = sunSize * 0.08;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                className="
                    relative aspect-square rounded-full
                    grid place-items-center
                "
                style={{
                    width: sunSize,
                    background: `radial-gradient(circle ${coreRadius}px, #ffd738 90%, transparent)`,
                }}
                animate={{
                    filter: [
                    "drop-shadow(0 0 1px #ffd738)",
                    "drop-shadow(0 0 20px #ffd738)",
                    ],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                }}
                >
                {/* ===== 外側に膨らむ放射線 ===== */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        scale: [1, 1.3],
                        opacity: [0.6, 1],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                >
                    {rays.map((ray) => (
                        <div
                            key={ray.rotate}
                            className="
                                absolute inset-0 rounded-full
                                mask-[radial-gradient(farthest-side,transparent_60%,black_61%)]
                                bg-[linear-gradient(#ffd738_0_0)]
                                bg-center bg-no-repeat
                            "
                            style={{
                                transform: `rotate(${ray.rotate}deg)`,
                                backgroundSize: `100% ${rayThickness}px`
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}