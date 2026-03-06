type Props = {
    totalHours: number;
    avgHours: number;
    avgLabel: string;
};

export function StudySummary({
    totalHours,
    avgHours,
    avgLabel,
}: Props) {

    const items = [
        {
            label: "合計学習時間",
            value: `${totalHours.toFixed(1)} h`,
        },
        {
            label: "平均学習時間",
            value: `${avgHours.toFixed(1)} h / ${avgLabel}`,
        },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mb-3">
            {items.map((item) => (
                <div key={item.label} className="text-gray-200">
                    <span className="text-xs md:text-sm">
                        {item.label}
                    </span>

                    <div className="text-xl md:text-2xl font-bold">
                        {item.value}
                    </div>
                </div>
            ))}
        </div>
    );
}