import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function RhombusGradientLoader({ paused = false }: Props) {

    const maskSvg = encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <polygon points="12,0 24,12 12,24 0,12" fill="white"/>
        </svg>
    `);

    return (
        <div
            className="relative w-28 h-6 overflow-hidden bg-gray-200/50"
            style={{
                WebkitMaskImage: `url("data:image/svg+xml;utf8,${maskSvg}")`,
                WebkitMaskRepeat: "repeat-x",
                WebkitMaskSize: "25% 100%",
                WebkitMaskPosition: "left",
            }}
        >
            <motion.div
                className="absolute w-full h-full top-0 left-0 bg-green-400"
                animate={
                    paused
                        ? { x: "-50%" }
                        : { x: ["-100%", "0%"] }
                }
                transition={
                    paused
                        ? { duration: 0 }
                        : {
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                        }
                }
            />
        </div>
    );
}
