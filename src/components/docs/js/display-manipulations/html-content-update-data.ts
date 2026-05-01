import type { DetailKey } from "./html-content-update-details/detail-map";

export type HTMLContentUpdateItem = {
    process: string;
    detailKey?: DetailKey;
};

export const htmlContentColumns = [
    { key: "process", label: "処理", className: "font-mono text-xs" },
];

export const htmlContentData: HTMLContentUpdateItem[] = [
    {
        process: "お知らせ表示",
        detailKey: "htmlContentUpdateInfo",
    },
    {
        process: "アイコン付き文言",
        detailKey: "htmlContentUpdateMessageWithIcon",
    },
    {
        process: "リッチテキスト表示",
        detailKey: "htmlContentUpdateRichText",
    },
    {
        process: "ローディング表示",
        detailKey: "htmlContentUpdateLoading",
    },
    {
        process: "カード生成",
        detailKey: "htmlContentUpdateCardGeneration",
    },
    {
        process: "モーダル表示",
        detailKey: "htmlContentUpdateModal",
    },
    {
        process: "タブ切替",
        detailKey: "htmlContentUpdateTagToggle",
    },
    {
        process: "ページネーション生成",
        detailKey: "htmlContentUpdatePagination",
    },
    {
        process: "FAQアコーディオン",
        detailKey: "htmlContentUpdateFaq",
    },
    {
        process: "チャットUI追加",
        detailKey: "htmlContentUpdateChatInterface",
    },
    {
        process: "空状態UI（データなし）",
        detailKey: "htmlContentUpdateEmptyState",
    },
];