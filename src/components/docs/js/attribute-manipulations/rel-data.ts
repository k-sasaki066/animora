import dedent from "dedent";

export type RelColumn = {
    key: string;
    label: string;
    className?: string;
    detail?: string;
};

export type RelRow = {
    value: string;
    meaning: string;
    usage: string;
    detail?: string;
};

export const relColumns: RelColumn[] = [
    { key: "value", label: "値", className: "font-mono" },
    { key: "meaning", label: "意味" },
    { key: "usage", label: "使用場面" },
];

export const relData: RelRow[] = [
    {
        value: "noopener",
        meaning: "新しいタブから元ページを操作できなくする",
        usage: "target=_blank時",
        detail: dedent(`

            \`\`\`html
            <a href="https://example.com" target="_blank" rel="noopener">
            \`\`\`
            新しいタブで開いたページから\`window.opener\`経由で元ページを操作されるのを防ぐ

            **セキュリティ対策として重要**
        `),
    },
    {
        value: "noreferrer",
        meaning: "遷移元URLを送らない",
        usage: "外部リンク",
        detail: dedent(`

            \`\`\`html
            <a href="https://example.com" target="_blank" rel="noreferrer">
            \`\`\`
            リンク先に どこから来たか（Referer） を送らなくなる

            使用場面
            - 外部サービス
            - アフィリエイト
            - プライバシー配慮

            \`\`\`html
            <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                外部リンク
            </a>
            \`\`\`
        `),
    },
    {
        value: "nofollow",
        meaning: "SEO評価を渡さない",
        usage: "広告リンク",
    },
    {
        value: "prev",
        meaning: "前ページ",
        usage: "ページネーション",
    },
    {
        value: "next",
        meaning: "次ページ",
        usage: "ページネーション",
    },
    {
        value: "stylesheet",
        meaning: "CSS読み込み",
        usage: "<link>タグ",
    },
];