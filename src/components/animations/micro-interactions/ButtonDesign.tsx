import { motion } from "framer-motion";

interface ButtonDesignProps {
    className?: string;
    type: "SideBrackets" | "TransformShape" | "HoverLine" | "ArrowExtend" | "Sporty" | "HoverOutline" | "Hover4Corner" | "HoverSurround" | "PileUp" | "Parallelogram" | "Parallelogram2" | "OutlineHover";
}

export function ButtonDesign({ className = "w-40 h-12", type }: ButtonDesignProps) {

  // 左側枠線アニメーション
  const leftLineVariants = {
    hover: {
      pathLength: 1, // pathLength 0→1で描画
    },
    initial: { pathLength: 0 },
  };

  // 右側枠線アニメーション
  const rightLineVariants = {
    hover: {
      pathLength: 1,
    },
    initial: { pathLength: 0 },
  };
    
    const animations = {

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

        Sporty: (
            <motion.a
                href="#"
                className={`
                    relative inline-flex items-center justify-center 
                    font-bold uppercase text-transparent bg-clip-text
                    bg-linear-to-r from-[#ff8282] to-[#e178ed]
                    ${className}
                `}
                whileHover="hover"
                initial="rest"
                animate="rest"
            >Button

                {/* SVG border */}
                <motion.svg
                    className="absolute inset-0" //ボタン全体を覆う
                    viewBox="0 0 160 48"   // ← w-40 h-12
                    preserveAspectRatio="none"
                >
                    {/* SVG 内で「グラデーション色」を定義 */}
                    <defs> 
                        <linearGradient id="grad1">
                            <stop offset="0%" stopColor="#FF8282" />
                            <stop offset="100%" stopColor="#E178ED" />
                        </linearGradient>
                    </defs>

                    {/* 線が走る アニメーション */}
                    <motion.rect
                        x="2"
                        y="2"
                        width="156"
                        height="44"
                        rx="20"
                        fill="none"
                        stroke="url(#grad1)"
                        strokeWidth="4"
                        vectorEffect="non-scaling-stroke"
                        variants={{
                            rest: {
                            strokeDasharray: "220 0", //見える線の長さ,空白部分の長さ
                            strokeDashoffset: 0,
                            transition: { duration: 0.6, ease: "easeInOut" },
                            },
                            hover: {
                            strokeDasharray: "120 320",
                            strokeDashoffset: 260,
                            transition: { duration: 0.6, ease: "easeInOut" },
                            },
                        }}
                    />
                </motion.svg>
            </motion.a>
        ),

        HoverOutline: (
            <motion.div
                className={`relative cursor-pointer ${className}`}
                whileHover="hover"
                initial="initial"
            >
                {/* SVG の線 */}
                <motion.svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 150 40"
                fill="none"
                >
                <motion.rect
                    x="3"
                    y="3"
                    width="144"
                    height="34"
                    rx="4"
                    stroke="#009FFD"
                    strokeWidth="2"
                    variants={{
                    initial: {
                        strokeDasharray: "85 400",
                        strokeDashoffset: -200,
                        stroke: "#009FFD",
                        strokeWidth: 2,
                    },
                    hover: {
                        strokeDasharray: "50 0",
                        strokeDashoffset: 0,
                        stroke: "#06D6A0",
                        strokeWidth: 1,
                        transition: { duration: 1, ease: "easeInOut" },
                    },
                    }}
                />
                </motion.svg>

                {/* テキスト */}
                <span className="absolute inset-0 flex items-center justify-center text-gray font-light">
                Button
                </span>
            </motion.div>
        ),

        Hover4Corner: (
            <motion.button
                className={`relative overflow-hidden  bg-gray-200 text-white font-semibold px-8 py-4 cursor-pointer ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                {/* 線1 */}
                <motion.span
                    className="absolute top-0 left-0 h-0.5 bg-emerald-600 z-20"
                    variants={{
                        rest: { width: 0 },
                        hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* 線2： */}
                <motion.span
                    className="absolute top-0 right-0 w-0.5 bg-emerald-600 z-20"
                    variants={{
                        rest: { height: 0 },
                        hover: { height: "100%" },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* 線3： */}
                <motion.span
                    className="absolute bottom-0 right-0 h-0.5 bg-emerald-600 z-20"
                    variants={{
                        rest: { width: 0 },
                        hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* 線4 */}
                <motion.span
                    className="absolute bottom-0 left-0 w-0.5 bg-emerald-600 z-20"
                    variants={{
                        rest: { height: 0 },
                        hover: { height: "100%" },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* 背景 & テキスト変化 */}
                <motion.div
                    className="absolute inset-0 z-0 flex justify-center items-center"
                    variants={{
                    rest: { backgroundColor: "#e5e7eb" },
                    hover: { backgroundColor: "#ffffff" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <motion.span
                    className="relative z-10"
                    variants={{
                    rest: { color: "#99a1af" },
                    hover: { color: "#00c48d" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
                </motion.div>
            </motion.button>
        ),

        HoverSurround: (
            <motion.button
                className={`relative font-semibold px-8 py-4 cursor-pointer ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                {/* 線1 */}
                <motion.span
                    className="absolute bottom-0 right-0 h-0.5 bg-orange-400 z-20"
                    variants={{
                        rest: { width: 24 },
                        hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* 線2： */}
                <motion.span
                    className="absolute bottom-0 right-0 w-0.5 bg-orange-400 z-20"
                    variants={{
                        rest: { height: 24 },
                        hover: { height: "100%" },
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* 線3： */}
                <motion.span
                    className="absolute top-0 left-0 h-0.5 bg-orange-400 z-20"
                    variants={{
                        rest: { width: 24 },
                        hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* 線4 */}
                <motion.span
                    className="absolute top-0 left-0 w-0.5 bg-orange-400 z-20"
                    variants={{
                        rest: { height: 24 },
                        hover: { height: "100%" },
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* 背景 & テキスト変化 */}
                <motion.div
                    className="absolute w-38 h-10 top-1 left-1 z-0 flex justify-center items-center"
                    variants={{
                    rest: { backgroundColor: "#e5e7eb" },
                    hover: { backgroundColor: "#fb923c" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <motion.span
                    className="relative z-10"
                    variants={{
                    rest: { color: "#99a1af" },
                    hover: { color: "#fff" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
                </motion.div>
            </motion.button>
        ),

        PileUp: (
            <motion.button
                className={`relative px-8 py-4 cursor-pointer  ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                {/* 枠線1 */}
                <motion.div
                    className="absolute border border-black z-20"
                    variants={{
                        rest: { top: -3, left: -3, width: "100%", height: "100%" },
                        hover: { top: 0, left: 0, width: "100%", height: "100%" },
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                />

                {/* 枠線2： */}
                <motion.div
                    className="absolute border border-black z-20"
                    variants={{
                        rest: { top: 3, left: 3, width: "100%", height: "100%" },
                        hover: { top: 0, left: 0, width: "100%", height: "100%" },
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                />

                {/* テキスト */}
                <motion.div className="relative w-full h-full z-10 flex justify-center items-center">
                    <span
                    className="text-black-500"
                >Button</span>
                </motion.div>
            </motion.button>
        ),
        Parallelogram: (
            <motion.button
                className={`relative font-semibold px-8 py-4 cursor-pointer overflow-hidden ${className}`}
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
                    className="absolute inset-1 z-0 flex justify-center items-center"
                >
                    <span
                    className="relative z-10 text-orange-600"
                    >
                    Button
                    </span>
                </div>
            </motion.button>
        ),

        Parallelogram2: (
            <motion.button
                className={`relative font-semibold px-8 py-4 cursor-pointer overflow-hidden ${className}`}
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
                    className="absolute inset-1 z-0 flex justify-center items-center"
                >
                    <span
                    className="relative z-10 text-blue-600"
                    >
                    Button
                    </span>
                </div>
            </motion.button>
        ),

        OutlineHover: (
            <motion.div
            className={`relative inline-flex items-center justify-center cursor-pointer ${className}`}
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
    };

    return animations[type];
}