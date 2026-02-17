"use client";

import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { categories, Category } from "./data";
import { COLORS } from "./constants";

interface CategoryFilterProps {
    selectedCategory: Category | null;
    onChange: (category: Category | null) => void;
    reduce: boolean;
}

export default function CategoryFilter({
    selectedCategory,
    onChange,
    reduce
}: CategoryFilterProps) {
    return (
        <div
            role="radiogroup"
            aria-labelledby="category-heading"
            className="pb-10 border-b"
            style={{ borderBottomColor: COLORS.borderBottom }}
        >
            <div className="flex items-center gap-2 mb-4">
                <FaSearch aria-hidden="true" style={{ color: COLORS.icon }} />
                <h2 id="category-heading" className="text-lg font-bold">
                    カテゴリ
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => {
                    const isSelected = selectedCategory === cat.value;

                    return (
                        <motion.button
                            key={cat.value}
                            role="radio"
                            type="button"
                            tabIndex={0}
                            aria-checked={isSelected}
                            aria-pressed={isSelected}
                            whileTap={{ scale: 0.95 }}
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
                                onChange(isSelected ? null : cat.value)
                            }
                            className={`w-40 text-center text-sm font-semibold px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${isSelected ? "bg-orange-200" : "bg-[#f3f4f6] hover:bg-[#e5e7eb]"}`}
                        >
                            {cat.label}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}