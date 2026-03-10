import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function StripeSlideLoader({ paused = false }: Props) {

    return (
        <motion.div
            className="w-[calc(80px/cos(45deg))] h-3 rounded"
            style={{
                background: `repeating-linear-gradient(-45deg, #6f86d6 0 15px, transparent 0 20px)`,
                backgroundSize: "200% 100%",
            }}
            animate={
                !paused
                    ? { backgroundPosition: ["0% 0%", "100% 0%"] }
                    : undefined
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                    }
            }
        />
    );
}