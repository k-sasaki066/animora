import dedent from "dedent";

export const detail = dedent(`
    送信ボタンを押した直後に、**連打防止・通信中の状態表示** を行う<br />
    ユーザーに「今処理中」であることを伝えられる

    #### 使用場面
    - お問い合わせフォーム
    - 会員登録
    - ログイン
    - コメント投稿
    - 購入ボタン
    - いいね送信
    - データ保存

    ⚠️ 通信失敗時に戻し忘れると押せなくなる

    \`\`\`html
    <button id="btn">送信する</button>
    \`\`\`

    \`\`\`js
    const btn = document.querySelector("#btn");
    btn.textContent = "送信中...";
    btn.disabled = true;
    \`\`\`

    #### 実行後の状態
    - ボタン文字が **送信する → 送信中...**
    - ボタンが押せなくなる
    - 二重送信防止になる

    ---

    #### 実務例① フォーム送信

    \`\`\`html
    <form id="form">
        <button id="btn">送信する</button>
    </form>
    \`\`\`

    \`\`\`js
    const form = document.querySelector("#form");
    const btn = document.querySelector("#btn");

    form.addEventListener("submit", () => {
        btn.textContent = "送信中...";
        btn.disabled = true;
    });
    \`\`\`

    フォーム送信時にボタンを無効化し、連打を防ぐ

    ---

    #### 実務例② API通信後に元へ戻す
    \`\`\`js
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", async () => {
        btn.textContent = "送信中...";
        btn.disabled = true;

        await fetch("/api/send");

        btn.textContent = "送信する";
        btn.disabled = false;
    });
    \`\`\`

    通信完了後に元の状態へ戻す

    ---

    #### 実務例③ 成功メッセージへ変更
    \`\`\`js
    btn.textContent = "送信完了";
    \`\`\`

    完了後に状態を明確に伝えられる
`);