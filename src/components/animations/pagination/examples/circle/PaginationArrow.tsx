"use client";

import { motion } from "framer-motion";

type PaginationArrowProps = {
    icon: React.ReactNode;
    direction: "prev" | "next";
    onClick: () => void;
    disabled: boolean;
};

export function PaginationArrow({
    icon,
    direction,
    onClick,
    disabled,
}: PaginationArrowProps) {
    const isPrev = direction === "prev";

    return (
        <motion.button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={isPrev ? "Previous page" : "Next page"}
            whileHover={{ color: "#4a5565" }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
            }}
            className="text-gray-400 disabled:opacity-30 cursor-pointer text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
        >
            {icon}
        </motion.button>
    );
}