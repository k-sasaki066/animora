import { motion } from "framer-motion";

interface ButtonAnimationProps {
    className?: string;
    type: "Floating" | "Bulbul" | "Thump" | "Swaying" | "Shaky" | "Sparkling" | "Ripples" | "Skew" | "Spin" | "Jiggly" | "ClickMove" | "GradientMove";
}

export function ButtonAnimation({ className = "w-40 h-12", type }: ButtonAnimationProps) {
    const baseClass = `rounded-full ${className}`;
    const animations = {

        Floating: (
            <motion.div
                className={`px-8 py-4 rounded-full cursor-pointer bg-rose-400 ${className}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
            </motion.div>
        ),

        Bulbul: (
            <motion.div
                className={`text-white rounded-full cursor-pointer bg-lime-500 ${className}`}
                animate={{
                x: [0, 0, -8, 10, -4, 12, 0], // CSS の keyframes の translateX を配列で表現
                }}
                transition={{
                duration: 1,    // 1秒で1周
                repeat: Infinity,
                ease: "linear",
                }}
            >
            </motion.div>
        ),

        Thump: (
            <motion.div
                className={`px-8 py-4 rounded-full cursor-pointer bg-fuchsia-400 ${className}`}
                animate={{ scale: [1, 1.1, 1, 1, 1.1, 1] }} // dokundokun の keyframes
                transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
            >
            </motion.div>
        ),

        Swaying: (
            <motion.div
                className={`px-8 py-4 rounded-full cursor-pointer bg-indigo-400 ${className}`}
                animate={{ rotate: [0, -2, 0, 2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
        ),

        Shaky: (
            <motion.div
                className={`px-8 py-4 rounded-full cursor-pointer bg-sky-400 ${className}`}
                animate={{
                y: [0, 2, 2, 2, 0],
                rotate: [0, 1, 0, -1, 0]
                }}
                transition={{
                duration: 0.1,   // CSSの0.1s×4みたいなイメージで短め
                repeat: Infinity,
                ease: "linear"
                }}
            >
            </motion.div>
        ),

        Sparkling: (
            <motion.div
                className={`${baseClass} overflow-hidden bg-amber-400 relative`}
            >
                <motion.div
                className="absolute top-0 left-18 w-[200px] h-full bg-white rounded-full"
                animate={{
                    scale: [0, 0, 0, 8],
                    rotate: [45, 45, 45, 45],
                    opacity: [0, 0.5, 1, 0],
                }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                />
            </motion.div>
        ),

        Ripples: (
            <div className="relative flex justify-center items-center">
                <motion.div
                    className="absolute rounded-full border  bg-purple-300"
                    style={{
                    width: "100%",
                    height: "100%",
                    }}
                    animate={{
                    scale: [1.1, 1.3],
                    opacity: [0.5, 0],
                    }}
                    transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    }}
                />
                {/* ボタン本体 */}
                <motion.button
                    className={`relative px-8 py-4 rounded-full bg-purple-400 ${className}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                </motion.button>
            </div>
        ),

        Skew: (
            <motion.div
                className={`px-8 py-4 rounded-full cursor-pointer bg-pink-300 ${baseClass}`}
                animate={{ skewX: [-20, 20, -20] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
        ),

        Spin: (
            <motion.div
                className={`cursor-pointer bg-zinc-500 ${className}`}
                animate={{
                rotateX: [0, 0, 180,],
                scale: [1, 1, 1],
                }}
                transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
                }}
            />
        ),

        Jiggly: (
            <motion.div
                className={`px-8 py-4 rounded-full cursor-pointer bg-linear-to-r from-yellow-500 via-red-500 to-pink-500 ${baseClass}`}
                animate={{
                scaleX: [0.8, 1, 1],
                scaleY: [1, 1, 1.2, 1],
                }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
            </motion.div>
        ),

        ClickMove: (
            <motion.div
                className={`px-8 py-4 cursor-pointer bg-teal-400 text-white ${className}`}
                animate={{
                    y: [0, 0, 0, 0, 3, 0, 3, 0],
                    boxShadow: [
                        "0 3px 0 rgba(0,0,0,0.3)",
                        "0 3px 0 rgba(0,0,0,0.3)",
                        "0 3px 0 rgba(0,0,0,0.3)",
                        "0 3px 0 rgba(0,0,0,0.3)",
                        "0 0 0 rgba(0,0,0,0.3)",
                        "0 3px 0 rgba(0,0,0,0.3)",
                        "0 0 0 rgba(0,0,0,0.3)",
                        "0 3px 0 rgba(0,0,0,0.3)",
                    ],
                }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                whileTap={{
                    boxShadow: "0 0 0 rgba(0,0,0,0)", // クリック中は影なし
                }}
            />
        ),

        GradientMove: (
            <motion.div
                className={`px-8 py-4 rounded-full cursor-pointer ${className}`}
                style={{
                    background: "linear-gradient(90deg,#fe447c, #364f6b)",
                    backgroundSize: "500% 500%",
                }}
                animate={{
                    backgroundPositionX: ["0%", "100%"],  // 横方向にアニメーション
                    backgroundPositionY: ["50%", "50%"], // 縦は固定
                }}
                transition={{
                    duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"
                }}
            />
        ),
    };

    return animations[type];
}