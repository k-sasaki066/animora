"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const blobs = [
    { size: 450, color: "#005ffe", stiffness: 50, damping: 20 },
    { size: 270, color: "#ffe5e3", stiffness: 35, damping: 18 },
    { size: 100, color: "#ffcc57", stiffness: 20, damping: 15 },
];

export default function CursorBlobText() {
    // マウス位置
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        };

          window.addEventListener("mousemove", handleMouseMove);
          return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const blobSprings = blobs.map((blob) => ({
        x: useSpring(mouseX, {
            stiffness: blob.stiffness,
            damping: blob.damping,
        }),
        y: useSpring(mouseY, {
            stiffness: blob.stiffness,
            damping: blob.damping,
        }),
    }));

    return (
        <>
            {/* ===== Blobエリア ===== */}
            <div
                ref={containerRef} className="relative h-[50vh] w-full overflow-hidden bg-[#2128bd]">
                    {/* blobs */}
                    {blobs.map((blob, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: blob.size,
                                height: blob.size,
                                backgroundColor: blob.color,
                                x: blobSprings[i].x,
                                y: blobSprings[i].y,
                                left: `-${blob.size / 2}px`,
                                top: `-${blob.size / 2}px`,
                            }}
                        />
                    ))}

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center bg-white mix-blend-screen">
                        <h1 className="text-[3vw] font-bold text-center">
                            HOVER ME!
                        </h1>
                    </div>
                </div>
            {/* Cursor */}
            <motion.div
                className="fixed z-50 rounded-full pointer-events-none"
                style={{
                    left: 0,
                    top: 0,
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
}