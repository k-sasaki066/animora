// Hue
type Hue = {
    value: string;
    color: string;
    description: string;
};

export const hueColumns = [
    { key: "value", label: "値", className: "font-mono" },
    { key: "color", label: "色" },
    { key: "description", label: "意味" }
];

export const hueData: Hue[] = [
    {
        value: "0°",
        color: "赤",
        description: "基本の赤色"
    },
    {
        value: "120°",
        color: "緑",
        description: "自然・安全系の色"
    },
    {
        value: "240°",
        color: "青",
        description: "冷たい・信頼感のある色"
    },
];

// Saturation
type Saturation = {
    value: string;
    state: string;
    description: string;
};

export const saturationColumns = [
    { key: "value", label: "値", className: "font-mono" },
    { key: "state", label: "状態" },
    { key: "description", label: "説明" }
];

export const saturationData: Saturation[] = [
    {
        value: "0%",
        state: "グレー",
        description: "色味がなく白黒に近い"
    },
    {
        value: "50%",
        state: "やや薄い",
        description: "落ち着いた印象"
    },
    {
        value: "100%",
        state: "鮮やか",
        description: "ビビッドな状態"
    },
];

// Lightness
type Lightness = {
    value: string;
    state: string;
    description: string;
};

export const lightnessColumns = [
    { key: "value", label: "値", className: "font-mono" },
    { key: "state", label: "状態" },
    { key: "description", label: "説明" }
];

export const lightnessData: Lightness[] = [
    {
        value: "0%",
        state: "黒",
        description: "完全に暗い"
    },
    {
        value: "50%",
        state: "標準",
        description: "自然な明るさ"
    },
    {
        value: "100%",
        state: "白",
        description: "完全に明るい"
    },
];

// ColorComparison
type ColorComparison = {
    item: string;
    rgb: string;
    hsl: string;
};

export const colorComparisonColumns = [
    { key: "item", label: "項目", className: "font-mono" },
    { key: "rgb", label: "RGB" },
    { key: "hsl", label: "HSL" }
];

export const colorComparisonData: ColorComparison[] = [
    {
        item: "考え方",
        rgb: "光の強さ",
        hsl: "人間の感覚",
    },
    {
        item: "直感性",
        rgb: "やや難しい",
        hsl: "わかりやすい",
    },
    {
        item: "調整",
        rgb: "数値操作",
        hsl: "色・明るさ・鮮やかさ",
    },
];

