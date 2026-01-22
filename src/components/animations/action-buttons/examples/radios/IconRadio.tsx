"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { FaWalking, FaBicycle, FaCar, FaPlane } from "react-icons/fa";

const BASE_WIDTH = 400;
const options = [
    { id: "walk", label: "Walk", icon: FaWalking },
    { id: "bike", label: "Bike", icon: FaBicycle },
    { id: "drive", label: "Drive", icon: FaCar },
    { id: "fly", label: "Fly", icon: FaPlane },
];

export default function IconRadio() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.35), 1.3)
        : 1;
    const [value, setValue] = useState<string>("");

    return (
        <div ref={ref} className="w-full h-full bg-[#222]">
            <motion.div className="w-full h-full flex justify-center items-center" animate={{scale}}>
                <div
                    className="flex flex-wrap items-center justify-center gap-4"
                    role="radiogroup"
                    aria-label="Icon radio group"
                >
                    {options.map(({ id, label, icon: Icon }) => {
                        const active = value === id;

                        return (
                            <button
                                key={id}
                                type="button"
                                role="radio"
                                aria-checked={active}
                                tabIndex={
                                    active || (value === "" && id === options[0].id)
                                        ? 0
                                        : -1
                                }
                                onPointerDown={(e) => {
                                    e.preventDefault();
                                    setValue(id);
                                    e.currentTarget.focus();
                                }}
                                onKeyDown={(e) => {
                                    const i = options.findIndex(o => o.id === value);

                                    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                                        e.preventDefault();
                                        setValue(options[(i + 1) % options.length].id);
                                    }

                                    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                                        e.preventDefault();
                                        setValue(
                                            options[(i - 1 + options.length) % options.length].id
                                        );
                                    }

                                    if (e.key === " " || e.key === "Enter") {
                                        e.preventDefault();
                                    }
                                }}
                                className="relative h-18 w-18"
                            >
                                <motion.div
                                    className="flex h-full w-full flex-col items-center justify-center rounded-xs border-2 border-[#079ad9] p-1.5"
                                    animate={{
                                        scale: active ? 1.1 : 1,
                                        backgroundColor: active ? "#079ad9" : "#222222",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                >
                                    <Icon
                                        size={48}
                                        className={`${active ? "text-white" : "text-[#079ad9]"}`}
                                    />
                                    <span
                                        className={`
                                            mt-2 text-xs font-semibold tracking-widest uppercase
                                            ${active ? "text-white" : "text-[#079ad9]"}
                                        `}
                                    >
                                        {label}
                                    </span>
                                </motion.div>
                            </button>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}