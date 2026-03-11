import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function SportyButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.button
            className="relative font-bold uppercase text-transparent bg-clip-text bg-linear-to-r from-[#ff8282] to-[#e178ed] w-40 h-12 cursor-pointer flex justify-center items-center"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            BUTTON

            {/* SVG border */}
            <motion.svg
                className="absolute inset-0"
                viewBox="0 0 160 48"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="grad1">
                        <stop offset="0%" stopColor="#FF8282" />
                        <stop offset="100%" stopColor="#E178ED" />
                    </linearGradient>
                </defs>

                {/* 線が走る アニメーション */}
                <motion.rect
                    x="2"
                    y="2"
                    width="156"
                    height="44"
                    rx="20"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="4"
                    vectorEffect="non-scaling-stroke"
                    variants={{
                        rest: {
                            strokeDasharray: "220 0",
                            strokeDashoffset: 0,
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut"
                            },
                        },
                        hover: {
                            strokeDasharray: "120 320",
                            strokeDashoffset: 260,
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut"
                            },
                        },
                    }}
                />
            </motion.svg>
        </motion.button>
    );
}