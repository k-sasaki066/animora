import dedent from "dedent";

export const detail = dedent(`
    親要素の最後に新しい要素を追加する

    #### 使用場面
    - Todo追加
    - チャットメッセージ追加
    - コメント一覧追加
    - 商品カード追加
    - API取得データを一覧表示
    - 通知を下に追加

    #### 基本構文
    \`\`\`js
    parent.append(child);
    \`\`\`

    | 引数 | 内容 |
    |---|---|
    | parent | 親要素 |
    | child | 追加する要素 |

    ---

    #### 基本例
    \`\`\`html
    <ul id="list"></ul>
    \`\`\`

    \`\`\`js
    const list = document.querySelector("#list");
    const li = document.createElement("li");

    li.textContent = "新しい項目";

    list.append(li);
    \`\`\`

    #### 実行結果
    \`\`\`html
    <ul id="list">
    <li>新しい項目</li>
    </ul>
    \`\`\`

    ---

    #### appendを2回使うと順番に追加される
    \`\`\`js
    list.append(document.createElement("li"));
    list.append(document.createElement("li"));
    \`\`\`

    結果
    \`\`\`text
    1件目
    2件目
    \`\`\`
    👉 常に最後に追加される

    ---

    #### Todo追加
    \`\`\`js
    addBtn.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = input.value;

        list.append(li);
    });
    \`\`\`

    ---

    #### チャットメッセージ追加
    \`\`\`js
    const msg = document.createElement("p");
    msg.textContent = "こんにちは";

    chatBox.append(msg);
    \`\`\`
    新しいメッセージを下に積み上げるUI

    ---

    #### APIデータ一覧表示
    \`\`\`js
    data.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;

        list.append(li);
    });
    \`\`\`

    ---

    #### append と innerHTML の違い

    | 方法 | 特徴 |
    |---|---|
    | append() | 要素追加に強い、安全 |
    | innerHTML += | HTML文字列追加、再描画あり |
    👉  \`append()\` の方が安定しやすい

    ---

    #### append の便利ポイント
    文字列も追加できる
    \`\`\`js
    list.append("テキスト");
    \`\`\`

    複数同時追加も可能
    \`\`\`js
    list.append(li1, li2, li3);
    \`\`\`

    ---

    #### 注意点
    - 追加先の親要素が存在しないとエラー
    - 同じ要素を append すると「移動」になる
    - 大量追加時は DocumentFragment が効率的
`);