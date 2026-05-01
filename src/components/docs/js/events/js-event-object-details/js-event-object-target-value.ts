import dedent from "dedent";

export const detail = dedent(`
    \`\`\`html
    <input id="text" />
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#text");

    input.addEventListener("input", (e) => {
        console.log(e.target.value);
    });
    \`\`\`

    🖨 実行結果
    \`\`\`txt
    h
    he
    hel
    hell
    hello
    \`\`\`
    入力のたびに値が更新される

    \`\`\`js
    console.log("検索:", e.target.value);
    \`\`\`
    👉 検索サジェストやリアルタイムフィルタ
`);