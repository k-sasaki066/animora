"use client";

import { motion } from 'framer-motion';

type LikeRippleProps = {
    trigger: number;
};

export function LikeRipple({ trigger }: LikeRippleProps) {
    return (
        <motion.div
            key={trigger}
            className="absolute rounded-full pointer-events-none top-0 left-8 z-20"
            style={{
                width: 44,
                height: 44,
                backgroundColor: "rgba(223, 61, 206, 0.5)",
            }}
            initial={{
                scale: 0,
                opacity: 1,
            }}
            animate={{
                scale: 1,
                opacity: 0,
            }}
            transition={{
                scale: {
                    duration: 0.15,
                    ease: "easeOut",
                    delay: 0.45,
                },
                opacity: {
                    duration: 0.2,
                    ease: "linear",
                    delay: 0.7,
                },
            }}
        />
    );
}