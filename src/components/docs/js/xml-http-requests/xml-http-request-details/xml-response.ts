import dedent from "dedent";

export const detail = dedent(`
    **サーバーから受け取るデータの形式を指定**

    #### なぜ必要？
    ##### 指定しない場合 👉 毎回パースが必要
    \`\`\`txt
    xhr.responseText // ← すべて文字列
    \`\`\`

    ##### 指定すると 👉 そのまま使える
    \`\`\`txt
    xhr.response // ← 自動で変換される
    \`\`\`

    ---

    #### 主なresponseType
    #### 1. json
    ##### 使用場面
    - APIレスポンス
    - ユーザー情報取得
    - 一覧データ取得

    ##### 例
    \`\`\`js
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "/api/users");
    xhr.responseType = "json";

    xhr.onload = () => {
        const data = xhr.response;

        console.log(data.name);
    };

    xhr.send();
    \`\`\`
    JSON.parse不要

    ---

    #### 2. blob（ファイル系）
    ##### 使用場面
    - 画像ダウンロード
    - PDFダウンロード
    - 動画取得

    ##### 例（画像ダウンロード）
    \`\`\`js
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "/image.jpg");
    xhr.responseType = "blob";

    xhr.onload = () => {
        const blob = xhr.response;

        const url = URL.createObjectURL(blob);

        const img = document.createElement("img");
        img.src = url;

        document.body.appendChild(img);
    };

    xhr.send();
    \`\`\`

    ##### 例（ファイル保存）
    \`\`\`jsw
    const a = document.createElement("a");
    a.href = URL.createObjectURL(xhr.response);
    a.download = "file.pdf";
    a.click();
    \`\`\`

    ---

    #### 3. arraybuffer
    ##### 使用場面
    - 音声処理
    - バイナリ解析
    - 画像加工

    ##### 例（音声）
    \`\`\`js
    xhr.responseType = "arraybuffer";

    xhr.onload = () => {
        const buffer = xhr.response;
        console.log(buffer);
    };
    \`\`\`
    👉 Web Audio APIなどで使う

    ---

    #### 4. document（HTML取得）
    ##### 使用場面
    - スクレイピング的処理
    - HTML解析

    ##### 例
    \`\`\`js
    xhr.responseType = "document";

    xhr.onload = () => {
        const doc = xhr.response;

        const title = doc.querySelector("title");
        console.log(title.textContent);
    };
    \`\`\`

    ---

    #### 5. デフォルト（文字列）
    ##### 使用場面
    - 簡単なテキスト
    - HTMLそのまま取得

    ##### 例
    \`\`\`js
    xhr.onload = () => {
        console.log(xhr.responseText);
    };
    \`\`\`

    #### 使い分け
    \`\`\`txt
    API → json
    画像/動画 → blob
    音声/解析 → arraybuffer
    HTML → document
    \`\`\`
`);