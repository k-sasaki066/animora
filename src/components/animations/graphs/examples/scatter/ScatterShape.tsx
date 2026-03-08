type Props = {
    cx?: number;
    cy?: number;
    payload?: any;
    fill?: string
    activePoint: any;
};

export default function ScatterShape({
    cx,
    cy,
    payload,
    fill = "#8884d8",
    activePoint
}: Props) {

    const humidity = payload.humidity ?? 50;

    const opacity = 0.25 + (humidity - 40) / 70;

    const isActive =
        activePoint &&
        activePoint.temp === payload.temp &&
        activePoint.sales === payload.sales;

    return (
        <g>
            <circle
                cx={cx}
                cy={cy}
                r={8}
                fill="transparent"
            />

            <circle
                cx={cx}
                cy={cy}
                r={6}
                fill={isActive ? "#ffffff" : fill}
                fillOpacity={isActive ? 1 : opacity}
                stroke={isActive ? fill : "none"}
                strokeWidth={2}
                pointerEvents="none"
            />
        </g>
    );
}