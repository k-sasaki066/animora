export type NetworkColumn = {
    key: string;
    label: string;
    className?: string;
};

export type NetworkRow = {
    item: string;
    meaning: string;
    usage: string;
    detail: string;
};

export const networkColumns: NetworkColumn[] = [
    { key: "item", label: "項目", className: "font-mono" },
    { key: "meaning", label: "意味" },
    { key: "usage", label: "用途" },
    { key: "detail", label: "詳細" },
];

export const networkData: NetworkRow[] = [
    {
        item: "200",
        meaning: "通信成功",
        usage: "HTTPステータス確認",
        detail:
            "リクエストが正常に完了した状態。\nJS・画像・API取得などが問題なく読み込まれている。",
    },
    {
        item: "script",
        meaning: "JavaScriptファイル",
        usage: "読み込まれた種類の確認",
        detail:
            "通信されたファイルタイプ。\nReact.lazy や dynamic import の chunk.js もここに表示される。",
    },
    {
        item: "webpack.js?v=...",
        meaning: "Webpack runtime が読み込み指示",
        usage: "lazy / code splitting確認",
        detail:
            "Webpackのランタイムが追加JSを動的読み込みしたことを示す。\nReact.lazy や import() が動いた時によく出る。",
    },
    {
        item: "441kB",
        meaning: "ファイルサイズ",
        usage: "重さの確認",
        detail:
            "取得したJavaScriptの容量。\nサイズが大きい場合は lazy化・分割・圧縮の対象になる。",
    },
    {
        item: "142ms",
        meaning: "読み込み時間",
        usage: "速度確認",
        detail:
            "通信完了までにかかった時間。\n回線速度・サーバー応答・ファイルサイズの影響を受ける。",
    },
];