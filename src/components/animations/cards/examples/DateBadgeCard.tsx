import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { CARD_DATA } from "./cardData";
import { sortByNewest, formatDate, truncateText, getRelativeTime,} from "./cardUtils";

const BASE_WIDTH = 400;
const CIRCLE_SIZE = 64;
const CIRCLE_OFFSET = CIRCLE_SIZE / 4;

export default function DateBadgeCard() {
    const [openId, setOpenId] = useState<number | null>(null);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.8), 1)
        : 1;

    const sortedCards = useMemo(() => {
        return sortByNewest(CARD_DATA);
    }, []);

    return (
        <div ref={ref} className="w-full h-full flex flex-col justify-start items-center gap-6 overflow-y-auto no-scrollbar pb-4">
            {sortedCards.map((card) => {
                const isOpen = openId === card.id;
                const { day, month } = formatDate(card.created_at);
                const relativeTime = getRelativeTime(card.created_at);

                return (
                    <div
                        key={card.id}
                        style={{
                            paddingTop: CIRCLE_OFFSET,
                            paddingRight: CIRCLE_OFFSET
                        }}
                    >
                        <motion.div
                            initial="rest"
                            animate={{ scale }}
                            onClick={() =>
                                setOpenId(isOpen ? null : card.id)
                            }
                            className="relative w-full max-w-120 min-w-60 aspect-video rounded-md bg-white shadow-[0_3px_7px_-3px_rgba(0,0,0,0.3)] overflow-visible origin-top"
                        >
                            {/* Date Badge */}
                            <div
                                className="absolute z-50 aspect-square rounded-full bg-red-500 text-white flex flex-col items-center justify-center font-bold shadow-md"
                                style={{
                                    width: CIRCLE_SIZE,
                                    top: -CIRCLE_OFFSET,
                                    right: -CIRCLE_OFFSET
                                }}
                            >
                                <div className="text-lg leading-none">
                                    {day}
                                </div>
                                <div className="text-xs uppercase">
                                    {month}
                                </div>
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-2 left-2 z-10 bg-orange-400 text-white text-xs font-bold uppercase px-4 py-1 rounded-sm flex items-center">
                                {card.category}
                            </div>

                            {/* Image Area */}
                            <div className="relative w-full h-full bg-black overflow-hidden rounded-md">

                                {/* Image */}
                                <motion.img
                                    variants={{
                                        rest: { scale: 1, opacity: 1 },
                                        hover: { scale: 1.1, opacity: 0.6 },
                                    }}
                                    initial="rest"
                                    animate={isOpen ? "hover" : "rest"}
                                    transition={{ duration: 0.3 }}
                                    src={card.image}
                                    alt="thumbnail"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Description */}
                            <motion.div
                                className="absolute bottom-0 w-full h-[40%] bg-white px-[4%] py-[2%] rounded-b-md text-left overflow-y-auto no-scrollbar z-50"
                                initial="rest"
                                animate={isOpen ? "hover" : "rest"}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.37, 0.75, 0.61, 1.05],
                                }}
                            >

                                <h1 className="text-xl text-gray-800 font-bold">
                                    <a href="#" className="hover:underline">
                                        {card.title}
                                    </a>
                                </h1>

                                <h2 className="text-orange-600 text-sm font-semibold mb-1">
                                    {card.subTitle}
                                </h2>

                                {/* Text */}
                                <motion.p
                                    className="text-sm text-gray-600 leading-relaxed overflow-hidden"
                                    variants={{
                                        rest: { opacity: 0, height: 0 },
                                        hover: { opacity: 1, height: "auto" },
                                    }}
                                    initial="rest"
                                    animate={isOpen ? "hover" : "rest"}
                                    transition={{ duration: 0.5 }}
                                >
                                    {truncateText(card.text, 50)}
                                </motion.p>

                                {/* Meta */}
                                <div className="mt-2 text-xs text-gray-400 flex gap-4">
                                    <span>🕒 {relativeTime}</span>
                                    <span>
                                        💬
                                        <a href="#" className="pl-1 hover:underline">
                                            20 comments
                                        </a>
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}
