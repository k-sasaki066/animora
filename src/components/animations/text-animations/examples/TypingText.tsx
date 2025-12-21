"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
    speed?: number;
    pause?: number;
}

const containerVariants = {
    typing: {},
    clearing: {},
};

const text = "Typing Animation";

export default function TypingText({
    speed = 80,
    pause = 1200,
}: TypingTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [mode, setMode] = useState<"typing" | "clearing">("typing");

    /* タイピング処理 */
    useEffect(() => {
        if (mode !== "typing") return;
        if (index >= text.length) {
            const timeout = setTimeout(() => setMode("clearing"), pause);
            return () => clearTimeout(timeout);
        }

        const delay = speed + Math.random() * 100;
        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text[index]);
            setIndex((prev) => prev + 1);
        }, delay);

        return () => clearTimeout(timeout);
    }, [index, mode, text, speed, pause]);

    /* 消去処理 */
    useEffect(() => {
        if (mode !== "clearing") return;
        if (displayedText.length === 0) {
            setIndex(0);
            setMode("typing");
            return;
        }
        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
        }, speed / 2);

        return () => clearTimeout(timeout);
    }, [displayedText, mode, speed]);

    return (
        <motion.div
            className="flex items-center justify-center font-mono font-bold text-[3vw]"
            variants={containerVariants}
            animate={mode}
        >
            <span>{displayedText}</span>

            {/* カーソル */}
            <motion.span
                className="ml-1 inline-block w-0.5 h-[1em] bg-current"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
            />
        </motion.div>
    );
}
