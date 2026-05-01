import dedent from "dedent";

export const detail = dedent(`
    getElementById() や querySelector() で取得される1件の要素

    \`\`\`js
    <h1 id="title">Hello</h1>

    const title = document.getElementById("title");

    console.log(title);
        // <h1 id="title">Hello</h1>
    \`\`\`

    ---

    主な操作
    \`\`\`js
    title.textContent
    title.innerHTML
    title.style.color = "red"
    title.classList.add("active")
    \`\`\`

    ---

    よく使う取得メソッド
    \`\`\`txt
    getElementById()
    querySelector()
    \`\`\`
`);