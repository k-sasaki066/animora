"use client";

import { motion, AnimatePresence } from "framer-motion";
import ArrowButton from "./ArrowButton";
import useCharacterCard from "./useCharacterCard";

export default function CharacterCard() {
    const {
        ref,
        index,
        isOpen,
        setIsOpen,
        next,
        prev,
        current,
        stats,
        containerClass,
        itemBase,
        itemLayout,
        isMobile,
    } = useCharacterCard();

    return (
        <div ref={ref} className="w-full h-full flex items-start justify-center bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/coc-background.jpg')] bg-cover bg-center overflow-y-auto no-scrollbar p-4">
            <div className="relative w-[70%] max-w-75">

                {/* Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        layout
                        onClick={() => setIsOpen((prev) => !prev)}
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -40, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className={`bg-white rounded-2xl shadow-2xl ${isMobile ? "rounded-sm shadow-sm" : "rounded-2xl shadow-2xl"}`}
                    >
                        {/* Image section */}
                        <div
                            className={`relative w-full aspect-16/11 bg-cover bg-center`}
                            style={{ backgroundImage: `url(${current.bg})` }}
                        >
                            <motion.img
                                key={current.image}
                                src={current.image}
                                alt={current.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: -20 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute left-1/2 -translate-x-1/2 w-full"
                            />
                        </div>

                        {/* Content */}
                        <div className="text-center p-[8%] cursor-pointer">
                            <p className="uppercase text-xs font-bold text-gray-400">
                                Level {current.level}
                            </p>

                            <h2 className="text-2xl font-extrabold text-black leading-none">
                                {current.name}
                            </h2>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.p
                                        key="desc"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-gray-500 text-sm mt-3 overflow-hidden"
                                    >
                                        {current.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Stats */}
                        <div className={`${current.color} text-white ${containerClass}`}>
                            {stats.map((stat, i) => {
                                const borderClass = isMobile
                                    ? i !== stats.length - 1
                                        ? "border-b"
                                        : ""
                                    : i !== stats.length - 1
                                        ? "border-r"
                                        : "";

                                return (
                                    <div
                                        key={stat.label}
                                        className={`${itemBase} ${itemLayout} ${borderClass}`}
                                    >
                                        <div className={`font-bold ${isMobile ? "text-lg" : "text-xl"}`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-xs uppercase">
                                            {stat.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <ArrowButton direction="left" onClick={prev} />
                <ArrowButton direction="right" onClick={next} />
            </div>
        </div>
    );
}
