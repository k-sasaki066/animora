import { motion } from "framer-motion";

interface SpinnerProps {
    className?: string;
    type?: "default" | "dual" | "fade" | "rotate-scale" | "slices" | "clocks" | "waves" | "square" | "ease-spin" ;
}

export function Spinner({ className = "w-12 h-12 text-purple-600", type = "default" }: SpinnerProps) {
    const baseClass = `rounded-full ${className}`;
    const size = 56;
    const handHeight = size / 2 - 2;
    const thickness = 2;
    const animations = {
        default: <div className={`animate-spin border-4 border-t-purple-600 border-gray-300 ${baseClass}`} />,

        dual: (
            <div className={`relative w-12 h-12 ${className}`}>
                <div className="absolute top-0 left-0 w-6 h-6 border-4 border-t-purple-600 rounded-full animate-spin" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-4 border-t-purple-400 rounded-full animate-spin animate-reverse" />
            </div>
        ),

        fade: (
            <motion.div
                className={`bg-purple-600 ${baseClass}`}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
            />
        ),

        "rotate-scale": (
            <motion.div
                className={`border-4 border-t-purple-600 border-gray-300 ${baseClass}`}
                animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />
        ),

        "slices": (
            <motion.div
                className={`w-12 h-12 border-20 border-purple-600 rounded-full ${baseClass}`}
                animate={{
                borderTopColor: ["rgba(128,0,128,0.75)", "rgba(128,0,128,0.25)", "rgba(128,0,128,0.25)", "rgba(128,0,128,0.25)", "rgba(128,0,128,0.75)"],
                borderRightColor: ["rgba(128,0,128,0.25)", "rgba(128,0,128,0.75)", "rgba(128,0,128,0.25)", "rgba(128,0,128,0.25)", "rgba(128,0,128,0.25)"],
                borderBottomColor: ["rgba(128,0,128,0.25)", "rgba(128,0,128,0.25)", "rgba(128,0,128,0.75)", "rgba(128,0,128,0.25)", "rgba(128,0,128,0.25)"],
                borderLeftColor: ["rgba(128,0,128,0.25)", "rgba(128,0,128,0.25)", "rgba(128,0,128,0.25)", "rgba(128,0,128,0.75)", "rgba(128,0,128,0.25)"],
                rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                repeat: Infinity,
                duration: 1,//1秒で一回転
                ease: "linear",//一定速度の回転
                }}
            />
        ),
        
        "clocks": (
            <div
            className="relative rounded-full bg-purple-600"
            style={{
                width: size,
                height: size,
                border: `2px solid #eee`,
                borderRadius: "50%",
            }}
            >
                {/* 時計の針 */}
                <motion.div
                    style={{
                    width: 2,
                    height: handHeight,
                    backgroundColor: "#eee",
                    position: "absolute",
                    top: 2,
                    left: `calc(50% - ${thickness / 2}px)`,
                    transformOrigin: `50% ${handHeight}px`,
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
            </div>
        ),
        
        waves: (
            <div className={`relative w-12 h-12 ${baseClass} flex items-center justify-center`}>
                {[0, 0.3].map((delay, i) => (
                <motion.div
                    key={i}
                    className="absolute w-full h-full border-2 border-purple-600 rounded-full"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [0.5, 1, 1.5], opacity: [0, 1, 0] }}
                    transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    delay,
                    ease: "linear",
                    }}
                />
                ))}
            </div>
        ),

        square: (
            <svg
                className={className}
                viewBox="0 0 35 35"
                height="35"
                width="35"
            >
                <rect
                className="track"
                x="2.5"
                y="2.5"
                fill="none"
                strokeWidth="4"
                width="30.5"
                height="30.5"
                style={{ opacity: 0.1, stroke: "currentColor" }}
                />
                <rect
                className="car"
                x="2.5"
                y="2.5"
                fill="none"
                strokeWidth="5"
                width="32.5"
                height="32.5"
                pathLength={100}
                style={{
                    stroke: "currentColor",
                    strokeDasharray: "25,75",
                    strokeDashoffset: 0,
                    animation: "square-travel 1.2s linear infinite"
                }}
                />
                <style>
                {`
                    @keyframes square-travel {
                    0% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: -100; }
                    }
                `}
                </style>
            </svg>
        ),

        "ease-spin": (
            <svg
                className={className}
                viewBox="0 0 40 40"
                width="40"
                height="40"
            >
                <circle
                    className="track"
                    cx="20"
                    cy="20"
                    r="17.5"
                    pathLength="100"
                    strokeWidth="5px"
                    fill="none"
                    style={{ stroke: "currentColor", opacity: 0.2 }}
                />
                <circle
                    className="car"
                    cx="20"
                    cy="20"
                    r="17.5"
                    pathLength="100"
                    strokeWidth="5px"
                    fill="none"
                    style={{ stroke: "currentColor", strokeLinecap: "round" }}
                />
                <style jsx>{`
                    .car {
                    stroke-dasharray: 1, 200;
                    stroke-dashoffset: 0;
                    transform-origin: 50% 50%; /* 中心を軸に回転 */
                    animation: stretch 1.5s ease-in-out infinite, rotate 2s linear infinite;
                    }
                    @keyframes rotate {
                    100% { transform: rotate(360deg); }
                    }
                    @keyframes stretch {
                    0% { stroke-dasharray: 0, 150; stroke-dashoffset: 0; }
                    50% { stroke-dasharray: 75, 150; stroke-dashoffset: -25; }
                    100% { stroke-dashoffset: -100; }
                    }
                `}
                </style>
            </svg>
        ),
    };

    return animations[type] || animations.default;
}