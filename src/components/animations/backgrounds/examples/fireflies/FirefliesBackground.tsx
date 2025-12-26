"use client";

import Firefly from "./Firefly";

const FIREFLY_COUNT = 8;

export default function FirefliesBackground() {
    return (
        <div className="relative w-full aspect-video overflow-hidden bg-[url('https://i.pinimg.com/originals/44/6e/3b/446e3b79395a287ca32f7977dd83b290.jpg')] bg-cover">
            {Array.from({ length: FIREFLY_COUNT }).map((_, i) => (
                <Firefly key={i} />
            ))}
        </div>
    );
}