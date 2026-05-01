import dedent from "dedent";

export const detail = dedent(`
    querySelectorAll() は取得時点の内容

    \`\`\`js
    <li class="item">A</li>
    <li class="item">B</li>

    const items = document.querySelectorAll(".item");

    console.log(items.length);
    // 2

    const li = document.createElement("li");
    li.className = "item";
    document.body.appendChild(li);

    console.log(items.length);
    // 2
    \`\`\`

    ---

    再取得が必要
    \`\`\`js
    const newItems = document.querySelectorAll(".item");

    console.log(newItems.length);
        // 3
    \`\`\`
`);