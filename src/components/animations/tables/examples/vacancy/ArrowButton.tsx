type ArrowButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

export function ArrowButton({ onClick, children }: ArrowButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 active:scale-95 transition"
        >
            {children}
        </button>
    );
}