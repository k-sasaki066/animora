import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function RotateScaleLoader({ paused = false }: Props) {

    return (
        <motion.div
            className="w-12 h-12 border-5 border-t-[#80ac4c] border-gray-300 rounded-full"
            animate={
                paused
                    ? { rotate: 0, scale: 1 }
                    : {
                        rotate: [0, 360],
                        scale: [1, 1.3, 1]
                    }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration: 1.2,
                        ease: "linear"
                    }
            }
        />
    );
}