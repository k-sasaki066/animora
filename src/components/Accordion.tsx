"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { AccordionItem } from "@/data/accordionData";

interface AccordionProps {
    title: string;
    items: AccordionItem[];
}

export default function Accordion({ title, items }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

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
                        key={item.title}
                        onClick={() => setSelectedItem(item.title)}   // ← クリックで選択
                        className={`p-4 cursor-pointer w-full  nav-anim
                        ${selectedItem === item.title ? "bg-purple-100 text-purple-600 font-semibold" : ""}
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