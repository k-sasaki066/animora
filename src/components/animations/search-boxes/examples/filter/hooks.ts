import { useState, useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import { products, Category } from "./data";
import { PRICE_STEP, PRICE_MIN, PRICE_MAX } from "./constants";

export function useFilterSearch() {
    const [selectedCategory, setSelectedCategory] =
        useState<Category | null>(null);

    const [selectedColor, setSelectedColor] =
        useState<string | null>(null);

    const [minPrice, setMinPrice] = useState<number>(5000);
    const [maxPrice, setMaxPrice] = useState<number>(15000);

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            const matchCategory = selectedCategory
                ? p.category === selectedCategory
                : true;

            const matchColor = selectedColor
                ? p.color === selectedColor
                : true;

            const matchPrice =
                p.price >= minPrice && p.price <= maxPrice;

            return matchCategory && matchColor && matchPrice;
        });
    }, [selectedCategory, selectedColor, minPrice, maxPrice]);

    const clampToStep = (value: number) => {
        const stepped = Math.round(value / PRICE_STEP) * PRICE_STEP;
        return Math.min(Math.max(stepped, PRICE_MIN), PRICE_MAX);
    };

    return {
        // state
        selectedCategory,
        selectedColor,
        minPrice,
        maxPrice,
        filteredProducts,
        reduce,

        // setters
        setSelectedCategory,
        setSelectedColor,
        setMinPrice,
        setMaxPrice,

        // utils
        clampToStep,
    };
}
