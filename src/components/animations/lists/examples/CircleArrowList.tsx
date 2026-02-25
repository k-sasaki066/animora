"use client";

import { motion } from "framer-motion";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 420;

type CourseItem = string;

const items: CourseItem[] = ["React", "Motion", "Tailwind", "Clean UI"];

export default function CircleArrowList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1)
        : 1;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.ul
                className="list-none p-0 space-y-5"
                animate={{ scale }}
            >
                {items.map((item, index) => (
                    <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                    >
                        {/* アイコン */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1, color: "#fcb98a" }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 15,
                                delay: index * 0.1,
                            }}
                            className="text-[#F97316] text-2xl"
                        >
                            <IoIosArrowDroprightCircle />
                        </motion.div>

                        <span className="text-lg">{item}</span>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}
