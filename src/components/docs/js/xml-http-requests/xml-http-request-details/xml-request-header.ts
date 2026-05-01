import dedent from "dedent";

export const detail = dedent(`
    リクエストヘッダーとは、 **サーバーに送る「追加情報」**<br />
    「どんなデータか」「誰が送っているか」などを伝える
    \`\`\`js
    xhr.setRequestHeader("Content-Type", "application/json");
    \`\`\`

    #### 基本の書き方
    \`\`\`js
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "/api");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify({ name: "Taro" }));
    \`\`\`

    #### 何ができる？
    - データ形式を指定
    - 認証情報を送る
    - APIキーを渡す
    - カスタム情報を追加

    ---

    #### Content-Typeとは？
    このデータは何の形式か」を伝えるHTTPヘッダー<br />
    サーバーとブラウザが「データの種類」を理解するために使う

    #### なぜ必要？
    もしContent-Typeがないと...
    \`\`\`txt
    サーバー「これ何？」
    ブラウザ「どう表示すればいい？」
    \`\`\`
    → どちらも困る

    ##### 使用場面
    - JSON送信
    - API通信
    - フォーム送信

    ---

    ##### よくある種類
    **1. application/json**<br />
    JavaScriptオブジェクトをJSON文字列にして送る
    \`\`\`js
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify({
        name: "Taro",
        age: 20
    }));
    \`\`\`
    サーバー側イメージ
    \`\`\`js
    {
        "name": "Taro",
        "age": 20
    }
    \`\`\`

    ---

    **2. application/x-www-form-urlencoded**<br />
    key=value&key=value の形式（昔のフォーム形式）

    \`\`\`js
    xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );

    xhr.send("name=Taro&age=20");
    \`\`\`

    サーバー側
    \`\`\`js
    name=Taro&age=20
    \`\`\`

    ---

    **3. multipart/form-data**<br />
    ファイルを含めて送れる形式
    \`\`\`js
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", "Taro");

    xhr.send(formData);
    \`\`\`
`);