import { motion, AnimatePresence } from "framer-motion";

interface CentralTextProps {
    title: string;
    amount: number | string;
    percent?: number | string | null;
    keyId: string | number;
}

export function CentralText({ title, amount, percent, keyId }: CentralTextProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={keyId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center"
            >
                <div className="text-xs md:text-sm text-zinc-400">
                    {title}
                </div>
                <div className="text-lg md:text-xl font-bold text-white">
                    ¥{typeof amount === "number" ? amount.toLocaleString() : amount}
                </div>
                {percent !== undefined && percent !== null && (
                    <div className="text-lg md:text-xl font-bold text-white">
                        {percent}%
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}