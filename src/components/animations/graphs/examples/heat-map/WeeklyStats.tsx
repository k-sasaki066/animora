
import { WeeklyStats as StatsType } from "./useWeeklyHeatmap";

type Props = {
    stats: StatsType;
};

const labels = [
    "Total",
    "Active days",
    "Best day",
    "Max streak"
];

export function WeeklyStats({ stats }: Props) {
    const values = [
        stats.total,
        stats.activeDays,
        stats.bestDay.value,
        stats.maxStreak
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {labels.map((label, i) => (
                <div key={label} className="flex flex-col justify-between bg-[#161b22] rounded-lg p-3">
                    <p className="text-xs text-gray-400">
                        {label}
                    </p>
                    <p className="text-lg font-semibold text-green-400">
                        {values[i]}
                    </p>
                </div>
            ))}
        </div>
    );
}