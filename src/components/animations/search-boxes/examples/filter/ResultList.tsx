"use client";

import { motion } from "framer-motion";
import { COLORS } from "./constants";
import { useRef } from "react";
import type { Product } from "./data";

type Props = {
    products: Product[];
    reduce: boolean;
};

export default function ResultList({ products, reduce }: Props) {
    const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className="col-span-3 flex flex-col h-50"
        >
            <h2 className="text-xl font-bold mb-4 shrink-0">
                結果 ({products.length})
            </h2>

            {products.length === 0 ? (
                <p className="text-center" style={{ color: COLORS.text }}>
                    該当する商品がありません
                </p>
            ) : (
                <div
                    className="flex flex-wrap justify-center items-center gap-6 overflow-y-auto no-scrollbar"
                    role="list"
                >
                    {products.map((p, index) => (
                        <motion.button
                            key={p.id}
                            layout
                            role="button"
                            aria-label={`${p.name} ${p.color} ${p.price}円`}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}
                            tabIndex={0}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={
                                reduce ? { duration: 0 } : { duration: 0.2 }
                            }
                            className="flex justify-between items-center gap-2 w-56 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <div className="overflow-hidden rounded-full">
                                <motion.img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-10 h-10 object-cover"
                                    whileHover={{ scale: 1.2 }}
                                    whileFocus={{ scale: 1.05 }}
                                    transition={
                                        reduce ? { duration: 0 } : { duration: 0.2 }
                                    }
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold">
                                    {p.name}
                                </p>
                                <p className="text-sm" style={{ color: COLORS.text }}>
                                    {p.color} / ¥{p.price}
                                </p>
                            </div>
                        </motion.button>
                    ))}
                </div>
            )}
        </div>
    );
}