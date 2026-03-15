import { motion, Variants, useReducedMotion } from "framer-motion";
import { useState, useRef } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

const BASE_WIDTH = 400;

const options = [
    { id: "pizza", label: "Pizza" },
    { id: "bacon", label: "Bacon" },
    { id: "cats", label: "Cats" },
];

const itemVariants: Variants = {
    rest: {
        borderColor: "#AAAAAA",
        color: "#AAAAAA",
    },
    hover: {
        borderColor: "#FFFFFF",
        color: "#FFFFFF",
    },
    checked: {
        borderColor: "#0DFF92",
        color: "#0DFF92",
    },
};

export default function ColorChangeRadio() {
    const [selected, setSelected] = useState<string>(options[0].id);

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.45), 1.3)
        : 1;

    const values = options.map((o) => o.id);
    const buttonRefs = useRef<(HTMLLIElement | null)[]>([]);

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const { onKeyDown } = useRovingTabFocus<string>({
        values,
        activeValue: selected,
        setActiveValue: setSelected,
        refs: buttonRefs,
    });

    return (
        <div
            ref={ref}
            className="w-full h-full overflow-hidden flex justify-center items-center bg-[#222]"
        >
            <motion.div
                className="w-full h-full flex justify-center items-center"
                animate={{ scale }}
            >
                <ul
                    className="w-55"
                    role="radiogroup"
                    aria-label="Food selector"
                >
                    {options.map((option, index) => {
                        const isChecked = selected === option.id;

                        return (
                            <motion.li
                                key={option.id}
                                role="radio"
                                ref={(el) => {
                                    buttonRefs.current[index] = el;
                                }}
                                aria-checked={isChecked}
                                tabIndex={isChecked ? 0 : -1}
                                className="relative h-12.5 w-full border-b border-neutral-700 flex justify-start items-center gap-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eee]"
                                initial="rest"
                                animate={isChecked ? "checked" : "rest"}
                                whileHover={
                                    isChecked ? "checked" : "hover"
                                }
                                onPointerDown={(e) => {
                                    e.preventDefault();
                                    setSelected(option.id);
                                    e.currentTarget.focus();
                                }}
                                onKeyDown={onKeyDown}
                            >
                                {/* hidden radio */}
                                <input
                                    id={`radio-${option.id}`}
                                    className="hidden"
                                    type="radio"
                                    name="selector"
                                    value={option.id}
                                    checked={isChecked}
                                    onChange={() =>
                                        setSelected(option.id)
                                    }
                                />

                                {/* radio visual */}
                                <motion.div
                                    className="flex h-6 w-6 items-center justify-center rounded-full border-4"
                                    variants={itemVariants}
                                    transition={
                                        reduce
                                            ? { duration: 0 }
                                            : {
                                                duration: 0.2,
                                                ease: "linear",
                                            }
                                    }
                                >
                                    {/* inner dot */}
                                    <motion.div
                                        className="h-3 w-3 rounded-full"
                                        initial={false}
                                        animate={{
                                            scale: isChecked ? 1 : 0,
                                            backgroundColor: "#0DFF92",
                                        }}
                                        transition={
                                            reduce
                                                ? { duration: 0 }
                                                : {
                                                    duration: 0.2,
                                                    ease: "linear",
                                                }
                                        }
                                    />
                                </motion.div>

                                {/* label */}
                                <motion.label
                                    htmlFor={`radio-${option.id}`}
                                    className="relative z-10 block cursor-pointer text-xl"
                                    variants={itemVariants}
                                    transition={
                                        reduce
                                        ? { duration: 0 }
                                        : {
                                            duration: 0.2,
                                            ease: "linear",
                                            }
                                    }
                                >
                                    {option.label}
                                </motion.label>
                            </motion.li>
                        );
                    })}
                </ul>
            </motion.div>
        </div>
    );
}
