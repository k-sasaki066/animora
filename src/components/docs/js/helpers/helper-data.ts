type ControlCompare = {
    item: string;
    throttle: string;
    debounce: string;
};

export const controlCompareColumns = [
    { key: "item", label: "項目", className: "font-semibold" },
    { key: "throttle", label: "throttle" },
    { key: "debounce", label: "debounce" },
];

export const controlCompareData: ControlCompare[] = [
    {
        item: "実行タイミング",
        throttle: "一定間隔ごと",
        debounce: "最後の1回だけ",
    },
    {
        item: "向いている用途",
        throttle: "scroll / resize",
        debounce: "検索入力",
    },
    {
        item: "連続中の反応",
        throttle: "あり",
        debounce: "なし",
    },
];