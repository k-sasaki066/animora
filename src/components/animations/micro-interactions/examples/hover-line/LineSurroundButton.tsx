import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function LineSurroundButton({
    speed = 0.8,
    color = "#000000",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative flex justify-center w-40 h-12 cursor-pointer"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
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
                            duration: speed * 0.3,
                            ease: "easeOut",
                            delay: 0.3,
                        },
                    },
                }}
            >
                BUTTON
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
                    stroke={color}
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
                                duration: speed,
                                ease: "easeInOut",
                            },
                        },
                    }}
                />
                {/* 左側 */}
                <motion.path
                    d="M100 0 H0 V60 H200 V0 H100"
                    stroke={color}
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
                                duration: speed,
                                ease: "easeInOut",
                            },
                        },
                    }}
                />
            </motion.svg>
        </motion.div>
    );
}