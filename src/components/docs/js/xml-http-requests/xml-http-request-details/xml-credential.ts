import dedent from "dedent";

export const detail = dedent(`
    **ログイン情報（Cookieやセッション）を含めてリクエストを送る仕組み**

    #### 使用場面
    1. ログイン後のAPI通信
        - ユーザー情報取得
        - プロフィール更新
        - 設定変更
    2. SPA（React / Next.js）
        - フロントとAPIが別ドメイン
    3. 管理画面
        - 管理者ログイン
        - 権限チェック
        - セッション管理
    4. SaaSアプリ
        - ユーザーごとのデータ取得
        - 認証付きリクエスト

    \`\`\`js
    xhr.withCredentials = true;
    \`\`\`
    これを付けると
    - Cookieが送信される
    - セッションが維持される

    ---

    #### なぜ必要？
    通常のXHRは\`別ドメインには認証情報を送らない\`（セキュリティ）<br />
    = ログイン状態が共有されない

    #### 使うとどうなる？
    \`\`\`txt
    フロント（localhost:3000）
    ↓
    API（api.example.com）

    ログインしてもAPIでは未ログイン扱いなのが
    withCredentials：でログイン状態を維持できる
    \`\`\`

    ---

    #### 基本の使い方
    \`\`\`js
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.example.com/user");

    // 認証情報を送る
    xhr.withCredentials = true;

    xhr.onload = () => {
        console.log(xhr.responseText);
    };

    xhr.send();
    \`\`\`

    #### サーバー側の設定
    **withCredentialsはサーバー側の設定が必須**
    \`\`\`js
    Access-Control-Allow-Origin: http://localhost:3000
    Access-Control-Allow-Credentials: true
    \`\`\`

    \`\`\`txt
    ① ログイン → Cookie発行
    ② withCredentials付きリクエスト
    ③ サーバーが認証確認
    ④ データ返却
    \`\`\`

    ---

    axiosの場合
    \`\`\`js
    axios.get("/user", {
        withCredentials: true,
    });
    \`\`\`

    ---

    fetchの場合
    \`\`\`js
    fetch("/user", {
        credentials: "include",
    });
    \`\`\`

    ---

    #### セキュリティポイント
    - 必ずHTTPSで使用（Secure Cookie）
    - 許可ドメインを限定
    - CSRF対策を行う
`);