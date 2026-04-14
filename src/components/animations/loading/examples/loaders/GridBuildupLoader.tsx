import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function GridBuildupLoader({
    paused = false,
    speed = 2.4,
    size = 48,
    color = "#6f86d6",
}: LoaderProps) {
    const gridOrder = [...Array(9).keys()];
    const animateState = paused ? "hidden" : "visible";
    const totalCells = gridOrder.length;
    const pausedIndex = Math.floor(totalCells / 2);

    return (
        <motion.div
            className="grid grid-cols-3 gap-1"
            style={{
                width: size,
                height: size,
            }}
            initial="hidden"
            animate={animateState}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.08, // 子を順番に動かす
                        repeat: Infinity,
                        repeatType: "loop",
                    },
                },
            }}
        >
            {gridOrder.map((_, index) => {
                const isActive = paused ? index <= pausedIndex : true;

                return (
                    <motion.div
                        key={index}
                        style={{
                            width: size / 4,
                            height: size / 4 ,
                            backgroundColor: color,
                        }}
                        variants={{
                            hidden: {
                                opacity: isActive ? 1 : 0.2,
                                scale: isActive ? 1 : 0.4
                            },

                            visible: {
                                opacity: [0, 1, 1, 0],
                                scale: [0.4, 1, 1, 0.4],
                                transition: {
                                    times: [0, 0.4, 0.6, 1],
                                    duration: speed,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    delay: (index * 0.1),
                                },
                            },
                        }}
                    />
                );
            })}
        </motion.div>
    );
}