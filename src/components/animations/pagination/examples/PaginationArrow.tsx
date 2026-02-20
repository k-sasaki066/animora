"use client";

import { motion } from "framer-motion";

type PaginationArrowProps = {
    icon: React.ReactNode;
    direction: "prev" | "next";
    onClick: () => void;
    disabled: boolean;
    className?: string;
};

export function PaginationArrow({
    icon,
    direction,
    onClick,
    disabled,
    className = "",
}: PaginationArrowProps) {
    const isPrev = direction === "prev";

    return (
        <motion.button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={isPrev ? "Previous page" : "Next page"}
            whileTap={{ scale: 0.85 }}
            whileHover={!disabled ? { color: "#4a5565" } : undefined}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
            }}
            className={`disabled:opacity-30 cursor-pointer ${className}`}
        >
            {icon}
        </motion.button>
    );
}