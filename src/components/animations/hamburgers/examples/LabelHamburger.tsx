import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 300;

type LineConfig = {
    key: string;
    className: string;
    animate: (isOpen: boolean) => {
        y?: number;
        rotate?: number;
        opacity?: number;
    };
};

const lines: LineConfig[] = [
    {
        key: "top",
        className: "top-0",
        animate: (isOpen) => ({
            y: isOpen ? 14 : 0,
            rotate: isOpen ? -45 : 0,
        }),
    },
    {
        key: "middle",
        className: "top-[14px]",
        animate: (isOpen) => ({
            opacity: isOpen ? 0 : 1,
        }),
    },
    {
        key: "bottom",
        className: "bottom-0",
        animate: (isOpen) => ({
            y: isOpen ? -14 : 0,
            rotate: isOpen ? 45 : 0,
        }),
    },
];

export default function LabelHamburger() {
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
                className="flex flex-col gap-1"
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                <motion.button
                    type="button"
                    onPointerDown={toggle}
                    onKeyDown={handleKeyDown}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="global-navigation"
                    className="relative w-12 h-8 bg-none border-none cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eee] focus-visible:ring-offset-2"
                >
                    {/* lines */}
                    {lines.map((line) => (
                        <motion.span
                            key={line.key}
                            className={`absolute left-0 w-full h-1 bg-black ${line.className}`}
                            animate={line.animate(isOpen)}
                            transition={{ duration: 0.4 }}
                        />
                    ))}
                </motion.button>

                <AnimatePresence mode="wait">
                    <motion.span
                        key={isOpen ? "close" : "menu"}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="text-sm tracking-wide text-black select-none"
                    >
                        {isOpen ? "close" : "menu"}
                    </motion.span>
                </AnimatePresence>
            </motion.div>
        </div>
    );
}