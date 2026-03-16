import { motion } from "framer-motion";

interface Props {
    left: number;
    delay: number;
    duration: number;
    containerHeight: number;
}

export default function RainDrop({
    left,
    delay,
    duration,
    containerHeight,
}: Props) {
    const splatY = containerHeight * 0.6;
    const rainHeight = containerHeight * 0.1;

    return (
        <motion.div
            className="absolute top-0 w-px pointer-events-none"
            style={{
                left: `${left}%`,
                height: rainHeight,
            }}
            animate={{
                y: [-rainHeight, splatY],
                opacity: [1, 1, 0],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.85, 1],
            }}
        >
            <div className="ml-1.75 w-px h-full bg-linear-to-b from-transparent to-white/30" />
        </motion.div>
    );
}