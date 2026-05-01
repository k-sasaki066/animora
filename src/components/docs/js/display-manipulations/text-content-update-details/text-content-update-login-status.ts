import dedent from "dedent";

export const detail = dedent(`
    ログインしているか・していないかを画面上に表示する処理<br />
    ヘッダーやマイページ、管理画面などでよく使われる

    #### 使用場面
    - ヘッダー右上にログイン状態を表示
    - 管理画面で管理者ログイン中を表示
    - チャットアプリでオンライン状態を表示
    - 会員サイトでユーザー状態を表示

    \`\`\`html
    <span id="status"></span>
    \`\`\`

    \`\`\`js
    const status = document.querySelector("#status");
    status.textContent = "ログイン中";
    \`\`\`

    実行後
    \`\`\`html
    <span id="status">ログイン中</span>
    \`\`\`

    ---

    #### ポイント
    - \`textContent\` は安全に文字だけ変更できる
    - ログイン状態を即時反映できる
    - Reactでは state 管理で行うことが多い

    ---

    #### ログイン状態の取得方法
    | 方法 | 内容 |
    | --- | --- |
    | Cookie / Session | サーバー側でログイン管理 |
    | JWT / Token | トークンで認証 |
    | APIでユーザー取得 | /api/me などで確認 |
    | Firebase/Auth0等 | SDKで状態取得 |

    APIで取得
    \`\`\`js
    fetch("/api/me", {
        credentials: "include"
    })
        .then(res => res.json())
        .then(user => {
            const status =
            document.querySelector("#status");

            status.textContent =
            user ? "ログイン中" : "ログアウト中";
        });
    \`\`\`

    仕組み
    \`\`\`txt
    ブラウザCookie送信
    ↓
    サーバーがセッション確認
    ↓
    ログインユーザー情報返す
    \`\`\`
`);