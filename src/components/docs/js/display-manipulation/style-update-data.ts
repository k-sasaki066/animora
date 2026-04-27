import dedent from "dedent";

export type StyleUpdateItem = {
    process: string;
    detail?: string;
};

export const styleColumns = [
    { key: "process", label: "処理", className: "font-mono text-xs" },
];

export const styleData: StyleUpdateItem[] = [
    {
        process: "注意文の色変更",
        detail: dedent(`
            ユーザーに重要な情報・警告・期限切れ・削除確認などを伝える

            #### 使用場面
            - 削除確認メッセージ
            - 危険操作の警告
            - 有効期限通知
            - 在庫残りわずか表示
            - メンテナンス告知
            - 入力エラー表示
            - 規約変更アラート

            ---

            #### 基本例（warningクラスを付与）
            \`\`\`html
            <p id="notice">この操作は取り消せません</p>
            \`\`\`

            \`\`\`css
            .warning {
                color: orange;
                font-weight: bold;
            }
            \`\`\`

            \`\`\`js
            const notice = document.querySelector("#notice");

            notice.classList.add("warning");
            \`\`\`

            #### トグル(ON / OFF を切り替える)

            \`\`\`js
            notice.classList.toggle("warning");
            \`\`\`

            ---

            #### 危険度別クラス設計例

            \`\`\`css
            .info {
                color: #2563eb;
            }

            .warning {
                color: orange;
                font-weight: bold;
            }

            .danger {
                color: red;
                font-weight: bold;
            }

            .success {
                color: green;
            }
            \`\`\`

            ---

            #### 削除警告
            \`\`\`html
            <p id="deleteMsg">削除すると元に戻せません</p>
            <button id="deleteBtn">削除</button>
            \`\`\`

            \`\`\`js
            const msg = document.querySelector("#deleteMsg");
            const btn = document.querySelector("#deleteBtn");

            btn.addEventListener("click", () => {
                msg.classList.add("danger");
            });
            \`\`\`

            ---

            #### 在庫注意
            \`\`\`html
            <p id="stock">残りわずかです</p>
            \`\`\`

            \`\`\`js
            const stock = document.querySelector("#stock");

            stock.classList.add("warning");
            \`\`\`

            ---

            #### エラー表示
            \`\`\`html
            <p id="error"></p>
            \`\`\`

            \`\`\`js
            const error = document.querySelector("#error");

            error.textContent = "入力内容に誤りがあります";
            error.classList.add("danger");
            \`\`\`
        `),
    },
    {
        process: "背景色変更（選択状態）",
        detail: dedent(`
            #### 使用場面
            - メニュー選択中
            - タブ切替
            - チェック中のカードUI
            - ナビゲーションの現在ページ表示
            - 選択済み商品の強調

            ---

            #### 基本例
            \`\`\`html
            <div class="item">商品A</div>
            \`\`\`

            \`\`\`css
            .active {
                background-color: lightblue;
            }
            \`\`\`

            \`\`\`js
            const item = document.querySelector(".item");

            item.classList.add("active");
            \`\`\`

            ---

            #### タブ切替の例
            \`\`\`html
            <button class="tab">人気</button>
            <button class="tab">新着</button>
            <button class="tab">おすすめ</button>
            \`\`\`

            \`\`\`css
            .active {
                background-color: skyblue;
            }
            \`\`\`

            \`\`\`js
            const tabs = document.querySelectorAll(".tab");

            tabs.forEach(tab => {
                tab.addEventListener("click", () => {

                    tabs.forEach(t => {
                        t.classList.remove("active");
                    });

                    tab.classList.add("active");
                });
            });
            \`\`\`

            ポイント
            - 選択された要素だけ active を付与
            - 他は remove で解除
            - 状態管理がシンプルになる

            ---

            #### サイドメニュー選択中
            \`\`\`js
            menu.classList.add("active");
            \`\`\`

            \`\`\`css
            .active {
                background-color: #27272a;
            }
            \`\`\`

            ---

            #### カード選択UI
            \`\`\`js
            card.classList.add("selected");
            \`\`\`

            \`\`\`css
            .selected {
                background-color: #dbeafe;
                border: 2px solid #3b82f6;
            }
            \`\`\`
        `),
    },
    {
        process: "在庫切れ商品の見た目変更",
        detail: dedent(`
            #### 使用場面
            - ECサイト商品一覧
            - サイズ別在庫表示
            - チケット販売画面
            - 予約枠満席表示
            - フリマアプリの売却済み表示

            ---

            #### 基本例
            \`\`\`html
            <div class="item soldout">
                スニーカー（在庫切れ）
            </div>
            \`\`\`

            \`\`\`css
            .soldout {
                opacity: 0.4;
                filter: grayscale(100%);
                pointer-events: none;
                cursor: not-allowed;
            }
            \`\`\`

            \`\`\`js
            const item = document.querySelector(".item");

            item.classList.add("soldout");
            \`\`\`

            ---

            #### 在庫データから制御

            \`\`\`js
            const item = document.querySelector(".item");

            if (product.stock === 0) {
                item.classList.add("soldout");
            }
            \`\`\`

            ---

            #### 複数商品に適用
            \`\`\`html
            <div class="item" data-stock="0">商品A</div>
            <div class="item" data-stock="5">商品B</div>
            \`\`\`

            \`\`\`js
            const items = document.querySelectorAll(".item");

            items.forEach(item => {
                const stock = item.dataset.stock;

                if (stock === "0") {
                    item.classList.add("soldout");
                }
            });
            \`\`\`

            ---

            #### トグル制御（状態変更）
            \`\`\`js
            item.classList.toggle("soldout");
            \`\`\`
        `),
    },
    {
        process: "スクロールでヘッダー固定",
        detail: dedent(`
            #### 使用場面
            - LP（ランディングページ）
            - コーポレートサイト
            - ECサイト
            - ブログ記事ページ
            - 管理画面ダッシュボード
            - スマホナビゲーション

            ---

            #### 基本
            \`\`\`html
            <header id="header">
                <h1>LOGO</h1>
            </header>
            \`\`\`

            \`\`\`css
            header {
                position: relative;
                width: 100%;
                transition: 0.3s;
            }

            header.fixed {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1000;
                background: white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            \`\`\`

            \`\`\`js
            const header = document.querySelector("#header");

            window.addEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    header.classList.add("fixed");
                } else {
                    header.classList.remove("fixed");
                }
            });
            \`\`\`

            #### ポイント
            - アニメーション（transition）をCSS側に書くと自然な動きになる
            - JSは「状態管理（class付け外し）」だけにするのがベスト
            - sticky と併用するとさらに軽量化できる

            #### スクロール方向で制御（上スクロールで表示）
            \`\`\`js
            let lastScroll = 0;

            window.addEventListener("scroll", () => {
                if (window.scrollY > lastScroll) {
                    header.classList.add("hidden");
                } else {
                    header.classList.remove("hidden");
                }
                lastScroll = window.scrollY;
            });
            \`\`\`

            ---

            #### CSSでフェード表示
            \`\`\`css
            header.hidden {
                transform: translateY(-100%);
                opacity: 0;
            }
            \`\`\`
        `),
    },
    {
        process: "未読通知バッジ表示",
        detail: dedent(`
            #### 使用場面
            - SNS通知
            - DM未読件数
            - チャット新着メッセージ
            - カート商品数表示
            - 管理画面アラート

            #### 基本
            \`\`\`html
            <div class="bell-wrap">
                🔔
                <span class="badge"></span>
            </div>
            \`\`\`

            \`\`\`css
            .bell-wrap {
                position: relative;
                display: inline-block;
                font-size: 28px;
            }

            /* 非表示状態 */
            .badge {
                display: none;
            }

            /* 表示状態 */
            .badge.is-visible {
                display: inline-block;
                position: absolute;
                top: -6px;
                right: -10px;
                min-width: 20px;
                height: 20px;
                padding: 0 6px;
                border-radius: 9999px;
                background: red;
                color: white;
                font-size: 12px;
                line-height: 20px;
                text-align: center;
                font-weight: bold;
            }

            /* 重要通知 */
            .badge.is-warning {
                background: orange;
            }
            \`\`\`

            \`\`\`js
            const badge = document.querySelector(".badge");

            const count = 3;

            if (count > 0) {
                badge.textContent = count > 99 ? "99+" : count;
                badge.classList.add("is-visible");
            } else {
                badge.classList.remove("is-visible");
            }
            \`\`\`

            ---

            #### API取得後

            \`\`\`js
            fetch("/api/notifications")
                .then(res => res.json())
                .then(data => {
                    const badge = document.querySelector(".badge");

                    if (data.count > 0) {
                        badge.textContent = data.count > 99 ? "99+" : data.count;
                        badge.classList.add("is-visible");
                    } else {
                        badge.classList.remove("is-visible");
                    }
                });
            \`\`\`

            ---

            #### 重要通知の色変更

            \`\`\`js
            if (count > 10) {
                badge.classList.add("is-warning");
            }
            \`\`\`
        `),
    },
    {
        process: "画像読み込み後にフェード表示",
        detail: dedent(`
            画像が読み込まれたタイミングでクラスを切り替え

            #### 使用場面
            - ギャラリー
            - 商品画像（ECサイト）
            - ブログ一覧サムネイル
            - プロフィール画像
            - 遅延ロード画像のUX改善

            #### 基本コード
            \`\`\`html
            <img
                id="photo"
                class="fade-image"
                src="sample.jpg"
                alt="画像"
            >
            \`\`\`

            \`\`\`css
            .fade-image {
                opacity: 0;
                transition: opacity 0.5s ease;
            }

            .fade-image.is-loaded {
                opacity: 1;
            }
            \`\`\`

            \`\`\`js
            const img = document.querySelector("#photo");

            img.addEventListener("load", () => {
                img.classList.add("is-loaded");
            });
            \`\`\`

            #### 実行の流れ
            \`\`\`text
            ① 初期状態：.fade-image（opacity: 0）
            ② 画像読み込み完了
            ③ is-loaded クラス追加
            ④ CSSトランジションでフェードイン
            \`\`\`

            ---

            #### ECサイト商品画像
            \`\`\`js
            const productImg =
                document.querySelector(".product-image");

            productImg.addEventListener("load", () => {
                productImg.classList.add("is-loaded");
            });
            \`\`\`

            ---

            #### ブログ一覧のサムネイル

            \`\`\`js
            const images =
                document.querySelectorAll(".thumb");

            images.forEach(img => {
                img.addEventListener("load", () => {
                    img.classList.add("is-loaded");
                });
            });
            \`\`\`

            ---

            #### ローディングと組み合わせ

            \`\`\`html
            <div id="loading">Loading...</div>
            <img id="photo" class="fade-image" src="sample.jpg">
            \`\`\`

            \`\`\`js
            const img = document.querySelector("#photo");
            const loading = document.querySelector("#loading");

            img.addEventListener("load", () => {
                img.classList.add("is-loaded");
                loading.classList.add("hidden");
            });
            \`\`\`

            \`\`\`css
            .hidden {
                display: none;
            }
            \`\`\`

            #### 注意点
            - 初期状態の opacity:0 を必ずCSSに書く
            - transition はCSS側に持たせる
            - class設計（is-loadedなど）は統一する
        `),
    },
    {
        process: "入力欄フォーカス時に強調",
        detail: dedent(`
            ユーザーが入力中のフォームを視覚的に強調する処理

            #### 使用場面
            - ログイン画面
            - 会員登録フォーム
            - お問い合わせフォーム
            - 検索ボックス
            - 管理画面入力UI

            #### 基本例
            \`\`\`html
            <input id="email" type="email" class="input" placeholder="メールアドレス">
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#email");

            input.addEventListener("focus", () => {
                input.classList.add("is-focus");
            });

            input.addEventListener("blur", () => {
                input.classList.remove("is-focus");
            });
            \`\`\`

            \`\`\`css
            .input {
                border: 1px solid #ccc;
                padding: 8px;
                border-radius: 6px;
                transition: 0.2s;
            }

            .is-focus {
                border: 2px solid #3b82f6;
                box-shadow: 0 0 0 4px rgba(59,130,246,0.15);
            }
            \`\`\`

            #### 実行結果
            \`\`\`text
            通常状態   : 薄いグレーの枠
            フォーカス : 青枠 + うっすら光る
            \`\`\`

            ---

            #### エラー状態
            \`\`\`js
            input.classList.add("is-error");
            \`\`\`

            \`\`\`css
            .is-error {
                border: 2px solid red;
            }
            \`\`\`

            ---

            #### 入力済み状態
            \`\`\`js
            if (input.value !== "") {
                input.classList.add("is-filled");
            }
            \`\`\`

            ---

            #### 複数入力対応

            \`\`\`js
            document.querySelectorAll("input").forEach((el) => {
                el.addEventListener("focus", () => {
                    el.classList.add("is-focus");
                });

                el.addEventListener("blur", () => {
                    el.classList.remove("is-focus");
                });
            });
            \`\`\`
        `),
    },
    {
        process: "ドラッグ中の見た目変更",
        detail: dedent(`
            #### 使用場面
            - タスクの並び替え（Todoアプリ）
            - カンバンボード（ToDo / Doing / Done）
            - カードUIのドラッグ移動
            - ウィジェット配置画面
            - ギャラリー並び替え

            #### 基本構造
            \`\`\`html
            <div id="item" class="item" draggable="true">
                ドラッグ対象
            </div>
            \`\`\`

            \`\`\`css
            .item {
                transition: 0.2s;
            }

            .dragging {
                opacity: 0.5;
                transform: scale(1.05) rotate(2deg);
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                border: 2px dashed #3b82f6;
            }
            \`\`\`

            \`\`\`js
            const item = document.querySelector("#item");

            item.addEventListener("dragstart", () => {
                item.classList.add("dragging");
            });

            item.addEventListener("dragend", () => {
                item.classList.remove("dragging");
            });
            \`\`\`

            ---

            #### Tailwind版
            \`\`\`js
            item.classList.add("opacity-50", "scale-105", "shadow-lg");
            \`\`\`

            \`\`\`js
            item.classList.remove("opacity-50", "scale-105", "shadow-lg");
            \`\`\`
        `),
    },
    {
        process: "完了タスクに取り消し線",
        detail: dedent(`
            タスクが完了したことを視覚的に分かりやすくする

            #### 使用場面
            - Todoアプリ（完了チェック）
            - タスク管理ツール
            - チェックリスト
            - ステップ完了UI
            - 作業フロー管理

            #### 基本実装
            \`\`\`html
            <li id="task">買い物に行く</li>
            <button id="doneBtn">完了</button>
            \`\`\`

            \`\`\`css
            .completed {
                text-decoration: line-through;
                color: gray;
                opacity: 0.6;
            }
            \`\`\`

            \`\`\`js
            const task = document.querySelector("#task");
            const doneBtn = document.querySelector("#doneBtn");

            doneBtn.addEventListener("click", () => {
                task.classList.add("completed");
            });
            \`\`\`

            ---

            #### トグル（完了 / 未完了）

            \`\`\`js
            doneBtn.addEventListener("click", () => {
                task.classList.toggle("completed");
            });
            \`\`\`

            ---

            #### チェックボックス連動
            \`\`\`html
            <input type="checkbox" id="check" />
            <li id="task">買い物に行く</li>
            \`\`\`

            \`\`\`js
            const check = document.querySelector("#check");

            check.addEventListener("change", () => {
                task.classList.toggle("completed", check.checked);
            });
            \`\`\`
        `),
    },
];