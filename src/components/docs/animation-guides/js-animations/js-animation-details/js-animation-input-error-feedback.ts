import dedent from "dedent";

export const detail = dedent(`
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
`);