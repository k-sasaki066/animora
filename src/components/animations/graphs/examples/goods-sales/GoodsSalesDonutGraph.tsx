"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { AnimatePresence, motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { CentralText } from "./CentralText";
import { LegendList } from "./LegendList";
import { data } from "./salesData";

export default function GoodsSalesDonutGraph() {
    const { ref, width, height } = useContainerSize<HTMLDivElement>();

    const total = data.reduce((sum, item) => sum + item.value, 0);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const activeItem = activeIndex !== null ? data[activeIndex] : null;
    const percent = activeItem
        ? ((activeItem.value / total) * 100).toFixed(1)
        : null;

    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (width > 0 && height > 0) {
            setReady(true);
        }
    }, [width, height]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-full max-w-150 bg-zinc-900 p-6 overflow-auto no-scrollbar **:focus:outline-none"
        >
            <h2 className="mb-4 text-lg font-semibold text-white">
                イベントグッズ売上
            </h2>

            <div className="relative w-full aspect-square">
                {ready && (
                    <ResponsiveContainer width={width} aspect={1}>
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius="60%"
                                outerRadius="85%"
                                paddingAngle={4}
                                dataKey="value"
                                startAngle={90}
                                endAngle={-270}
                                onMouseEnter={(_, index?: number) => {
                                    if (index !== undefined) setActiveIndex(index);
                                }}
                                onMouseLeave={() => setActiveIndex(null)}
                                onClick={(_, index?: number) => {
                                    if (index !== undefined) {
                                        setActiveIndex(prev => (prev === index ? null : index));
                                    }
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                )}

                {/* 中央表示 */}
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                        {activeItem ? (
                            <CentralText
                                keyId={activeIndex!}
                                title={activeItem.name}
                                amount={activeItem.value}
                                percent={percent}
                            />
                        ) : (
                            <CentralText
                                keyId="total"
                                title="総売上"
                                amount={total}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* 凡例 */}
            <LegendList data={data} total={total} />
        </motion.div>
    );
}