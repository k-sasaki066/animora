type SimplePagerProps = {
    totalPages: number;
    currentPage: number;
    onChange: (page: number) => void;
};

export function SimplePager({
    totalPages,
    currentPage,
    onChange,
}: SimplePagerProps) {
    return (
        <nav
            className="flex border border-[#ddd]"
            aria-label="Pagination"
        >
            {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                const isActive = currentPage === page;

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onChange(page)}
                        aria-label={`Go to page ${page}`}
                        aria-current={isActive ? "page" : undefined}
                        className={`w-7 h-7 border border-r-[#ddd] cursor-pointer text-sm focus:outline-none
                            ${isActive
                                ? "bg-blue-500 text-white font-bold focus-visible:text-black"
                                : "bg-gray-100 focus-visible:text-blue-500"
                            }
                        `}
                    >
                        {page}
                    </button>
                );
            })}
        </nav>
    );
}