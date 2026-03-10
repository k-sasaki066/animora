import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function MarchingDotsLoader({ paused = false }: Props) {
    return (
        <div className="relative w-3 aspect-square">
            {/* 水平移動 */}
            <motion.div
                className="absolute inset-0 rounded-full bg-[#77db9a]"
                style={{
                    boxShadow: "-20px 0 0 #77db9a",
                }}
                animate={
                    paused
                        ? { x: 0 }
                        : { x: [0, 20] }
                }
                transition={
                    paused
                        ? { duration: 0 }
                        : {
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                        }
                }
            />

            {/* 飛び越えるドット */}
            <motion.div
                className="absolute inset-0 rounded-full bg-[#77db9a]"
                transformTemplate={({ rotate }) =>
                    `rotate(${rotate}) translateX(20px)`
                }
                animate={
                    paused
                        ? { rotate: -45 }
                        : { rotate: [0, -180] }
                }
                transition={
                    paused
                        ? { duration: 0 }
                        : {
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                        }
                }
            />
        </div>
    );
}