import dedent from "dedent";

export const detail = dedent(`
    **ユーザーの入力やデータをサーバーへ送る**

    #### 基本コード
    \`\`\`js
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "/api/user");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
        console.log("送信成功");
    };

    xhr.send(JSON.stringify({
        name: "Taro",
        age: 20
    }));
    \`\`\`

    ---

    #### フォーム送信
    お問い合わせ・ログイン・登録
    \`\`\`html
    <input id="name" />
    <button id="send">送信</button>
    \`\`\`

    \`\`\`js
    const btn = document.querySelector("#send");

    btn.addEventListener("click", () => {
        const name = document.querySelector("#name").value;

        const xhr = new XMLHttpRequest();

        xhr.open("POST", "/api/contact");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = () => {
                alert("送信完了");
        };

        xhr.send(JSON.stringify({ name }));
    });
    \`\`\`

    ---

    #### ログイン処理 (メール + パスワード送信)
    \`\`\`js
    xhr.send(JSON.stringify({
        email: "test@example.com",
        password: "123456"
    }));
    \`\`\`

    ---

    #### データ登録（CRUD）
    商品登録・投稿・コメント
    \`\`\`js
    xhr.send(JSON.stringify({
        title: "新商品",
        price: 1000
    }));
    \`\`\`

    ---

    #### ファイルアップロード
    画像・動画アップロード
    \`\`\`js
    const formData = new FormData();
    formData.append("file", file);

    xhr.send(formData);
    \`\`\`
    👉 この場合はContent-Type不要

    ---

    #### よく使うデータ形式
    **1. JSON（最も多い）**
    \`\`\`js
    // 「JSON形式のデータです」とサーバーに伝える
    xhr.setRequestHeader("Content-Type", "application/json");

    // オブジェクト → 文字列に変換 (サーバーに送るには文字列にする必要がある)
    xhr.send(JSON.stringify(data));
    \`\`\`


    **2. FormData（ファイル・フォーム）**
    \`\`\`js
    const formData = new FormData();
    formData.append("name", "Taro");

    xhr.send(formData);
    \`\`\`
    Content-Typeは自動設定される


    **3. URLエンコード**
    \`\`\`js
    xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );

    xhr.send("name=Taro&age=20");
    \`\`\`
`);