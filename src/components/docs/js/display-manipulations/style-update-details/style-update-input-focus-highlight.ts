import dedent from "dedent";

export const detail = dedent(`
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
`);