"use client";

import { motion, AnimatePresence } from "framer-motion";

type SuggestListProps = {
    value: string;
    results: string[];
    isLoading: boolean;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    onSelect: (item: string) => void;
    reduce: boolean;
};

export function SuggestList({ value, results, isLoading, activeIndex, setActiveIndex, onSelect, reduce }: SuggestListProps) {
    if (!value.trim()) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={
                    reduce
                        ? { duration: 0 }
                        : {
                            duration: 0.22,
                            ease: [0.22, 1, 0.36, 1],
                        }
                }
                className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden text-black text-sm max-h-42 overflow-y-auto no-scrollbar"
            >
                {isLoading && (
                    <div className="p-3 text-gray-500">Searching...</div>
                )}

                {!isLoading && results.length === 0 && (
                    <div className="p-3 text-gray-400">
                        No results found
                    </div>
                )}

                {!isLoading &&
                    results.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={
                                reduce
                                    ? { duration: 0 }
                                    : {
                                        duration: 0.18,
                                        delay: index * 0.03,
                                    }
                            }
                            className={`px-4 py-2 cursor-pointer transition-colors ${
                                index === activeIndex
                                    ? "bg-gray-200"
                                    : "hover:bg-gray-100"
                            }`}
                            onMouseEnter={() => setActiveIndex(index)}
                            onClick={() => onSelect(item)}
                        >
                            {item}
                        </motion.div>
                    ))}
            </motion.div>
        </AnimatePresence>
    );
}