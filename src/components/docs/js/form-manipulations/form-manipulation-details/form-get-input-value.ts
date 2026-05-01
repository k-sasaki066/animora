import dedent from "dedent";

export const detail = dedent(`
    フォームに入力された値を取得する基本操作<br />
    ユーザーの入力を受け取る起点になる

    #### 基本の仕組み
    input要素は \`value\` プロパティに入力値が保存されているため、
    そこから値を取り出す

    \`\`\`html
    <input id="name" />
    \`\`\`

    \`\`\`js
    const name = document.querySelector("#name").value;
    console.log(name);
    \`\`\`

    \`\`\`text
    ユーザー入力: "Taro"

    console.log → "Taro"
    \`\`\`

    #### 使用場面
    - ログインID取得
    - 検索フォーム
    - お問い合わせ内容取得

    ---

    #### ボタンクリック時に取得 (フォーム送信前に確認する)
    \`\`\`html
    <input id="name" />
    <button id="btn">取得</button>
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#name");
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", () => {
        console.log(input.value);
    });
    \`\`\`

    ---

    #### フォーム送信で取得
    \`\`\`html
    <form id="form">
        <input name="email" />
        <button>送信</button>
    </form>
    \`\`\`

    \`\`\`js
    const form = document.querySelector("#form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = form.querySelector("[name=email]").value;
        console.log(email);
    });
    \`\`\`

    ---

    #### リアルタイム取得（inputイベント）
    \`\`\`html
    <input id="search" />
    <p id="preview"></p>
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#search");
    const preview = document.querySelector("#preview");

    input.addEventListener("input", (e) => {
        preview.textContent = e.target.value;
    });
    \`\`\`
    👉 サジェスト検索やプレビュー表示に使用

    ---

    #### 注意点

    - \`querySelector\` の結果が null の場合があるためチェックが必要
    - 数値として扱う場合は \`Number(value)\` に変換する
    - パスワードなども同じく \`value\` で取得可能
`);