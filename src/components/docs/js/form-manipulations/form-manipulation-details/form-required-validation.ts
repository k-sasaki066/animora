import dedent from "dedent";

export const detail = dedent(`
    入力が空かどうかをチェックする<br />
    空欄のまま送信されることを防ぐために使用

    #### 使用場面
    - 会員登録フォーム（名前・メール必須）
    - ログイン画面
    - お問い合わせフォーム
    - 検索欄（空検索防止）
    - 決済・注文フォーム

    #### 基本実装
    \`\`\`html
    <input id="name" />
    <p id="error"></p>
    <button id="submit">送信</button>
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#name");
    const error = document.querySelector("#error");
    const button = document.querySelector("#submit");

    button.addEventListener("click", () => {
        if (!input.value.trim()) {
            error.textContent = "入力してください";
            error.style.color = "red";
            return;
        }

        error.textContent = "";
        console.log("送信OK:", input.value);
    });
    \`\`\`

    #### trim() を使う理由
    \`\`\`js
    !input.value.trim()
    \`\`\`
    = スペースだけの入力（"   "）を防ぐため

    ---

    #### 複数項目チェック
    \`\`\`js
    if (!email.value || !password.value) {
        error.textContent = "必須項目を入力してください";
    }
    \`\`\`

    ---

    #### classでエラー表示
    \`\`\`js
    input.classList.add("error");
    \`\`\`

    \`\`\`css
    .error {
        border: 1px solid red;
    }
    \`\`\`

    ---

    #### フォーム送信制御
    \`\`\`js
    form.addEventListener("submit", (e) => {
        if (!input.value.trim()) {
            e.preventDefault();
        }
    });
    \`\`\`
`);