"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

export type Option = string | null;

export type SelectProps = {
    id: string;
    label: string;
    options: string[];
    value: Option;
    onChange: (value: Option) => void;
    required?: boolean;
    error?: boolean;
};

export function Select({
    id,
    label,
    options,
    value,
    onChange,
    required = false,
    error = false,
}: SelectProps) {
    const [open, setOpen] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const labelId = `${label}-label`;
    const borderColor = error ? "border-[#fc805e]" : "border-[#2fb5d1]";

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setOpen(true);
                setActiveIndex((i) => Math.min(i + 1, options.length - 1));
                break;

            case "ArrowUp":
                e.preventDefault();
                setOpen(true);
                setActiveIndex((i) => Math.max(i - 1, 0));
                break;

            case "Enter":
            case " ":
                if (open) {
                    e.preventDefault();
                    onChange(options[activeIndex]);
                    setOpen(false);
                }
                break;

            case "Escape":
                setOpen(false);
                break;
        }
    };

    return (
        <div className="relative w-60">
            {/* Label */}
            <div id={labelId} className="mb-1 flex items-center gap-2 text-sm">
                <span className="text-gray-700">
                    {label}
                </span>
                {required && (
                    <span className="rounded bg-red-500 px-1.5 py-0.5 text-xs text-white">
                        必須
                    </span>
                )}
            </div>

            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={`${id}-listbox`}
                aria-activedescendant={
                    open ? `${id}-option-${activeIndex}` : undefined
                }
                aria-labelledby={labelId}
                aria-invalid={error}
                aria-describedby={error ? `${id}-error` : undefined}
                onClick={() => setOpen((prev) => !prev)}
                onKeyDown={handleKeyDown}
                className={`w-full h-10 bg-white shadow flex items-center justify-between px-4 text-left border-2 ${borderColor} ${open ? "border-b-0" : ""
                    }`}
            >
                <span
                    className={`text-[1.1rem] ${value ? "text-gray-800" : "text-gray-400"
                        }`}
                    aria-live="polite"
                >
                    {value ?? "選択してください"}
                </span>

                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : { duration: 0.25, ease: [0.4, 0.25, 0.3, 1] }
                    }
                    className="text-xl text-[#7a8ca7]"
                >
                    ▼
                </motion.span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        id={`${id}-listbox`}
                        role="listbox"
                        aria-label={label}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={
                            reduce
                                ? { duration: 0 }
                                : { duration: 0.2 }
                        }
                        className={`absolute z-20 w-full overflow-hidden border-2 border-t-0 bg-white ${borderColor}`}
                    >
                        {options.map((option, i) => {
                            const isActive = i === activeIndex;

                            return (
                                <li
                                    key={option}
                                    id={`${id}-option-${i}`}
                                    role="option"
                                    aria-selected={isActive}
                                    className={`h-10 flex items-center px-5 cursor-pointer hover:bg-gray-100 text-[#364153] focus:outline-none focus-visible:text-[#d0d0d1] ${isActive ? "bg-blue-100 text-blue-900" : "hover:bg-gray-100"}`}
                                    onMouseEnter={() => setActiveIndex(i)}
                                    onClick={() => {
                                        onChange(option);
                                        setOpen(false);
                                    }}
                                >
                                    {option}
                                </li>
                            );
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
