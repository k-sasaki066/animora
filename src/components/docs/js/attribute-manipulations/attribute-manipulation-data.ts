import type { DetailKey } from "./attribute-manipulation-details/detail-map";

export type AttributeItem = {
    process: string;
    detailKey?: DetailKey;
};

export const attributeColumns = [
    { key: "process", label: "属性操作" },
];

export const attributeData: AttributeItem[] = [
    {
        process: "属性値を取得（getAttribute）",
        detailKey: "attributeGet",
    },
    {
        process: "属性値を変更（setAttribute）",
        detailKey: "attributeUpdate",
    },
    {
        process: "属性削除（removeAttribute）",
        detailKey: "attributeRemove",
    },
    {
        process: "入力欄を無効化（disabled）",
        detailKey: "attributeDisableInput",
    },
    {
        process: "プレースホルダー変更",
        detailKey: "attributePlaceholderUpdate",
    },
    {
        process: "チェック状態変更",
        detailKey: "attributeCheckStateChange",
    },
    {
        process: "画像のalt変更",
        detailKey: "attributeImgAltUpdate",
    },
    {
        process: "リンク先変更",
        detailKey: "attributeLinkHrefUpdate",
    },
    {
        process: "data属性を取得",
        detailKey: "attributeGetData",
    },
    {
        process: "hidden切替",
        detailKey: "attributeToggleHidden",
    },
];