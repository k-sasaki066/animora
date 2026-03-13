import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const RADIUS = 48;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function CheckCirclePart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const size = width ? Math.min(width * 0.26, 90) : 60;
    const checkSize = size * 0.7;

    const [playKey, setPlayKey] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setPlayKey((k) => k + 1); // keyを変えてアニメーションをリセット
        }, 4000);
        return () => clearInterval(id);
    }, []);

    return (
        <div
            ref={ref}
            className="flex items-center justify-center w-full h-full bg-linear-to-br from-cyan-300 to-indigo-500"
        >
            <div
                className="relative"
                style={{
                    width: size,
                    height: size,
                }}
            >
                {/* 円枠 */}
                <motion.svg
                    key={`circle-${playKey}`}
                    className="absolute inset-0"
                    viewBox="0 0 100 100"
                >
                    <motion.circle
                        cx="50"
                        cy="50"
                        r={RADIUS}
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                        strokeDasharray={CIRCUMFERENCE}
                        initial={{ strokeDashoffset: CIRCUMFERENCE }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.3, 0.1, 0.25, 1],
                        }}
                    />
                </motion.svg>

                {/* 白塗り */}
                <motion.div
                    key={`fill-${playKey}`}
                    className="absolute inset-0 rounded-full"
                    initial={{ boxShadow: "inset 0 0 0 0px #ffffff" }}
                    animate={{ boxShadow: "inset 0 0 0 50px #ffffff" }}
                    transition={{
                        delay: 0.75,
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                />

                {/* チェックマーク */}
                <motion.div
                    key={`check-${playKey}`}
                    className="absolute inset-0 flex items-center justify-center text-indigo-400"
                    initial={{
                        scale: 0,
                        opacity: 0,
                        rotate: -10
                    }}
                    animate={{
                        scale: [0, 1.3, 0.9, 1, 1, 1],
                        opacity: 1,
                        rotate: 0
                    }}
                    transition={{
                        delay: 1,
                        duration: 0.5,
                        ease: "linear",
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="fill-current"
                        style={{
                            width: checkSize,
                            height: checkSize,
                        }}
                    >
                        <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
}