import { motion } from "framer-motion";

interface ButtonDesignProps {
    className?: string;
    type: "Test" ;
}

export function ButtonDesign({ className = "w-40 h-12", type }: ButtonDesignProps) {
    const animations = {

        Test: (
            <motion.div
                className={`px-8 py-4 rounded-full cursor-pointer bg-rose-400 ${className}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
            </motion.div>
        ),

    };

    return animations[type];
}