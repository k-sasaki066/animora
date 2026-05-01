import dedent from "dedent";

export const detail = dedent(`
    HTML文字列を、既存要素の好きな位置へ追加できる<br />
    append() や prepend() は\`要素ノード追加\`<br />
    insertAdjacentHTML() は \`HTML文字列を直接挿入できる\` のが特徴

    #### 使用場面
    - カード一覧追加
    - APIデータ描画
    - 通知メッセージ追加
    - コメント投稿追加
    - モーダル内部HTML生成

    #### 基本構文
    \`\`\`js
    element.insertAdjacentHTML(position, html);
    \`\`\`
    - position：挿入位置
    - html：追加するHTML文字列

    位置指定
    \`\`\`txt
    - beforebegin   要素の前
    - afterbegin    要素内の先頭
    - beforeend     要素内の末尾
    - afterend      要素の後
    \`\`\`

    ---

    #### 末尾に追加
    \`\`\`html
    <div id="box">
        <p>既存テキスト</p>
    </div>
    \`\`\`

    \`\`\`js
    const box = document.querySelector("#box");

    box.insertAdjacentHTML(
        "beforeend",
        "<p>追加テキスト</p>"
    );
    \`\`\`

    実行後
    \`\`\`html
    <div id="box">
        <p>既存テキスト</p>
        <p>追加テキスト</p>
    </div>
    \`\`\`

    ---

    #### 挿入位置 4種類
    #### ① beforebegin（要素の前）
    \`\`\`js
    box.insertAdjacentHTML(
        "beforebegin",
        "<p>boxの前</p>"
    );
    \`\`\`

    \`\`\`html
    <p>boxの前</p>
    <div id="box"></div>
    \`\`\`

    ---

    #### ② afterbegin（要素内の先頭）
    \`\`\`js
    box.insertAdjacentHTML(
        "afterbegin",
        "<p>先頭追加</p>"
    );
    \`\`\`

    \`\`\`html
    <div id="box">
        <p>先頭追加</p>
        ...
    </div>
    \`\`\`

    ---

    #### ③ beforeend（要素内の末尾）
    \`\`\`js
    box.insertAdjacentHTML(
        "beforeend",
        "<p>末尾追加</p>"
    );
    \`\`\`

    \`\`\`html
    <div id="box">
        ...
        <p>末尾追加</p>
    </div>
    \`\`\`

    ---

    #### ④ afterend（要素の後）
    \`\`\`js
    box.insertAdjacentHTML(
        "afterend",
        "<p>boxの後</p>"
    );
    \`\`\`

    \`\`\`html
    <div id="box"></div>
    <p>boxの後</p>
    \`\`\`

    ---

    #### 通知追加
    \`\`\`js
    noticeList.insertAdjacentHTML(
        "afterbegin",
        "<li>新着メッセージがあります</li>"
    );
    \`\`\`
    最新通知を上に表示

    ---

    #### 商品カード追加
    \`\`\`js
    products.insertAdjacentHTML(
    "beforeend",
    \`
    <div class="card">
        <h3>商品A</h3>
        <p>¥980</p>
    </div>
    \`
    );
    \`\`\`

    ---

    #### ⚠️ 注意点
    - 外部入力値をそのまま入れるとXSS危険
    - 大量追加時はテンプレート化すると管理しやすい
    - Reactでは通常使わず JSXで描画する

    ❌ 危険例
    \`\`\`js
    box.insertAdjacentHTML(
        "beforeend",
        userInput
    );
    \`\`\`
`);