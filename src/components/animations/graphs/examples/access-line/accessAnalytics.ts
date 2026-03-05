import type { AccessData } from "./accessData";

export function AccessAnalytics(
    data: ReadonlyArray<AccessData>
) {
    const avg =
        data.reduce((sum, d) => sum + d.access, 0) / data.length;

    const max = Math.max(...data.map((d) => d.access));
    const niceMax = Math.ceil((max + 1) / 10) * 10;

    const today = data[data.length - 1].access;
    const yesterday = data[data.length - 2].access;

    const diff = today - yesterday;
    const diffPercent = ((diff / yesterday) * 100).toFixed(1);

    return {
        avg,
        max,
        niceMax,
        today,
        yesterday,
        diff,
        diffPercent
    };
}