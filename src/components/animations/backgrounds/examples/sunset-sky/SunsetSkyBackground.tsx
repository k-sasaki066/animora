"use client"

import CloudLayer from "./CloudLayer";

export default function SunsetSkyBackground() {
    return (
        <div className="relative w-full aspect-video overflow-hidden">
            {/* 背景色 */}
            <div className="absolute inset-0 bg-linear-to-b from-[#87c4ef] via-[#beb5b1] to-[#f4aa5f]" />

            {/* 雲 */}
            <CloudLayer layer="Background" count={6} />
            <CloudLayer layer="Foreground" count={3} />

        </div>
    );
}