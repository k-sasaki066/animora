"use client";

import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

type NavItemProps = {
    icon: ReactNode;
    label: string;
    expanded: boolean;
    onClick?: () => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
    tabIndex: number;
};

export const NavItem = forwardRef<HTMLButtonElement, NavItemProps>(
    ({ icon, label, expanded, onClick, onKeyDown, tabIndex }, ref) => {

        return (
            <button
                type="button"
                ref={ref}
                role="menuitem"
                tabIndex={tabIndex}
                onClick={onClick}
                onKeyDown={onKeyDown}
                className="group flex h-9 items-center gap-4 px-4 transition-colors hover:bg-black hover:text-white cursor-pointer focus:outline-none focus-visible:bg-black focus-visible:text-white"
            >
                <span className="flex w-6 justify-center">
                    {icon}
                </span>

                <motion.span
                    initial={false}
                    animate={{
                        opacity: expanded ? 1 : 0,
                        x: expanded ? 0 : -10,
                    }}
                    transition={{
                        duration: 0.15,
                        ease: "easeInOut"
                    }}
                    className="whitespace-nowrap text-sm"
                >
                    {label}
                </motion.span>
            </button>
        );
    }
);
NavItem.displayName = "NavItem";
