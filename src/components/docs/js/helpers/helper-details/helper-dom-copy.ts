import dedent from "dedent";

export const detail = dedent(`
    ### copy
    ブラウザのクリップボードに文字列をコピー

    #### 使用場面
    - URL共有ボタン
    - クーポンコードコピ
    - 招待リンク
    - コードスニペットコピー

    \`\`\`js
    async function copy(text) {
        await navigator.clipboard.writeText(text);
    }
    \`\`\`
`);