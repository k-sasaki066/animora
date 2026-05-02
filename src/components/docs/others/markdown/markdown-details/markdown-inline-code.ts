import dedent from "dedent";

export const detail = dedent(`
    文章の途中で コード・コマンド・変数名・ファイル名 などを強調表示する書き方

    \`\`\`markdown
    このワードを \`強調\` したい
    \`\`\`

    \`useState()\` を使って状態管理します。<br />
    \`\`a\`b\`\`

    ⚠️ シングルクォートではない
    \`\`\`markdown
    ⭕️ \`バッククォート\`       shift + @
    ❌ \'シングルクォート\'     shift + 7
    \`\`\`
`);