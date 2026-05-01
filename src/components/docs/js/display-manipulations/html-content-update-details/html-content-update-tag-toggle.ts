import dedent from "dedent";

export const detail = dedent(`
    ボタン選択に応じて表示内容を切り替える

    #### 使用場面
    - 商品詳細ページ
    - マイページ切替
    - 管理画面タブUI
    - FAQカテゴリ切替

    \`\`\`html
    <button id="tab1">商品説明</button>
    <button id="tab2">レビュー</button>

    <div id="content"></div>
    \`\`\`

    \`\`\`js
    const content =
        document.querySelector("#content");

    document
        .querySelector("#tab1")
        .addEventListener("click", () => {
            content.innerHTML = \`
                <h2>商品説明</h2>
                <p>高性能ノートPCです。</p>
            \`;
        });

    document
        .querySelector("#tab2")
        .addEventListener("click", () => {
            content.innerHTML = \`
                <h2>レビュー</h2>
                <p>とても使いやすいです。</p>
            \`;
        });
    \`\`\`

    ポイント
    - ボタン押下ごとに中身だけ差し替える
    - ページ遷移なしでUI変更できる
    - SPA的な操作感を作りやすい
`);