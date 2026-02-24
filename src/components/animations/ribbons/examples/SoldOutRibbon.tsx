"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["600", "700"],
});

export default function SoldOutRibbon() {
    return (
        <div className="relative w-full h-full flex justify-center items-center bg-[#f1f1f1]">
            <p className="text-lg">Image</p>
            {/* 三角形リボン */}
            <div
                className="absolute top-0 left-0 w-21 aspect-square bg-red-500 flex items-center justify-center text-white font-bold text-xs"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 0 100%)",
                }}
            >
                <span
                    className={`text-sm font-bold tracking-wider pb-[1.5em] ${montserrat.className}`}
                    style={{
                        transform: "rotate(-45deg)",
                        transformOrigin: "center center",
                    }}
                >
                    SOLD OUT
                </span>
            </div>
        </div>
    );
}
