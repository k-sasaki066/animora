import { motion, Transition } from "framer-motion";

export function Invader() {
    const duration = 2;

    const beamAnimate = {
        opacity: [0, 1, 0, 0, 1, 0, 0],
        y: [0, -54, -10, -10, -54, -10, -10],
    };

    const beamTransition: Transition = {
        duration: 2,
        times: [0, 0.25, 0.251, 0.5, 0.75, 0.751, 1],
        repeat: Infinity,
        ease: "linear",
    };

  const beamPositions = [0, 27]; // 左・右

    return (
        <div className="relative w-full h-fit overflow-hidden">
            {/* インベーダー本体 */}
            <motion.div
                className="relative"
                animate={{
                    x: ["0%", "0%", "0%", "59%", "59%", "59%", "0%"],
                }}
                transition={{
                    duration,
                    times: [0, 0.25, 0.251, 0.5, 0.75, 0.751, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* 本体 */}
                <div className="relative mt-1 w-8 h-15 flex items-end gap-1">
                    <div className="w-1.5 h-6.5 bg-black" />
                    <div className="w-3.5 h-5 bg-black" />
                    <div className="w-1.5 h-6.5 bg-black" />
                </div>

                {/* 足 */}
                <div className="absolute bottom-1 w-8 h-2 bg-black" />

                {/* ビーム（左右共通） */}
                {beamPositions.map((left, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-red-500 w-1.25 h-2"
                        style={{
                            left,
                            bottom: "20px"
                        }}
                        animate={beamAnimate}
                        transition={beamTransition}
                    />
                ))}
            </motion.div>
        </div>
    );
}