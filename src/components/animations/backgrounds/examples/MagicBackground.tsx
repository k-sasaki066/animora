"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagicBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [radius, setRadius] = useState(100);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();

            setPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // カード幅に応じて半径を設定
    useEffect(() => {
        if (!containerRef.current) return;
        const resizeObserver = new ResizeObserver(() => {
            const width = containerRef.current?.offsetWidth || 200;
            setRadius(width / 6);
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video overflow-hidden"
            style={{
                backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/hover-reveal.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h2
                className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[4vw] font-bold text-white z-10"
            >
                SEARCH
            </h2>

            {/* 外側を黒くするレイヤー */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                    background: `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0) ${radius}px, rgba(0,0,0,1) ${radius}px, rgba(0,0,0,1) 100%)`,
                }}
            />
        </div>
    );
}