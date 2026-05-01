import dedent from "dedent";

export const detail = dedent(`
    フォーム入力やボタン操作を無効化する<br />
    ユーザーはクリック・入力・選択ができなくなる

    #### 使用場面
    - 送信中の二重送信防止
    - 必須項目未入力時は送信不可
    - 権限のないユーザー操作制限
    - 在庫切れ商品の購入不可
    - ローディング中の操作停止

    #### 基本（ボタン無効化）
    \`\`\`html
    <button id="submit">送信</button>
    \`\`\`

    \`\`\`js
    const button = document.querySelector("#submit");

    button.disabled = true;
    \`\`\`

    実行結果
    \`\`\`text
    送信ボタンが押せなくなる
    \`\`\`

    ---

    #### 再度有効化する
    \`\`\`js
    button.disabled = false;
    \`\`\`

    ---

    #### 入力欄を無効化
    \`\`\`html
    <input id="email" type="email">
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#email");

    input.disabled = true;
    \`\`\`

    実行結果
    \`\`\`text
    メールアドレスを入力できなくなる
    \`\`\`

    ---

    #### 送信中は二重クリック防止
    \`\`\`js
    const button = document.querySelector("#submit");

    button.disabled = true;
    button.textContent = "送信中...";
    \`\`\`

    API完了後
    \`\`\`js
    button.disabled = false;
    button.textContent = "送信";
    \`\`\`

    ---

    #### 必須項目入力まで押せない
    \`\`\`js
    const input = document.querySelector("#name");
    const button = document.querySelector("#submit");

    input.addEventListener("input", () => {
        button.disabled = input.value === "";
    });
    \`\`\`

    ---

    #### チェック同意後に有効化
    \`\`\`js
    check.addEventListener("change", () => {
        button.disabled = !check.checked;
    });
    \`\`\`

    ---

    #### disabled と readonly の違い

    | 項目 | disabled | readonly |
    |---|---|---|
    | 入力不可 | ○ | ○ |
    | フォーカス可 | × | ○ |
    | 送信データに含まれる | × | ○ |

    👉 入力禁止だけなら readonly<br />
    👉 完全停止なら disabled

    ---

    #### CSSで見た目調整

    \`\`\`css
    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    \`\`\`

    ---

    #### Reactでは

    \`\`\`jsx
    <button disabled={isLoading}>
    送信
    </button>
    \`\`\`

    ---

    #### ポイント

    - ユーザー誤操作防止に非常に重要
    - 送信中制御でよく使う
    - UX向上に直結する基本機能
`);