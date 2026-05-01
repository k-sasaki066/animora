import dedent from "dedent";

export const detail = dedent(`
    テキストだけでなく、アイコン付きで強調表示したい場面

    #### 使用場面
    - フォーム送信成功
    - API通信エラー
    - バリデーション注意文
    - 管理画面通知
    - 在庫あり / 在庫なし表示
    - 会員ステータス表示
    - アップロード進行状況

    \`\`\`html
    <div id="message"></div>
    \`\`\`

    ### 保存成功

    \`\`\`html
    <div id="message"></div>
    \`\`\`

    \`\`\`js
    const message = document.querySelector("#message");

    message.innerHTML = \`
        <span>✅</span>
        <span>保存が完了しました</span>
    \`;
    \`\`\`

    表示結果
    \`\`\`text
    ✅ 保存が完了しました
    \`\`\`

    ---

    #### エラー表示

    \`\`\`js
    message.innerHTML = \`
        <span>❌</span>
        <span>入力内容に誤りがあります</span>
    \`;
    \`\`\`

    表示結果
    \`\`\`text
    ❌ 入力内容に誤りがあります
    \`\`\`

    ---

    #### 注意表示
    \`\`\`js
    message.innerHTML = \`
        <span>⚠️</span>
        <span>パスワードは8文字以上で入力してください</span>
    \`;
    \`\`\`

    ---

    #### 情報表示
    \`\`\`js
    message.innerHTML = \`
        <span>ℹ️</span>
        <span>新しいアップデートがあります</span>
    \`;
    \`\`\`

    ---

    #### React実務では

    \`\`\`jsx
    {success && <p>✅ 保存しました</p>}
    \`\`\`

    のように JSX で書くことが多く、<br />
    素のJavaScriptでは \`innerHTML\` で組み立てることがある
`);