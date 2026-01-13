"use client";

import { motion, Variants } from 'framer-motion';
import type { Splatter, SplatterType } from './splatter.types';
import { STAR_PATH } from '@/assets/svg/icons';

const splatterVariants: Variants = {
    initial: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        filter: 'blur(0rem)',
    },
    animate: (data: { angle: number; scale: number }) => ({
        opacity: 0,
        x: Math.cos(data.angle) * 48,
        y: Math.sin(data.angle) * 48,
        scale: 0,
        rotate: 270,
        filter: 'blur(0.2rem)',
        transition: {
        duration: 0.8,
        ease: 'easeOut',
        },
    }),
};

function RoundShape() {
    return <div className="w-4 h-4 bg-sky-400 rounded-full" />;
}

function RingShape() {
    return <div className="w-3 h-3 border-[0.35rem] border-sky-500 rounded-full" />;
}

function SquareShape() {
    return <div className="w-4 h-4 bg-blue-600" />;
}

function StarShape() {
    return (
        <svg viewBox={STAR_PATH.viewBox} className="w-7 h-7 fill-blue-600">
            <path d={STAR_PATH.path} />
        </svg>
    );
}

const ShapeMap = {
    round: RoundShape,
    ring: RingShape,
    square: SquareShape,
    star: StarShape,
} satisfies Record<SplatterType, React.FC>;

export function SplatterItem({
    splatter,
    onComplete
}: {
    splatter: Splatter;
    onComplete: () => void;
}) {

const Shape = ShapeMap[splatter.type];

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{
                top: splatter.y,
                left: splatter.x,
                transformOrigin: 'center',
            }}
            variants={splatterVariants}
            initial="initial"
            animate="animate"
            custom={{
                angle: splatter.angle,
                scale: splatter.scale,
            }}
            onAnimationComplete={onComplete}
        >
            <Shape />
        </motion.div>
    );
}