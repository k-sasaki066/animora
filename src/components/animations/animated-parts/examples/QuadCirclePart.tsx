import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function QuadCirclePart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const [activeIndex, setActiveIndex] = useState(0);

    const size = width ? Math.min(width * 0.18, 80): 40;
    const floatDistance = Math.min(size / 5 , 16);
    const pieces = [
        { rotate: 0, x :floatDistance, y: -floatDistance },
        { rotate: 90, x: floatDistance, y: floatDistance },
        { rotate: 180, x: -floatDistance, y: floatDistance },
        { rotate: 270, x: -floatDistance, y: -floatDistance },
    ];
    const interval = 900;

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % pieces.length);
        }, interval);

        return () => clearInterval(timer);
    }, [interval, pieces.length]);

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <div className="relative" style={{ width: size, height: size }}>
                {pieces.map((piece, index) => (
                    <motion.div
                        key={piece.rotate}
                        className=" absolute inset-0 rounded-full"
                        style={{
                            background: `conic-gradient(#f03355 0 90deg, transparent 0)`,
                        }}
                        animate={{
                            rotate: piece.rotate,
                            x: index === activeIndex ? [0, piece.x, 0] : 0,
                            y: index === activeIndex ? [0, piece.y, 0] : 0,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}