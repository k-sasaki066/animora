import { motion, AnimatePresence } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useLoadMoreList } from "./useLoadMoreList";

const BASE_WIDTH = 400;
const ITEMS = Array.from({ length: 40 }, (_, i) => `Item ${i + 1}`);

export default function LoadMoreList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.4), 1)
        : 1;

    const {
        reduce,
        visibleCount,
        setSelectedItem,
        selectedItem,
        currentItems,
        listRef,
        lastItemRef,
        handleKeyDown,
        handleLoadMore,
    } = useLoadMoreList(ITEMS);

    const isLoadMoreDisabled = visibleCount >= ITEMS.length;

    return (
        <div ref={ref} className="w-full h-full bg-[#f3f4f6] flex justify-center items-center py-6">
            <motion.div className="w-full h-full flex flex-col justify-center items-center gap-4 origin-center" animate={{scale}}>
                <ul
                    ref={listRef}
                    className="w-full max-w-65 flex-1 min-h-30 space-y-2 p-2 overflow-y-auto no-scrollbar"
                    role="listbox"
                    aria-label={`Item list, ${currentItems.length} items`}
                    aria-activedescendant={selectedItem ?? undefined}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                >
                    <AnimatePresence>
                        {currentItems.map((item, index) => {
                            const isSelected = selectedItem === item;
                            const isLast = index === currentItems.length - 1;

                            return (
                                <motion.li
                                    key={item}
                                    ref={isLast ? lastItemRef : null}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={
                                        reduce
                                            ? { duration: 0 }
                                            : { duration: 0.3 }
                                    }
                                >
                                    <button
                                        id={item}
                                        type="button"
                                        onClick={() => setSelectedItem(item)}
                                        role="option"
                                        aria-selected={isSelected}
                                        className={`w-full p-2 rounded text-center text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a7282]
                                            ${isSelected ? "bg-[#3a3d54] text-white" : "bg-white hover:bg-[#e5e7eb]"}
                                            ${reduce ? "" : "transition"}
                                        `}
                                    >
                                        {item}
                                    </button>
                                </motion.li>
                            );
                        })}
                    </AnimatePresence>
                </ul>

                <motion.button
                    onClick={handleLoadMore}
                    disabled={isLoadMoreDisabled}
                    aria-disabled={isLoadMoreDisabled}
                    whileHover={!reduce && !isLoadMoreDisabled ? { backgroundColor: "#c3cfe2" } : {}}
                    className={`px-4 py-1.5 text-sm text-white rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a7282]
                        ${!isLoadMoreDisabled
                            ? "bg-[#3a3d54] cursor-pointer"
                            : "bg-[#65687d] cursor-not-allowed opacity-50"}
                    `}
                >
                    LOAD MORE
                </motion.button>
            </motion.div>
        </div>
    );
}