import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function HopperBarsLoader({ paused = false }: Props) {

    const containerWidth = 40;
    const leftOffset = 16;

    const landings = [-8, 2, 12, 22]; // 着地位置
    const bounceHeights = [26, 22, 18, 14]; // バウンドの高さ

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

    return (
        <div className="relative w-10 h-7.5 flex items-end justify-between">
            {/* bars */}
            <div className="w-2 h-7.5 bg-rose-400/80" />
            <div className="w-2 h-5 bg-rose-400/80" />
            <div className="w-2 h-2.5 bg-rose-400/80" />

            {/* hopping dot */}
            <motion.div
                className="absolute w-2 h-2 rounded-full bg-amber-500/70 overflow-hidden"
                style={{
                    left: -leftOffset,
                    top: 0,
                }}
                animate={
                    paused
                        ? { x: 5, y: -10}
                        : {
                            x: [0, containerWidth + leftOffset * 2],
                            y: yKeyframes,
                        }
                }
                transition={
                    paused
                        ? { duration: 0 }
                        : {
                            x: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            },
                            y: {
                                duration: 2,
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