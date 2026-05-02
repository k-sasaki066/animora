import dedent from "dedent";

export const detail = dedent(`
    ### pwd（Print Working Directory）
    現在地の絶対パスを表示

    \`\`\`bash
    pwd
    \`\`\`

    - 間違った場所で操作していないか
    - rm前の確認
    - Docker内の位置確認

    #### 実行例
    \`\`\`bash
    pwd
    → /Users/username/my-next-app
    \`\`\`
`);