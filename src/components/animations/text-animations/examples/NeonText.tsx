import { motion } from "framer-motion";
import { Neonderthaw } from "next/font/google";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

const neonderthaw = Neonderthaw({
    subsets: ["latin"],
    weight: ["400"],
});

export default function NeonText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>({
        ratio: 0.05,
        min: 40,
        max: 72,
    });

    return (
        <div
            ref={ref}
            className="w-full h-full p-4 bg-black flex justify-center items-center gap-2"
            style={{ fontSize }}
        >
            <motion.div
                className={`leading-none ${neonderthaw.className}`}
                animate={{
                    color: ["#FED128", "#806914", "#FED128"],
                    textShadow: [
                        "0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128",
                        "0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B",
                        "0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128",
                    ],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                Neon
            </motion.div>
            <motion.div
                className={`leading-none ${neonderthaw.className}`}
                animate={{
                    color: ["#28D7FE", "#146C80", "#28D7FE"],
                    textShadow: [
                        "0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE",
                        "0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180",
                        "0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE",
                    ],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                Text
            </motion.div>
        </div>
    );
}