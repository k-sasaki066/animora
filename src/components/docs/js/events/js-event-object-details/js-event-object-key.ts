import dedent from "dedent";

export const detail = dedent(`
    \`\`\`js
    window.addEventListener("keydown", (e) => {
        console.log(e.key);
    });
    \`\`\`

    🖨 実行結果
    \`\`\`txt
    a
    Enter
    ArrowUp
    Escape
    \`\`\`
    押したキーの名前がそのまま出る

    \`\`\`js
    if (e.key === "Enter") {
        console.log("検索実行");
    }
    \`\`\`
    👉 Enterで検索UIなど
`);