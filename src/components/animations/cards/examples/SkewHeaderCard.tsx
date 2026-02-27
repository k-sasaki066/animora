"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { Data, CARD_DATA } from "./cardData";
import { sortByNewest, truncateText } from "./cardUtils";

const BASE_WIDTH = 400;
const MOBILE_BREAKPOINT = 480;

export default function SkewHeaderCard() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.8), 1)
        : 1;

    const [cards, setCards] = useState<Data[]>(CARD_DATA);
    const sortedCards = sortByNewest(cards);

    return (
        <div ref={ref} className="w-full h-full flex flex-col justify-start items-center gap-6 overflow-y-auto no-scrollbar pb-4">
            {sortedCards.map((card) => {

                return (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative mx-auto w-full max-w-140 aspect-video rounded-md bg-[#f0f0ed] shadow-[0_3px_7px_-3px_rgba(0,0,0,0.3)] origin-top"
                        style={{scale}}
                    >
                        {/* Header */}
                        <div className={`relative w-full aspect-16/6 max-[${MOBILE_BREAKPOINT}px]:aspect-16/8 rounded-t-md`}>
                            {/* Skew Background */}
                            <div className="absolute inset-0 overflow-hidden rounded-t-md">
                                <div
                                    className="absolute inset-0 origin-top-left -skew-y-3 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${card.image})`,
                                    }}
                                />
                            </div>

                            {/* Cover Image */}
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                src={card.thumbnail}
                                alt="cover"
                                className={`absolute top-[40%] max-[${MOBILE_BREAKPOINT}px]:top-[45%] left-[5%] w-[24%] max-w-35 aspect-5/6 z-20 rounded shadow-md object-cover`}
                            />

                            {/* Text Details */}
                            <div className={`absolute top-[40%] max-[${MOBILE_BREAKPOINT}px]:top-[30%] left-[35%] pr-4 text-white text-left z-40`}>
                                <h1 className="text-xl font-semibold mb-1.5">
                                    {card.title}
                                </h1>
                                <h2 className="text-sm">
                                    {card.subTitle}
                                </h2>
                            </div>
                        </div>

                        {/* Description */}
                        <div className={`flex px-3 pb-4 text-[#8c8b88] max-[${MOBILE_BREAKPOINT}px]:block`}>
                            {/* Column 1 (Tags) */}
                            <div className="flex-1 text-center pt-[8%]">
                                <Tag label="css" />
                                <Tag label="html" />
                            </div>

                            {/* Column 2 (Text) */}
                            <div className={`flex-2 pl-4 max-[${MOBILE_BREAKPOINT}px]:pl-0 text-left`}>
                                <p className="text-sm leading-relaxed mb-2">
                                    {truncateText(card.text, 43)}
                                </p>

                                <motion.a
                                    href="#"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className="inline-flex items-center gap-1 text-[#039BE5] text-sm"
                                >
                                    read more
                                    <ArrowRight size={14} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

/* ---------- Tag Component ---------- */

function Tag({ label }: { label: string }) {
    return (
        <motion.span
            whileHover={{ backgroundColor: "#dddddd" }}
            transition={{ duration: 0.2 }}
            className="inline-block text-xs mr-1 mb-1 px-3 py-1 rounded-full bg-white cursor-pointer"
        >
            {label}
        </motion.span>
    );
}
