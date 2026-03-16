import { motion, AnimatePresence } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useInfiniteScrollList } from "./useInfiniteScrollList";
import ScrollHint from "./ScrollHint";
import LoadingTrigger from "./LoadingTrigger";

const BASE_WIDTH = 400;

export default function InfiniteScrollList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1.3)
        : 1;

    const ITEMS = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

    const {
        reduce,
        listRef,
        observerRef,
        currentItems,
        visibleCount,
        selectedItem,
        setSelectedItem,
        isLoading,
        hasScrolled,
        handleScroll,
    } = useInfiniteScrollList({
        items: ITEMS,
        itemsPerLoad: 10,
        delay: 800,
    });

    return (
        <div ref={ref} className="relative w-full h-full flex justify-center items-center py-5 bg-[#eee]">
            {/* スクロールガイド */}
            <ScrollHint
                show={!hasScrolled}
                reduce={reduce}
            />

            {/* 表示 */}
            <motion.ul
                ref={listRef}
                onScroll={handleScroll}
                animate={{scale}}
                className="relative w-55 max-w-75 h-38 min-h-37 space-y-2 overflow-y-auto no-scrollbar px-4"
                role="listbox"
                aria-label="Item list"
                tabIndex={0}
                aria-activedescendant={selectedItem ?? undefined}
            >
                <AnimatePresence>
                    {currentItems.map((item) => {
                        const isSelected = selectedItem === item;

                        return (
                            <motion.li
                                id={item}
                                key={item}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={
                                    reduce
                                        ? { duration: 0 }
                                        : { duration: 0.3 }
                                }
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelectedItem(item)}
                                    role="option"
                                    aria-selected={isSelected}
                                    className={`w-full p-2 rounded text-center text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a7282] transition shadow-sm
                                        ${isSelected
                                            ? "bg-[#797878] text-white"
                                            : "bg-white hover:bg-[#e5e7eb]"
                                        }
                                    `}
                                >
                                    {item}
                                </button>
                            </motion.li>
                        );
                    })}
                </AnimatePresence>

                {/* ローディング表示 */}
                <LoadingTrigger
                    show={visibleCount < ITEMS.length}
                    isLoading={isLoading}
                    observerRef={observerRef}
                    reduce={reduce}
                />
            </motion.ul>
        </div>
    );
}