"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useMultiSelect, Option } from "./useMultiSelect";

const BASE_WIDTH = 400;

const optionsData: Option[] = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
    { label: "Purple", value: "purple" },
];

export default function MultiSelect() {
    const { ref, width } = useContainerSize<HTMLFormElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.65), 1)
        : 1;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const {
        selected,
        open,
        errors,
        focusedIndex,
        optionRefs,
        availableOptions,
        errorSummary,
        setOpen,
        setFocusedIndex,
        toggleOption,
        validate,
    } = useMultiSelect(optionsData);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValid = validate({
            tools: selected.map((o) => o.value),
        });
        if (!isValid) return;

        await new Promise((r) => setTimeout(r, 1500));
        alert("送信完了");
    };

    return (
        <form
            ref={ref}
            className="w-full h-full flex justify-center items-start bg-[#ebf6f7] pt-4 overflow-y-auto no-scrollbar"
            onSubmit={onSubmit}
        >
            <motion.div className="w-62 relative text-[#2a3950] origin-top" animate={{ scale }}>
                {/* aria-live */}
                <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="sr-only"
                >
                    {errorSummary.length > 0 &&
                        `入力内容に ${errorSummary.length} 件のエラーがあります。 ${errorSummary.join(" ")}`}
                </div>

                {/* hidden inputs */}
                {selected.map((item) => (
                    <input
                        key={item.value}
                        type="hidden"
                        name="tools[]"
                        value={item.value}
                    />
                ))}

                {/* error message */}
                {errors.tools && (
                    <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={
                            reduce
                                ? { duration: 0 }
                                : { duration: 0.2 }
                        }
                        className="mb-0.5 text-sm text-red-500 text-left"
                    >
                        {errors.tools}
                    </motion.p>
                )}

                {/* Active box */}
                <div
                    role="combobox"
                    tabIndex={0}
                    aria-controls="tools-listbox"
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    aria-activedescendant={
                        focusedIndex >= 0 ? `option-${focusedIndex}` : undefined
                    }
                    className={`relative min-h-11 px-3 py-2 rounded-lg bg-white shadow-md flex flex-wrap items-center cursor-pointer focus:outline-none focus:ring-2 ${errors.tools ? "ring-red-400" : "focus:ring-[#4db4f5]"
                        }`}
                    onClick={() => setOpen((o) => !o)}
                    onKeyDown={(e) => {
                        switch (e.key) {
                            case "Enter":
                            case " ":
                                e.preventDefault();
                                setOpen((prev) => {
                                    const next = !prev;
                                    if (next) setFocusedIndex(0);
                                    else setFocusedIndex(-1);
                                    return next;
                                });
                                break;
                            case "ArrowDown":
                                e.preventDefault();
                                setOpen(true);
                                setFocusedIndex(0);
                                break;
                            case "Escape":
                                setOpen(false);
                                setFocusedIndex(-1);
                                break;
                        }
                    }}
                >
                    {selected.length === 0 && (
                        <span className="absolute left-3 top-2 text-gray-400 select-none">
                            Add tools
                        </span>
                    )}
                    <AnimatePresence>
                        {selected.map((item, index) => (
                            <motion.div
                                key={item.value}
                                initial={{
                                    opacity: 0,
                                    x: -10,
                                    scale: 0.8
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -20,
                                    scale: 0
                                }}
                                transition={
                                    reduce
                                        ? { duration: 0 }
                                        : { duration: 0.2 }
                                }
                                className="relative bg-gray-100 px-2 py-1 rounded mr-1 mb-1 flex items-center gap-1"
                            >
                                <em className="text-gray-800">
                                    {item.label}
                                </em>
                                <motion.button
                                    type="button"
                                    aria-label={`${item.label} を削除`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleOption(item, index);
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            toggleOption(item, index);
                                        }
                                    }}
                                    className="ml-1 w-4 h-4 flex items-center justify-center text-purple-600"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    {[45, -45].map((deg, i) => (
                                        <span
                                            key={i}
                                            className={
                                                'block w-0.5 h-3 bg-purple-600 absolute ' +
                                                (deg === 45 ? 'rotate-45' : '-rotate-45')
                                            }
                                        />
                                    ))}
                                </motion.button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    <motion.span
                        className="absolute top-1/2 -translate-y-1/2 right-1.5 text-[#5a5a5a]"
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={
                            reduce
                                ? { duration: 0 }
                                : { duration: 0.2 }
                        }
                    >
                        <ChevronDown className="h-6 w-6" />
                    </motion.span>
                </div>

                {/* Dropdown list */}
                <AnimatePresence>
                    {open && (
                        <motion.ul
                            role="listbox"
                            aria-activedescendant={
                                focusedIndex >= 0 ? `option-${focusedIndex}` : undefined
                            }
                            initial={{
                                opacity: 0,
                                y: -10,
                                scale: 0.95
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                y: -10,
                                scale: 0.95
                            }}
                            transition={
                                reduce
                                    ? { duration: 0 }
                                    : { duration: 0.2 }
                            }
                            className="absolute left-0 right-0 mt-1 bg-white shadow-lg rounded-lg z-0 overflow-hidden"
                        >
                            {availableOptions.map((option, index) => {
                                return (
                                    <motion.li key={option.value} role="option">
                                        <button
                                            ref={(el) => { optionRefs.current[index] = el }}
                                            type="button"
                                            id={`option-${index}`}
                                            tabIndex={0}
                                            aria-selected={focusedIndex === index}
                                            onFocus={() => setFocusedIndex(index)}
                                            onClick={() => toggleOption(option, index)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" || e.key === " ") {
                                                    e.preventDefault();
                                                    toggleOption(option, index);
                                                }
                                            }}
                                            className={`w-full text-left px-4 py-3 hover:bg-[#4db4f5] hover:text-white focus:outline-none focus-visible:text-white focus-visible:bg-[#4db4f5]`}
                                        >
                                            {option.label}
                                        </button>
                                    </motion.li>
                                );
                            })}
                        </motion.ul>
                    )}
                </AnimatePresence>

                {/* submit button */}
                <button
                    type="submit"
                    disabled={!!errors.tools}
                    className="mt-4 w-full rounded-lg bg-[#4D18FF] text-white py-2 font-medium hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17e2f5]"
                >
                    Submit
                </button>
            </motion.div>
        </form>
    );
}
