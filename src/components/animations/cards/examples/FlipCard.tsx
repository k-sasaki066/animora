"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

type Profile = {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
};

const profiles: Profile[] = [
    {
        id: 1,
        name: "person 1",
        role: "UXリサーチャー",
        description: "餃子が大好き",
        image:
            "https://picsum.photos/id/20/574/322",
    },
    {
        id: 2,
        name: "person 2",
        role: "UIデザイナー",
        description: "インターフェース設計が得意。",
        image:
            "https://picsum.photos/id/26/574/322",
    },
    {
        id: 3,
        name: "person 3",
        role: "フロントエンドエンジニア",
        description: "Reactとアニメーションが好き。",
        image:
            "https://picsum.photos/id/38/574/322",
    },
];

export default function FlipCard() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.8), 1)
        : 1;

    const [activeId, setActiveId] = useState<number | null>(null);

    const handleClick = (id: number) => {
        setActiveId((prev) => (prev === id ? null : id));
    };

    return (
        <div ref={ref} className="h-full w-full bg-[#E6E5E1] flex flex-col items-center justify-start gap-4 overflow-y-auto no-scrollbar py-4">
            {profiles.map((profile) => {
                const isFlip = activeId === profile.id;

                return (
                    <div key={profile.id} className="w-[40%] min-w-60 aspect-square perspective-[1000px] mx-auto origin-top">
                        <motion.div
                            className="relative w-full h-full"
                            style={{ transformStyle: "preserve-3d", scale }}
                            animate={{ rotateY: isFlip ? 180 : 0 }}
                            transition={{ duration: 0.6 }}
                            onHoverStart={() => setActiveId(profile.id)}
                            onHoverEnd={() => setActiveId(null)}
                            onPointerDown={() => handleClick(profile.id)}
                        >
                            {/* Front */}
                            <div
                                className="absolute w-full h-full rounded-lg overflow-hidden"
                                style={{ backfaceVisibility: "hidden" }}
                            >
                                <img
                                    src={profile.image}
                                    alt={profile.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Back */}
                            <div
                                className="absolute w-full h-full bg-[#6ea2fa] text-white flex flex-col items-center justify-center rounded-lg p-4 overflow-y-auto no-scrollbar"
                                style={{
                                    backfaceVisibility: "hidden",
                                    transform: "rotateY(180deg)",
                                }}
                            >
                                <p className="text-3xl font-bold mb-2">
                                    {profile.name}
                                </p>
                                <p className="mb-4">
                                    {profile.role}
                                </p>

                                <div className="border-4 border-white px-6 py-4 font-bold">
                                    <p>{profile.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}