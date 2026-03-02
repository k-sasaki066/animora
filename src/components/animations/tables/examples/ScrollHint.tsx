"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    scrollRef: React.RefObject<HTMLDivElement | null>;
    showOn: boolean;
};

export default function ScrollHint({ scrollRef, showOn }: Props) {
    const [showHint, setShowHint] = useState(true);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleScroll = () => {
            if (el.scrollLeft > 10 || el.scrollTop > 10) {
                setShowHint(false);
            }
        };

        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, [scrollRef]);

    return (
        <AnimatePresence>
            {showOn && showHint && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: [0, 8, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 0.3 },
                        x: { repeat: Infinity, duration: 1.6 }
                    }}
                    className="absolute w-30 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xs bg-black/50 text-white font-bold py-3 rounded shadow"
                >
                    <span>← swipe →</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}