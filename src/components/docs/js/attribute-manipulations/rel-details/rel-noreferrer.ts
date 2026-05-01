import dedent from "dedent";

export const detail = dedent(`
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
`);