"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 420;

const items = ["Buy groceries", "Write blog post", "Check emails", "Read a book"];

export default function StickyNoteList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1)
        : 1;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.ul
                className="w-[50%] min-w-55 p-0 list-none"
                animate={{scale}}
            >
                <AnimatePresence>
                    {items.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{
                                x: 8,
                                backgroundColor: "#afe4c6",
                            }}
                            className="relative border-l-6 border-l-[#1fa67a] border-b-2 border-b-gray-300 bg-[#f3f4f6] mb-2.5 py-2 px-2 font-bold text-[#364153]"
                        >
                            {item}
                        </motion.li>
                    ))}
                </AnimatePresence>
            </motion.ul>
        </div>
    );
}
