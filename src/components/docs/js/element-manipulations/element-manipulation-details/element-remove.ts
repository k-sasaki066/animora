import dedent from "dedent";

export const detail = dedent(`
    指定したHTML要素そのものを画面から削除する処理<br />
    非表示（display:none）とは違い、要素自体を削除する点が特徴

    #### 使用場面
    - Todo削除
    - モーダル閉じる
    - 通知削除
    - コメント削除
    - 不要な広告バナー削除
    - 条件に応じたUI削除

    #### 基本
    \`\`\`html
    <div class="item">削除対象</div>
    \`\`\`

    \`\`\`js
    const item = document.querySelector(".item");

    item.remove();
    \`\`\`

    実行後
    \`\`\`html
    <!-- 要素が消える -->
    \`\`\`

    ---

    #### Todo削除
    \`\`\`html
    <li id="task">買い物に行く</li>
    <button id="deleteBtn">削除</button>
    \`\`\`

    \`\`\`js
    const task = document.querySelector("#task");
    const deleteBtn = document.querySelector("#deleteBtn");

    deleteBtn.addEventListener("click", () => {
        task.remove();
    });
    \`\`\`

    ---

    #### 通知を閉じる
    \`\`\`html
    <div id="notice">
        保存しました
        <button id="close">×</button>
    </div>
    \`\`\`

    \`\`\`js
    const notice = document.querySelector("#notice");
    const close = document.querySelector("#close");

    close.addEventListener("click", () => {
        notice.remove();
    });
    \`\`\`

    ---

    #### 自分自身を削除
    \`\`\`js
    button.addEventListener("click", (e) => {
        e.target.remove();
    });
    \`\`\`
    クリックしたボタン自身を削除できる

    ---

    #### 複数要素を削除
    \`\`\`js
    document.querySelectorAll(".done").forEach(item => {
        item.remove();
    });
    \`\`\`
    完了済みタスクをまとめて削除

    ---

    #### 非表示との違い
    \`\`\`js
    item.style.display = "none";
    \`\`\`
    👉 見えないだけで要素は存在する

    \`\`\`js
    item.remove();
    \`\`\`
    👉 要素自体が消える

    ---

    #### ポイント
    - 削除確認ダイアログと組み合わせることが多い
    - Reactでは state 更新で削除するのが基本
    - アニメーション後に remove() するとUXが良い
    - querySelector が null の場合はエラーになるので注意

    \`\`\`js
    item?.remove();
    \`\`\`
`);