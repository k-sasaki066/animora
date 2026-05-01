import type { DetailKey } from "./js-event-object-details/detail-map";

export type EventObjectItem = {
    object: string;
    description: string;
    detailKey?: DetailKey;
};

export const jsEventObjectColumns = [
    { key: "object", label: "イベントオブジェクト", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const jsEventObjectData: EventObjectItem[] = [
    {
        object: "e.target",
        description: "どの要素が押されたか",
        detailKey: "jsEventObjectTarget",
    },
    {
        object: "e.target.value",
        description: "入力値",
        detailKey: "jsEventObjectTargetValue",
    },
    {
        object: "e.preventDefault()",
        description: "デフォルト動作停止",
        detailKey: "jsEventObjectPreventDefault",
    },
    {
        object: "e.key",
        description: "押されたキー",
        detailKey: "jsEventObjectKey",
    },
    {
        object: "e.type",
        description: "どのイベントか",
        detailKey: "jsEventObjectType",
    },
];