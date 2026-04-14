import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function ArrowRotateLoader({
    paused = false,
    speed = 1,
    size = 50,
    color = "#8b5cf6",
}: LoaderProps) {

    return (
        <motion.div
            className="rounded-full px-2 w-full flex items-center justify-center overflow-hidden"
            style={{
                width: size,
                aspectRatio: "1",
                padding: 6,
                background: `
                    conic-gradient(from 135deg at top, currentColor 90deg, #0000 0) 0 calc(50% - 4px)/17px 8.5px,
                    radial-gradient(farthest-side at bottom left,#0000 calc(100% - 6px), currentColor calc(100% - 5px) 99%, #0000) top right/50% 50% content-box content-box,
                    radial-gradient(farthest-side at top,#0000 calc(100% - 6px), currentColor calc(100% - 5px) 99%, #0000) bottom/100% 50% content-box content-box
                `,
                backgroundRepeat: "no-repeat",
                color: color,
            }}
            animate={
                paused
                    ? {}
                    : { rotate: [0, 360] }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : { repeat: Infinity, ease: "linear", duration: speed }
            }
        />
    );
}