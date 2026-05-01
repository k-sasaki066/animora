import type { DetailKey } from "./style-update-details/detail-map";

export type StyleUpdateItem = {
    process: string;
    detailKey?: DetailKey;
};

export const styleColumns = [
    { key: "process", label: "処理", className: "font-mono text-xs" },
];

export const styleData: StyleUpdateItem[] = [
    {
        process: "注意文の色変更",
        detailKey: "styleUpdateWarningColor",
    },
    {
        process: "背景色変更（選択状態）",
        detailKey: "styleUpdateChangeBackgroundColor",
    },
    {
        process: "在庫切れ商品の見た目変更",
        detailKey: "styleUpdateOutOfStock",
    },
    {
        process: "スクロールでヘッダー固定",
        detailKey: "styleUpdateStickyHeader",
    },
    {
        process: "未読通知バッジ表示",
        detailKey: "styleUpdateUnreadNotificationBadge",
    },
    {
        process: "画像読み込み後にフェード表示",
        detailKey: "styleUpdateImageLoadFadeIn",
    },
    {
        process: "入力欄フォーカス時に強調",
        detailKey: "styleUpdateInputFocusHighlight",
    },
    {
        process: "ドラッグ中の見た目変更",
        detailKey: "styleUpdateDragVisualFeedback",
    },
    {
        process: "完了タスクに取り消し線",
        detailKey: "styleUpdateTaskCompletedStrikethrough",
    },
];