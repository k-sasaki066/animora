export default function RadarTooltip({ active, payload, label }: any) {
    if (!active || !payload) return null;

    return (
        <div className="bg-gray-800 border border-gray-700 p-3 rounded-lg text-sm">
            <p className="text-gray-300 mb-2">
                {label}
            </p>

            {payload.map((p: any) => (
                <div key={p.name} className="flex justify-between gap-6">
                    <span style={{ color: p.color }}>
                        {p.name}
                    </span>
                    <span className="text-white font-semibold">
                        {p.value}
                    </span>
                </div>
            ))}
        </div>
    );
}