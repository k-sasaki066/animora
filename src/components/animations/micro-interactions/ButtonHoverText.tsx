import { motion } from "framer-motion";
import { useState } from "react";

interface ButtonHoverTextProps {
    className?: string;
    type: "ChangeText" | "Flow" | "FancyButton" | "Smoke";
}

export function ButtonHoverText({ className = "w-40 h-12", type }: ButtonHoverTextProps) {
    const [isHover, setIsHover] = useState(false);
    const animations = {
        ChangeText: (
            <motion.button
                className={`relative px-8 py-4 rounded-sm bg-amber-500 flex justify-center items-center overflow-hidden ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                    rest: {},
                    hover: {},
                }}
            >

                {/* ボタンのテキスト */}
                <motion.span
                    className="absolute text-white font-semibold tracking-wider"
                    variants={{
                        rest: { y: 0, opacity: 1 },
                        hover: { y: 20, opacity: 0, transition: { duration: 0.3 } },
                    }}
                >
                    Button
                </motion.span>

                {/* 新テキスト */}
                <motion.div
                    className="flex text-white font-semibold tracking-wider absolute"
                    initial="initial"
                    whileHover="hover"
                >
                    
                    {"Thanks".split("").map((char, i) => ( //["T", "h", "a", "n", "k", "s"] 各文字ごとに motion.span を返す。char: 現在の文字、i: その文字のインデックス
                        <motion.span
                        key={i}
                        className="inline-block uppercase"//文字を大文字に強制
                        custom={i} //custom で任意の値（i）を variants に渡す
                        variants={{
                            initial: { opacity: 0, y: -20 },
                            hover: (i: number) => ({
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.25,
                                    delay: i * 0.025, //1 文字ずつ遅延を付ける
                                    ease: [0.5, -1, 0.5, 2],
                                },
                            }),
                            }
                        }
                        >
                        {char}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.button>
        ),

        Flow: (
            <motion.div
                className={`relative group px-8 py-4 rounded-md cursor-pointer overflow-hidden bg-green-600 flex items-center justify-center ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                    <motion.span
                        className="text-white font-semibold"
                        variants={{
                            rest: { x: 0 },
                            hover: { x: -16 }, // ← ホバーで少し左に動く
                        }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        Button
                    </motion.span>

                    {/* Hover Arrow */}
                    <motion.div
                        className="absolute -right-7 h-12 py-2 px-2 text-xl text-white bg-green-400/75 z-10"
                        initial={{ x: 0 }}
                        variants={{
                            rest: { x: 0 },
                            hover: { x: -28 },
                        }}
                        transition={{ duration: 0.3 }}
                        >
                        &raquo;
                    </motion.div>
                
            </motion.div>
        ),

        FancyButton: (
            <motion.div
                className={`relative px-8 py-4 rounded-sm border border-black cursor-pointer overflow-hidden ${className}`}
                // 親のホバーは背景専用にする
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                >
                {/* 背景 */}
                <motion.div
                    className="absolute -bottom-full left-0 w-full h-full bg-black"
                    animate={isHover ? { bottom: 0 } : { bottom: "-100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* テキスト（hovered を使わない） */}
                <div className="relative z-10 w-full h-full flex justify-center items-center space-x-px">
                    {"Button".split("").map((char, i) => (
                    <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ color: "#000" }}
                        animate={{ color: isHover ? "#fff" : "#000" }}
                        transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
                        whileHover={{ y: -4 }}  // ← 個別 hover は正常に動く
                    >
                        {char}
                    </motion.span>
                    ))}
                </div>
            </motion.div>
        ),

        Smoke: (
            <motion.button
                className={`px-8 py-4 rounded-full bg-black text-white font-semibold relative overflow-hidden flex justify-center items-center ${className}`}
                whileHover="hover"
                initial="rest"
            >
                {"Button".split("").map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                        rest: {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: { duration: 0.4 },
                        },
                        hover: {
                            x: [0, 8, -12, 0], // 左右に揺れて飛ぶ
                            y: [0, -6, -12, 0], // 少し浮く
                            opacity: [1, 1, 0, 0, 1],      // 一瞬消える
                            filter: ["blur(0px)", "blur(2px)", "blur(6px)", "blur(10px)", "blur(0px)"],
                            transition: {
                                duration: 1,
                                delay: i * 0.05, // ← 文字ごとにズラす
                                ease: "easeOut",
                            },
                        },
                    }}
                >
                    {char}
                </motion.span>
                ))}
            </motion.button>
        ),
    };

    return animations[type];
}