import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaCheck } from "react-icons/fa";
import { useRef } from "react";
import { COLORS } from "./constants";
import { colors } from "./data";

interface ColorFilterProps {
    selectedColor: string | null;
    onChange: (color: string | null) => void;
    reduce: boolean;
}

export default function ColorFilter({
    selectedColor,
    onChange,
    reduce
}: ColorFilterProps) {
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    return (
        <div
            role="radiogroup"
            aria-labelledby="color-heading"
            aria-label="カラー選択"
            className="pb-10 border-b"
            style={{ borderBottomColor: COLORS.borderBottom }}
        >
            <div className="flex items-center gap-2 mb-4">
                <FaSearch aria-hidden="true" style={{ color: COLORS.icon }} />
                <h2 id="color-heading" className="text-lg font-bold">
                    カラー
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 bg-[#eee] p-2">
                {colors.map((color, index) => {
                    const isSelected = selectedColor === color;
                    const isTabbable = isSelected || (!selectedColor && index === 0);

                    return (
                        <motion.button
                            key={color}
                            ref={(el) => {
                                buttonRefs.current[index] = el;
                            }}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            tabIndex={isTabbable ? 0 : -1}
                            aria-label={`カラー ${color}`}
                            whileTap={{ scale: 0.85 }}
                            transition={
                                reduce
                                    ? { duration: 0 }
                                    : {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }
                            }
                            onClick={() =>
                                onChange(isSelected ? null : color)
                            }
                            onKeyDown={(e) => {
                                const currentIndex = index;

                                if (e.key === " " || e.key === "Enter") {
                                    e.preventDefault();
                                    onChange(isSelected ? null : color);
                                    return;
                                }

                                if (e.key === "ArrowRight") {
                                    e.preventDefault();
                                    const nextIndex =
                                        (currentIndex + 1) % colors.length;
                                    buttonRefs.current[nextIndex]?.focus();
                                    return;
                                }

                                if (e.key === "ArrowLeft") {
                                    e.preventDefault();
                                    const prevIndex =
                                        (currentIndex - 1 + colors.length) %
                                        colors.length;
                                    buttonRefs.current[prevIndex]?.focus();
                                    return;
                                }
                            }}
                            className={`relative w-8 h-8 rounded-full cursor-pointer border-2 flex items-center justify-center ${isSelected ? "border-black scale-110" : "border-transparent" }`}
                            style={{ backgroundColor: color }}
                        >
                            <AnimatePresence>
                                {isSelected && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={
                                            reduce
                                                ? { duration: 0 }
                                                : {
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 20,
                                                }
                                        }
                                        className="absolute text-white drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]"
                                    >
                                        <FaCheck size={14} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}