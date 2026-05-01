import type { DetailKey } from "./return-value-details/detail-map";

export type ReturnValueItem = {
    return: string;
    description: string;
    detailKey?: DetailKey;
};

export const returnValueColumns = [
    { key: "return", label: "返り値", className: "font-mono text-xs" },
    { key: "description", label: "説明" },
];

export const returnValueData: ReturnValueItem[] = [
    {
        return: "HTMLElement",
        description: "単一のHTML要素オブジェクト",
        detailKey: "returnHtmlElement",
    },

    {
        return: "HTMLCollection",
        description: "複数要素のライブコレクション",
        detailKey: "returnHtmlCollection",
    },

    {
        return: "NodeList",
        description: "複数要素のリスト",
        detailKey: "returnNodeList",
    },

    {
        return: "Live Collection",
        description: "HTMLCollection の自動更新",
        detailKey: "returnLiveCollection",
    },

    {
        return: "Static Collection",
        description: "NodeList の固定リスト",
        detailKey: "returnStaticCollection",
    },
    {
        return: "HTMLCollection と NodeList の違い",
        description: "初心者向け比較",
        detailKey: "returnComparisonData",
    },
];