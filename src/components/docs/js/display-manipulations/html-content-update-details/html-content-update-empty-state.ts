import dedent from "dedent";

export const detail = dedent(`
    表示するデータが0件のときに、案内メッセージを表示する

    #### 使用場面
    - 検索結果0件
    - お気に入り0件
    - 通知0件
    - 商品在庫なし
    - コメント未投稿


    \`\`\`html
    <div id="list"></div>
    \`\`\`

    \`\`\`js
    const list = document.querySelector("#list");

    const items = [];

    if (items.length === 0) {
        list.innerHTML = \`
            <p class="empty">
                データがありません
            </p>
        \`;
    }
    \`\`\`

    ⭐️ ポイント
    - ユーザーに状態を明確に伝えられる
    - アイコン付き表示にもよく使う
    - CTAボタン追加も効果的

    例
    \`\`\`js
    list.innerHTML = \`
        <p>お気に入りはまだありません</p>
        <button>商品を見る</button>
    \`;
    \`\`\`
`);