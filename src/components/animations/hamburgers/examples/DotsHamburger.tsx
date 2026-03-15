import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 300;

export default function DotsHamburger() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.4)
        : 1;

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
        }
    };

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                <button
                    type="button"
                    onPointerDown={toggle}
                    onKeyDown={handleKeyDown}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="global-navigation"
                    className="relative w-10 h-10 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eee] focus-visible:ring-offset-2"
                >
                    {/* dots */}
                    <motion.div
                        className="flex flex-col justify-between w-full h-full"
                        animate={{
                            opacity: isOpen ? 0 : 1,
                            scale: isOpen ? 0.8 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {[0, 1, 2].map((row) => (
                            <div
                                key={row}
                                className="flex justify-between w-full"
                            >
                                {[0, 1, 2].map((col) => (
                                    <span
                                        key={col}
                                        className="w-1.5 h-1.5 bg-black"
                                    />
                                ))}
                            </div>
                        ))}
                    </motion.div>

                    {/* close icon */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            scale: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="absolute w-9 h-1 bg-black rotate-45" />
                        <span className="absolute w-9 h-1 bg-black -rotate-45" />
                    </motion.div>
                </button>
            </motion.div>
        </div>
    );
}