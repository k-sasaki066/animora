"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaArrowRight } from "react-icons/fa";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

const cards = [
    {
        title: "North",
        description: "a lonely trip.",
        image:
            "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?auto=format&fit=crop&w=1200&q=80",
        color: "bg-[#ea580c]",
    },
    {
        title: "Vauxhall",
        description: "a lonely trip.",
        image:
            "https://images.unsplash.com/photo-1528785198459-ec50485704c7?auto=format&fit=crop&w=1200&q=80",
        color: "bg-[#432dd7]",
    },
];

export default function TicketCard() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.8), 1)
        : 1;
    const isVertical = width <= 480

    return (
        <div ref={ref} className="h-full w-full bg-[#E6E5E1] flex flex-col items-center justify-start gap-2 p-2 overflow-y-auto no-scrollbar">
            {cards.map((card, index) => (
                <Card key={index} {...card} isVertical={isVertical} />
            ))}
        </div>
    );
}

function Card({ title, description, image, color, isVertical }: any) {
    const [active, setActive] = useState(false);

    return (
        <motion.div
            initial={false}
            animate={active ? "hover" : "rest"}
            onHoverStart={() => setActive(true)}
            onHoverEnd={() => setActive(false)}
            onClick={() => setActive((prev) => !prev)}
            className={`relative w-[90%] max-w-125 group shrink-0 overflow-hidden bg-white flex ${isVertical ? "flex flex-col aspect-5/4" : "flex aspect-5/2"}`}
        >

            {/* Image */}
            <div className={`relative ${isVertical ? "w-full h-[70%]" : "w-[80%] h-full"}`}>
                <motion.div
                    variants={{
                        rest: { filter: "grayscale(100%)" },
                        hover: { filter: "grayscale(0%)" },
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full bg-cover bg-center z-10"
                    style={{ backgroundImage: `url(${image})` }}
                />

                {/* Title */}
                <div className="absolute bottom-0 right-1 flex items-center">
                    <h2 className={`font-bold text-white z-20 pointer-events-none ${isVertical ? "text-3xl" : "text-[60px]"}`}>
                        {title}
                    </h2>

                    {/* Arrow */}
                    <motion.div
                        variants={{
                            rest: { scale: 0.5, opacity: 0 },
                            hover: { scale: 1, opacity: 1, },
                        }}
                        transition={{ duration: 0.3 }}
                        className={`pt-1 text-white/75 z-30 ${isVertical ? "w-8 h-8" : "w-10 h-10"}`}
                    >
                        <FaArrowRight className="w-full h-full"/>
                    </motion.div>
                </div>
            </div>

            <div className={`relative ${isVertical ? "w-full h-[30%]" : "flex-1 h-full"}`}>
                {/* Vertical text */}
                <motion.p
                    initial={{ color: "rgba(75,85,99,0.7)" }}
                    variants={{ hover: { color: "#fff" } }}
                    className={`absolute top-[5%] text-xs tracking-widest z-30 ${isVertical ? "right-[10%] text-center" : "left-[12%]"}`}
                    style={{ writingMode: isVertical ? "horizontal-tb" : "vertical-rl" }}
                >
                    {description}
                </motion.p>

                {/* Expanding Button */}
                <motion.button
                    variants={{
                        rest: { scale: 1 },
                        hover: { scale: 16.5 },
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute bottom-[5%] right-[5%] aspect-square rounded-full ${color} mix-blend-hard-light z-20 ${isVertical ? "w-6" : "w-7.5"}`}
                />
            </div>

            {/* Left dotted strip */}
            <div className="absolute h-full left-[6%] top-0 bottom-0 flex flex-col justify-start py-4 gap-1.5 z-20">
                {Array.from({ length: 23 }).map((_, i) => (
                    <div key={i} className="w-0.5 aspect-square bg-[#E6E5E1] rounded-full" />
                ))}
            </div>

            {/* Social icons */}
            <div className="absolute left-[8%] top-0 h-16 w-45 flex items-center justify-around z-30">
                {[FaFacebookF, FaTwitter, FaInstagram, FaGithub].map((Icon, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hover: {
                                opacity: 1,
                                scale: 1,
                                transition: { delay: 0.1 * (4 - i) },
                            },
                        }}
                        initial={{ opacity: 0, scale: 0.1 }}
                    >
                        <Icon className="text-white w-5 h-5" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
