import dedent from "dedent";

export const detail = dedent(`
    コードを見やすくそのまま表示する機能

    - 改行が保持される
    - インデントが保持される
    - 等幅フォントになる
    - シンタックスハイライト対応（環境次第）

    \`\`\`\`markdown
    \`\`\`js
    console.log("hello");
    \`\`\`
    \`\`\`\`

    \`\`\`js
    function add(a, b) {
        return a + b;
    }
    \`\`\`

    言語名を付ける
    \`\`\`markdown
    \`\`\`js
    \`\`\`ts
    \`\`\`tsx
    \`\`\`html
    \`\`\`css
    \`\`\`bash
    \`\`\`json
    \`\`\`python
    \`\`\`
    ⚠️ 開始と終了の数を揃える
`);