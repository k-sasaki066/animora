import dedent from "dedent";

export const detail = dedent(`
    一覧データが複数ページあるときに、ページ番号や次へボタンを動的生成する

    #### 使用場面
    - ECサイト商品一覧
    - ブログ記事一覧
    - 検索結果一覧
    - 管理画面テーブル

    \`\`\`html
    <div id="pagination"></div>
    \`\`\`

    \`\`\`js
    const pagination =
        document.querySelector("#pagination");

    const totalPages = 5;
    let html = "";

    for (let i = 1; i <= totalPages; i++) {
        html += \`
            <button class="page-btn">
                \${i}
            </button>
        \`;
    }

    pagination.innerHTML = html;
    \`\`\`

    実行結果
    \`\`\`text
    [1] [2] [3] [4] [5]
    \`\`\`

    ポイント
    - ページ数に応じて自動生成できる
    - 現在ページだけ色変更も可能
    - API連携と相性が良い
`);