import dedent from "dedent";

export type HTMLContentUpdateItem = {
    process: string;
    detail?: string;
};

export const htmlContentColumns = [
    { key: "process", label: "処理", className: "font-mono text-xs" },
];

export const htmlContentData: HTMLContentUpdateItem[] = [
    {
        process: "お知らせ表示",
        detail: dedent(`
            管理画面やAPIから取得したお知らせ文を、そのままHTML付きで表示する<br />
            \`innerHTML\` を使うことで文字列だけではできない装飾付きのお知らせを表示できる

            #### 使用場面
            - サイトメンテナンス告知
            - キャンペーン表示
            - 緊急障害案内
            - 管理画面から投稿した通知
            - API取得したニュース表示

            \`\`\`html
            <div id="notice"></div>
            \`\`\`

            \`\`\`js
            const notice = document.querySelector("#notice");

            notice.innerHTML = \`
                <p class="text-red-500 font-bold">
                    メンテナンスのお知らせ
                </p>
                <p>本日 22:00〜23:00 に実施します。</p>
            \`;
            \`\`\`

            ---

            #### APIから取得して表示

            \`\`\`js
            fetch("/api/notice")
                .then(res => res.json())
                .then(data => {
                    notice.innerHTML = \`
                        <h3>\${data.title}</h3>
                        <p>\${data.message}</p>
                    \`;
                });
            \`\`\`

            ---

            #### 緊急障害アラート

            \`\`\`js
            notice.innerHTML = \`
                <div class="bg-red-100 p-3 rounded">
                    <strong>障害発生中</strong><br />
                    一部サービスに接続しづらい状況です。
                </div>
            \`;
            \`\`\`

            ---

            #### キャンペーン告知

            \`\`\`js
            notice.innerHTML = \`
                <div class="bg-yellow-100 p-3 rounded">
                    🎉 今だけ送料無料キャンペーン開催中！
                </div>
            \`;
            \`\`\`

            #### 安全に使うコツ
            - 自分で固定HTMLを書く
            - APIデータはサニタイズする
            - 文字だけなら \`textContent\` を使う
        `),
    },
    {
        process: "アイコン付き文言",
        detail: dedent(`
            テキストだけでなく、アイコン付きで強調表示したい場面

            #### 使用場面
            - フォーム送信成功
            - API通信エラー
            - バリデーション注意文
            - 管理画面通知
            - 在庫あり / 在庫なし表示
            - 会員ステータス表示
            - アップロード進行状況

            \`\`\`html
            <div id="message"></div>
            \`\`\`

            ### 保存成功

            \`\`\`html
            <div id="message"></div>
            \`\`\`

            \`\`\`js
            const message = document.querySelector("#message");

            message.innerHTML = \`
                <span>✅</span>
                <span>保存が完了しました</span>
            \`;
            \`\`\`

            表示結果
            \`\`\`text
            ✅ 保存が完了しました
            \`\`\`

            ---

            #### エラー表示

            \`\`\`js
            message.innerHTML = \`
                <span>❌</span>
                <span>入力内容に誤りがあります</span>
            \`;
            \`\`\`

            表示結果
            \`\`\`text
            ❌ 入力内容に誤りがあります
            \`\`\`

            ---

            #### 注意表示
            \`\`\`js
            message.innerHTML = \`
                <span>⚠️</span>
                <span>パスワードは8文字以上で入力してください</span>
            \`;
            \`\`\`

            ---

            #### 情報表示
            \`\`\`js
            message.innerHTML = \`
                <span>ℹ️</span>
                <span>新しいアップデートがあります</span>
            \`;
            \`\`\`

            ---

            #### React実務では

            \`\`\`jsx
            {success && <p>✅ 保存しました</p>}
            \`\`\`

            のように JSX で書くことが多く、<br />
            素のJavaScriptでは \`innerHTML\` で組み立てることがある
        `),
    },
    {
        process: "リッチテキスト表示",
        detail: dedent(`
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
        `),
    },
    {
        process: "ローディング表示",
        detail: dedent(`
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
        `),
    },
    {
        process: "カード生成",
        detail: dedent(`
            情報をHTMLとして組み立てて、一覧表示する処理

            #### 使用場面
            - ECサイト商品一覧
            - おすすめ商品表示
            - お気に入り商品一覧
            - ランキング表示
            - カードUI生成
            - APIデータ一覧表示
            - コメント一覧
            - 検索結果一覧
            - 通知一覧

            #### 1件表示
            \`\`\`html
            <div id="product"></div>
            \`\`\`

            \`\`\`js
            const product = document.querySelector("#product");

            product.innerHTML = \`
                <div class="card">
                    <h3>ノートPC</h3>
                    <p>¥98,000</p>
                </div>
            \`;
            \`\`\`

            ---

            #### 複数商品を一覧表示
            \`\`\`html
            <div id="products"></div>
            \`\`\`

            \`\`\`js
            const products = [
                { name: "ノートPC", price: 98000 },
                { name: "キーボード", price: 6800 },
                { name: "マウス", price: 3200 }
            ];

            const container =
                document.querySelector("#products");

            container.innerHTML = products.map(item => \`
                <div class="card">
                    <h3>\${item.name}</h3>
                    <p>¥\${item.price.toLocaleString()}</p>
                </div>
            \`).join("");
            \`\`\`

            実行結果
            \`\`\`text
            ノートPC      ¥98,000
            キーボード     ¥6,800
            マウス         ¥3,200
            \`\`\`

            ---

            #### APIデータ取得後に表示

            \`\`\`js
            fetch("/api/products")
                .then(res => res.json())
                .then(data => {
                    container.innerHTML = data.map(item => \`
                        <div class="card">
                            <h3>\${item.name}</h3>
                            <p>¥\${item.price}</p>
                        </div>
                    \`).join("");
                });
            \`\`\`

            \`\`\`css
            .card {
                padding: 16px;
                border: 1px solid #ddd;
                border-radius: 8px;
                margin-bottom: 12px;
            }
            \`\`\`

            ⭐️ ポイント
            - 配列 + map() + join("") で一覧生成が定番
            - innerHTML はまとめて描画できるので高速
            - 商品件数が多い場合はテンプレート化すると管理しやすい

            ⚠️ 注意点
            - 外部入力値をそのまま innerHTML に入れるとXSS危険
            - ユーザー投稿データはエスケープ必須
            - React / Next.js では通常 JSX + map() で実装する
        `),
    },
    {
        process: "モーダル表示",
        detail: dedent(`
            確認画面や詳細情報をポップアップ表示する処理<br />

            #### 使用場面
            - 削除確認ダイアログ
            - ログイン案内
            - 詳細情報表示
            - キャンペーン告知

            \`\`\`html
            <div id="modal"></div>
            <button id="openBtn">開く</button>
            \`\`\`

            \`\`\`js
            const modal = document.querySelector("#modal");
            const openBtn =
                document.querySelector("#openBtn");

            openBtn.addEventListener("click", () => {
                modal.innerHTML = \`
                    <div class="overlay">
                        <div class="box">
                            <h2>確認</h2>
                            <p>削除しますか？</p>
                            <button id="closeBtn">
                                閉じる
                            </button>
                        </div>
                    </div>
                \`;

                document
                    .querySelector("#closeBtn")
                    .addEventListener("click", () => {
                        modal.innerHTML = "";
                    });
            });
            \`\`\`

            ポイント
            - 表示時にHTML生成
            - 閉じる時は \`innerHTML = ""\`
            - 背景オーバーレイも同時生成可能
        `),
    },
    {
        process: "タブ切替",
        detail: dedent(`
            ボタン選択に応じて表示内容を切り替える

            #### 使用場面
            - 商品詳細ページ
            - マイページ切替
            - 管理画面タブUI
            - FAQカテゴリ切替

            \`\`\`html
            <button id="tab1">商品説明</button>
            <button id="tab2">レビュー</button>

            <div id="content"></div>
            \`\`\`

            \`\`\`js
            const content =
                document.querySelector("#content");

            document
                .querySelector("#tab1")
                .addEventListener("click", () => {
                    content.innerHTML = \`
                        <h2>商品説明</h2>
                        <p>高性能ノートPCです。</p>
                    \`;
                });

            document
                .querySelector("#tab2")
                .addEventListener("click", () => {
                    content.innerHTML = \`
                        <h2>レビュー</h2>
                        <p>とても使いやすいです。</p>
                    \`;
                });
            \`\`\`

            ポイント
            - ボタン押下ごとに中身だけ差し替える
            - ページ遷移なしでUI変更できる
            - SPA的な操作感を作りやすい
        `),
    },
    {
        process: "ページネーション生成",
        detail: dedent(`
            一覧データが複数ページあるときに、ページ番号や次へボタンを動的生成する

            #### 使用場面
            - ECサイト商品一覧
            - ブログ記事一覧
            - 検索結果一覧
            - 管理画面テーブル

            \`\`\`html
            <div id="pagination"></div>
            \`\`\`

            \`\`\`js
            const pagination =
                document.querySelector("#pagination");

            const totalPages = 5;
            let html = "";

            for (let i = 1; i <= totalPages; i++) {
                html += \`
                    <button class="page-btn">
                        \${i}
                    </button>
                \`;
            }

            pagination.innerHTML = html;
            \`\`\`

            実行結果
            \`\`\`text
            [1] [2] [3] [4] [5]
            \`\`\`

            ポイント
            - ページ数に応じて自動生成できる
            - 現在ページだけ色変更も可能
            - API連携と相性が良い
        `),
    },
    {
        process: "FAQアコーディオン",
        detail: dedent(`
            質問をクリックすると回答が開閉する

            #### 使用場面
            - FAQページ
            - サポートページ
            - 商品説明Q&A
            - 社内ヘルプページ

            \`\`\`html
            <div id="faq"></div>
            \`\`\`

            \`\`\`js
            const faq = document.querySelector("#faq");

            faq.innerHTML = \`
                <details>
                    <summary>
                        返品できますか？
                    </summary>
                    <p>
                        商品到着後30日以内なら可能です。
                    </p>
                </details>

                <details>
                    <summary>
                        送料はいくらですか？
                    </summary>
                    <p>
                        全国一律500円です。
                    </p>
                </details>
            \`;
            \`\`\`

            ポイント
            - \`details\` タグで簡単実装できる
            - クリックで自動開閉
            - JS最小限で作れる
        `),
    },
    {
        process: "チャットUI追加",
        detail: dedent(`
            メッセージ送信時に会話内容を画面へ追加表示する処理

            #### 使用場面
            - Chatアプリ
            - カスタマーサポート
            - AIチャット
            - 社内メッセージ機能

            \`\`\`html
            <div id="chat"></div>
            <button id="sendBtn">送信</button>
            \`\`\`

            \`\`\`js
            const chat = document.querySelector("#chat");
            const sendBtn =
                document.querySelector("#sendBtn");

            sendBtn.addEventListener("click", () => {
                chat.innerHTML += \`
                    <div class="message me">
                        こんにちは
                    </div>
                \`;
            });
            \`\`\`

            実行結果
            \`\`\`text
            自分: こんにちは
            自分: こんにちは
            自分: こんにちは
            \`\`\`

            ポイント
            - \`+=\` で既存内容に追加できる
            - 自分 / 相手でclassを分けるとUI調整しやすい
            - 自動スクロールと組み合わせることが多い

            ⚠️ 注意点
            - 件数が多い場合は append() の方が効率的
            - innerHTML連結は再描画コストがある
        `),
    },
    {
        process: "空状態UI（データなし）",
        detail: dedent(`
            表示するデータが0件のときに、案内メッセージを表示する

            #### 使用場面
            - 検索結果0件
            - お気に入り0件
            - 通知0件
            - 商品在庫なし
            - コメント未投稿


            \`\`\`html
            <div id="list"></div>
            \`\`\`

            \`\`\`js
            const list = document.querySelector("#list");

            const items = [];

            if (items.length === 0) {
                list.innerHTML = \`
                    <p class="empty">
                        データがありません
                    </p>
                \`;
            }
            \`\`\`

            ⭐️ ポイント
            - ユーザーに状態を明確に伝えられる
            - アイコン付き表示にもよく使う
            - CTAボタン追加も効果的

            例
            \`\`\`js
            list.innerHTML = \`
                <p>お気に入りはまだありません</p>
                <button>商品を見る</button>
            \`;
            \`\`\`
        `),
    },
];