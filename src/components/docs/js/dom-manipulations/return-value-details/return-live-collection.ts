import dedent from "dedent";

export const detail = dedent(`
    HTMLCollection はDOM変更に追従する

    \`\`\`js
    <li class="item">A</li>
    <li class="item">B</li>

    const items = document.getElementsByClassName("item");

    console.log(items.length);
        // 2

    const li = document.createElement("li");
    li.className = "item";
    document.body.appendChild(li);

    console.log(items.length);
    // 3
    \`\`\`
`);