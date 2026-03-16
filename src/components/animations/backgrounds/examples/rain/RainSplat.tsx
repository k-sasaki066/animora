import { motion } from "framer-motion";

interface Props {
    left: number;
    delay: number;
    duration: number;
    containerHeight: number;
}

export default function RainSplat({
    left,
    delay,
    duration,
    containerHeight,
}: Props) {
    const splatY = containerHeight * 0.85;

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{
                left: `${left}%`,
                top: splatY,
            }}
            animate={{
                scale: [0, 1, 1.5],
                opacity: [0, 1, 0],
            }}
            transition={{
                duration: duration * 0.3,
                delay: delay + duration * 0.7,
                repeat: Infinity,
                ease: "easeOut",
            }}
        >
            <div className="w-4 h-2.5 border-t-2 border-dotted border-white/50 rounded-full" />
        </motion.div>
    );
}
