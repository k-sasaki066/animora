import dedent from "dedent";

export type TextContentUpdateItem = {
    process: string;
    detail?: string;
};

export const textContentColumns = [
    { key: "process", label: "処理", className: "font-mono text-xs" },
];

export const textContentData: TextContentUpdateItem[] = [
    {
        process: "商品件数表示",
        detail: dedent(`
            現在表示されている商品の件数を画面に表示する<br />
            ECサイト・検索結果ページ・管理画面などでよく使われる

            \`\`\`html
            <p class="count"></p>
            \`\`\`

            \`\`\`js
            const count = document.querySelector(".count");
            count.textContent = "商品 24件";
            \`\`\`

            実行後
            \`\`\`html
            <p class="count">商品 24件</p>
            \`\`\`

            #### 実務例① API取得後に件数表示
            \`\`\`js
            fetch("/api/products")
                .then(res => res.json())
                .then(data => {
                    count.textContent =
                        \`商品 \${data.length}件\`;
                });
            \`\`\`
            APIから取得した配列数を表示する

            ---

            #### 実務例② 検索時に件数更新
            \`\`\`js
            const filtered = products.filter(item =>
                item.name.includes(keyword)
            );

            count.textContent =
                \`検索結果 \${filtered.length}件\`;
            \`\`\`

            キーワード検索時にリアルタイム更新できる

            ---

            #### ポイント
            \`textContent\` は文字だけ安全に変更できるため、
            件数表示・メッセージ表示・タイトル変更などで非常によく使われる
            `),
    },
    {
        process: "ログイン状態表示",
        detail: dedent(`
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
        `),
    },
    {
        process: "ボタン押したら文字変更",
        detail: dedent(`
            \`\`\`html
            <h1 id="title">ようこそ</h1>
            <button id="btn">変更</button>
            \`\`\`

            \`\`\`js
            const title = document.querySelector("#title");
            const btn = document.querySelector("#btn");

            btn.addEventListener("click", () => {
                title.textContent = "こんにちは";
            });
            \`\`\`
        `),
    },
    {
        process: "送信中ボタン",
        detail: dedent(`
            送信ボタンを押した直後に、**連打防止・通信中の状態表示** を行う<br />
            ユーザーに「今処理中」であることを伝えられる

            #### 使用場面
            - お問い合わせフォーム
            - 会員登録
            - ログイン
            - コメント投稿
            - 購入ボタン
            - いいね送信
            - データ保存

            ⚠️ 通信失敗時に戻し忘れると押せなくなる

            \`\`\`html
            <button id="btn">送信する</button>
            \`\`\`

            \`\`\`js
            const btn = document.querySelector("#btn");
            btn.textContent = "送信中...";
            btn.disabled = true;
            \`\`\`

            #### 実行後の状態
            - ボタン文字が **送信する → 送信中...**
            - ボタンが押せなくなる
            - 二重送信防止になる

            ---

            #### 実務例① フォーム送信

            \`\`\`html
            <form id="form">
                <button id="btn">送信する</button>
            </form>
            \`\`\`

            \`\`\`js
            const form = document.querySelector("#form");
            const btn = document.querySelector("#btn");

            form.addEventListener("submit", () => {
                btn.textContent = "送信中...";
                btn.disabled = true;
            });
            \`\`\`

            フォーム送信時にボタンを無効化し、連打を防ぐ

            ---

            #### 実務例② API通信後に元へ戻す
            \`\`\`js
            const btn = document.querySelector("#btn");

            btn.addEventListener("click", async () => {
                btn.textContent = "送信中...";
                btn.disabled = true;

                await fetch("/api/send");

                btn.textContent = "送信する";
                btn.disabled = false;
            });
            \`\`\`

            通信完了後に元の状態へ戻す

            ---

            #### 実務例③ 成功メッセージへ変更
            \`\`\`js
            btn.textContent = "送信完了";
            \`\`\`

            完了後に状態を明確に伝えられる

        `),
    },
    {
        process: "エラーメッセージ表示",
        detail: dedent(`
            入力ミス・未入力・形式エラーなどをユーザーへ伝える

            \`\`\`html
            <input type="email" class="email" placeholder="メールアドレス" />
            <p class="error"></p>
            \`\`\`

            \`\`\`js
            const input = document.querySelector(".email");
            const error = document.querySelector(".error");

            if (input.value.trim() === "") {
                error.textContent =
                    "メールアドレスを入力してください";
            }
            \`\`\`

            ---

            #### 送信ボタン押下時
            \`\`\`html
            <button class="submit">送信</button>
            \`\`\`

            \`\`\`js
            const button =
                document.querySelector(".submit");

            button.addEventListener("click", () => {
                if (input.value.trim() === "") {
                    error.textContent =
                        "メールアドレスを入力してください";
                    return;
                }

                error.textContent = "";
            });
            \`\`\`

            #### 入力と同時にエラー解除
            \`\`\`js
            input.addEventListener("input", () => {
                if (input.value.trim() !== "") {
                    error.textContent = "";
                }
            });
            \`\`\`

            ---

            #### メール形式チェック
            \`\`\`js
            const email =
                input.value.trim();

            if (!email.includes("@")) {
                error.textContent =
                    "正しいメールアドレスを入力してください";
            }
            \`\`\`
        `),
    },
    {
        process: "API取得後に表示更新",
        detail: dedent`
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
                    \`${"${data.name}"}さん、こんにちは\`;
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
                        \`${"${data.name}"}さん、こんにちは\`;
                });
            \`\`\`

            #### よくある注意点
            - 通信失敗時のエラー処理が必要
            - 要素取得できていないと更新できない
            - データ取得前は空状態になる
            - 通信中UI（Loading）があると親切
        `,
    },
    {
        process: "メニュー開閉ボタン",
        detail: dedent(`
            ボタンをクリックすると、非表示のメニューを表示<br />
            もう一度クリックすると閉じる

            #### 使用場面
            - スマホのハンバーガーメニュー
            - FAQアコーディオン
            - サイドバー開閉
            - 設定メニュー表示
            - 詳細情報の表示切替

            \`\`\`html
            <button id="menuBtn">メニュー</button>

            <nav id="menu" style="display: none;">
                <ul>
                    <li>ホーム</li>
                    <li>サービス</li>
                    <li>お問い合わせ</li>
                </ul>
            </nav>
            \`\`\`

            \`\`\`css
            #menu {
                display: none;
            }

            #menu.open {
                display: block;
            }
            \`\`\`

            \`\`\`js
            const menuBtn = document.querySelector("#menuBtn");
            const menu = document.querySelector("#menu");

            menuBtn.addEventListener("click", () => {
                menu.classList.toggle("open");
            });
            \`\`\`
        `),
    },
    {
        process: "カート追加後の文言変更",
        detail: dedent(`
            商品をカートへ追加したあとに、ボタンの文字を変更して
            ユーザーへ状態をわかりやすく伝える

            例:
            - 「カートに追加」 → 「追加しました」
            - 数秒後に元へ戻す
            - 二重クリック防止

            \`\`\`html
            <button id="cartBtn">カートに追加</button>
            \`\`\`

            \`\`\`js
            const cartBtn = document.querySelector("#cartBtn");

            cartBtn.addEventListener("click", () => {
                // 連打防止
                cartBtn.disabled = true;

                // カート追加処理（例）
                console.log("商品を追加");

                // 文言変更
                cartBtn.textContent = "追加しました";

                // 2秒後に元へ戻す
                setTimeout(() => {
                    cartBtn.textContent = "カートに追加";
                    cartBtn.disabled = false;
                }, 2000);
            });
            \`\`\`

            #### 実行の流れ
            \`\`\`text
            ① ボタンを押す
            ② 商品をカートへ追加
            ③ 「追加しました」に変更
            ④ 2秒後に元へ戻る
            \`\`\`

            #### 実務でよくある応用
            \`\`\`js
            cartBtn.textContent = "在庫確認中...";
            cartBtn.textContent = "売り切れ";
            cartBtn.textContent = "購入手続きへ";
            \`\`\`

            #### UX向上ポイント
            - 押した結果がすぐ伝わる
            - 通信中だとわかる
            - 連打防止になる
            - カート追加成功が明確になる
        `),
    },
    {
        process: "多言語切替（日本語 / 英語）",
        detail: dedent(`
            表示している文字をボタン操作で切り替える処理

            #### 使用場面
            - コーポレートサイトの多言語対応
            - ECサイトの商品説明切替
            - 海外ユーザー向けLP
            - ダッシュボードUIの言語変更

            \`\`\`html
            <h1 id="title">ようこそ</h1>

            <button id="jaBtn">日本語</button>
            <button id="enBtn">English</button>
            \`\`\`

            \`\`\`js
            const title = document.querySelector("#title");
            const jaBtn = document.querySelector("#jaBtn");
            const enBtn = document.querySelector("#enBtn");

            jaBtn.addEventListener("click", () => {
                title.textContent = "ようこそ";
            });

            enBtn.addEventListener("click", () => {
                title.textContent = "Welcome";
            });
            \`\`\`

            #### 実行結果
            \`\`\`text
            初期表示       : ようこそ
            English押下   : Welcome
            日本語押下     : ようこそ
            \`\`\`

            ---

            #### より実務的な方法（辞書データで管理）
            \`\`\`js
            const messages = {
                ja: "ようこそ",
                en: "Welcome",
                fr: "Bienvenue"
            };

            function changeLang(lang) {
                title.textContent = messages[lang];
            }

            changeLang("en");
            \`\`\`

            ポイント
            - \`textContent\` を使うと安全に文字だけ変更できる
            - HTMLタグを含めたい場合は \`innerHTML\`
            - 実務では localStorage に保存して次回アクセス時も保持することが多い
        `),
    },
];