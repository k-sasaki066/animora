import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function FadeLoader({ paused = false }: Props) {

    return (
        <motion.div
            className="w-12 h-12 bg-[#66a6ff] rounded-full"
            animate={
                paused
                    ? { opacity: 0.6 }
                    : { opacity: [0, 1, 0] }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration: 1.5
                    }
            }
        />
    );
}