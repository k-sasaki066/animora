import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface Props {
    paused?: boolean;
}

export default function WaveFillLoader({ paused = false }: Props) {

    const controls = useAnimation();

    useEffect(() => {
        if (paused) {
            controls.stop();
        } else {
            controls.start({
                x: [0, 40],
                transition: { duration: 1.5, ease: "linear", repeat: Infinity },
            });
        }
    }, [paused, controls]);

    return (
        <svg
            viewBox="0 0 100 20"
            className="w-full max-w-xs"
        >
            <defs>
                {/* グラデーション */}
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#326384" />
                    <stop offset="95%" stopColor="#123752" />
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