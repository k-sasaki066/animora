import dedent from "dedent";

export const detail = dedent(`
    HTML要素に設定されている属性値を取得する

    #### 使用場面
    - img の src取得
    - aタグの href確認
    - data属性の取得
    - フォーム初期値確認

    #### 基本構文
    \`\`\`js
    element.getAttribute("属性名");
    \`\`\`

    ---

    #### 画像URL取得
    \`\`\`html
    <img id="photo" src="/cat.jpg" alt="猫">
    \`\`\`

    \`\`\`js
    const img = document.querySelector("#photo");

    console.log(img.getAttribute("src"));
    // /cat.jpg
    \`\`\`
    👉 現在表示中の画像パスを取得できる

    ---

    #### リンク先取得

    \`\`\`html
    <a id="link" href="/contact">お問い合わせ</a>
    \`\`\`

    \`\`\`js
    const link = document.querySelector("#link");

    console.log(link.getAttribute("href"));
    // /contact
    \`\`\`
    👉 遷移先URL確認や差し替え前確認に使う

    ---

    #### data属性取得

    \`\`\`html
    <button id="btn" data-id="15">詳細</button>
    \`\`\`

    \`\`\`js
    const btn = document.querySelector("#btn");

    console.log(btn.getAttribute("data-id"));
    // 15
    \`\`\`
    👉 商品ID・投稿ID・カテゴリID取得で使う

    ---

    #### フォーム属性取得
    \`\`\`html
    <input id="name" placeholder="名前を入力">
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#name");

    console.log(input.getAttribute("placeholder"));
    // 名前を入力
    \`\`\`

    ---

    #### 存在しない属性の場合
    \`\`\`js
    img.getAttribute("title");
    // null
    \`\`\`
    👉 属性が無いと \`null\`

    ---

    #### 商品画像切替前に元URL保存

    \`\`\`js
    const original = img.getAttribute("src");
    \`\`\`

    ---

    #### 外部リンク判定
    \`\`\`js
    const href = link.getAttribute("href");

    if (href.startsWith("http")) {
        console.log("外部リンク");
    }
    \`\`\`

    ---

    #### getAttribute と プロパティの違い
    \`\`\`js
    img.getAttribute("src")  HTMLに書かれている元の値
    img.src                  ブラウザが変換後の現在値
    \`\`\`

    例：
    \`\`\`html
    <img src="/cat.jpg">
    \`\`\`

    \`\`\`js
    img.getAttribute("src");
    // /cat.jpg

    img.src;
    // http://localhost:3000/cat.jpg
    \`\`\`

    👉 この違いがかなり重要

    ---

    #### ポイント

    - HTML属性をそのまま取得したいなら \`getAttribute()\`
    - 存在しない場合は \`null\`
    - data属性取得にも便利
    - 状態確認・切替前の保存でよく使う
`);