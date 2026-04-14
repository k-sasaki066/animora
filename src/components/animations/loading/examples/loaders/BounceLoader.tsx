import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

export default function BounceLoader({
    paused = false,
    speed = 1.5,
    size = 48,
    yRange = -10,
    color = "#c16ffc",
}: LoaderProps) {

    return (
        <motion.div
            className="rounded-full"
            style={{
                width: size,
                height: size,
                backgroundColor: color,
            }}
            animate={
                paused
                    ? { y: 0 }
                    : { y: [ 0, yRange, 0 ] }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration: speed
                    }
            }
        />
    );
}