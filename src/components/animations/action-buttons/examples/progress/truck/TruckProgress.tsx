"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Truck } from "./Truck";
import type { TruckState } from "./truck.types";
import { useContainerSize } from "@/hooks/useContainerSize";

// 基準サイズ（px）
const BASE_WIDTH = 350;

export default function TruckProgress() {
    const [state, setState] = useState<TruckState>("idle");
    const [isAnimating, setIsAnimating] = useState(false);

    const { ref: containerRef, width: containerWidth } = useContainerSize<HTMLDivElement>();
    // ボタン幅に応じてscale
    const scale = containerWidth ? Math.min(Math.max(containerWidth / BASE_WIDTH, 0.5), 1.3) : 1;

    // ボタン幅取得
    const BUTTON_HEIGHT = 48;
    const BUTTON_COLLAPSED_HEIGHT = 10;
    const BASE_BUTTON_WIDTH = 176;
    const TRUCK_BASE_WIDTH = 72;

    const truckWidth = TRUCK_BASE_WIDTH * scale;
    const visualButtonWidth = BASE_BUTTON_WIDTH * scale;

    const startX = -(truckWidth - TRUCK_BASE_WIDTH) / 2;

    const clicked = state === "loading" || state === "loaded" || state === "driving";

    const handleClick = async () => {
        if (isAnimating) return;

        if (state === "done") {
            setState("idle");
            return;
        }
        if (state !== "idle") return;

        setIsAnimating(true);
        setState("loading");
        await wait(600);

        setState("loaded");
        await wait(300);

        setState("driving");
        await wait(2600);

        setState("done");
        setIsAnimating(false);
    }

    return (
        <div ref={containerRef} className="w-full h-full flex justify-center items-center">
            <div
                className="relative h-auto flex flex-col items-start"
                style={{
                    width: BASE_BUTTON_WIDTH,
                }}
            >
                {/* Button */}
                <motion.button
                    onClick={handleClick}
                    className="absolute left-0  w-full text-white font-medium"
                    initial={{
                        height: BUTTON_HEIGHT,
                        borderRadius: "4px",
                        backgroundColor: "#1d293d",
                    }}
                    animate={{
                        height: clicked ? BUTTON_COLLAPSED_HEIGHT : BUTTON_HEIGHT,
                        borderRadius: clicked ? "0px" : "4px",
                        backgroundColor: clicked ? "#646B8C" : "#1d293d",
                        scale
                    }}
                    style={{
                        transformOrigin: "top",
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {/* progress */}
                    <motion.div
                        className="absolute top-0 left-0 bottom-0 bg-[#1d293d]"
                        initial={{ width: 0 }}
                        animate={{
                            width:
                                state === "loading"
                                    ? "0%"
                                    : state === "loaded"
                                    ? "0%"
                                    : state === "driving"
                                    ? "100%"
                                    : state === "done"
                                    ? "0%"
                                    : "0%",
                        }}
                        transition={{
                            duration: 2.6,
                            ease: "linear",
                        }}
                    />

                    {/* text */}
                    <motion.span
                        className="absolute inset-0 flex items-center justify-center text-sm"
                        animate={{
                            opacity:
                            clicked ? 0 : 1
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        {state === "done" ? "Order Placed" : "Complete Order"}

                        {state === "done" && (
                            <motion.span
                                className="ml-2 inline-block text-green-400"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
                            >
                                ✓
                            </motion.span>
                        )}
                    </motion.span>
                </motion.button>

                {/* Truck */}
                <motion.div
                    className="absolute top-0 left-0 flex items-end"
                    style={{
                        pointerEvents: state === "done" ? "auto" : "none",
                        y: "-102%",
                    }}
                    initial={{ x: startX, opacity: 1 }}
                    animate={{
                        x:
                            state === "driving"
                            ? [startX, startX + 30, startX + 15, visualButtonWidth - truckWidth]
                            : state === "done"
                            ? visualButtonWidth - truckWidth
                            : startX,
                        opacity: state === "idle" || state === "done" ? 0 : 1,
                        scale,
                    }}
                    transition={
                        state === "driving"
                            ? {
                                duration: 2.1,
                                times: [0, 0.45, 0.65, 1],
                                ease: ["easeOut", "easeInOut", "linear"],
                                delay: 0.5, // 荷物が載って沈むのを待つ
                            }
                            : { duration: 0.3 }
                    }
                >
                    {/* Truck body */}
                    <Truck state={state} scale={scale}/>
                </motion.div>
            </div>
        </div>
    )
}

const wait = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));