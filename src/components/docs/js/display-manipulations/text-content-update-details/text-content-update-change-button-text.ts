import dedent from "dedent";

export const detail = dedent(`
    \`\`\`html
    <h1 id="title">ようこそ</h1>
    <button id="btn">変更</button>
    \`\`\`

    \`\`\`js
    const title = document.querySelector("#title");
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", () => {
        title.textContent = "こんにちは";
    });
    \`\`\`
`);