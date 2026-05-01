import dedent from "dedent";

export const detail = dedent(`
    \`\`\`html
    <a href="https://example.com" target="_blank" rel="noopener">
    \`\`\`
    新しいタブで開いたページから\`window.opener\`経由で元ページを操作されるのを防ぐ

    **セキュリティ対策として重要**
`);