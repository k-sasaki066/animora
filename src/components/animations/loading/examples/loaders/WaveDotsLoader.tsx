import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";
import { hexToHsl } from "@/utils/color";

export default function WaveDotsLoader({
    paused = false,
    speed = 2,
    size = 12,
    color = "#67e8f9",
    delayStep = 0.2,
    scale = 2.5
}: LoaderProps) {

    const count = 3;
    const [ h, s, l ] = hexToHsl(color);

    return (
        <div className="flex items-center justify-center">
            {Array.from({ length: count }).map((_, i) => {
                const gradientColor = `hsl(${h + i * 10}, ${s}%, ${l - i * 5}%)`;
                const pausedScale = 1 + (i * 0.5);
                const pausedOpacity = 1 - i * 0.3;

                return (
                    <div
                        key={i}
                        className={`relative rounded-full`}
                        style={{
                            width: size,
                            height: size,
                            margin: size! * 0.4,
                            backgroundColor: gradientColor,
                        }}
                    >
                        {/* 波紋 */}
                        <motion.span
                            className={`absolute inset-0 rounded-full`}
                            style={{
                                backgroundColor: gradientColor,
                            }}
                            animate={
                                paused
                                    ? {
                                        scale: pausedScale,
                                        opacity: pausedOpacity
                                    }
                                    : {
                                        scale: [1, scale, scale],
                                        opacity: [0.6, 0.6, 0],
                                    }
                            }
                            transition={
                                paused
                                    ? { duration: 0 }
                                    : {
                                        duration: speed,
                                        ease: "easeOut",
                                        times: [0, 0.6, 1],
                                        repeat: Infinity,
                                        delay: i * delayStep,
                                    }
                            }
                        />
                    </div>
                );
            })}
        </div>
    );
}