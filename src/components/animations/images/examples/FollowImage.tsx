"use client"

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function FollowImage() {
    /** マウス追従用 */
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // 動きを少しなめらかに
    const springX = useSpring(x, { stiffness: 150, damping: 20 });
    const springY = useSpring(y, { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        x.set(offsetX * 0.2); // 動きの強さ調整
        y.set(offsetY * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    return (
        <motion.div
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.img
                src="/lavender.jpg"
                className="absolute inset-0 min-w-[120%] h-full object-cover scale-110"
                style={{
                    x: springX,
                    y: springY
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25
                }}
            />
        </motion.div>
    );
}