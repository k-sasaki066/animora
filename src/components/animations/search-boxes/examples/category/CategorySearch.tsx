import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { categories } from "./categoryData";
import { useCategorySearch } from "./useCategorySearch";

const BASE_WIDTH = 440;

export default function CategorySearch() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale =
        width ? Math.min(Math.max(width / BASE_WIDTH, 0.8), 1) : 1;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const {
        selected,
        setSelected,
        activeIndex,
        setActiveIndex,
        filtered,
        listRef,
        } = useCategorySearch();

    return (
        <div ref={ref} className="w-full h-full bg-[#f3f4f6] flex flex-col items-center justify-start p-4">
            <motion.div
                className="w-full h-full flex flex-col items-center origin-top-center"
                animate={{ scale }}
            >
                {/* Category Icons */}
                <div className="flex justify-center gap-5 mb-[5%]">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <motion.button
                                key={cat.key}
                                whileHover={{ scale: 1.1 }}
                                onClick={() =>
                                    setSelected(selected === cat.key ? null : cat.key)
                                }
                                transition={
                                    reduce
                                        ? { duration: 0 }
                                        : { duration: 0.3 }
                                }
                                className={`w-10 h-10 flex items-center justify-center rounded-full text-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${selected === cat.key ? "bg-blue-500 text-white shadow-lg" : "bg-white text-[#364153] shadow-md"}`}
                            >
                                <Icon />
                            </motion.button>
                        );
                    })}
                </div>

                {/* Animated Result Area */}
                <div className="w-full max-w-md min-h-25 overflow-y-auto no-scrollbar">
                    <AnimatePresence mode="wait">
                        {selected && (
                            <motion.div
                                key={selected}
                                initial={{ opacity: 0, y: 28, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -28, scale: 0.95 }}
                                transition={
                                    reduce
                                        ? { duration: 0 }
                                        : { duration: 0.4 }
                                }
                                className="bg-white rounded-sm shadow-xl p-6"
                            >
                                <h2 className="text-base font-bold mb-4 capitalize">
                                    {selected} Results
                                </h2>

                                <ul ref={listRef} className="space-y-2">
                                    {filtered.map((item, index) => (
                                        <motion.li
                                            key={item.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={
                                                reduce
                                                    ? { duration: 0 }
                                                    : { delay: 0.1 }
                                            }
                                            className={`text-sm p-2 rounded-sm shadow-sm cursor-pointer transition-colors ${ index === activeIndex ? "bg-blue-500 text-white" : "bg-[#f9fafb]" }`}
                                            onMouseEnter={() =>
                                                setActiveIndex(index)
                                            }
                                        >
                                            {item.title}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}