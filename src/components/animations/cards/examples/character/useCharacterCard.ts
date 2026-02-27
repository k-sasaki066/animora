import { useState, useMemo } from "react";
import { CARDS } from "./character";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function useCharacterCard() {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const isMobile = width <= 480;

    const next = () => {
        setIndex((prev) => (prev + 1) % CARDS.length)
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length)
    };

    const current = CARDS[index];

    const stats = useMemo(
        () => [
            { label: "Training", value: `${current.training}S` },
            { label: "Speed", value: current.speed },
            { label: "Cost", value: current.cost },
        ],
        [current]
    );

    const containerClass = isMobile ? "flex flex-col" : "flex";
    const itemBase = "text-center border-white/20";
    const itemLayout = isMobile
        ? "w-full py-1 flex justify-center items-center gap-1"
        : "w-1/3 py-2.5";

    return {
        ref,
        index,
        isOpen,
        setIsOpen,
        next,
        prev,
        current,
        stats,
        containerClass,
        itemBase,
        itemLayout,
        isMobile,
    };
}
