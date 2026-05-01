import dedent from "dedent";

export const detail = dedent(`
    条件一致した要素だけ削除する<br />
    全体を消すのではなく、必要な要素だけピンポイントで削除したい時に使う

    #### 使用場面
    - 完了したTodoだけ削除
    - 読了済み通知だけ削除
    - 特定IDの商品カード削除
    - 閉じるボタンを押したメッセージ削除

    #### 基本
    \`\`\`html
    <li class="done">買い物に行く</li>
    \`\`\`

    \`\`\`js
    const done = document.querySelector(".done");

    done.remove();
    \`\`\`
    👉 class="done" の要素だけ削除される

    ---

    #### Todoアプリ例（完了済みだけ削除）
    \`\`\`html
    <ul id="list">
        <li>勉強する</li>
        <li class="done">掃除する</li>
        <li>買い物する</li>
    </ul>
    \`\`\`

    \`\`\`js
    const done = document.querySelector(".done");

    done.remove();
    \`\`\`

    実行後
    \`\`\`html
    <ul id="list">
        <li>勉強する</li>
        <li>買い物する</li>
    </ul>
    \`\`\`

    ---

    #### 複数ある場合（querySelectorAll）
    \`\`\`js
    const dones = document.querySelectorAll(".done");

    dones.forEach(item => item.remove());
    \`\`\`
    👉 完了済みタスクを全部削除できる

    ---

    #### ボタン押下で削除
    \`\`\`html
    <div class="notice">
        通知があります
        <button id="close">×</button>
    </div>
    \`\`\`

    \`\`\`js
    const close = document.querySelector("#close");
    const notice = document.querySelector(".notice");

    close.addEventListener("click", () => {
        notice.remove();
    });
    \`\`\`

    ---

    #### ID指定で削除
    \`\`\`js
    const item = document.querySelector("#product-12");

    item.remove();
    \`\`\`
    👉 商品IDごとの削除などで使う

    ---

    #### ⚠️ 注意点
    \`\`\`js
    const item = document.querySelector(".done");
    \`\`\`
    要素が存在しないと \`null\` になるため、

    \`\`\`js
    if (item) {
        item.remove();
    }
    \`\`\`
    と書くと安全

    ---

    #### ポイント
    - 1件だけなら \`querySelector()\`
    - 複数削除なら \`querySelectorAll()\`
    - Reactでは state更新で削除することが多い
    - Vanilla JSでは \`remove()\` が基本
`);