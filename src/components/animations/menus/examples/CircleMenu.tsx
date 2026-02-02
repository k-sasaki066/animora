"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

type LinkItem = {
    label: string;
    bg: string;
};

const links: LinkItem[] = [
    { label: "link1", bg: "#c0392b" },
    { label: "link2", bg: "#16a085" },
    { label: "link3", bg: "#8e44ad" },
    { label: "link4", bg: "#27ae60" },
    { label: "link5", bg: "#f39c12" },
    { label: "link6", bg: "#2980b9" },
];

export default function CircleMenu() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { ref, height } = useContainerSize<HTMLDivElement>();
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const reduce = useReducedMotion();

    const [bgColor, setBgColor] = useState<string>("#110f3c");

    const radius = height * 0.6;
    const borderSize = radius * 0.021;
    const totalArea = 48;
    const increment = totalArea / (links.length - 1);
    const startPoint = -(totalArea / 2);
    const fontSize = radius * 0.12;
    const linkSize = radius * 0.25;

    const moveFocus = (nextIndex: number) => {
        const clamped =
        (nextIndex + links.length) % links.length;

        setActiveIndex(clamped);
        setBgColor(links[clamped].bg);

        requestAnimationFrame(() => {
            itemRefs.current[clamped]?.focus();
        });
    };

    const handleKeyDown = (index: number) =>
        (e: React.KeyboardEvent<HTMLElement>) => {
            switch (e.key) {

        case "ArrowDown":
        case "ArrowRight":
            e.preventDefault();
            moveFocus(index + 1);
            break;

        case "ArrowUp":
        case "ArrowLeft":
            e.preventDefault();
            moveFocus(index - 1);
            break;

        case "Escape":
            setActiveIndex(null);
            setBgColor("#110f3c");
            (e.currentTarget as HTMLElement).blur();
            break;

        case "Enter":
        case " ":
            e.preventDefault();
            e.currentTarget.click();
            break;
        }
    };

    useEffect(() => {
        if (activeIndex === null) {
            itemRefs.current[0]?.setAttribute("tabindex", "0");
        }
    }, []);

    return (
        <div ref={ref} className="relative w-full h-full">
            <div
                className="absolute inset-0 overflow-hidden transition-colors duration-300"
                style={{ backgroundColor: bgColor }}
            >
                {/* Circle */}
                <div
                    className="absolute border-white rounded-full"
                    style={{
                        width: radius * 2,
                        height: radius * 2,
                        borderWidth: borderSize,
                        top: -radius * 0.2,
                        left: -radius,
                    }}
                />

                {/* Links */}
                <div role="menu" aria-orientation="vertical">
                    {links.map((link, i) => {
                        const deg = startPoint + i * increment;

                        return (
                            <motion.div
                                key={link.label}
                                className="absolute"
                                onHoverStart={() => {
                                    setActiveIndex(i);
                                    setBgColor(link.bg);
                                }}
                                onHoverEnd={() => {
                                    setActiveIndex(null);
                                    setBgColor("#110f3c");
                                }}
                            >
                                <motion.a
                                    key={link.label}
                                    id={`circle-item-${i}`}
                                    role="menuitem"
                                    layout={false}
                                    ref={(el) => {
                                        itemRefs.current[i] = el;
                                    }}
                                    tabIndex={activeIndex === i ? 0 : -1}
                                    onKeyDown={handleKeyDown(i)}
                                    whileTap={{
                                        scale: 0.96,
                                    }}
                                    onFocus={() => {
                                        setActiveIndex(i);
                                        setBgColor(link.bg);
                                    }}
                                    onBlur={() => {
                                        setActiveIndex(null);
                                        setBgColor("#110f3c");
                                    }}
                                    whileHover={{ paddingLeft: radius * 1.25 }}
                                    transition={
                                        reduce
                                            ? { duration: 0 }
                                            :{
                                                duration: 0.2,
                                                ease: "easeOut"
                                            }
                                    }
                                    onClick={(e) => e.preventDefault()}
                                    href="#"
                                    className={`absolute text-white no-underline whitespace-nowrap focus:outline-none focus-visible:outline-none focus-visible:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] `}
                                    style={{
                                        fontSize,
                                        height: linkSize,
                                        lineHeight: `${linkSize}px`,
                                        paddingLeft: radius * 1.2,
                                        left: borderSize,
                                        top: height / 2 - height * 0.1 + borderSize,
                                        transformOrigin: `0px ${linkSize * 0.5}px`,
                                        rotate: deg
                                    }}
                                >
                                    {link.label}
                                </motion.a>
                            </motion.div>
                        );
                    })}
                </div>

                {activeIndex !== null && (
                    // layoutId（移動専用）
                    <motion.div
                        layoutId="hover-line"
                        className="absolute pointer-events-none"
                        style={{
                            left: borderSize,
                            top: height / 2 - height * 0.1 + borderSize,
                            width: radius,
                            height: linkSize - 5,
                        }}
                        transition={
                            reduce
                                ? { duration: 0 }
                                :{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 22,
                                    mass: 0.8,
                                }
                        }
                    >
                        {/* 回転だけ担当 */}
                        <div
                            className="absolute h-full border-r border-white"
                            style={{
                                width: radius,
                                borderRightWidth: borderSize * 2,
                                transformOrigin: `0px ${linkSize * 0.5}px`,
                                transform: `rotate(${startPoint + activeIndex * increment}deg)`,
                                transition: reduce
                                    ? "none"
                                    :"transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                            }}
                        />
                    </motion.div>
                )}
            </div>
        </div>
    );
}