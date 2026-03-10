import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function BounceLoader({ paused = false }: Props) {

    return (
        <motion.div
            className="w-12 h-12 text-purple-600 bg-purple-600 rounded-full"
            animate={
                paused
                    ? { y: 0 }
                    : { y: [0, -10, 0] }
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