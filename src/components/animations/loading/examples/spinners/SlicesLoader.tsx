import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function SlicesLoader({ paused = false }: Props) {

    return (
        <motion.div
            className="w-12 h-12 border-20 rounded-full"
            animate={
                paused
                    ? {
                        borderTopColor: [
                            "rgba(128,0,128,0.75)",
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.75)"
                        ],
                    }
                    : {
                        borderTopColor: [
                            "rgba(128,0,128,0.75)",
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.75)"
                        ],
                        borderRightColor: [
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.75)",
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.25)"
                        ],
                        borderBottomColor: [
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.75)",
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.25)"
                        ],
                        borderLeftColor: [
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.25)",
                            "rgba(128,0,128,0.75)",
                            "rgba(128,0,128,0.25)"
                        ],
                        rotate: [0, 90, 180, 270, 360]
                    }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                    }
            }
        />
    );
}