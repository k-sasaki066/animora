import type { DetailKey } from "./helper-details/detail-map";

export type CommandItem = {
    category: string;
    title: string;
    description: string;
    detailKey?: DetailKey;
};

export const jsUtilityColumns = [
    { key: "title", label: "関数名", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const jsUtilityData: CommandItem[] = [
    {
        category: "format",
        title: "truncate",
        description: "文字列を指定文字数で省略（...表示）",
        detailKey: "helperTruncateText",
    },
    {
        category: "format",
        title: "formatNumber",
        description: "数値をカンマ区切りに変換",
        detailKey: "helperFormatNumber",
    },
    {
        category: "format",
        title: "formatDate",
        description: "日付を日本形式に整形",
        detailKey: "helperFormatDate",
    },
    {
        category: "format",
        title: "capitalize",
        description: "文字列の先頭を大文字に変換",
        detailKey: "helperFormatCapitalize",
    },
    {
        category: "validation",
        title: "isEmpty",
        description: "空文字・null・undefined判定",
        detailKey: "helperIsEmpty",
    },
    {
        category: "validation",
        title: "isOverLimit",
        description: "文字数制限チェック",
        detailKey: "helperIsOverLimit",
    },
    {
        category: "array",
        title: "unique",
        description: "配列の重複削除",
        detailKey: "helperArrayUnique",
    },
    {
        category: "array",
        title: "find",
        description: "条件一致する最初の要素取得",
        detailKey: "helperArrayFind",
    },
    {
        category: "array",
        title: "shuffle",
        description: "配列をランダムに並び替え",
        detailKey: "helperArrayShuffle",
    },
    {
        category: "array",
        title: "randomItem",
        description: "配列からランダムに1件取得",
        detailKey: "helperArrayRandomItem",
    },
    {
        category: "array",
        title: "clean",
        description: "配列から falsy 値を削除する",
        detailKey: "helperArrayClean",
    },
    {
        category: "array/string",
        title: "split",
        description: "指定した区切り文字で文字列を分割し、配列に変換する",
        detailKey: "helperStringSplit",
    },
    {
        category: "array/filter",
        title: "filterList",
        description: "配列からキーワードに一致する要素を抽出（大文字・小文字を区別しない）",
        detailKey: "helperArrayFilter",
    },
    {
        category: "util",
        title: "debounce",
        description: "入力後に遅延して実行",
        detailKey: "helperUtilDebounce",
    },
    {
        category: "util",
        title: "throttle",
        description: "一定間隔で実行制御",
        detailKey: "helperUtilThrottle",
    },
    {
        category: "util",
        title: "sleep",
        description: "処理を一定時間遅延",
        detailKey: "helperUtilSleep",
    },
    {
        category: "dom",
        title: "copy",
        description: "クリップボードにコピー",
        detailKey: "helperDomCopy",
    },
    {
        category: "dom",
        title: "scrollToTop",
        description: "ページトップへスクロール",
        detailKey: "helperDomScrollToTop",
    },
    {
        category: "url",
        title: "URLSearchParams",
        description: "URLクエリパラメータを取得・操作するためのAPI",
        detailKey: "helperUrlSearchParams",
    },
];