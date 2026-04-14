import { motion } from "framer-motion";
import type { LoaderProps } from "../../loader";

function withOpacity(hex: string, opacity: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default function NewtonCradleLoader({
    paused = false,
    speed = 1,
    size = 12,
    color = "#ec6ead",
}: LoaderProps) {
    const c1 = withOpacity(color, 0.95);
    const c2 = withOpacity(color, 0.8);
    const c3 = withOpacity(color, 0.6);

    const frame1 = `${size}px 0 0 0 ${c2}, -${size * 2}px 0 0 0 ${c3}`;
    const frame2 = `${size}px 0 0 0 ${c3}, -${size}px 0 0 0 ${c2}`;
    const frame3 = `${size * 2}px 0 0 0 ${c2}, -${size}px 0 0 0 ${c1}`;

    return (
        <motion.div
            className="rounded-full"
            style={{
                width: size,
                height: size,
                backgroundColor: c1, // 中央ドット
            }}
            animate={
                paused
                    ? { boxShadow: frame1 }
                    : {
                        boxShadow: [frame1, frame2, frame3],
                        // box-shadow: X Y blur spread color;blur を 0、spread を 0 にすると「影 = コピー」になる
                    }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        duration: speed,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "reverse",
                    }
            }
        />
    );
}