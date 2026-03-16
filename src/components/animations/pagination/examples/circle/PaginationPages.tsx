import { motion } from "framer-motion";

type PaginationPagesProps = {
    totalPages: number;
    currentPage: number;
    onChange: (page: number) => void;
};

export function PaginationPages({
    totalPages,
    currentPage,
    onChange,
}: PaginationPagesProps) {
    return (
        <div className="flex items-center gap-3">
            {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                const isActive = currentPage === page;

                return (
                    <motion.button
                        key={page}
                        layout
                        onClick={() => onChange(page)}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                        }}
                        aria-current={isActive ? "page" : undefined}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500
                            ${isActive
                                ? "bg-gray-600 text-white border-gray-600"
                                : "border-gray-400 text-gray-600 hover:border-gray-600"
                            }
                        `}
                    >
                        {page}
                    </motion.button>
                );
            })}
        </div>
    );
}