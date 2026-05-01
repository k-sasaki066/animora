import dedent from "dedent";

export const detail = dedent(`
    画像の \`alt（代替テキスト）\` を変更することで、
    画像の内容をテキストとして補足することができる。

    alt は「画像が表示されない場合」や「スクリーンリーダー」によって読み上げられる、**非常に重要なアクセシビリティ属性**

    #### 使用場面
    - 商品画像の切り替え時に説明も変更
    - SEO対策（検索エンジンに内容を伝える）
    - アクセシビリティ対応（視覚障害者向け）
    - 画像読み込み失敗時の代替表示
    - 多言語対応（説明文の切り替え）

    #### 基本
    \`\`\`html
    <img id="photo" src="/cat.jpg" alt="猫の写真">
    \`\`\`

    \`\`\`js
    const img = document.querySelector("#photo");

    img.alt = "犬の写真";
    \`\`\`

    ---

    #### 実行結果
    \`\`\`text
    変更前: 猫の写真
    変更後: 犬の写真
    \`\`\`
    ※画像が表示されない場合や、読み上げ時に反映される

    ---

    #### 画像切り替えとセットで使う
    \`\`\`js
    img.src = "/dog.jpg";
    img.alt = "犬の写真";
    \`\`\`
    👉 src と alt は必ずセットで更新するのが基本

    ---

    #### ボタンで画像＋説明切り替え
    \`\`\`html
    <img id="photo" src="/cat.jpg" alt="猫の写真">
    <button id="btn">切り替え</button>
    \`\`\`

    \`\`\`js
    const img = document.querySelector("#photo");
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", () => {
        img.src = "/dog.jpg";
        img.alt = "犬の写真";
    });
    \`\`\`

    ---

    #### data属性と組み合わせ
    \`\`\`html
    <img id="photo" src="/cat.jpg" alt="猫の写真">

    <button data-src="/dog.jpg" data-alt="犬の写真">犬</button>
    <button data-src="/bird.jpg" data-alt="鳥の写真">鳥</button>
    \`\`\`

    \`\`\`js
    const img = document.querySelector("#photo");

    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            img.src = btn.dataset.src;
            img.alt = btn.dataset.alt;
        });
    });
    \`\`\`

    ---

    #### ポイント

    - alt は「画像の意味」を説明する
    - 「画像」「写真」だけの説明はNG（例: "image"）
    - 装飾目的の画像は alt=""（空）にする
    - SEO・アクセシビリティの両方に影響する重要属性
    - srcだけ変更して alt を変えないのはNG
`);