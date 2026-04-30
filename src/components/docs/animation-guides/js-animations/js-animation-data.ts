import dedent from "dedent";

export type JSAnimationItem = {
    process: string;
    description: string;
    detail?: string;
};

export const animationUseColumns = [
    { key: "process", label: "使用場面" },
    { key: "description", label: "内容" },
];

export const animationUseData: JSAnimationItem[] = [
    {
        process: "モーダル表示",
        description:
            "クリック時にフェードイン・拡大表示して自然に見せる",
        detail: dedent(`
            #### よく使用するモーダル例
            ① 削除確認モーダル
            \`\`\`text
            本当に削除しますか？
            [キャンセル] [削除する]
            \`\`\`

            - 商品削除
            - 会員削除
            - 投稿削除
            - ファイル削除

            ---

            ② ログインモーダル
            \`\`\`text
            続行するにはログインしてください
            [メールログイン]
            [Googleログイン]
            \`\`\`

            - お気に入り追加前
            - 購入前
            - コメント投稿前

            ---

            ③ フォーム入力モーダル
            \`\`\`text
            お問い合わせ
            [名前]
            [メール]
            [送信]
            \`\`\`

            - 問い合わせ
            - 住所追加
            - クーポン入力
            - コメント投稿

            ---

            ④ 商品詳細モーダル
            \`\`\`text
            商品画像
            商品説明
            サイズ選択
            カート追加
            \`\`\`

            - ECサイト
            - ギャラリー
            - 不動産物件詳細

            ---

            ⑤ お知らせモーダル
            \`\`\`text
            GW休業のお知らせ
            [閉じる]
            \`\`\`

            - メンテナンス告知
            - キャンペーン告知
            - 初回案内

            ---

            ⑥ 動画再生モーダル
            \`\`\`text
            YouTube動画 / 商品紹介動画
            \`\`\`

            - LP
            - SaaS紹介
            - 商品説明

            ---

            #### 使用例
            \`\`\`html
            <button id="openBtn">モーダルを開く</button>

            <div id="modal" class="modal">
                <div class="modal-content">
                    <button id="closeBtn">閉じる</button>

                    <h2>お問い合わせ</h2>
                    <p>ここにフォーム内容</p>
                </div>
            </div>
            \`\`\`

            \`\`\`css
            /* 背景全体 */
            .modal {
                position: fixed;
                inset: 0;
                display: none;

                justify-content: center;
                align-items: center;

                background: rgba(0, 0, 0, 0.55);
                z-index: 9999;

                padding: 16px;
            }

            /* 表示時 */
            .modal.show {
                display: flex;
                animation: fadeIn 0.3s ease;
            }

            /* 中身 */
            .modal-content {
                width: 100%;
                max-width: 600px;
                max-height: 90vh;

                overflow-y: auto;
                background: white;
                border-radius: 12px;
                padding: 24px;
            }

            /* スマホ対応 */
            @media (max-width: 768px) {
                .modal {
                    align-items: flex-end;
                    padding: 0;
                }

                .modal-content {
                    max-width: 100%;
                    max-height: 85vh;
                    border-radius: 16px 16px 0 0;
                    padding: 20px;
                }
            }

            body.modal-open {
                overflow: hidden;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }

                to {
                    opacity: 1;
                }
            }
            \`\`\`

            \`\`\`js
            const modal = document.querySelector("#modal");
            const openBtn = document.querySelector("#openBtn");
            const closeBtn = document.querySelector("#closeBtn");

            let lastFocus = null;

            /* 開く */
            function openModal() {
                lastFocus = document.activeElement;

                modal.classList.add("show");
                document.body.classList.add("modal-open");

                closeBtn.focus();
            }

            /* 閉じる */
            function closeModal() {
                modal.classList.remove("show");
                document.body.classList.remove("modal-open");

                if (lastFocus) {
                    lastFocus.focus();
                }
            }

            /* 開くボタン */
            openBtn.addEventListener("click", openModal);

            /* 閉じるボタン */
            closeBtn.addEventListener("click", closeModal);

            /* 背景クリックで閉じる */
            modal.addEventListener("click", (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });

            /* Escキーで閉じる */
            window.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    closeModal();
                }
            });
            \`\`\`

            ---

            #### ポイント
            - 背景クリックで閉じる
            - Escキーで閉じる
            - スマホ対応
            - スクロール固定
            - 開いた時にfocus移動
            - 閉じたら元ボタンへ戻す
        `),
    },
    {
        process: "ハンバーガーメニュー開閉",
        description:
            "横からスライド表示してメニュー展開する",
        detail: dedent(`
            #### 使用場面
            - スマホサイト
            - ECサイト
            - コーポレートサイト
            - 管理画面SP版
            - LPヘッダー

            #### 使用例
            \`\`\`html
            <button id="menuBtn" class="menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div id="overlay" class="overlay"></div>

            <nav id="menu" class="menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            \`\`\`

            \`\`\`css
            .menu {
                position: fixed;
                top: 0;
                left: -300px;
                width: 240px;
                height: 100vh;
                background: #111;
                padding: 24px;
                padding-top: 60px;
                transition: left 0.3s ease;
                z-index: 1001;
            }

            .menu.open {
                left: 0;
            }

            /* メニューリンク */
            .menu a {
                display: block;
                color: white;
                margin-bottom: 16px;
                text-decoration: none;
            }

            /* 背景オーバーレイ */
            .overlay {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.4);
                opacity: 0;
                visibility: hidden;
                transition: 0.3s;
                z-index: 1000;
            }

            .overlay.show {
                opacity: 1;
                visibility: visible;
            }

            /* ハンバーガーボタン */
            .menu-btn {
                position: relative;
                width: 32px;
                height: 24px;
                border: none;
                background: transparent;
                cursor: pointer;
                z-index: 1002;
            }

            .menu-btn span {
                position: absolute;
                left: 0;
                width: 100%;
                height: 3px;
                background: #111;
                border-radius: 999px;
                transition: 0.3s;
            }

            .menu-btn span:nth-child(1) {
                top: 0;
            }

            .menu-btn span:nth-child(2) {
                top: 10px;
            }

            .menu-btn span:nth-child(3) {
                top: 20px;
            }

            /* ×ボタンへ変形 */
            .menu-btn.open span:nth-child(1) {
                transform: rotate(45deg);
                top: 10px;
                background-color: white;
            }

            .menu-btn.open span:nth-child(2) {
                opacity: 0;
            }

            .menu-btn.open span:nth-child(3) {
                transform: rotate(-45deg);
                top: 10px;
                background-color: white;
            }

            /* bodyスクロール停止 */
            body.lock {
                overflow: hidden;
            }
            \`\`\`

            \`\`\`js
            const menuBtn = document.querySelector("#menuBtn");
            const menu = document.querySelector("#menu");
            const overlay = document.querySelector("#overlay");
            const links = document.querySelectorAll("#menu a");

            function openMenu() {
                menu.classList.add("open");
                overlay.classList.add("show");
                menuBtn.classList.add("open");
                document.body.classList.add("lock");
            }

            function closeMenu() {
                menu.classList.remove("open");
                overlay.classList.remove("show");
                menuBtn.classList.remove("open");
                document.body.classList.remove("lock");
            }

            menuBtn.addEventListener("click", () => {
                if (menu.classList.contains("open")) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });

            /* 背景クリックで閉じる */
            overlay.addEventListener("click", closeMenu);

            /* メニュー押下後に自動で閉じる */
            links.forEach(link => {
                link.addEventListener("click", closeMenu);
            });
            \`\`\`

            ---

            #### UXポイント
            - 開閉は0.2〜0.35秒が自然
            - メニュー幅は 240px〜320px が多い
            - 背景暗転を付けると見やすい
            - 閉じる導線を必ず作る
        `),
    },
    {
        process: "ローディング表示",
        description:
            "通信中にスピナー回転・点滅で待機状態を伝える",
        detail: dedent(`
            「今処理しています」「固まっていません」と伝える重要なUI

            #### 使用場面
            - API通信中
            - 商品一覧取得中
            - ログイン処理中
            - 決済送信中
            - 画像読み込み中
            - ページ初回表示
            - 無限スクロール追加読込
            - ファイルアップロード中

            #### 使用例①
            \`\`\`css
            .show {
                display: block;
            }

            .spinner {
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                from { transform: rotate(0deg); }
                to   { transform: rotate(360deg); }
            }
            \`\`\`

            \`\`\`js
            loading.classList.add("show");

            fetch("/api/products")
                .then(res => res.json())
                .then(data => {
                    loading.classList.remove("show");
                });
            \`\`\`

            ---

            #### 使用例② 送信ボタンをローディング化
            \`\`\`js
            button.textContent = "送信中...";
            button.disabled = true;
            \`\`\`

            - お問い合わせ送信
            - 会員登録
            - コメント投稿

            ---

            #### 使用例③ ページ初回表示でスケルトンUI
            \`\`\`html
            <div class="skeleton card"></div>
            \`\`\`

            \`\`\`css
            .skeleton {
                animation: pulse 1.2s infinite;
            }

            @keyframes pulse {
                0%   { opacity: 0.5; }
                50%  { opacity: 1; }
                100% { opacity: 0.5; }
            }
            \`\`\`

            - 商品カード一覧
            - SNS投稿一覧
            - ダッシュボード

            ---

            #### 使用例④ ファイルアップロード中
            \`\`\`js
            status.textContent = "アップロード中...";
            \`\`\`

            - 画像投稿
            - PDF送信
            - 動画アップロード

            ---

            #### 使用例⑤ 無限スクロール追加読み込み
            \`\`\`js
            window.addEventListener("scroll", () => {
                if (bottomReached) {
                    loader.classList.add("show");
                }
            });
            \`\`\`

            - SNSタイムライン
            - 商品一覧
            - 記事一覧

            ---

            #### ポイント
            - 0.3秒以上待つなら表示推奨
            - 二重送信防止とセットにする
            - 読み込み完了後は即非表示
            - 長時間なら進捗率表示が理想
        `),
    },
    {
        process: "スクロール出現",
        description:
            "下からふわっと表示し、視線誘導や印象向上に使う",
        detail: dedent(`
            ユーザーがスクロールして要素が画面に入ったタイミングでアニメーションを発火させる手法

            #### 使用場面
            - LP（ランディングページ）のセクション表示
            - 商品一覧ページのカード表示
            - ブログ記事一覧
            - ECサイトのおすすめ商品セクション
            - 料金プランの段階的表示

            #### 使用例
            \`\`\`css
            .card {
                opacity: 0;
                transform: translateY(30px);
                transition: 0.6s ease;
            }

            .card.show {
                opacity: 1;
                transform: translateY(0);
            }
            \`\`\`

            \`\`\`js
            const targets = document.querySelectorAll(".card");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            });

            targets.forEach((el) => observer.observe(el));
            \`\`\`

            ■ なぜ使うのか？
            - 情報を一気に見せない（視認性向上）
            - UIに動きを出して退屈さを防ぐ
            - コンバージョン率改善（CTR向上）
            - 高級感・洗練された印象を与える

            ---

            ■ よくあるバリエーション
            - 下からフェードイン
            - 左からスライドイン
            - 右からスライドイン
            - スケールイン（拡大表示）
            - 遅延アニメーション（stagger）
        `),
    },
    {
        process: "アコーディオン開閉",
        description:
            "高さアニメーションで詳細説明を開閉する",
        detail: dedent(`
            クリックすると内容が開き、再度クリックで閉じる

            #### 使用場面
            - FAQ（よくある質問）
            - 商品詳細説明
            - 料金プラン比較
            - 管理画面の詳細行表示
            - フィルター条件開閉
            - スマホメニュー
            - 設定画面の詳細項目
            - ドキュメント目次

            ---

            #### 場面例① FAQ
            \`\`\`text
            Q. 返品できますか？
            [+] クリックで回答表示
            \`\`\`
            ECサイト・サービスサイトで定番

            ---

            #### 場面例② 商品スペック表示
            \`\`\`text
            商品説明
            サイズ
            素材
            配送情報
            \`\`\`
            各項目を開閉して見やすく整理

            ---

            #### 場面例③ 管理画面テーブル
            一覧行クリックで詳細データ表示
            \`\`\`text
            ユーザー一覧
            注文履歴
            エラー詳細
            \`\`\`
            画面遷移せず確認できるため効率的

            ---

            #### 場面例④ 検索フィルター
            \`\`\`text
            カテゴリ ▼
            価格 ▼
            ブランド ▼
            \`\`\`
            モバイルECサイトで多用される

            ---

            #### 使用例
            \`\`\`html
            <button class="btn">詳細を見る</button>

            <div class="content">
                <p>ここに詳細説明が入ります。</p>
                <p>サイズ・素材・注意事項など。</p>
            </div>
            \`\`\`

            \`\`\`css
            .content {
                max-height: 0;
                overflow: hidden;
                background: #f5f5f5;
                padding: 0 16px;
                opacity: 0;
            }

            /* 開いた時 */
            .content.open {
                max-height: 300px;
                padding: 16px;
                animation: accordionOpen 0.35s ease forwards;
            }

            /* 閉じる時に使いたい場合 */
            .content.open.close {
                animation: accordionClose 0.3s ease forwards;
            }

            .btn {
                padding: 10px 16px;
                cursor: pointer;
            }

            /* 開く */
            @keyframes accordionOpen {
                0% {
                    opacity: 0;
                    transform: translateY(-8px);
                }

                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            /* 閉じる */
            @keyframes accordionClose {
                0% {
                    opacity: 1;
                    transform: translateY(0);
                }

                100% {
                    opacity: 0;
                    transform: translateY(-8px);
                }
            }
            \`\`\`

            \`\`\`js
            const button = document.querySelector(".btn");
            const content = document.querySelector(".content");

            button.addEventListener("click", () => {
                const isOpen = content.classList.contains("open");

                if (isOpen) {
                    content.classList.add("close");

                    setTimeout(() => {
                        content.classList.remove("open");
                        content.classList.remove("close");
                    }, 300);
                } else {
                    content.classList.add("open");
                }
            });
            \`\`\`
        `),
    },
    {
        process: "タブ切替",
        description:
            "フェード・スライドでコンテンツを切り替える",
        detail: dedent(`
            タブUIとは、1つの画面内で内容を切り替えて表示する仕組み

            #### 使用場面
            - 商品詳細（説明 / レビュー / FAQ）
            - マイページ（プロフィール / 注文履歴 / 設定）
            - 管理画面（売上 / 会員 / 商品管理）
            - ダッシュボード（週 / 月 / 年）

            #### 使用例
            \`\`\`html
            <div class="tabs">
                <button class="tab active" data-tab="info">商品説明</button>
                <button class="tab" data-tab="review">レビュー</button>
                <button class="tab" data-tab="faq">FAQ</button>
            </div>

            <div id="info" class="panel show">商品の説明です</div>
            <div id="review" class="panel">レビュー一覧です</div>
            <div id="faq" class="panel">よくある質問です</div>
            \`\`\`

            \`\`\`css
            .panel {
                display: none;
                opacity: 0;
            }

            .panel.show {
                display: block;
                animation: fadeIn 0.35s ease forwards;
            }

            .tab.active {
                background: #111;
                color: #fff;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }

                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            \`\`\`

            \`\`\`js
            const tabs = document.querySelectorAll(".tab");
            const panels = document.querySelectorAll(".panel");

            tabs.forEach(tab => {
                tab.addEventListener("click", () => {
                    const target = tab.dataset.tab;

                    tabs.forEach(btn =>
                        btn.classList.remove("active")
                    );

                    panels.forEach(panel =>
                        panel.classList.remove("show")
                    );

                    tab.classList.add("active");

                    document
                        .querySelector("#" + target)
                        .classList.add("show");
                });
            });
            \`\`\`
        `),
    },
    {
        process: "ボタンホバー",
        description:
            "拡大・色変化・浮き上がりで押せることを伝える",
        detail: dedent(`
            「ボタンにマウスを乗せた時に変化を付けることで、<br />
            「クリックできる要素」であることを自然に伝える

            通常は CSS の \`:hover\` を使うが、<br />
            JavaScript を使うと条件付き演出・遅延表示・複雑な制御ができる

            #### CSSによる基本構文
            \`\`\`html
            <button id="btn" class="btn">送信する</button>
            \`\`\`
            \`\`\`css
            .btn {
                padding: 12px 24px;
                background: #2563eb;
                color: white;
                border-radius: 8px;
                transition: 0.2s;
            }

            .btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(0,0,0,.15);
            }
            \`\`\`

            ---

            #### 使用例① 初回だけ強調hover
            \`\`\`js
            const btn = document.querySelector("#btn");

            let first = true;

            btn.addEventListener("mouseenter", () => {
                if (first) {
                    btn.classList.add("hovered");
                    first = false;
                }
            });
            \`\`\`

            - 初回導線強調
            - チュートリアル

            ---

            #### 使用例② 条件付きhover（送信可能時のみ）
            \`\`\`js
            const btn = document.querySelector("#btn");

            const canSubmit = true;

            btn.addEventListener("mouseenter", () => {
                if (canSubmit) {
                    btn.classList.add("hovered");
                }
            });
            \`\`\`

            - フォーム入力完了後
            - 在庫あり商品のみ

            ---

            #### 使用例③ 音付きhover
            \`\`\`js
            const btn = document.querySelector("#btn");

            btn.addEventListener("mouseenter", () => {
                btn.classList.add("hovered");
                hoverSound.play();
            });
            \`\`\`

            - ゲームUI
            - 特殊演出サイト

            ---

            #### 使用例④ keyframes を使うhover
            \`\`\`css
            .btn.hovered {
                animation: bounce 0.4s ease;
            }

            @keyframes bounce {
                0%   { transform: scale(1); }
                50%  { transform: scale(1.08); }
                100% { transform: scale(1); }
            }
            \`\`\`

            \`\`\`js
            const btn = document.querySelector("#btn");

            btn.addEventListener("mouseenter", () => {
                btn.classList.remove("hovered");

                void btn.offsetWidth;

                btn.classList.add("hovered");
            });
            \`\`\`

            - CTAボタン
            - LP申し込み導線

            ---

            #### 使用例⑤ 複数ボタン共通処理
            \`\`\`js
            const btn = document.querySelector("#btn");

            document.querySelectorAll(".btn").forEach(btn => {
                btn.addEventListener("mouseenter", () => {
                    btn.classList.add("hovered");
                });

                btn.addEventListener("mouseleave", () => {
                    btn.classList.remove("hovered");
                });
            });
            \`\`\`

            - 一覧ボタン
            - 商品カード
        `),
    },
    {
        process: "フォームエラー",
        description:
            "揺れ・赤表示で入力ミスをわかりやすく伝える",
        detail: dedent(`
            #### 使用場面
            - ログイン画面（ID / パスワード未入力）
            - 会員登録フォーム
            - お問い合わせフォーム
            - 決済画面のカード情報エラー
            - 必須項目の入力漏れチェック

            #### 使用例
            \`\`\`html
            <form id="form">
                <input id="email" type="email" placeholder="メールアドレス" />

                <p id="error"></p>

                <button>送信</button>
            </form>
            \`\`\`

            \`\`\`css
            input {
                border: 1px solid #ccc;
                padding: 10px;
                width: 300px;
            }

            input.error {
                border: 2px solid red;
            }

            input.success {
                border: 2px solid green;
            }

            #error {
                font-size: 14px;
                margin-top: 8px;
                min-height: 20px;
            }

            #error.error-text {
                color: red;
            }

            #error.success-text {
                border-color: green;
            }

            .shake {
                animation: shake 0.4s ease;
            }

            @keyframes shake {
                0% {
                    transform: translateX(0);
                }

                25% {
                    transform: translateX(-6px);
                }

                50% {
                    transform: translateX(6px);
                }

                75% {
                    transform: translateX(-6px);
                }

                100% {
                    transform: translateX(0);
                }
            }
            \`\`\`

            \`\`\`js
            const form = document.querySelector("#form");
            const email = document.querySelector("#email");
            const error = document.querySelector("#error");

            function validateEmail() {
                const value = email.value.trim();

                if (value === "") {
                    showError("メールアドレスを入力してください");
                    return false;
                }

                if (!value.includes("@")) {
                    showError("正しいメール形式で入力してください");
                    return false;
                }

                showSuccess();
                return true;
            }

            function showError(message) {
                email.classList.remove("success");
                email.classList.add("error", "shake");

                error.textContent = message;
                error.className = "error-text";

                setTimeout(() => {
                    email.classList.remove("shake");
                }, 400);
            }

            function showSuccess() {
                email.classList.remove("error");
                email.classList.add("success");

                error.textContent = "";
                error.className = "success-text";
            }

            email.addEventListener("input", () => {
                validateEmail();
            });

            form.addEventListener("submit", (e) => {
                e.preventDefault();

                const isValid = validateEmail();

                if (!isValid) {
                    email.focus();

                    email.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    return;
                }

                alert("送信成功");
            });
            \`\`\`

            \`\`\`text
            ① 未入力なら赤表示
            ② メール形式不正も赤表示
            ③ エラー時に左右へ揺れる
            ④ 送信時にエラー欄へ自動スクロール
            ⑤ 最初のエラー欄へ focus()
            ⑥ 入力中リアルタイムチェック
            ⑦ 正常入力なら緑表示
            \`\`\`

            ---

            #### ポイント
            - ユーザーが迷わない
            - どこが間違いか即わかる
            - 修正しやすい
            - 入力ストレスが減る
        `),
    },
    {
        process: "通知トースト",
        description:
            "右上や下部からスライド表示して通知する",
        detail: dedent(`
            トースト通知とは、画面の端に数秒だけ表示される小さな通知UI <br />
            ユーザー操作を邪魔せず、結果だけを伝えたい時に使われる

            #### 使用場面
            - 保存完了
            - コピー完了
            - ログイン成功
            - エラー発生
            - 商品をカート追加
            - 更新完了
            - メッセージ受信

            #### 使用例
            \`\`\`html
            <div id="toast" class="toast">
                保存しました
            </div>

            <button id="btn">保存</button>
            \`\`\`

            \`\`\`css
            .toast {
                position: fixed;
                top: 20px;
                right: 20px;
                background: #222;
                color: white;
                padding: 12px 16px;
                border-radius: 8px;
                opacity: 0;
                pointer-events: none;
            }

            .toast.show {
                animation: toastIn 0.4s ease forwards;
            }

            .toast.hide {
                animation: toastOut 0.35s ease forwards;
            }

            @keyframes toastIn {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }

                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes toastOut {
                from {
                    opacity: 1;
                    transform: translateY(0);
                }

                to {
                    opacity: 0;
                    transform: translateY(-20px);
                }
            }
            \`\`\`

            \`\`\`js
            const toast = document.querySelector("#toast");
            const btn = document.querySelector("#btn");

            btn.addEventListener("click", () => {
                toast.classList.remove("hide");
                toast.classList.add("show");

                setTimeout(() => {
                    toast.classList.remove("show");
                    toast.classList.add("hide");
                }, 2500);
            });
            \`\`\`

            \`\`\`txt
            ボタン押下
            ↓
            右上に「保存しました」表示
            ↓
            2.5秒後に自動で消える
            \`\`\`

            ---

            \`\`\`txt
            ECサイト例    商品をカートに追加しました
            SaaS例       設定を保存しました
            SNS例        コピーしました
            管理画面例     ユーザーを削除しました
            \`\`\`

            #### UXポイント
            - 数秒で自動消滅
            - モーダルのように操作を止めない
            - 成功 / 失敗 を即時伝達できる
            - 画面端表示が一般的

            #### よく使う位置
            - 右上
            - 右下
            - 上中央
            - 下中央（スマホ）
        `),
    },
    {
        process: "ページ遷移演出",
        description:
            "フェード切替で画面遷移を滑らかに見せる",
        detail: dedent(`
            ページ遷移時に一瞬で切り替えるのではなく、<br />
            アニメーションを入れることで自然な操作感にする

            #### 使用場面
            - ECサイトの商品一覧 → 商品詳細
            - ブログ一覧 → 記事ページ
            - 管理画面のメニュー切替
            - SPA（React / Next.js）の画面遷移
            - LPのセクション移動

            ---

            #### 使用例① フェードアウトして次ページへ
            \`\`\`html
            <a href="/about" id="move">Aboutページへ</a>
            \`\`\`

            \`\`\`css
            .page-leave {
                animation: fadeOut 0.4s ease forwards;
            }

            @keyframes fadeOut {
                from { opacity: 1; }
                to   { opacity: 0; }
            }
            \`\`\`

            \`\`\`js
            const link = document.querySelector("#move");

            link.addEventListener("click", (e) => {
                e.preventDefault();

                document.body.classList.add("page-leave");

                setTimeout(() => {
                    location.href = "/about";
                }, 400);
            });
            \`\`\`

            ---

            #### 使用例② 読み込み時にフェードイン
            \`\`\`css
            body {
                animation: fadeIn 0.5s ease;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to   { opacity: 1; }
            }
            \`\`\`

            ---

            #### 使用例③ ローディング画面を挟む
            \`\`\`js
            router.push("/dashboard");
            setLoading(true);
            \`\`\`

            通信があるページでよく使われます。

            - 決済完了後
            - 管理画面移動
            - API取得ページ

            ---

            #### 使用例④ 横スライド遷移（アプリ風）
            \`\`\`css
            .page-enter {
                animation: slideIn 0.4s ease;
            }

            @keyframes slideIn {
                from {
                    transform: translateX(40px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            \`\`\`

            - モバイルUI
            - PWA
            - ネイティブアプリ風サイト

            ---

            #### 効果
            - 高級感が出る
            - 操作感が滑らか
            - 読み込み待ちストレス軽減
            - SPAらしい体験になる

            #### 注意点
            - 長すぎる演出は逆効果（0.3〜0.6秒推奨）
            - 毎回派手にしすぎない
            - UX優先で自然にする
        `),
    },
    {
        process: "カルーセル / スライダー",
        description:
            "画像やカードを横移動で切り替える",
        detail: dedent(`
            複数の要素を横に切り替えて表示するUI<br />
            「限られたスペースで多くの情報を見せたい時」に使われる

            #### 使用場面
            1. ECサイトの商品画像 (商品1つに対して複数画像を見せる)
                - 正面写真
                - 横からの写真
                - 使用イメージ
                - 拡大ディテール
                - 👉 「購入前の不安を減らす」目的
            2. トップページのヒーローバナー (LPの最上部で自動スライドする大きい画像)
                - セール告知
                - 新商品
                - キャンペーン
                - 👉 「一番見せたい情報を順番に出す」
            3. レビュー・口コミ表示 (ユーザーの声を横スライドで表示)
                - ★評価レビュー
                - コメントカード
                - 顧客の声
                - 👉 「信頼性アップ」
            4. スマホUIのカード一覧 (横スクロールでカードを閲覧)
                - おすすめ記事
                - 人気商品
                - カテゴリ一覧
                - 👉 「指で直感操作できる」

            ---

            #### 使用例① クリックでスライド
            \`\`\`html
            <div class="slider">
                <div class="track">
                    <div class="slide">画像1</div>
                    <div class="slide">画像2</div>
                    <div class="slide">画像3</div>
                </div>

                <button id="prev">←</button>
                <button id="next">→</button>
            </div>
            \`\`\`

            \`\`\`css
            .slider {
                width: 300px;
                overflow: hidden;
                position: relative;
            }

            .track {
                display: flex;
                transition: transform 0.5s ease;
            }

            .slide {
                min-width: 100%;
                height: 200px;
                background: #333;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            \`\`\`

            \`\`\`js
            const track = document.querySelector(".track");
            const next = document.querySelector("#next");
            const prev = document.querySelector("#prev");
            const slides = document.querySelectorAll(".slide");

            let index = 0;
            const maxIndex = slides.length - 1;

            // 状態更新関数
            function updateButtons() {
                if (!next || !prev) return;

                next.disabled = index >= maxIndex;
                prev.disabled = index <= 0;
            }

            // 初期状態
            updateButtons();

            next.addEventListener("click", () => {
                if (index >= maxIndex) return;

                index++;
                track.style.transform = \`translateX(-\${index * 100}%)\`;

                updateButtons();
            });

            prev.addEventListener("click", () => {
                if (index <= 0) return;

                index--;
                track.style.transform = \`translateX(-\${index * 100}%)\`;

                updateButtons();
            });
            \`\`\`

            ---

            #### 使用例② クリックで無限ループ
            \`\`\`js
            next.addEventListener("click", () => {
                index = (index + 1) % slides.length;

                track.style.transform = \`translateX(-\${index * 100}%)\`;
            });

            prev.addEventListener("click", () => {
                index = (index - 1 + slides.length) % slides.length;

                track.style.transform = \`translateX(-\${index * 100}%)\`;
            });
            \`\`\`

            ---

            #### 使用例③ 自動スライダーとクリックの組み合わせ
            \`\`\`js
            const interval = 3000; // 3秒

            let timer = setInterval(() => {
                nextSlide();
            }, interval);

            let index = 0;

            function update() {
                track.style.transform = \`translateX(-\${index * 100}%)\`;
            }

            // 次へ
            function nextSlide() {
                index = (index + 1) % slides.length;
                update();
            }

            // 前へ
            function prevSlide() {
                index = (index - 1 + slides.length) % slides.length;
                update();
            }

            next.addEventListener("click", nextSlide);
            prev.addEventListener("click", prevSlide);
            \`\`\`

            ---

            #### 使用例④ ホバーで自動スライダー停止
            \`\`\`js
            const slider = document.querySelector(".slider");

            // 停止
            slider.addEventListener("mouseenter", () => {
                clearInterval(timer);
            });

            // 再開
            slider.addEventListener("mouseleave", () => {
                timer = setInterval(() => {
                    nextSlide();
                }, interval);
            });
            \`\`\`
        `),
    },
    {
        process: "ツールチップ表示",
        description:
            "ホバー時に小さくフェード表示する",
        detail: dedent(`
            ツールチップは、ボタンやアイコンの意味を補足するために使われる<br />
            UIをシンプルに保ちながら、必要な情報だけ後から表示できるのが特徴

            #### 使用場面
            1. アイコンボタンの説明
                - ゴミ箱アイコン →「削除」
                - 編集アイコン →「編集」
                - 設定アイコン →「設定を開く」

            2. フォーム補足説明
                - パスワード条件（8文字以上など）
                - 入力形式のヒント（メールアドレス形式）

            3. UIが狭い場所の補足
                - テーブルの列説明
                - ダッシュボードの数値意味

            4. 無料プラン制限の説明
                - 「この機能は有料プランのみ」
                - 「1日10回まで利用可能」

            ---

            #### 使用例① ホバーとクリック両方対応
            \`\`\`html
            <div class="tooltip-wrapper">
                <button id="btn">?</button>
                <div id="tooltip" class="tooltip">
                    削除すると元に戻せません
                </div>
            </div>
            \`\`\`

            \`\`\`css
            .tooltip-wrapper {
                position: relative;
                display: inline-block;
            }

            .tooltip {
                position: absolute;
                top: 40px;
                left: 0;
                white-space: nowrap;
                width: max-content;
                padding: 6px 10px;
                font-size: 12px;
                color: white;
                background: black;
                border-radius: 4px;

                opacity: 0;
                transform: translateY(5px);
                transition: 0.2s ease;

                pointer-events: none;
            }

            .tooltip-wrapper:hover .tooltip {
                opacity: 1;
                transform: translateY(0);
            }
            \`\`\`

            \`\`\`js
            const btn = document.querySelector("#btn");
            const tooltip = document.querySelector("#tooltip");

            btn.addEventListener("click", (e) => {
                e.stopPropagation(); // 外側クリック判定と干渉防止
                tooltip.classList.toggle("show");
            });

            // 外側クリックで閉じる
            document.addEventListener("click", (e) => {
                if (!btn.contains(e.target) && !tooltip.contains(e.target)) {
                    tooltip.classList.remove("show");
                }
            });
            \`\`\`

            ---

            #### 使用例② APIデータを表示するツールチップ
            \`\`\`js
            button.addEventListener("mouseenter", async () => {
                const res = await fetch("/api/user/tooltip");
                const data = await res.json();

                tooltip.textContent = data.message;
                tooltip.classList.add("show");
            });
            \`\`\`

            - ユーザー情報表示
            - 権限説明
            - プラン情報

            ---

            #### 使用例③ 遅延表示（ホバー直後に出さない）
            \`\`\`js
            let timer;

            button.addEventListener("mouseenter", () => {
                timer = setTimeout(() => {
                    tooltip.classList.add("show");
                }, 300);
            });

            button.addEventListener("mouseleave", () => {
                clearTimeout(timer);
                tooltip.classList.remove("show");
            });
            \`\`\`

            - UI誤爆防止
            - 高密度UI（管理画面）

            ---

            #### 使用例④ スクロール連動ツールチップ
            \`\`\`js
            window.addEventListener("scroll", () => {
                tooltip.classList.remove("show");
            });
            \`\`\`

            - ダッシュボード
            - グラフUI

            ---

            #### 使用例⑤ 複数ツールチップの制御
            \`\`\`js
            document.querySelectorAll(".tooltip-btn").forEach(btn => {
                btn.addEventListener("mouseenter", () => {
                    document.querySelectorAll(".tooltip").forEach(t => {
                    t.classList.remove("show");
                    });

                    btn.querySelector(".tooltip").classList.add("show");
                });
            });
            \`\`\`

            - テーブルUI
            - メニューUI

            ---

            #### ポイント
            - ツールチップは「情報を隠して必要時だけ表示」
            - UIをスッキリさせるために必須テクニック
            - hover / focus / click で表示制御することが多い
            - transition と opacity を組み合わせると自然に見える

            #### CSSだけでいいケース
            - シンプルなホバー説明
            - 固定位置の説明
            - デザイン目的の補足

            #### JSが必要なケース
            - 位置計算が必要
            - モバイル対応（click制御）
            - APIデータ表示
            - 遅延制御
            - スクロール制御
            - 複雑なUI管理
        `),
    },
    {
        process: "選択カード",
        description:
            "クリック状態を保持",
        detail: dedent(`
            ユーザーが「このカードはクリックできる」と直感的に理解できるようにする目的

            #### 使用場面
            - クリック状態管理
            - データ取得後の制御
            - スクロール連動
            - API連携
            - 複雑な条件分岐

            ---

            #### 使用例① カード選択
            \`\`\`html
            <div class="card">A</div>
            <div class="card">B</div>
            <div class="card">C</div>
            \`\`\`

            \`\`\`css
            .card {
                width: 160px;
                height: 120px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                margin-bottom: 20px;
            }
            .card.active {
                transform: scale(1.05);
            }
            \`\`\`

            \`\`\`js
            const cards = document.querySelectorAll(".card");

            cards.forEach(card => {
                card.addEventListener("click", () => {
                    cards.forEach(c => c.classList.remove("active"));
                    card.classList.add("active");
                });
            });
            \`\`\`

            - 商品選択
            - プラン選択
            - カテゴリフィルター

            ---

            #### 使用例② APIデータ取得後にカードを動かす
            \`\`\`js
            fetch("/api/products")
            .then(res => res.json())
            .then(data => {
                renderCards(data);

                document.querySelectorAll(".card")
                .forEach(card => card.classList.add("show"));
            });
            \`\`\`

            \`\`\`css
            .card {
                opacity: 0;
                transform: translateY(20px);
                transition: 0.3s ease;
            }

            .card.show {
                opacity: 1;
                transform: translateY(0);
            }
            \`\`\`

            - 商品一覧ロード
            - 記事一覧表示
            - ダッシュボード初期表示

            ---

            #### 使用例③ スクロールでカードを出す（IntersectionObserver）
            \`\`\`js
            const cards = document.querySelectorAll(".card");

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            });

            cards.forEach(card => observer.observe(card));
            \`\`\`

            - LP（ランディングページ）
            - ポートフォリオ
            - スクロールアニメーション
        `),
    },
    {
        process: "いいね / お気に入り",
        description:
            "ハート拡大・跳ねる演出で操作感を高める",
        detail: dedent(`
            #### 使用例① 連打防止（デバウンス・ロック処理）
            \`\`\`html
            <button id="likeBtn" class="like">
                <span id="icon">♡</span>
            </button>
            \`\`\`

            \`\`\`css
            .like {
                font-size: 24px;
                transition: transform 0.2s ease;
            }

            .like.active {
                color: red;
                animation: pop 0.4s ease;
            }

            @keyframes pop {
                0% {
                    transform: scale(1);
                }

                50% {
                    transform: scale(1.4);
                }

                100% {
                    transform: scale(1);
                }
            }
            \`\`\`

            \`\`\`js
            const btn = document.querySelector("#likeBtn");

            let isLoading = false;

            btn.addEventListener("click", async () => {
                if (isLoading) return;

                isLoading = true;
                btn.disabled = true;

                // API通信
                await fetch("/api/like", { method: "POST" });

                btn.classList.toggle("active");

                isLoading = false;
                btn.disabled = false;
            });
            \`\`\`

            - いいね連打防止
            - フォロー処理
            - 購入ボタン二重送信防止

            ---

            ## ② サーバー通信成功後にアニメーション実行
            成功した場合のみUIを更新する。

            \`\`\`js
            btn.addEventListener("click", async () => {
                const res = await fetch("/api/like", {
                    method: "POST"
                });

                if (!res.ok) return;

                btn.classList.add("active");
            });
            \`\`\`

            - DB反映後にいいね反映
            - お気に入り登録
            - ストレージ保存

            ---

            ## ③ アイコン差し替え（状態表現）
            状態に応じてアイコンを変更する

            \`\`\`js
            const icon = document.querySelector("#icon");

            btn.addEventListener("click", () => {
                const isActive = btn.classList.toggle("active");

                icon.textContent = isActive ? "❤️" : "♡";
            });
            \`\`\`

            - 未いいね / いいね済み
            - 保存ON / OFF
            - フォロー状態切替

            #### 動きの流れ
            \`\`\`text
            クリック
            ↓
            ① 連打防止チェック
            ↓
            ② サーバー通信
            ↓
            ③ 成功時のみ状態更新
            ↓
            ④ アイコン変更
            ↓
            ⑤ アニメーション再生
            \`\`\`

        `),
    },
    {
        process: "削除完了演出",
        description:
            "縮小して消すことで自然に削除を伝える",
        detail: dedent(`
            データ削除後に**要素を自然に消えるように見せるUIアニメーション**

            #### 使用場面
            1. ECサイト
                - カートから商品削除
                - お気に入り削除
            2. Todoアプリ
                - タスク削除
                - 完了タスク整理
            3. 管理画面
                - ユーザー削除
                - コメント削除
            4. SNS
                - 投稿削除
                - 通知削除

            ---

            #### 使用例
            \`\`\`html
            <ul>
                <li class="task">
                    タスク1 <button class="del">削除</button>
                </li>
            </ul>
            \`\`\`

            \`\`\`css
            .task {
                transition: 0.25s ease;
            }

            .task.remove {
                opacity: 0;
                transform: translateX(20px);
            }
            \`\`\`

            \`\`\`js
            document.querySelectorAll(".del").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    const item = e.target.closest(".task");

                    item.classList.add("remove");

                    setTimeout(() => {
                        item.remove();
                    }, 250);
                    });
                });
            });
            \`\`\`
        `),
    },
    {
        process: "進捗バー",
        description:
            "横幅変化で進行状況を視覚化する",
        detail: dedent(`
            進捗バーは、**処理の進み具合を視覚的に伝えるUI**<br />
            ユーザーに「今どのくらい終わっているか」を見せることで、不安を減らしたり離脱を防ぐ役割

            #### 使用場面
            - ファイルアップロード
            - フォーム入力ステップ
            - アンケート進行状況
            - 動画アップロード
            - API処理の進捗
            - ダウンロード進行
            - チュートリアル進行

            #### 使用例
            \`\`\`html
            <div class="progress">
                <div class="bar" id="bar"></div>
            </div>
            <button id="start">開始</button>
            \`\`\`

            \`\`\`css
            .progress {
                width: 100%;
                height: 10px;
                background: #333;
                border-radius: 5px;
                overflow: hidden;
            }

            .bar {
                width: 0%;
                height: 100%;
                background: #4ade80;
                transition: width 0.3s ease;
            }
            \`\`\`

            \`\`\`js
            const bar = document.querySelector("#bar");
            const button = document.querySelector("#start");

            button.addEventListener("click", () => {
                let progress = 0;

                const interval = setInterval(() => {
                    progress += 10;

                    bar.style.width = progress + "%";

                    if (progress >= 100) {
                        clearInterval(interval);
                    }
                }, 300);
            });
            \`\`\`

            ---

            #### 使用例② フォーム入力進捗
            \`\`\`txt
            Step 1 → Step 2 → Step 3 → 完了
            \`\`\`

            \`\`\`js
            function updateStep(step) {
                const bar = document.querySelector("#bar");

                const percent = (step / 3) * 100;
                bar.style.width = percent + "%";
            }
            \`\`\`

            ---

            #### 使用例③ アップロード進捗
            \`\`\`js
            xhr.upload.onprogress = (e) => {
                const percent = (e.loaded / e.total) * 100;
                bar.style.width = percent + "%";
            };
            \`\`\`

            - 画像アップロード
            - 動画アップロード
            - ファイル送信

            ---

            #### 使用例④ CSSのみで動かす
            \`\`\`css
            .progress {
                width: 100%;
                height: 10px;
                background: #333;
                border-radius: 5px;
                overflow: hidden;
            }

            .bar {
                width: 0%;
                height: 100%;
                background: #4ade80;
                transition: width 0.3s ease;
                animation: loading 2s ease;
            }

            @keyframes loading {
                0% {
                    width: 0%;
                }

                50% {
                    width: 70%;
                }

                100% {
                    width: 100%;
                }
            }
            \`\`\`
        `),
    },
    {
        process: "数値カウントアップ",
        description:
            "売上・PV・実績数値を動的に増加表示する",
        detail: dedent(`
            **0から目標の数値まで徐々に増えていくアニメーション**

            #### 使用場面
            - 売上・実績表示
            - ECサイトの信頼性表示
                - 累計販売数
                - レビュー数
            - LP（ランディングページ）
                - 導入企業数
                - 満足度
            - アプリの統計画面
                - 総プレイ時間
                - 達成率
            - フォロワー・SNS指標

            ---

            #### 使用例①
            \`\`\`html
            <div class="container" id="targetSection">
                <h1 class="count" data-target="5000">0</h1>
            </div>
            \`\`\`

            \`\`\`css
            .container {
                text-align: center;
                margin-top: 100px;
                font-family: sans-serif;
            }

            .count {
                font-size: 48px;
                font-weight: bold;
                color: #22c55e;
            }
            \`\`\`

            \`\`\`js
            function countUp(el, target) {
                let current = 0;
                const step = target / 60;

                const timer = setInterval(() => {
                    current += step;

                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }

                    el.textContent = Math.floor(current);
                }, 16);
            }

            const section = document.querySelector("#targetSection");
            const el = document.querySelector(".count");

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    countUp(el, 5000);
                    observer.disconnect();
                }
            });

            observer.observe(section);
            \`\`\`

            ---

            #### 使用例② API取得後に実行
            データ取得後に数値をアニメーション表示

            \`\`\`html
            <h1 class="count" id="sales">0</h1>
            \`\`\`

            \`\`\`js
            function countUp(el, target) {
                let current = 0;
                const step = target / 60;

                const timer = setInterval(() => {
                    current += step;

                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }

                    el.textContent = Math.floor(current);
                }, 16);
            }

            async function fetchData() {
                const res = await fetch("/api/sales");
                const data = await res.json();

                const el = document.querySelector("#sales");
                countUp(el, data.totalSales);
            }

            fetchData();
            \`\`\`

            - ダッシュボード
            - 管理画面
            - リアルタイム統計

            ---

            #### 使用例③ ページを開いた瞬間に1回だけ実行
            \`\`\`html
            <h1 class="count" id="users" data-target="3200">0</h1>
            \`\`\`

            \`\`\`js
            function countUp(el, target) {
                let current = 0;
                const step = target / 60;

                const timer = setInterval(() => {
                    current += step;

                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }

                    el.textContent = Math.floor(current);
                }, 16);
            }

            window.addEventListener("DOMContentLoaded", () => {
                const el = document.querySelector("#users");
                const target = Number(el.dataset.target);

                countUp(el, target);
            });
            \`\`\`

            - トップページの実績表示
            - サービス紹介の数字
            - ヒーローセクション
        `),
    },
    {
        process: "背景アニメーション",
        description:
            "グラデーション・粒子・波でサイト印象を上げる",
        detail: dedent(`
            背景に動きを加えて、サイトの雰囲気やブランドイメージを強化する手法<br />
            ユーザーの視線を引きつけつつ、コンテンツを邪魔しないように薄く動かすのが基本

            #### 使用例① グラデーションアニメーション（LP背景）
            ページのスクロール量に応じて背景を変化させる

            \`\`\`html
            <body id="app"></body>
            \`\`\`

            \`\`\`css
            body {
                transition: background-color 0.5s ease;
            }
            \`\`\`

            \`\`\`js
            const app = document.querySelector("#app");

            window.addEventListener("scroll", () => {
                const scrollY = window.scrollY;

                if (scrollY < 300) {
                    app.style.backgroundColor = "#0f172a";
                } else if (scrollY < 800) {
                    app.style.backgroundColor = "#1e293b";
                } else {
                    app.style.backgroundColor = "#334155";
                }
            });
            \`\`\`

            - ブランドサイト
            - ストーリー型サイト

            ---

            #### 使用例② マウス位置でグラデーションを動かす
            \`\`\`html
            <div id="bg"></div>
            \`\`\`

            \`\`\`css
            #bg {
                position: fixed;
                inset: 0;
                background: radial-gradient(circle at center, #38bdf8, #0f172a);
                transition: 0.1s;
            }
            \`\`\`

            \`\`\`js
            const bg = document.querySelector("#bg");

            window.addEventListener("mousemove", (e) => {
                const x = (e.clientX / window.innerWidth) * 100;
                const y = (e.clientY / window.innerHeight) * 100;

                bg.style.background = \`
                    radial-gradient(
                    circle at \${x}% \${y}%,
                    #38bdf8,
                    #0f172a
                    )
                \`;
            });
            \`\`\`

            - クリエイティブサイト
            - ゲーム系UI

            ---

            #### 使用例③ 粒子アニメーション（簡易版）
            \`\`\`html
            <canvas id="canvas"></canvas>
            \`\`\`

            \`\`\`js
            const canvas = document.querySelector("#canvas");
            const ctx = canvas.getContext("2d");

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const particles = Array.from({ length: 100 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1,
                vy: (Math.random() - 0.5) * 1,
            }));

            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach((p) => {
                    p.x += p.vx;
                    p.y += p.vy;

                    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                    ctx.fillStyle = "rgba(255,255,255,0.5)";
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                    ctx.fill();
                });

                requestAnimationFrame(animate);
            }

            animate();
            \`\`\`

            - テック系サイト
            - SaaSサービス

            ---

            #### 使用例④ スクロールで波アニメーション切替
            \`\`\`html
            <div class="section">Section 1</div>
            <div class="section">Section 2</div>
            <div class="section">Section 3</div>
            <div class="section">Section 4</div>
            \`\`\`
            \`\`\`css
            .section {
                transition: background 0.6s ease;
            }

            .section.active-bg {
                background: linear-gradient(120deg, #0f172a, #1e293b);
            }
            \`\`\`
            \`\`\`js
            window.addEventListener("scroll", () => {
                const sections = document.querySelectorAll(".section");

                sections.forEach((section) => {
                    const rect = section.getBoundingClientRect();

                    if (rect.top < window.innerHeight / 2) {
                        section.classList.add("active-bg");
                    } else {
                        section.classList.remove("active-bg");
                    }
                });
            });
            \`\`\`

            - ストーリーページ
            - 長尺LP
            - プロダクト紹介

            ---

            #### 使用例⑤ 時間で自動切替（スライド背景）
            一定時間ごとに背景を変えるパターン

            \`\`\`js
            const colors = ["#0f172a", "#1e293b", "#334155"];
            let index = 0;

            setInterval(() => {
                document.body.style.backgroundColor = colors[index];
                index = (index + 1) % colors.length;
            }, 3000);
            \`\`\`

            - ウェルカム画面
            - サイネージUI
            - 待機画面
        `),
    },
];