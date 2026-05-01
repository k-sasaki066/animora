import dedent from "dedent";

export const detail = dedent(`
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
`);