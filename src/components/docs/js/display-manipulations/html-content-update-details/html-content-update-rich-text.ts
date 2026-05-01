import dedent from "dedent";

export const detail = dedent(`
    テキストだけでは伝わりにくい内容を、アイコンと一緒に表示して<br />
    **ひと目で意味を理解しやすくする**<br />
    成功・失敗・警告・情報・進行中などを 色 + アイコン + 文言 で表現することが多い

    #### 使用場面
    - ブログ記事本文
    - CMS記事表示
    - 商品説明ページ
    - お知らせ本文
    - Markdown変換HTML表示
    - 利用規約 / ガイドページ
    - 管理画面の説明文

    #### 基本例
    \`\`\`html
    <div id="content"></div>
    \`\`\`

    \`\`\`js
    const content =
        document.querySelector("#content");

    content.innerHTML = \`
        <h2>JavaScript入門</h2>
        <p>
            <strong>基礎から学べます。</strong>
        </p>
        <p>
            DOM操作・イベント・非同期処理まで学習可能。
        </p>
    \`;
    \`\`\`

    #### 実行結果
    \`\`\`text
    JavaScript入門
    基礎から学べます。
    DOM操作・イベント・非同期処理まで学習可能。
    \`\`\`

    ---

    #### 商品説明

    \`\`\`js
    detail.innerHTML = \`
        <h3>高性能ノートPC</h3>
        <ul>
            <li>メモリ 16GB</li>
            <li>SSD 512GB</li>
            <li>重さ 1.2kg</li>
        </ul>
    \`;
    \`\`\`

    ---

    #### お知らせ文
    \`\`\`js
    notice.innerHTML = \`
        <p class="text-red-500">
            <strong>重要:</strong>
            本日22時よりメンテナンスを行います。
        </p>
    \`;
    \`\`\`

    ---

    #### 記事リンク付き本文
    \`\`\`js
    article.innerHTML = \`
        <p>
            詳しくは
            <a href="/guide">
                ご利用ガイド
            </a>
            をご確認ください。
        </p>
    \`;
    \`\`\`

    ---

    #### よく使うHTMLタグ
    \`\`\`html
    <h1>見出し</h1>
    <p>文章</p>
    <strong>強調</strong>
    <br>
    <ul><li>一覧</li></ul>
    <a href="#">リンク</a>
    <img src="">
    \`\`\`

    #### ポイント
    - 文字情報を整理して見やすくできる
    - APIデータやCMS本文表示と相性が良い
    - innerHTMLでまとめて描画できる

    ⚠️ 注意点
    - 外部入力値をそのまま入れるとXSS危険
    - ユーザー投稿文はサニタイズ必須
    - レイアウト崩れ防止にCSS調整も重要
`);