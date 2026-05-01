import dedent from "dedent";

export const detail = dedent(`
    データ取得・画面切替・送信処理など、<br />
    完了まで少し時間がかかる処理中に「読み込み中...」を表示する

    #### 使用場面
    - API通信中
    - ページ切替中
    - フォーム送信中
    - ファイルアップロード中
    - 検索処理中
    - 決済処理中

    \`\`\`html
    <div id="loading"></div>
    <button id="btn">取得する</button>
    \`\`\`

    \`\`\`js
    const loading = document.querySelector("#loading");
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", async () => {
        loading.innerHTML = \`
            <span>⏳</span>
            <span>読み込み中...</span>
        \`;

        await fetch("/api/data");

        loading.innerHTML = "";
    });
    \`\`\`

    ---

    #### ボタン自体をローディング化
    \`\`\`js
    button.innerHTML = "⏳ 送信中...";
    button.disabled = true;
    \`\`\`

    完了後
    \`\`\`js
    button.innerHTML = "送信する";
    button.disabled = false;
    \`\`\`

    ---

    #### スピナー付き表示

    \`\`\`js
    loading.innerHTML = \`
        <div class="spinner"></div>
        <span>読み込み中...</span>
    \`;
    \`\`\`

    \`\`\`css
    .spinner {
        width: 20px;
        height: 20px;
        border: 3px solid #ccc;
        border-top-color: #333;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    \`\`\`

    ---

    #### 一覧取得中

    \`\`\`js
    list.innerHTML = "<p>データ取得中...</p>";
    \`\`\`

    完了後
    \`\`\`js
    list.innerHTML = products.map(item =>
        \`<li>\${item.name}</li>\`
    ).join("");
    \`\`\`

    ---

    UX的メリット
    - 処理中と分かる
    - 離脱防止
    - 連打防止
    - 安心感がある
    - アプリが止まって見えない

    ---

    #### ローディング出しっぱなし防止
    \`\`\`js
    try {
        loading.innerHTML = "読み込み中...";
        await fetch("/api/data");
    } finally {
        loading.innerHTML = "";
    }
    \`\`\`

    #### ポイント
    - 短時間通信でも表示すると親切
    - 長い通信ではスピナー推奨
    - ボタン連打防止とセットが実務的
`);