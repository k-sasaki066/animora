import { Year } from "./iceCreamDataset";
import { getYearColor } from "./color";

type Props = {
    years: Year[];
    activeYears: Year[];
    toggleYear: (y: Year) => void;
};

export default function YearSelector({
    years,
    activeYears,
    toggleYear
}: Props) {
    return (
        <div className="flex justify-center gap-3 px-2">
            {years.map((y) => {
                const active = activeYears.includes(y);
                const color = getYearColor(y, years);

                return (
                    <button
                        key={y}
                        type="button"
                        onClick={() => toggleYear(y)}
                        style={{
                            backgroundColor: active ? color : "#1e293b"
                        }}
                        className={`px-4 py-2 rounded-lg transition text-white text-sm md:text-base ${!active && "text-gray-300 hover:bg-slate-700" }`}
                    >
                        {y}
                    </button>
                );
            })}
        </div>
    );
}