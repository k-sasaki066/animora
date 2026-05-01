import dedent from "dedent";

export const detail = dedent(`
    ユーザーがボタンやリンクなどをクリックした瞬間に実行されるイベント

    #### 使用場面
    - ボタンのクリック処理
    - メニューの開閉
    - モーダル表示
    - いいねボタン
    - ページ遷移
    - 要素の選択操作

    #### 実行例
    \`\`\`html
    <button id="btn">クリック</button>
    \`\`\`

    \`\`\`js
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", (e) => {
        console.log(e.target);
    });
    \`\`\`
`);