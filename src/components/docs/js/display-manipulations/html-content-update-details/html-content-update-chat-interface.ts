import dedent from "dedent";

export const detail = dedent(`
    メッセージ送信時に会話内容を画面へ追加表示する処理

    #### 使用場面
    - Chatアプリ
    - カスタマーサポート
    - AIチャット
    - 社内メッセージ機能

    \`\`\`html
    <div id="chat"></div>
    <button id="sendBtn">送信</button>
    \`\`\`

    \`\`\`js
    const chat = document.querySelector("#chat");
    const sendBtn =
        document.querySelector("#sendBtn");

    sendBtn.addEventListener("click", () => {
        chat.innerHTML += \`
            <div class="message me">
                こんにちは
            </div>
        \`;
    });
    \`\`\`

    実行結果
    \`\`\`text
    自分: こんにちは
    自分: こんにちは
    自分: こんにちは
    \`\`\`

    ポイント
    - \`+=\` で既存内容に追加できる
    - 自分 / 相手でclassを分けるとUI調整しやすい
    - 自動スクロールと組み合わせることが多い

    ⚠️ 注意点
    - 件数が多い場合は append() の方が効率的
    - innerHTML連結は再描画コストがある
`);