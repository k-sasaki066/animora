import dedent from "dedent";

export const detail = dedent(`
    要素の属性値を変更・追加する<br />
    JavaScriptからタグの設定情報を書き換えることで、
    表示内容・リンク先・入力制御などを動的に変更できる

    #### 使用場面
    - 画像URL変更（src）
    - リンク先変更（href）
    - 新しいタブで開く（target）
    - 入力欄制御（disabled / readonly）
    - class / id の付与
    - data属性の追加

    #### 基本構文
    \`\`\`js
    element.setAttribute("属性名", "値");
    \`\`\`

    ---

    #### 画像を差し替える
    \`\`\`html
    <img id="photo" src="/cat.jpg">
    \`\`\`

    \`\`\`js
    const img = document.querySelector("#photo");

    img.setAttribute("src", "/dog.jpg");
    \`\`\`

    実行後
    \`\`\`html
    <img id="photo" src="/dog.jpg">
    \`\`\`
    👉 商品画像切替・ギャラリーでよく使う

    ---

    #### リンク先変更
    \`\`\`html
    <a id="link" href="/about">会社概要</a>
    \`\`\`

    \`\`\`js
    const link = document.querySelector("#link");

    link.setAttribute("href", "/contact");
    \`\`\`
    👉 キャンペーンページ切替・ABテスト

    ---

    #### target追加（別タブで開く）
    \`\`\`js
    link.setAttribute("target", "_blank");
    \`\`\`
    👉 外部サイトリンクでよく使う

    ---

    #### ボタン無効化
    \`\`\`html
    <button id="submit">送信</button>
    \`\`\`

    \`\`\`js
    const btn = document.querySelector("#submit");

    btn.setAttribute("disabled", "");
    \`\`\`
    👉 二重送信防止

    ---

    #### data属性追加
    \`\`\`js
    btn.setAttribute("data-id", "15");
    \`\`\`

    \`\`\`html
    <button data-id="15">
    \`\`\`
    👉 商品ID・投稿ID管理

    ---

    #### setAttribute と プロパティ代入の違い
    \`\`\`js
    img.setAttribute("src", "/dog.jpg");
    img.src = "/dog.jpg";
    \`\`\`

    どちらも変更できるが、

    - HTML属性として扱いたい → setAttribute()
    - JSで自然に扱いたい → プロパティ代入

    \`\`\`js
    img.src = "/dog.jpg";
    link.href = "/contact";
    button.disabled = true;
    \`\`\`

    ---

    #### 注意点

    ##### disabled属性
    \`\`\`js
    btn.setAttribute("disabled", "");
    \`\`\`
    値より「属性が存在するか」で判定される


    ##### 存在しない要素
    \`\`\`js
    const img = document.querySelector("#photo");
    \`\`\`
    要素が無いと null になるため注意
`);