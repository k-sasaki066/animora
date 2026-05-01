import dedent from "dedent";

export const detail = dedent(`
    画像が読み込まれたタイミングでクラスを切り替え

    #### 使用場面
    - ギャラリー
    - 商品画像（ECサイト）
    - ブログ一覧サムネイル
    - プロフィール画像
    - 遅延ロード画像のUX改善

    #### 基本コード
    \`\`\`html
    <img
        id="photo"
        class="fade-image"
        src="sample.jpg"
        alt="画像"
    >
    \`\`\`

    \`\`\`css
    .fade-image {
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    .fade-image.is-loaded {
        opacity: 1;
    }
    \`\`\`

    \`\`\`js
    const img = document.querySelector("#photo");

    img.addEventListener("load", () => {
        img.classList.add("is-loaded");
    });
    \`\`\`

    #### 実行の流れ
    \`\`\`text
    ① 初期状態：.fade-image（opacity: 0）
    ② 画像読み込み完了
    ③ is-loaded クラス追加
    ④ CSSトランジションでフェードイン
    \`\`\`

    ---

    #### ECサイト商品画像
    \`\`\`js
    const productImg =
        document.querySelector(".product-image");

    productImg.addEventListener("load", () => {
        productImg.classList.add("is-loaded");
    });
    \`\`\`

    ---

    #### ブログ一覧のサムネイル

    \`\`\`js
    const images =
        document.querySelectorAll(".thumb");

    images.forEach(img => {
        img.addEventListener("load", () => {
            img.classList.add("is-loaded");
        });
    });
    \`\`\`

    ---

    #### ローディングと組み合わせ

    \`\`\`html
    <div id="loading">Loading...</div>
    <img id="photo" class="fade-image" src="sample.jpg">
    \`\`\`

    \`\`\`js
    const img = document.querySelector("#photo");
    const loading = document.querySelector("#loading");

    img.addEventListener("load", () => {
        img.classList.add("is-loaded");
        loading.classList.add("hidden");
    });
    \`\`\`

    \`\`\`css
    .hidden {
        display: none;
    }
    \`\`\`

    #### 注意点
    - 初期状態の opacity:0 を必ずCSSに書く
    - transition はCSS側に持たせる
    - class設計（is-loadedなど）は統一する
`);