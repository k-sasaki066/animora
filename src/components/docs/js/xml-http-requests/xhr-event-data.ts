import type { DetailKey } from "./xhr-event-details/detail-map";

export type XHREventItem = {
    event: string;
    meaning: string;
    useCase: string;
    detailKey?: DetailKey;
};

export const xhrEventColumns = [
    { key: "event", label: "イベント", className: "font-mono" },
    { key: "meaning", label: "意味" },
    { key: "useCase", label: "使用場面" },
];

export const xhrEventData: XHREventItem[] = [
    {
        event: "onload",
        meaning: "通信成功（レスポンス受信完了）",
        useCase: "データ表示・完了処理",
        detailKey: "xhrOnload",
    },
    {
        event: "onerror",
        meaning: "通信失敗（ネットワークエラー）",
        useCase: "エラーメッセージ表示",
        detailKey: "xhrOnerror",
    },
    {
        event: "onprogress",
        meaning: "ダウンロード進捗",
        useCase: "画像・データ取得の進捗表示",
        detailKey: "xhrOnprogress",
    },
    {
        event: "upload.onprogress",
        meaning: "アップロード進捗",
        useCase: "ファイルアップロードの進捗バー",
        detailKey: "xhrUploadOnprogress",
    },
    {
        event: "onabort",
        meaning: "通信中断",
        useCase: "キャンセルボタン・途中停止",
        detailKey: "xhrOnabort",
    },
];