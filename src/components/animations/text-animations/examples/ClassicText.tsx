import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Fjalla_One } from "next/font/google";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

export const fjallaOne = Fjalla_One({
    weight: "400",
    subsets: ["latin"],
});

const titles = ["This is", "classic", "example"];

const titleContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4, // 行の順番
        },
    },
};

const lineVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05, // 文字の順番
        },
    },
};

const letterVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 80,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "backOut",
        },
    },
};

export default function ClassicText() {
    const [key, setKey] = useState(0);
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>({
        ratio: 0.06,
        min: 20,
        max: 56,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setKey((prev) => prev + 1);
        }, 4000); // ← 全体の再生時間に合わせる

        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={ref} className={`w-full mx-auto p-3 bg-linear-to-b from-slate-700 to-slate-500 ${fjallaOne.className}`}>
            <motion.h1
                key={key}
                className="uppercase font-bold text-center flex flex-col items-center"
                style={{
                    fontSize,
                    lineHeight: 1.1,
                }}
                variants={titleContainerVariants}
                initial="hidden"
                animate="visible"
            >
                {titles.map((line, index) => (
                    <motion.div
                        key={index}
                        variants={lineVariants}
                        className={`flex justify-center -rotate-10 w-full ${
                        index === 0
                            ? "text-red-500"
                            : index === 1
                            ? "text-green-500"
                            : "text-yellow-400"
                        }`}
                    >

                        {line.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={letterVariants}
                                className="inline-block skew-x-[-10deg] drop-shadow-[4px_4px_0_#533d4a]"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.div>
                ))}
            </motion.h1>
        </section>
    );
}