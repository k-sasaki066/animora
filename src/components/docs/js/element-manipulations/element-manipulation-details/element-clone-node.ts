import dedent from "dedent";

export const detail = dedent(`
    既存のHTML要素をコピー（複製）して、
    同じ内容の要素を新しく追加する処理

    同じ構造のUIを何個も増やしたい時に便利

    #### 使用場面
    - 商品カード複製
    - フォーム入力欄追加
    - チャットテンプレート複製
    - ToDo項目追加
    - UIパーツ量産

    #### 基本構文
    \`\`\`js
    const copy = element.cloneNode(true);
    parent.append(copy);
    \`\`\`

    ---

    #### true / false の違い
    **要素本体だけコピー（子要素なし）**
    \`\`\`js
    cloneNode(false)
    \`\`\`

    \`\`\`html
    <div class="card">
        <p>商品名</p>
    </div>
    \`\`\`

    結果
    \`\`\`html
    <div class="card"></div>
    \`\`\`

    ---

    **子要素も含めて丸ごとコピー**
    \`\`\`js
    cloneNode(true)
    \`\`\`

    結果
    \`\`\`html
    <div class="card">
        <p>商品名</p>
    </div>
    \`\`\`

    ---

    #### 商品カード追加
    \`\`\`html
    <div id="list">
        <div class="card">
            <h3>りんご</h3>
            <p>100円</p>
        </div>
    </div>
    \`\`\`

    \`\`\`js
    const list = document.querySelector("#list");
    const card = document.querySelector(".card");

    const copy = card.cloneNode(true);

    list.append(copy);
    \`\`\`
    👉 同じカードが追加される

    ---

    #### 入力欄追加
    \`\`\`html
    <div id="form">
        <input type="text" class="skill" />
    </div>
    \`\`\`

    \`\`\`js
    const form = document.querySelector("#form");
    const input = document.querySelector(".skill");

    const copy = input.cloneNode(true);

    form.append(copy);
    \`\`\`
    👉 スキル入力欄を増やせる

    ---

    #### テンプレート複製して内容変更
    \`\`\`js
    const copy = card.cloneNode(true);

    copy.querySelector("h3").textContent = "みかん";
    copy.querySelector("p").textContent = "150円";

    list.append(copy);
    \`\`\`
    👉 元のカード構造を再利用できる

    ---

    #### ⚠️ 注意点
    - id属性もコピーされる（重複注意）
    - イベントはコピーされない場合がある
    - フォーム値は状態確認が必要

    ---

    #### ポイント
    - createElementで毎回作るより速い場合がある
    - UIテンプレート量産に便利
    - 現代Reactでは map描画が主流だが、Vanilla JSではよく使う
`);