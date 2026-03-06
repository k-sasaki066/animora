type YearSelectorProps = {
    years: number[];
    currentYear: number;
    onChange: (year: number) => void;
};

export function YearSelector({ years, currentYear, onChange }: YearSelectorProps) {
    return (
        <div className="flex gap-2 mb-4">
            {years.map((y) => (
                <button
                    key={y}
                    type="button"
                    onClick={() => onChange(y)}
                    className={`px-3 py-1 rounded text-sm transition
                        ${currentYear === y
                            ? "bg-green-600 text-white"
                            : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                        }`}
                >
                    {y}
                </button>
            ))}
        </div>
    );
}