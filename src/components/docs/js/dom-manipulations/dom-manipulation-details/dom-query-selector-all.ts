import dedent from "dedent";

export const detail = dedent(`
    **返り値：NodeList**<br />
    CSSセレクタに一致する要素を全部取得する<br />
    forEach使用可

    \`\`\`html
    <button class="btn">送信</button>
    <button class="btn">削除</button>
    <button class="btn">保存</button>
    \`\`\`

    \`\`\`js
    const buttons = document.querySelectorAll(".btn");

    console.log(buttons);
        // NodeList(3) [button.btn, button.btn, button.btn]
        // 『一致した要素が 3件ある』『buttonタグ.class="btn"』

    console.log(buttons[0]);
        // <button class="btn">送信</button>

    console.log(buttons[1].textContent);
        // 削除

    buttons.forEach(btn => {
        console.log(btn.textContent);
    });
        // 送信
        // 削除
        // 保存

    Array.isArray(buttons);
        // false (NodeList は配列ではなく、配列風オブジェクト)
    \`\`\`

    使用可能なセレクタ

    \`\`\`txt
    "#id"
    ".class"
    "div"
    "ul li"
    "input[type='text']"
    \`\`\`

    **特徴**<br />
    - \`length\` が使える
    - \`forEach()\` が使える
    - 配列にかなり近い

    **Static（固定）**<br />
    取得時点の一覧。後からHTMLが増えても自動更新されない
`);