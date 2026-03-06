import type { RangeType } from "./data";

type Props = {
    range: RangeType;
    setRange: (range: RangeType) => void;
};

export function RangeSelector({ range, setRange }: Props) {
    const ranges: { key: RangeType; label: string }[] = [
        { key: "week", label: "週" },
        { key: "month", label: "月" },
        { key: "year", label: "年" },
    ];

    return (
        <div className="w-36 flex justify-between bg-gray-700 rounded-lg p-1 text-sm">
            {ranges.map((r) => (
                <button
                    key={r.key}
                    type="button"
                    onClick={() => setRange(r.key)}
                    className={`px-3 py-1 rounded ${range === r.key ? "bg-blue-500 text-white" : "text-gray-300" }`}
                >
                    {r.label}
                </button>
            ))}
        </div>
    );
}