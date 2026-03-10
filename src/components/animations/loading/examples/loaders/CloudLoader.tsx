import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function CloudLoader({ paused = false }: Props) {

    return (
        <motion.div
            className="
                relative w-15 h-7 bg-sky-300 rounded-full
                before:content-[''] before:absolute before:w-8 before:h-8
                before:bg-sky-300 before:rounded-full before:left-0 before:-top-1
                after:content-[''] after:absolute after:w-7 after:h-7
                after:bg-sky-300 after:rounded-full after:left-5 after:-top-2.5
            "
            animate={
                paused
                    ? { scale: 1, y: 0 }
                    : {
                        scale: [1, 1.06, 1],
                        y: [0, -2, 0],
                    }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration: 2.2,
                        ease: "easeInOut",
                    }
            }
        >
            <div className="absolute w-6 h-6 bg-sky-300 rounded-full left-4 -bottom-1.5" />
        </motion.div>
    );
}