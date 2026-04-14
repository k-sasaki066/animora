import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

function hexToRgb(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

export default function SlicesLoader({
    paused = false,
    speed = 1.5,
    size = 48,
    color = "#800080",
}: LoaderProps) {
    const { r, g, b } = hexToRgb(color);

    const active = `rgba(${r}, ${g}, ${b}, 0.75)`;
    const inactive = `rgba(${r}, ${g}, ${b}, 0.25)`;

    const frames = {
        top: [
            active, inactive, inactive, inactive, active
        ],
        right: [
            inactive, active, inactive, inactive, inactive
        ],
        bottom: [
            inactive, inactive, active, inactive, inactive
        ],
        left: [
            inactive, inactive, inactive, active, inactive
        ],
    };

    return (
        <motion.div
            className="border-20 rounded-full"
            style={{
                width: size,
                height: size,
                borderColor: inactive,
            }}
            animate={
                paused
                    ? {
                        borderTopColor: frames.top,
                    }
                    : {
                        borderTopColor: frames.top,
                        borderRightColor: frames.right,
                        borderBottomColor: frames.bottom,
                        borderLeftColor: frames.left,
                        rotate: [0, 90, 180, 270, 360],
                    }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration: speed,
                        ease: "linear",
                    }
            }
        />
    );
}