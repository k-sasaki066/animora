import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function GridBuildupLoader({ paused = false }: Props) {
    const gridOrder = [...Array(9).keys()];
    const animateState = paused ? "hidden" : "visible";
    const totalCells = gridOrder.length;
    const pausedIndex = Math.floor(totalCells / 2);

    return (
        <motion.div
            className="grid grid-cols-3 gap-1 w-12 h-12"
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
                        className="w-3 h-3 bg-[#6f86d6]"
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
                                    duration: 2.4,
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