import { motion } from "framer-motion";

interface SwipeHintProps {
    visible: boolean;
}

export function SwipeHint({ visible }: SwipeHintProps) {
    if (!visible) return null;

    return (
        <motion.div
            className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2 text-white/80 pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
        >
            <span className="text-[10px] sm:text-xs tracking-widest">SWIPE</span>

            <motion.div
                className="w-3 h-5 sm:w-4 sm:h-6 border border-white/70 rounded-full relative"
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
            >
                <div className="w-1 h-1 bg-white rounded-full absolute top-1 left-1/2 -translate-x-1/2" />
            </motion.div>
        </motion.div>
    );
}