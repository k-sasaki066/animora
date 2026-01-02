"use client"

export default function SquareLoader() {

    return (
        <svg
            className="w-12 h-12 text-purple-600"
            viewBox="0 0 36 36"
            height="36"
            width="36"
        >
            <rect
                x="3"
                y="3"
                width="30"
                height="30"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                opacity="0.15"
            />

            {/* 流れる線 */}
            <rect
                x="3"
                y="3"
                width="30"
                height="30"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="100"
                strokeDasharray="25 75"
                strokeDashoffset="0"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-100"
                    dur="1.2s"
                    repeatCount="indefinite"
                />
            </rect>
        </svg>
    );
}