import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function TextLoader({ paused = false }: Props) {
    const text = ["L", "o", "a", "d", "i", "n", "g"];
    const waveY = [0, -4, 0];

    return (
        <div className="flex justify-center items-center space-x-1 text-3xl font-bold w-12 h-12 text-purple-600">
            {text.map((char, index) => {
                const delay = index * 0.1;

                return (
                    <motion.span
                        key={index}
                        initial={{ y: 0 }}
                        animate={
                            paused
                                ? { y: waveY[index % waveY.length] }
                                : { y: [0, -8, 0] }
                        }
                        transition={
                            paused
                                ? { duration: 0 }
                                : {
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay,
                                    ease: "easeInOut",
                                }
                        }
                        className={
                            index === 2 ? "text-purple-500" : "text-black"
                        }
                    >
                        {char}
                    </motion.span>
                );
            })}
        </div>
    );
}