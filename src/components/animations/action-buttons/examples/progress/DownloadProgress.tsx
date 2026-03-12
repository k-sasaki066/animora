import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

// 基準サイズ（px）
const BASE_WIDTH = 400;

export default function DownloadProgress() {
    const [state, setState] = useState<"idle" | "loading" | "success">("idle");
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    const labels = ["Download", "Downloading", "Open File"];

    const handleClick = () => {
        if (state !== "idle") return;
        setState("loading");

        setTimeout(() => setState("success"), 1500);
        setTimeout(() => setState("idle"), 3500);
    };

    return (
        <div
            ref={ref}
            className="w-full h-full overflow-hidden flex justify-center items-center"
        >
            <motion.div
                style={{ scale }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
                <button
                    onClick={handleClick}
                    className="flex overflow-hidden rounded-lg bg-blue-600 shadow-md active:scale-95 transition"
                >
                    {/* TEXT */}
                    <div className="relative h-15 w-40 overflow-hidden text-white font-medium">
                        <motion.ul
                            className="absolute top-0 left-0 w-full text-center"
                            animate={{
                                y:
                                state === "idle"
                                    ? 0
                                    : state === "loading"
                                    ? "-60px"
                                    : "-120px",
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut"
                            }}
                        >
                            {labels.map((label) => (
                                <li
                                    key={label}
                                    className="h-15 leading-15"
                                >
                                    {label}
                                </li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* ICON */}
                    <div className="relative h-15 w-15 bg-blue-700 flex items-center justify-center">
                        {/* SUCCESS BG */}
                        <motion.div
                            className="absolute inset-0 bg-blue-400 origin-top"
                            animate={{
                                scaleY: state === "idle" ? 0 : state === "loading" ? 0.85 : 1,
                            }}
                            transition={{
                                duration: state === "loading" ? 2 : 0.3,
                                ease: state === "loading" ? [0.4, 0, 0.2, 1] : "easeOut",
                            }}
                        />

                        {/* SVG */}
                        <svg
                            viewBox="0 0 24 24"
                            className="relative z-10 h-8 w-8"
                            fill="none"
                            stroke="white"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {/* ARROW */}
                            <motion.path
                                d="M12 5v10M8 11l4 4 4-4"
                                initial={{ pathLength: 1, opacity: 1 }}
                                animate={{
                                    pathLength: state === "idle" ? 1 : 0,
                                    opacity: state === "idle" ? 1 : 0,
                                }}
                                transition={{
                                    pathLength: { duration: 0.35, ease: "easeInOut" },
                                    opacity: { duration: 0.5 },
                                }}
                            />

                            {/* CHECK */}
                            <motion.path
                                d="M5 13l4 4L19 7"
                                initial={{
                                    pathLength: 0,
                                    opacity: 0
                                }}
                                animate={{
                                    pathLength: state === "success" ? 1 : 0,
                                    opacity: state === "success" ? 1 : 0,
                                }}
                                transition={{
                                    duration: 0.3
                                }}
                            />
                        </svg>
                    </div>
                </button>
            </motion.div>
        </div>
    );
}