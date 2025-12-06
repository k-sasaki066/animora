import { motion } from "framer-motion";
// import { div } from "framer-motion/client";

interface ButtonHoverProps {
    className?: string;
    type: "ExtendLeft" | "DiagonalSwipe" | "DoubleSwipe" | "StopSwipe" | "Passing" | "CircleOut" | "ArrowExtend" | "Click" | "Flip" | "ColorCycle" | "ColorIntoCenter" | "ChangeShape" | "SideBrackets" | "HiddenText" | "ColorFlow" | "TransformShape" | "HoverLine" | "Rotate";
}

export function ButtonHover({ className = "w-40 h-12", type }: ButtonHoverProps) {
    const baseClass = `rounded-full ${className}`;
    const animations = {

        ExtendLeft: (
            <motion.div
                className={`relative px-8 py-4 rounded-sm border border-gray-300 cursor-pointer overflow-hidden ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 背景 */}
                <motion.div
                    className="absolute top-0 -left-full w-full h-full bg-gray-400"
                    variants={{
                        initial: { left: "-100%" },
                        hovered: { left: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                {/* テキスト */}
                <motion.span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-gray-500"
                    variants={{
                        initial: { color: "#6a7282" },
                        hovered: { color: "#fff" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
            </motion.div>
        ),

        DiagonalSwipe: (
            <motion.div
                className={`relative px-8 py-4 rounded-sm border border-rose-300 cursor-pointer overflow-hidden ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 斜め背景 */}
                <motion.div
                    className="absolute -top-40 right-0 h-full bg-rose-400"
                    style={{
                        width: "200%",
                        height: "350%",
                        rotate: "45deg",
                        transformOrigin: "left center"
                    }}
                    variants={{
                        initial: { left: "-150%" },
                        hovered: { left: "-10%" }
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                {/* テキスト */}
                <motion.span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-rose-500"
                    variants={{
                        initial: { color: "oklch(64.5% 0.246 16.439)" },
                        hovered: { color: "#fff" },
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
            </motion.div>
        ),

        DoubleSwipe: (
            <motion.div
                className={`relative px-8 py-4 rounded-sm border border-green-400 cursor-pointer overflow-hidden ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 斜め背景1 */}
                <motion.div
                    className="absolute -top-40 right-0 h-full bg-green-400"
                    style={{
                        width: "200%",
                        height: "350%",
                        rotate: "45deg",
                        transformOrigin: "left center"
                    }}
                    variants={{
                        initial: { left: "-150%" },
                        hovered: { left: "-10%" }
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* 斜め背景2 */}
                <motion.div
                    className="absolute top-14 left-0 h-full bg-green-400"
                    style={{
                        width: "200%",
                        height: "350%",
                        rotate: "-45deg",
                        transformOrigin: "left center"
                    }}
                    variants={{
                        initial: { left: "116%" },
                        hovered: { left: "-25%" }
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* テキスト */}
                <motion.span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-green-500"
                    variants={{
                        initial: { color: "oklch(72.3% 0.219 149.579)" },
                        hovered: { color: "#fff" },
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
            </motion.div>
        ),

        StopSwipe: (
            <motion.div
                className={`relative px-8 py-4 rounded-sm border border-orange-400 cursor-pointer overflow-hidden ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 斜め背景1 */}
                <motion.div
                    className="absolute -top-40 right-0 h-full bg-orange-400"
                    style={{
                        width: "200%",
                        height: "200%",
                        rotate: "45deg",
                        transformOrigin: "left center"
                    }}
                    variants={{
                        initial: { left: "-150%" },
                        hovered: { left: "-40%" }
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* テキスト */}
                <motion.span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-orange-500"
                    variants={{
                        initial: { color: "oklch(70.5% 0.213 47.604)" },
                        hovered: { color: "#fff" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
            </motion.div>
        ),

        Passing: (
            <motion.div
                className={`relative px-8 py-4 rounded-sm border border-indigo-500 overflow-hidden cursor-pointer ${className}`}
                whileHover="hovered" // ← 親に hover 状態を渡す
                initial="initial"
                animate="initial"
            >
                {/* 背景 */}
                <motion.div
                className="absolute top-0 -left-full w-full h-full  bg-indigo-400 z-0"
                variants={{
                    initial: { left: "-100%" },
                    hovered: { left: "100%" }
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                />
                {/* テキスト */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">Button</span>
            </motion.div>
        ),

        CircleOut: (
            <motion.div
                className={`relative px-8 py-4 rounded-sm border border-gray-300 cursor-pointer overflow-hidden ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 円エフェクト */}
                <motion.div
                className="absolute bg-gray-400 rounded-full"
                style={{
                    width: 20,
                    height: 20,
                    top: "50%",
                    left: "50%",
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={{
                    initial: { scale: 0, opacity: 0 },
                    hovered: { scale: 10, opacity: 1 }, // 広がる量を調整
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
                />

                {/* テキスト */}
                <motion.span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-gray-500"
                    variants={{
                        initial: { color: "#6a7282" },
                        hovered: { color: "#fff" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
            </motion.div>
        ),

        ArrowExtend: (
            <motion.div
                className={`relative inline-flex items-center justify-center cursor-pointer rounded-full overflow-hidden ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 背景丸 */}
                <motion.div
                    className="absolute top-0 -left-full w-full h-full bg-yellow-400 z-0 rounded-full"
                    variants={{
                        initial: { left: "-72%" },
                        hovered: { left: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* 矢印 + テキスト */}
                <div className="relative z-10 flex items-center space-x-8 px-4 py-3 w-full h-full">
                    {/* 矢印を左 */}
                    <motion.div
                    className="w-2 h-2 border-r-2 border-b-2 border-black -rotate-45"
                    />
                    <span className="font-semibold">Button</span>
                </div>
            </motion.div>
        ),

        Click: (
            <div className={`relative px-8 py-4 bg-gray-400 cursor-pointer z-5 ${className}`}>
                <motion.div
                    className={`absolute -top-1 -left-1 px-8 py-4 bg-sky-300 cursor-pointer ${className}`}
                    whileHover={{ x: 2, y: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* テキスト */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">Button</span>
                </motion.div>
            </div>
        ),

        Flip: (
            <motion.div
                className={`relative px-8 py-4 w-40 h-12 rounded-lg cursor-pointer ${className}`}
                whileHover={{ rotateX: 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d", perspective: 600 }}
                >
                {/* 前面 */}
                <div
                    className="absolute inset-0 flex items-center justify-center bg-purple-600 text-white rounded-lg"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    Button
                </div>

                {/* 背面 */}
                <div
                    className="absolute inset-0 flex items-center justify-center bg-indigo-500 text-white rounded-lg"
                    style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
                >
                    Hover
                </div>
            </motion.div>
        ),

        ColorCycle: (
            <motion.div
                className={`relative px-8 py-4 rounded-full border-2 border-green-600 overflow-hidden cursor-pointer ${className}`}
                whileHover="hovered" // ← 親に hover 状態を渡す
                initial="initial"
                animate="initial"
            >
                {/* 背景1 */}
                <motion.div
                className="absolute -top-full left-0 w-full h-full bg-green-200 z-0"
                variants={{
                    initial: { top: "-100%" },
                    hovered: { top: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* 背景2 */}
                <motion.div
                    className="absolute -top-full left-0 w-full h-full bg-green-600 z-0"
                    variants={{
                    initial: { top: "-100%" },
                    hovered: { top: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
                />

                {/* テキスト */}
                <motion.span    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-green-800"
                variants={{
                    initial: { color: "#16a34a" }, // 元の色
                    hovered: { color: "#fff" },    // ホバー時の色
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}>Button</motion.span>
                </motion.div>
            ),
        
        ColorIntoCenter: (
            <motion.div
                className={`relative px-8 py-4 rounded-sm border-2 border-zinc-400 overflow-hidden cursor-pointer ${className}`}
                whileHover="hovered" // ← 親に hover 状態を渡す
                initial="initial"
                animate="initial"
                variants={{
                    initial: { borderColor: "#9f9fa9" }, // 元の色
                    hovered: { borderColor: "#52525c" },    // ホバー時の色
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                {/* 背景上 */}
                <motion.div
                className="absolute -top-full left-0 w-full h-full bg-zinc-600 z-0"
                variants={{
                    initial: { top: "-100%" },
                    hovered: { top: 0 }
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                />

                {/* 背景右 */}
                <motion.div
                className="absolute top-0 h-full w-full bg-zinc-600"
                variants={{
                    initial: { right: "-100%" },
                    hovered: { right: 0 },
                }}
                transition={{ duration: 0.2, ease: "easeInOut", }}
                />

                {/* 背景下 */}
                <motion.div
                className="absolute left-0 w-full h-full bg-zinc-600"
                variants={{
                    initial: { bottom: "-100%" },
                    hovered: { bottom: 0 },
                }}
                transition={{ duration: 0.2, ease: "easeInOut", }}
                />

                {/* 背景左 */}
                <motion.div
                className="absolute top-0 h-full w-full bg-zinc-600"
                variants={{
                    initial: { left: "-100%" },
                    hovered: { left: 0 },
                }}
                transition={{ duration: 0.2, ease: "easeInOut", }}
                />

                {/* テキスト */}
                <motion.span    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-zinc-600"
                variants={{
                    initial: { color: "#52525c" },
                    hovered: { color: "#fff" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}>Button</motion.span>
                </motion.div>
            ),
            
        ChangeShape: (
            <motion.div
                className={`relative px-8 py-4  cursor-pointer overflow-hidden. bg-transparent ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 背景 */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    variants={{
                        initial: {
                            backgroundColor: "rgba(255, 255, 0, 0)",
                            borderRadius: "4px",
                        },
                        hovered: {
                            backgroundColor: "rgba(255, 200, 0, 1)",
                            borderRadius: "999px",
                        },
                    }}
                    transition={{
                        backgroundColor: {
                            duration: 0.6,
                            ease: "easeInOut",
                        },
                        borderRadius: {
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.3,
                        },
                    }}
                />
                {/* テキスト */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">Button</span>
            </motion.div>
        ),

        SideBrackets: (
            <motion.button
                className={`relative px-8 py-4 ${className}`}
                initial="rest"
                whileHover="hover"
            >

                {/* 左 bracket */}
                <motion.span
                className="absolute left-6 top-1/2 -translate-y-1/2 text-yellow-400 text-2xl"
                variants={{
                    rest: { opacity: 0, x: -10 },
                    hover: { opacity: 1, x: -2 }
                }}
                transition={{ duration: 0.25 }}
                >
                [
                </motion.span>

                {/* ボタンのテキスト */}
                <span className="relative z-10">Button</span>

                {/* 右 bracket */}
                <motion.span
                className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-400 text-2xl"
                variants={{
                    rest: { opacity: 0, x: 10 },
                    hover: { opacity: 1, x: 2 }
                }}
                transition={{ duration: 0.25 }}
                >
                ]
                </motion.span>
            </motion.button>
        ),

        HiddenText: (
            <motion.div
                className={`relative px-8 py-4  cursor-pointer overflow-hidden ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 背景 */}
                <motion.div
                    className="absolute left-0 -bottom-full w-full h-full bg-pink-200 z-1 flex items-center justify-center"
                    variants={{
                        initial: { y: "0%" },
                        hovered: { y: "-100%" }
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <span className="text-white font-semibold">
                        Hover
                    </span>
                </motion.div>
                {/* テキスト */}
                <motion.div
                    className="absolute inset-0 border border-pink-300 flex items-center justify-center"
                    variants={{
                        initial: { y: "0%" },
                        hovered: { y: "-100%" }
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                    <span className="text-center">
                        Button
                    </span>
                </motion.div>
            </motion.div>
        ),

        ColorFlow: (
            <motion.div
                className={`relative group px-8 py-4 rounded-md cursor-pointer overflow-hidden.  flex items-center justify-center ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                    rest: { boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
                    hover: { boxShadow: "0px 8px 20px rgba(0,0,0,0.25)" },
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center justify-center relative w-full">
                    <motion.span
                        className="relative z-10"
                        variants={{
                            rest: { x: 0 },
                            hover: { x: -10 }, // ← ホバーで少し左に動く
                        }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        Button
                    </motion.span>

                    {/* Hover Arrow */}
                    <motion.span
                        className="absolute right-0 text-xl text-red-500"
                        initial={{ opacity: 0 }}
                        variants={{
                            rest: { opacity: 0 },
                            hover: { opacity: 1 },
                        }}
                        transition={{ duration: 0.4 }}
                        >
                        &raquo;
                    </motion.span>
                </div>
            </motion.div>
        ),

        TransformShape: (
            <motion.div
                className={`relative px-8 py-4 cursor-pointer flex items-center justify-center ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                rest: {
                    borderTop: "1px solid rgba(0,0,0,0)",
                    borderRight: "1px solid rgba(0,0,0,0)",
                    borderLeft: "1px solid rgba(0,0,0,0)",
                    borderBottom: "2px solid #8b5cf6",
                    borderRadius: "0px",
                },
                hover: {
                    borderTop: "2px solid #d1d5dc",
                    borderRight: "2px solid #d1d5dc",
                    borderLeft: "2px solid #d1d5dc",
                    borderBottom: "2px solid #d1d5dc",
                    borderRadius: "999px",
                }
                }}
                transition={{ duration: 0.6 }}
            >
                Button
            </motion.div>
        ),

        HoverLine: (
            <motion.button
                className={`relative overflow-hidden border-none bg-emerald-600 text-white font-semibold px-8 py-4 cursor-pointer ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                {/* 上線：右→左 に伸びる */}
                <motion.span
                    className="absolute top-0 right-0 h-0.5 bg-emerald-600 z-20"
                    variants={{
                        rest: { width: 0 },
                        hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* 下線：左→右 に伸びる */}
                <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-emerald-600 z-20"
                    variants={{
                        rest: { width: 0 },
                        hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* 背景 & テキスト変化 */}
                <motion.div
                    className="absolute inset-0 z-0 flex justify-center items-center"
                    variants={{
                    rest: { backgroundColor: "#00c48d" },
                    hover: { backgroundColor: "#ffffff" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <motion.span
                    className="relative z-10"
                    variants={{
                    rest: { color: "#ffffff" },
                    hover: { color: "#00c48d" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
                </motion.div>
            </motion.button>
        ),

        Rotate: (
            <motion.div
                className={`relative px-8 py-4 cursor-pointer flex justify-center items-center bg-transparent text-purple-600 ${className}`}
                initial="initial"
                animate="initial"
                whileHover="hover"
            >
                {/* 外枠（時計回り） */}
                <motion.div
                    className="absolute inset-0 border border-purple-300 pointer-events-none"
                    style={{
                    margin: "auto",
                    }}
                    variants={{
                        initial: {
                            width: "100%",
                            height: "100%",
                            rotate: 0,
                            transition: {
                                width: { duration: 0.25, ease: "easeOut" },
                                height: { duration: 0.25, ease: "easeOut" },
                                rotate: { duration: 0.25 },
                            },
                        },
                        hover: {
                            width: 60,
                            height: 60,
                            rotate: 360,
                            transition: {
                                width: { duration: 0.25, ease: "easeOut" },
                                height: { duration: 0.25, ease: "easeOut" },
                                rotate: {
                                    duration: 1.6,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            },
                        },
                    }}
                />

                {/* 内枠（反時計回り） */}
                <motion.div
                    className="absolute inset-0 border border-purple-300 pointer-events-none"
                    style={{
                        margin: "auto",
                    }}
                    variants={{
                        initial: {
                            width: "100%",
                            height: "100%",
                            rotate: 0,
                            transition: {
                                width: { duration: 0.25, ease: "easeOut" },
                                height: { duration: 0.25, ease: "easeOut" },
                                rotate: { duration: 0.25 },
                            },
                        },
                        hover: {
                            width: 60,
                            height: 60,
                            rotate: -360,
                            transition: {
                                width: { duration: 0.25, ease: "easeOut" },
                                height: { duration: 0.25, ease: "easeOut" },
                                rotate: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            },
                        },
                    }}
                />

                <span className="relative z-10">{type}</span>
            </motion.div>
        ),
    };

    return animations[type];
}