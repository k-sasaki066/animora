import { motion } from 'framer-motion';
import { useState } from "react";
import { SplatterItem } from "./SplatterItem";
import type { Splatter, SplatterType } from './splatter.types';
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 350;

export default function SplatterButton() {
    const [splatters, setSplatters] = useState<Splatter[]>([]);
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const scale =
        width
            ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
            : 1;

    const addSplatter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const count = Math.floor(Math.random() * 4) + 5;

        const next = Array.from({ length: count }).map(() => ({
            id: Math.random(),
            type: ['round', 'ring', 'square', 'star'][
                Math.floor(Math.random() * 4)
            ] as SplatterType,
            x: Math.random() * rect.width,
            y: Math.random() * rect.height,
            angle: Math.random() * Math.PI * 2,
            scale: Math.random() * 2 + 0.5,
        }));

        setSplatters((prev) => [...prev, ...next]);
    };

    return (
        <div ref={ref} className="w-full h-full overflow-hidden flex justify-center items-center">
            <motion.div animate={{ scale }} className="relative">
                <button
                    onClick={addSplatter}
                    className="
                        relative w-40 h-12 rounded-xl
                        bg-blue-500 active:bg-blue-600
                        text-white text-xl font-bold
                        shadow-lg active:shadow-none
                        transition-transform duration-100
                        active:translate-y-0.5 active:scale-95
                    "
                >
                    PRESS ME

                    {splatters.map((s) => (
                        <SplatterItem
                            key={s.id}
                            splatter={s}
                            onComplete={() =>
                                setSplatters((prev) =>
                                    prev.filter((p) => p.id !== s.id)
                                )
                            }
                        />
                    ))}
                </button>
            </motion.div>
        </div>
    );
}