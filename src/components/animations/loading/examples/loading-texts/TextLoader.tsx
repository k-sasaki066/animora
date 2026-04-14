import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function TextLoader({
    paused = false,
    speed = 0.8,
    size = 30,
    color = "#9810fa",
    yRange = -4,
}: LoaderProps) {
    const text = ["L", "o", "a", "d", "i", "n", "g"];
    const waveY = [0, -4, 0];

    return (
        <div
            className="flex justify-center items-center space-x-1 text-3xl font-bold"
            style={{
                width: size,
                height: size,
                color: color,
                fontSize: size,
            }}
        >
            {text.map((char, index) => {
                const delay = index * 0.1;

                return (
                    <motion.span
                        key={index}
                        initial={{ y: 0 }}
                        animate={
                            paused
                                ? { y: waveY[index % waveY.length] }
                                : { y: [0, yRange, 0] }
                        }
                        transition={
                            paused
                                ? { duration: 0 }
                                : {
                                    duration: speed,
                                    repeat: Infinity,
                                    delay,
                                    ease: "easeInOut",
                                }
                        }
                        className={
                            index === 2 ? color : "text-black"
                        }
                    >
                        {char}
                    </motion.span>
                );
            })}
        </div>
    );
}