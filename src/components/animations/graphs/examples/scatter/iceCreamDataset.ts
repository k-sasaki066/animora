export type Data = {
    temp: number;
    sales: number;
    humidity: number;
};

export type Year = keyof typeof dataset;

const noise = (value: number, range = 15) =>
  value + Math.floor((Math.random() - 0.5) * range);

const generateYearDataSparse = (): Data[] => {
    const temps: number[] = [];

    const pushTemps = (base: number, count: number) => {
        for (let i = 0; i < count; i++) {
            temps.push(noise(base, 3)); // 温度の揺らぎ
        }
    };

    // 冬
    pushTemps(8, 4);
    pushTemps(10, 4);
    pushTemps(12, 4);

    // 春
    pushTemps(15, 4);
    pushTemps(18, 4);
    pushTemps(20, 4);

    // 初夏
    pushTemps(23, 4);
    pushTemps(26, 4);

    // 夏
    pushTemps(30, 5);
    pushTemps(32, 5);

    // 秋
    pushTemps(22, 4);
    pushTemps(18, 4);

    return temps.map((temp) => {
        const humidity = Math.min(
            90,
            Math.max(
                40,
                Math.round(50 + (temp - 20) * 1.5 + noise(0, 10))
            )
        );

        const baseSales = temp * 12;

        const winterBoost =
            temp < 15
                ? (15 - temp) * 6 + noise(10, 5) // 気温が低いほど少し売上増
                : 0;

        return {
            temp,
            sales: noise(baseSales + winterBoost, 50),
            humidity
        };
    });
};

export const dataset = {
    "2023": generateYearDataSparse(),
    "2024": generateYearDataSparse(),
    "2025": generateYearDataSparse(),
} as const;