import dedent from "dedent";

export const detail = dedent(`
    現在表示されている商品の件数を画面に表示する<br />
    ECサイト・検索結果ページ・管理画面などでよく使われる

    \`\`\`html
    <p class="count"></p>
    \`\`\`

    \`\`\`js
    const count = document.querySelector(".count");
    count.textContent = "商品 24件";
    \`\`\`

    実行後
    \`\`\`html
    <p class="count">商品 24件</p>
    \`\`\`

    #### 実務例① API取得後に件数表示
    \`\`\`js
    fetch("/api/products")
        .then(res => res.json())
        .then(data => {
            count.textContent =
                \`商品 \${data.length}件\`;
        });
    \`\`\`
    APIから取得した配列数を表示する

    ---

    #### 実務例② 検索時に件数更新
    \`\`\`js
    const filtered = products.filter(item =>
        item.name.includes(keyword)
    );

    count.textContent =
        \`検索結果 \${filtered.length}件\`;
    \`\`\`

    キーワード検索時にリアルタイム更新できる

    ---

    #### ポイント
    \`textContent\` は文字だけ安全に変更できるため、
    件数表示・メッセージ表示・タイトル変更などで非常によく使われる
`);