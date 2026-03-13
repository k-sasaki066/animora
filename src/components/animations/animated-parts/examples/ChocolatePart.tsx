import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function ChocolatePart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const rows = 3;
    const cols = 2;

    const baseSize = width ? Math.min(width * 0.18, 100): 40; // チョコ全体の幅
    const blockHeight = baseSize / rows;
    const blockWidth = baseSize / cols;

    const patternSize = Math.min(blockWidth, blockHeight);
    const corner = patternSize * 0.18;

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
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <div
                className="relative bg-white overflow-hidden"
                style={{
                    width: baseSize,
                    height: baseSize * 1.6,
                }}
            >
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
                                    width: `${blockWidth}px`,
                                    height: `${blockHeight}px`,
                                    backgroundImage: `
                                        conic-gradient(
                                        from -90deg at calc(100% - ${corner}px) ${corner}px,
                                        #7e3c26 135deg,
                                        #341612 0 270deg,
                                        transparent 0
                                        ),
                                        conic-gradient(
                                        from 0deg at ${corner}px calc(100% - ${corner}px),
                                        transparent 90deg,
                                        #341612 0 225deg,
                                        #7e3c26 0
                                        )
                                    `,
                                    backgroundColor: "#54281f",
                                    backgroundSize: `${blockWidth}px ${blockHeight}px`,
                                    backgroundClip: "content-box",
                                }}
                            />
                        ))}
                    </div>
                ))}

                {/* 包み紙 */}
                <div className="absolute bottom-0 w-full h-1/3 bg-red-600 border-t-2 border-gray-300" />
            </div>
        </div>
    );
}