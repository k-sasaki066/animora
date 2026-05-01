import dedent from "dedent";

export const detail = dedent(`
    HTML文字列を要素の中に挿入してまとめて画面に追加できる機能

    #### 使用場面
    - カード一覧生成
    - APIデータ描画
    - 商品一覧表示
    - コメント一覧表示
    - テーブル行追加
    - モーダル内容差し替え

    #### 基本
    \`\`\`html
    <ul id="list"></ul>
    \`\`\`

    \`\`\`js
    const list = document.querySelector("#list");

    list.innerHTML += "<li>追加項目</li>";
    \`\`\`

    実行結果
    \`\`\`html
    <ul id="list">
        <li>追加項目</li>
    </ul>
    \`\`\`

    ---

    #### 複数要素をまとめて追加
    \`\`\`js
    list.innerHTML += \`
    <li>りんご</li>
    <li>バナナ</li>
    <li>みかん</li>
    \`;
    \`\`\`

    ---

    #### 商品カード一覧
    \`\`\`js
    products.forEach(item => {
    list.innerHTML += \`
        <div class="card">
            <h3>\${item.name}</h3>
            <p>¥\${item.price}</p>
        </div>
    \`;
    });
    \`\`\`

    ---

    #### API取得後に描画
    \`\`\`js
    fetch("/api/users")
    .then(res => res.json())
    .then(users => {
        users.forEach(user => {
        list.innerHTML += \`<li>\${user.name}</li>\`;
        });
    });
    \`\`\`

    ---

    #### ⚠️ 注意点① 再描画が発生する
    \`\`\`js
    list.innerHTML += "<li>A</li>";
    list.innerHTML += "<li>B</li>";
    list.innerHTML += "<li>C</li>";
    \`\`\`
    上記は毎回HTML全体を書き直すため、
    要素数が多いと重くなりやすい。

    ---

    #### ⚠️ 注意点② イベントが消えることがある
    既存要素も再生成されるため、
    \`\`\`js
    button.addEventListener(...)
    \`\`\`
    で付けたイベントが消える場合があります。

    ---

    #### 改善方法（まとめて1回代入）
    \`\`\`js
    let html = "";

    products.forEach(item => {
        html += \`<li>\${item.name}</li>\`;
    });

    list.innerHTML = html;
    \`\`\`
    👉 ループ中に何回も \`+=\` しない

    ---

    #### より実務向き
    \`\`\`js
    list.insertAdjacentHTML(
        "beforeend",
        "<li>追加項目</li>"
    );
    \`\`\`
    👉 再描画コストが少なく安全

    ---

    #### 危険ポイント（XSS）
    外部入力値をそのまま入れない
    \`\`\`js
    list.innerHTML = userInput;
    \`\`\`
    悪意ある script が実行される可能性がある
`);