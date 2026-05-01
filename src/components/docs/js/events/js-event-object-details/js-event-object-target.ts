import dedent from "dedent";

export const detail = dedent(`
    \`\`\`html
    <button id="btn">クリック</button>
    \`\`\`

    \`\`\`js
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", (e) => {
        console.log(e.target);
    });
    \`\`\`

    🖨 実行結果
    \`\`\`html
    <button id="btn">クリック</button>
    \`\`\`
    実際にクリックされた要素そのもの

    \`\`\`js
    e.target.textContent = "押された";
    \`\`\`
    👉 押したボタンの文字を変更できる
`);