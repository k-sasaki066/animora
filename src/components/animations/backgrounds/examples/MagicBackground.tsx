import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function MagicBackground() {
    const { ref, width } =
        useContainerSize<HTMLDivElement>();
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const radius = width ? width / 6 : 100;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();

            setPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={ref}
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