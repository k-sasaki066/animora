import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 300;
const DURATION = 0.75;

const topVariants: Variants = {
    closed: {
        y: [20, 20, 0],
        rotate: [45, 0, 0],
        transition: { duration: DURATION, ease: "easeInOut" },
    },
    open: {
        y: [0, 20, 20],
        rotate: [0, 0, 45],
        transition: { duration: DURATION, ease: "easeInOut" },
    },
};

const bottomVariants: Variants = {
    closed: {
        y: [-20, -20, 0],
        rotate: [-45, 0, 0],
        transition: { duration: DURATION, ease: "easeInOut" },
    },
    open: {
        y: [0, -20, -20],
        rotate: [0, 0, -45],
        transition: { duration: DURATION, ease: "easeInOut" },
    },
};

const middleVariants:  Variants = {
    closed: {
        opacity: 1,
        transition: { delay: 0.25, duration: 0.25 },
    },
    open: {
        opacity: 0,
        transition: { duration: 0.25 },
    },
};

type LineConfig = {
    key: string;
    className: string;
    variants: Variants;
};

const lines: LineConfig[] = [
    {
        key: "top",
        className: "top-0",
        variants: topVariants,
    },
    {
        key: "middle",
        className: "top-5",
        variants: middleVariants,
    },
    {
        key: "bottom",
        className: "bottom-0",
        variants: bottomVariants,
    },
];

export default function ResetCrossHamburger() {
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
                <motion.button
                    type="button"
                    onPointerDown={toggle}
                    onKeyDown={handleKeyDown}
                    aria-label={isOpen ? "Close menu" : "Open menu"} //意味付け
                    aria-expanded={isOpen} //状態の通知
                    aria-controls="global-navigation" //関連付け
                    className="relative w-12 h-11 bg-none border-none cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eee] focus-visible:ring-offset-2"
                >
                    {/* lines */}
                    {lines.map((line) => (
                        <motion.span
                            key={line.key}
                            className={`absolute left-0 w-full h-1 bg-black rounded ${line.className}`}
                            variants={line.variants}
                            animate={isOpen ? "open" : "closed"}
                        />
                    ))}
                </motion.button>
            </motion.div>
        </div>
    );
}