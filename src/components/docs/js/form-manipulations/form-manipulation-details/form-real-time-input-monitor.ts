import dedent from "dedent";

export const detail = dedent(`
    入力フォームに文字を打ち込んだ瞬間ごとに値を取得し、
    画面にリアルタイムで反映する処理

    通常の「送信時取得」と違い、入力のたびにイベントが発火するため、
    ユーザーの操作に即時反応できるUIを作ることができる

    #### 使用場面
    - サジェスト検索（検索候補表示）
    - 文字数カウント表示
    - プレビュー表示（ブログ・コメント）
    - フィルタ検索（一覧絞り込み）
    - パスワード強度チェック
    - フォーム入力ガイド

    #### 基本実装
    \`\`\`html
    <input id="search" placeholder="検索..." />
    <p id="preview"></p>
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#search");
    const preview = document.querySelector("#preview");

    input.addEventListener("input", (e) => {
        preview.textContent = e.target.value;
    });
    \`\`\`

    #### 動作イメージ
    \`\`\`text
    入力: a → a
    入力: ap → ap
    入力: app → app
    \`\`\`
    👉 キーを押すたびに即反映される

    ---

    #### サジェスト検索
    \`\`\`js
    input.addEventListener("input", async (e) => {
        const keyword = e.target.value;

        const res = await fetch(\`/api/search?q=\\\${keyword}\`);
        const data = await res.json();

        console.log(data);
    });
    \`\`\`
    👉 Google検索・EC検索・管理画面で必須パターン

    ---

    #### 文字数カウント
    \`\`\`html
    <input id="text" />
    <p id="count"></p>
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#text");
    const count = document.querySelector("#count");

    input.addEventListener("input", (e) => {
        count.textContent = e.target.value.length + "文字";
    });
    \`\`\`

    ---

    #### プレビュー表示（ブログ・投稿系）
    \`\`\`js
    input.addEventListener("input", (e) => {
        preview.innerHTML = e.target.value;
    });
    \`\`\`
    👉 Markdownエディタ・コメント欄でよく使う

    ⚠️ innerHTMLはXSS注意

    ---

    #### パスワード強度チェック
    \`\`\`js
    input.addEventListener("input", (e) => {
        const value = e.target.value;

        if (value.length < 8) {
            console.log("弱いパスワード");
        } else {
            console.log("安全");
        }
    });
    \`\`\`

    ---

    #### ポイント
    - inputイベントは「毎文字」発火する
    - API通信と組み合わせる場合は debounce が必須
    - UI更新が多いのでパフォーマンスに注意
    - Reactでは useState + onChange に置き換わる
`);