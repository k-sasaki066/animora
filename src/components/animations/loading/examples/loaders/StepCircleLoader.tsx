import { motion, Variants } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function StepCircleLoader({ paused = false }: Props) {
    const backgroundVariants: Variants = {
        animate: {
            background: [
                "conic-gradient(#f8b01c 0deg,#0000 0deg)",
                "conic-gradient(#f8b01c 45deg,#0000 46deg)",
                "conic-gradient(#f8b01c 90deg,#0000 91deg)",
                "conic-gradient(#f8b01c 135deg,#0000 136deg)",
                "conic-gradient(#f8b01c 180deg,#0000 181deg)",
                "conic-gradient(#f8b01c 225deg,#0000 226deg)",
                "conic-gradient(#f8b01c 270deg,#0000 271deg)",
                "conic-gradient(#f8b01c 315deg,#0000 316deg)",
                "conic-gradient(#f8b01c 360deg,#0000 360deg)",
            ],
            transition: {
                duration: 2,
                ease: "linear",
                repeat: Infinity,
            },
        },
        paused: {
            background: "conic-gradient(#f8b01c 315deg,#0000 316deg)",
        },
    };

    return (
        <motion.div
            className="w-12 aspect-square rounded-full"
            variants={backgroundVariants}
            animate={paused ? "paused" : "animate"}
        />
    );
}
