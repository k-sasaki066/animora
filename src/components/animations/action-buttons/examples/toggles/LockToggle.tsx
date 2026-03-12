import { motion } from "framer-motion";
import { useState } from "react";
import { LOCK_SHACKLE, LOCK_BODY } from "@/assets/svg/lockPath";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

type SparkleDef = {
    d: string;
};

const SPARKLES: SparkleDef[] = [
    { d: "M29 20L31 22" },
    { d: "M31.5 15H34.5" },
    { d: "M29 10L31 8" },
];

export default function LockToggle() {
    const [locked, setLocked] = useState<boolean>(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1.3)
        : 1;

    return (
        <div ref={ref} className="w-full h-full flex items-center justify-center">
            <motion.button
                type="button"
                role="switch"
                aria-checked={locked}
                onClick={() => setLocked(!locked)}
                className={`relative flex items-center justify-center w-16 h-16 rounded-full cursor-pointer transition-colors ${
                    locked ? "bg-emerald-400" : "bg-red-400"
                }`}
                animate={{ scale }}
            >
                <motion.svg
                    width="36"
                    height="40"
                    viewBox="0 0 36 40"
                    fill="none"
                    className="block translate-x-1"
                >
                    {/* sparkle */}
                    {SPARKLES.map((sparkle, index) => (
                        <motion.path
                            key={index}
                            d={sparkle.d}
                            stroke="white"
                            strokeWidth={2.5}
                            strokeLinecap="round"
                            strokeDasharray={3}
                            initial={{
                                strokeDashoffset: 15,
                                opacity: 0
                            }}
                            animate={
                                locked
                                    ? {
                                        strokeDashoffset: [15, 12, 9],
                                        opacity: 1,
                                    }
                                    : { opacity: 0 }
                            }
                            transition={{
                                duration: 0.3,
                                delay: 0.2
                            }}
                        />
                    ))}

                    {/* shackle */}
                    <motion.path
                        d={LOCK_SHACKLE.d}
                        stroke="white"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray={36}
                        initial={{ strokeDasharray: 36 }}
                        animate={
                            locked
                            ? {
                                strokeDasharray: 48,
                                y: [0, 1, 0],
                                }
                            : { strokeDasharray: 36 }
                        }
                        transition={{ duration: 0.3 }}
                    />

                    {/* body */}
                    <motion.path
                        d={LOCK_BODY.d}
                        fill="white"
                        initial={{ rotate: 8 }}
                        animate={locked ? { rotate: 0 } : { rotate: 8 }}
                        transition={{ duration: 0.2 }}
                        style={{ transformOrigin: "14px 22px" }}
                    />
                </motion.svg>
            </motion.button>
        </div>
    );
}