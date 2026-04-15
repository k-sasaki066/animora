import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";
import { withOpacity } from "@/utils/color";

export default function SlicesLoader({
    paused = false,
    speed = 1.5,
    size = 48,
    color = "#800080",
}: LoaderProps) {

    const active = withOpacity(color, 0.75);
    const inactive = withOpacity(color, 0.25);

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