// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// interface TypingTextProps {
//   speed?: number; // 基本速度
// }

// const text = "Typing Animation Example";

// export default function TypingText({
//   speed = 80,
// }: TypingTextProps) {
//   const [displayedText, setDisplayedText] = useState("");
//     const [index, setIndex] = useState(0);
    
//     useEffect(() => {
//     if (index >= text.length) return;

//     // 人間っぽいランダムディレイ
//     const randomDelay = speed + Math.random() * 100;

//     const timeout = setTimeout(() => {
//       setDisplayedText((prev) => prev + text[index]);
//       setIndex((prev) => prev + 1);
//     }, randomDelay);

//     return () => clearTimeout(timeout);
//   }, [index, text, speed]);

//   return (
//     <div className="flex items-center text-xl font-mono font-bold lg:text-4xl md:text-3xl sm:text-2xl">
//       <span>{displayedText}</span>

//       {/* カーソル */}
//       <motion.span
//         className="ml-1 inline-block w-[2px] h-[1em] bg-current"
//         animate={{ opacity: [0, 1, 0] }}
//         transition={{ repeat: Infinity, duration: 1 }}
//       />
//     </div>
//   );
// }

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

const text = "Typing Animation Example";

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
            className="flex items-center justify-center font-mono font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
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
