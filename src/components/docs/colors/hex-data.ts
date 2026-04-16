type HexRange = {
    hex: string;
    decimal: number;
    strength: string;
    description: string;
};

export const hexRangeColumns = [
    { key: "hex", label: "16進数", className: "font-mono" },
    { key: "decimal", label: "10進数" },
    { key: "strength", label: "色の強さ" },
    { key: "description", label: "説明" },
];

export const hexRangeData: HexRange[] = [
    {
        hex: "00",
        decimal: 0,
        strength: "なし",
        description: "光が全くない状態",
    },
    {
        hex: "7F",
        decimal: 127,
        strength: "中間",
        description: "半分くらいの明るさ",
    },
    {
        hex: "FF",
        decimal: 255,
        strength: "最大",
        description: "光が最大の状態",
    },
];