"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { forests } from "./forestData"
import { ForestPaneLeft } from "./ForestPaneLeft"
import { ForestPaneRight } from "./ForestPaneRight"

export default function ForestSlider() {
    const [active, setActive] = useState(0)

    return (
        <div className="inset-0 w-full h-[40svh] min-h-100 flex flex-col">
            <main className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* 左 */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                    <AnimatePresence>
                        <ForestPaneLeft key={active} forest={forests[active]} />
                    </AnimatePresence>
                </div>

                {/* 右 */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-gray-100">
                    <AnimatePresence>
                        <ForestPaneRight key={active} forest={forests[active]} />
                    </AnimatePresence>
                </div>
            </main>

            {/* ナビ */}
            <nav className="flex justify-between items-center gap-4 p-3 sm:p-4 bg-white">
                <button
                    disabled={active === 0}
                    onClick={() => setActive((p) => p - 1)}
                    className="px-4 py-2 sm:px-6 sm:py-2 bg-gray-200 disabled:opacity-50"
                >
                ←
                </button>

                <div className="space-x-2">
                    {forests.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`px-2 ${
                                i === active ? "font-bold text-purple-600" : ""
                            }`}
                        >
                        {i + 1}
                        </button>
                    ))}
                </div>

                <button
                    disabled={active === forests.length - 1}
                    onClick={() => setActive((p) => p + 1)}
                    className="px-4 py-2 sm:px-6 sm:py-2 bg-gray-200 disabled:opacity-50"
                >
                →
                </button>
            </nav>
        </div>
    )
}