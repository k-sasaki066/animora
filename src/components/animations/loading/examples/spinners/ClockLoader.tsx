import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function ClockLoader({ paused = false }: Props) {
    const size = 50;
    const handHeight = size * 0.5;

    return (
        <div
            className="relative rounded-full bg-[#f7b2e1]"
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
            }}
        >
            {/* 時計の針 */}
            <motion.div
                className="absolute w-0.5 left-1/2 top-0 -translate-x-1/2 bg-[#f789d4]"
                style={{
                    height: handHeight,
                    transformOrigin: "50% 100%",
                }}
                animate={
                    paused
                        ? { rotate: 0 }
                        : { rotate: [0, 360] }
                }
                transition={
                    paused
                        ? { duration: 0 }
                        : {
                            repeat: Infinity,
                            duration: 1.2,
                            ease: "linear"
                        }
                }
            />
        </div>
    );
}