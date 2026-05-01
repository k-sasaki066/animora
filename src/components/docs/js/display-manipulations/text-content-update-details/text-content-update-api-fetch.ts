import dedent from "dedent";

export const detail = dedent(`
    APIから取得したデータを使って、画面の内容を後から更新する処理<br />
    初期表示時は「読み込み中...」や空の状態で表示し、取得完了後にユーザー名・商品一覧・件数などへ差し替える

    #### 使用場面
    - マイページでユーザー名表示
    - 商品一覧取得
    - 検索結果表示
    - 通知件数表示
    - 天気情報表示
    - SNS投稿一覧表示
    - ダッシュボード集計表示

    **基本の流れ**
    1. APIへ通信する<br />
    2. データを受け取る<br />
    3. 取得した値を画面へ反映する

    \`\`\`js
    fetch("/api/user")
        .then(res => res.json())
        .then(data => {
            document.querySelector("h1").textContent =
            \`\${"\${data.name}"}さん、こんにちは\`;
    });
    \`\`\`

    ---

    #### 実務例① ユーザー情報表示
    \`\`\`js
    fetch("/api/user")
        .then(res => res.json())
        .then(data => {
            document.querySelector(".name").textContent =
                data.name;
        });
    \`\`\`

    ---

    #### 実務例② ローディング表示付き

    \`\`\`js
    const title = document.querySelector("h1");

    title.textContent = "読み込み中...";

    fetch("/api/user")
        .then(res => res.json())
        .then(data => {
            title.textContent =
                \`\${"\${data.name}"}さん、こんにちは\`;
        });
    \`\`\`

    #### よくある注意点
    - 通信失敗時のエラー処理が必要
    - 要素取得できていないと更新できない
    - データ取得前は空状態になる
    - 通信中UI（Loading）があると親切
`);