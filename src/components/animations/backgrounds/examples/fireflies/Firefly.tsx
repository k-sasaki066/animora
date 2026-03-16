import { motion } from "framer-motion";

function random(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export default function Firefly() {
    const duration = random(35, 70);
    const flashDuration = random(4, 8);

    const path = Array.from({ length: 12 }).map(() => ({
        x: random(-200, 200),
        y: random(-200, 200),
        scale: random(0.3, 1),
    }));

    return (
        <motion.div
            className="absolute left-1/2 top-1/2 pointer-events-none"
            animate={{
                x: path.map(p => p.x),
                y: path.map(p => p.y),
                scale: path.map(p => p.scale),
            }}
            transition={{
                duration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}
        >
            {/* 暗い本体 */}
            <motion.div
                className="absolute w-1 h-1 rounded-full bg-black/40"
                animate={{ rotate: 360 }}
                transition={{
                duration: random(8, 18),
                repeat: Infinity,
                ease: "linear",
                }}
            />

            {/* 光 */}
            <motion.div
                className="absolute w-1 h-1 rounded-full bg-yellow-300"
                animate={{
                    opacity: [0, 1, 0],
                    boxShadow: [
                        "0 0 0px 0px yellow",
                        "0 0 12px 4px yellow",
                        "0 0 0px 0px yellow",
                    ],
                }}
                transition={{
                    duration: flashDuration,
                    repeat: Infinity,
                    repeatDelay: random(2, 6),
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    );
}