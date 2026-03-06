type HeatmapLegendProps = {
    colors: string[];
};

export function HeatmapLegend({ colors }: HeatmapLegendProps) {
    return (
        <div className="flex items-center gap-1 text-gray-300 text-xs mb-4">
            <span>Less</span>

            <div className="flex justify-center items-center gap-0.5">
                {colors.map((color) => (
                    <span
                        key={color}
                        className="w-3.5 aspect-square rounded-xs"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>

            <span>More</span>
        </div>
    );
}