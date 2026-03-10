import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function NewtonCradleLoader({ paused = false }: Props) {

    return (
        <motion.div
            className="w-3 aspect-square rounded-full"
            style={{
                backgroundColor: "rgba(249, 115, 22, 0.95)", // 中央ドット
            }}
            animate={
                paused
                    ? { boxShadow:
                            "12px 0 0 0 rgba(251,146,60,0.85), -25px 0 0 0 rgba(253,186,116,0.8)" }
                    : {
                        boxShadow: [
                            "12px 0 0 0 rgba(251, 146, 60, 0.85), -25px 0 0 0 rgba(253, 186, 116, 0.8)",
                            "12px 0 0 0 rgba(253, 186, 116, 0.8), -12px 0 0 0 rgba(251, 146, 60, 0.85)",
                            "25px 0 0 0 rgba(251, 146, 60, 0.85), -12px 0 0 0 rgba(249, 115, 22, 0.95)",
                        ],
                        // box-shadow: X Y blur spread color;blur を 0、spread を 0 にすると「影 = コピー」になる
                    }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "reverse",
                    }
            }
        />
    );
}