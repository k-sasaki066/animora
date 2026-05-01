import dedent from "dedent";

export const detail = dedent(`
    ### scrollToTop
    ページトップへスクロール

    #### 使用場面
    - 長い記事ページ
        - ブログ記事
        - ドキュメントページ
        - LP（ランディングページ）
    - UIコンポーネント
        - 「↑ TOPへ戻るボタン」
        - フッター固定ボタン
        - サイドバーの補助ナビ
    - SPA（Next.jsなど）
        - ページ遷移後にトップへ戻す
        - タブ切り替え後のリセット
    - ドキュメントサイト

    \`\`\`js
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    <button onClick={scrollToTop}>
        TOPへ戻る
    </button>

    滑らかにスクロール（smooth）
    一瞬でジャンプせず自然な動きになる
    \`\`\`
`);