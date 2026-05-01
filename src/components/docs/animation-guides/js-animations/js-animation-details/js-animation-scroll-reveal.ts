import dedent from "dedent";

export const detail = dedent(`
    ユーザーがスクロールして要素が画面に入ったタイミングでアニメーションを発火させる手法

    #### 使用場面
    - LP（ランディングページ）のセクション表示
    - 商品一覧ページのカード表示
    - ブログ記事一覧
    - ECサイトのおすすめ商品セクション
    - 料金プランの段階的表示

    #### 使用例
    \`\`\`css
    .card {
        opacity: 0;
        transform: translateY(30px);
        transition: 0.6s ease;
    }

    .card.show {
        opacity: 1;
        transform: translateY(0);
    }
    \`\`\`

    \`\`\`js
    const targets = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    targets.forEach((el) => observer.observe(el));
    \`\`\`

    ■ なぜ使うのか？
    - 情報を一気に見せない（視認性向上）
    - UIに動きを出して退屈さを防ぐ
    - コンバージョン率改善（CTR向上）
    - 高級感・洗練された印象を与える

    ---

    ■ よくあるバリエーション
    - 下からフェードイン
    - 左からスライドイン
    - 右からスライドイン
    - スケールイン（拡大表示）
    - 遅延アニメーション（stagger）
`);