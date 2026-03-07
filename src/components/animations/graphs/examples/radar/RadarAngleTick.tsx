type Props = {
    payload?: { value: string };
    x?: number;
    y?: number;
    textAnchor?: "start" | "middle" | "end" | "inherit";
};

export default function RadarAngleTick({
    payload,
    x = 0,
    y = 0,
    textAnchor = "middle",
}: Props) {
    const label = payload?.value ?? "";

    const lines =
        label.length > 4
            ? [label.slice(0, 3), label.slice(3)]
            : [label];

    return (
        <text x={x} y={y} textAnchor={textAnchor} fill="#F3F4F6" fontSize={12}>
            {lines.map((line, i) => (
                <tspan key={i} x={x} dy={i === 0 ? 0 : 14}>
                    {line}
                </tspan>
            ))}
        </text>
    );
}