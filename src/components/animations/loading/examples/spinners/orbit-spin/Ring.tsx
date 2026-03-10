import { motion } from "framer-motion";

type RingProps = {
    color: string;        // 線の色
    radius?: number;      // スピナー半径
    strokeWidth?: number; // 線の太さ
    rotateX: number;      // 初期傾きX
    rotateY: number;      // 初期傾きY
    duration?: number;    // 回転速度
    paused?: boolean;
};

export function Ring({
    color,
    radius = 50,
    strokeWidth = 2,
    rotateX,
    rotateY,
    duration = 1.15,
    paused
}: RingProps) {
    const circumference = 2 * Math.PI * radius;

    return (
        <motion.svg
            className="absolute inset-0 w-full h-full"
            style={{
                transformStyle: "preserve-3d"
            }}
            initial={{
                rotateX,
                rotateY,
                rotateZ: 0,
            }}
            animate={
                paused
                    ? { rotateX, rotateY, rotateZ: 0 }
                    : { rotateZ: 360 }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration,
                        ease: "linear"
                    }
            }
        >
            <circle
                cx="50%"
                cy="50%"
                r={`${radius}%`}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round" // 先端を丸く細く
                strokeDasharray={`${circumference * 0.25} ${circumference}`} // 線の長さを25%
            />
        </motion.svg>
    );
}