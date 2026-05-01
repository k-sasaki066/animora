import dedent from "dedent";

export const detail = dedent(`
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
`);