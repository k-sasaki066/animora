export type ThresholdColumn = {
    key: string;
    label: string;
    className?: string;
};

export type ThresholdRow = {
    value: string;
    meaning: string;
    usage: string;
};

export const thresholdColumns: ThresholdColumn[] = [
    { key: "value", label: "値", className: "font-mono" },
    { key: "meaning", label: "意味" },
    { key: "usage", label: "用途" },
];

export const thresholdData: ThresholdRow[] = [
    {
        value: "0",
        meaning: "少しでも見えたら反応",
        usage: "lazy load（画像遅延読み込み）",
    },
    {
        value: "0.25",
        meaning: "25%見えたら反応",
        usage: "軽いフェードイン演出",
    },
    {
        value: "0.5",
        meaning: "半分見えたら反応",
        usage: "現在セクション判定・ナビ連動",
    },
    {
        value: "1",
        meaning: "全部見えたら反応",
        usage: "完全表示時の処理・広告計測",
    },
];