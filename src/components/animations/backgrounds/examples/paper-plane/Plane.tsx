import { motion } from "framer-motion";

export default function Plane() {
    return (
        <motion.div
            className="absolute left-1/2 top-20 -translate-x-1/2 z-10"
            animate={{ y: [0, 100] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
            }}
        >
            <motion.svg
                viewBox="0 0 1131.53 379.304"
                className="w-[10vw]"
                animate={{ rotate: [0, 15, 15, -10, -10, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                >
                <polygon
                    fill="#D8D8D8"
                    points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223"
                />
                <polygon
                    fill="#C4C4C3"
                    points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102"
                />
            </motion.svg>
        </motion.div>
    );
}