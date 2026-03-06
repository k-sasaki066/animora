
export type Data = {
    day: number;
    week: number;
    month: number;
    value: number;
    date: Date;
};

export const colors = [
    "#161b22",
    "#0e4429",
    "#006d32",
    "#26a641",
    "#39d353" // 4+
];

// ランダムに値を生成（重み付き）
export const generateWeightedValue = (): number => {
    const weights = [
        0,0,0,0,0,
        1,1,1,1,1,
        2,2,2,
        3,3,
        4,5,6,7,8
    ];
    const index = Math.floor(Math.random() * weights.length);
    return weights[index];
};

// 年ごとの日データを生成
export const generateYearData = (year: number): Data[] => {
    const data: Data[] = [];
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);

    let currentWeek = 0;
    let prevMonth = start.getMonth();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const d = new Date(start);
    while (d <= end) {
        const month = d.getMonth();
        // 月が変わったら余白weekを追加
        if (month !== prevMonth) {
            currentWeek++;
            prevMonth = month;
        }

        const day = (d.getDay() + 6) % 7;
        const value = d < today ? generateWeightedValue() : 0;

        data.push({ day, week: currentWeek, month, value, date: new Date(d) });
        if (day === 6) currentWeek++;

        d.setDate(d.getDate() + 1);
    }
    return data;
};

// 日付から色インデックスを取得
export const getColorIndex = (value: number) => (value >= 4 ? 4 : value);