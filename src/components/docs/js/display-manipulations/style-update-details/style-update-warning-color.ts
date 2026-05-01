import dedent from "dedent";

export const detail = dedent(`
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
`);