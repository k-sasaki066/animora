import dedent from "dedent";

export const detail = dedent(`
    HTML要素に独自の情報を持たせるための属性が \`data-*\` 属性<br />
    JavaScriptから値を取得して、要素ごとに異なる処理を行える

    標準属性（id / class / href など）とは別に、
    開発者が自由に情報を埋め込めるのが特徴

    #### 使用場面
    - 商品ID取得
    - 投稿ID取得
    - カテゴリ判定
    - モーダル開閉対象の指定
    - タブ切替
    - UI状態保持
    - ボタンごとの分岐処理

    #### 基本
    \`\`\`html
    <button id="btn" data-id="15">詳細</button>
    \`\`\`

    \`\`\`js
    const btn = document.querySelector("#btn");

    console.log(btn.dataset.id);
    // 15
    \`\`\`

    ---

    #### なぜ便利なのか？

    HTML側に値を書いておけば、
    JavaScript側で個別の値を判定できる

    例：商品一覧の「詳細」ボタン

    \`\`\`html
    <button data-id="101">商品A</button>
    <button data-id="102">商品B</button>
    <button data-id="103">商品C</button>
    \`\`\`

    \`\`\`js
    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(btn.dataset.id);
        });
    });
    \`\`\`
    👉 押した商品のIDが取得できる

    ---

    #### 複数データも持てる
    \`\`\`html
    <div
        data-id="15"
        data-category="book"
        data-status="sale"
    ></div>
    \`\`\`

    \`\`\`js
    const item = document.querySelector("div");

    console.log(item.dataset.id);        // 15
    console.log(item.dataset.category);  // book
    console.log(item.dataset.status);    // sale
    \`\`\`

    ---

    #### ハイフン区切りはキャメルケースになる
    \`\`\`html
    <button data-user-id="99"></button>
    \`\`\`

    \`\`\`js
    button.dataset.userId
    \`\`\`

    👉 \`data-user-id\` → \`dataset.userId\`

    ---

    #### タブ切替
    \`\`\`html
    <button data-tab="profile">プロフィール</button>
    <button data-tab="settings">設定</button>
    \`\`\`

    \`\`\`js
    console.log(btn.dataset.tab);
    \`\`\`

    ---

    #### モーダル開閉
    \`\`\`html
    <button data-modal="login">ログイン</button>
    <button data-modal="signup">新規登録</button>
    \`\`\`

    押したボタンごとに表示モーダルを変更できる

    ---

    #### 商品詳細遷移
    \`\`\`js
    location.href = "/products/" + btn.dataset.id;
    \`\`\`

    ---

    #### 注意点
    - datasetで取得できる値は文字列
    - 数値として使うなら変換する

    \`\`\`js
    const id = Number(btn.dataset.id);
    \`\`\`

    - 機密情報は入れない（HTMLから見えるため）
`);