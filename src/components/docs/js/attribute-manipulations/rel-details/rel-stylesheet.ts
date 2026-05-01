import dedent from "dedent";

export const detail = dedent(`
    \`\`\`html
    <link rel="stylesheet" href="styles.css" />
    \`\`\`
    このリンクはCSS（スタイルシート）ですと伝えている<br />
    ブラウザに「このファイルを読み込んで見た目を整えてね」と伝える属性

    #### 何をしているのか?
    \`\`\`html
    <link rel="stylesheet" href="styles.css" />
    \`\`\`

    \`\`\`txt
    ① CSSファイルを取得（HTTPリクエスト）
    ② HTMLに適用
    ③ 見た目が変わる
    \`\`\`
`);