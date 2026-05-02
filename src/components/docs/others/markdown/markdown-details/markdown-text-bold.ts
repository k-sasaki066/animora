import dedent from "dedent";

export const detail = dedent(`
    文字を 強調して目立たせたい時 に太字を使う

    \`\`\`markdown
    **太字にしたい文字**
    __太字にしたい文字__  (単語内で崩れる可能性があるため非推奨)
    ***かなり強調***     太字 + 斜体
    \`\`\`

    1. **npm install** を実行
    2. **npm run dev** で起動

    ***太字 + 斜体***もできる

    ⚠️ 記号の間にスペースを入れない
    \`\`\`markdown
    ⭕️ **太字**
    ❌ ** 太字 **
    \`\`\`
`);