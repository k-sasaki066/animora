import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

export default function FollowImage() {
    /** マウス追従用 */
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // 動きを少しなめらかに
    const springX = useSpring(x, { stiffness: 150, damping: 20 });
    const springY = useSpring(y, { stiffness: 150, damping: 20 });

    const moveStrength = 0.1;

    const [isPointerDown, setIsPointerDown] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isPointerDown && !isHovering) return;

        const rect = e.currentTarget.getBoundingClientRect();

        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        x.set(offsetX * moveStrength);
        y.set(offsetY * moveStrength);
    };

    const resetPosition = () => {
        setIsPointerDown(false);
        setIsHovering(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            onPointerMove={handlePointerMove}

            onPointerDown={() => setIsPointerDown(true)}
            onPointerUp={resetPosition}

            onPointerEnter={() => setIsHovering(true)}
            onPointerLeave={resetPosition}
        >
            <motion.img
                src="/images/samples/sample-20.webp"
                alt=""
                className="absolute inset-0 min-w-[150%] h-[120%] object-cover scale-110"
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