import dedent from "dedent";

export const detail = dedent(`
    既存の要素を、新しい要素へ丸ごと差し替える処理<br />
    テキスト変更ではなく **HTML要素そのものを入れ替える** ため、
    見た目・属性・構造・イベント対象までまとめて変更できる

    #### 使用場面
    - 編集モード切替
    - ボタン切替
    - ローディング → 完了表示
    - 画像 → 動画切替
    - 空状態 → データ表示
    - ログイン前 → ログイン後UI変更

    #### 基本構文
    \`\`\`js
    oldElement.replaceWith(newElement);
    \`\`\`
    oldElement を削除し、その場所へ newElement を挿入する。

    ---

    #### 基本例（ボタン置き換え）
    \`\`\`html
    <button id="loginBtn">ログイン</button>
    \`\`\`

    \`\`\`js
    const oldBtn = document.querySelector("#loginBtn");

    const newBtn = document.createElement("button");
    newBtn.textContent = "ログアウト";

    oldBtn.replaceWith(newBtn);
    \`\`\`

    実行結果
    \`\`\`html
    <button>ログアウト</button>
    \`\`\`

    ---

    #### 編集モード切替
    表示用テキストを input に変える

    \`\`\`html
    <p id="name">田中 太郎</p>
    \`\`\`

    \`\`\`js
    const name = document.querySelector("#name");

    const input = document.createElement("input");
    input.value = name.textContent;

    name.replaceWith(input);
    \`\`\`

    使用場面
    - プロフィール編集
    - インライン編集
    - タイトル変更UI

    ---

    #### ローディング置き換え
    \`\`\`html
    <div id="loading">Loading...</div>
    \`\`\`

    \`\`\`js
    const loading = document.querySelector("#loading");

    const result = document.createElement("div");
    result.textContent = "データ取得完了";

    loading.replaceWith(result);
    \`\`\`

    使用場面
    - API取得完了
    - 画像読み込み完了
    - 非同期通信UI更新

    ---

    #### 画像 → 動画
    \`\`\`js
    const img = document.querySelector("img");

    const video = document.createElement("video");
    video.src = "/movie.mp4";
    video.controls = true;

    img.replaceWith(video);
    \`\`\`

    ---

    #### 文字列でも置換できる
    \`\`\`js
    oldBox.replaceWith("完了しました");
    \`\`\`
    テキストノードに置き換わる

    ---

    #### ⚠️ 注意点
    - 古い要素はDOMから消える
    - 古い要素に付いていたイベントも消える
    - 再利用したいなら変数保持しておく
    - querySelectorし直す必要がある場合もある

    ---

    #### style変更との違い
    style変更 → 同じ要素を見た目だけ変更
    \`\`\`js
    box.style.display = "none";
    \`\`\`

    replaceWith → 要素自体を別物に変更
    \`\`\`js
    box.replaceWith(newBox);
    \`\`\`
`);