import { motion } from "framer-motion";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";
import { useToggleHover } from "@/hooks/useToggleHover";

interface SparkTextProps {
    text?: string;
}

const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export default function SparkText({ text = "Spark" }: SparkTextProps) {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();
    const { active, bind } = useToggleHover();

    return (
        <div ref={ref} className="w-full">
            <motion.p
                {...bind}
                className="relative inline-block font-bold uppercase cursor-pointer select-none"
                style={{ perspective: 2000, fontSize }}
                initial="rest"
                animate={active ? "hover" : "rest"}
            >
                {/* line */}
                <motion.span
                    className="absolute top-1/2 -translate-y-1/2 w-full h-px mx-auto origin-left z-0 bg-black"
                    variants={{
                        rest: { scaleX: "0%", opacity: 0 },
                        hover: {
                            scaleX: "100%",
                            opacity: 1,
                            transition: {
                                duration: 0.8,
                                ease: "linear"
                            }
                        },
                    }}
                />
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        className="inline-block mx-1"
                        custom={i}
                        variants={{
                            rest: {
                                opacity: 1,
                                y: 0,
                                x: 0,
                                rotateX: 0,
                                rotateY: 0,
                            },
                            hover: (i: number) => ({
                                opacity: 0,
                                y: random(-100, 100),
                                x: random(-100, 100),
                                z: random(-100, 100),
                                rotateX: random(360, 720),
                                rotateY: random(360, 720),
                                transition: {
                                    duration: 1,
                                    delay: i * 0.1,
                                    ease: "easeOut",
                                },
                            }),
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.p>
        </div>
    );
}