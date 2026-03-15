import { motion } from "framer-motion";

type MobileMenuButtonProps = {
    expanded: boolean;
    scale: number;
    reduce: boolean;
    onToggle: () => void;
};

export function MobileMenuButton({ expanded, scale, reduce, onToggle, }: MobileMenuButtonProps) {

    return (
        <div className="absolute top-[5%] left-[3%] w-7 h-7 z-100 flex items-center justify-center">
            <motion.div
                className="w-full h-full origin-center"
                animate={{ scale }}
                transition={
                reduce
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 200, damping: 20 }
                }
            >
                <button
                    type="button"
                    aria-label={expanded ? "Close menu" : "Open menu"}
                    aria-haspopup="menu"
                    aria-expanded={expanded}
                    aria-controls="side-menu"
                    onPointerDown={(e) => {
                        e.preventDefault();
                        onToggle();
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onToggle();
                        }
                    }}
                    className="relative w-full h-full flex items-center justify-center text-white cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#777]"
                >
                    {/* dots */}
                    <motion.div
                        className="flex flex-col justify-between w-full h-full"
                        animate={{
                        opacity: expanded ? 0 : 1,
                        scale: expanded ? 0.8 : 1,
                        }}
                        transition={reduce ? { duration: 0 } : { duration: 0.3 }}
                    >
                        {[0, 1, 2].map((row) => (
                            <div key={row} className="flex justify-between w-full">
                                {[0, 1, 2].map((col) => (
                                    <span
                                        key={col}
                                        className="w-1.5 h-1.5 bg-[#2c2b2b] rounded-full"
                                    />
                                ))}
                            </div>
                        ))}
                    </motion.div>

                    {/* close icon */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                            opacity: expanded ? 1 : 0,
                            scale: expanded ? 1 : 0,
                        }}
                        transition={
                            reduce
                                ? { duration: 0 }
                                : { duration: 0.3 }
                        }
                    >
                        <span className="absolute w-6.5 h-1 bg-white rotate-45" />
                        <span className="absolute w-6.5 h-1 bg-white -rotate-45" />
                    </motion.div>
                </button>
            </motion.div>
        </div>
    );
}