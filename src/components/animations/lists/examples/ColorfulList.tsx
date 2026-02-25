"use client";

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 420;
const SIZE = 40;

type ListItem = string;

const items: ListItem[] = [
    "Apple",
    "Banana",
    "Orange",
    "Grape",
];

const colors = [
    {
        border: "border-[#FFA79F]",
        bg: "bg-[#FFA79F]",
        hoverBg: "group-hover:bg-[#FFA79F]",
        hoverText: "group-hover:text-[#FFA79F]",
    },
    {
        border: "border-[#fbaf5d]",
        bg: "bg-[#fbaf5d]",
        hoverBg: "group-hover:bg-[#fbaf5d]",
        hoverText: "group-hover:text-[#fbaf5d]",
    },
    {
        border: "border-[#9FCDFF]",
        bg: "bg-[#9FCDFF]",
        hoverBg: "group-hover:bg-[#9FCDFF]",
        hoverText: "group-hover:text-[#9FCDFF]",
    },
    {
        border: "border-[#AFEBB6]",
        bg: "bg-[#AFEBB6]",
        hoverBg: "group-hover:bg-[#AFEBB6]",
        hoverText: "group-hover:text-[#AFEBB6]",
    },
];

export default function ColorfulList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1)
        : 1;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.ul className="w-[60%] min-w-55 p-0 list-none space-y-3" animate={{scale}}>
                {items.map((item, index) => {
                    const color = colors[index % 4];

                    return (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className={`group relative flex items-center  border border-dashed ${color.border} cursor-pointer overflow-hidden`}
                            style={{
                                height: `${SIZE}px`,
                                paddingLeft: `${SIZE}px`
                            }}
                        >
                            {/* Number Circle */}
                            <div
                                className={`absolute left-0 aspect-square flex items-center justify-center text-white font-bold ${color.bg} transition-all ${color.hoverText} group-hover:bg-white duration-400`}
                                style={{
                                    width: `${SIZE}px`
                                }}
                            >
                                {index + 1}
                            </div>

                            <div
                                className={`w-full text-center transition-all ${color.hoverBg} group-hover:text-white duration-400`}
                                style={{
                                    lineHeight: `${SIZE}px`
                                }}
                            >
                                {item}
                            </div>
                        </motion.li>
                    );
                })}
            </motion.ul>
        </div>
    );
}
