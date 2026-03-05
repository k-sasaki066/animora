"use client";

import React from "react";
import type { SalesData } from "./salesData";

interface LegendListProps {
    data: SalesData[];
    total: number;
}

export function LegendList({ data, total }: LegendListProps) {
    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((item) => {
                const itemPercent = ((item.value / total) * 100).toFixed(1);
                return (
                    <div
                        key={item.name}
                        className="flex justify-center items-center space-x-2 gap-2"
                    >
                        {/* カラーアイコン */}
                        <div
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: item.fill }}
                        />
                        {/* 商品名・金額・割合 */}
                        <div className="text-white text-sm">
                            <p>{item.name}</p>
                            <p>
                                ¥{item.value.toLocaleString()} ({itemPercent}%)
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}