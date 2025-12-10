import { motion } from "framer-motion";
import { useState, useMemo } from "react";
// import { div } from "framer-motion/client";

interface ButtonHoverProps {
    className?: string;
    type: "ExtendLeft" | "DiagonalSwipe" | "DoubleSwipe" | "StopSwipe" | "Passing" | "CircleOut" | "Click" | "Flip" | "ColorCycle" | "ColorIntoCenter" | "ChangeShape" | "HiddenText" | "ColorFlow" | "Mochi" | "Wave" | "BackgroundMoves" | "GradientSlide" | "Toggle" | "PixelHover" | "Bubble";
}

export function ButtonHover({ className = "w-40 h-12 cursor-pointer", type }: ButtonHoverProps) {
    const flexCenter ="flex justify-center items-center"
    const [isChecked, setIsChecked] = useState(false);
    const bubbles = useMemo(() => {
        return [...Array(4)].map(() => ({
            size: 20 + Math.random() * 20,
            left: 1 + Math.random() * 70 ,
            rise: 60 + Math.random() * 40,
            duration: 1.5 + Math.random() * 1.5,
        }));
    }, []);

    const animations = {
        ExtendLeft: (
            <motion.div
                className={`relative rounded-sm border border-gray-300 overflow-hidden ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 背景 */}
                <motion.div
                    className="absolute top-0 w-full h-full bg-gray-400"
                    variants={{
                        initial: { left: "-100%" },
                        hovered: { left: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                {/* テキスト */}
                <motion.span
                    className={`absolute z-10 inset-0 ${flexCenter}`}
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
                className={`relative px-8 py-4 rounded-sm border border-rose-300  overflow-hidden ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 斜め背景 */}
                <motion.div
                    className="absolute -top-40 h-full bg-rose-400"
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
                    className={`absolute inset-0 z-10 ${flexCenter}`}
                    variants={{
                        initial: { color: "#f43f5e" },
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
                className={`relative px-8 py-4 rounded-sm border border-green-400  overflow-hidden ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 斜め背景1 */}
                <motion.div
                    className="absolute -top-40 h-full bg-green-400"
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
                    className="absolute top-14 h-full bg-green-400"
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
                    className={`absolute inset-0 z-10 text-green-500 ${flexCenter}`}
                    variants={{
                        initial: { color: "#22c55e" },
                        hovered: { color: "#fff" },
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
            </motion.div>
        ),

        StopSwipe: (
            <motion.div
                className={`relative px-8 py-4 rounded-sm border border-orange-400  overflow-hidden ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 斜め背景1 */}
                <motion.div
                    className="absolute -top-40 h-full bg-orange-400"
                    style={{
                        width: "200%",
                        height: "200%",
                        rotate: "45deg",
                        transformOrigin: "left center"
                    }}
                    variants={{
                        initial: { left: "-150%" },
                        hovered: { left: "-38%" }
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* テキスト */}
                <motion.span
                    className={`absolute inset-0 z-10 text-orange-500 ${flexCenter}`}
                    variants={{
                        initial: { color: "#f97316" },
                        hovered: { color: "#fff" },
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
            </motion.div>
        ),

        Passing: (
            <motion.div
                className={`relative px-8 py-4 rounded-sm border border-indigo-500 overflow-hidden ${className}`}
                whileHover="hover"
                initial="initial"
                animate="initial"
            >
                {/* 背景 */}
                <motion.div
                className="absolute top-0 w-full h-full bg-indigo-400 z-0"
                variants={{
                    initial: { left: "-100%" },
                    hover: { left: "100%" }
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                />
                {/* テキスト */}
                <span
                    className={`absolute inset-0 z-10 ${flexCenter}`}
                >
                    Button
                </span>
            </motion.div>
        ),

        CircleOut: (
            <motion.div
                className={`relative px-8 py-4 rounded-sm border border-gray-300  overflow-hidden ${className}`}
                whileHover="hover"
                initial="initial"
                animate="initial"
            >
                {/* 円エフェクト */}
                <motion.div
                className="absolute bg-gray-400 rounded-full w-5 h-5 top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2"
                variants={{
                    initial: { scale: 0, opacity: 0 },
                    hover: { scale: 10, opacity: 1 },
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
                />

                {/* テキスト */}
                <motion.span
                    className={`absolute inset-0 z-10 ${flexCenter}`}
                    variants={{
                        initial: { color: "#4a5565" },
                        hover: { color: "#fff" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
            </motion.div>
        ),

        Click: (
            <div className={`relative px-8 py-4 bg-gray-400 z-5 ${className}`}>
                <motion.div
                    className={`absolute -top-1 -left-1 px-8 py-4 bg-sky-300  ${className}`}
                    whileHover={{ x: 3, y: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* テキスト */}
                    <span className="absolute inset-0 flex justify-center items-center">Button</span>
                </motion.div>
            </div>
        ),

        Flip: (
            <motion.div
                className={`relative px-8 py-4 rounded-lg ${className}`}
                whileHover={{ rotateX: 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d", perspective: 600 }}
                >
                {/* 前面 */}
                <div
                    className={`absolute inset-0  bg-purple-600 text-white rounded-lg ${flexCenter}`}
                >
                    Button
                </div>

                {/* 背面 */}
                <div
                    className={`absolute inset-0 bg-indigo-500 text-white rounded-lg ${flexCenter}`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
                >
                    Hover
                </div>
            </motion.div>
        ),

        ColorCycle: (
            <motion.div
                className={`relative px-8 py-4 rounded-full border-2 border-green-600 overflow-hidden ${className}`}
                whileHover="hover"
                initial="initial"
            >
                {/* 背景1 */}
                <motion.div
                className="absolute left-0 w-full h-full bg-green-200 z-0"
                variants={{
                    initial: { top: "-100%" },
                    hover: { top: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeInOut", }}
                />

                {/* 背景2 */}
                <motion.div
                    className="absolute left-0 w-full h-full bg-green-600 z-1"
                    variants={{
                        initial: { top: "-100%" },
                        hover: { top: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
                />

                {/* テキスト */}
                <motion.span className={`absolute inset-0 z-10 ${flexCenter}`}
                variants={{
                    initial: { color: "#16a34a" },
                    hover: { color: "#fff" },
                }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
            </motion.div>
        ),
        
        ColorIntoCenter: (
            <motion.div
                className={`relative px-8 py-4 rounded-sm border-2 overflow-hidden ${className}`}
                whileHover="hovered" // ← 親に hover 状態を渡す
                initial="initial" //初期状態を "initial" として表示する
                animate="initial" //ホバーしていないときは常に "initial" の状態に戻す
                variants={{
                    initial: { borderColor: "#9f9fa9" },
                    hovered: { borderColor: "#52525c" },
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                {/* 背景上 */}
                <motion.div
                    className="absolute left-0 w-full h-full bg-zinc-600"
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
                <motion.span
                    className={`absolute inset-0 z-10 ${flexCenter}`}
                    variants={{
                        initial: { color: "#52525c" },
                        hovered: { color: "#fff" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    Button
                </motion.span>
            </motion.div>
        ),

        ChangeShape: (
            <motion.div
                className={`relative px-8 py-4  overflow-hidden ${className}`}
                whileHover="hover"
                initial="initial"
            >
                {/* 背景 */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    variants={{
                        initial: {
                            backgroundColor: "#FFFF0000",
                            borderRadius: "4px",
                        },
                        hover: {
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
                <span className={`absolute inset-0 ${flexCenter}`}>Button</span>
            </motion.div>
        ),


        HiddenText: (
            <motion.div
                className={`relative px-8 py-4  overflow-hidden ${className}`}
                whileHover="hovered"
                initial="initial"
                animate="initial"
            >
                {/* 背景 */}
                <motion.div
                    className={`absolute left-0 w-full h-full bg-pink-300 ${flexCenter}`}
                    variants={{
                        initial: { bottom: "-100%" },
                        hovered: { bottom: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <span className="text-white font-semibold">
                        Hover
                    </span>
                </motion.div>
                {/* テキスト */}
                <motion.div
                    className={`absolute w-full h-full left-0 border border-pink-300 ${flexCenter}`}
                    variants={{
                        initial: { top: 0 },
                        hovered: { top: "-100%" }
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
                className={`relative group px-8 py-4 rounded-md overflow-hidden ${className} ${flexCenter}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                    rest: { boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
                    hover: { boxShadow: "0px 8px 20px rgba(0,0,0,0.25)" },
                }}
                transition={{ duration: 0.3 }}
            >
                <div className={`relative w-full ${flexCenter}`}>
                    <motion.span
                        className="relative"
                        variants={{
                            rest: { x: 0 },
                            hover: { x: -10 },
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

        Mochi: (
            <div className={`relative w-40 h-12 ${className}`} style={{ filter: "url(#goo)" }}>
                <motion.div
                    className="relative w-full h-full inline-block rounded-xl" initial="rest"
                    whileHover="hover"
                    animate="rest"
                >
                    {/* 上の丸 */}
                    <motion.div
                    className="absolute bg-gray-400 rounded-full z-0"
                    style={{
                        width: "36%",   // 親幅の36%
                        height: "85%",  // 親高さの85%
                        top: "-20%",    // 親上端より少し上
                        left: "22%",    // 親幅の22%左から
                    }}
                    variants={{
                        rest: { scale: 0 },
                        hover: { scale: 1.15 }
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    />

                    {/* 下の丸 */}
                    <motion.div
                    className="absolute bg-gray-400 rounded-full z-0"
                    style={{
                        width: "36%",
                        height: "85%",
                        bottom: "-20%",
                        right: "20%",
                    }}
                    variants={{
                        rest: { scale: 0 },
                        hover: { scale: 1.15 }
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    />

                    {/* ボタン本体 */}
                    <button
                    className="relative w-full h-full rounded-xl font-bold text-white bg-gray-400"
                    >
                    Button
                    </button>
                </motion.div>
            </div>
        ),

        Wave: (
            <motion.button
                className={`relative px-8 py-4 font-bold uppercase text-indigo-400 border-2 border-blue-500 ${className} ${flexCenter}`}
                style={{ filter: "url(#goo)" }}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >

                {/* Blob container */}
                <span className="absolute inset-0 -z-10 flex overflow-hidden">
                {[0, 1, 2, 3].map((i) => (
                    <motion.span
                    key={i}
                    className="flex-1 bg-blue-500 rounded-full"
                    style={{ height: "180%" }}
                    variants={{
                        rest: {
                        y: "100%",
                        scale: 1.3,
                        transition: {
                            duration: 0.8,
                            delay: i * 0.1,
                            ease: "easeOut",
                        },
                        },
                        hover: {
                        y: -8,
                        scale: 1.3,
                        transition: {
                            duration: 0.8,
                            delay: i * 0.08,
                            ease: "easeOut",
                        },
                        },
                    }}
                    />
                ))}
                </span>

                {/* ボタンテキスト */}
                <motion.span
                    className={`z-2 ${flexCenter}`}
                    variants={{
                        rest: { color: "#3B82F6" },
                        hover: { color: "#fff" },
                    }}
                >
                Button
                </motion.span>

                {/* 外側の枠 */}
                <motion.span
                className="absolute inset-0 border-2 border-gray-300"
                variants={{
                    rest: { scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
                    hover: { scale: 0.9, transition: { duration: 0.5, ease: "easeInOut" } },
                }}
                />
            </motion.button>
        ),

        BackgroundMoves: (
            <motion.button
                className={`
                px-8 py-4 rounded-sm border-3 font-bold
                bg-transparent 
                border-neutral-200 text-neutral-400
                transition-all duration-300 
                ${className} ${flexCenter}
                `}
                initial={{
                    backgroundPosition: "0 0",
                }}
                whileHover={{
                    borderColor: "#50514f",
                    color: "#50514f",
                    backgroundImage:
                        "repeating-linear-gradient(-25deg, #e5e5e5, #e5e5e5 3px, transparent 4px, transparent 7px)", //グレーの帯を 3px の幅で描く→直後に 1px だけ透明→透明部分をさらに 7px まで拡大
                    backgroundSize: "12px 16px", //背景画像を 12px × 16px のタイルとして配置する
                    backgroundPosition: ["0px 0px", "300px 0px"], //背景を 右へ300px スライドさせる指定
                }}
                transition={{
                    backgroundPosition: {
                        repeat: Infinity,
                        duration: 5,
                        ease: "linear",
                    },
                    duration: 0.8,
                }}
            >
                BUTTON
            </motion.button>
        ),

        GradientSlide: (
            <motion.div
                className={`
                    ${className} ${flexCenter}
                    px-8 py-4 rounded-lg text-white font-semibold
                    bg-size-[200%_auto]
                    bg-linear-to-r from-[#fbc2eb] via-[#a6c1ee] to-[#fbc2eb]
                `}
                initial={{ backgroundPosition: "0% center" }}
                whileHover={{ backgroundPosition: "100% center" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                Button
            </motion.div>
        ),

        Toggle: (
            <motion.div
                className="bg-stone-600/50 rounded-full w-30 h-12 flex items-center"
                onClick={() => setIsChecked(!isChecked)}
            >
                <motion.div
                    className="relative w-10 h-10 rounded-full"
                    animate={{
                        rotate: isChecked ? 360 : 0,
                        backgroundColor: isChecked ? "#8BC34A" : "#c34a4a",
                        x: isChecked ? 74 : 6,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {/* 線1 */}
                    <motion.div
                    className="absolute bg-white h-1 rounded-full"
                    animate={{
                        width: isChecked ? 26 : 30,
                        rotate: -45,
                        x: isChecked ? 11 : 5,
                        y: isChecked ? 20 : 18,
                    }}
                    transition={{ duration: 0.4 }}
                    />

                    {/* 線2 */}
                    <motion.div
                    className="absolute bg-white h-1 rounded-full"
                    animate={{
                        width: isChecked ? 16 : 30,
                        rotate: 45,
                        x: isChecked ? 3 : 5,
                        y: isChecked ? 23 : 18,
                    }}
                    transition={{ duration: 0.4 }}
                    />
                </motion.div>
            </motion.div>
        ),

        PixelHover: (
            <motion.div
                className={`relative border border-red-500 text-black uppercase bg-position-[180px] ${className} ${flexCenter}`
                }
                style={{
                    backgroundSize: "180px",
                }}
                whileHover="hover"
                variants={{
                    hover: {
                        color: "#ffffff", 
                        backgroundImage:
                        "url(https://i.postimg.cc/wBXGXbWN/pixel.png)",
                        backgroundPositionY: [
                            "0px",
                            "-60px",
                            "-120px",
                            "-180px",
                            "-240px",
                            "-300px",
                            "-360px",
                            "-420px",
                            "-480px",
                        ], //コマ送りで背景画像をずらす
                        transition: {
                            duration: 0.8,
                            ease: "linear",
                            times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
                        },
                    },
                }}
            >
                Button
            </motion.div>
        ),

        Bubble: (
            <div className="relative inline-block"
            style={{ filter: "url(#goo)" }}>

                {/* Main Button */}
                <motion.button
                className={`relative px-6 py-3 rounded-xl text-white bg-purple-500 ${className}`}
                style={{ filter: "url(#goo)" }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
                >
                Button

                    {/* Bubbles container */}
                    <div className="absolute inset-0 pointer-events-none -z-1">
                        {bubbles.map((b, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-purple-500 rounded-full"
                                style={{
                                    width: b.size,
                                    height: b.size,
                                    left: `${b.left}%`,
                                    bottom: 0,
                                    opacity: 1,
                                }}
                                animate={{
                                    y: [0, -b.rise],
                                    opacity: [1, 1, 0.9, 0.3, 0],
                                    scale: [1, 0.8, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: b.duration,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </motion.button>
            </div>
        ),
    };

    return (
        <>
            {/* Gooey フィルター定義 */}
            <svg style={{ display: "none" }}>
                <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 30 -15
                    " //20 はアルファ値のスケーリング（大きいほど強く結合）、-15 はしきい値（小さいほど余白・影が残る）
                    result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </svg>

            {animations[type]}
        </>
    );
}