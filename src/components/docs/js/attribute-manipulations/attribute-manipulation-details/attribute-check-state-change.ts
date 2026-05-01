import dedent from "dedent";

export const detail = dedent(`
    checkbox / radio の選択状態を操作する<br />
    \`checked\` は true / false で管理され、
    チェック済み・未チェックを切り替えられる

    #### 使用場面
    - 利用規約への同意
    - 一括チェック
    - 初期選択
    - お気に入りON/OFF
    - 設定画面のON/OFF切替

    #### checkbox をONにする
    \`\`\`html
    <input type="checkbox" id="agree">
    \`\`\`

    \`\`\`js
    const check = document.querySelector("#agree");

    check.checked = true;
    \`\`\`

    実行結果
    \`\`\`text
    ☑ チェック済み
    \`\`\`

    ---

    #### checkbox をOFFにする
    \`\`\`js
    check.checked = false;
    \`\`\`

    ---

    #### 現在の状態を取得する
    \`\`\`js
    console.log(check.checked);
    // true or false
    \`\`\`

    ---

    #### ボタンでチェック切替
    \`\`\`html
    <input type="checkbox" id="agree">
    <button id="toggleBtn">切替</button>
    \`\`\`

    \`\`\`js
    const check = document.querySelector("#agree");
    const btn = document.querySelector("#toggleBtn");

    btn.addEventListener("click", () => {
        check.checked = !check.checked;
    });
    \`\`\`

    ---

    #### 一括チェック

    \`\`\`html
    <input type="checkbox" class="item">
    <input type="checkbox" class="item">
    <input type="checkbox" class="item">
    \`\`\`

    \`\`\`js
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        item.checked = true;
    });
    \`\`\`

    使用場面
    - メール一括選択
    - 商品まとめ削除
    - 権限一覧設定

    ---

    #### radio の初期選択
    \`\`\`html
    <input type="radio" name="plan" id="basic">
    <input type="radio" name="plan" id="pro">
    \`\`\`

    \`\`\`js
    document.querySelector("#pro").checked = true;
    \`\`\`

    ---

    #### ポイント

    - \`checked\` は文字列ではなく真偽値（boolean）
    - ユーザー操作とJS操作の両方で変更される

    ---

    #### Reactでは

    \`\`\`jsx
    <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
    />
    \`\`\`

    stateで管理することが多い
`);