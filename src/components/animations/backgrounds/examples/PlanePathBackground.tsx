import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export default function PlanePathBackground() {
    const pathRef = useRef<SVGPathElement | null>(null);
    const progress = useMotionValue(0);

    // パス上の位置を計算
    const x = useTransform(progress, (t) => {
        const path = pathRef.current;
        if (!path) return 0;
        return path.getPointAtLength(t * path.getTotalLength()).x;
    });

    const y = useTransform(progress, (t) => {
        const path = pathRef.current;
        if (!path) return 0;
        return path.getPointAtLength(t * path.getTotalLength()).y;
    });
    
    /** ★ 進行方向の角度を計算 */
    const rotate = useTransform(progress, (t) => {
        const path = pathRef.current;
        if (!path) return 0;

        const length = path.getTotalLength();
        const current = path.getPointAtLength(t * length);
        const next = path.getPointAtLength(
        Math.min(t * length + 1, length)
        );

        const dx = next.x - current.x;
        const dy = next.y - current.y;

        return (Math.atan2(dy, dx) * 180) / Math.PI;
    });

    // アニメーション進行
    useAnimationFrame((time) => {
        progress.set((time / 5000) % 1); // 5秒で一周
    });

    return (
        <svg
            viewBox="0 0 3387 1270"
            className="w-full aspect-video bg-[#215654] rounded-lg"
        >
            {/* Path */}
            <motion.path
                ref={pathRef}
                d="M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179"
                className="fill-none stroke-gray-300"
                strokeWidth="10"
                strokeDasharray="40 30"
                strokeLinecap="round"
                animate={{ strokeDashoffset: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />

            {/* Plane */}
            <motion.g
                style={{ x, y, rotate, transformOrigin: "center", }}
            >
                <polygon className="fill-gray-300" points="-141,-10 199,0 -198,-72" />
                <polygon className="fill-gray-400" points="199,0 -141,-10 -163,63" />
                <polygon className="fill-gray-500" points="-95,39 -113,32 -123,9" />
            </motion.g>
        </svg>
    );
}