import dedent from "dedent";

export const detail = dedent(`
    タスクが完了したことを視覚的に分かりやすくする

    #### 使用場面
    - Todoアプリ（完了チェック）
    - タスク管理ツール
    - チェックリスト
    - ステップ完了UI
    - 作業フロー管理

    #### 基本実装
    \`\`\`html
    <li id="task">買い物に行く</li>
    <button id="doneBtn">完了</button>
    \`\`\`

    \`\`\`css
    .completed {
        text-decoration: line-through;
        color: gray;
        opacity: 0.6;
    }
    \`\`\`

    \`\`\`js
    const task = document.querySelector("#task");
    const doneBtn = document.querySelector("#doneBtn");

    doneBtn.addEventListener("click", () => {
        task.classList.add("completed");
    });
    \`\`\`

    ---

    #### トグル（完了 / 未完了）

    \`\`\`js
    doneBtn.addEventListener("click", () => {
        task.classList.toggle("completed");
    });
    \`\`\`

    ---

    #### チェックボックス連動
    \`\`\`html
    <input type="checkbox" id="check" />
    <li id="task">買い物に行く</li>
    \`\`\`

    \`\`\`js
    const check = document.querySelector("#check");

    check.addEventListener("change", () => {
        task.classList.toggle("completed", check.checked);
    });
    \`\`\`
`);