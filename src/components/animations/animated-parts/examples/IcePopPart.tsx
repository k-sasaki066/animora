"use client"

import { useEffect, useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function IcePopPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const [loopKey, setLoopKey] = useState(0);
    const [visibleBites, setVisibleBites] = useState(0);

    const ICE_WIDTH = 36;
    const ICE_HEIGHT = 60;
    const iceWidth = width ? Math.min(width * 0.16, 90): 36;
    const iceHeight = width ? Math.min(width * 0.25, 120): 60;
    const barHeight = Math.min(iceHeight * 0.9, 108);
    const barWidth = Math.min(barHeight * 0.14, 15);

    const bites = [
        { x: 0.5,  y: 0.07, size: 0.35 },
        { x: 0.7,  y: 0.17, size: 0.42 },
        { x: 0.35, y: 0.37, size: 0.5 },
        { x: 0.8,  y: 0.47, size: 0.55 },
        { x: 0.08,  y: 0.8, size: 0.45 },
        { x: 0.55, y: 0.8,  size: 0.6 },
    ];

    const biteInterval = 0.8;
    const waitBeforeEat = 1.2;
    const totalTime = bites.length * biteInterval + 1.2;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoopKey((k) => k + 1);
        }, totalTime * 1200);

        return () => clearTimeout(timer);
    }, [loopKey]);

    useEffect(() => {
        setVisibleBites(0);

        const timers = bites.map((_, i) =>
            setTimeout(() => {
                setVisibleBites((v) => v + 1);
            }, (waitBeforeEat + i * biteInterval) * 1000)
        );

        return () => timers.forEach(clearTimeout);
    }, [loopKey]);

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <div
                className="relative"
                style={{
                    width: iceWidth,
                    height: iceHeight * 1.5,
                }}
            >
                {/* 棒 */}
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-orange-300 rounded-full z-0"
                    style={{
                        width: barWidth,
                        height: barHeight
                    }}
                />
                {/* アイス本体 */}
                <svg
                    key={loopKey}
                    width={iceWidth}
                    height={iceHeight}
                    viewBox={`0 0 ${ICE_WIDTH} ${ICE_HEIGHT}`}
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <clipPath id="ice-shape">
                            <path
                                d="
                                    M2,18
                                    a16,16 0 0 1 32,0
                                    v38
                                    a6,6 0 0 1 -6,6
                                    h-20
                                    a6,6 0 0 1 -6,-6
                                    z
                                "/>
                        </clipPath>

                        {/* 噛み跡マスク */}
                        <mask id={`bite-mask-${loopKey}`}>
                            <rect
                                width={ICE_WIDTH}
                                height={ICE_HEIGHT}
                                fill="white"
                            />
                            {bites.slice(0, visibleBites).map((b, i) => (
                                <circle
                                    key={i}
                                    cx={b.x * ICE_WIDTH}
                                    cy={b.y * ICE_HEIGHT}
                                    r={b.size * ICE_WIDTH}
                                    fill="black"
                                />
                            ))}
                        </mask>

                        {/* グラデーション */}
                        <linearGradient
                            id="ice-grad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="50%" stopColor="#fb923c" />
                            <stop offset="100%" stopColor="#2dd4bf" />
                        </linearGradient>
                    </defs>

                    <rect
                        width={ICE_WIDTH}
                        height={ICE_HEIGHT}
                        fill="url(#ice-grad)"
                        clipPath="url(#ice-shape)"
                        mask={`url(#bite-mask-${loopKey})`}
                    />
                </svg>
            </div>
        </div>
    );
}