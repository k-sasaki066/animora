import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { BASE_WIDTH } from "./constants";
import { useFilterSearch } from "./hooks";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import ResultList from "./ResultList";

export default function FilterSearch() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale =
        width ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1) : 1;

    const {
        selectedCategory,
        selectedColor,
        minPrice,
        maxPrice,
        filteredProducts,
        reduce,
        setSelectedCategory,
        setSelectedColor,
        setMinPrice,
        setMaxPrice,
        clampToStep,
    } = useFilterSearch();

    return (
        <div
            ref={ref}
            role="region"
            aria-label="商品フィルター"
            className="w-full h-full mx-auto overflow-y-auto no-scrollbar"
        >
            <motion.div className="w-full h-full flex flex-col gap-10 origin-top" animate={{scale}}>
                {/* Category */}
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    onChange={setSelectedCategory}
                    reduce={reduce}
                />

                {/* Color */}
                <ColorFilter
                    selectedColor={selectedColor}
                    onChange={setSelectedColor}
                    reduce={reduce}
                />

                {/* Price */}
                <PriceFilter
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                    clampToStep={clampToStep}
                />

                {/* Result */}
                <ResultList
                    products={filteredProducts}
                    reduce={reduce}
                />
            </motion.div>
        </div>
    );
}