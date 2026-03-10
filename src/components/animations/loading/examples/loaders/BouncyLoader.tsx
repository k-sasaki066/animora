import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function BouncyLoader({ paused = false }: Props) {
    const boxes = [
        { y: -8, scaleY: 1, scaleX: 1.2 },
        { y: -20, scaleY: 0.8, scaleX: 1 },
        { y: 0,   scaleY: 1.1, scaleX: 0.9 },
    ];

    return (
        <div className="relative flex justify-between items-end w-12 h-6">
            {boxes.map((box, i) => (
                <motion.div
                    key={i}
                    className="w-3 h-3"
                    style={{
                        borderRadius: "25%",
                        backgroundColor: "#9333ea"
                    }}
                    animate={
                        paused
                            ? { y: box.y, scaleY: box.scaleY, scaleX: box.scaleX }
                            : {
                                y: [0, 0, -20, 0],
                                scaleY: [1, 1, 0.6, 1.15, 1],
                                scaleX: [1, 1, 1.3, 0.9, 1],
                            }
                    }
                    transition={
                        paused
                            ? { duration: 0 }
                            : {
                                repeat: Infinity,
                                duration: 1.75,
                                ease: "easeInOut",
                                delay: -1.75 * [0, 0.36, 0.2][i],
                            }
                    }
                />
            ))}
        </div>
    );
}