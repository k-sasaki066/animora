"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 380;

export default function FoldCheck() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.35), 1.2)
        : 1;

    const [checked, setChecked] = useState<boolean[]>([
        true,
        false,
        false,
        false,
    ]);
    const [loading, setLoading] = useState(false);

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const selectedItems = items.filter((_, i) => checked[i]);

        if (selectedItems.length === 0) {
            alert("最低1つは選択してください");
            return;
        }

        setLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 600));

            const payload = {
                selected: selectedItems,
                count: selectedItems.length,
                timestamp: new Date().toISOString(),
            };

            console.log("送信データ:", payload);

            alert(`送信完了！\n選択数: ${selectedItems.length}`);
        } catch (error) {
            console.error(error);
            alert("送信失敗");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.form
                onSubmit={handleSubmit}
                className="mx-auto p-4 space-y-4"
                animate={{ scale }}
            >
                {items.map((label, index) => {
                    const id = `check-${index}`;
                    const isChecked = checked[index];

                    return (
                        <label key={id} className="flex items-center gap-5 cursor-pointer relative">
                            <input
                                id={id}
                                name="evaluation"
                                value={label}
                                type="checkbox"
                                checked={isChecked}
                                onChange={() =>
                                    setChecked(prev =>
                                        prev.map((v, i) => (i === index ? !v : v))
                                    )
                                }
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer peer"
                            />
                            <div className="relative w-4 h-4 peer-focus-visible:ring-2 peer-focus-visible:ring-teal-400">
                                {/* box */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        scale: isChecked ? 0.6 : 1,
                                        opacity: isChecked ? 0 : 1,
                                    }}
                                    transition={
                                        reduce
                                            ? { duration: 0 }
                                            : {
                                                duration: 0.25,
                                                ease: "easeInOut",
                                            }
                                    }
                                    className="absolute inset-0 border-2 border-gray-200 bg-white"
                                />

                                {/* check */}
                                <AnimatePresence>
                                    {isChecked && (
                                        <motion.span
                                            initial={{
                                                rotate: 0,
                                                height: "1rem",
                                                opacity: 0,
                                            }}
                                            animate={{
                                                rotate: -45,
                                                height: "0.5rem",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                rotate: 6,
                                                y: 3,
                                            }}
                                            transition={
                                                reduce
                                                    ? { duration: 0 }
                                                    : {
                                                        duration: 0.3,
                                                        ease: "easeInOut",
                                                    }
                                            }
                                            className="absolute left-0 top-1 w-4 border-b-2 border-l-2 border-teal-500 origin-center"
                                        />
                                    )}
                                </AnimatePresence>
                            </div>

                            <span className="text-xl uppercase">
                                {label}
                            </span>
                        </label>
                    );
                })}
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 px-6 py-2 bg-teal-500 text-white rounded-lg disabled:opacity-50"
                >
                    {loading ? "Sending..." : "Submit"}
                </button>
            </motion.form>
        </div>
    );
}