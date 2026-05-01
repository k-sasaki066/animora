import dedent from "dedent";

export const detail = dedent(`
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
`);