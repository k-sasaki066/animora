import dedent from "dedent";

export type XMLHttpRequestItem = {
    process: string;
    description: string;
    detail?: string;
};

export const xmlHttpRequestColumns = [
    { key: "process", label: "使用場面" },
    { key: "description", label: "内容" },
];

export const xmlHttpRequestData: XMLHttpRequestItem[] = [
    {
        process: "APIからデータ取得(GET）",
        description:
            "APIやサーバーからデータを取得できる",
        detail: dedent(`
            **サーバーからデータを取得して画面に反映する基本処理**<br />
            \`\`\`txt
            ブラウザ → サーバーにリクエスト(データ（JSONなど）を受け取る)
            \`\`\`

            #### 基本コード
            \`\`\`js
            const xhr = new XMLHttpRequest();

            // どこにリクエストするか
            xhr.open("GET", "/api/users");

            // 成功時の処理
            xhr.onload = () => {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            };

            // 実行
            xhr.send();
            \`\`\`

            ---

            #### ユーザー一覧表示
            \`\`\`html
            <ul id="userList"></ul>
            \`\`\`

            \`\`\`js
            const list = document.querySelector("#userList");

            const xhr = new XMLHttpRequest();
            xhr.open("GET", "/api/users");

            xhr.onload = () => {
                const users = JSON.parse(xhr.responseText);

                users.forEach(user => {
                    const li = document.createElement("li");
                    li.textContent = user.name;
                    list.appendChild(li);
                });
            };

            xhr.send();
            \`\`\`

            ---

            #### ページ読み込み時にデータ取得
            - トップページ
            - ダッシュボード
            - 管理画面
            \`\`\`js
            window.addEventListener("load", () => {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "/api/dashboard");

                xhr.onload = () => {
                    const data = JSON.parse(xhr.responseText);
                    document.querySelector("#title").textContent = data.title;
                };

                xhr.send();
            });
            \`\`\`

            ---

            #### 検索・フィルタ
            - 検索ボックス
            - カテゴリ絞り込み
            \`\`\`js
            input.addEventListener("input", () => {
                const keyword = input.value;

                const xhr = new XMLHttpRequest();
                xhr.open("GET", \`/api/search?q=\${keyword}\`);

                xhr.onload = () => {
                    const results = JSON.parse(xhr.responseText);
                    console.log(results);
                };

                xhr.send();
            });
            \`\`\`

            ---

            #### ボタン押下でデータ取得
            - 「もっと見る」
            - ページネーション
            - 詳細表示
            \`\`\`js
            button.addEventListener("click", () => {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "/api/more");

                xhr.onload = () => {
                    const data = JSON.parse(xhr.responseText);
                    console.log(data);
                };

                xhr.send();
            });
            \`\`\`

            ---

            #### エラー対応
            \`\`\`js
            xhr.onerror = () => {
                console.log("通信エラー");
            };
            \`\`\`
        `),
    },
    {
        process: "データ送信（POST）",
        description: "フォームやJSONデータをサーバーへ送信できる",
        detail: dedent(`
            **ユーザーの入力やデータをサーバーへ送る**

            #### 基本コード
            \`\`\`js
            const xhr = new XMLHttpRequest();

            xhr.open("POST", "/api/user");

            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onload = () => {
                console.log("送信成功");
            };

            xhr.send(JSON.stringify({
                name: "Taro",
                age: 20
            }));
            \`\`\`

            ---

            #### フォーム送信
            お問い合わせ・ログイン・登録
            \`\`\`html
            <input id="name" />
            <button id="send">送信</button>
            \`\`\`

            \`\`\`js
            const btn = document.querySelector("#send");

            btn.addEventListener("click", () => {
                const name = document.querySelector("#name").value;

                const xhr = new XMLHttpRequest();

                xhr.open("POST", "/api/contact");
                xhr.setRequestHeader("Content-Type", "application/json");

                xhr.onload = () => {
                        alert("送信完了");
                };

                xhr.send(JSON.stringify({ name }));
            });
            \`\`\`

            ---

            #### ログイン処理 (メール + パスワード送信)
            \`\`\`js
            xhr.send(JSON.stringify({
                email: "test@example.com",
                password: "123456"
            }));
            \`\`\`

            ---

            #### データ登録（CRUD）
            商品登録・投稿・コメント
            \`\`\`js
            xhr.send(JSON.stringify({
                title: "新商品",
                price: 1000
            }));
            \`\`\`

            ---

            #### ファイルアップロード
            画像・動画アップロード
            \`\`\`js
            const formData = new FormData();
            formData.append("file", file);

            xhr.send(formData);
            \`\`\`
            👉 この場合はContent-Type不要

            ---

            #### よく使うデータ形式
            **1. JSON（最も多い）**
            \`\`\`js
            // 「JSON形式のデータです」とサーバーに伝える
            xhr.setRequestHeader("Content-Type", "application/json");

            // オブジェクト → 文字列に変換 (サーバーに送るには文字列にする必要がある)
            xhr.send(JSON.stringify(data));
            \`\`\`


            **2. FormData（ファイル・フォーム）**
            \`\`\`js
            const formData = new FormData();
            formData.append("name", "Taro");

            xhr.send(formData);
            \`\`\`
            Content-Typeは自動設定される


            **3. URLエンコード**
            \`\`\`js
            xhr.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded"
            );

            xhr.send("name=Taro&age=20");
            \`\`\`
        `),
    },
    {
        process: "ファイルアップロード&ダウンロード",
        description: "画像・動画などのファイルを送受信できる",
    },
    {
        process: "アップロード&ダウンロード進捗取得",
        description: "ファイル送受信の進行状況を取得できる",
        detail: dedent(`
            ファイルを送受信している途中の進み具合を可視化する仕組み<br />
            今どれくらいできているかをパーセンテージやバーで表示

            #### 基本構造
            1. ファイル選択
            2. アップロード(ダウンロード)開始
            3. 進捗更新
            4. 完了

            \`\`\`html
            <input type="file" id="file" />
            <button id="upload">アップロード</button>

            <div class="bar">
                <div class="progress" id="progress"></div>
            </div>

            <p id="percent">0%</p>
            \`\`\`

            \`\`\`css
            .bar {
                width: 100%;
                height: 8px;
                background: #333;
            }

            .progress {
                width: 0%;
                height: 100%;
                background: #4ade80;
                transition: width 0.2s ease;
            }
            \`\`\`

            アップロードの場合
            \`\`\`js
            uploadBtn.addEventListener("click", () => {
                const file = fileInput.files[0];

                const formData = new FormData();
                formData.append("file", file);

                const xhr = new XMLHttpRequest();  // ① インスタンス作成(通信の箱を作る)

                xhr.open("POST", "/upload");      // ② open（通信の準備）

                // 進捗監視(イベント設定)
                xhr.upload.onprogress = (event) => {
                    if (!event.lengthComputable) return;

                    const percent = (event.loaded / event.total) * 100;   // 送信済み / 全体サイズ

                    progress.style.width = percent + "%";
                    percentText.textContent = \`\${Math.round(percent)}%\`;
                };

                xhr.onerror = () => {
                    percentText.textContent = "通信エラー";
                };

                xhr.upload.onabort = () => {
                    percentText.textContent = "アップロードが中断されました";
                };

                xhr.onload = () => {
                    progress.style.width = "100%";

                    setTimeout(() => {
                        percentText.textContent = "アップロード完了";
                        progress.style.background = "#22c55e";
                    }, 300);
                };

                xhr.send(formData);   // ④ send（実行）
            });
            \`\`\`

            ダウンロードの場合
            \`\`\`js
            downloadBtn.addEventListener("click", () => {
                const xhr = new XMLHttpRequest(); // ① インスタンス作成

                xhr.open("GET", "/file.pdf"); // ② 通信準備

                xhr.responseType = "blob"; // ファイルとして受け取る

                // 進捗監視（ダウンロード）
                xhr.onprogress = (event) => {
                    if (!event.lengthComputable) return;

                    const percent = (event.loaded / event.total) * 100;

                    progress.style.width = percent + "%";
                    percentText.textContent = \`\${Math.round(percent)}%\`;
                };

                // エラー
                xhr.onerror = () => {
                    percentText.textContent = "通信エラー";
                };

                // 完了
                xhr.onload = () => {
                    progress.style.width = "100%";

                    // ファイル保存処理
                    const blob = xhr.response;
                    const url = URL.createObjectURL(blob);

                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "download.pdf";
                    a.click();

                    URL.revokeObjectURL(url);

                    setTimeout(() => {
                        percentText.textContent = "ダウンロード完了";
                    }, 300);
                };

                xhr.send(); // ③ 実行
            });
            \`\`\`

            #### 進捗の仕組み
            \`\`\`txt
            loaded = 送受信済みデータ量
            total  = 全体データ量
            進捗率 = loaded ÷ total × 100
            \`\`\`

            ---

            #### ファイルチェック
            \`\`\`js
            if (file.size > 5 * 1024 * 1024) {
                alert("5MBまでです");
                return;
            }
            \`\`\`

            #### MIMEチェック
            \`\`\`js
            if (!file.type.startsWith("image/")) {
                alert("画像のみ");
            }
            \`\`\`


            #### ボタン制御
            \`\`\`js
            uploadBtn.disabled = true;
            \`\`\`
        `),
    },
    {
        process: "ヘッダー操作",
        description: "リクエストヘッダーを設定できる",
        detail: dedent(`
            リクエストヘッダーとは、 **サーバーに送る「追加情報」**<br />
            「どんなデータか」「誰が送っているか」などを伝える
            \`\`\`js
            xhr.setRequestHeader("Content-Type", "application/json");
            \`\`\`

            #### 基本の書き方
            \`\`\`js
            const xhr = new XMLHttpRequest();

            xhr.open("POST", "/api");

            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.send(JSON.stringify({ name: "Taro" }));
            \`\`\`

            #### 何ができる？
            ・データ形式を指定
            ・認証情報を送る
            ・APIキーを渡す
            ・カスタム情報を追加

            ---

            #### Content-Type
            ##### 使用場面
            - JSON送信
            - API通信
            - フォーム送信

            ##### JSON API
            \`\`\`js
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.send(JSON.stringify({
                name: "Taro",
                age: 20
            }));
            \`\`\`

            ---

            ##### よくある種類
            **1. application/json**<br />
            JavaScriptオブジェクトをJSON文字列にして送る
            \`\`\`js
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.send(JSON.stringify({
                name: "Taro",
                age: 20
            }));
            \`\`\`
            サーバー側イメージ
            \`\`\`js
            {
                "name": "Taro",
                "age": 20
            }
            \`\`\`

            ---

            **2. application/x-www-form-urlencoded**<br />
            key=value&key=value の形式（昔のフォーム形式）

            \`\`\`js
            xhr.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded"
            );

            xhr.send("name=Taro&age=20");
            \`\`\`

            サーバー側
            \`\`\`js
            name=Taro&age=20
            \`\`\`

            ---

            **3. multipart/form-data**<br />
            ファイルを含めて送れる形式
            \`\`\`js
            const formData = new FormData();
            formData.append("file", file);
            formData.append("name", "Taro");

            xhr.send(formData);
            \`\`\`
        `),
    },
    {
        process: "レスポンス形式指定",
        description: "JSONやBlobなど形式を指定できる",
        detail: dedent(`
            **サーバーから受け取るデータの形式を指定**

            #### なぜ必要？
            ##### 指定しない場合 👉 毎回パースが必要
            \`\`\`txt
            xhr.responseText // ← すべて文字列
            \`\`\`

            ##### 指定すると 👉 そのまま使える
            \`\`\`txt
            xhr.response // ← 自動で変換される
            \`\`\`

            ---

            #### 主なresponseType
            #### 1. json
            ##### 使用場面
            - APIレスポンス
            - ユーザー情報取得
            - 一覧データ取得

            ##### 例
            \`\`\`js
            const xhr = new XMLHttpRequest();

            xhr.open("GET", "/api/users");
            xhr.responseType = "json";

            xhr.onload = () => {
                const data = xhr.response;

                console.log(data.name);
            };

            xhr.send();
            \`\`\`
            JSON.parse不要

            ---

            #### 2. blob（ファイル系）
            ##### 使用場面
            - 画像ダウンロード
            - PDFダウンロード
            - 動画取得

            ##### 例（画像ダウンロード）
            \`\`\`js
            const xhr = new XMLHttpRequest();

            xhr.open("GET", "/image.jpg");
            xhr.responseType = "blob";

            xhr.onload = () => {
                const blob = xhr.response;

                const url = URL.createObjectURL(blob);

                const img = document.createElement("img");
                img.src = url;

                document.body.appendChild(img);
            };

            xhr.send();
            \`\`\`

            ##### 例（ファイル保存）
            \`\`\`jsw
            const a = document.createElement("a");
            a.href = URL.createObjectURL(xhr.response);
            a.download = "file.pdf";
            a.click();
            \`\`\`

            ---

            #### 3. arraybuffer
            ##### 使用場面
            - 音声処理
            - バイナリ解析
            - 画像加工

            ##### 例（音声）
            \`\`\`js
            xhr.responseType = "arraybuffer";

            xhr.onload = () => {
                const buffer = xhr.response;
                console.log(buffer);
            };
            \`\`\`
            👉 Web Audio APIなどで使う

            ---

            #### 4. document（HTML取得）
            ##### 使用場面
            - スクレイピング的処理
            - HTML解析

            ##### 例
            \`\`\`js
            xhr.responseType = "document";

            xhr.onload = () => {
                const doc = xhr.response;

                const title = doc.querySelector("title");
                console.log(title.textContent);
            };
            \`\`\`

            ---

            #### 5. デフォルト（文字列）
            ##### 使用場面
            - 簡単なテキスト
            - HTMLそのまま取得

            ##### 例
            \`\`\`js
            xhr.onload = () => {
                console.log(xhr.responseText);
            };
            \`\`\`

            #### 使い分け
            \`\`\`txt
            API → json
            画像/動画 → blob
            音声/解析 → arraybuffer
            HTML → document
            \`\`\`
        `),
    },
    {
        process: "認証付き通信",
        description: "Cookieや認証情報を含めて通信できる",
        detail: dedent(`
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
        `),
    },
];
