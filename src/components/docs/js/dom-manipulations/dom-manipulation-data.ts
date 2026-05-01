import type { DetailKey } from "./dom-manipulation-details/detail-map";

export type DomManipulationItem = {
    selector: string;
    description: string;
    detailKey?: DetailKey;
};

export const selectorColumns = [
    { key: "selector", label: "セレクター", className: "font-mono text-xs" },
    { key: "description", label: "説明" },
];

export const selectorData: DomManipulationItem[] = [
    {
        selector: "getElementById",
        description: "idで取得（1件）",
        detailKey: "domGetElementById",
    },
    {
        selector: "getElementsByClassName",
        description: "classで取得（複数）",
        detailKey: "domGetElementsByClassName",
    },
    {
        selector: "getElementsByTagName",
        description: "タグ名で取得（複数）",
        detailKey: "domGetElementsByTagName",
    },
    {
        selector: "querySelector",
        description: "最初の1件",
        detailKey: "domQuerySelector",
    },
    {
        selector: "querySelectorAll",
        description: "複数取得",
        detailKey: "domQuerySelectorAll",
    },
];
