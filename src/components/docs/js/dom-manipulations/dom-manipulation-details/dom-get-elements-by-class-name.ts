import dedent from "dedent";

export const detail = dedent(`
    **返り値：HTMLCollection**

    同じclass名の要素をまとめて取得する<br />
    配列っぽく見えるが、JavaScriptの配列ではない<br />
    インデックス指定で取得可能

    \`\`\`html
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    \`\`\`

    \`\`\`js
    const items = document.getElementsByClassName("item");

    console.log(items);
        // HTMLCollection(3) [li.item, li.item, li.item]
        1個目 → <li class="item">A</li>
        2個目 → <li class="item">B</li>
        3個目 → <li class="item">C</li>

    console.log(items[0].textContent);
        // A
    \`\`\`

    **特徴**
    - \`items[0]\` のように番号指定できる
    - \`length\` が使える
    - \`forEach()\` はそのまま使えない

    **配列に変換すると便利**
    \`\`\`js
    const arr = Array.from(items);

    console.log(arr);
        // [li.item, li.item, li.item]

    arr.forEach(item => {
        console.log(item.textContent);
    });
    \`\`\`

    ---

    **Live（自動更新）**<br />
    HTMLが増減すると中身も自動で変わる

    \`\`\`js
    console.log(items.length); // 3

    新しく追加すると...

    console.log(items.length); // 4
    \`\`\`
`);