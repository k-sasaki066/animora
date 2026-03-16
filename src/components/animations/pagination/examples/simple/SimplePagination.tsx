import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { SimplePager } from "./SimplePager";

const BASE_WIDTH = 400;

export default function SimplePagination() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.2)
        : 1;

    const items = Array.from({ length: 24 }, (_, i) => `Item ${i + 1}`);
    const itemsPerPage = 4;

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const start = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(start, start + itemsPerPage);

    return (
        <div ref={ref} className="w-full min-h-full flex justify-center items-center p-2">
            <motion.div className="w-full" animate={{ scale }}>
                <div className="w-[85%] h-full flex flex-col justify-center items-center gap-6 mx-auto">
                    {/* 表示 */}
                    <ul
                        className="w-full max-w-65 space-y-2"
                        role="listbox"
                        aria-label="Item list"
                    >
                        {currentItems.map((item) => {
                            const isSelected = selectedItem === item;

                            return (
                                <li key={item}>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedItem(item)}
                                        role="option"
                                        aria-selected={isSelected}
                                        className={`
                                            w-full p-2 rounded text-center
                                            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                                            ${isSelected
                                                ? "bg-blue-500 text-white"
                                                : "bg-gray-100 hover:bg-gray-200"
                                            }
                                        `}
                                    >
                                        {item}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {/* ページネーション */}
                    <SimplePager
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onChange={setCurrentPage}
                    />
                </div>
            </motion.div>
        </div>
    );
}