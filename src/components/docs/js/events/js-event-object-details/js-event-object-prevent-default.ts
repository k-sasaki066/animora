import dedent from "dedent";

export const detail = dedent(`
    \`\`\`html
    <form id="form">
        <button type="submit">送信</button>
    </form>
    \`\`\`

    \`\`\`js
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("送信止めた");
    });
    \`\`\`

    🖨 実行結果
    \`\`\`txt
    送信止めた
    \`\`\`
    本来はページリロードされるが、それを止めている

    \`\`\`js
    e.preventDefault();
    fetch("/api/login");
    \`\`\`
    👉 SPAログインなどで必須
`);