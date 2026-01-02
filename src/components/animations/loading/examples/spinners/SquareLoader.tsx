"use client"

export default function SquareLoader() {

    return (
        <svg
            className="w-12 h-12 text-purple-600"
            viewBox="0 0 35 35"
            height="35"
            width="35"
        >
            <rect
                className="track"
                x="2.5"
                y="2.5"
                fill="none"
                strokeWidth="4"
                width="30.5"
                height="30.5"
                style={{
                    opacity: 0.1,
                    stroke: "currentColor"
                }}
            />
            <rect
                className="car"
                x="2.5"
                y="2.5"
                fill="none"
                strokeWidth="5"
                width="32.5"
                height="32.5"
                pathLength={100}
                style={{
                    stroke: "currentColor",
                    strokeDasharray: "25,75",
                    strokeDashoffset: 0,
                    animation: "square-travel 1.2s linear infinite"
                }}
            />
            <style>
                {`
                    @keyframes square-travel {
                    0% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: -100; }
                    }
                `}
            </style>
        </svg>
    );
}