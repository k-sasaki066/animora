import { motion } from "framer-motion";
// import { div } from "framer-motion/client";

interface ButtonHoverProps {
    className?: string;
    type: "ExtendLeft" | "Passing" | "ArrowExtend" | "Click" | "Flip" | "ColorCycle";
}

export function ButtonHover({ className = "w-40 h-12", type }: ButtonHoverProps) {
    const baseClass = `rounded-full ${className}`;
    const animations = {

        ExtendLeft: (
            <motion.div
                className={`relative px-8 py-4 rounded-full border-2 border-gray-800 overflow-hidden cursor-pointer ${className}`}
                whileHover="hovered"
                initial="initial"
            animate="initial"
            >
                {/* 背景 */}
                <motion.div
                className="absolute top-0 -left-full w-full h-full bg-yellow-400 z-0"
                variants={{
                    initial: { left: "-100%" },
                    hovered: { left: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                {/* テキスト */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">Button</span>
                {/* ホバー時の背景が動作するので一番上に配置 */}
            </motion.div>
        ),

        Passing: (
            <motion.div
                className={`relative px-8 py-4 rounded-full border-2 border-gray-800 overflow-hidden cursor-pointer ${className}`}
                whileHover="hovered" // ← 親に hover 状態を渡す
                initial="initial"
                animate="initial"
            >
                {/* 背景 */}
                <motion.div
                className="absolute top-0 -left-full w-full h-full  bg-lime-400 z-0"
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
                    className={`absolute -top-1 -left-1 px-8 py-4 bg-yellow-400 cursor-pointer ${className}`}
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
    };

    return animations[type];
}