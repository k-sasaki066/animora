import dedent from "dedent";

export const detail = dedent(`
    getElementsByClassName() / getElementsByTagName() で取得される複数要素

    \`\`\`js
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>

    const items = document.getElementsByClassName("item");

    console.log(items);
        // HTMLCollection(3)
    \`\`\`

    特徴

    - 配列ではない
    - lengthあり
    - [0] で取得可能
    - DOM変更で自動更新（ライブ）

    \`\`\`js
    console.log(items[0].textContent);
        // A
    \`\`\`

    ---

    ループする場合
    \`\`\`js
    Array.from(items).forEach(item => {
        console.log(item.textContent);
    });
    \`\`\`
`);