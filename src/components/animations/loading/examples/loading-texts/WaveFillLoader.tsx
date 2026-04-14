import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { LoaderProps } from "../../loader";

function adjustColor(hex: string, percent: number) {
    const num = parseInt(hex.replace("#", ""), 16);

    let r = (num >> 16) + percent;
    let g = ((num >> 8) & 0x00ff) + percent;
    let b = (num & 0x0000ff) + percent;

    r = Math.max(Math.min(255, r), 0);
    g = Math.max(Math.min(255, g), 0);
    b = Math.max(Math.min(255, b), 0);

    return `rgb(${r}, ${g}, ${b})`;
}

export default function WaveFillLoader({
    paused = false,
    speed = 1.5,
    size = 40,
    color = "#326384",
}: LoaderProps) {

    const controls = useAnimation();

    useEffect(() => {
        if (paused) {
            controls.stop();
        } else {
            controls.start({
                x: [0, 40],
                transition: { duration: speed, ease: "linear", repeat: Infinity },
            });
        }
    }, [paused, controls, speed, size]);

    const baseColor = color || "#326384";
    const gradientTop = baseColor;
    const gradientBottom = adjustColor(baseColor, -30);
    const scale = size / 20;

    return (
        <svg
            viewBox="0 0 100 20"
            style={{
                width: size * 4,
                height: size,
            }}
        >
            <defs>
                {/* グラデーション */}
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor={gradientTop} />
                    <stop offset="95%" stopColor={gradientBottom} />
                </linearGradient>

                {/* 波パターン */}
                <pattern
                    id="wave"
                    x="0"
                    y="0"
                    width="120"
                    height="20"
                    patternUnits="userSpaceOnUse"
                >
                    <motion.path
                        d="
                            M-40 9
                            Q-30 7 -20 9
                            T0 9
                            T20 9
                            T40 9
                            T60 9
                            T80 9
                            T100 9
                            T120 9
                            V20 H-40 Z
                        "
                        fill="url(#gradient)"
                        animate={controls}
                        style={{
                            transform: `scale(${scale})`,
                            transformOrigin: "0 0",
                        }}
                    />
                </pattern>
            </defs>

            {/* 波が流れる文字 */}
            <text
                x="50"
                y="15"
                textAnchor="middle"
                fontSize="17"
                fill="url(#wave)"
                fillOpacity="0.6"
                className="font-bold"
            >
                LOADING
            </text>

            {/* 薄いベース文字 */}
            <text
                x="50"
                y="15"
                textAnchor="middle"
                fontSize="17"
                fill="url(#gradient)"
                fillOpacity="0.15"
                className="font-bold"
            >
                LOADING
            </text>
        </svg>
    );
}