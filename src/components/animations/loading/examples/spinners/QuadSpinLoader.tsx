"use client"

import { motion } from "framer-motion";

export default function QuadSpinLoader() {

    return (
        <div className="w-12 h-12 relative grid place-items-center">
            {[0, 1].map((idx) => (
                <motion.div
                    key={idx}
                    className="absolute"
                    style={{
                        background:
                        "radial-gradient(farthest-side,#25b09b 92%,transparent) 50% 0," +
                        "radial-gradient(farthest-side,#25b09b 92%,transparent) 50% 100%," +
                        "radial-gradient(farthest-side,#25b09b 92%,transparent) 100% 50%," +
                        "radial-gradient(farthest-side,#25b09b 92%,transparent) 0 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: idx === 0 ? "8px 8px" : "12px 12px",
                        filter: idx === 0 ? "hue-rotate(45deg)" : "none",
                        width: idx === 0 ? "85%" : "100%",
                        height: idx === 0 ? "85%" : "100%",
                    }}
                    animate={{ rotate: [0, 180] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: idx === 0 ? "linear" : [0.4, 0.4, 0.3, 1],
                    }}
                />
            ))}
        </div>
    );
}