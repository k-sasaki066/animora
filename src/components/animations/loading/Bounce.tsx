import { motion } from "framer-motion";

interface BounceProps {
    className?: string;
    type: "dots" | "pulse" | "bounce" | "cloud" | "3balls-scale" |"cubeMetronome" | "bouncy" | "grow-bars" | "gridBuildUp" | "bar-progress";
}

export function Bounce({ className = "w-12 h-12 text-purple-600", type}: BounceProps) {
    const baseClass = `rounded-full ${className}`;
    const gridOrder = [...Array(9).keys()];
    const animations = {
        dots: (
            <div className={`flex items-center space-x-2 ${className}`}>
                {[0, 160, 320].map((delay, i) => (
                <div
                    key={i}
                    className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"
                    style={{ animationDelay: `${delay}ms` }}
                />
                ))}
            </div>
        ),

        pulse:
            <div className={`bg-purple-600 ${baseClass} animate-pulse`} />,

        bounce: (
            <motion.div
                className={`bg-purple-600 ${baseClass}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            />
        ),

        cloud: (
            <motion.div
            className="
                relative w-15 h-7 bg-purple-400 rounded-full
                before:content-[''] before:absolute before:w-8 before:h-8
                before:bg-purple-400 before:rounded-full before:-left- before:-top-1
                after:content-[''] after:absolute after:w-7 after:h-7
                after:bg-purple-400 after:rounded-full after:left-6 after:-top-2
            "
            animate={{
                scale: [1, 1.06, 1],
                y: [0, -2, 0], // 小さいので揺れも控えめ
            }}
            transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
            }}
            >
            {/* 追加の小さな丸（より雲っぽく） */}
            <div className="
                absolute w-6 h-6 bg-purple-400 rounded-full
                left-4 -bottom-1.5
            " />
            </motion.div>
        ),
        
        "3balls-scale": (
            <div className={`flex justify-center items-center space-x-2 ${className}`}>
            {[0, 0.33, 0.66].map((delay, i) => (
                <motion.div
                    key={i}
                    className="w-4 h-4 bg-purple-600 rounded-full"
                    animate={{ opacity: [1, 0.25, 0.25, 1] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                        times: [0, 0.33, 0.66, 1],
                        delay,
                    }}
                />
            ))}
            </div>
        ),

        cubeMetronome: (
            <div className="flex items-center justify-center w-12 h-12 relative">
                <motion.div
                className="absolute bg-purple-600 rounded-sm"
                style={{ width: 14, height: 14 }}
                animate={{
                    x: [0, 6, 14, 6, 0],      // 半円の左右の移動
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                />
            </div>
        ),
        
        bouncy: (
            <div className="flex justify-between items-end w-12 h-6 relative">
            {[0, 0.36, 0.2].map((delay, i) => (
                <motion.div
                key={i}
                className="w-3 h-3"
                style={{ borderRadius: "25%", backgroundColor: "#9333ea" }} // purple-600
                animate={{
                    y: [0, 0, -20, 0],
                    scaleY: [1, 1, 0.6, 1.15, 1],
                    scaleX: [1, 1, 1.3, 0.9, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.75,
                    ease: "easeInOut",
                    delay: -1.75 * delay, // CSS の calc(s * -0.36) を再現
                }}
                />
            ))}
            </div>
        ),

        "grow-bars": (
            <div
            className="flex items-center justify-between"
            style={{
                width: "35px",
                height: "31.5px", // 35 * 0.9 と同じ
            }}
            >
            {[ -0.45, -0.3, -0.15, 0 ].map((delay, i) => (
                <motion.div
                key={i}
                className="bg-purple-600"
                style={{
                    width: "3.5px",
                    height: "100%",
                    borderRadius: "2px",
                }}
                animate={{
                    scaleY: [0.3, 1, 0.3],
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: delay,
                }}
                />
            ))}
            </div>
        ),

        gridBuildUp: (
            <motion.div
                className={`grid grid-cols-3 gap-1 ${className}`}
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                    transition: {
                        staggerChildren: 0.08, // 子を順番に動かす
                        repeat: Infinity,
                        repeatType: "loop",
                    },
                    },
                }}
                >
                {gridOrder.map((_, index) => {
                    const totalSteps = 18;
                    const upIndex = index;
                    const downIndex = 8 - index;

                    return (
                    <motion.div
                        key={index}
                        className="w-3 h-3 bg-purple-600"
                        variants={{
                        hidden: { opacity: 0, scale: 0.4 },

                        visible: {
                            opacity: [0, 1, 1, 0],
                            scale: [0.4, 1, 1, 0.4],
                            transition: {
                            times: [0, 0.4, 0.6, 1],
                            duration: 2.4,
                            repeat: Infinity,
                            repeatType: "loop",

                            delay: (upIndex * 0.1),
                            },
                        },
                        }}
                    />
                    );
                })}
            </motion.div>
        ),

        "bar-progress": (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 6"
            width="120"
            height="6"
            >
                {/* 背景バー */}
                <rect x="0" y="0" rx="2" ry="2" width="120" height="6" fill="#f2f2f2" />

                {/* 青バー 1 */}
                <rect x="0" y="0" rx="2" ry="2" width="150" height="6" fill="#9333EA" transform="scale(0,1)">
                    <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="-75,0;-20,0;50,0;250,0"
                    keyTimes="0;.3;.5;1"
                    keySplines="0 0 1 1;.3 .3 .8 .7;.4 .6 .6 .9"
                    dur="2s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    />
                    <animateTransform
                    attributeName="transform"
                    type="scale"
                    values=".1,1;.5,1;.7,1;.1,1"
                    keyTimes="0;.4;.8;1"
                    keySplines="0 0 1 1;.3 .1 .8 1;.1 .1 .6 1"
                    dur="2s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    additive="sum"
                    />
                </rect>

                {/* 青バー 2 */}
                <rect x="0" y="0" rx="2" ry="2" width="150" height="6" fill="#9333EA" transform="scale(0,1)">
                    <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="-50,0;-50,0;-50,0;165,0"
                    keyTimes="0;.2;.6;1"
                    keySplines="0 0 1 1;.5 0 .7 .5;.3 .4 .6 1"
                    dur="2s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    begin=".5s"
                    />
                    <animateTransform
                    attributeName="transform"
                    type="scale"
                    values=".1,1;.1,1;.7,1;.1,1"
                    keyTimes="0;.4;.7;1"
                    keySplines="0 0 1 1;.3 .1 .8 1;.1 .1 .6 1"
                    dur="2s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    additive="sum"
                    begin=".5s"
                    />
                </rect>
            </svg>
        ),
    };

    return animations[type];
}