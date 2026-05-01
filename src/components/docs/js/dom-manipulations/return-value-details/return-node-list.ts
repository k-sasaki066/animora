import dedent from "dedent";

export const detail = dedent(`
    querySelectorAll() で取得される複数要素

    \`\`\`js
    <button class="btn">送信</button>
    <button class="btn">削除</button>
    <button class="btn">保存</button>

    const buttons = document.querySelectorAll(".btn");

    console.log(buttons);
        // NodeList(3)
    \`\`\`

    *特徴*
    - 配列に近い
    - forEach 使用可
    - [0] で取得可能
    - 通常は静的（取得時点の内容）

    \`\`\`js
    buttons.forEach(btn => {
        console.log(btn.textContent);
    });
    \`\`\`

    ---

    出力例
    \`\`\`txt
    送信
    削除
    保存
    \`\`\`
`);