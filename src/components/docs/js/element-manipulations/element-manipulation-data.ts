import type { DetailKey } from "./element-manipulation-details/detail-map";

export type ElementManipulationItem = {
    process: string;
    detailKey?: DetailKey;
};

export const elementColumns = [
    { key: "process", label: "要素追加・削除" },
];

export const elementData: ElementManipulationItem[] = [
    {
        process: "末尾に要素追加（append）",
        detailKey: "elementAppend",
    },
    {
        process: "先頭に要素追加（prepend）",
        detailKey: "elementPrepend",
    },
    {
        process: "HTML文字列で追加（innerHTML）",
        detailKey: "elementInnerHtml",
    },
    {
        process: "指定位置に追加（insertAdjacentHTML）",
        detailKey: "elementInsertAdjacentHtml",
    },
    {
        process: "要素削除（remove）",
        detailKey: "elementRemove",
    },
    {
        process: "子要素を全削除",
        detailKey: "elementRemoveAllChildren",
    },
    {
        process: "特定要素だけ削除",
        detailKey: "elementRemoveSpecific",
    },
    {
        process: "要素置き換え（replaceWith）",
        detailKey: "elementReplaceWith",
    },
    {
        process: "複製して追加（cloneNode）",
        detailKey: "elementCloneNode",
    },
    {
        process: "存在確認して追加",
        detailKey: "elementCheckAndAppend",
    },
];