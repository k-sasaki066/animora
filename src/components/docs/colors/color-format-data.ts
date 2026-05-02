import type { DetailKey } from "./color-format-details/detail-map";

export type ColorFormatItem = {
    format: string;
    description: string;
    detailKey?: DetailKey;
};

export const colorFormatColumns = [
    { key: "format", label: "フォーマット", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const colorFormatData: ColorFormatItem[] = [
    {
        format: "HEX",
        description: "16進数カラーコードを使って色を表現",
        detailKey: "colorHex",
    },
    {
        format: "RGB",
        description: "光の三原色を使って色を表現",
        detailKey: "colorRgb",
    },
    {
        format: "HSL",
        description: "RGBより直感的に「人間が理解しやすい色を指定」",
        detailKey: "colorHsl",
    },
];