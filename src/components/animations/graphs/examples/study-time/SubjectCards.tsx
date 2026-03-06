type Totals = {
    math: number;
    english: number;
    science: number;
};

const subjects = [
    { key: "math", label: "数学", color: "text-blue-500/75" },
    { key: "english", label: "英語", color: "text-green-500/75" },
    { key: "science", label: "科学", color: "text-red-500/75" },
] as const;

export function SubjectCards({ totals }: { totals: Totals }) {
    return (
        <div className="grid grid-cols-3 gap-3 mb-6">
            {subjects.map((subject) => (
                <div key={subject.key} className="bg-gray-700 p-2 rounded-sm shadow">
                    <div className="text-xs md:text-sm text-white/50">
                        {subject.label}
                    </div>

                    <div className={`text-sm md:text-lg font-bold ${subject.color}`}>
                        {totals[subject.key].toFixed(1)} h
                    </div>
                </div>
            ))}
        </div>
    );
}