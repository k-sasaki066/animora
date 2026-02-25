"use client";

import { motion } from "framer-motion";
import { Brain, Pencil, ThumbsUp, Wrench, CheckSquare } from "lucide-react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

type Step = {
    day: string;
    titleJa: string;
    titleEn: string;
    icon: React.ReactNode;
    items: string[];
};

const steps: Step[] = [
    {
        day: "Day 1",
        titleJa: "理解",
        titleEn: "Understand",
        icon: <Brain size={20} />,
        items: [
            "課題背景をまとめる",
            "スプリントクエスチョンを明確化",
            "マップをつくる",
            "専門家に話を聞く",
            "ターゲットを決める",
            "課題をまとめる",
        ],
    },
    {
        day: "Day 2",
        titleJa: "発散",
        titleEn: "Diverge",
        icon: <Pencil size={20} />,
        items: [
            "既存解決策を調査",
            "大量にアイデアを出す",
            "アイデアのスケッチ",
            "ソリューションスケッチ作成",
        ],
    },
    {
        day: "Day 3",
        titleJa: "決定",
        titleEn: "Decide",
        icon: <ThumbsUp size={20} />,
        items: [
            "投票で案を選ぶ",
            "ストーリーボード作成",
            "優先順位を決定",
            "スーパー投票で決定",
        ],
    },
    {
        day: "Day 4",
        titleJa: "試作",
        titleEn: "Prototype",
        icon: <Wrench size={20} />,
        items: [
            "プロトタイプを設計",
            "役割を分担",
            "プロトタイプ作成",
            "テストの準備",
        ],
    },
    {
        day: "Day 5",
        titleJa: "検証",
        titleEn: "Validate",
        icon: <CheckSquare size={20} />,
        items: [
            "インタビュー実施",
            "観察と学習",
            "改善点を抽出",
            "次のアクションを決定",
        ],
    },
];

export default function ProcessFlowList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1)
        : 1;

    const isMobile = width ? width < 530 : false;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-start bg-linear-to-b from-[#0EA5E9] to-[#0369A1] text-white overflow-y-auto no-scrollbar z-0">
            <motion.div className="relative w-[90%] mx-auto origin-top" animate={{scale}}>
                <ol>
                    {steps.map((step, index) => (
                        <li
                            key={index}
                            className={`relative grid gap-8 py-10 
                                ${isMobile
                                    ? "grid-cols-1 items-start"
                                    : "grid-cols-[1fr_2fr] items-center"
                                }
                            `}
                        >
                            {/* 縦ライン */}
                            {index !== steps.length - 1 && (
                                <div
                                    className={`absolute -translate-x-1/2 h-full w-1 bg-[#015d8f] z-0 
                                        ${isMobile
                                            ? "top-12 left-6"
                                            : "top-1/2 left-7"
                                        }
                                    `}
                                />
                            )}
                            {/* 左側 */}
                            <div className="flex items-center gap-5">
                                {/* 丸アイコン */}
                                <div className="w-12 h-12 rounded-full bg-[#0C4A6E] flex items-center justify-center shadow-lg z-20">
                                    {step.icon}
                                </div>

                                {/* タイトル */}
                                <div className="w-18 flex-col gap-0.5 text-left">
                                    <p className="text-[#024a70] text-sm font-bold">
                                        {step.day}
                                    </p>
                                    <h2 className="text-xl font-bold">
                                        {step.titleJa}
                                    </h2>
                                    <p className="text-xs opacity-70">
                                        {step.titleEn}
                                    </p>
                                </div>
                            </div>

                            {/* 右側 */}
                            <ol className={`relative ${isMobile ? "pl-[18%]" : "pl-0" }`}>
                                {step.items.map((item, i) => (
                                    <li key={i} className="relative group flex items-center gap-3 py-1">

                                        {/* 縦ライン */}
                                        {i !== step.items.length - 1 && (
                                            <div className="absolute h-full left-3 -translate-x-1/2 top-1/2 w-0.5 bg-[#0369A1]" />
                                        )}

                                        {/* 番号 */}
                                        <div className="relative w-6 h-6 flex items-center justify-center rounded-full z-10 shrink-0 bg-[#075985] group-hover:scale-110 group-hover:bg-[#0369A1] duration-400" >
                                            {i + 1}
                                        </div>

                                        <a href="#" className="relative text-sm text-left opacity-90 transition-all duration-400">
                                            {item}
                                            <span className="absolute left-0 -bottom-1 h-px w-full bg-white/50 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                                        </a>
                                    </li>
                                ))}
                            </ol>

                            {/* 区切り線 */}
                            {index !== steps.length - 1 && (
                                <div className="absolute left-0 right-0 bottom-0 h-px bg-white/20 z-1" />
                            )}
                        </li>
                    ))}
                </ol>
            </motion.div>
        </div>
    );
}
