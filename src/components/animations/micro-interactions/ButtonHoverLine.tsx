import { motion } from "framer-motion";

interface ButtonHoverLineProps {
    className?: string;
    type: "Parallelogram" | "Parallelogram2" | "OutlineHover" | "MoveAndSurround" | "LineSurround";
}

export function ButtonHoverLine({ className = "w-40 h-12 cursor-pointer", type }: ButtonHoverLineProps) {
    const flexCenter = "flex justify-center items-center";
    const animations = {
        Parallelogram: (
            <motion.button
                className={`relative font-semibold px-8 py-4 overflow-hidden ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
                >
                {/* --- 枠線コンテナ --- */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    variants={{
                        rest: { skewX: -40 },
                        hover: { skewX: 0 },
                    }}
                    transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                    }}
                >
                    {/* bottom-right horizontal */}
                    <motion.span
                        className="absolute bottom-0 right-0 h-0.5 bg-orange-400"
                        variants={{
                            rest: { width: 30 },
                            hover: { width: "100%" },
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.35, // ← skew が戻った後に伸び始める
                        }}
                    />

                    {/* bottom-right vertical */}
                    <motion.span
                        className="absolute bottom-0 right-0 w-0.5 bg-orange-400"
                        variants={{
                            rest: { height: 30 },
                            hover: { height: "100%" },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.45, // ← 横より少し遅れて伸びる
                        }}
                    />

                    {/* top-left horizontal */}
                    <motion.span
                        className="absolute top-0 left-0 h-0.5 bg-orange-400"
                        variants={{
                            rest: { width: 30 },
                            hover: { width: "100%" },
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.35,
                        }}
                    />

                    {/* top-left vertical */}
                    <motion.span
                        className="absolute top-0 left-0 w-0.5 bg-orange-400"
                        variants={{
                            rest: { height: 30 },
                            hover: { height: "100%" },
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                            delay: 0.45,
                        }}
                    />
                </motion.div>

                {/* --- 背景・文字 --- */}
                <div
                    className={`absolute inset-1 z-0 ${flexCenter}`}
                >
                    <span
                        className="z-10 text-orange-600"
                    >
                        Button
                    </span>
                </div>
            </motion.button>
        ),

        Parallelogram2: (
            <motion.button
                className={`relative font-semibold px-8 py-4 overflow-hidden ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
                >
                {/* --- 枠線コンテナ --- */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    variants={{
                        rest: { skewX: -40 },
                        hover: { skewX: 0 },
                    }}
                    transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                    }}
                >
                    {/* bottom-right horizontal */}
                    <motion.span
                        className="absolute bottom-0 right-0 h-0.5 bg-blue-500"
                        variants={{
                            rest: { width: 30, x:0,},
                            hover: { width: "50%", x:-38, },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.35, // ← skew が戻った後に伸び始める
                        }}
                    />

                    {/* bottom-right vertical */}
                    <motion.span
                        className="absolute bottom-0 right-0 w-0.5 bg-blue-500"
                        variants={{
                            rest: { height: 30 },
                            hover: { height: "0%" },
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                            delay: 0.45, // ← 横より少し遅れて伸びる
                        }}
                    />

                    {/* top-left horizontal */}
                    <motion.span
                        className="absolute top-0 left-0 h-0.5 bg-blue-500"
                        variants={{
                            rest: { width: 30 },
                            hover: { width: "0%" },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.35,
                        }}
                    />

                    {/* top-left vertical */}
                    <motion.span
                        className="absolute top-0 left-0 w-0.5 bg-blue-500"
                        variants={{
                            rest: { height: 30 },
                            hover: { height: "0%" },
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                            delay: 0.45,
                        }}
                    />
                </motion.div>

                {/* --- 背景・文字 --- */}
                <div
                    className={`absolute inset-1 z-0 ${flexCenter}`}
                >
                    <span
                    className="z-10 text-blue-600"
                    >
                        Button
                    </span>
                </div>
            </motion.button>
        ),

        OutlineHover: (
            <motion.div
            className={`relative ${className} ${flexCenter}`}
            whileHover="hover"
            >
                {/* ボタン本体 */}
                <div className="px-6 py-3 w-full h-full z-10 text-center">
                    Button
                </div>

                {/* 回転するアウトライン（SVG） */}
                <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 200 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.rect
                        className= "w-full h-full"
                        x="0"
                        y="0"
                        rx="0"
                        stroke="purple"
                        strokeWidth="2"
                        strokeDasharray="90 174"
                        strokeDashoffset={80}
                        variants={{
                            hover: {
                                strokeDashoffset: [80, -260],
                                transition: {
                                duration: 0.8,
                                ease: [0.1, 0.8, 0.3, 1], //徐々に減速
                                repeat: 0,
                                },
                            },
                        }}
                    />
                </motion.svg>
            </motion.div>
        ),

        MoveAndSurround: (
            <motion.div
            className={`relative ${className} ${flexCenter}`}
            whileHover="hover"
            >
                {/* ボタン本体 */}
                <div className="px-6 py-3 w-full h-full z-10 text-center">
                Button
                </div>

                {/* 回転するアウトライン（SVG） */}
                <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 200 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.rect
                        className= "w-full h-full"
                        x="0"
                        y="0"
                        rx="0"
                        stroke="purple"
                        strokeWidth="2"
                        strokeDasharray="60 460"
                        strokeDashoffset={60}
                        variants={{
                            hover: {
                                strokeDashoffset: [60, -201],
                                strokeDasharray: ["60 460", "520 0"], //ここで枠線を伸ばす
                                transition: {
                                    duration: 0.8,
                                    ease: [0.1, 0.8, 0.3, 1], //徐々に減速
                                    strokeDasharray: {
                                        delay: 0.5, // ← offsetが終わった後に開始
                                    }
                                },
                            },
                        }}
                    />
                </motion.svg>
            </motion.div>
        ),

        LineSurround: (
            <motion.div
                className={`relative flex justify-center ${className}`}
                initial="rest"
                animate="rest"
                whileHover="hover"
            >
                {/* ボタン本体 */}
                <motion.div
                    className="px-6 py-3 w-full h-full z-10 text-center"
                    variants={{
                        rest: {
                            y: 6, // 初期位置を少し下げる
                        },
                        hover: {
                            y: 0, // ホバーで中央に戻る
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                                delay: 0.3,
                            },
                        },
                    }}
                >
                    Button
                </motion.div>

                {/* 回転するアウトライン（SVG） */}
                <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 200 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* 右側（左右対称） */}
                    <motion.path
                        d="M100 0 H200 V60 H0 V0 H100"
                        stroke="black"
                        strokeWidth="2"
                        variants={{
                            rest: {
                                pathLength: 0.1,
                                pathOffset: 0.5,
                            },
                            hover: {
                                pathLength: 0.5,
                                pathOffset: 0.5,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeInOut",
                                },
                            },
                        }}
                    />
                    {/* 左側 */}
                    <motion.path
                        d="M100 0 H0 V60 H200 V0 H100"
                        stroke="black"
                        strokeWidth="2"
                        variants={{
                            rest: {
                                pathLength: 0.1,
                                pathOffset: 0.5, // 中央を起点に片側へ
                            },
                            hover: {
                                pathLength: 0.5, // 図形の半分まで描画
                                pathOffset: 0.5,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeInOut",
                                },
                            },
                        }}
                    />
                </motion.svg>
            </motion.div>
        ),
    };

    return animations[type];
}