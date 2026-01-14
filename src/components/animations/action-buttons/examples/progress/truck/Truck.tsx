"use client";

import { motion, Variants } from 'framer-motion';
import type { TruckState } from "./truck.types";

const boxVariants: Variants = {
    hidden: {
        opacity: 1,
        scale: 0.5,
        x: -24,
        y: -6,
    },

    loading: {
        opacity: 1,
        scale: [0.9, 1.05, 1],
        x: [-24, 3, 3],
        y: [-6, -6, 0],
        transition: {
            delay: 0.3,
            duration: 0.8,
            ease: "easeOut",
            times: [0, 0.6, 1],
        },
    },

    loaded: {
        opacity: 1,
        scale: 1,
        x: 3,
        y: 0,
    },
};

const truckVariants: Variants = {
    idle: {
        x: -8,
        y: 0,
        scaleY: 1,
    },

    loaded: {
        x: -8,
        y: [0, 1, 0],
        scaleY: [1, 0.96, 1],
        transition: {
            duration: 0.35,
            ease: "easeOut",
            times: [0, 0.6, 1],
        },
    },

    driving: { y: 0, scaleY: 1 }
}

export function Truck({ state, scale }: { state: TruckState; scale?: number }) {
    return (
        <motion.div
            className="relative w-18 h-7 flex items-end"
            variants={truckVariants}
            initial="idle"
            animate={
                state === "loaded"
                ? "loaded"
                : state === "driving"
                ? "driving"
                : "idle"
            }
            style={{
                transformOrigin: "center bottom",
                transform: `rotateX(90deg) scale(${scale ?? 1})`
            }}
        >
            {/* Box (package) */}
            <motion.div
                className="absolute bottom-0 right-14 h-3.75 w-3.75 rounded-[1px] z-1 overflow-hidden bg-[linear-gradient(68deg,#facc15_0%,#facc15_50%,#ca8a04_50.2%,#ca8a04_100%)] bg-size-[250%_100%]"
                variants={boxVariants}
                initial="hidden"
                animate={
                    state === "idle"
                        ? "hidden"
                        : state === "loading"
                            ? "loading"
                            : "loaded"
                }
            >
                {/* 中央テープ */}
                <div className="absolute top-[7.5px] left-0 right-0 h-px bg-white/30" />

                {/* 右フタ */}
                <motion.div
                    className="absolute top-0 bottom-0 left-full w-15 bg-indigo-700"
                    initial={{ x: 0 }}
                    animate={
                        state === "loading"
                            ? { x: -5 }
                            : { x: 0 }
                    }
                    transition={{
                        duration: 0.15,
                        delay: 0.9
                    }}
                />
            </motion.div>

            {/* Back (cargo) */}
            <div className="relative w-12 h-7 rounded-t-sm bg-linear-to-b from-indigo-700 to-indigo-900">
                {/* cargo inner */}
                <div className="absolute right-0 top-0 h-full w-9 rounded-tr-sm bg-indigo-500 z-10" />
            </div>

            {/* Front (cab) */}
            <div
                className="relative -ml-px h-5.5 w-6 bg-linear-to-br from-slate-400 to-slate-500"
                style={{
                    clipPath: "polygon(55% 0, 72% 44%, 100% 58%, 100% 100%, 0 100%, 0 0)",
                }}
            >
                {/* window */}
                <div
                    className="absolute left-1.75 top-0.5 h-2 w-1.75 bg-linear-to-br from-slate-800 to-slate-600"
                    style={{
                        clipPath: "polygon(0 0, 60% 0%, 100% 100%, 0% 100%)",
                    }}
                />
                {/* head light */}
                <div className="absolute right-0 bottom-0.75 h-0.5 w-0.75 bg-yellow-200" />
            </div>

            {/* Wheels */}
            <div className="absolute -bottom-1 left-1.5 flex gap-5.75 -z-10">
                <Wheel />
                <Wheel />
            </div>

            {/* 奥側タイヤ */}
            <div className="absolute -bottom-1 left-4.5 flex gap-6.5 opacity-80">
                <BackWheel />
                <BackWheel />
            </div>
        </motion.div>
    )
}

function Wheel() {
    return (
        <motion.div
            className="relative h-2.5 w-2.5 rounded-full bg-slate-800"
            animate={{ rotate: 360 }}
            transition={{
                repeat: Infinity,
                duration: 0.6,
                ease: "linear",
            }}
        >
            <div className="absolute inset-0.5 rounded-full bg-slate-500" />
            <div className="absolute inset-1 rounded-full bg-white" />
        </motion.div>
    )
}

function BackWheel() {
    return (
        <div className="relative h-2.5 w-2.5 rounded-full bg-slate-700">
            {/* inner ring */}
            <div className="absolute inset-0.5 rounded-full bg-slate-500" />
            {/* center dot */}
            <div className="absolute inset-1 rounded-full bg-slate-300" />
        </div>
    )
}