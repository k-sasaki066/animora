import type { DetailKey } from "./text-content-update-details/detail-map";

export type TextContentUpdateItem = {
    process: string;
    detailKey?: DetailKey;
};

export const textContentColumns = [
    { key: "process", label: "処理", className: "font-mono text-xs" },
];

export const textContentData: TextContentUpdateItem[] = [
    {
        process: "商品件数表示",
        detailKey: "textContentUpdateProductCount",
    },
    {
        process: "ログイン状態表示",
        detailKey: "textContentUpdateLoginStatus",
    },
    {
        process: "ボタン押したら文字変更",
        detailKey: "textContentUpdateChangeButtonText",
    },
    {
        process: "送信中ボタン",
        detailKey: "textContentUpdateSendingButton",
    },
    {
        process: "エラーメッセージ表示",
        detailKey: "textContentUpdateErrorMessage",
    },
    {
        process: "API取得後に表示更新",
        detailKey: "textContentUpdateApiFetch",
    },
    {
        process: "メニュー開閉ボタン",
        detailKey: "textContentUpdateMenuToggle",
    },
    {
        process: "カート追加後の文言変更",
        detailKey: "textContentUpdateAddToCart",
    },
    {
        process: "多言語切替（日本語 / 英語）",
        detailKey: "textContentUpdateLanguageSwitch",
    },
];