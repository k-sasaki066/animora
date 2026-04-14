import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function HopperBarsLoader({
    paused = false,
    speed = 2,
    size = 40,
    color = "#fb7185",
}: LoaderProps) {

    const leftOffset = 16;

    // 着地位置
    const landingRatios = [-0.2, 0.05, 0.3, 0.55];

    // バウンド高さ
    const bounceRatios = [0.65, 0.55, 0.45, 0.35];

    // 実値に変換
    const landings = landingRatios.map(r => r * size);
    const bounceHeights = bounceRatios.map(r => r * size);

    const yKeyframes: number[] = [];
    landings.forEach((landing, i) => {
        const bounce = bounceHeights[i];
        if (bounce > 0) {
            yKeyframes.push(landing - bounce, landing);
        } else {
            yKeyframes.push(landing);
        }
    });

    const yTimes = yKeyframes.map((_, i) => i / (yKeyframes.length - 1));

    const barHeights = [0.75, 0.5, 0.25];
    const barWidth = size * 0.2;

    return (
        <div
            className="relative flex items-end justify-between"
            style={{
                width: size,
                height: size * 0.75,
            }}
        >
            {/* bars */}
            {barHeights.map((h, i) => (
                <div
                    key={i}
                    style={{
                        width: barWidth,
                        height: size * h,
                        backgroundColor: color,
                    }}
                />
            ))}

            {/* hopping dot */}
            <motion.div
                className="absolute rounded-full bg-amber-500/70 overflow-hidden"
                style={{
                    width: size / 5,
                    height: size / 5,
                    left: -leftOffset,
                    top: 0,
                }}
                animate={
                    paused
                        ? { x: 5, y: -10}
                        : {
                            x: [0, size + leftOffset * 2],
                            y: yKeyframes,
                        }
                }
                transition={
                    paused
                        ? { duration: 0 }
                        : {
                            x: {
                                duration: speed,
                                repeat: Infinity,
                                ease: "linear",
                            },
                            y: {
                                duration: speed,
                                repeat: Infinity,
                                ease: "easeIn",
                                times: yTimes,
                            },
                        }
                }
            />
        </div>
    );
}