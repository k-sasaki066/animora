import { motion } from "framer-motion";

export default function PredatorPart() {

    return (
        <div className="w-full h-full flex justify-center items-center">
            <motion.div
                className="relative w-20 aspect-square"
                animate={{ rotate: [0, 360, 360] }}
                transition={{
                    duration: 2.4,
                    times: [0, 0.4, 1], // 速回転 → 待機
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {[0, 60, 120].map((deg) => (
                    <div
                        key={deg}
                        className="absolute inset-0 grid text-[#424241]"
                        style={{
                            transform: `rotate(${deg}deg)`,
                            background: `
                            conic-gradient(from -153deg at right,
                                transparent,
                                currentColor 1deg 126deg,
                                transparent 127deg
                            ) calc(50% + 5px) 0 / 10px 50%,
                            conic-gradient(from 27deg at left,
                                transparent,
                                currentColor 1deg 126deg,
                                transparent 127deg
                            ) calc(50% - 5px) 100% / 10px 50%,
                            linear-gradient(to top right,
                                currentColor 50%,
                                transparent 0%
                            ) calc(50% + 10px) calc(50% - 10px) / 20px 20px,
                            linear-gradient(to bottom left,
                                currentColor 50%,
                                transparent 0%
                            ) calc(50% - 10px) calc(50% + 10px) / 20px 20px
                            `,
                            backgroundRepeat: "no-repeat",
                            WebkitMask: "radial-gradient(circle 5px, transparent 90%, black)",
                            mask: "radial-gradient(circle 5px, transparent 90%, black)",
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}