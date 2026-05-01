import dedent from "dedent";

export const detail = dedent(`
    **返り値：HTMLElement（単体）**<br />
    CSSセレクタ形式で最初の1件を取得できる

    \`\`\`html
    <button class="btn">送信</button>
    <button class="btn">削除</button>
    \`\`\`

    \`\`\`js
    const btn = document.querySelector(".btn");

    console.log(btn);
        // <button class="btn">送信</button>

    console.log(btn.textContent);
        // 送信
    \`\`\`

    使用可能なセレクタ
    \`\`\`txt
    "#id"
    ".class"
    "div"
    "ul li"
    "input[type='text']"
    \`\`\`
`);