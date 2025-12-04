"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { AccordionItem } from "@/data/accordionData";

// Accordionが受け取る型の定義
interface AccordionProps {
    title: string;
    items: AccordionItem[];
    onSelect?: (key: string) => void; // ← 子から親へ通知用の関数
    selectedItem?: string | null;
}

// Accordionは以下のProps(親から子へのデータ)を受け取れますよとTypescriptに教えている
export default function Accordion({ title, items, onSelect, selectedItem }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (key: string) => {
        if (onSelect) onSelect(key); // 親へ通知
    };

    return (
        <div className="border-b border-gray-400 body-color">
            {/* ヘッダー */}
            <button
                className="w-full flex justify-between items-center p-4 text-left text-gray-400"
                onClick={() => setIsOpen(!isOpen)}
                >
                <span className="font-semibold text-lg">{title}</span>
                <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                >
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </motion.span>
            </button>

            {/* コンテンツ */}
            <AnimatePresence>
                {isOpen && (
                <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden w-full text-gray-300"
                >
                    <ul>
                    {items.map((item) => (
                        <li
                        key={item.key}
                        onClick={() => handleClick(item.key)}   // ← クリックで選択
                        className={`p-4 cursor-pointer w-full  nav-anim
                        ${selectedItem === item.key ? "bg-purple-100 text-purple-600 font-semibold" : ""}
                        `}
                        >
                        <span className="font-medium">{item.title}</span>
                        {item.content && (
                            <p className="text-sm text-gray-500">{item.content}</p>
                        )}
                        </li>
                    ))}
                    </ul>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}