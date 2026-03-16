import { motion } from "framer-motion";

const lines = [
    { x: "-25%", delay: 2 },
    { x: "0%", delay: 0 },
    { x: "25%", delay: 2.5 },
];

export default function StreamlinesBackground() {
    return (
        <div className="relative w-full aspect-video overflow-hidden bg-black">
            {/* lines container */}
            <div className="absolute inset-0 mx-auto w-full">
                {lines.map((line, i) => (
                    <div
                        key={i}
                        className="absolute top-0 left-1/2 h-full w-px bg-white/10"
                        style={{ marginLeft: line.x }}
                    >
                        {/* flowing light */}
                        <motion.div
                            className="absolute w-full h-10 bg-linear-to-b from-transparent via-white to-white"
                            style={{ top: "-40px" }}
                            animate={{
                                y: "calc(100% + 40pc)", // ← 親の下 + 光の高さまで流す
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: [0.4, 0.26, 0, 0.97],
                                delay: line.delay,
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}