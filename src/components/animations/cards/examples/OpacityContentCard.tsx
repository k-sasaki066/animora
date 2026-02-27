"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Bookmark, Heart, MessageCircle, ArrowRight } from "lucide-react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { Data, CARD_DATA } from "./cardData";
import { sortByNewest, truncateText, toggleLike  } from "./cardUtils";

const BASE_WIDTH = 400;

export default function OpacityContentCard() {
    const [isOpenId, setIsOpenId] = useState<number | null>(null);
    const [cards, setCards] = useState<Data[]>(CARD_DATA);
    const sortedCards = sortByNewest(cards);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.8), 1)
        : 1;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toISOString().split("T")[0];
    };

    const handleLike = (id: number) => {
        setCards((prev) => toggleLike(prev, id));
    };

    return (
        <div ref={ref} className="w-full h-full flex flex-col justify-start items-center gap-6 overflow-y-auto no-scrollbar pb-4">
            {sortedCards.map((card) => {
                const isOpen = isOpenId === card.id;

                return (
                    <motion.div
                        key={card.id}
                        initial="rest"
                        animate={ isOpen ? "open": "rest" }
                        onClick={() =>
                            setIsOpenId(isOpen ? null : card.id)
                        }
                        className="relative w-[60%] aspect-16/12 max-w-105 min-w-63 rounded-md shadow-[0_3px_7px_-3px_rgba(0,0,0,0.3)] bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${card.image})`,
                            scale
                        }}
                    >
                        {/* Top Details */}
                        <div className="flex justify-between items-start p-4 text-white text-xs">
                            <div>{formatDate(card.created_at)}</div>

                            <ul className="flex gap-3">
                                <MetaIcon icon={<Bookmark size={16} />} count={0} />
                                <MetaIcon
                                    icon={
                                        <Heart
                                            size={16}
                                            className={
                                                card.likedByMe
                                                    ? "text-red-500 fill-red-500"
                                                    : "text-white"
                                            }
                                        />
                                    }
                                    count={card.likes}
                                    onClick={() => handleLike(card.id)}
                                />
                                <MetaIcon icon={<MessageCircle size={16} />} count={3} />
                            </ul>
                        </div>

                        {/* Description */}
                        <motion.div
                            variants={{
                                rest: { height: "54px" },
                                open: { height: "auto" },
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 w-full max-h-full bg-black/40 text-white"
                        >
                            <div className="p-4 text-left">
                                <h1 className="text-lg font-semibold">
                                    <a href="#" className="hover:underline">
                                        {card.title}
                                    </a>
                                </h1>

                                <p className="text-sm mt-2 line-clamp-2">
                                    {truncateText(card.text, 43)}
                                </p>

                                <div className="w-full flex justify-center items-center gap-1 text-white/80 mt-4">
                                    <a href="#" className="text-center text-sm font-bold">
                                        Read more
                                    </a>
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
}

/* ---------- Meta Icon Component ---------- */

function MetaIcon({
    icon,
    count,
    onClick,
}: {
    icon: React.ReactNode;
    count: number;
    onClick?: () => void;
    }) {

    return (
        <li className="relative">
            <motion.button
                type="button"
                onClick={(e) => {
                    e.stopPropagation(); // カードの開閉を防ぐ
                    onClick?.();
                }}
                className="relative cursor-pointer text-white"
            >
                {icon}

                {count > 0 && (
                    <motion.span
                        variants={{
                            rest: { y: 5, opacity: 0 },
                            open: { y: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-1/2 -translate-x-1/2 text-[10px]"
                    >
                        {count}
                    </motion.span>
                )}
            </motion.button>
        </li>
    );
}
