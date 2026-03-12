import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { Heart } from "./Heart";
import { WhiteCat } from "./WhiteCat";
import { ClapCat } from "./ClapCat";
import { LikeRipple } from "./LikeRipple";
import { useContainerSize } from "@/hooks/useContainerSize";

// 基準サイズ（px）
const BASE_WIDTH = 350;

const likeTextVariants: Variants = {
    idle: {
        opacity: 1,
        y: 0,
    },
    hover: {
        opacity: 0,
        y: 8,
    },
    liked: {
        opacity: 0,
        y: 0,
    },
};

const CONFETTI_COLORS = [
    "#7d32f5",
    "#f6e434",
    "#63fdf1",
    "#e672da",
    "#295dfe",
    "#6e57ff",
];

type Confetti = {
    id: number;
    x: number;
    y: number;
    scale: number;
    color: string;
};

export default function PawsHeart() {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(12);
    const [displayCount, setDisplayCount] = useState(12);
    const [hovered, setHovered] = useState(false);
    const [disableHover, setDisableHover] = useState(false);
    const [confetti, setConfetti] = useState<Confetti[]>([]);
    const [rippleKey, setRippleKey] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    const toggleLike = () => {
        if (isAnimating) return;

        if (!liked) {
            setIsAnimating(true);
            setLiked(true);
            setCount(prev => prev + 1);
            setRippleKey(prev => prev + 1);
            spawnConfetti();

            // 表示は遅らせる
            setTimeout(() => {
                setDisplayCount(prev => prev + 1);
            }, 800);

            // すべての演出が終わったら解除
            setTimeout(() => {
                setIsAnimating(false);
            }, 1000);
        } else {
            setDisableHover(true);
            setLiked(false);
            setCount(prev => prev - 1);

            setTimeout(() => {
                setDisplayCount(prev => prev - 1);
            }, 250);

            setTimeout(() => {
                setDisableHover(false)
            }, 250) // アニメ終了後に hover を戻す
        }
    };

    const spawnConfetti = () => {
        const amount = 60;

        const items: Confetti[] = Array.from({ length: amount }).map((_, i) => ({
            id: Date.now() + i,
            x: Math.random() * 520 - 260,
            y: Math.random() * 320 - 160,
            scale: Math.random() * 0.4 + 0.6,
            color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        }));

        setConfetti(items);

        // 自動削除
        setTimeout(() => {
            setConfetti([]);
        }, 1000);
    };

    return (
        <div ref={ref} className="relative w-full h-full flex items-center justify-center">
            <motion.button
                onClick={toggleLike}
                disabled={isAnimating}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`relative inline-flex items-center px-4 py-3 font-bold rounded-md justify-center gap-2 m-auto border-[#f0eceb] border-2 overflow-hidden ${isAnimating ? "cursor-not-allowed" : "cursor-pointer"}`}
                style={{
                    pointerEvents: isAnimating ? "none" : "auto",
                    scale,
                }}
                animate={{
                    borderColor: liked ? "#f9a8d4" : "#e5e7eb",
                    backgroundColor: liked ? "#fce7f3" : "#ffffff",
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: liked ? 0.8 : undefined,
                }}
            >
                <span className="sr-only">Like</span>

                {liked && <LikeRipple trigger={rippleKey} />}

                <div className="relative flex items-center mr-2">
                    {/* ハート */}
                    <motion.div className="shrink-0">
                        <Heart liked={liked} hovered={hovered} disableHover={disableHover}/>
                    </motion.div>

                    {/* テキスト */}
                    <motion.div
                        className="overflow-hidden"
                        initial={{
                            width: 64
                        }}
                        animate={{
                            width: liked ? 0 : 48
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeOut",
                            delay: liked ? 0.8 : undefined,
                        }}
                    >
                        <motion.span
                            className="block text-xl font-bold whitespace-nowrap ml-2"
                            animate={liked ? "liked" : hovered ? "hover" : "idle"}
                            variants={likeTextVariants}
                            transition={{
                                duration: 0.2,
                                ease: "easeOut",
                            }}
                        >
                            Like
                        </motion.span>
                    </motion.div>
                </div>

                <motion.span className="">{displayCount}</motion.span>
                <WhiteCat liked={liked} hovered={hovered} />
                <ClapCat liked={liked} />

            </motion.button>
            {/* Confetti */}
                {confetti.map((c) => (
                    <motion.span
                        key={c.id}
                        className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full pointer-events-none"
                        style={{
                            backgroundColor: c.color
                        }}
                        initial={{
                            x: 0,
                            y: 0,
                            scale: c.scale,
                            opacity: 0,
                        }}
                        animate={{
                            x: c.x,
                            y: c.y,
                            opacity: [0, 0.7, 0],
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.45,
                            times: [0, 0.7, 1],
                        }}
                    />
                ))}
        </div>
    );
}