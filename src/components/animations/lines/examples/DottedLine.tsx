"use client";

import { motion } from "framer-motion";

export default function DottedLine() {
    return (
        <div className="w-[60%] my-8 overflow-hidden mx-auto">
            <motion.div
                className="w-full h-2"
                style={{
                    backgroundImage: `
                        radial-gradient(circle, #8c8b8b 0.18em, transparent 0.18em)
                    `,
                    backgroundSize: "0.9em 0.6em",
                    backgroundRepeat: "repeat-x",
                }}
                animate={{
                    backgroundPositionX: ["0em", "0.9em"],
                    opacity: [0.6, 1, 0.6],
                }}
                transition={{
                    backgroundPositionX: {
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "linear",
                    },
                    opacity: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            />
        </div>
    );
}
