import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function GrowBarsLoader({ paused = false }: Props) {
    const pausedScales = [0.3, 0.5, 0.7, 1];

    return (
        <div
            className="flex items-center justify-between"
            style={{
                width: "35px",
                height: "31.5px",
            }}
        >
            {[ -0.45, -0.3, -0.15, 0 ].map((delay, i) => (
                <motion.div
                    key={i}
                    className="bg-[#ff758c]"
                    style={{
                        width: "3.5px",
                        height: "100%",
                        borderRadius: "2px",
                    }}
                    animate={
                        paused
                            ? { scaleY: pausedScales[i] }
                            : { scaleY: [0.3, 1, 0.3] }
                    }
                    transition={
                        paused
                            ? { duration: 0 }
                            : {
                                duration: 1,
                                ease: "easeInOut",
                                repeat: Infinity,
                                delay: delay,
                            }
                    }
                />
            ))}
        </div>
    );
}