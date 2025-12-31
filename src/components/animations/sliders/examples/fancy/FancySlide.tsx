import { motion, Variants } from "framer-motion";
import { FancyConfig } from "@/lib/responsive/fancyConfig";
import { slides } from "./sliderData";

interface FancySlideProps {
    active: boolean;
    title: string;
    image: string;
    direction: number;
    config: FancyConfig
}

const bgVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 1,
        filter: "blur(0px)",
    }),
    center: {
        x: "0%",
        opacity: 1,
        filter: "blur(6px)",
        transition: {
            x: {
                duration: 0.8,
                ease: "easeInOut",
            },
            filter: {
                delay: 0.8,
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    },
};

const cardVariants: Variants = {
    enter: {
        opacity: 0,
        scale: 1,
    },
    center: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1, // 背景が落ち着いてから表示
            duration: 0.3,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.3, // ← ゆっくり消える
            ease: "easeInOut",
        },
    },
};

export function FancySlide({
    title,
    image,
    direction,
    config,
    index,
}: FancySlideProps & { direction: number; index: number; }) {
    // ループ用に1枚目を末尾に追加
    const loopedSlides = [...slides, slides[0]];

    return (
        <motion.div className="absolute inset-0 flex items-center justify-center">
            {/* 背景 */}
            <motion.div
                className="absolute inset-0 flex"
                initial={false}
                animate={{ x: -index * 100 + "%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                {loopedSlides.map((slide, i) => (
                    <motion.div
                        key={i}
                        className="shrink-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                        variants={bgVariants}
                        custom={direction}
                        initial="enter"
                        animate="center"
                    />
                ))}
            </motion.div>

            {/* 中央カード */}
            <motion.div
                key={title}
                className={`relative z-10 mx-auto w-[70%] h-[70%] bg-cover bg-center text-white shadow-2xl ${config.cardPaddingClass}`}
                style={{ backgroundImage: `url(${image})` }}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
            >
                <h1 className={`font-black leading-tight ${config.mainTextClass}`}>
                    {title.split(" ").map((t, i) => (
                        <span key={i} className="block">
                        {t}
                        </span>
                    ))}
                </h1>
            </motion.div>
        </motion.div>
    );
}