export type CommandItem = {
    command: string;
    description: string;
    detail?: string;
};

export const markdownUseColumns = [
    { key: "command", label: "使用場面", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const markdownUseData: CommandItem[] = [
    {
        command: "README / ドキュメント作成",
        description: "GitHubのREADME、開発手順書、仕様書などを見やすく整理して作成できる",
    },
    {
        command: "技術ブログ / 記事投稿",
        description: "見出し・コードブロック・画像を使って技術記事やブログ記事を書ける",
    },
    {
        command: "学習ノート / メモ",
        description: "学習内容、調査メモ、コマンド集などを簡潔にまとめられる",
    },
    {
        command: "タスク管理 / ToDo",
        description: "チェックリスト形式で進捗管理や作業メモを管理できる",
    },
    {
        command: "チーム共有資料",
        description: "会議メモ、議事録、開発ルール、オンボーディング資料などに使える",
    },
    {
        command: "APIドキュメント",
        description: "エンドポイント、パラメータ、レスポンス例などを整理して記述できる",
    },
    {
        command: "ポートフォリオ / 自己紹介",
        description: "GitHubプロフィールやポートフォリオ説明文の作成に使える",
    },
    {
        command: "静的サイト生成",
        description: "Next.js、Astro、DocusaurusなどでMarkdownからWebページ化できる",
    },
    {
        command: "コード共有",
        description: "コードブロック付きでサンプルコードや手順を共有できる",
    },
    {
        command: "日報 / 週報",
        description: "作業内容、課題、進捗をテンプレート化して記録しやすい",
    },
];