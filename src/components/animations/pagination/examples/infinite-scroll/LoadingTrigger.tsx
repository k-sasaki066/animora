"use client";

import { motion } from "framer-motion";

type LoadingTriggerProps = {
    show: boolean;
    isLoading: boolean;
    observerRef: React.RefObject<HTMLDivElement | null>;
    reduce?: boolean;
};

export default function LoadingTrigger({
    show,
    isLoading,
    observerRef,
    reduce = false,
}: LoadingTriggerProps) {
    if (!show) return null;

    return (
        <div
            ref={observerRef}
            aria-live="polite"
            aria-busy={isLoading}
            className="h-14 flex items-center justify-center"
        >
            {isLoading ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.3 }}
                    className="text-xs text-gray-400"
                >
                    Loading...
                </motion.div>
            ) : (
                <span className="text-xs text-gray-300">
                    Scroll to load more
                </span>
            )}
        </div>
    );
}