import dedent from "dedent";

export const detail = dedent(`
    複数の要素を横に切り替えて表示するUI<br />
    「限られたスペースで多くの情報を見せたい時」に使われる

    #### 使用場面
    1. ECサイトの商品画像 (商品1つに対して複数画像を見せる)
        - 正面写真
        - 横からの写真
        - 使用イメージ
        - 拡大ディテール
        - 👉 「購入前の不安を減らす」目的
    2. トップページのヒーローバナー (LPの最上部で自動スライドする大きい画像)
        - セール告知
        - 新商品
        - キャンペーン
        - 👉 「一番見せたい情報を順番に出す」
    3. レビュー・口コミ表示 (ユーザーの声を横スライドで表示)
        - ★評価レビュー
        - コメントカード
        - 顧客の声
        - 👉 「信頼性アップ」
    4. スマホUIのカード一覧 (横スクロールでカードを閲覧)
        - おすすめ記事
        - 人気商品
        - カテゴリ一覧
        - 👉 「指で直感操作できる」

    ---

    #### 使用例① クリックでスライド
    \`\`\`html
    <div class="slider">
        <div class="track">
            <div class="slide">画像1</div>
            <div class="slide">画像2</div>
            <div class="slide">画像3</div>
        </div>

        <button id="prev">←</button>
        <button id="next">→</button>
    </div>
    \`\`\`

    \`\`\`css
    .slider {
        width: 300px;
        overflow: hidden;
        position: relative;
    }

    .track {
        display: flex;
        transition: transform 0.5s ease;
    }

    .slide {
        min-width: 100%;
        height: 200px;
        background: #333;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    \`\`\`

    \`\`\`js
    const track = document.querySelector(".track");
    const next = document.querySelector("#next");
    const prev = document.querySelector("#prev");
    const slides = document.querySelectorAll(".slide");

    let index = 0;
    const maxIndex = slides.length - 1;

    // 状態更新関数
    function updateButtons() {
        if (!next || !prev) return;

        next.disabled = index >= maxIndex;
        prev.disabled = index <= 0;
    }

    // 初期状態
    updateButtons();

    next.addEventListener("click", () => {
        if (index >= maxIndex) return;

        index++;
        track.style.transform = \`translateX(-\${index * 100}%)\`;

        updateButtons();
    });

    prev.addEventListener("click", () => {
        if (index <= 0) return;

        index--;
        track.style.transform = \`translateX(-\${index * 100}%)\`;

        updateButtons();
    });
    \`\`\`

    ---

    #### 使用例② クリックで無限ループ
    \`\`\`js
    next.addEventListener("click", () => {
        index = (index + 1) % slides.length;

        track.style.transform = \`translateX(-\${index * 100}%)\`;
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;

        track.style.transform = \`translateX(-\${index * 100}%)\`;
    });
    \`\`\`

    ---

    #### 使用例③ 自動スライダーとクリックの組み合わせ
    \`\`\`js
    const interval = 3000; // 3秒

    let timer = setInterval(() => {
        nextSlide();
    }, interval);

    let index = 0;

    function update() {
        track.style.transform = \`translateX(-\${index * 100}%)\`;
    }

    // 次へ
    function nextSlide() {
        index = (index + 1) % slides.length;
        update();
    }

    // 前へ
    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        update();
    }

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
    \`\`\`

    ---

    #### 使用例④ ホバーで自動スライダー停止
    \`\`\`js
    const slider = document.querySelector(".slider");

    // 停止
    slider.addEventListener("mouseenter", () => {
        clearInterval(timer);
    });

    // 再開
    slider.addEventListener("mouseleave", () => {
        timer = setInterval(() => {
            nextSlide();
        }, interval);
    });
    \`\`\`
`);