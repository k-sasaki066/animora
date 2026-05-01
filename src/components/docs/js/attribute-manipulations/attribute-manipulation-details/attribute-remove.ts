import dedent from "dedent";

export const detail = dedent(`
    HTML要素についている属性を削除する処理

    #### 使用場面
    - disabled解除（ボタンを押せるようにする）
    - readonly解除（入力可能にする）
    - hidden解除（再表示する）
    - style削除（直接指定したCSS解除）
    - required解除（必須入力解除）
    - target解除（別タブ表示解除）

    #### 基本構文
    \`\`\`js
    element.removeAttribute("属性名");
    \`\`\`

    #### disabled解除
    \`\`\`html
    <button id="btn" disabled>送信</button>
    \`\`\`

    \`\`\`js
    const btn = document.querySelector("#btn");

    btn.removeAttribute("disabled");
    \`\`\`

    実行後
    \`\`\`html
    <button id="btn">送信</button>
    \`\`\`
    👉 ボタンが押せるようになる

    ---

    #### readonly解除
    \`\`\`html
    <input id="name" value="田中" readonly>
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#name");

    input.removeAttribute("readonly");
    \`\`\`
    👉 入力できるようになる

    ---

    #### hidden解除
    \`\`\`html
    <p id="msg" hidden>保存しました</p>
    \`\`\`

    \`\`\`js
    const msg = document.querySelector("#msg");

    msg.removeAttribute("hidden");
    \`\`\`
    👉 メッセージ表示

    ---

    #### style削除
    \`\`\`js
    box.removeAttribute("style");
    \`\`\`
    👉 style属性ごと削除される

    変更前
    \`\`\`html
    <div style="color:red; font-size:20px;">
    \`\`\`

    変更後
    \`\`\`html
    <div>
    \`\`\`

    ---

    #### API送信完了後にボタン解放
    \`\`\`js
    submitBtn.setAttribute("disabled", true);

    await fetch("/api/send");

    submitBtn.removeAttribute("disabled");
    \`\`\`

    ---

    #### 編集モード切替
    \`\`\`js
    input.removeAttribute("readonly");
    \`\`\`

    ---

    #### 注意点

    ##### 属性が無くてもエラーにならない
    \`\`\`js
    btn.removeAttribute("disabled");
    \`\`\`
    disabled が無くても安全に実行される

    ---

    ##### disabled=false との違い
    \`\`\`js
    btn.disabled = false;
    \`\`\`
    これはプロパティ変更

    \`\`\`js
    btn.removeAttribute("disabled");
    \`\`\`
    これはHTML属性削除

    多くの場合どちらでも動くが、DOM理解としては別物

    ---

    #### ポイント

    - 一時的制御は \`disabled = false\` が多い
    - HTML属性自体を消したいなら \`removeAttribute()\`
    - Reactでは state制御で代替することが多い
`);