import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function BouncyLoader({
    paused = false,
    speed = 1.75,
    size = 12,
    color = "#9333ea",
}: LoaderProps) {
    const boxes = [
        { y: -8, scaleY: 1, scaleX: 1.2 },
        { y: -20, scaleY: 0.8, scaleX: 1 },
        { y: 0,   scaleY: 1.1, scaleX: 0.9 },
    ];

    return (
        <div
            className="relative flex justify-between items-end"
            style={{
                width: size * 4,
                height: size * 2,
            }}
        >
            {boxes.map((box, i) => (
                <motion.div
                    key={i}
                    style={{
                        width: size,
                        height: size,
                        backgroundColor: color,
                        borderRadius: "25%",
                    }}
                    animate={
                        paused
                            ? { y: box.y, scaleY: box.scaleY, scaleX: box.scaleX }
                            : {
                                y: [0, 0, -size * 1.2, 0],
                                scaleY: [1, 1, 0.6, 1.15, 1],
                                scaleX: [1, 1, 1.3, 0.9, 1],
                            }
                    }
                    transition={
                        paused
                            ? { duration: 0 }
                            : {
                                repeat: Infinity,
                                duration: speed,
                                ease: "easeInOut",
                                delay: -1.75 * [0, 0.36, 0.2][i],
                            }
                    }
                />
            ))}
        </div>
    );
}