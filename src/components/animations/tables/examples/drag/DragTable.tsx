"use client";

import { useState } from "react";
import { Reorder } from "framer-motion";
import { FaGripLines } from "react-icons/fa";
import { users, type User, columns } from "./users"

export default function DragTable() {
    const [draggingId, setDraggingId] = useState<number | null>(null);
    const [items, setItems] = useState<User[]>(users)

    const itemPadding = "p-2";

    return (
        <div className="w-full h-full">
            <div className="w-full h-full overflow-auto no-scrollbar origin-top">
                <div className="w-full border border-gray-300 rounded-sm text-sm md:text-base">
                    {/* ヘッダー */}
                    <div className="grid grid-cols-[40px_1fr_1fr] bg-gray-100 border-b border-gray-200 text-center sticky top-0 z-10">
                        <div className={itemPadding}></div>
                        {columns.map((col) => (
                            <div key={col.key} className={`font-bold ${itemPadding}`}>
                                {col.label}
                            </div>
                        ))}
                    </div>

                    {/* ドラッグ可能な行 */}
                    <Reorder.Group
                        axis="y"
                        values={items}
                        onReorder={setItems}
                        className="flex flex-col"
                    >
                        {items.map((item) => (
                            <Reorder.Item
                                key={item.id}
                                value={item}
                                onDragStart={() => setDraggingId(item.id)}
                                onDragEnd={() => setDraggingId(null)}
                                whileDrag={{
                                    scale: 1.03,
                                    boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                                }}
                                className={`grid grid-cols-[40px_1fr_1fr] border-b border-gray-200 cursor-grab active:cursor-grabbing ${draggingId === item.id ? "bg-blue-100" : "bg-white hover:bg-gray-50"}`}
                            >
                                {/* ドラッグハンドル */}
                                <div className={`flex items-center justify-center ${itemPadding}`}>
                                    <FaGripLines className="text-gray-400" />
                                </div>
                                {columns.map((col) => (
                                    <div key={col.key} className={itemPadding}>
                                        {item[col.key]}
                                    </div>
                                ))}
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>
                </div>
            </div>
        </div>
    );
}