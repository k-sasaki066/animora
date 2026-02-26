"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaBookmark, FaHeart, FaComment } from "react-icons/fa";
import { useContainerSize } from "@/hooks/useContainerSize";
import { Data, CARD_DATA } from "./cardData";
import { sortByNewest, formatDate, truncateText } from "./cardUtils";

const BASE_WIDTH = 400;
const DOT_COUNT = 3;
const META_HEIGHT = 50;

export default function SlideMetaCard() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.8), 1)
        : 1;

    const [showMetaId, setShowMetaId] = useState<number | null>(null);
    const [cards, setCards] = useState<Data[]>(CARD_DATA);

    const sortedCards = sortByNewest(cards);

    const handleLike = (id: number) => {
        setCards((prev) =>
            prev.map((card) => {
                if (card.id !== id) return card;

                const isLiked = card.likedByMe;

                return {
                    ...card,
                    likedByMe: !isLiked,
                    likes: isLiked
                        ? card.likes - 1
                        : card.likes + 1,
                };
            })
        );
    };

    const metaClassName = "w-1/3 h-full bg-gray-500/80 flex items-center justify-center text-white text-lg relative";

    return (
        <div ref={ref} className="w-full h-full flex flex-col justify-start items-center gap-6 overflow-y-auto no-scrollbar pb-4">
            {sortedCards.map((card) => {
                const isOpen = showMetaId === card.id;
                const { day, month, year } = formatDate(card.created_at);

                return (
                    <motion.div
                        key={card.id}
                        className="relative w-[50%] max-w-120 min-w-58 aspect-square rounded-sm shadow-[0_3px_7px_-3px_rgba(0,0,0,0.3)] group origin-top"
                        animate={{ scale }}
                    >

                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    `url(${card.image})`,
                            }}
                        />

                        {/* Date Badge */}
                        <div className="absolute top-0 left-0 bg-orange-500 text-white px-4 py-3 rounded-br-md text-center z-20">
                            <div className="text-2xl font-bold leading-none drop-shadow-md">
                                {day}
                            </div>
                            <div className="text-xs uppercase">
                                {month}
                            </div>
                            <div className="text-xs">
                                {year}
                            </div>
                        </div>

                        {/* Description Area */}
                        <motion.div
                            className="absolute bottom-0 w-full h-[28%] min-h-16"
                        >
                            {/* Content */}
                            <div className="absolute h-full flex flex-col bg-orange-500 pb-3 px-4 shadow-[2px_-4px_6px_1px_rgba(50,50,50,0.14)] z-10 text-left overflow-hidden">
                                {/* Meta Button */}
                                <button
                                    onClick={() =>
                                        setShowMetaId(isOpen ? null : card.id)
                                    }
                                    className="cursor-pointer w-auto ml-auto p-2"
                                >
                                    <div className="flex gap-1">
                                        {Array.from({ length: DOT_COUNT }).map((_, i) => (
                                            <span
                                                key={i}
                                                className="w-1.5 aspect-square bg-white rounded-full"
                                            />
                                        ))}
                                    </div>
                                </button>

                                <div className="w-full pb-12 overflow-y-auto no-scrollbar text-white">
                                    <h1 className="text-xl font-bold">
                                        <a href="#">{card.title}</a>
                                    </h1>

                                    <p className="text-sm mt-3 h-[3em]">
                                        {truncateText(card.text, 43)}
                                    </p>
                                </div>
                            </div>

                            {/* Meta */}
                            <motion.ul
                                animate={{
                                    y: isOpen ? -META_HEIGHT : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="flex w-full"
                                style={{height: META_HEIGHT}}
                            >
                                <li className={`${metaClassName} pt-4`}>
                                    <FaBookmark />
                                </li>

                                <li className={`${metaClassName}`}>
                                    <button
                                        onClick={() => handleLike(card.id)}
                                        className="relative flex flex-col items-center justify-center cursor-pointer gap-0.5"
                                    >
                                        <span className="text-xs">
                                            {card.likes}
                                        </span>
                                        <motion.div
                                            whileTap={{ scale: 1.3 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className={`transition-colors duration-200 ${ card.likedByMe ? "text-pink-500" : "text-white"}`}
                                        >
                                            <FaHeart/>
                                        </motion.div>
                                    </button>
                                </li>

                                <li className={`${metaClassName} flex-col gap-0.5`}>
                                    <span className="text-xs">
                                        8
                                    </span>
                                    <FaComment />
                                </li>
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
}
