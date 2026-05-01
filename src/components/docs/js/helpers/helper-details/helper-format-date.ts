import dedent from "dedent";

export const detail = dedent(`
    ### formatDate
    日付フォーマット

    #### 使用場面
    - ブログ投稿日
    - 更新日表示
    - 一覧ページの日付
    - 管理画面テーブル
    - 投稿履歴の表示

    \`\`\`js
    function formatDate(date) {
        const d = new Date(date);
        if (isNaN(d.getTime())) return "";

        return d.toLocaleDateString("ja-JP");
    }

    formatDate("2026-04-16");          //"2026/4/16"
    formatDate("2026-12-25T10:30:00"); //"2026/12/25"
    formatDate(new Date());            //"2026/4/16"

    const posts = [
        { title: "記事A", createdAt: "2026-04-01" },
        { title: "記事B", createdAt: "2026-04-16" },
    ];
    posts.map(post => formatDate(post.createdAt));
    //["2026/4/1", "2026/4/16"]
    \`\`\`
`);