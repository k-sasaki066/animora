import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

const containerVariants = {
    typing: {},
    clearing: {},
};

const text = "Typing Animation";
const speed = 80;
const pause = 1200;

export default function TypingText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();
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
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                className="font-bold"
                style={{ fontSize }}
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
        </div>
    );
}
