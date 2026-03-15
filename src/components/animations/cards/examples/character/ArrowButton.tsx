import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export type ArrowButtonProps = {
    direction: "left" | "right";
    onClick: () => void;
    className?: string;
};

export default function ArrowButton({
    direction,
    onClick,
    className = "",
}: ArrowButtonProps) {
    const isLeft = direction === "left";

    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`absolute top-1/2 -translate-y-1/2 p-1 bg-white/80 rounded-lg shadow transition z-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${className} ${isLeft ? "-left-10" : "-right-10"}`}
            aria-label={isLeft ? "Previous card" : "Next card"}
        >
            {isLeft ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </motion.button>
    );
}
