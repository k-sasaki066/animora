import { motion } from "framer-motion";

export default function ColorDiagonalBackground() {
    const layers = [
        { duration: 3, from: "-25%", to: "25%" },
        { duration: 4, from: "25%", to: "-25%" },
        { duration: 5, from: "-25%", to: "25%" },
    ];

    return (
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
            {/* layer */}
            {layers.map((layer, i) => (
                <motion.div
                    key={i}
                    className="absolute inset-0 -left-1/2 -right-1/2 opacity-50 bg-[linear-gradient(-60deg,#6c3_50%,#09f_50%)]"
                    animate={{ x: [layer.from, layer.to] }}
                    transition={{
                        duration: layer.duration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            ))}

            {/* optional center content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-white/80 backdrop-blur rounded-md px-4 py-2 shadow">
                    <h2 className="font-mono text-[3vw]">
                        Color Diagonals
                    </h2>
                </div>
            </div>
        </div>
    );
}