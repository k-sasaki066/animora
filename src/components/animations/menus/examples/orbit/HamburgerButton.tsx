import { forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

type Props = {
    isOpen: boolean;
    scale: number;
    onToggle: () => void;
    buttonControls: ReturnType<typeof useAnimation>;
};

export const HamburgerButton = forwardRef<HTMLButtonElement, Props>(
    ({ isOpen, scale, onToggle, buttonControls }, ref) => {

        return (
            <motion.button
                ref={ref}
                type="button"
                animate={buttonControls}
                onClick={onToggle}
                aria-label={isOpen ? "Close menu":"Open menu"}
                aria-expanded={isOpen}
                aria-controls="global-navigation"
                aria-haspopup="menu"
                whileTap={{ scale: 1.2 }}
                className="absolute w-13 aspect-square left-[3%] top-[4%] z-20 bg-white rounded-full shadow-md flex items-center justify-center text-[#8290a4] cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8290a4]"
            >
                {isOpen ? (
                    <FaTimes className="w-7.5 h-7.5" />
                    ) : (
                    <FaBars className="w-7.5 h-7.5" />
                )}
            </motion.button>
        );
    }
);
HamburgerButton.displayName = "HamburgerButton";