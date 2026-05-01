import dedent from "dedent";

export const detail = dedent(`
    aタグの遷移先URLを変更する<br />
    ユーザーの状態・言語・キャンペーン内容・時間帯などに応じて、
    遷移先ページを動的に切り替える時によく使われる

    #### 使用場面
    - キャンペーンURL差し替え
    - 言語別ページ遷移
    - ログイン状態で遷移先変更
    - ABテスト
    - スマホ / PCで別ページへ誘導
    - 在庫あり商品のみ詳細ページへ

    #### 基本
    \`\`\`html
    <a id="saleLink" href="/">セール会場へ</a>
    \`\`\`

    \`\`\`js
    const link = document.querySelector("#saleLink");

    link.href = "/sale";
    \`\`\`

    実行後
    \`\`\`html
    <a id="saleLink" href="/sale">セール会場へ</a>
    \`\`\`

    ---

    #### 言語別ページへ切替
    \`\`\`js
    const lang = "en";

    if (lang === "en") {
        link.href = "/en/about";
    } else {
        link.href = "/about";
    }
    \`\`\`

    ---

    #### ログイン状態で変更
    \`\`\`js
    const isLogin = true;

    link.href = isLogin
        ? "/mypage"
        : "/login";
    \`\`\`
    未ログインならログインページへ誘導できる

    ---

    #### ABテスト
    \`\`\`js
    const pattern = "B";

    link.href =
        pattern === "A"
            ? "/campaign-a"
            : "/campaign-b";
    \`\`\`
    広告効果測定などで使用される

    ---

    #### 別タブで開く
    \`\`\`js
    link.href = "https://example.com";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    \`\`\`
    外部リンク時によく使う

    ---

    #### ポイント
    - \`href\` は aタグ専用の重要属性
    - URLを状況に応じて動的変更できる
    - 外部リンク時は \`target="_blank"\` だけでなく \`rel\` も推奨
    - Reactでは \`<Link href="">\` を使うことが多い

    ---

    #### 注意点
    存在しない要素に対して実行するとエラー

    \`\`\`js
    const link = document.querySelector("#saleLink");

    if (link) {
        link.href = "/sale";
    }
    \`\`\`
`);