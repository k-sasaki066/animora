import dedent from "dedent";

export const detail = dedent(`
    ユーザーが「このカードはクリックできる」と直感的に理解できるようにする目的

    #### 使用場面
    - クリック状態管理
    - データ取得後の制御
    - スクロール連動
    - API連携
    - 複雑な条件分岐

    ---

    #### 使用例① カード選択
    \`\`\`html
    <div class="card">A</div>
    <div class="card">B</div>
    <div class="card">C</div>
    \`\`\`

    \`\`\`css
    .card {
        width: 160px;
        height: 120px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        margin-bottom: 20px;
    }
    .card.active {
        transform: scale(1.05);
    }
    \`\`\`

    \`\`\`js
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });
    \`\`\`

    - 商品選択
    - プラン選択
    - カテゴリフィルター

    ---

    #### 使用例② APIデータ取得後にカードを動かす
    \`\`\`js
    fetch("/api/products")
    .then(res => res.json())
    .then(data => {
        renderCards(data);

        document.querySelectorAll(".card")
        .forEach(card => card.classList.add("show"));
    });
    \`\`\`

    \`\`\`css
    .card {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease;
    }

    .card.show {
        opacity: 1;
        transform: translateY(0);
    }
    \`\`\`

    - 商品一覧ロード
    - 記事一覧表示
    - ダッシュボード初期表示

    ---

    #### 使用例③ スクロールでカードを出す（IntersectionObserver）
    \`\`\`js
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    cards.forEach(card => observer.observe(card));
    \`\`\`

    - LP（ランディングページ）
    - ポートフォリオ
    - スクロールアニメーション
`);