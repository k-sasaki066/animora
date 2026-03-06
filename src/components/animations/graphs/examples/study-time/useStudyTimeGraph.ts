import { useState } from "react";
import { LegendPayload } from "recharts";
import { weekData, monthData, yearData, RangeType } from "./data";

export function useStudyTimeGraph() {
    const [range, setRange] = useState<RangeType>("week");

    const data =
        range === "week"
            ? weekData
            : range === "month"
                ? monthData
                : yearData;

    const totals = data.reduce(
        (acc, cur) => {
            acc.math += cur.math;
            acc.english += cur.english;
            acc.science += cur.science;
            return acc;
        },
        { math: 0, english: 0, science: 0 }
    );

    const totalHours = totals.math + totals.english + totals.science;
    const avgHours = totalHours / data.length;

    const avgLabel = range === "year" ? "month" : "day";

    const target = range === "year" ? 80 : 2;

    const [hidden, setHidden] = useState<Record<string, boolean>>({});

    const handleLegendClick = (o: LegendPayload) => {
        const { dataKey } = o;

        setHidden((prev) => ({
            ...prev,
            [dataKey as string]: !prev[dataKey as string],
        }));
    };

    return {
        range,
        setRange,
        data,
        totals,
        totalHours,
        avgHours,
        avgLabel,
        target,
        hidden,
        handleLegendClick,
    };
}