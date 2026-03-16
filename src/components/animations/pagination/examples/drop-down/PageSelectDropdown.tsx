import { motion, AnimatePresence } from "framer-motion";

type PageSelectDropdownProps = {
    isOpen: boolean;
    totalPages: number;
    currentPage: number;
    onSelect: (page: number) => void;
    reduce: boolean;
};

export function PageSelectDropdown({
    isOpen,
    totalPages,
    currentPage,
    onSelect,
    reduce,
}: PageSelectDropdownProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    id="pagination-listbox"
                    role="listbox"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : { duration: 0.2 }
                    }
                    className="h-38 absolute bottom-full mb-2 w-full bg-[#3f3f3f] rounded-md shadow-lg overflow-y-auto no-scrollbar"
                >
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => {
                            const active = page === currentPage;

                            return (
                                <button
                                    key={page}
                                    role="option"
                                    aria-selected={active}
                                    onClick={() => onSelect(page)}
                                    className={`w-full py-2 text-sm text-center text-white font-semibold focus:outline-none focus-visible:bg-[#a0a0a0]
                                        ${active
                                            ? "bg-[#787777] text-white"
                                            : "hover:bg-[#a5a4a4]"
                                        }
                                    `}
                                >
                                    {page} / {totalPages}
                                </button>
                            );
                        }
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}