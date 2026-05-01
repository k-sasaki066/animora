import dedent from "dedent";

export const detail = dedent(`
    \`\`\`js
    btn.addEventListener("click", (e) => {
        console.log(e.type);
    });
    \`\`\`

    🖨 実行結果
    \`\`\`txt
    click
    \`\`\`
    今どのイベントが動いたか分かる
`);