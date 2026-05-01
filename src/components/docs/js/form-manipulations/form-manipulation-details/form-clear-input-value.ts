import dedent from "dedent";

export const detail = dedent(`
    ユーザーが入力した内容をリセットして、初期状態に戻すために使う

    #### 使用場面
    - フォームリセットボタン（入力を最初からやり直す）
    - 送信完了後のフォーム初期化
    - 検索条件のクリア
    - フィルタ条件のリセット
    - モーダル入力フォームの初期化

    #### 基本実装
    \`\`\`html
    <input id="name" placeholder="名前を入力" />
    <button id="reset">リセット</button>
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#name");
    const reset = document.querySelector("#reset");

    reset.addEventListener("click", () => {
        input.value = "";
    });
    \`\`\`

    #### 実行結果
    \`\`\`text
    入力前: 田中太郎
    リセット後: （空欄）
    \`\`\`

    #### 送信後に自動クリア
    \`\`\`js
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log(input.value);

        input.value = ""; // 送信後にクリア
    });
    \`\`\`
    👉 ユーザー体験が良くなる（連続入力しやすい）

    ---

    #### 複数フォームまとめてクリア
    \`\`\`js
    const inputs = document.querySelectorAll("input");

    reset.addEventListener("click", () => {
        inputs.forEach(input => input.value = "");
    });
    \`\`\`
    👉 フォーム全体リセット

    ---

    #### form.reset()を使う方法
    \`\`\`js
    const form = document.querySelector("#form");

    form.reset();
    \`\`\`
    👉 これが一番シンプル

    ---

    #### ポイント
    - 1つだけなら \`input.value = ""\`
    - フォーム全体なら \`form.reset()\` がベスト
    - Reactでは state を空にする（setState('')）
`);