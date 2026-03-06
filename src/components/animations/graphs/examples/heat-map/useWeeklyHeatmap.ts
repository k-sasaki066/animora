
import { useMemo, useState } from "react";
import { Data, generateYearData } from "./heatmapUtils";

const thisYear = new Date().getFullYear();
export const years = [thisYear - 2, thisYear - 1, thisYear];

export type WeeklyStats = {
    total: number;
    activeDays: number;
    maxStreak: number;
    bestDay: Data;
};

export const useWeeklyHeatmap = () => {
    const [year, setYear] = useState(years[2]);

    // 初期データ生成（3年分）
    const [heatmapData] = useState(() => ({
        [years[0]]: generateYearData(years[0]),
        [years[1]]: generateYearData(years[1]),
        [years[2]]: generateYearData(years[2])
    }));

    const data = heatmapData[year];

    // 統計計算
    const stats: WeeklyStats = useMemo(() => {
        const total = data.reduce((sum, d) => sum + d.value, 0);
        const activeDays = data.filter(d => d.value > 0).length;
        const bestDay = data.reduce((max, d) => d.value > max.value ? d : max);

        let streak = 0, maxStreak = 0;
        [...data].sort((a,b) => a.date.getTime() - b.date.getTime()).forEach(d => {
            if(d.value>0){ streak++; maxStreak = Math.max(maxStreak, streak);}
            else streak=0;
        });

        return { total, activeDays, maxStreak, bestDay };
    }, [data]);

    // 月 → 最初のweekマッピング
    const monthWeekMap = useMemo(() => {
        const map: Record<number, number> = {};
        data.forEach(d => {
            if (map[d.month] === undefined)
                map[d.month] = d.week;
        });
        return map;
    }, [data]);

    // 最大week
    const maxWeek = useMemo(() => Math.max(...data.map(d=>d.week))+1, [data]);

    return {
        year,
        setYear,
        data,
        stats,
        monthWeekMap,
        maxWeek
    };
};