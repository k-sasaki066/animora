import dedent from "dedent";

export const detail = dedent(`
    \`hidden\` は、要素を **表示 / 非表示** にするHTML属性<br />
    JavaScriptから \`true / false\` を切り替えるだけで簡単に制御できる

    \`display: none;\` に近い動作になり、要素は画面から消える

    #### 使用場面
    - FAQの開閉
    - エラーメッセージ表示
    - モーダルの表示切替
    - ローディング完了後に非表示
    - 詳細説明の開閉
    - タブ切替UI

    #### 基本（非表示にする）
    \`\`\`html
    <p id="notice">保存が完了しました</p>
    \`\`\`

    \`\`\`js
    const box = document.querySelector("#notice");

    box.hidden = true;
    \`\`\`

    実行結果<br />
    → 要素が画面から消える

    ---

    #### 再表示する
    \`\`\`js
    box.hidden = false;
    \`\`\`

    実行結果<br />
    → 再び表示される

    ---

    #### ボタンで表示 / 非表示切替
    \`\`\`html
    <button id="btn">切替</button>
    <p id="notice">詳細情報です</p>
    \`\`\`

    \`\`\`js
    const btn = document.querySelector("#btn");
    const box = document.querySelector("#notice");

    btn.addEventListener("click", () => {
        box.hidden = !box.hidden;
    });
    \`\`\`
    👉 クリックするたびに開閉できる

    ---

    #### FAQ開閉
    \`\`\`html
    <button id="question">Q. 配送料はいくらですか？</button>
    <p id="answer" hidden>全国一律500円です。</p>
    \`\`\`

    \`\`\`js
    const question = document.querySelector("#question");
    const answer = document.querySelector("#answer");

    question.addEventListener("click", () => {
        answer.hidden = !answer.hidden;
    });
    \`\`\`

    ---

    #### エラーメッセージ表示
    \`\`\`html
    <p id="error" hidden>メールアドレスを入力してください</p>
    \`\`\`

    \`\`\`js
    const error = document.querySelector("#error");

    error.hidden = false;
    \`\`\`

    入力エラー時だけ表示できる

    ---

    #### hidden と display:none の違い
    | 方法 | 特徴 |
    |---|---|
    | \`hidden = true\` | シンプルで分かりやすい |
    | \`style.display = "none"\` | 細かい制御が可能 |

    ---

    #### ポイント
    - 初学者には \`hidden\` の方が直感的でおすすめ
    - アコーディオンUIやFAQでよく使う
    - アニメーションしたい場合は class切替 + CSS が向いている
    - Reactでは state による条件分岐表示が主流
`);