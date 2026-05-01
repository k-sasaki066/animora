import dedent from "dedent";

export const detail = dedent(`
    情報をHTMLとして組み立てて、一覧表示する処理

    #### 使用場面
    - ECサイト商品一覧
    - おすすめ商品表示
    - お気に入り商品一覧
    - ランキング表示
    - カードUI生成
    - APIデータ一覧表示
    - コメント一覧
    - 検索結果一覧
    - 通知一覧

    #### 1件表示
    \`\`\`html
    <div id="product"></div>
    \`\`\`

    \`\`\`js
    const product = document.querySelector("#product");

    product.innerHTML = \`
        <div class="card">
            <h3>ノートPC</h3>
            <p>¥98,000</p>
        </div>
    \`;
    \`\`\`

    ---

    #### 複数商品を一覧表示
    \`\`\`html
    <div id="products"></div>
    \`\`\`

    \`\`\`js
    const products = [
        { name: "ノートPC", price: 98000 },
        { name: "キーボード", price: 6800 },
        { name: "マウス", price: 3200 }
    ];

    const container =
        document.querySelector("#products");

    container.innerHTML = products.map(item => \`
        <div class="card">
            <h3>\${item.name}</h3>
            <p>¥\${item.price.toLocaleString()}</p>
        </div>
    \`).join("");
    \`\`\`

    実行結果
    \`\`\`text
    ノートPC      ¥98,000
    キーボード     ¥6,800
    マウス         ¥3,200
    \`\`\`

    ---

    #### APIデータ取得後に表示

    \`\`\`js
    fetch("/api/products")
        .then(res => res.json())
        .then(data => {
            container.innerHTML = data.map(item => \`
                <div class="card">
                    <h3>\${item.name}</h3>
                    <p>¥\${item.price}</p>
                </div>
            \`).join("");
        });
    \`\`\`

    \`\`\`css
    .card {
        padding: 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 12px;
    }
    \`\`\`

    ⭐️ ポイント
    - 配列 + map() + join("") で一覧生成が定番
    - innerHTML はまとめて描画できるので高速
    - 商品件数が多い場合はテンプレート化すると管理しやすい

    ⚠️ 注意点
    - 外部入力値をそのまま innerHTML に入れるとXSS危険
    - ユーザー投稿データはエスケープ必須
    - React / Next.js では通常 JSX + map() で実装する
`);