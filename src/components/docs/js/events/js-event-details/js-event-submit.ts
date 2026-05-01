import dedent from "dedent";

export const detail = dedent(`
    フォームが送信されたタイミングで発火<br />
    デフォルト動作はページリロード
    \`\`\`txt
    ① 送信ボタンをクリック
    ② Enterキーでフォーム送信
    ③ form.submit() を実行
            ↓
    submitイベント発生
    \`\`\`

    #### 使用場面
    - ログインフォーム
    - お問い合わせフォーム
    - 検索フォーム

    #### 実行例
    \`\`\`html
    <form id="form">
        <input type="text" />
        <button type="submit">送信</button>
    </form>
    \`\`\`

    \`\`\`js
    const form = document.querySelector("#form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("送信されました");
    });
    \`\`\`
`);