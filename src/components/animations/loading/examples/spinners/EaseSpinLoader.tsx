"use client"

export default function EaseSpinLoader() {

    return (
        <svg
            className="w-12 h-12 text-purple-600"
            viewBox="0 0 40 40"
            width="40"
            height="40"
        >
            <circle
                className="track"
                cx="20"
                cy="20"
                r="17.5"
                pathLength="100"
                strokeWidth="5px"
                fill="none"
                style={{
                    stroke: "currentColor", opacity: 0.2
                }}
            />
            <circle
                className="car"
                cx="20"
                cy="20"
                r="17.5"
                pathLength="100"
                strokeWidth="5px"
                fill="none"
                style={{
                    stroke: "currentColor", strokeLinecap: "round"
                }}
            />
            <style jsx>{`
                .car {
                stroke-dasharray: 1, 200;
                stroke-dashoffset: 0;
                transform-origin: 50% 50%; /* 中心を軸に回転 */
                animation: stretch 1.5s ease-in-out infinite, rotate 2s linear infinite;
                }
                @keyframes rotate {
                100% { transform: rotate(360deg); }
                }
                @keyframes stretch {
                0% { stroke-dasharray: 0, 150; stroke-dashoffset: 0; }
                50% { stroke-dasharray: 75, 150; stroke-dashoffset: -25; }
                100% { stroke-dashoffset: -100; }
                }
            `}
            </style>
        </svg>
    );
}