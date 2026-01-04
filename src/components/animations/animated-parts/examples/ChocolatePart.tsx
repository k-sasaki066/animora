"use client"

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ChocolatePart() {

    const rows = 3;
    const cols = 2;
    const blockHeight = 17; // px単位の高さ
    const blockWidth = 100 / cols; // %で幅

    const controls = useAnimation();

    useEffect(() => {
        let isMounted = true; // unmount時に停止
        async function sequence() {
            while (isMounted) {
                // 上から順に消す
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        if (!isMounted) return; // unmount時に中断
                        await controls.start((custom) => {
                            if (custom.row === i && custom.col === j) {
                                return { opacity: 0, transition: { duration: 0 } }; // 一瞬で消す
                            }
                            return {};
                        });
                        await new Promise((r) => setTimeout(r, 500)); // ブロック間の間隔
                    }
                }

                // 全部戻す
                if (!isMounted) return;
                await controls.start({ opacity: 1, transition: { duration: 0 } });
                await new Promise((r) => setTimeout(r, 500));
            }
        }

        sequence();

        return () => {
            isMounted = false; // unmount時に停止
        };
    }, [controls]);

    return (
        <div className="relative w-9 h-20 bg-white overflow-hidden">
            {/* チョコのブロック */}
            {[...Array(rows)].map((_, i) => (
                <div key={i} className="flex">
                    {[...Array(cols)].map((_, j) => (
                        <motion.div
                            key={j}
                            custom={{ row: i, col: j }}
                            animate={controls}
                            className="border border-[#341612] box-border"
                            style={{
                                width: `${blockWidth}%`,
                                height: `${blockHeight}px`,
                                background: `
                                conic-gradient(
                                    from -90deg at calc(100% - 3px) 3px,
                                    #7e3c26 135deg,
                                    #341612 0 270deg,
                                    #0000 0
                                ),
                                conic-gradient(
                                    from 0deg at 3px calc(100% - 3px),
                                    #0000 90deg,
                                    #341612 0 225deg,
                                    #7e3c26 0
                                ),
                                #54281f
                                `,
                                backgroundSize: "17px 17px",
                                backgroundClip: "content-box",
                            }}
                        />
                    ))}
                </div>
            ))}

            {/* 包み紙 */}
            <div className="absolute bottom-0 w-full h-1/3 bg-red-600 border-t-2 border-gray-300" />
        </div>
    );
}