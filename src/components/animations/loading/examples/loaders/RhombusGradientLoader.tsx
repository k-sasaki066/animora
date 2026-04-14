import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function RhombusGradientLoader({
    paused = false,
    speed = 2.5,
    size = 112,
    color = "#05df72",
}: LoaderProps) {

    const maskSvg = encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <polygon points="12,0 24,12 12,24 0,12" fill="white"/>
        </svg>
    `);

    return (
        <div
            className="relative overflow-hidden bg-gray-200/50"
            style={{
                width: size,
                height: size * 0.21,
                WebkitMaskImage: `url("data:image/svg+xml;utf8,${maskSvg}")`,
                WebkitMaskRepeat: "repeat-x",
                WebkitMaskSize: "25% 100%",
                WebkitMaskPosition: "left",
            }}
        >
            <motion.div
                className="absolute w-full h-full top-0 left-0"
                style={{
                    backgroundColor: color,
                }}
                animate={
                    paused
                        ? { x: "-50%" }
                        : { x: ["-100%", "0%"] }
                }
                transition={
                    paused
                        ? { duration: 0 }
                        : {
                            duration: speed,
                            repeat: Infinity,
                            ease: "linear",
                        }
                }
            />
        </div>
    );
}
