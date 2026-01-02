"use client";

import { motion } from "framer-motion";
import GooeyFilter from "@/components/ui/GooeyFilter";

export default function WaneButton() {

    return (
        <>
            <GooeyFilter id="goo" />
            <motion.button
                className="relative px-8 py-4 font-bold uppercase text-indigo-400 border-2 border-blue-500 w-40 h-12 cursor-pointer flex justify-center items-center"
                style={{ filter: "url(#goo)" }}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >

                {/* Blob container */}
                <span className="absolute inset-0 -z-10 flex overflow-hidden">
                {[0, 1, 2, 3].map((i) => (
                    <motion.span
                        key={i}
                        className="flex-1 bg-blue-500 rounded-full"
                        style={{ height: "180%" }}
                        variants={{
                            rest: {
                                y: "100%",
                                scale: 1.3,
                                transition: {
                                    duration: 0.8,
                                    delay: i * 0.1,
                                    ease: "easeOut",
                                },
                            },
                            hover: {
                                y: -8,
                                scale: 1.3,
                                transition: {
                                    duration: 0.8,
                                    delay: i * 0.08,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    />
                ))}
                </span>

                {/* ボタンテキスト */}
                <motion.span
                    className="z-2 flex justify-center items-center"
                    variants={{
                        rest: { color: "#3B82F6" },
                        hover: { color: "#fff" },
                    }}
                >
                    Button
                </motion.span>

                {/* 外側の枠 */}
                <motion.span
                    className="absolute inset-0 border-2 border-gray-300"
                    variants={{
                        rest: {
                            scale: 1,
                            transition: {
                                duration: 0.5, ease: "easeInOut"
                            }
                        },
                        hover: {
                            scale: 0.9,
                            transition: {
                                duration: 0.5,
                                ease: "easeInOut"
                            }
                        },
                    }}
                />
            </motion.button>
        </>
    );
}