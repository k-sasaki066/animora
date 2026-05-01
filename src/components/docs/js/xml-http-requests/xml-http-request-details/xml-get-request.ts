import dedent from "dedent";

export const detail = dedent(`
    **サーバーからデータを取得して画面に反映する基本処理**<br />
    \`\`\`txt
    ブラウザ → サーバーにリクエスト(データ（JSONなど）を受け取る)
    \`\`\`

    #### 基本コード
    \`\`\`js
    const xhr = new XMLHttpRequest();

    // どこにリクエストするか
    xhr.open("GET", "/api/users");

    // 成功時の処理
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    };

    // 実行
    xhr.send();
    \`\`\`

    ---

    #### ユーザー一覧表示
    \`\`\`html
    <ul id="userList"></ul>
    \`\`\`

    \`\`\`js
    const list = document.querySelector("#userList");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/users");

    xhr.onload = () => {
        const users = JSON.parse(xhr.responseText);

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            list.appendChild(li);
        });
    };

    xhr.send();
    \`\`\`

    ---

    #### ページ読み込み時にデータ取得
    - トップページ
    - ダッシュボード
    - 管理画面
    \`\`\`js
    window.addEventListener("load", () => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/api/dashboard");

        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            document.querySelector("#title").textContent = data.title;
        };

        xhr.send();
    });
    \`\`\`

    ---

    #### 検索・フィルタ
    - 検索ボックス
    - カテゴリ絞り込み
    \`\`\`js
    input.addEventListener("input", () => {
        const keyword = input.value;

        const xhr = new XMLHttpRequest();
        xhr.open("GET", \`/api/search?q=\${keyword}\`);

        xhr.onload = () => {
            const results = JSON.parse(xhr.responseText);
            console.log(results);
        };

        xhr.send();
    });
    \`\`\`

    ---

    #### ボタン押下でデータ取得
    - 「もっと見る」
    - ページネーション
    - 詳細表示
    \`\`\`js
    button.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/api/more");

        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
        };

        xhr.send();
    });
    \`\`\`

    ---

    #### エラー対応
    \`\`\`js
    xhr.onerror = () => {
        console.log("通信エラー");
    };
    \`\`\`
`);