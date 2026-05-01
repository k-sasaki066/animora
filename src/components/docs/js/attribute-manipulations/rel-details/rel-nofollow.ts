import dedent from "dedent";

export const detail = dedent(`
    \`\`\`html
    <a href="https://example.com" rel="nofollow">リンク</a>
    \`\`\`
    リンク先に このリンクを検索エンジンは評価しないでくださいと伝えている<br />
    Googleなどに対して「このリンクは信用してるわけじゃないよ」と伝える

    使用場面
    - 広告リンク
    - ユーザー投稿（コメント・掲示板）= スパム対策
    - 信頼していない外部リンク = 参考として貼るだけ

    #### ⚠️ なぜ必要？
    もし全部普通のリンクだと\`スパムサイトに評価が流れる\`ため、SEO的にマイナス
`);