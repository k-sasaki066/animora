"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import ScrollHint from "../ScrollHint";
import { plans, fields } from "./planData";

const activeBg = "bg-[#a0dfb0]";
const baseBg = "bg-[#f3f4f6]";
const transitionColor = "transition-colors duration-300 ease-out";

export default function PlanTable() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const columnEvents = (i: number) => ({
        onMouseEnter: () => setHoverIndex(i),
        onMouseLeave: () => setHoverIndex(null),
        onClick: () => setHoverIndex(i),
    });

    return (
        <div ref={scrollRef} className={`relative w-60 md:w-127.5 lg:w-165 h-full overflow-auto no-scrollbar ${baseBg}`}>

            {/* scroll hint */}
            <ScrollHint
                scrollRef={scrollRef}
                showOn={true}
            />

            <table className="w-160 md:w-200 h-full text-center whitespace-nowrap border-collapse">
                {/* header */}
                <thead>
                    <tr>
                        {plans.map((plan, i) => (
                            <th
                                key={i}
                                className={`p-2 w-1/4 ${transitionColor} ${hoverIndex === i ? activeBg : baseBg}`}
                                {...columnEvents(i)}
                            >
                                <motion.div
                                    className={`p-6 ${hoverIndex === i ? activeBg : baseBg}`}
                                >
                                    <div className="mb-1 font-semibold text-lg">
                                        {plan.name}
                                    </div>

                                    <div className="flex justify-center items-center gap-1.5">
                                        <div className={`w-8 h-8 flex justify-center items-center rounded-full text-xs ${transitionColor} ${hoverIndex === i ? "bg-white text-[#7fb38c]" : `text-white ${activeBg}`}`}>
                                            月額
                                        </div>
                                        <div className="text-xl font-bold">
                                            {plan.price}
                                            <span className="text-sm font-normal ml-1">
                                                /月
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* body */}
                <tbody>
                    {fields.map((field) => (
                        <tr key={field.key}>
                            {plans.map((plan, i) => (
                                <td
                                    key={i}
                                    className={`p-2 ${transitionColor} ${hoverIndex === i ? activeBg : ""}`}
                                    {...columnEvents(i)}
                                >
                                    <div className="bg-white p-6">
                                        <span className="block text-xs text-gray-500 mb-1">
                                            {field.label}
                                        </span>
                                        <span className="block font-semibold">
                                            {plan[field.key]}
                                        </span>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}

                    {/* button row */}
                    <tr>
                        {plans.map((plan, i) => (
                            <td
                                key={i}
                                className={`p-6 ${transitionColor} ${hoverIndex === i ? activeBg : baseBg}`}
                                {...columnEvents(i)}
                            >
                                <button className="font-semibold flex items-center justify-center gap-2 mx-auto">
                                    お申込み →
                                </button>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}