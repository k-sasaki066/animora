import dedent from "dedent";

export const detail = dedent(`
    親要素の先頭に要素を追加する

    #### 使用場面
    - 最新通知を上に表示
    - 新着コメントを先頭追加
    - チャット最新メッセージを上表示
    - Todoを新しい順で並べる
    - 更新履歴の追加

    #### 基本構文
    \`\`\`js
    parent.prepend(element);
    \`\`\`

    ---

    #### 基本例
    \`\`\`html
    <ul id="list">
        <li>古いデータ</li>
    </ul>
    \`\`\`

    \`\`\`js
    const list = document.querySelector("#list");

    const li = document.createElement("li");
    li.textContent = "最新データ";

    list.prepend(li);
    \`\`\`

    #### 実行結果
    \`\`\`html
    <ul id="list">
        <li>最新データ</li>
        <li>古いデータ</li>
    </ul>
    \`\`\`
    👉 新しい要素が一番上に入る

    ---

    #### appendとの違い
    \`\`\`js
    list.append(li);   // 一番下に追加
    list.prepend(li); // 一番上に追加
    \`\`\`

    ---

    #### 通知一覧
    \`\`\`js
    const notice = document.createElement("li");
    notice.textContent = "新しい通知があります";

    noticeList.prepend(notice);
    \`\`\`
    最新通知を上に見せたいときに使う

    ---

    #### コメント投稿
    \`\`\`js
    const comment = document.createElement("div");
    comment.textContent = "とても参考になりました！";

    comments.prepend(comment);
    \`\`\`
    投稿したコメントをすぐ上に表示できる

    ---

    #### Todoアプリ
    \`\`\`js
    const task = document.createElement("li");
    task.textContent = "新しいタスク";

    todoList.prepend(task);
    \`\`\`
    新しいタスクを上から管理できる

    ---

    #### 文字列も追加できる
    \`\`\`js
    list.prepend("先頭テキスト");
    \`\`\`
    ただし実務では要素追加の方が多い

    ---

    #### ポイント
    - 最新順表示と相性が良い
    - appendより通知UIでよく使う
    - Reactでは state 更新 + map で代用されることが多い
    - 大量追加時は DocumentFragment を使うと高速
`);