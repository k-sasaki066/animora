import type { DetailKey } from "./xml-http-request-details/detail-map";

export type XMLHttpRequestItem = {
    process: string;
    description: string;
    detailKey?: DetailKey;
};

export const xmlHttpRequestColumns = [
    { key: "process", label: "使用場面" },
    { key: "description", label: "内容" },
];

export const xmlHttpRequestData: XMLHttpRequestItem[] = [
    {
        process: "APIからデータ取得(GET）",
        description:
            "APIやサーバーからデータを取得できる",
        detailKey: "xmlGetRequest",
    },
    {
        process: "データ送信（POST）",
        description: "フォームやJSONデータをサーバーへ送信できる",
        detailKey: "xmlPostRequest",
    },
    {
        process: "ファイルアップロード&ダウンロード",
        description: "画像・動画などのファイルを送受信できる",
    },
    {
        process: "アップロード&ダウンロード進捗取得",
        description: "ファイル送受信の進行状況を取得できる",
        detailKey: "xmlProgress",
    },
    {
        process: "ヘッダー操作",
        description: "リクエストヘッダーを設定できる",
        detailKey: "xmlRequestHeader",
    },
    {
        process: "レスポンス形式指定",
        description: "JSONやBlobなど形式を指定できる",
        detailKey: "xmlResponse",
    },
    {
        process: "認証付き通信",
        description: "Cookieや認証情報を含めて通信できる",
        detailKey: "xmlCredential",
    },
];
