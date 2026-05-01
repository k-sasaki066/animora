import type { DetailKey } from "./keyframes-details/detail-map";

export type KeyframesItem = {
    item: string;
    detailKey?: DetailKey;
};

export const keyframesColumns = [
    { key: "item", label: "指定方法" },
];

export const keyframesData: KeyframesItem[] = [
    {
        item: "from / to",
        detailKey: "keyframesFromTo",
    },
    {
        item: "0%〜100%",
        detailKey: "keyframesPercent",
    },
];