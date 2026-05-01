import type { DetailKey } from "./rel-details/detail-map";

export type RelColumn = {
    key: string;
    label: string;
    className?: string;
    detailKey?: DetailKey;
};

export type RelRow = {
    value: string;
    meaning: string;
    usage: string;
    detailKey?: DetailKey;
};

export const relColumns: RelColumn[] = [
    { key: "value", label: "値", className: "font-mono" },
    { key: "meaning", label: "意味" },
    { key: "usage", label: "使用場面" },
];

export const relData: RelRow[] = [
    {
        value: "noopener",
        meaning: "新しいタブから元ページを操作できなくする",
        usage: "target=_blank時",
        detailKey: "relNoopener",
    },
    {
        value: "noreferrer",
        meaning: "遷移元URLを送らない",
        usage: "外部リンク",
        detailKey: "relNoreferrer",
    },
    {
        value: "nofollow",
        meaning: "SEO評価を渡さない",
        usage: "広告リンク",
        detailKey: "relNofollow",
    },
    {
        value: "prev",
        meaning: "前ページ",
        usage: "ページネーション",
        detailKey: "relPrev",
    },
    {
        value: "next",
        meaning: "次ページ",
        usage: "ページネーション",
        detailKey: "relNext",
    },
    {
        value: "stylesheet",
        meaning: "CSS読み込み",
        usage: "<link>タグ",
        detailKey: "relStylesheet",
    },
];