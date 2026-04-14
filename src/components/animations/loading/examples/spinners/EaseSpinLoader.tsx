import type { LoaderProps } from "../../loader";

export default function EaseSpinLoader({
    paused = false,
    speed = 1.5,
    size = 40,
    color = "#fb7185",
}: LoaderProps) {
    const strokeWidth = size * 0.12;

    return (
        <svg
            viewBox="0 0 40 40"
            width={size}
            height={size}
            style={{
                color,
                width: size * 1.2,
                height: size * 1.2,
            }}
        >
            <circle
                className="track"
                cx="20"
                cy="20"
                r="17.5"
                pathLength="100"
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                opacity={0.2}
            />
            <circle
                className="car"
                cx="20"
                cy="20"
                r="17.5"
                pathLength="100"
                strokeWidth={strokeWidth}
                fill="none"
                style={{
                    stroke: "currentColor", strokeLinecap: "round",
                    animationPlayState: paused ? "paused" : "running",
                }}
            />
            <style jsx>{`
                .car {
                    stroke-dasharray: 1, 200;
                    stroke-dashoffset: 0;
                    transform-origin: 50% 50%; /* 中心を軸に回転 */
                    animation: stretch ${speed}s ease-in-out infinite, rotate ${speed * 1.2}s linear infinite;
                }
                @keyframes rotate {
                    100% {
                        transform: rotate(360deg);
                    }
                }
                @keyframes stretch {
                    0% {
                        stroke-dasharray: 0, 150;
                        stroke-dashoffset: 0;
                    }
                    50% {
                        stroke-dasharray: 75, 150;
                        stroke-dashoffset: -25;
                    }
                    100% {
                        stroke-dashoffset: -100;
                    }
                }
            `}
            </style>
        </svg>
    );
}