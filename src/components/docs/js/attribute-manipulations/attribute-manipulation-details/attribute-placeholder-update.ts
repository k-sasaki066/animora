import dedent from "dedent";

export const detail = dedent(`
    入力欄の案内文を状況に応じて動的に切り替える

    #### 使用場面
    - 検索対象切替（商品名 / メーカー名）
    - 言語切替（日本語 / 英語）
    - ログイン画面（メール / ユーザー名）
    - 入力例表示
    - フォーム内容に応じた案内変更

    #### 基本
    \`\`\`html
    <input id="search" placeholder="検索してください">
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#search");

    input.placeholder = "商品名で検索";
    \`\`\`

    実行結果
    \`\`\`text
    変更前: 検索してください
    変更後: 商品名で検索
    \`\`\`

    #### 検索対象切替
    \`\`\`html
    <select id="type">
        <option value="product">商品</option>
        <option value="brand">ブランド</option>
    </select>

    <input id="search">
    \`\`\`

    \`\`\`js
    const type = document.querySelector("#type");
    const input = document.querySelector("#search");

    type.addEventListener("change", () => {
        if (type.value === "product") {
            input.placeholder = "商品名で検索";
        } else {
            input.placeholder = "ブランド名で検索";
        }
    });
    \`\`\`

    ---

    #### 多言語切替
    \`\`\`js
    input.placeholder = "Enter your email";
    \`\`\`

    日本語に戻す場合
    \`\`\`js
    input.placeholder = "メールアドレスを入力";
    \`\`\`

    ---

    #### ログイン切替（メール / 電話番号）
    \`\`\`js
    input.placeholder = "電話番号を入力";
    \`\`\`

    ---

    #### ポイント

    - 入力内容そのものではなく「案内文」
    - 値が入力されると placeholder は消える
    - value とは別物

    \`\`\`js
    input.value = "田中";         // 入力値
    input.placeholder = "名前";  // 案内文
    \`\`\`

    ---

    #### 注意点

    placeholder は補助説明なので、
    重要説明をplaceholderだけに頼らず label も併用するのが理想。

    \`\`\`html
    <label>メールアドレス</label>
    <input placeholder="example@test.com">
    \`\`\`
`);