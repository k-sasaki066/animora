interface Props {
    paused?: boolean;
}

export default function StarRotateLoader({ paused = false }: Props) {

    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 100 100"
            className="text-[#70e1f5]"
        >
            <polygon
                points="
                    50,10
                    61,38
                    90,38
                    66,57
                    75,85
                    50,68
                    25,85
                    34,57
                    10,38
                    39,38
                "
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinejoin="round"
                strokeLinecap="round"
                style={{
                    transformOrigin: "50% 50%",
                    animation: "spin-pause 3s infinite",
                    animationPlayState: paused ? "paused" : "running"
                }}
            />

            <style>
                {`
                    @keyframes spin-pause {
                        0% {
                            transform: rotate(0deg);
                        }
                        40% {
                            transform: rotate(360deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                `}
            </style>
        </svg>
    );
}